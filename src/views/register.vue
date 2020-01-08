<template>
  <div class="register">
    <div class="container">
      <!-- <div class="close">
        <span class="iconfont iconicon-test"></span>
      </div> -->
      <div class="logo">
        <van-icon name="new" class="hot"/>
      </div>
      <div class="inputs">
        <!-- <input data-v-744880be placeholder="请输入手机号" class="input" /> -->
        <!-- <input data-v-744880be placeholder="密码" class="input" type="password" /> -->
        <!-- 注意此处的正则需要属性绑定 -->
        <myinput placeholder="请输入手机号" :rules="/^(\d{5,6})$|^(1\d{10})$/" v-model="users.username" msg="请输入正确的用户名或手机号"></myinput>
        <myinput placeholder="请输入昵称" :rules="/^(\w{3,10})$/" v-model="users.nickname" msg="请输入3-10位昵称"></myinput>
        <myinput placeholder="请输入密码" :rules="/^(\S{3,16})$/" v-model="users.password" type="password" msg="请输入3-16位密码"></myinput>
      </div>
      <p class="tips">
        已有账号？
        <a href="#/login" class>去登录</a>
      </p>
      <mybutton @click="register">注册</mybutton>
    </div>
    
  </div>
</template>
注册页静态与登录页相似
<script>
import mybutton from '../components/mybutton.vue';
import myinput from '../components/myinput.vue';
import { Register } from '../apis/user.js'
export default {
  data() {
    return {
      users: {
        username:'',
        password: '',
        nickname:''
      }
    }
  },
  components: {
    mybutton, myinput
  },
  methods: {
    async register() {
          let res = await Register(this.users)
        //   console.log(res);
          if(res.data.message == '注册成功') {
              this.$router.push({name: 'Login'})
              this.$toast.success(res.data.message)
          }else {
              this.$toast.fail(res.data.message)

          }
      }
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