<template>
  <div class="articleDetail">
    <div class="head">
      <div class="left">
        <van-icon name="arrow-left" />
        <van-icon name="new" class="hot" />
      </div>
      <div class="right">
        <span>关注</span>
      </div>
    </div>
    <div class="content">
      <h3 class="content_head">标题</h3>
      <div class="auther_date">
        <span>火星人</span>
        <span>2019</span>
      </div>
      <div
        class="content_content"
      >文章内容哈哈哈哈哈哈哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或</div>
      <div class="content_like">
        <span class="like">
          <van-icon name="good-job-o" />点赞
        </span>
        <span>
          <van-icon name="chat" class="wechat" />微信
        </span>
      </div>
    </div>
    <div class="comments">
      <h2>精彩跟帖</h2>
      <div class="bestcommenter">
        <img src="../assets/logo.png" alt />
        <div class="left">
          <span>网友</span>
          <span>2小时前</span>
        </div>
        <div class="right">
          <span>回复</span>
        </div>
      </div>
      <div class="comment_content">
          说得很有道理
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
body {
  background-color: #dddddd;
}
.head {
  display: flex;
  justify-content: space-between;
  padding: 20px 10px 0 0;
  border-bottom: 1px solid #ccc;
  .left {
    font-size: 35px;
    font-weight: 700;
  }
  .right {
    span {
      border: 1px solid #ccc;
      padding: 3px 8px;
      border-radius: 10px;
      &.active {
        background-color: #d43d3d;
        color: #fff;
      }
    }
  }
}
.content {
  margin-top: 20px;
  border-bottom: 4px solid #ccc;
  .auther_date {
    padding: 3px;
  }
  .content_content {
    margin-top: 10px;
  }
  .content_like {
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
    span {
      padding: 3px 8px;
      border: 1px solid #ccc;
      border-radius: 10px;
      .wechat {
        color: #19ac18;
      }
    }
  }
}
.comments {
    border-bottom: 1px solid #000;
    padding: 20px 0;
    .bestcommenter {
        display: flex;
        justify-content: space-around;
        img {
            width: 50/360*100vw;
            border-radius: 50%;
        }
        .left {
          display: flex;
          flex-direction: column;
        }
       
    }
}
</style>