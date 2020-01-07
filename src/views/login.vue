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
      localStorage.setItem('ht_token',res.data.data.token)
      localStorage.setItem('userId',res.data.data.user.id)
      if(res.data.message == '登录成功') this.$router.push({path: `/personal/${res.data.data.user.id}`})
      
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