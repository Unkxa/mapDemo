# 🗺️ 地图演示项目

基于Deno的瓦片地图系统，支持实时瓦片生成和交互式地图显示。

## ✨ 功能特性

- 🎨 **实时瓦片生成**: 使用Canvas API动态生成地图瓦片
- 🖱️ **交互式操作**: 支持鼠标拖拽和滚轮缩放
- 📱 **响应式设计**: 适配不同屏幕尺寸
- ⚡ **高性能**: 基于Deno的高性能服务器
- 🎯 **Vue前端**: 现代化的Vue 3前端界面

## 🚀 快速开始

### 环境要求

- Deno 1.0+
- 现代浏览器（支持Canvas和ES6+）

### 安装和运行

#### 方法一：自动安装（推荐）

**Windows用户：**
```bash
# 运行PowerShell安装脚本
.\install-deno.ps1

# 或者运行批处理文件
install-deno.bat
```

**手动安装Deno：**
```bash
# Windows (PowerShell)
irm https://deno.land/install.ps1 | iex

# macOS/Linux
curl -fsSL https://deno.land/install.sh | sh
```

#### 方法二：手动运行

1. **确保Deno已安装**
   ```bash
   deno --version
   ```

2. **启动服务器**
   ```bash
   # Windows
   start-server.bat
   
   # 或直接运行
   deno run --allow-net --allow-read --allow-env main.ts
   ```

3. **访问应用**
   打开浏览器访问 `http://localhost:8000`

### 开发模式

使用以下命令启动开发模式（支持热重载）：

```bash
deno run --allow-net --allow-read --allow-env --watch main.ts
```

## 🏗️ 项目结构

```
mapDemo/
├── main.ts                    # Deno服务器主文件
├── deno.json                  # Deno配置文件
├── public/                    # 静态文件目录
│   └── index.html            # Vue前端页面
├── install-deno.ps1          # PowerShell安装脚本
├── install-deno.bat          # 批处理安装脚本
├── start-server.bat          # 服务器启动脚本
└── mapDemo-readme.md         # 项目说明文档
```

## 🎮 使用说明

### 地图操作

- **拖拽**: 按住鼠标左键拖拽移动地图
- **缩放**: 使用鼠标滚轮或控制面板调整缩放级别
- **重置**: 点击"重置视图"按钮恢复初始状态

### 控制面板

- **缩放级别**: 调整地图的缩放级别（0-18）
- **中心坐标**: 手动设置地图中心点的X、Y坐标
- **信息显示**: 实时显示当前地图状态信息

## 🔧 技术实现

### 后端 (Deno)

- **瓦片生成**: 使用OffscreenCanvas动态生成PNG瓦片
- **HTTP服务**: 基于Deno.serve的现代HTTP服务器
- **静态文件**: 支持静态文件服务
- **缓存优化**: 设置适当的HTTP缓存头

### 前端 (Vue 3)

- **响应式设计**: 使用Vue 3 Composition API
- **地图渲染**: 动态计算和渲染可见瓦片
- **交互处理**: 鼠标拖拽和滚轮缩放
- **性能优化**: 按需加载瓦片，避免重复请求

## 🎨 瓦片系统

### 瓦片规格

- **尺寸**: 256×256像素
- **格式**: PNG图像
- **坐标系**: 标准Web墨卡托投影
- **缩放级别**: 0-18级

### 瓦片内容

每个瓦片包含：
- 网格背景
- 坐标信息显示
- 装饰性元素
- 随机分布的点

## 📝 API接口

### 瓦片请求

```
GET /tiles/{z}/{x}/{y}.png
```

参数：
- `z`: 缩放级别 (0-18)
- `x`: X坐标
- `y`: Y坐标

### 静态文件

```
GET /{path}
```

支持HTML、CSS、JS、图片等静态文件。

## 🛠️ 自定义配置

### 修改瓦片样式

编辑 `main.ts` 中的 `generateTile` 函数来自定义瓦片外观：

```typescript
// 修改背景色
ctx.fillStyle = "#your-color";

// 添加自定义图形
ctx.fillRect(x, y, width, height);
```

### 调整地图参数

修改 `public/index.html` 中的配置：

```javascript
// 修改初始缩放级别
const zoom = ref(2);

// 修改初始中心点
const centerX = ref(0);
const centerY = ref(0);
```

## 🐛 故障排除

### 常见问题

1. **瓦片不显示**
   - 检查浏览器控制台是否有错误
   - 确认Deno服务器正在运行
   - 检查网络连接

2. **性能问题**
   - 减少同时显示的瓦片数量
   - 调整缩放级别范围
   - 检查浏览器硬件加速

3. **跨域问题**
   - 确保使用Deno服务器访问
   - 检查CORS设置

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交Issue和Pull Request！

---

**享受您的地图之旅！** 🗺️✨
