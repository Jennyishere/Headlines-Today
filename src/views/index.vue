<template>
  <div class="index">
    <div class="head">
      <div class="logo">
        <van-icon name="new" class="hot" />
      </div>
      <div class="search">
        <van-icon name="search" />
        <span>搜索新闻</span>
      </div>
      <div class="user">
        <van-icon name="manager" />
      </div>
    </div>
    <van-tabs v-model="active" swipeable sticky>
      <van-tab :title="cate.name" v-for="cate in cateList" :key="cate.id">
        <van-list
          v-model="cate.loading"
          :finished="cate.finished"
          finished-text="没有更多了"
          @load="onLoad"
          :immediate-check="false"
          :offset="30"
        >
          <van-pull-refresh v-model="cate.isLoading" @refresh="onRefresh">
            <articleBlock v-for="item in cate.postList" :key="item.id" :post="item"></articleBlock>
          </van-pull-refresh>
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

//? todo 

<script>
import { getCategory, getAllArticle } from '../apis/article.js';
import articleBlock from '../components/articleBlock.vue';

export default {
  data() {
    return {
      // 默认头条被选中
      active: localStorage.getItem('ht_token') ? 1 : 0,
      cateList: {}
    };
  },
  components: {
    articleBlock
  },
  async mounted() {
    let res = await getCategory();
    // console.log(this.active, res);
    this.cateList = res.data.data;
    // 改造数据
    this.cateList = this.cateList.map(value => {
      return {
        ...value,
        pageIndex: 1,
        pageSize: 5,
        category: this.cateList[this.active].id,
        postList: [],
        loading: false,
        finished: false,
        isLoading: false
      };
    });
    // 根据栏目获取文章数据 // 得到的是999的新闻 当没有监听active的变化时
    this.init();
  },
  // 监听active的变化
  watch: {
    active() {
      // console.log(this.active, this.cateList);此时监听到active的变化，再次发送请求
      this.init();
    }
  },
  methods: {
    async init() {
      let res2 = await getAllArticle({
        pageIndex: this.cateList[this.active].pageIndex,
        pageSize: this.cateList[this.active].pageSize,
        category: this.cateList[this.active].id
      });
      // 重置
      if(this.cateList[this.active].loading) this.cateList[this.active].loading = false;
      if(this.cateList[this.active].isLoading) this.cateList[this.active].isLoading = false;
      if (res2.data.data.length < this.cateList[this.active].pageSize) {
        this.cateList[this.active].finished = true;
      }
      this.cateList[this.active].postList.push(...res2.data.data);
      // console.log(this.active, this.cateList[this.active].postList);
    },
    // 上拉加载
    onLoad() {
      this.cateList[this.active].pageIndex++;
      this.init();
    },
    // 下拉刷洗
    onRefresh() {
      this.cateList[this.active].postList.length = 0;
      this.init()
      this.finished = false;
    }

  }
};
</script>

<style lang="less" scoped>
.head {
  width: 100%;
  height: 55px;
  background-color: #d43d3d;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  .logo .hot {
    display: block;
    font-size: 60px;
    color: #fff;
    padding: 0 10px;
  }
  .search {
    flex: 1;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 20px;
    text-align: center;
    line-height: 44px;
    font-size: 18px;
    > span {
      padding-left: 10px;
    }
  }
  .user {
    padding: 0 10px;
    font-size: 18px;
  }
}
</style>
