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
        <van-list v-model="cate.loading" :finished="cate.finished" finished-text="没有更多了" @load="onLoad" :immediate-check="false" :offset="30">
          <articleBlock v-for="item in cate.postList" :key="item.id" :post="item"></articleBlock>
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

//? todo 
1、使用vant的Tab 标签页组件，获取数据，遍历生成顶部标签
2、由于每次只需加载本栏目的数据，因此要对数据进行改造，在获取的每一条数据里添加postList数组，第几页pageIndex，每页条数pageSize
3.监听当前栏目id，发送请求获取数据，存到自身的数组里,注意都是当前的栏目this active，参数传的也都是当前栏目的
4、封装新闻列表展示结构，通过type判断进行不同的展示 
5、上拉加载 List 列表组件 
大概步骤：
①引用组件 ②加载时让页数++ 再次请求 ③数据请求完成后 需要手动重置 并把数据push到数组里
6、下拉刷新
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
      finished: false
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
      this.cateList[this.active].loading = false;
    if(res2.data.data.length < this.cateList[this.active].pageSize) {
      this.cateList[this.active].finished = true;
    }
      this.cateList[this.active].postList.push(...res2.data.data);
      // console.log(this.active, this.cateList[this.active].postList);
    },
    onLoad() {
      
        this.cateList[this.active].pageIndex++;
        this.init();
      
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
