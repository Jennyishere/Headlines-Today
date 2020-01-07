<template>
  <input
    class="myinput"
    type="text"
    @input="handleInput"
    @blur="handleBlur"
    :class="{'red':isRed,'green':!isRed}"
  />
</template>

<script>
export default {
  props: ['rules', 'msg'],
  data() {
    return {
      isRed: false
    };
  },
  methods: {
    // 传递输入框的值给父组件
    handleInput(event) {
      // 接收父组件传来的rules进行正则判断
      if (this.rules && this.rules.test(event.target.value)) this.isRed = false;
      else this.isRed = true;
      // console.log(this.rules,event.target.value);

      this.$emit('input', event.target.value);
    },
    handleBlur(event) {
      if (this.rules && !this.rules.test(event.target.value))
        this.$toast({
          message: this.msg,
          duration: 2000
        });
    }
  }
};
</script>

<style lang="less" scoped>
.myinput {
  width: 318/360 * 100vw;
  height: 50px;
  border: 0;
  border-bottom: 2px solid #d43d3d;
}
.red {
  border-bottom: 2px solid #d43d3d;
}
.green {
  border-bottom: 2px solid #93cf89;
}
</style>