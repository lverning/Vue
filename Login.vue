<template>
  <div class="aa">
    <el-card class="login-form-layout">
      <el-form
          autocomplete="on"
          :model="loginForm"
          ref="loginForm"
          label-position="left"
          :rules="loginFormRules"
      >
        <div style="text-align: center">
          <svg-icon icon-class="login-mall" style="width: 56px;height: 56px;color: #409EFF"></svg-icon>
        </div>
        <h2 class="login-title color-main">请登录</h2>
        <el-form-item prop="username">
          <el-input
              name="username"
              type="text"
              v-model="loginForm.username"
              autocomplete="off"
              placeholder="请输入用户名"
          >
            <span slot="prefix">
              <svg-icon icon-class="user" class="color-main"></svg-icon>
            </span>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
              name="password"
              :type="pwdType"
              @keyup.enter.native="handleLogin"
              v-model="loginForm.password"
              autocomplete="off"
              placeholder="请输入密码"
          >
            <span slot="prefix">
              <svg-icon icon-class="password" class="color-main"></svg-icon>
            </span>
            <span slot="suffix" @click="showPwd">
              <svg-icon icon-class="eye" class="color-main"></svg-icon>
            </span>
          </el-input>
        </el-form-item>
        <el-form-item style="margin-bottom: 60px">
          <el-button
              style="width: 100%"
              type="primary"
              :loading="loading"
              @click.native.prevent="handleLogin"
          >登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>

export default {
  name: "login",
  data() {
    return {
      loginForm: {
        username: "孙磊",
        password: "0000000"
      },
      loading: false,
      pwdType: "password",
      //表单验证
      loginFormRules:{
        username:[
          { required: true, message: '请输入登录名称', trigger: 'blur' },
          { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ],
      }
    };
  },
  methods: {
    showPwd() {
      if (this.pwdType === "password") {
        this.pwdType = "";
      } else {
        this.pwdType = "password";
      }
    },
    //表单验证
    handleLogin() {
      this.$refs.loginForm.validate(valid =>{
        if (!valid) return
      })
      this.$http.post('http://localhost:8081/sysUser/login',this.loginForm).then(resp => {
        if (resp.data.code == "200") {
          this.$message({
            message: '登录成功',
            type: 'success'
          })
          this.$router.push('/index')
          sessionStorage['token'] = resp.data.data
          sessionStorage['sign'] = 'abcdefg'
        } else {
          this.$message.error('账号或密码错误!');
          this.loginForm = {}
        }
      })
    },
  }
};
</script>

<style scoped>
.aa{
  width: 100%;
  height: 840px;
  background-color: rgb(38,74,107);
}
.login-form-layout {
  position: absolute;
  left: 0;
  right: 0;
  width: 360px;
  margin: 140px auto;
  /*border-top: 10px solid #409eff;*/
}

.login-title {
  text-align: center;
}

.login-center-layout {
  background: #409eff;
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  margin-top: 200px;
}
</style>