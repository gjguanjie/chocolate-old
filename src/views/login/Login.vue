<template>
  <div class="full-container">
    <el-form :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left" label-width="0px"
             class="login-container">
      <h2 class="title" style="padding-left:22px;">登录系统</h2>
      <el-form-item prop="username">
        <!--<span><svg-icon icon-class="user"/></span>-->
        <el-input type="text" v-model="loginForm.username" auto-complete="off" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <!--<svg-icon icon-class="password"/>-->
        <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-col :span="12">
          <el-form-item prop="captcha">
            <el-input type="test" v-model="loginForm.captcha" auto-complete="off" placeholder="验证码, 单击图片刷新"
                      style="width: 100%;">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col class="line" :span="1">&nbsp;</el-col>
        <el-col :span="11">
          <el-form-item>
            <img style="width: 100%;" class="pointer" :src="loginForm.src" @click="refreshCaptcha">
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item style="width:100%;">
         <el-button type="info" style="width:48%;" @click.native.prevent="reset">重 置</el-button>
        <el-button type='info' style="width:48%;" @click.native.prevent="login('loginForm')" :loading="loading">登 录</el-button>
        </el-form-item>
      </el-form>
      <el-dialog :visible.sync="dialogVisible" width="30%" modal lock-scroll center>
        <span>用户名或密码错误，请重新输入......</span>
        <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="dialogVisible = false">关闭</el-button>
        </span>
      </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      dialogVisible: false,
      loading: false,
      loginForm: {
        username: '',
        password: '',
        src: ''
      },
      loginRules: {
        username: [
          { required: true, message: '请输入账号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login (loginForm) {
      this.$refs[loginForm].validate((valid) => {
        if (!valid) {
          return false
        } else {
          debugger
          if (this.loginForm.username === 'admin' && this.loginForm.password === 'admin') {
            sessionStorage.setItem('username', this.username)
            this.$router.push('/home')
          } else {
            this.dialogVisible = true
          }
        }
      })
    },
    reset () {
      this.$refs.loginForm.resetFields()
    },
    refreshCaptcha: function () {
      this.loginForm.src = new Date().getTime()
    }
  },
  mounted () {
    this.refreshCaptcha()
  }
}
</script>

<style lang="scss" scoped>
  .full-container {
    background-color: #394056;
    background-size: 100% 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;

  }

  .login-container {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 100px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: darkgrey;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    background-size: cover;

    .title {
      margin: 0px auto 30px auto;
      text-align: center;
      color: #505458;
    }

    .remember {
      margin: 0px 0px 35px 0px;
    }
  }
</style>
