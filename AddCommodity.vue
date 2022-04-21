<template>
  <el-upload
      class="upload-demo"
      :action="objdata.host"
      :before-upload="ossPolicy"
      :file-list="fileList"
      list-type="picture">
    <el-button size="small" type="primary">点击上传</el-button>
    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
  </el-upload>
</template>

<script>
export default {
  name: "AddCommodity",
  data(){
    return{
      objdata:{
        OSSAccessKeyId:'',
        policy:'',
        Signatrue:'',
        key:'',
        host:'',
        dir:''
      }
    }
  },
  methods: {
    // ossPolicy(file){
    //   return new Promise((resolve,reject)=>{
    //
    //       });
    // },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    }
  }
}
</script>

<style scoped>

</style>