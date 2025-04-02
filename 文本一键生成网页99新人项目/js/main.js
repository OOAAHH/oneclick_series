// 书籍数据
let bookData = {
    title: "99%的新人，没用心做好的50件事",
    author: "岩濑大辅",
    chapters: [
        {
            id: 1,
            title: "第一章：成长的五个阶段",
            content: `<p>在职场中，每个人都会经历不同的成长阶段。理解这些阶段对于新人尤为重要。</p>
                     <p>职场成长的五个阶段分别是：</p>
                     <ol>
                         <li><strong>基础阶段</strong>：掌握基本技能，适应工作环境</li>
                         <li><strong>进阶阶段</strong>：开始独立完成工作，形成自己的工作方式</li>
                         <li><strong>熟练阶段</strong>：能够处理复杂问题，成为团队中的骨干</li>
                         <li><strong>带领阶段</strong>：开始带领团队，指导新人成长</li>
                         <li><strong>创新阶段</strong>：能够创新工作方法，推动团队和公司发展</li>
                     </ol>
                     <blockquote>
                         "新人最常见的错误是急于求成，跳过基础阶段直接追求高级技能，最终导致能力结构不稳定。"
                     </blockquote>
                     <div class="tip-box">
                         <p>在基础阶段，最重要的是培养正确的工作习惯和思维方式，而不仅仅是技术能力。</p>
                     </div>`
        },
        {
            id: 2,
            title: "第二章：职场沟通的艺术",
            content: `<p>沟通是职场中最重要的技能之一。许多新人在工作中遇到的问题，往往不是因为能力不足，而是沟通不畅。</p>
                     <h3>有效沟通的三个层次</h3>
                     <p>职场沟通可以分为三个层次：</p>
                     <ul>
                         <li><strong>信息传递</strong>：确保信息准确无误地传递给对方</li>
                         <li><strong>意图表达</strong>：让对方理解你的想法和目的</li>
                         <li><strong>情感共鸣</strong>：在沟通中建立情感连接，获得支持和认同</li>
                     </ul>
                     <div class="interactive-section">
                         <h4>沟通情境练习</h4>
                         <p>想象一下，你需要向上级请求更多的资源来完成一个项目。你会如何组织你的沟通内容？</p>
                         <p>提示：先说明项目价值，再具体分析所需资源和预期成果，最后请求支持。</p>
                     </div>
                     <div class="tags">
                         <span class="tag">沟通技巧</span>
                         <span class="tag">职场技能</span>
                         <span class="tag">新人提升</span>
                     </div>`
        },
        {
            id: 3,
            title: "第三章：如何高效学习",
            content: `<p>在职场中，学习能力往往比已有知识更重要。高效的学习方法可以帮助新人快速成长。</p>
                     <h3>职场学习的金字塔模型</h3>
                     <p>从底层到顶层依次是：</p>
                     <ol>
                         <li><strong>基础知识</strong>：行业和专业基础知识</li>
                         <li><strong>方法技能</strong>：解决问题的方法和技能</li>
                         <li><strong>经验积累</strong>：通过实践积累的经验</li>
                         <li><strong>思维方式</strong>：分析问题和解决问题的思维模式</li>
                         <li><strong>价值观</strong>：对工作和职业的核心价值判断</li>
                     </ol>
                     <blockquote>
                         "学习不仅仅是积累知识，更是构建自己的思维模式和价值体系。"
                     </blockquote>
                     <p>高效学习的关键在于：</p>
                     <ul>
                         <li>主动思考而非被动接受</li>
                         <li>实践应用而非单纯记忆</li>
                         <li>教授他人来加深理解</li>
                         <li>持续复盘总结经验</li>
                     </ul>`
        },
        {
            id: 4,
            title: "第四章：抓住重点的工作方法",
            content: `<p>在职场中，能够抓住重点的人往往能够事半功倍。新人常犯的错误是忙于处理各种事务，却忽略了真正重要的工作。</p>
                     <h3>二八法则在工作中的应用</h3>
                     <p>二八法则（帕累托法则）告诉我们，80%的成果来自20%的投入。因此，识别那关键的20%至关重要。</p>
                     <div class="tip-box">
                         <p>每天开始工作前，问自己：今天哪几件事如果完成了，我就会认为今天是成功的？</p>
                     </div>
                     <h3>分清工作的四个象限</h3>
                     <p>根据重要性和紧急性，工作可以分为四个象限：</p>
                     <ul>
                         <li><strong>重要且紧急</strong>：立即处理</li>
                         <li><strong>重要不紧急</strong>：规划时间处理，这类工作往往最具价值</li>
                         <li><strong>紧急不重要</strong>：尽可能委派或简化处理</li>
                         <li><strong>不紧急不重要</strong>：尽量避免或减少时间投入</li>
                     </ul>
                     <p>新人常见的错误是被紧急但不重要的事情占据了大量时间，而忽略了真正重要的工作。</p>`
        },
        {
            id: 5,
            title: "第五章：建立良好的职场人际关系",
            content: `<p>在职场中，人际关系的好坏往往决定了一个人能走多远。良好的人际关系不仅能让工作更顺利，还能为职业发展创造更多机会。</p>
                     <h3>职场人际关系的三个层次</h3>
                     <ol>
                         <li><strong>基础层</strong>：建立基本信任，相互尊重</li>
                         <li><strong>合作层</strong>：形成高效合作，互相支持</li>
                         <li><strong>共赢层</strong>：建立长期联系，共同成长</li>
                     </ol>
                     <blockquote>
                         "在职场中，真正的人脉不是你认识多少人，而是有多少人愿意在你需要时伸出援手。"
                     </blockquote>
                     <h3>构建良好人际关系的方法</h3>
                     <ul>
                         <li>真诚待人，不虚伪做作</li>
                         <li>学会主动提供价值和帮助</li>
                         <li>保持积极的态度和情绪</li>
                         <li>尊重他人的时间和工作方式</li>
                         <li>善于倾听，理解他人需求</li>
                     </ul>
                     <div class="interactive-section">
                         <h4>人际关系地图</h4>
                         <p>试着绘制你的职场人际关系地图，标注出每个人与你的关系类型和强度，以及可能的互助方式。</p>
                     </div>`
        }
    ]
};

