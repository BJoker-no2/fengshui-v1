# 中国风水文化资源网站 - 技术方案文档

## 1. 项目概述

基于需求文档，我们将开发一个中国风水文化资源网站，提供风水知识科普、书籍资源、运势测算、家居风水指南、办公风水规划和智能风水诊断等功能。本技术方案采用轻量级全栈技术栈，确保项目快速开发、易于维护且具有良好的用户体验。

## 2. 技术栈选择

### 2.1 前端技术
- **Next.js** (14+): 全栈React框架，提供SSR/SSG、API路由、内置优化等功能
- **React** (18+): 前端UI构建库
- **TypeScript**: 提供类型安全的JavaScript超集
- **Tailwind CSS** (3+): 实用优先的CSS框架，实现高效样式开发
- **Shadcn/UI**: 可定制的UI组件库，提供现代化界面元素
- **next-intl**: 国际化解决方案，支持多语言切换

### 2.2 后端技术
- **Next.js API Routes**: 构建API端点，处理后端逻辑

### 2.3 数据存储
- **Supabase**: 开源Firebase替代品，提供PostgreSQL数据库、存储服务
- **Supabase Storage**: 用于存储书籍资源、风水案例图片等文件

### 2.4 数据统计
- **Google Analytics**: 网站流量和用户行为分析
- **OpenPanel**: 补充数据分析平台

### 2.5 开发工具
- **ESLint/Prettier**: 代码质量控制和格式化
- **Jest/React Testing Library**: 单元测试和集成测试
- **Vercel**: 部署平台，与Next.js深度集成

## 3. 系统架构设计

### 3.1 整体架构

```
┌─────────────────────────────────────────────────────────┐
│                        客户端层                          │
│  ┌─────────────┐  ┌─────────────┐  ┌────────────────┐  │
│  │ Next.js SSR │  │ React 组件  │  │  Tailwind CSS  │  │
│  └─────────────┘  └──────┬──────┘  └────────┬───────┘  │
│                          │                  │          │
│                  ┌───────┴───────┐  ┌───────┴───────┐  │
│                  │  Shadcn/UI    │  │  next-intl    │  │
│                  └───────────────┘  └───────────────┘  │
└──────────────────────────┬─────────────────────────────┘
                           │
┌──────────────────────────▼─────────────────────────────┐
│                      Next.js API层                     │
│  ┌─────────────┐  ┌────────────────┐                   │
│  │ API Routes  │  │  业务逻辑处理  │                   │
│  └─────────────┘  └────────────────┘                   │
└──────────────────────────┬─────────────────────────────┘
                           │
┌──────────────────────────▼─────────────────────────────┐
│                      外部服务层                         │
│  ┌─────────────┐  ┌────────────────┐                   │
│  │  Supabase   │  │  数据分析服务  │                   │
│  └─────────────┘  └────────────────┘                   │
└─────────────────────────────────────────────────────────┘
```

### 3.2 主要数据流

1. **用户请求流程**：
   - 用户请求页面 → Next.js服务端渲染/静态生成页面 → 页面发送数据请求 → Next.js API Routes处理请求 → Supabase存取数据 → 返回响应

## 4. 数据库设计

基于Supabase PostgreSQL，设计以下主要数据表：

### 4.1 fengshui_articles表
存储风水知识科普文章
- `id` (SERIAL): 文章ID
- `title` (VARCHAR): 文章标题
- `content` (TEXT): 文章内容
- `summary` (TEXT): 文章摘要
- `category` (VARCHAR): 文章分类
- `tags` (VARCHAR[]): 文章标签数组
- `cover_image` (VARCHAR): 封面图片URL
- `created_at` (TIMESTAMP): 创建时间
- `updated_at` (TIMESTAMP): 更新时间
- `views_count` (INTEGER): 浏览次数

### 4.2 books表
存储风水书籍资源
- `id` (SERIAL): 书籍ID
- `title` (VARCHAR): 书籍标题
- `author` (VARCHAR): 作者
- `description` (TEXT): 书籍描述
- `cover_image` (VARCHAR): 封面图片URL
- `pdf_url` (VARCHAR): PDF文件URL
- `category` (VARCHAR): 书籍分类
- `published_year` (INTEGER): 出版年份
- `rating` (DECIMAL): 评分
- `created_at` (TIMESTAMP): 创建时间
- `downloads_count` (INTEGER): 下载次数

