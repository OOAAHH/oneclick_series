/**
 * 内容提取工具 - 用于从XML或DOCX文件中提取内容到JavaScript数据结构
 */

class ContentExtractor {
    constructor() {
        this.bookData = {
            title: "",
            author: "",
            chapters: []
        };
    }

    /**
     * 从XML文件中提取内容
     * @param {File} file - XML文件对象
     * @returns {Promise} 包含提取结果的Promise
     */
    extractFromXML(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            
            reader.onload = (e) => {
                try {
                    const parser = new DOMParser();
                    const xmlDoc = parser.parseFromString(e.target.result, "text/xml");
                    
                    // 提取标题和作者
                    this.bookData.title = this.extractTitleFromXML(xmlDoc) || "99%的新人，没用心做好的50件事";
                    this.bookData.author = this.extractAuthorFromXML(xmlDoc) || "岩濑大辅";
                    
                    // 提取章节
                    this.bookData.chapters = this.extractChaptersFromXML(xmlDoc);
                    
                    resolve(this.bookData);
                } catch (error) {
                    reject(`解析XML失败: ${error.message}`);
                }
            };
            
            reader.onerror = () => reject("读取文件失败");
            reader.readAsText(file);
        });
    }

    /**
     * 从XML中提取标题
     * @param {Document} xmlDoc - XML文档对象
     * @returns {string} 提取的标题
     */
    extractTitleFromXML(xmlDoc) {
        // 尝试从不同的可能位置提取标题
        const titleElements = [
            xmlDoc.querySelector("title"),
            xmlDoc.querySelector("w\\:title"),
            xmlDoc.querySelector("dc\\:title"),
            xmlDoc.querySelector("cp\\:coreProperties > dc\\:title")
        ];
        
        for (const el of titleElements) {
            if (el && el.textContent) {
                return el.textContent.trim();
            }
        }
        
        return "";
    }

    /**
     * 从XML中提取作者信息
     * @param {Document} xmlDoc - XML文档对象
     * @returns {string} 提取的作者
     */
    extractAuthorFromXML(xmlDoc) {
        // 尝试从不同的可能位置提取作者
        const authorElements = [
            xmlDoc.querySelector("author"),
            xmlDoc.querySelector("w\\:author"),
            xmlDoc.querySelector("dc\\:creator"),
            xmlDoc.querySelector("cp\\:coreProperties > dc\\:creator")
        ];
        
        for (const el of authorElements) {
            if (el && el.textContent) {
                return el.textContent.trim();
            }
        }
        
        return "";
    }

    /**
     * 从XML中提取章节内容
     * @param {Document} xmlDoc - XML文档对象
     * @returns {Array} 章节数组
     */
    extractChaptersFromXML(xmlDoc) {
        const chapters = [];
        let currentChapter = null;
        let chapterId = 1;
        let foundBookmarkEnd = false;
        
        // 将XML转换为字符串，方便进行文本分析
        const xmlString = new XMLSerializer().serializeToString(xmlDoc);
        
        // 查找段落元素
        const paragraphs = xmlDoc.querySelectorAll("w\\:p, p");
        
        for (let i = 0; i < paragraphs.length; i++) {
            const p = paragraphs[i];
            
            // 检查是否包含Word.Bookmark.End标记
            const hasBookmarkEnd = p.innerHTML && p.innerHTML.includes('Word.Bookmark.End');
            
            // 获取段落文本和样式
            const style = this.getParagraphStyle(p);
            const text = this.getParagraphText(p);
            
            if (!text && !hasBookmarkEnd) continue;
            
            // 检查是否为章节标题
            // 1. 如果前一个段落包含Word.Bookmark.End标记
            // 2. 或者通过样式和文本内容判断
            if (foundBookmarkEnd || this.isChapterTitle(style, text)) {
                // 如果已有章节，保存它
                if (currentChapter) {
                    chapters.push(currentChapter);
                }
                
                // 创建新章节
                currentChapter = {
                    id: chapterId++,
                    title: text,
                    content: ""
                };
                
                foundBookmarkEnd = false;
            } else if (hasBookmarkEnd) {
                // 如果当前段落包含Word.Bookmark.End标记，检查下一个段落是否为标题
                foundBookmarkEnd = true;
                
                // 查看下一个段落是否存在
                if (i + 1 < paragraphs.length) {
                    const nextP = paragraphs[i + 1];
                    const nextStyle = this.getParagraphStyle(nextP);
                    const nextText = this.getParagraphText(nextP);
                    
                    // 如果下一个段落符合标题样式，直接创建新章节
                    if (this.isChapterHeadingStyle(nextStyle)) {
                        if (currentChapter) {
                            chapters.push(currentChapter);
                        }
                        
                        currentChapter = {
                            id: chapterId++,
                            title: nextText,
                            content: ""
                        };
                        
                        // 跳过下一个段落，因为已经处理了
                        i++;
                        foundBookmarkEnd = false;
                    }
                }
            } else if (currentChapter) {
                // 添加段落到当前章节
                currentChapter.content += `<p>${text}</p>`;
            }
        }
        
        // 添加最后一个章节
        if (currentChapter) {
            chapters.push(currentChapter);
        }
        
        // 如果没有找到章节，尝试从XML字符串中直接提取章节
        if (chapters.length === 0) {
            const extractedChapters = this.extractChaptersFromXMLString(xmlString);
            if (extractedChapters.length > 0) {
                return extractedChapters;
            }
            
            // 如果仍然没有找到章节，创建一个默认章节
            chapters.push({
                id: 1,
                title: "第一章",
                content: this.getAllText(xmlDoc)
            });
        }
        
        return chapters;
    }

    /**
     * 从XML字符串中直接提取章节
     * @param {string} xmlString - XML文档字符串
     * @returns {Array} 章节数组
     */
    extractChaptersFromXMLString(xmlString) {
        const chapters = [];
        let chapterId = 1;
        
        // 正则表达式匹配Word.Bookmark.End标记后的章节标题
        const chapterPattern = /w:type="Word\.Bookmark\.End"[^>]*><\/w:[^>]+><w:p[^>]*><w:pPr><w:pStyle[^>]*><\/w:pPr><w:r><w:t>([^<]+)<\/w:t>/g;
        
        let match;
        let lastIndex = 0;
        let content = "";
        
        while ((match = chapterPattern.exec(xmlString)) !== null) {
            const title = match[1];
            const startIndex = match.index;
            
            // 如果有前一个章节的内容，添加到chapters数组
            if (lastIndex > 0) {
                const chapterContent = xmlString.substring(lastIndex, startIndex);
                content = this.convertXmlToHtml(chapterContent);
                
                chapters.push({
                    id: chapterId++,
                    title: title,
                    content: content
                });
            }
            
            lastIndex = startIndex + match[0].length;
        }
        
        // 添加最后一个章节
        if (lastIndex > 0 && lastIndex < xmlString.length) {
            const chapterContent = xmlString.substring(lastIndex);
            content = this.convertXmlToHtml(chapterContent);
            
            chapters.push({
                id: chapterId,
                title: "最后一章",
                content: content
            });
        }
        
        return chapters;
    }

    /**
     * 将XML格式的内容转换为HTML格式
     * @param {string} xmlContent - XML格式的内容
     * @returns {string} HTML格式的内容
     */
    convertXmlToHtml(xmlContent) {
        let html = "";
        
        // 提取段落文本
        const paragraphPattern = /<w:p[^>]*>.*?<w:t>([^<]+)<\/w:t>.*?<\/w:p>/g;
        let match;
        
        while ((match = paragraphPattern.exec(xmlContent)) !== null) {
            const text = match[1];
            html += `<p>${text}</p>`;
        }
        
        return html;
    }

    /**
     * 获取段落样式
     * @param {Element} p - 段落元素
     * @returns {string} 段落样式
     */
    getParagraphStyle(p) {
        // 尝试从不同位置获取样式信息
        const styleEl = p.querySelector("w\\:pStyle, pStyle");
        if (styleEl && styleEl.getAttribute("w:val")) {
            return styleEl.getAttribute("w:val");
        }
        
        // 查找class属性
        if (p.hasAttribute("class")) {
            return p.getAttribute("class");
        }
        
        return "";
    }

    /**
     * 获取段落文本
     * @param {Element} p - 段落元素
     * @returns {string} 段落文本
     */
    getParagraphText(p) {
        // 尝试从不同位置获取文本
        const textEls = p.querySelectorAll("w\\:t, t");
        if (textEls.length > 0) {
            return Array.from(textEls).map(t => t.textContent).join("");
        }
        
        return p.textContent.trim();
    }

    /**
     * 判断是否为章节标题
     * @param {string} style - 段落样式
     * @param {string} text - 段落文本
     * @returns {boolean} 是否为章节标题
     */
    isChapterTitle(style, text) {
        // 基于样式判断
        if (this.isChapterHeadingStyle(style)) {
            return true;
        }
        
        // 基于文本内容判断
        return /^第\s*[一二三四五六七八九十百千万\d]+\s*[章节篇]/.test(text) || 
               /^[一二三四五六七八九十]、/.test(text) ||
               /^[0-9]+\./.test(text) ||
               /^Chapter\s+\d+/i.test(text);
    }
    
    /**
     * 判断样式是否为章节标题样式
     * @param {string} style - 段落样式
     * @returns {boolean} 是否为章节标题样式
     */
    isChapterHeadingStyle(style) {
        const titleStyles = [
            "heading1", "heading2", "Title", "Chapter", 
            "Heading1", "Heading2", "1", "2", "标题1", "标题2"
        ];
        return titleStyles.some(s => style.includes(s));
    }

    /**
     * 获取文档所有文本
     * @param {Document} xmlDoc - XML文档对象
     * @returns {string} HTML格式的文本内容
     */
    getAllText(xmlDoc) {
        const paragraphs = xmlDoc.querySelectorAll("w\\:p, p");
        let content = "";
        
        for (const p of paragraphs) {
            const text = this.getParagraphText(p);
            if (text) {
                content += `<p>${text}</p>`;
            }
        }
        
        return content;
    }

    /**
     * 添加文件选择器到页面
     * @param {Function} callback - 处理提取结果的回调函数
     */
    createFileSelector(callback) {
        // 创建文件选择器UI
        const container = document.createElement("div");
        container.className = "file-selector";
        container.innerHTML = `
            <h3>从文件中提取内容</h3>
            <p>选择Word文档(.docx)或XML文件来自动提取书籍内容</p>
            <input type="file" id="fileInput" accept=".xml,.docx" />
            <button id="extractBtn">提取内容</button>
            <div id="extractStatus"></div>
        `;
        
        document.body.appendChild(container);
        
        // 添加事件监听
        const extractBtn = document.getElementById("extractBtn");
        const fileInput = document.getElementById("fileInput");
        const statusDiv = document.getElementById("extractStatus");
        
        extractBtn.addEventListener("click", () => {
            if (!fileInput.files || fileInput.files.length === 0) {
                statusDiv.textContent = "请先选择文件";
                return;
            }
            
            const file = fileInput.files[0];
            statusDiv.textContent = "正在提取内容...";
            
            if (file.name.endsWith(".xml")) {
                this.extractFromXML(file)
                    .then(data => {
                        statusDiv.textContent = `成功提取内容：${data.chapters.length}个章节`;
                        callback(data);
                    })
                    .catch(error => {
                        statusDiv.textContent = `提取失败：${error}`;
                    });
            } else if (file.name.endsWith(".docx")) {
                statusDiv.textContent = "DOCX格式暂不支持直接提取，请另存为XML格式";
            } else {
                statusDiv.textContent = "不支持的文件格式";
            }
        });
    }
}

// 导出模块
window.ContentExtractor = ContentExtractor; 