<template>
  <div>
    <!--顶部-->
    <div class="top">
      <div class="top-div">
        <span>手机专区 |</span>
        <span>鸿蒙智联 |</span>
        <span>电脑专区 |</span>
        <span>手机专区 |</span>
        <span>鸿蒙智联 |</span>
        <span>电脑专区 |</span>
        <span>教育优惠 <i class="el-icon-arrow-down"></i></span>
      </div>
      <div class="top-rights">
        <span @click="login">请登录</span>
        <span @click="register">注册  |</span>
        <span>我的订单</span>
        <span>个人中心</span>
      </div>
    </div>
    <!--导航栏-->
    <div class="head">
      <div>
        <img class="logoimg" src="../assets/logo.png">
      </div>
      <div class="navigation">
        <span>手机专区</span>
        <span>鸿蒙智联</span>
        <span>电脑专区</span>
        <span>手机专区</span>
        <span>鸿蒙智联</span>
        <span>电脑专区</span>
        <span>教育优惠</span>
      </div>
      <div>
        <i class="el-icon-search"></i>
      </div>
    </div>
    <!--轮播图-->
    <div class="middle">
      <div class="block">
        <el-carousel height="480px">
          <el-carousel-item v-for="(item,i) in imgs" :key="item">
            <img class="lunbotu" :src="imgs[i]">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <!--商品详情-->
    <div class="bottom">
      <span class="bottom-span">爆款推荐</span>
      <div class="imgsfor" v-for="(item,index) in 20" :key="item">
        <div class="itemimgs" @click="details(a=1)">
          <el-col :span="8">
            <el-card shadow="hover">
              鼠标悬浮时显示{{ index }}
            </el-card>
          </el-col>
        </div>
      </div>
    </div>
    <!--分页-->
    <div class="block">
      <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage3"
          :page-size="100"
          layout="prev, pager, next, jumper"
          :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "index2",
  data() {
    return {
      imgs: [
        require('../assets/1.png'),
        require('../assets/2.png'),
        require('../assets/3.png'),
        require('../assets/4.png'),
        require('../assets/5.jpg'),
        require('../assets/6.png'),
      ],
      files: [],
      currentPage3:null
    }
  },
  methods: {
    imgsdemo() {
      this.$http.get('http://localhost:9090/imgs/all').then(resp => {
        console.log(resp.data)
        this.files = resp.data.filter(v => v.type === 'png' || v.type === 'png' || v.type === 'webp')
      })
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    details() {
      this.$router.push('/details')
    },
    login() {
      this.$router.push('/login')
    },
    register() {
      this.$router.push('/register')
    }
  }
}
</script>

<style scoped>
span:hover {
  color: rgb(207, 10, 44);
}

.top-div > span:hover {
  color: #ffffff;
}

.top-rights > span:hover {
  color: #ffffff;
}

.top {
  background-color: rgb(0, 0, 0);
  height: 30px;
  padding-top: 8px;
  padding-left: 120px;
}

.top-div {
  width: 600px;
}

.top-div > span {
  color: rgb(153, 153, 153);
  font-size: 10px;
  margin: 8px;
}

.top-rights {
  width: 230px;
  position: absolute;
  right: 8%;
  top: 8px;
}

.top-rights > span {
  color: rgb(153, 153, 153);
  font-size: 10px;
  margin: 8px;
  /*position: absolute;*/
  /*margin-right: 10px;*/
}

.head {
  background-color: rgb(255, 255, 255);
  width: 100%;
  height: 80px;
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
}

.logoimg {
  position: absolute;
  left: 8%;
  width: 150px;
  height: 80px;
}

.lunbotu {
  height: 480px;
  width: 110%;
}

.navigation {
  position: absolute;
  left: 23%;
  top: 30px;
}

.navigation > span {
  margin: 18px;

}

.middle {
  height: 480px;
}

/*.middle > img {*/
/*  height: 560px;*/
/*  width: 120%;*/
/*}*/

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}


.bottom {
  background-color: rgb(241, 243, 245);
  height: 1100px;
}

.itemimgs {
  margin: 30px;
  margin-top: 10px;
  padding-top: 10px;
  float: left;
  width: 200px;
  height: 200px;
}

.imgsfor {
  margin-left: 4%;
}

.el-icon-search {
  position: absolute;
  right: 8%;
  font-size: 25px;
  top: 27px;
  color: #99a9bf;
}

.el-card {
  position: absolute;
  width: 240px;
  height: 230px;
  margin-top: 10px;
}

.bottom-span {
  color: rgb(0, 0, 0);
  font-size: 25px;
  margin-left: 85px;
}
.block{
  margin-left: 20px;
}
</style>