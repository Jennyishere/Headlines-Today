<template>
  <div class="personal">
    <router-link :to="{path:`/editPersonal/${users.id}`}">
      <div class="profile">
        <img :src="users.head_img" alt />
        <div class="profile-center">
          <div class="name">
            <span :class="['iconfont', {'iconxingbienan':users.gender==1,'iconxingbienv':users.gender==0}]"></span>{{users.nickname}}
          </div>
          <div class="time">{{users.create_date}}</div>
        </div>
        <span class="iconfont iconjiantou1"></span>
      </div>  
    </router-link>
    <div>
        <pcell>
          <span slot="left">我的关注</span>
          <span slot="right">关注的用户<van-icon name="arrow" /></span>
        </pcell>
        <pcell>
          <span slot="left">我的跟帖</span>
          <span slot="right">跟帖/回复<van-icon name="arrow" /></span>
        </pcell>
        <pcell>
          <span slot="left">我的收藏</span>
          <span slot="right">文章/视频<van-icon name="arrow" /></span>
        </pcell>
        <pcell>
          <span slot="left">设置</span>
          <span slot="right"><van-icon name="arrow" /></span>
        </pcell>
      </div>
      <mybutton class="btn" @click="quit">退出</mybutton>
  </div>
</template>

<script>
import pcell from '../components/pcell.vue'
import mybutton from '../components/mybutton.vue'
import {getUserById} from '../apis/user.js'
export default {
  data() {
    return {
      users: {}
    }
  },
  components: {
    pcell,mybutton
  },
 async mounted() {
    // 获取参数id
    let id = this.$route.params.id;
    // console.log(id);
    let res = await getUserById(id)
    console.log(res);
    if(res.data.message == '获取成功') this.users = res.data.data
    this.users.head_img = res.data.data.head_img
  },
  methods: {
    quit() {
      // 退出 清空本地 token 跳转登录页
      localStorage.removeItem('ht_token')
      this.$router.push({
        path: '/login'
      })
    }
  }
}
</script>

<style lang='less' scoped>
.personal{
    width: 100vw;
    height: 100vh;
    background-color: #eee;
}
a{
    color: #666;
}
.profile {
  display: flex;
  padding: 20px 10px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 5px #ddd solid;

  img {
    width: 70 / 360 * 100vw;
    height: 70 / 360 * 100vw;
    border-radius: 50%;
  }

  .profile-center {
    flex: 1;
    padding: 0 10px;
  }

  .name {
    span {
      color: #75b9eb;
    }
  }

  .time {
    color: #666;
    font-size: 14px;
    margin-top: 5px;
  }
 
}
 .btn {
    margin-top: 20px;
  }
</style>
