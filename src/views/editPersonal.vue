<template>
  <div class="editPersonal">
    <van-nav-bar class="head" @click-left="$router.back()" style="font-weight: 700;">
      <span slot="title">编辑资料</span>
      <van-icon class="left" name="arrow-left" slot="left" />
    </van-nav-bar>
    <div class="img">
        <img src="../assets/logo.png" alt="">
        <van-uploader :after-read="afterRead" class="upload"/>
    </div>
    <pcell>
        <span slot="left">昵称</span>
        <span slot="right">火星<van-icon name="arrow" /></span>
    </pcell>
    <pcell>
        <span slot="left">昵称</span>
        <span slot="right">火星<van-icon name="arrow" /></span>
    </pcell>
    <pcell>
        <span slot="left">昵称</span>
        <span slot="right">火星<van-icon name="arrow" /></span>
    </pcell>
  </div>
</template>

<script>
import pcell from '../components/pcell.vue'
export default {
    components: {
        pcell
    }
};
</script>

<style lang="less" scoped>
/deep/.head {
  border-bottom: 1px solid #ccc;
    margin-bottom: 30px;

  span {
    font-size: 20px;
    font-weight: 700;
  }
  .left {
    font-size: 20px;
    color: #333;
  }
}
.img {
    position: relative;
    margin: 0 auto;
    img{
    width: 100px;
}
.upload {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    opacity: 0;
   /deep/ .van-uploader__upload {
        width: 110px;
        height: 110px;
    }
}
}

</style>