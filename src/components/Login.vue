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
            <li>登录</li>
            <li>注册</li>
          </ul>
        </div>
        <div class="tab-content">
          <div></div>
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
      activeName: 'login',
    }
  },
  created(){
    //背景图片 全屏显示
    this.windowHeight = window.innerHeight + 'px';
  }
}
</script>
<style scoped>
  .loginModule{
    width: 100%;
    background-image: url('../assets/background2.jpg');
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
    height: 400px;
    margin-top: 80px;
    border-radius: 5px;
  }
  .tab-header ul{
    overflow: hidden;
    margin: 0;
    padding: 10px 0;
    border-bottom: 1px solid #ccc;
  }
  .tab-header ul li:first-child{
    border-right: 1px solid #ccc;
  }
  .tab-header ul li{
    float: left;
    list-style: none;
    width: 49%;
    cursor: pointer;
  }
</style>