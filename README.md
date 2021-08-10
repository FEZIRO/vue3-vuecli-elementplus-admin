

## vue3-vuecli-elementplus-admin管理系统快速开发模板
<br>
​ 基于Vue3.0 和 ElementPlus框架，使用vue-cli4进行构建，界面与模板结构与vite版一致[vue3-vite-elementplus-admin](https://github.com/FEZIRO/vue3-vite-elementplus-admin)，只是构建工具不同。此模板可用于现代化管理系统的初始开发模板，可节省一些重复性的工程初始化搭建工作。
<br>
<br>

## 特性

- 包含简易的登录注册页、首页、404 提示页、用户管理页、角色权限页。
- 封装好的经典管理端布局（包含头部组件、侧边栏菜单组件、面包屑组件、标签切换器组件）。
- 默认使用`axios`请求数据和`mockjs`来模拟数据。
- 封装的公共组件：倒计时按钮组件。
- 使用`nprogress`插件来作为单页面切换的加载指示器。
- 使用`VueRouter`动态生成不同角色菜单的路由权限。
- 基本的兼容性提醒，由于vue3不兼容IE浏览器，因此如检测为IE浏览器则提醒用户切换使用其他浏览器。
- 界面设计简约，可根据自己的实际开发情况增加删除工具库或修改源码。
  <br>
  <br>

## 使用库/工具

- [Vue 3](https://v3.cn.vuejs.org/)
- [VueRouter 4.x](https://next.router.vuejs.org/zh/)（有兼容`vue3`语法的`hook`写法）
- [Vuex 4.x](https://next.vuex.vuejs.org/zh/index.html) （有兼容`vue3`语法的`hook`写法）
- [Vue-cli 4.5.13](https://cli.vuejs.org/zh/)
- [ElementPlus 1.0.2-beta.55](https://element-plus.org/#/zh-CN/component/space)（整个库采用`vue3`语法编写）
- [dayjs](https://github.com/iamkun/dayjs)（一个轻便的时间处理库）
- [axios](http://www.axios-js.com/) （好用的 http 请求库）
- [mockjs](http://mockjs.com/) （模拟请求）
- [reset-css](https://www.npmjs.com/package/reset-css) （重置浏览器默认样式）
- [nprogress](https://ricostacruz.com/nprogress/) （顶部加载指示器）
- visualizer （打包文件大小占比分析可视化插件）
- sass-resources-loader（scss样式全局化插件）
- webpack-bundle-analyzer （webpack打包文件大小占比分析插件）
- ProgressBarPlugin （进度条插件，可用于查看打包进度）
- compression-webpack-plugin (gzip打包压缩插件)
  <br>
  <br>
## 模板结构和关键点描述
  与vite版的结构一致，请移步到vite版仓库查看
  （[vue3-vite-elementplus-admin](https://github.com/FEZIRO/vue3-vite-elementplus-admin)）
<br>
<br>
## 注意

- Vue 3 不兼容IE浏览器。
- 本模板的ElementPlus使用的是1.0.2-beta.55测试版，由于是测试版缘故，功能设置随时会变，故当更新到某个新版本时某些设置可能会不正确不生效，一切以Element官方文档为准！
<br>
<br>
<p align=center>By FEZIRO </p>