<template>
  <div class="commnetFooter" >
    
      <div class="addInput" v-show='!isFocus'>
        <span @click="isFocus=!isFocus">写跟帖</span>
        <van-icon name="comment-o" :info="post.comment_length" @click="$router.push({path:`/comments/${post.id}`})"/>
        <van-icon name="star-o" />
        <van-icon name="share" />
      </div>
      <div class="commentInput" v-show='isFocus'>
          <textarea  ref='commtext' rows="5"></textarea>
          <div>
            <span >发送</span>
            <span @click="isFocus= false">取消</span>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    props: [
        'post'
    ],
    data() {
        return {
           isFocus:false
        }
    },
    methods: {
        handleFocus () {

        }
    }
};
</script>

<style lang="less" scoped>
.commnetFooter {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  .addInput {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #ccc;
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 20px;
    span {
      width: 50%;
      font-size: 14px;
      background-color: #fff;
      padding: 5px;
      border-radius: 15px;
      color: #666;
      text-align: left;
      text-indent: 2em;
    }
  }
  .commentInput {
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 10px;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    background-color: #f90;
    align-items: flex-end;
     textarea{
        flex: 3;
        background-color: #eee;
        border:none;
        border-radius: 10px;
        padding: 10px;
    }
    div{
        padding: 20px;
    }
    span {
        display: block;
        flex: 1;
        height: 24px;
        line-height: 24px;
        padding: 0 10px;
        margin-bottom: 10px;
        background-color: #f20;
        color:#fff;
        text-align: center;
        border-radius: 6px;
        font-size: 13px;
        &:first-of-type {
            background: green;
        }
    }
  }
}
</style>