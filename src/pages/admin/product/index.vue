<style src="./style.css" scoped></style>
<template src="./template.html"></template>

<script>
import nodate from '../../../components/base/nodate'
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
        'name':'商品管理',
        'link':'/admin/list',
        // isNobg:true,
      },
      qiimgs:'',
      isCur: 0,
      isSlider:0,
      token:'',
      noDataText:'',
      loading:false,
      begin_seconds:false,
      isIosvg:false,
      isIosvgX:false,
      submit:false,
      statusBar:{},
      loadError:'',
      historyTotalPN:1,
      bottomBarH:[],
      tabs:[
        '托管',
        // '1',
        // '已退货',
        // '1',
        // '已提取'
      ],
      leftTime:'00:00:00',
      curFomoData:{},
      isApp:'',
      navType:'shop',
      paraData:{
        pn:1
      },
      totalTrade:'0.00000',
      earthData:{},
      checked:[],
      myWallet:{},
      storeList:[],
      checkboxModel:[],
      withDrawWids:''
    }
  },
  components: {
    loading,
    myhead,
    nodate,
    modalDialog
  },
  computed:{
    ...mapState([
      'PROFILE',
      'TOKEN',
      'UID',
      'RECORDPRD'
    ])
  },
  watch:{
    'checkboxModel': {
      handler (val, oldVal) { 
        if (this.checkboxModel.length === this.storeList.length) {
          this.checked=true;
        }else{
          this.checked=false;
        }
        // console.log(this.checked)
      },
      deep: true
    },
  },
  mounted () {
    if (html.isPc()) {
      document.body.setAttribute('class','pcBody');
    }


    if (this.TOKEN) {
      this.token = this.TOKEN;
      this.profile = this.PROFILE;
      this.paraData.uid = this.UID;
    }

    dplus.track('我的托管',{'from':html.useragent()});//统计代码
    document.body.addEventListener('touchstart', function () {});

  },
  methods: {
    ...mapActions([
      'switchState', // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`'
    ]),
    getStatusBar(){
      if (localStorage['bottomBarH']) {
        let statusLocalBarH = JSON.parse(localStorage['bottomBarH']);
        this.bottomBarH = statusLocalBarH['padding-bottom'];    
      }
      if (localStorage['statusBarH']) this.isApp = JSON.parse(localStorage['statusBarH'])
    },
    onRefresh(done){
      this.totalPageCount = -1;
      this.paraData.pn = 1;
      setTimeout(()=>{
        this.fetchStore(done);
      },1000)
    },
    onInfinite(done) {   
      this.indexDone = done;   
      this.fetchStore(done);
    },
    fetchStore(done){
      this.noData = false;

      if ((this.totalPageCount+1 == this.paraData.pn || this.totalPageCount == 0 || this.totalPageCount == 1 )){
        if(done) done(true) 
        return;
      }

      axios.post('/bonus_api/v1/console/list_goods',qs.stringify({
        uid:this.paraData.uid,
        pn:this.paraData.pn,
        ps:50
      }),{
        headers: {
            "A-Token-Header": this.token,
        }
      }).then((response)=>{   
        
          let resData = response.data;  
          if (resData.success) {
            if (this.paraData.pn == 1) {
              this.storeList = resData.result.items;
              if (!this.storeList.length) this.noData = true;
            }else{
              this.storeList = this.storeList.concat(resData.result.items);
            }
            console.log(this.storeList)
            this.paraData.pn = this.paraData.pn + 1;        
            this.historyTotalPN = resData.result.totalPageCount;
            this.totalPageCount = resData.result.totalPageCount;
          }  else {
            if (resData.code == '403' || resData.code == '250') {
              this.goto('/');
            }else{
              this.initMSG(resData.codemsg)
            }
            this.totalPageCount = 1
          }
          if (done) done()
      }).catch((response)=>{
        // this.initMSG('呃哦，网络异常，再试一次~')
      });  
    },
    single(wid){
      this.withDrawWids = wid;
      this.submit = true;
    },
    double(){
      this.withDrawWids = this.checkboxModel.join(',');
      this.submit = true;
    },
    accept(wid){

      axios.post('/bonus_api/v1/console/audit_withdraw',qs.stringify({
        uid:this.paraData.uid,
        wid:this.withDrawWids
      }),{
        headers: {
            "A-Token-Header": this.token,
        }
      }).then((response)=>{   
        
          let resData = response.data;  
          if (resData.success) {
            this.onRefresh();
            this.initMSG('审核通过');
            this.submit = false;
          }  else {
            if (resData.code == '403' || resData.code == '250') {
              this.goto('/');
            }else{
              this.initMSG(resData.codemsg)
            }
            this.totalPageCount = 1
          }
          if (done) done()
      }).catch((response)=>{
        // this.initMSG('呃哦，网络异常，再试一次~')
      });  
    },
    checkedAll(){
      if (this.checked) {//实现反选
        this.checkboxModel = [];
        this.storeList.forEach((item)=> {
          this.checkboxModel.push(item.id);
        });
      }else{//实现全选
        this.checkboxModel = [];
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
    goto (arr){
       this.$router.push(arr)        
    },
    goRecord(item){
      this.switchState({
        RECORDPRD:item
      })
      this.$router.push('/admin/edit?id='+item.id)        
    },
    tabChange (index){
      this.paraData.pn = 1;
      this.isCur = index;
      this.fetchBack()
    }
  },
}
</script>

