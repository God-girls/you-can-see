
<style src="./style.css" scoped></style>
<template src="./template.html"></template>

<script>
import {html} from '../../../assets/js/global.js';
import myhead from '../../../components/base/header'
import datepicker from '../../../components/base/Datepicker.vue'
import loading from '../../../components/base/loading'
import { mapState, mapActions } from 'vuex'
import axios from 'axios';
import qs from 'qs';
export default {
  components: {
    myhead,
    loading,
    datepicker
  },
  data () {
    return {
      header:{
        'name':'添加商品',
        'link':'/admin/product',
      },
      paraData:{
        head_image:'',
        status:1,
        begin_time:'',
        end_time:'',
        gid:''
      },
      startTime:'',
      endTime:'',
      minDate:'2018-1-01',
      loading:false,
      loadError:'',
      info: [], // 三级联动城市列表,
      editAddress:'',
      isEdit:false,
      headImg:'',
      imgsArr:[],
      context:{
        imgs:[1],
      }
    }
  },
  computed:{
    ...mapState([
      // 映射 this.count 为 store.state.count
      'UID',
      'TOKEN',
      'PROFILE',
      'RECORDPRD'
    ])
  },
  mounted: function () {
    if (html.isPc()) {
      document.body.setAttribute('class','pcBody');
    }

    if (this.TOKEN) {
      this.token = this.TOKEN;
      this.paraData.uid = this.UID;
      this.profile = this.PROFILE;
      console.log(this.RECORDPRD)
      if (this.$route.query.id) {
        this.paraData.title = this.RECORDPRD.title;
        this.paraData.price = this.RECORDPRD.price;
        this.paraData.begin_time = this.RECORDPRD.begin_time.split(' ')[0];
        this.paraData.end_time = this.RECORDPRD.end_time.split(' ')[0];
        this.context = JSON.parse(this.RECORDPRD.context);
        this.paraData.head_image = this.RECORDPRD.head_image;
        this.paraData.status = this.RECORDPRD.status
        this.paraData.gid = this.$route.query.id;
        this.paraData.seq = this.RECORDPRD.seq
        this.header.name = '编辑商品';
      }else{
        this.paraData.begin_time = this.curData();
        this.paraData.end_time = this.curData();       
      }

    }

  },
  methods: {
    ...mapActions([
      'switchState', // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`'
    ]),
    curData(){
      const oDate = new Date();
      function add_zero(temp){
        if(temp<10) return "0"+temp;
        else return temp;
      }
      return oDate.getFullYear()+'-'+add_zero(oDate.getMonth() + 1)+'-'+add_zero(oDate.getDate());
    },
    updateGoods (){
      console.log(this.context)
      // return;
      // if (!this.paraData.orderid || !this.paraData.deliver_no) {
      //   this.initMSG('请输入完整的信息')
      //   return;
      // }
      this.paraData.begin_time += ' 10:00:00';
      this.paraData.end_time += ' 23:59:59';
      this.paraData.status = this.paraData.status ? 1 : 0;
      this.paraData.context = JSON.stringify(this.context);
      axios.post('/bonus_api/v1/console/goods_edit',qs.stringify(this.paraData),{
          headers: {
              "A-Token-Header": this.token,
          }
        }).then((response)=>{           
          let resData = response.data;  

          if (resData.success) {
              this.initMSG('操作成功');
              setTimeout(()=>{
                this.goto('/admin/product')
              },2000)
          }else {
            if (resData.code == '403' || resData.code == '250') {
              this.goto('/')
            }else{
              this.initMSG(resData.codemsg);
            }
          }
      }).catch(function(response){});  
    },
    modifyImg (type){
      var data = new FormData();
      if (this.imgFile) data.append('images',this.imgFile,this.imgFile.name);
      data.append("uid", this.paraData.uid);
      axios.post('/bonus_api/v1/console/upload_img',data,{
          headers: {
              "A-Token-Header": this.token,
              'Content-Type':'multipart/form-data'
          }
        }).then((response)=>{   
        this.loading = false;        
          let resData = response.data;  
          if (resData.success) {
            if (type == 'head') {
              this.paraData.head_image = resData.result[0]
            }else{
              // debugger
              this.context.imgs.splice(Number(type),1,resData.result[0])
            }
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
            thisType = e.target.dataset.type,
            testFile = '';

        if (files && files.length) {
            file = files[0];
            
            testFile = /^image\/\w+$/;
            blobURL = URL.createObjectURL(file);  
            
            if (testFile.test(file.type)) {

              var data = new FormData();
              this.imgFile = file;
              this.modifyImg (thisType);
            } else {
              this.initMsg('请选择图片')
            }
        }

    },
    subImg(index){
      if (index == 'head') {
        this.paraData.head_image = ''
      }
      else this.context.imgs.splice(index,1)

    },
    goto(arr){
      this.$router.push(arr)        
    },
    closeDialog (arr){
      this[arr] = false;
    },
    initMSG(arr){
      this.loading = true;
      this.loadError = arr;
      setTimeout(()=>{
        this.loading = false;
        this.loadError = '';
      },2000)
    },

  }
}
</script>

