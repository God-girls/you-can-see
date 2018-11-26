<style src="./style.css" scoped></style>
<template src="./template.html"></template>

<script>
import loading from '../../../components/base/loading'
import myhead from '../../../components/base/header'
import {html} from '../../../assets/js/global.js';
import modalDialog from '../../../components/base/dialog'
import { mapState, mapActions } from 'vuex'
import axios from 'axios';
import qs from 'qs';

export default {
  data () {
    return {
      show1:true,     
      header:{
        'name':'后台管理',
        'link':'/my',
        noBack:true,
      },
      qiimgs:'',
      isCur: 1,
      iquit:0,
      token:'',
      loading:false,
      begin_seconds:false,
      isIosvg:false,
      isIosvgX:false,
      isAndroid:false,
      statusBar:{},
      loadError:'',
      historyTotalPN:1,
      bottomBarH:[],
      profile:{},
      paraData:{},
      headImg:''
    }
  },
  components: {
    loading,
    myhead,
    modalDialog
  },
  computed:{
    ...mapState([
      // 映射 this.count 为 store.state.count
      'PROFILE',
      'TOKEN',
      'UID'
    ])
  },
  mounted () {

    if (this.TOKEN) {
      this.token = this.TOKEN;
      this.paraData.uid = this.UID;
      this.profile = this.PROFILE;
      this.headImg = this.globalAvatar+(this.profile.avatar?this.profile.avatar:'')+'?imageView2/2/w/210/h/210/t/'+new Date().getTime();
    }
    if (this.$route.query.from == 'shop') {
      this.header.link = '/shop'
    }

    dplus.track('系统设置',{'from':html.useragent()});//统计代码
    document.body.addEventListener('touchstart', function () {});

  },
  methods: {
    getProfile (){
      axios.post('/bonus_api/v1/bonus/userinfo',qs.stringify(this.paraData),{
          headers: {
              "A-Token-Header": this.token,
          }
        }).then((response)=>{   
          let resData = response.data;

          if (resData.success) {
            this.profile = resData.result;
            this.switchState({
              PROFILE:resData.result,
            })            
          }  else {
            if (resData.code == '403' || resData.code == '250') {
              this.needLogin = true;
              this.noToken = true;
            }
          }
      }).catch((response)=>{
        // this.logErrors(JSON.stringify(response))
      });  
    },
    modifyImg (type){
      var data = new FormData();
      if (this.imgFile) data.append('avatar',this.imgFile,this.imgFile.name);
      data.append("uid", this.paraData.uid);
      axios.post('/bonus_api/v1/user/updated',data,{
          headers: {
              "A-Token-Header": this.token,
              'Content-Type':'multipart/form-data'
          }
        }).then((response)=>{   
        this.loading = false;        
          let resData = response.data;  
          if (resData.success) {
            this.getProfile ();
          }  else {
            if (resData.code == '403' || resData.code == '250') {
              this.goto('/')
            }else{
              this.initMSG(resData.codemsg)
            }
          }

      }).catch(function(response){});  
    },
    onFileChange (e){
        //图片上传
        var URL = window.URL || window.webkitURL;
        var files = e.target.files || e.dataTransfer.files,
            file,
            blobURL,
            thisType = Number(e.target.dataset.type),
            testFile = '';

        if (files && files.length) {
            file = files[0];
            
            testFile = /^image\/\w+$/;
            blobURL = URL.createObjectURL(file);  
            this.headImg = blobURL;

              // console.log(blobURL)
            if (testFile.test(file.type)) {

              var data = new FormData();
              this.imgFile = file;
              this.modifyImg ();
            } else {
              this.initMsg('请选择图片')
            }
        }

    },
    initMSG(errors){
      this.loadError = errors;
      this.loading = true;
      setTimeout(()=>{
        this.loadError = '';
        this.loading = false;
      },3000)
    },
    closeDialog(arr){
      this[arr] = false
    },
    goto (arr){
       this.$router.push(arr)        
    },
  },
}
</script>

