<template>
  <div class="pcell">
      <div>
          <slot name="left"></slot>
      </div>
      <div>
          <slot name="right"></slot>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
    .pcell {
        height: 60px;
        border-bottom: 1px solid #ccc;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px
    }
</style>