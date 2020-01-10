<template>
  <div class="articleBlockOne" v-if="post.type == 1 && post.cover.length <= 1" @click="$router.push({path:`articleDetail/${post.id}`})">
    <div class="left">
      <p>{{post.title}}</p>
      <p>
        <span>{{post.user.nickname}}</span>
        <span>{{post.comment_length}}跟帖</span>
      </p>
    </div>
    <div class="right">
        <img :src="post.cover[0].url" alt="">
    </div>
  </div>
  <div class="articleBlockVideo" v-else-if="post.type == 2" @click="$router.push({path:`articleDetail/${post.id}`})">
      <p>{{post.title}}</p>
        <img :src="post.cover[0].url" alt="">
        <van-icon name="play-circle-o" class="play"/>
    <div class="bottom">
        <span>{{post.user.nickname}}</span>
        <span>{{post.comment_length}}跟帖</span>
    </div>
  </div>
    <div class="articleBlockThree" v-else-if="post.type == 1 && post.cover.length > 1" @click="$router.push({path:`articleDetail/${post.id}`})">
      <p>{{post.title}}</p>
        <div class="imgs">
            <img :src="img.url" v-for="img in post.cover" :key="img.id" alt="">
        </div>
    <div class="bottom">
        <span>{{post.user.nickname}}</span>
        <span>{{post.comment_length}}跟帖</span>
    </div>
  </div>
</template>

<script>
export default {
    props:['post']
};
</script>

<style lang="less" scoped>
.articleBlockOne{
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    padding: 5px;

    .left {
        flex:2;
        text-align: left;
        span {
            padding: 0 5px;
        }
    }
    .right {
        flex:1;
        img {
            width: 100/360*100vw;
        }
    }
}
.articleBlockVideo {
    position: relative;
    border-bottom: 1px solid #ccc;
    padding: 5px;
    text-align: left;
    img {
        width: 100%;
    }
    span {
            padding: 0 5px;
        }
    .play {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        font-size: 60px;
        color:rgba(255, 255, 255, 0.5);
    }
}
.articleBlockThree {
    text-align: left;
    padding: 5px;
    border-bottom: 1px solid #ccc;
    .imgs {
        display: flex;
        justify-content: space-around;
        margin-bottom: 5px;
        img {
            width: 30%;
        }
    }
    span {
         padding: 0 5px;
         
    }
}
</style>