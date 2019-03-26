<style src="./style.css" scoped></style>
<template src="./template.html"></template>

<script>
// import {setupWebViewJavascriptBridge} from '../../../assets/js/iosbridge.js';
import modalDialog from '../../../components/base/dialog'
import myhead from '../../../components/base/header'
import nodate from '../../../components/base/nodate'
import {html} from '../../../assets/js/global.js';
import { mapState, mapActions } from 'vuex'
import axios from 'axios';
import qs from 'qs';
// let myEcho = Echo();

export default {
  data () {
    return {
      listData: [], // 下拉更新数据存放数组
      header:{
        'name':'最新公告',
        'link':'/',
      },
      qiimgs:'',
      isCur: 1,
      isSlider:0,
      profile:{},
      token:'',
      noDataText:'',
      paraData:{
        uid:'',
        ps:10,
        pn:1
      },
      paraDataW:{
        uid:'',
        ps:100,
        pn:1
      },
      isApp:false,
      needLogin:false,
      loading:false,
      noData:false,
      statusBar:{},
      hasOrderIndex:'',
      current:1,
      friendRank:0,
      wordkRank:0,
      rankAnimated:0,
      bottomBarH:'',
      navType:'rank',
    }
  },
  components: {
    modalDialog,
    myhead,
    nodate,
    // myfooter
  },
  computed:{
    ...mapState([
      // 映射 this.count 为 store.state.count
      'UID',
      'TOKEN',
    ]),
  },
  created(){
    if (html.isPc()) {
      document.body.setAttribute('id','pcBody');
    }
    this.paraData.uid = this.UID;
    this.token = this.TOKEN;
    // this.fetchList();
  },
  mounted () {

    document.body.addEventListener('touchstart', function () {});

  },
  methods: {
    getStatusBar(){
      if (localStorage['bottomBarH']) {
        let statusLocalBarH = JSON.parse(localStorage['bottomBarH']);
        this.bottomBarH = statusLocalBarH['padding-bottom'];    
      }
    },
    fetchList(done){

      if (this.totalPageCount+1 == this.paraData.pn || this.totalPageCount == 0 || this.totalPageCount == 1 || this.bugInfinite){
        if(done) done(true) 
        return;
      }
      //debugger
      
      axios.post('/seller_api/v1/proxy/list_notice',qs.stringify(this.paraData),{
          headers: {
              "A-Token-Header": this.token,
          }
        }).then((response)=>{   
          this.bugInfinite = false;
          let resData = response.data;  
          if (resData.success) {

            let ranks = resData.result;
            this.totalPageCount = ranks.totalPageCount;

              if (this.paraData.pn == 1) {
                  this.curListIndex = 0;

                  this.listData = ranks.items;

                  if (this.listData.length == 0){
                    this.noData = true;
                    if(done) done(true);
                  }else{
                    this.noData = false
                  }
              }
              else {
                this.listData = this.listData.concat(ranks.items);
              }
              
              this.loading = false;
              this.paraData.pn = this.paraData.pn + 1;

          }  else {
            if (resData.code == '403' || resData.code == '250') {
              if(done) done(done);
              this.goto('/')
            }
            else this.initMSG(resData.codemsg);
          }
          if(done) done();
      }).catch((response)=>{
        this.bugInfinite = false;
        if(done) done(done)
      });  

    },
    onRefresh(done) {
      if (this.refreshed) return;
      this.refreshed = true;
      setTimeout(()=>{
        this.refreshed = false;
        this.totalPageCount = -1;
        this.paraData.pn = 1;
        this.fetchList(done);  
      },1000)
    },
    onInfinite(done) {  
      if (this.infinited) return;
      this.infinited = true;
      setTimeout(()=>{
        this.infinited = false;
        this.indexDone = done;   
        this.fetchList(done);
      },500)
    },    
    goto(arr){
      if (arr != '') this.$router.push(arr);
    },
    initMsg(){
      this.loading = true;
      setTimeout(()=>{
        // this.errorMsg = '';
        this.loading = false;
      },3000)
    },
  }
}
</script>

