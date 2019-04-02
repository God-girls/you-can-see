
<style src="./style.css" scoped></style>
<template src="./template.html"></template>
<script>
import myfooter from '../../components/base/footer'
import loading from '../../components/base/loading'
import modalDialog from '../../components/base/dialog'
import nodate from '../../components/base/nodate'
import {html} from '../../assets/js/global.js';
import { mapState, mapActions } from 'vuex'
import wx from 'weixin-js-sdk'; 
import axios from 'axios';
import qs from 'qs';

export default {
  components: {
    modalDialog,
    myfooter,
    loading,
    nodate,
  },
  data () {
    return {
      listData: [], // 下拉更新数据存放数组
      isCur: 0,
      isSlider:0,
      header:{
        'name':'小小麦',
        noBack:true
      },
      isApp:false,
      needLogin:false,
      success:false,
      paraData:{
        uid:'1',
        category:'',
        pn:1,
        ps:20
      },
      noDataText:'--技术支持：小小麦--',
      headImg:'',
      noDataText:'',
      token:'',
      wechat_code:false,
      wechat_code_show:false,
      showClipper:false,
      img: '',
      onlyWechat:false,
      loading:false,
      loadError:'',
      noData:false,
      setTel:false,
      popBuy:false,
      popFriend:false,
      oneReply:false,
      changebg:false,
      countBonus:0,
      statusBar:{},
      bottomBarH:'',
      navType:'task',
      profile:{},
      reply:false,
      webClick:false,
      fromShare:false,
      shareFlag:false,
      showCanvas:false,
      praised:false,
      placeholder:'评论',
      fetBonusType:[],
      popIndex:0,
      del:false,
      scrollFlag:false,
      myContact:false,
      scrollLeftpx:'',
      testCanvas:'',
      noticeData:[],
      totalBonus:0,
      sellerInfo:{
        background:''
      },
      tabs:[
        {'title':'全部',"id":'',"updated_at":"2019-03-20 15:51:57","uid":10,"state":1,"created_at":"2019-03-20 15:51:57","idModified":false,"identifier":5},
      ],
      comment:{
        tips:'',
        cid:'',
        gid:''
      },
      shareData:{
        title:'',
        desc:'',
        shareText:''
      },
      copyWords:'',
      curListIndex:0,
      tempLen:0,
      newGuide:false,
      guideIndex:0,
      categoryData:''
    }
  },
  computed:{
    ...mapState([
      // 映射 this.count 为 store.state.count
      'UID',
      'TOKEN',
      'PROFILE',
      'STATUSBARH',
      'BOTTOMBARH',
      'LISTDATA',
      'CART'
    ])
  },
  created(){
    if (html.isPc()) {
      document.body.setAttribute('id','pcBody');
    }
    this.token = this.TOKEN;
    this.paraData.uid = this.UID;  
    this.fetchCategory();
  },
  mounted () {

    dplus.track('小小麦产品列表',{'from':html.useragent()});//统计代码
    document.body.addEventListener('touchstart', function () {}); 
  },
  methods: {
    ...mapActions([
      'switchState', // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`'
      'clearState',
    ]),
    fetchCategory(){

      axios.post('/seller_api/v1/proxy/list_category',qs.stringify({
        uid:this.paraData.uid,
      }),{
        headers: {
            "A-Token-Header": this.token,
        }
      }).then((response)=>{   
        
        let resData = response.data;  
        if (resData.success) {
          // this.categoryData = resData.result;
          this.tabs = this.tabs.concat(resData.result)
          // console.log(this.tabs)
        }  else {
          if (resData.code == '403' || resData.code == '250') {
            this.goto('/')
          }else{
            this.initMSG(resData.codemsg)
          }
        }
      }); 
    },
    fetchList(done){

      if (this.totalPageCount+1 == this.paraData.pn || this.totalPageCount == 0 || this.totalPageCount == 1 || this.bugInfinite){
        if(done) done(true) 
        return;
      }
      //debugger
      
      axios.post('/seller_api/v1/proxy/fetch_goods',qs.stringify(this.paraData),{
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
    initMSG(arr){
      this.loading = true;
      this.loadError = arr;
      setTimeout(()=>{
        this.loading = false;
        this.loadError = '';
      },2000)
    },
    closeDialog (arr){
        this[arr] = false;
    },
    changeType(index,item){
      this.isCur = index;
      this.paraData.category = item.id;
        this.totalPageCount = -1;
        this.paraData.pn = 1;
      this.fetchList()
    },
    goto (arr,title){
      this.$router.push(arr)
    },
  },
  beforeDestroy(){
    this.switchState({
      LISTDATA:this.listData
    })          
  }
}
</script>