// 获取DOM元素
const startReadingBtn = document.getElementById('startReadingBtn');
const viewContentsBtn = document.getElementById('viewContentsBtn');
const importContentBtn = document.getElementById('importContentBtn');
const tableOfContents = document.getElementById('tableOfContents');
const chaptersSection = document.getElementById('chaptersSection');
const introSection = document.getElementById('introSection');
const importSection = document.getElementById('importSection');
const scrollTopBtn = document.getElementById('scrollTopBtn');
const extractBtn = document.getElementById('extractBtn');
const fileInput = document.getElementById('fileInput');
const extractStatus = document.getElementById('extractStatus');
const backToIntroBtn = document.getElementById('backToIntroBtn');

// 当前章节索引
let currentChapterIndex = 0;

// 初始化目录
function initializeTableOfContents() {
    const tocList = document.createElement('div');
    tocList.className = 'toc-list';
    
    bookData.chapters.forEach(chapter => {
        const tocItem = document.createElement('a');
        tocItem.href = '#';
        tocItem.className = 'toc-item';
        tocItem.textContent = chapter.title;
        tocItem.addEventListener('click', (e) => {
            e.preventDefault();
            showChapter(chapter.id);
        });
        
        tocList.appendChild(tocItem);
    });
    
    tableOfContents.innerHTML = `<h2>目录</h2>`;
    tableOfContents.appendChild(tocList);
    
    // 添加阅读进度信息
    const progressInfo = document.createElement('div');
    progressInfo.className = 'progress-info';
    progressInfo.innerHTML = `
        <div class="progress-bar">
            <div class="progress" id="readingProgress" style="width: 0%"></div>
        </div>
        <div class="progress-text">
            <span>总进度</span>
            <span id="progressPercentage">0%</span>
        </div>
    `;
    
    tableOfContents.appendChild(progressInfo);
}

