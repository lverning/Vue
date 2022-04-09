<template>
  <div>
    <Head></Head>
    <div class="comm-div">
      <div class="comm-png">图片
      <img src="https://sv-mall.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20220315143732.jpg">
      </div>
      <div class="comm-detailed">详情</div>

    </div>
  </div>

</template>

<script>
import Head from "@/components/structure/head";
export default {
  name: "Details",
  components: {Head},
  props:['a'],
  data(){
    return{

    }
  },
  mounted() {
  },
  methods:{
    demo(){
      this.$router.push('/register')
    }
  }
}
</script>

<style scoped>
.comm-div{
  background-color: rgb(255, 255, 255);
}
.comm-png{
  border: 1px red solid;
  height: 400px;
  width: 400px;
  margin-left: 12%;
  margin-top: 20px;
}
.comm-detailed{
  border: 1px red solid;
  height: 400px;
  width: 400px;
  float: right;
  margin-top: -400px;
  margin-right: 15%;
}

</style>