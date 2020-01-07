<template>
  <div class="login">
    <div class="container">
      <div class="close">
        <span class="iconfont iconicon-test"></span>
      </div>
      <div class="logo">
        <van-icon name="new" class="hot"/>
      </div>
      <div class="inputs">
        <!-- <input data-v-744880be placeholder="请输入手机号" class="input" /> -->
        <!-- <input data-v-744880be placeholder="密码" class="input" type="password" /> -->
        <!-- 注意此处的正则需要属性绑定 -->
        <myinput placeholder="请输入手机号" :rules="/^(\d{5,6})$|^(1\d{10})$/" v-model="users.username" msg="请输入正确的用户名或手机号"></myinput>
        <myinput placeholder="请输入密码" :rules="/^(\S{3,16})$/" v-model="users.password" type="password" msg="请输入3-16位密码"></myinput>
      </div>
      <p class="tips">
        没有账号？
        <a href="#/register" class>去注册</a>
      </p>
      <mybutton @click="login">登录</mybutton>
    </div>
    
  </div>
</template>
// 登录页思路：
// 通过flex布局完成静态页面布局
// 由于按钮和输入框在本项目多次使用，因此封装成组件
// 按钮封装思路：
// 首先按钮的功能是点击和按钮内容
// 使用div的原因是样式更多样化且按钮内容多样化，
// 通过slot完成按钮文字的变化通过父子组件的事件监听完成实现按钮的点击功能
// 输入框封装思路：
// 首先按钮的功能：输入文本，有value，type，placeholder等属性，有input，blur等常用方法
// 通过props属性接收父组件传递的值如正则，添加input事件对值进行判断添加不同的样式，通过双向绑定实现数据影响元素和元素影响数据
// 添加失焦事件并进行正则判断，使用vant的轻提示给用户提示
// 登录：设置全局的 axios 默认值，封装api接口文件，登录成功后跳转个人中心
// 错误日志：Object(...) is not a function 引入有问题
<script>
import mybutton from '../components/mybutton.vue';
import myinput from '../components/myinput.vue';
import { login } from '../apis/user.js'
export default {
  data() {
    return {
      users: {
        username:'10086',
        password: '123'
      }
    }
  },
  components: {
    mybutton, myinput
  },
  methods: {
    //登录
   async login() {
      // console.log('login');
      let res = await login(this.users) 
      // console.log(res);
      if(res.data.message == '登录成功') this.$router.push({name: 'Personal'})
      
    },
    //输入框变化 直接交给v-model进行双向绑定
  // handleInput(value) {
  //   console.log(value);
  // }
  }
};
</script>

<style lang="less" scoped>
.container {
  padding: 20px;
}

.close {
  span {
    font-size: 27 / 360 * 100vw;
  }
}

.logo {
  display: flex;
  justify-content: center;

  .hot {
    display: block;
    font-size: 126 / 360 * 100vw;
    color: #d43d3d;
  }
}

.inputs {
  input {
    margin-bottom: 20px;
  }
}

.tips {
  text-align: right;
  margin-bottom: 20px;

  a {
    color: #3385ff;
  }
}
</style>