<style src="./style.css" scoped></style>
<template src="./template.html"></template>

<script>
import {html} from '../../../assets/js/global.js';
import myhead from '../../../components/base/header'
import modalDialog from '../../../components/base/dialog'
import loading from '../../../components/base/loading'
import { mapState, mapActions } from 'vuex'
import axios from 'axios';
import qs from 'qs';

export default {
  data () {
    return {
      header:{
        'name':'公告管理',
        'link':'/admin/list',
      },
      loading:false,
      loadError:'',
      paraData:{
      },
      news:{
        title:'',
        desc:'',
        link:''  
      },
      listData:[],
      delFlag:false,
      curIndex:null,
      delSk:''
    }
  },
  components: {
    myhead,
    loading,
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
    }
    if (html.isPc()) {
      document.body.setAttribute('class','pcBody');
    }
    this.fetchNews()
  },
  methods: {
    initMSG(arr){
      this.loading = true;
      this.loadError = arr;
      setTimeout(()=>{
        this.loading = false;
        this.loadError = '';
      },2000)
    },
    addNews (){
      if (!this.news.title || !this.news.desc) {
        this.initMSG('请填写完成内容');
        return;
      }
      this.news.time = new Date().getFullYear()+'.'+(new Date().getMonth() +1)+'.'+new Date().getDate();
      this.paraData.msg = JSON.stringify(this.news)
      axios.post('/bonus_api/v1/bonus/push_notify',qs.stringify(this.paraData),{
          headers: {
              "A-Token-Header": this.token,
          }
        }).then((response)=>{   
          let resData = response.data;  
          if (resData.result) {
            this.fetchNews ()
            this.initMSG('添加成功');
            this.news.title = '';
            this.news.desc = '';
            this.news.link = '';
          }  else {
            this.initMSG(resData.codemsg);
          }
      }).catch((response)=>{
        this.initMSG('网络异常，请稍后再试');
      });  
    },
    fetchNews (){

      axios.post('/bonus_api/v1/bonus/fetch_notify',qs.stringify({
        uid:this.paraData.uid,
        start:0,
        count:50000
      },{
          headers: {
              "A-Token-Header": this.token,
          }
        }),{
          headers: {
              "A-Token-Header": this.token,
          }
        }).then((response)=>{   
          let resData = response.data;  
          if (resData.result) {
            this.listData = resData.result;
          }  
      }).catch((response)=>{
        // this.initMSG('网络异常，请稍后再试');
      });  
    },
    delNews (){

      axios.post('/bonus_api/v1/bonus/del_notify',qs.stringify({
        uid:this.paraData.uid,
        id:this.curIndex
      }),{
          headers: {
              "A-Token-Header": this.token,
          }
        }).then((response)=>{   
          let resData = response.data;  
          if (resData.result) {
            this.initMSG('删除成功');
            this.fetchNews ();
            this.delFlag = false;
          }  else{
            this.initMSG(resData.codemsg);
          }
      }).catch((response)=>{
        this.initMSG('网络异常，请稍后再试');
      });  
    },
    closeDialog(){
      this.delFlag = false
    }
  }
}
</script>

