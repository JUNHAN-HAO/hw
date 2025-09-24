# 项目任务管理系统前端

基于React开发的智能化项目任务管理平台前端界面，采用现代科技风格设计，支持PC端和移动端自适应。

## 功能特性

### 🚀 核心功能
- **项目管理** - 创建、编辑、跟踪项目进度
- **任务管理** - 任务分配、状态更新、进度跟踪  
- **数据仪表板** - 实时项目数据可视化
- **团队协作** - 成员管理、权限控制
- **报表分析** - 项目效率和数据分析

### 🎨 设计特色
- **科技风格** - 深蓝色调配霓虹蓝强调色
- **响应式设计** - 完美适配PC、平板、手机端
- **现代化UI** - 卡片式布局、渐变效果、微交互
- **数据可视化** - 图表展示项目进度和统计数据

### 📱 技术栈
- **React 18** - 现代化前端框架
- **React Router** - 单页面应用路由
- **Lucide React** - 现代化图标库
- **Recharts** - 数据可视化图表
- **CSS3** - 现代化样式和动画

## 快速开始

### 环境要求
- Node.js 16.0 或更高版本
- npm 或 yarn 包管理器

### 安装依赖
```bash
npm install
# 或
yarn install
```

### 启动开发服务器
```bash
npm start
# 或
yarn start
```

应用将在 [http://localhost:3000](http://localhost:3000) 启动

### 构建生产版本
```bash
npm run build
# 或
yarn build
```

## 项目结构

```
src/
├── components/           # 组件目录
│   ├── Layout/          # 布局组件
│   │   ├── Header.js    # 顶部导航
│   │   ├── Header.css
│   │   ├── Sidebar.js   # 侧边栏
│   │   └── Sidebar.css
│   └── Pages/           # 页面组件
│       ├── Dashboard.js # 仪表板
│       ├── Dashboard.css
│       ├── Projects.js  # 项目管理
│       ├── Projects.css
│       ├── Tasks.js     # 任务管理
│       ├── Reports.js   # 数据报表
│       └── Settings.js  # 系统设置
├── App.js               # 主应用组件
├── App.css             # 应用样式
├── index.js            # 应用入口
└── index.css           # 全局样式
```

## 页面功能

### 📊 仪表板 (Dashboard)
- 项目统计概览
- 进度趋势图表
- 任务状态分布
- 最近项目列表
- 即将到期任务

### 📁 项目管理 (Projects)
- 项目列表展示（网格/列表视图）
- 项目搜索和筛选
- 项目进度跟踪
- 团队成员管理
- 项目标签分类

### ✅ 任务管理 (Tasks)
- 任务列表和详情
- 任务状态管理
- 优先级设置
- 进度更新
- 任务分配

### 📈 数据报表 (Reports)
- 项目进度报表
- 任务分布统计
- 效率分析
- 数据导出

### ⚙️ 系统设置 (Settings)
- 个人资料管理
- 通知设置
- 安全配置
- 界面主题

## 响应式设计

### 断点设置
- **桌面端**: > 1024px
- **平板端**: 768px - 1024px  
- **手机端**: < 768px

### 适配特性
- 侧边栏在移动端自动收缩为抽屉式
- 表格和卡片在小屏幕上优化布局
- 字体大小和间距响应式调整
- 触摸友好的按钮和交互元素

## 主题色彩

```css
/* 主色调 */
--primary-bg: #0a0f1c;      /* 深蓝背景 */
--secondary-bg: #1a1f2e;    /* 次级背景 */
--card-bg: #242938;         /* 卡片背景 */

/* 强调色 */
--accent-primary: #00d4ff;   /* 霓虹蓝 */
--accent-secondary: #0099cc; /* 深蓝 */

/* 状态色 */
--success: #00ff88;         /* 成功绿 */
--warning: #ffaa00;         /* 警告橙 */
--error: #ff4757;           /* 错误红 */
```

## 开发说明

### 组件规范
- 使用函数式组件和Hooks
- 组件文件采用PascalCase命名
- 每个组件配套对应的CSS文件
- 使用CSS变量保持样式一致性

### 样式规范
- 使用CSS Grid和Flexbox布局
- 遵循BEM命名规范
- 响应式优先的设计原则
- 使用CSS变量管理主题色彩

### 状态管理
- 使用React内置useState和useContext
- 组件间通过props传递数据
- 复杂状态可考虑引入Redux Toolkit

## 浏览器兼容

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 许可证

MIT License

## 贡献

欢迎提交Issue和Pull Request来改进项目！
