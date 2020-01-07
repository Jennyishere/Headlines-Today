<template>
  <div class="mybutton" @click="handleClick">
      <slot></slot>
  </div>
</template>

<script>
export default {
    methods: {
        handleClick(event) {
            this.$emit('click',event)
        }
    }
}
</script>

<style lang="less" scoped>
    .mybutton {
        width: 318/360*100vw;
        height: 50px;
        background-color: #d43d3d;
        font-size: 20px;
        color: #fff;
        line-height: 50px;
        border-radius: 25px;
        margin: 0 auto;
    }
</style>