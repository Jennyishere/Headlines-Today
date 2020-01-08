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
    
    <pcell>
      <span slot="left">性别</span>
      <span slot="right">
        {{user.gender}}
        <van-icon name="arrow" />
      </span>
    </pcell>
    <van-field
  readonly
  clickable
  label="性别"
  :value="value"
  placeholder="选性别"
  @click="showPicker = true"
/>

<van-popup v-model="showPicker" position="bottom">
  <van-picker
    show-toolbar
    :columns="columns"
    @cancel="showPicker = false"
    @confirm="onConfirm"
  />
</van-popup>
  </div>
</template>
静态页面，引用vant组件及自己封装的组件组成
业务处理
功能：1、左箭头返回个人中心 √ 
渲染源数据
2、点击头像，可以进行头像的修改
首先，监听确定键，完成图片的上传，且通过id完成用户资料的修改，并且实现预览效果
需要添加文件上传api和用户编辑api
3、点击昵称，引入vant的Dialog 弹出框和Field 输入框组件，监听确定键，完成昵称的修改，且实现预览效果
4、点击修改密码，引入vant的Dialog 弹出框和Field 输入框组件，使用该组件的一个beforeclose属性，判断①与原密码是否一致，②新密码是否符合正则表达式规则，监听确定键，完成修改
5、点击修改性别，引入vant的Picker组件，监听用户选择，确认后完成修改
<script>
import pcell from '../components/pcell.vue';
import { upload } from '../apis/upload.js';
import { updateUserById, getUserById } from '../apis/user.js';
export default {
  data() {
    return {
      user: {},
      nickshow: false,
      pswshow: false
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
    }
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