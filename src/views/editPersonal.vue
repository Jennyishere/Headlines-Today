<template>
  <div class="editPersonal">
    <van-nav-bar class="head" @click-left="$router.back()" style="font-weight: 700;">
      <span slot="title">编辑资料</span>
      <van-icon class="left" name="arrow-left" slot="left" />
    </van-nav-bar>
    <div class="img">
      <img :src="user.head_img" alt />
      <van-uploader :after-read="afterRead" class="upload" />
    </div>
    <pcell @click="nickshow=!nickshow">
      <span slot="left">昵称</span>
      <span slot="right">
        {{user.nickname}}
        <van-icon name="arrow" />
      </span>
    </pcell>
    <van-dialog v-model="nickshow" title="修改昵称" show-cancel-button @confirm="updateNickname">
      <van-field :value="user.nickname" placeholder="请输入昵称" required ref="nick"/>
    </van-dialog>
    <pcell  @click='pswshow=!pswshow' >
      <span slot="left">密码</span>
      <span slot="right">
        {{user.password?'***':''}}
        <van-icon name="arrow" />
      </span>
    </pcell>
    <van-dialog v-model="pswshow" title="修改密码" show-cancel-button :before-close='beforecls'>
      <van-field placeholder="请输入原密码" required ref="oldPsw"/>
      <van-field placeholder="请输入新密码" required ref="newPsw"/>
    </van-dialog>
    
    <pcell @click='sexshow=!sexshow'>
      <span slot="left">性别</span>
      <span slot="right">
        {{user.gender==1?'男':'女'}}
        <van-icon name="arrow" />
      </span>
    </pcell>
  <van-dialog v-model="sexshow" title="修改性别" show-cancel-button @confirm="updateGender"> 
      <van-picker :columns="['女','男']" @change="onChange" :default-index="user.gender"/>
    </van-dialog>
  </div>
</template>

<script>
import pcell from '../components/pcell.vue';
import { upload } from '../apis/upload.js';
import { updateUserById, getUserById } from '../apis/user.js';
export default {
  data() {
    return {
      user: {},
      nickshow: false,
      pswshow: false,
      sexshow: false,
      gender:''
    };
  },
  components: {
    pcell
  },
  async mounted() {
    //先拿到用户数据渲染
    let res = await getUserById(this.$route.params.id);
    // console.log(res);
    if (res.data.message == '获取成功') this.user = res.data.data;
  },
  methods: {
    async afterRead(file) {
      // 此时可以自行将文件上传至服务器
      // console.log(file.file);
      let fd = new FormData();
      fd.append('file', file.file);
      let res = await upload(fd);
      // console.log(res);
      if (res.data.message == '文件上传成功') {
        this.user = res.data.data;
        this.user.head_img = 'http://localhost:3000' + res.data.data.url;
      }
      //调用用户资料编辑 把该id的头像修改了
      let resupdateImg = await updateUserById(this.$route.params.id, {
        head_img: this.user.url
      });
      console.log(resupdateImg);
    },
    // 修改昵称
  async  updateNickname() {
      // console.log(123);
      // 1.获取输入框的值 2.发请求修改值 3.渲染显示
      // console.log(this.$refs.nick.$refs.input.value);
      let res = await updateUserById(this.$route.params.id,{
        'nickname':this.$refs.nick.$refs.input.value
      })
      // console.log(res);
      if(res.data.message == '修改成功') this.user.nickname = res.data.data.nickname
    },
   
   async beforecls(action, done) {
      // console.log(action);
      if(action == 'cancel') {
        done()
      }else {
        if(this.$refs.oldPsw.$refs.input.value == this.user.password && /^\S{3,16}$/.test(this.$refs.newPsw.$refs.input.value)) {
          //密码正确且合法 发送请求修改
          let res = await updateUserById(this.$route.params.id,{
            'password':this.$refs.newPsw.$refs.input.value
          })
          this.$toast.success(res.data.message)
          // console.log(res);
          
          done()
        }else if(this.$refs.oldPsw.$refs.input.value != this.user.password ){
          done(false)
          this.$toast.fail('密码不正确')
          this.$refs.oldPsw.$refs.input.select();
        }else {
          done(false)
          this.$refs.newPsw.$refs.input.select();
          this.$toast.fail('请输入3-16位密码')
        }
      }
    },
  onChange(picker, value, index) {
      // this.$toast(`当前值：${value}, 当前索引：${index}`);
      this.gender = index;
      // console.log(this.gender);
      
    },
  async updateGender() {
      let res = await updateUserById(this.$route.params.id,{
        'gender': this.gender
      } )
      console.log(res);
      if(res.data.message == '修改成功') {
        this.user.gender = this.gender;
      }else {
        this.$$toast.fail(res.data.message)
      }
    }
  
  },
  
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
  img {
    width: 100px;
  }
  .upload {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    /deep/ .van-uploader__upload {
      width: 110px;
      height: 110px;
    }
  }
}
</style>