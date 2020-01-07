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
        <input data-v-744880be placeholder="请输入手机号" class="input" />
        <input data-v-744880be placeholder="密码" class="input" type="password" />
      </div>
      <p class="tips">
        没有账号？
        <a href="#/register" class>去注册</a>
      </p>
      <!-- <div data-v-4bc01e24 class="button">登录按钮</div> -->
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
<script>
import mybutton from '../components/mybutton.vue';
export default {
  components: {
    mybutton
  },
  methods: {
    login() {
      console.log('login');
      
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