### 4.3 fortune_templates表
存储运势测算模板
- `id` (SERIAL): 模板ID
- `name` (VARCHAR): 模板名称（如：每日运势、生肖运势）
- `description` (TEXT): 模板描述
- `parameters` (JSONB): 所需参数定义

### 4.4 fengshui_guides表
存储风水指南（家居、办公等）
- `id` (SERIAL): 指南ID
- `title` (VARCHAR): 指南标题
- `type` (VARCHAR): 指南类型（家居/办公/商业）
- `content` (TEXT): 指南内容
- `images` (VARCHAR[]): 图片URL数组
- `created_at` (TIMESTAMP): 创建时间
- `updated_at` (TIMESTAMP): 更新时间

## 5. 页面与路由设计

### 5.1 主要页面结构

```
/                           # 首页
/about                       # 关于页面
/fengshui-knowledge          # 风水知识科普
  ├─ /articles/[id]          # 文章详情
  └─ /categories/[category]  # 分类文章列表
/books                       # 书籍资源
  └─ /[id]                   # 书籍详情
/fortune                     # 运势测算
/home-fengshui               # 家居风水指南
/office-fengshui             # 办公风水规划
/ai-fengshui                 # 智能风水诊断
/admin                       # 管理后台入口
```

### 5.2 路由实现
使用Next.js App Router实现路由管理，具体路由结构如下：

```
app/
  ├── page.tsx               # 首页
  ├── about/
  │   └── page.tsx
  ├── fengshui-knowledge/
  │   ├── page.tsx
  │   ├── articles/
  │   │   └── [id]/page.tsx
  │   └── categories/
  │       └── [category]/page.tsx
  ├── books/
  │   ├── page.tsx
  │   └── [id]/page.tsx
  ├── fortune/
  │   └── page.tsx
  ├── home-fengshui/
  │   └── page.tsx
  ├── office-fengshui/
  │   └── page.tsx
  ├── ai-fengshui/
  │   └── page.tsx
  ├── admin/
  │   └── page.tsx
  ├── api/
  │   ├── articles/route.ts
  │   ├── books/route.ts
  │   ├── fortune/route.ts
  │   └── guides/route.ts
  ├── components/
  │   ├── common/
  │   ├── layout/
  │   └── specific/
  └── locales/
      ├── zh.ts
      └── en.ts
```

## 6. API接口设计

### 6.1 风水知识相关API
- `GET /api/articles`: 获取文章列表（支持分页、筛选）
- `GET /api/articles/[id]`: 获取文章详情
- `POST /api/articles`: 创建文章（管理员）
- `PUT /api/articles/[id]`: 更新文章（管理员）
- `DELETE /api/articles/[id]`: 删除文章（管理员）
- `GET /api/categories`: 获取所有文章分类

### 6.2 书籍资源相关API
- `GET /api/books`: 获取书籍列表（支持分页、筛选）
- `GET /api/books/[id]`: 获取书籍详情
- `POST /api/books`: 上传书籍（管理员）
- `PUT /api/books/[id]`: 更新书籍信息（管理员）
- `DELETE /api/books/[id]`: 删除书籍（管理员）

### 6.3 运势测算相关API
- `GET /api/fortune/templates`: 获取可用的运势测算模板
- `POST /api/fortune/calculate`: 执行运势测算

### 6.4 风水指南相关API
- `GET /api/guides`: 获取风水指南列表
- `GET /api/guides/[id]`: 获取风水指南详情
- `POST /api/guides`: 创建风水指南（管理员）
- `PUT /api/guides/[id]`: 更新风水指南（管理员）
- `DELETE /api/guides/[id]`: 删除风水指南（管理员）

## 7. 前端设计与实现

