<template>
  <div>
    <div class="head">
      <div><img class="logoimg" src="../assets/logo.png"></div>
      <div><span class="head-span">欢迎</span></div>
    </div>
    <div class="middle">
      <div class="mimg">
        <img class="indeximg" src="../assets/index.png">
      </div>
      <div class="LoginForm">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="名字" prop="username">
            <el-input v-model="ruleForm.username" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="ruleForm.password" placeholder="请输入密码" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="ruleForm.checkPass" placeholder="请再次输入密码" autocomplete="off"></el-input>
          </el-form-item>
          <div class="login">
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
              <div>
              </div>
            </el-form-item>
          </div>
        </el-form>
      </div>
    </div>
    <div class="bottom">
      <img class="bottomimg" src="../assets/di.png">
    </div>
  </div>
</template>

<script>
export default {
  name: "Login2",
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        password: '123456',
        checkPass: '123456',
        username: 'admin'
      },
      rules: {
        pass: [
          {validator: validatePass, trigger: 'blur'}
        ],
        checkPass: [
          {validator: validatePass2, trigger: 'blur'}
        ],
        username:[
          { required: true, message: '请输入登录名称', trigger: 'blur' },
          { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
        ],
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$http.post('http://localhost:9090/sysUser/login', this.ruleForm).then(resp => {
            if (resp.data.code == "200") {
              this.$message({
                message: '登录成功',
                type: 'success',
                condition: true
              })
              sessionStorage['token'] = resp.data.data
              sessionStorage['sign'] = 'abcdefg'
              this.$router.push('/index2')
            } else {
              this.$message.error('账号或密码错误!');
              this.$refs[formName].resetFields();
            }
          })
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
}
</script>

<style scoped>
.head {
  width: 100%;
  height: 80px;
}

.middle {
  height: 550px;
  background-color: rgb(231, 237, 245);
}

.mimg {
  position: absolute;
  left: 8%;
  top: 20%;
}

.indeximg {
  width: 620px;
  height: 320px;
}

.logoimg {
  position: absolute;
  left: 15px;
  width: 150px;
  height: 80px;
}

.bottomimg {
  width: 65%;
  height: 100px;
  position: absolute;
  left: 18%;
}

.LoginForm {
  background-color: rgb(250, 252, 254);
  border-radius: 15px;
  width: 450px;
  height: 260px;
  position: absolute;
  left: 60%;
  top: 25%;
}

.el-form {
  position: absolute;
  top: 15px;
  left: 30px;
}

.bottom {
  width: 100%;
  height: 210px;
  background-color: rgb(242, 242, 242);
}

.login {
  position: absolute;
  left: 5px;
}

.head-span {
  position: absolute;
  top: 30px;
  right: 10%;
}
</style>