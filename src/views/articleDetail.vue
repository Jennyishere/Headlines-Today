<template>
  <div class="articleDetail">
    <div class="head">
      <div class="left">
        <van-icon name="arrow-left" />
        <van-icon name="new" class="hot" />
      </div>
      <div class="right">
        <span @click="handleStar" :class="{active:articleDetail.has_star}">{{articleDetail.has_star?'已关注':'关注'}}</span>
      </div>
    </div>
    <div class="content">
      <h3 class="content_head">{{articleDetail.title}}</h3>
      <div class="auther_date">
        <span>{{articleDetail.user.nickname}}</span>
        <span>{{articleDetail.create_date}}</span>
      </div>
      <div
        class="content_content" v-html="articleDetail.content"
      ></div>
      <div class="content_like">
        <span>
          <van-icon name="good-job-o" :class='["like",{active:articleDetail.has_like}]'/>点赞
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
      <div class="more">
        <span>更多跟帖</span>
      </div>
    </div>
   <commentFooter :post='articleDetail'></commentFooter>
  </div>
</template>
// todo
1、根据id拿到文章详情 渲染页面
2、封装底部评论栏
3、关注 √
4、点赞√
5、点击评论跳转
<script>
import { getArticleDetail } from '../apis/article.js'
import commentFooter from '../components/commentFooter.vue'
export default {
  data() {
    return {
      articleDetail:''
    }
  },
  components: {
    commentFooter
  },
 async mounted() {
    let res = await getArticleDetail(this.$route.params.id) 
    console.log(res);
    this.articleDetail = res.data.data
    
  },
  methods: {
    handleStar() {

    }
  }
};
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
    img {
      width: 100vw;
    }
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
    /deep/.like {
        &.active {
          color: #d43d3d;
        }
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
    .comment_content {
         text-align: left;
         padding: 5px;
       }
       .more {
         span {
           padding: 10px;
         border: 1px solid #ccc;
         border-radius: 20px;
         }
       }
}

</style>