// 显示章节内容
function showChapter(chapterId) {
    const chapter = bookData.chapters.find(c => c.id === chapterId);
    if (!chapter) return;
    
    // 更新URL参数
    window.history.pushState({}, '', `?chapter=${chapterId}`);
    
    // 隐藏所有区域，显示章节
    hideAllSections();
    chaptersSection.classList.remove('hidden');
    
    // 上一章和下一章按钮
    const prevChapter = chapterId > 1 ? chapterId - 1 : null;
    const nextChapter = chapterId < bookData.chapters.length ? chapterId + 1 : null;
    
    // 设置章节内容
    chaptersSection.innerHTML = `
        <div class="chapter fade-in">
            <h2 class="chapter-title">${chapter.title}</h2>
            <div class="chapter-content">
                ${chapter.content}
            </div>
            <div class="chapter-navigation">
                ${prevChapter ? `<button id="prevChapterBtn"><i class="fas fa-arrow-left"></i> 上一章</button>` : `<button disabled><i class="fas fa-arrow-left"></i> 上一章</button>`}
                <button id="backToTocBtn"><i class="fas fa-list"></i> 返回目录</button>
                ${nextChapter ? `<button id="nextChapterBtn">下一章 <i class="fas fa-arrow-right"></i></button>` : `<button disabled>下一章 <i class="fas fa-arrow-right"></i></button>`}
            </div>
        </div>
    `;
    
    // 返回目录按钮
    const backToTocBtn = document.getElementById('backToTocBtn');
    backToTocBtn.addEventListener('click', showTableOfContents);
    
    // 前后章节导航
    if (prevChapter) {
        const prevChapterBtn = document.getElementById('prevChapterBtn');
        prevChapterBtn.addEventListener('click', () => showChapter(prevChapter));
    }
    
    if (nextChapter) {
        const nextChapterBtn = document.getElementById('nextChapterBtn');
        nextChapterBtn.addEventListener('click', () => showChapter(nextChapter));
    }
    
    // 标记此章节为已读
    markChapterAsRead(chapterId);
    
    // 滚动到顶部
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 显示目录
function showTableOfContents() {
    hideAllSections();
    tableOfContents.classList.remove('hidden');
    
    // 更新URL参数
    window.history.pushState({}, '', window.location.pathname);
    
    // 滚动到顶部
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 显示导入页面
function showImportSection() {
    hideAllSections();
    importSection.classList.remove('hidden');
    
    // 滚动到顶部
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 隐藏所有主要内容区域
function hideAllSections() {
    introSection.classList.add('hidden');
    tableOfContents.classList.add('hidden');
    chaptersSection.classList.add('hidden');
    importSection.classList.add('hidden');
}

// 显示主页面
function showIntroSection() {
    hideAllSections();
    introSection.classList.remove('hidden');
    
    // 滚动到顶部
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 创建滚动到顶部按钮
function createScrollTopButton() {
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // 监听滚动事件
    window.addEventListener('scroll', handleScroll);
}

// 处理滚动事件
function handleScroll() {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
}

// 更新书籍数据
function updateBookData(newData) {
    if (newData && newData.chapters && newData.chapters.length > 0) {
        // 更新标题和作者（如果提供）
        if (newData.title) {
            bookData.title = newData.title;
            document.title = newData.title;
            document.querySelector('.title').textContent = newData.title;
        }
        
        if (newData.author) {
            bookData.author = newData.author;
            document.querySelector('.author').textContent = `作者：${newData.author}`;
        }
        
        // 更新章节
        bookData.chapters = newData.chapters;
        
        // 重置阅读进度
        readChapters = [];
        localStorage.removeItem('readChapters');
        
        // 重新初始化目录
        initializeTableOfContents();
        
        return true;
    }
    
    return false;
}

// 处理文件导入
function handleFileImport() {
    if (!fileInput.files || fileInput.files.length === 0) {
        extractStatus.textContent = "请先选择文件";
        extractStatus.className = "status-message error";
        return;
    }
    
    const file = fileInput.files[0];
    extractStatus.textContent = "正在提取内容...";
    extractStatus.className = "status-message";
    
    if (file.name.endsWith('.xml')) {
        const extractor = new ContentExtractor();
        extractStatus.innerHTML = `<div class="loading-spinner"></div> 正在解析文件，请稍候...`;
        
        extractor.extractFromXML(file)
            .then(data => {
                if (data.chapters.length === 0) {
                    extractStatus.textContent = "未能从文件中提取到章节内容";
                    extractStatus.className = "status-message error";
                    return;
                }
                
                if (updateBookData(data)) {
                    // 显示成功信息和章节列表
                    let chaptersList = '';
                    data.chapters.forEach((chapter, index) => {
                        if (index < 5 || index === data.chapters.length - 1) {
                            chaptersList += `<li>${chapter.title}</li>`;
                        } else if (index === 5) {
                            chaptersList += `<li>...</li>`;
                        }
                    });
                    
                    extractStatus.innerHTML = `
                        <div class="success-icon"><i class="fas fa-check-circle"></i></div>
                        <p>提取成功：共 ${data.chapters.length} 个章节</p>
                        <div class="chapters-preview">
                            <p>章节预览:</p>
                            <ul>${chaptersList}</ul>
                        </div>
                    `;
                    extractStatus.className = "status-message success";
                    
                    // 延迟后返回目录页
                    setTimeout(() => {
                        showTableOfContents();
                    }, 2000);
                } else {
                    extractStatus.textContent = "提取内容无效，请检查文件格式";
                    extractStatus.className = "status-message error";
                }
            })
            .catch(error => {
                extractStatus.textContent = `提取失败：${error}`;
                extractStatus.className = "status-message error";
            });
    } else if (file.name.endsWith('.docx')) {
        extractStatus.innerHTML = `
            <div class="warning-icon"><i class="fas fa-exclamation-triangle"></i></div>
            <p>DOCX格式暂不支持直接提取</p>
            <p>请将文件另存为XML格式后再尝试</p>
        `;
        extractStatus.className = "status-message warning";
    } else {
        extractStatus.innerHTML = `
            <div class="error-icon"><i class="fas fa-times-circle"></i></div>
            <p>不支持的文件格式</p>
            <p>请选择XML文件</p>
        `;
        extractStatus.className = "status-message error";
    }
}

// 阅读进度相关
let readChapters = [];

// 标记章节为已读
function markChapterAsRead(chapterId) {
    if (!readChapters.includes(chapterId)) {
        readChapters.push(chapterId);
        updateReadingProgress();
    }
}

// 更新阅读进度
function updateReadingProgress() {
    const totalChapters = bookData.chapters.length;
    const readCount = readChapters.length;
    const progressPercentage = Math.round((readCount / totalChapters) * 100);
    
    // 更新进度条
    const progressBar = document.getElementById('readingProgress');
    const progressText = document.getElementById('progressPercentage');
    
    if (progressBar && progressText) {
        progressBar.style.width = `${progressPercentage}%`;
        progressText.textContent = `${progressPercentage}%`;
    }
    
    // 保存进度到本地存储
    localStorage.setItem('readChapters', JSON.stringify(readChapters));
}

// 从本地存储加载阅读进度
function loadReadingProgress() {
    const savedProgress = localStorage.getItem('readChapters');
    if (savedProgress) {
        readChapters = JSON.parse(savedProgress);
        updateReadingProgress();
    }
}

// 页面加载
document.addEventListener('DOMContentLoaded', () => {
    // 初始化目录
    initializeTableOfContents();
    
    // 创建滚动到顶部按钮
    createScrollTopButton();
    
    // 加载阅读进度
    loadReadingProgress();
    
    // 处理URL参数
    const urlParams = new URLSearchParams(window.location.search);
    const chapterId = urlParams.get('chapter');
    
    if (chapterId) {
        showChapter(parseInt(chapterId));
    }
    
    // 开始阅读按钮
    startReadingBtn.addEventListener('click', () => {
        showChapter(1); // 显示第一章
    });
    
    // 查看目录按钮
    viewContentsBtn.addEventListener('click', () => {
        showTableOfContents();
    });
    
    // 导入内容按钮
    importContentBtn.addEventListener('click', () => {
        showImportSection();
    });
    
    // 返回主页按钮
    backToIntroBtn.addEventListener('click', () => {
        showIntroSection();
    });
    
    // 提取内容按钮
    extractBtn.addEventListener('click', handleFileImport);
}); 