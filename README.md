# Headine Today



基于 **Vue 全家桶 ** 制作的今日头条 ，一个媲美原生的移动端新闻 App，项目完整、功能完备、UI美观、交互一流。

## 技术栈

【前端】

- **Vue**：构建用户界面的 MVVM 框架，核心是响应的数据绑定和组系统件
- **vue-router**：为单页面应用提供的路由系统，项目上线前使用了路由懒加载技术，来异步加载路由优化性能
- **axios**：服务端通讯。
- *Vant**：轻量、可靠的移动端 Vue 组件库
- **less**：less 预编译处理器
- **ES6**：ECMAScript 新一代语法，模块化、解构赋值、Promise、Class 等方法非常好用


【后端及数据库】

- **Node.js**：利用 Express 起一个本地测试服务器
- **Express**：一个自身功能极简，完全是由路由和中间件构成一个的WEB开发框架

【自动化构建及其他工具】

- **vue-cli**：Vue 脚手架工具，快速初始化项目代码
- **ESLint**：代码风格检查工具，规范代码书写


## : 收获

1. 对 vue 的组件、指令、选项、模版渲染、事件绑定、计算属性等有了一定了解
2. 了解了 vue 组件之间的交互、传值
3. 熟悉了在 vue 项目中使用第三方插件（组件）
4. 熟悉了组件化、模块化的开发思维
5. 熟悉了 vue-router 控制路由和子路由的方式
6. 再次熟悉项目开发流程：项目分析设计 -> 项目环境搭建 -> 依赖安装 -> 页面架构设计 -> 组件开发 -> 测试联调 -> 发布上线
7. 总结了一套 Vue 通用组件，可以在其它项目中复用的 10+ 个基础组件、15+ 个业务组件
8. 体会到组件化、模块化开发带来的便捷
9. 学会利用过渡效果及动画效果制作良好的用户交互体验

## :pencil: 实现细节

主要功能：首页、注册、登录、个人中心、资料编辑、跟帖、评论、收藏、关注，视频播放、栏目管理等等

### 首页

首页数据 

### 注册


**登录**：
** 登录页思路：**
·通过flex布局完成静态页面布局
·由于按钮和输入框在本项目多次使用，因此封装成组件，也可以直接使用vant组件上的组件
**按钮封装思路：**
+首先按钮的功能是点击和按钮内容
+使用div的原因是样式更多样化且按钮内容多样化，
+通过slot完成按钮文字的变化通过父子组件的事件监听完成实现按钮的点击功能
**输入框封装思路：**
+首先按钮的功能：输入文本，有value，type，placeholder等属性，有input，blur等常用方法
+通过props属性接收父组件传递的值如正则，添加input事件对值进行判断添加不同的样式，通过双向绑定实现数据影响元素和元素影响数据
+添加失焦事件并进行正则判断，使用vant的轻提示给用户提示
+登录：设置全局的 axios 默认值，封装api接口文件，登录成功后跳转个人中心
**错误日志：**
Object(...) is not a function 检查引入是否有问题


**个人中心**：


**资料编辑**：



## :package: Build Setup

# clone the repo into your disk.
$ git clone 

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
## :four_leaf_clover: License

The code is available under the [MIT license](https://opensource.org/licenses/MIT).
