<template>
  <section class="login-container">
      <div class="login-layout">
        <h2>LIMS后台登录</h2>
        <div class="main-content">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="rule-form">
            <el-form-item label="" prop="username">
              <el-input prefix-icon="el-icon-service" v-model="ruleForm.username" placeholder="请输入用户名" class="form-input"></el-input>
            </el-form-item>
            <el-form-item label="" prop="password">
              <el-input prefix-icon="el-icon-service" type="password" v-model="ruleForm.password" placeholder="请输入密码" class="form-input"></el-input>
            </el-form-item>
            <el-form-item label="" class="form-check">
              <el-checkbox v-model="ruleForm.remember">记住我的登录状态</el-checkbox>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="login" class="form-button">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
        <!-- <span @click="tuichu">推出</span> -->
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
export default {
  components: {
    AppLogo
  },
  asyncData (){
    return {
      ruleForm:{
        username:"demo",
        password:"demo",
        remember:true
      },
      rules:{
        username:[
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 6 到 18 个字符', trigger: 'blur' }
        ],
        password:[
          { required: true, message: '请输入密码', trigger: 'blur' },
        ],
      }
    }
  },
  mounted:function(){
   
  },
  methods:{
    async login(){
      let vm = this;
      vm.$refs['ruleForm'].validate((valid) => {
        if(valid){
          vm.$store.dispatch('login', {
            username: vm.ruleForm.username,
            password: vm.ruleForm.password
          }).then(function(res){
            if(!!vm.$store.state.authUser.username){
              // 登录成功保存
              vm.getMenu();
             }
          })
        }
      })
    },
    async getMenu(){
      await this.$store.dispatch('getMenu', {
          userId: 1,
      })
      this.$router.push("/")
    },
    async tuichu(){
      await this.$store.dispatch('logout', {
          userId: 1,
      })

    }
  }
}
</script>

<style lang="scss">
.login-container {
  background-image: url("/static/images/bg.jpg");
  // background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  h2{
    color: #fff;
    font-size: 28px;
    font-weight: normal;
    height: 80px;
    line-height: 80px;
  }
  .login-layout{
    width: 500px;
    height: 420px;
    position:absolute;
    top:50%;
    margin-top: -250px;
    left: 50%;
    margin-left: -250px;
    .main-content{
      background:rgba(0,0,0,.4);
      width: 100%;
      height: 340px;
      border-radius:5px;
      .rule-form{
        width: 350px;
        margin-left: auto;
        margin-right: auto;
        padding-top: 40px;
        .form-button{
          width:100%;
          text-align: center;
        }
        .form-input{
          margin-top: 10px;
          input{
            background:transparent;
            color: #999;
            border-color:#409eff;
          }
          input:hover,input:active,input:focus,input:visited{
            border-color:#256db7;
          }
        }
        .form-check{
          text-align: left;
          span{
            color: #fff;
          }
        }
      }
    }
  }
}
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
