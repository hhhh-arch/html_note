# HTML Note Highlighter 安装指南

## 🚀 快速安装

### 步骤 1：准备文件

确保你有以下文件：
- `manifest.json` - 插件配置文件
- `content.js` - 核心功能脚本
- `style.css` - 样式文件
- `popup.html` - 弹出界面
- `popup.js` - 弹出界面脚本
- `icon.svg` - 图标文件（可选）

### 步骤 2：生成图标文件

由于Chrome扩展需要PNG格式的图标，你需要将SVG图标转换为PNG：

1. 打开 `icon.svg` 文件
2. 使用在线工具或图像编辑软件将其转换为PNG格式
3. 生成以下尺寸的图标：
   - `icon16.png` (16x16像素)
   - `icon48.png` (48x48像素)
   - `icon128.png` (128x128像素)

**推荐在线工具：**
- [Convertio](https://convertio.co/svg-png/)
- [CloudConvert](https://cloudconvert.com/svg-to-png)
- [SVG to PNG](https://svgtopng.com/)

### 步骤 3：安装插件

1. 打开Chrome浏览器
2. 在地址栏输入：`chrome://extensions/`
3. 开启右上角的"开发者模式"开关
4. 点击"加载已解压的扩展程序"按钮
5. 选择包含所有文件的文件夹
6. 插件安装完成！

## ✅ 验证安装

### 方法 1：检查扩展列表

1. 在 `chrome://extensions/` 页面
2. 查找"HTML Note Highlighter"
3. 确保状态显示为"已启用"

### 方法 2：测试功能

1. 打开 `test.html` 文件
2. 点击浏览器工具栏中的插件图标
3. 尝试切换高亮模式
4. 选择文本进行高亮测试

## 🔧 故障排除

### 问题 1：插件无法加载

**可能原因：**
- 缺少必要的文件
- manifest.json 格式错误
- Chrome版本不支持Manifest V3

**解决方案：**
1. 检查所有必需文件是否存在
2. 验证manifest.json语法是否正确
3. 更新Chrome到最新版本

### 问题 2：图标显示异常

**可能原因：**
- 缺少图标文件
- 图标文件格式不正确

**解决方案：**
1. 确保有 `icon16.png`、`icon48.png`、`icon128.png` 文件
2. 检查图标文件是否为有效的PNG格式
3. 重新生成图标文件

### 问题 3：功能不工作

**可能原因：**
- content script 未正确注入
- 权限不足

**解决方案：**
1. 刷新目标网页
2. 检查浏览器控制台是否有错误
3. 重新加载插件

## 📋 文件清单

安装前请确认你有以下文件：

```
html_note/
├── manifest.json      ✅ 必需
├── content.js         ✅ 必需
├── style.css          ✅ 必需
├── popup.html         ✅ 必需
├── popup.js           ✅ 必需
├── icon16.png         ✅ 必需
├── icon48.png         ✅ 必需
├── icon128.png        ✅ 必需
├── icon.svg           📝 用于生成PNG图标
├── test.html          📝 测试文件
├── README.md          📝 说明文档
└── INSTALL.md         📝 本文件
```

## 🎯 测试步骤

1. **基础功能测试**
   - 打开任意网页
   - 点击插件图标
   - 切换高亮模式
   - 选择文本进行高亮

2. **笔记功能测试**
   - 高亮文本后添加笔记
   - 点击高亮文本编辑笔记
   - 删除高亮和笔记

3. **保存功能测试**
   - 进行一些高亮和笔记操作
   - 保存页面为HTML文件
   - 打开保存的文件验证功能

4. **持久化测试**
   - 保存包含高亮和笔记的页面
   - 关闭原页面
   - 重新打开保存的HTML文件
   - 验证高亮和笔记是否保留

## 🔄 更新插件

如果需要更新插件：

1. 修改相关文件
2. 在 `chrome://extensions/` 页面
3. 点击插件卡片上的刷新按钮
4. 刷新目标网页

## 🗑️ 卸载插件

1. 打开 `chrome://extensions/`
2. 找到"HTML Note Highlighter"
3. 点击"移除"按钮
4. 确认卸载

## 📞 获取帮助

如果遇到问题：

1. 检查浏览器控制台是否有错误信息
2. 查看 `README.md` 中的故障排除部分
3. 确保所有文件都正确放置
4. 尝试重新安装插件

---

**注意：** 这是一个本地使用的Chrome扩展，不会上传到Chrome商店。所有数据都保存在本地，保护您的隐私。 