### 7.1 设计风格
参考Raphael AI网站简洁直观的设计风格，同时融入传统风水文化元素：
- 采用简约现代的UI设计，保持视觉清爽
- 色彩方案以中国传统五行色彩为基础（青、赤、黄、白、黑），辅以中性色调
- 采用响应式布局，确保在不同设备上良好显示
- 交互流畅，提供即时反馈
- 动画效果简约优雅，不干扰用户体验

### 7.2 组件设计

#### 7.2.1 通用组件
- **Header**: 网站顶部导航栏，包含Logo、主导航、搜索框
- **Footer**: 网站底部，包含链接、版权信息
- **Layout**: 页面布局容器，包含Header、Main Content、Footer
- **Card**: 通用卡片组件，用于展示文章、书籍等内容
- **Button**: 按钮组件，支持多种样式和状态
- **Form**: 表单组件，包括输入框、选择器等
- **Modal**: 模态框组件，用于显示详细信息或执行操作
- **Loading**: 加载状态组件
- **Pagination**: 分页组件
- **Breadcrumb**: 面包屑导航组件
- **LanguageSwitcher**: 语言切换组件

#### 7.2.2 功能组件
- **ArticleList**: 文章列表组件
- **BookList**: 书籍列表组件
- **FortuneCalculator**: 运势测算组件
- **FengshuiGuide**: 风水指南展示组件
- **AIFengshuiDiagnosis**: 智能风水诊断组件
- **SearchBar**: 搜索组件
- **CategoryFilter**: 分类筛选组件

### 7.3 状态管理
使用React Context + useReducer和Next.js客户端组件的状态管理方式，替代Redux以简化架构：

- **ThemeContext**: 管理网站主题设置
- **SearchContext**: 管理全局搜索状态
- **PreferencesContext**: 管理用户偏好设置

## 8. 数据统计与分析

### 8.1 Google Analytics集成
- 跟踪页面访问、用户行为、转化路径
- 自定义事件追踪（如文章阅读、书籍下载、测算使用等）
- 设置目标和漏斗分析

### 8.2 OpenPanel集成
- 补充数据统计分析
- 实时访问监控
- 用户会话分析

## 9. 开发流程与规范

### 9.1 代码规范
- 使用TypeScript严格模式
- 遵循React最佳实践
- 使用ESLint和Prettier确保代码风格一致性
- 组件化开发，保持组件独立性和可复用性

### 9.2 环境配置
- 开发环境：本地开发服务器
- 测试环境：Vercel预览部署
- 生产环境：Vercel生产部署

### 9.3 测试策略
- 单元测试：组件测试、工具函数测试
- 集成测试：API测试、用户流程测试
- 端到端测试：关键用户路径测试

### 9.4 部署流程
- 代码提交到Git仓库
- 触发CI/CD流程
- 自动构建和测试
- 部署到Vercel平台

## 10. 项目计划与时间线

| 阶段 | 时间 | 主要任务 |
|------|------|----------|
| 准备阶段 | 1周 | 需求确认、技术选型、环境搭建 |
| 设计阶段 | 1周 | UI/UX设计、数据库设计 |
| 开发阶段 | 4周 | 核心功能开发、组件实现、API开发 |
| 测试阶段 | 1周 | 功能测试、性能测试、兼容性测试 |
| 部署阶段 | 1周 | 生产环境部署、数据迁移、监控配置 |
| 上线阶段 | 1周 | 正式上线、用户反馈收集、问题修复 |

## 11. 风险评估与应对策略

| 风险 | 影响 | 应对策略 |
|------|------|----------|
| 内容准确性 | 高 | 邀请风水专家审核内容，建立内容审核流程 |
| 性能问题 | 中 | 实现图片优化、代码分割、缓存策略 |
| 国际化复杂度 | 低 | 使用next-intl，建立翻译流程 |
| SEO优化挑战 | 中 | 聘请SEO专家，优化传统文化内容的搜索引擎表现 |

## 12. 后续优化方向

1. **功能扩展**
   - 添加更多类型的风水测算功能
   - 增加社区互动功能
   - 开发移动应用

2. **性能优化**
   - 实现更细粒度的代码分割
   - 优化图片和资源加载
   - 使用边缘缓存

3. **用户体验提升**
   - 增加个性化推荐
   - 改进无障碍支持
   - 添加暗黑模式