<template>
  <div class="loginModule" :style="{height: windowHeight}">
    <!-- <img src="../assets/background2.jpg" alt=""> -->
    <!--头部-->
    <el-header>
      <div class="loginHeader">
        <!-- <div>This is header</div> -->
      </div>
    </el-header>
    <!--内容-->
    
    <div class="loginMain">
      <div class="loginModal">
        <div class="tab-header">
          <ul>
            <li :class="{activeLi: isShowModule}" @click="isShowModule = true">登录</li>
            <!-- <li :class="{activeLi: !isShowModule}" @click="isShowModule = false">注册</li> -->
          </ul>
        </div>
        <div class="tab-content">
          <div v-if="isShowModule">
            <el-form :label-position="labelPosition" label-width="80px" :model="loginForm" :rules="loginRules" ref="loginForm">
              <el-form-item label="账号" prop="username">
                <el-input size="small" v-model="loginForm.username"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input size="small" v-model="loginForm.password" show-password></el-input>
              </el-form-item>
              <el-form-item class="buttons">
                <el-button type="primary" size="small" @click="onLogin('loginForm')">登录</el-button>
              </el-form-item>
            </el-form>
          </div>
          <div v-if="!isShowModule">
            <el-form :label-position="labelPosition" label-width="80px" :model="registerForm" ref="registerForm">
              <el-form-item label="账号" prop="username">
                <el-input size="small" v-model="registerForm.username"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input size="small" v-model="registerForm.password" show-password></el-input>
              </el-form-item>
              <el-form-item label="确认密码" prop="confirmPassword">
                <el-input size="small" v-model="registerForm.confirmPassword" show-password></el-input>
              </el-form-item>
              <el-form-item class="buttons">
                <el-button type="primary" size="small" @click="onRegister">注册</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
    
    <!--底部-->
    <el-footer>

    </el-footer>
  </div>
</template>
<script>
export default {
  data(){
    return {
      windowHeight: '0px',
      isShowModule: true,
      labelPosition: 'right',
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: {required: true, message: '请输入账号'},
        password: {required: true, message: '请输入密码'},
      },
      registerRules: {
        username: {required: true, message: '请输入账号'},
        password: {required: true, message: '请输入密码'},
        confirmPassword: {required: true, message: ''},
      },
      registerForm: {
        username: '',
        password: '',
        confirmPassword: ''
      }
    }
  },
  created(){
    //背景图片 全屏显示
    this.windowHeight = window.innerHeight + 'px';
  },
  methods: {
    onLogin(formName){
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if(this.loginForm.username == 'admin' && this.loginForm.password == '123456'){
            this.$router.push('hello');
          }else{
            this.$message.error('账号密码错误');
          }
        }
      });
    },
    onRegister(){

    }
  }
}
</script>
<style scoped>
  .loginModule{
    width: 100%;
    background-image: url('../assets/th.jpg');
    background-size: 100% 100%;
  }
  .loginHeader{
    max-width: 1024px;
    margin: 0 auto;
    height: 60px;
    line-height: 60px;
  }
  .loginMain{
    width: 1024px;
    margin: 0 auto;
    overflow: hidden;
  }
  .loginModal{
    float: right;
    width: 400px;
    background: rgba(255, 255, 255, .9);
    height: 350px;
    margin-top: 80px;
    border-radius: 5px;

    height: 300px;
  }
  .tab-header ul{
    overflow: hidden;
    margin: 0;
    padding: 10px 0;
    border-bottom: 1px solid #ccc;
  }
  .tab-header ul li:first-child{
    /* border-right: 1px solid #ccc; */
  }
  .tab-header ul li{
    float: left;
    list-style: none;
    width: 49%;
    cursor: pointer;
    width: 100%;
  }
  .tab-header ul .activeLi{
    color: blue;
  }
  .tab-content{
    padding-top: 40px;
  }
  .tab-content form{
    padding: 0 40px 0 10px;
  }
  .tab-content form .buttons{
    text-align: left;
  }
</style>