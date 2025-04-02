# RNAcentre 研究中心网站

这是一个基于RNAcentre Handbook文档内容创建的美观中文可视化网站，展示了RNAcentre研究中心的愿景、角色与期望、计算资源、会议安排和实验室信息等内容。

## 如何查看网站

有几种方法可以查看此网站：

### 方法1：直接打开HTML文件

最简单的方法是直接在浏览器中打开`index.html`文件：

1. 导航到网站文件夹：`cd rnacentre-website`
2. 双击`index.html`文件，或使用浏览器打开它

### 方法2：使用Python启动简单的Web服务器

如果您安装了Python，可以使用以下命令启动一个简单的HTTP服务器：

```bash
# 导航到网站文件夹
cd rnacentre-website

# Python 3
python -m http.server 8000

# 或 Python 2
python -m SimpleHTTPServer 8000
```

然后在浏览器中访问：`http://localhost:8000`

### 方法3：使用Node.js的http-server（如果已安装Node.js）

如果您已安装Node.js，可以全局安装http-server并使用它：

```bash
# 安装http-server（只需执行一次）
npm install -g http-server

# 导航到网站文件夹
cd rnacentre-website

# 启动服务器
http-server -p 8000
```

然后在浏览器中访问：`http://localhost:8000`

## 项目结构

```
rnacentre-website/
├── index.html       # 主页面HTML
├── css/
│   └── style.css    # 样式表
├── js/
│   └── main.js      # JavaScript功能
└── images/          # 图片文件夹（如有）
```

## 技术栈

- HTML5
- CSS3（使用Flex和Grid布局）
- JavaScript（用于交互效果）
- 响应式设计（适配桌面和移动设备）

## 网站功能

- 展示RNAcentre研究中心的愿景和目标
- 展示各种角色的职责和期望
- 介绍可用的计算资源
- 说明会议安排和工作流程
- 提供广州实验室的相关信息 