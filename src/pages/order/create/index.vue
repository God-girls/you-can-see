<style src="./style.css" scoped></style>
<template src="./template.html"></template>

<script>
import loading from '../../../components/base/loading'
import myhead from '../../../components/base/header'
import myfooter from '../../../components/base/footer'
import {html} from '../../../assets/js/global.js';
import {parse} from '../../../assets/js/address-parse.js';
import { mapState, mapActions } from 'vuex'
import wx from 'weixin-js-sdk'; 
import axios from 'axios';
import qs from 'qs';
export default {
  data () {
    return {
      show1:true,     
      header:{
        'name':'发布商品',
        'link':'/',
      },
      headImg:'',
      isCur: 1,
      isSlider:0,
      token:'',
      begin_seconds:false,
      statusBar:{},
      historyTotalPN:1,
      bottomBarH:[],
      loading:false,
      loadError:'',
      leftTime:'00:00:00',
      paraData:{
        count:1,
        receiver:'',
        goodid:'',
        mobileno:'',
        address:''
      },
      isApp:'',
      navType:'my',
      profile:{},
      imgUrl:[],
      imgFile:[],
      isWechat:false,
      choosed:0,
      prdID:'',
      defaultImgLen:0,
      listData:[],
      priceSet:'',
      priceRang:'',
      loadImg : 0,
      search:'',
      products:[],
      amount:1,
      singlePrice:0,
      totalPrice:0,
      addressArea:'',
      scrollFlag:true,
      scrollLeftpx:0,
      noticeData:[],
      listOption:'',
      showSearch:false
    }
  },
  components: {
    loading,
    myhead,
    myfooter
  },
  watch: {//深度 watcher
    'listOption': {
      handler (val, oldVal) { 
        // debugger
        if (val == '-1') return;
        if (this.listData.length) {
          this.paraData.goodid = this.listData[val].id;
          this.search = this.listData[val].title
          this.singlePrice = this.listData[val].price; 
          this.totalPrice = html.mul(this.singlePrice,this.paraData.count)
          this.hasClick = true; 
          this.showSearch = false; 
        }
      },
      deep: true
    },
    'search': {
      handler (val, oldVal) { 
        console.log(val)
        if (!this.search) {
          this.singlePrice = 0;
          this.totalPrice = 0;
          this.paraData.goodid = '';
          this.hasClick = false;
        }else{
          if (!this.hasClick) this.showSearch = true;
        }
      },
      deep: true
    },
  },
  computed:{
    ...mapState([
      // 映射 this.count 为 store.state.count
      'UID',
      'TOKEN',
      'CART'
    ]),
    searchIn() {
      if (this.search !== '') {
        return this.products.filter( (item)=> {
          return item.title.indexOf(this.search) > -1
        })
      }
      return []
    }
  },
  created(){
    if (html.isPc()) {
      document.body.setAttribute('id','pcBody');
    }
    this.paraData.uid = this.UID;
    this.token = this.TOKEN;
    if (this.$route.query.id) {
      this.prdID = this.$route.query.id
    }
    this.fetchList();
    this.fetchNotice();
  },
  mounted () {

    this.scrollLeft();
    dplus.track('创建商品',{'from':html.useragent()});//统计代码
    document.body.addEventListener('touchstart', function () {});

  },
  methods: {
    ...mapActions([
      'switchState', // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`'
    ]),
    selectData(item) {
      this.hasClick = true;
      this.paraData.goodid = item.id;
      this.search = item.title
      this.singlePrice = item.price;
      this.totalPrice = html.mul(item.price,this.paraData.count);   
      this.showSearch = false;
    },
    scrollLeft(){
      var x = document.getElementById('textwrap');
      var y = document.getElementById('text1');

      this.tempWidth = x.offsetWidth;
      this.scrollLeftpx = x.offsetWidth + 'px';
      this.scrollFlag = true;

      this.testScroll = ()=> {
        if (this.tempWidth < - y.offsetWidth){
            this.scrollLeftpx = x.offsetWidth + 'px';
            this.tempWidth = x.offsetWidth;
        }else{
            this.scrollLeftpx = this.tempWidth-- + 'px';
        }
      }
      this.scrollTimer = setInterval(this.testScroll,html.isWawaIos()?10:15);
    },
    initPrice(){
      this.curSpecs = html.objClone(this.CART.specs);
      // debugger
      this.priceSet = html.objClone(this.CART.priceSet);
      if (this.curSpecs.length) {
        let tempArr = []
        for (var i in this.priceSet.list) {
          tempArr.push(Number(this.priceSet.list[i]))
        }

        tempArr.sort(function compare(val1,val2){return val1-val2;})

        if (tempArr.length) this.priceRang = '￥' + tempArr[0];
        if (tempArr.length > 1) {
          this.priceRang += '-' + tempArr.pop()
        }
      }
    },
    initMSG(arr){
      this.loading = true;
      this.loadError = arr;
      setTimeout(()=>{
        this.loading = false;
        this.loadError = '';
      },2000)
    },
    addressParse(address){
      if (!address) return;
      
      let parseResult = parse(address);
      // console.log(parseResult)
      this.paraData.receiver = parseResult.name;
      this.paraData.mobileno = parseResult.phone || parseResult.mobile;
      this.paraData.address = (parseResult.province == parseResult.city ? parseResult.city + '市' : parseResult.province + '省' + parseResult.city + '省') 
                               + parseResult.area + parseResult.addr;

      document.getElementById('address').scrollIntoView()
    },
    minusPlus(flag,index){

      if (flag) {
        this.paraData.count++;
      }else{
          if (this.paraData.count == 1) return;
          this.paraData.count--;            
      }
      this.totalPrice = html.mul(this.singlePrice,this.paraData.count)
    },
    changeInput(type){
      if (isNaN(this.paraData.count)) {
        this.paraData.count = 1
      }
      if (this.paraData.count) {
        if (this.paraData.count <= 0) {
          this.paraData.count = 1
        }
      }  
      this.totalPrice = html.mul(this.singlePrice,this.paraData.count)      
    },
    fetchNotice(){

      axios.post('/seller_api/v1/proxy/list_notice',qs.stringify({
        uid:this.paraData.uid,
        ps:5,
        pn:1
      }),{
        headers: {
            "A-Token-Header": this.token,
        }
      }).then((response)=>{   
          let resData = response.data;  
          if (resData.success) {
            this.noticeData = resData.result.items;
          }  else {
            if (resData.code == '403' || resData.code == '250') {
              this.redirect()
            }else{
              this.initMSG(resData.codemsg)
            }
          }
      }); 

    },
    fetchList(){
      
      axios.post('/seller_api/v1/proxy/fetch_goods',qs.stringify({
        uid:this.paraData.uid,
        ps:1000,
        pn:1
      }),{
          headers: {
              "A-Token-Header": this.token,
          }
        }).then((response)=>{   
          this.bugInfinite = false;
          let resData = response.data;  
          if (resData.success) {

            let ranks = resData.result;

            this.listData = ranks.items;
            this.products = ranks.items;
            this.loading = false;
            this.listData.forEach((item)=> {
              if (item.id == this.prdID) {
                this.search = item.title;
                this.paraData.goodid = item.id;
                this.hasClick = true;
                this.singlePrice = item.price;
                this.totalPrice = item.price;
                this.showSearch = false; 
              }
            });    

          }  else {
            if (resData.code == '403' || resData.code == '250') {
              this.redirect()
            }
            else this.initMSG(resData.codemsg);
          }
      }).catch((response)=>{
        this.bugInfinite = false;
      });  

    },
    created(){
      if (!this.paraData.goodid || !this.paraData.receiver || !this.paraData.mobileno
          || !this.paraData.address) {
        this.initMSG('请输入完整的信息')
        return;
      }
      this.loading = true;

      axios.post('/seller_api/v1/proxy/create_order',qs.stringify(this.paraData),{
          headers: {
              "A-Token-Header": this.token,
          }
        }).then((response)=>{   
        this.loading = false;        
          let resData = response.data;  
          if (resData.success) {
             this.switchState({
              CART:Object.assign({},{
                orderid:resData.result.orderid,
                postage:resData.result.postage,
                price:html.mul(this.singlePrice,this.paraData.count),
                goodName:this.search
              },this.paraData)
            });
           this.$router.push('/order/submit')
          }  else {
            if (resData.code == '403' || resData.code == '250') {
              this.redirect()
            }else{
              this.initMSG(resData.codemsg)
            }
          }

      }).catch(function(response){});        
    },
    redirect(){
      location.href = html.openInWechat(this.ttDomain + '/#/app/author');
    },
    goto (arr){
       this.$router.push(arr);        
    },
    closeDialog (arr){
      this[arr] = false
    }
  },
  beforeDestroy(){
  }
}
</script>

