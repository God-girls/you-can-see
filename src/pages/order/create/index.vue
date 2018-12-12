<style src="./style.css" scoped></style>
<template src="./template.html"></template>

<script>
import loading from '../../../components/base/loading'
import myhead from '../../../components/base/header'
import {html} from '../../../assets/js/global.js';
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
        price:{},
        imgs:[]
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
      curSpecs:[],
      priceSet:'',
      curPrice:[],
      priceRang:'',
    }
  },
  components: {
    loading,
    myhead,
  },
  computed:{
    ...mapState([
      // 映射 this.count 为 store.state.count
      'UID',
      'TOKEN',
      'PROFILE',
      'STATUSBARH',
      'CART'
    ])
  },
  created(){
    if (this.$route.query.id) {
      document.title = '修改商品';
    }
  },
  mounted () {

    if (this.TOKEN) {
      this.profile = this.PROFILE;
      this.paraData.uid = this.UID;
      this.token = this.TOKEN;
    }
    this.imgFile = this.CART.imgFile?this.CART.imgFile:[]; 
    this.paraData.desc = this.CART.desc;
    this.imgUrl = this.CART.imgUrl?this.CART.imgUrl:[]; 
    this.choosed = this.imgUrl.length ? this.imgUrl.length : 0;
    this.initPrice()
    this.autoTextarea(document.getElementById("text"),'',500)
    if (this.$route.query.id) {
      this.prdID = this.$route.query.id
      if (!this.CART.imgFile) this.fetchList();
    }

    dplus.track('我的',{'from':html.useragent()});//统计代码
    document.body.addEventListener('touchstart', function () {});

  },
  methods: {
    ...mapActions([
      'switchState', // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`'
    ]),
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
    fetchList(){

      axios.post('/seller_api/v1/seller/seller_goods_info',qs.stringify({
        uid:this.paraData.uid,
        gid:this.prdID
      }),{
        headers: {
            "A-Token-Header": this.token,
        }
      }).then((response)=>{   
        
        let resData = response.data;  

        if (resData.success) {
          // debugger          
          this.imgFile = JSON.parse(resData.result.imgs); 
          this.paraData.desc = resData.result.description;
          this.imgUrl = []
          for (var i = 0; i < this.imgFile.length; i++) {
            this.imgUrl.push(this.globalAvatar+'goods/'+this.imgFile[i])
          }
          this.choosed = this.imgFile.length;
          let temPrice = JSON.parse(resData.result.ext);
          if (!temPrice.list) {
            temPrice.list = {}
          }
          this.switchState({
            CART:Object.assign(this.CART,{
              imgFile:this.imgFile,
              desc:this.paraData.desc,
              imgUrl:this.imgUrl,
              priceSet:temPrice,
              specs:resData.result.spec ? JSON.parse(resData.result.spec) : [],
              other:{
                show_comment:resData.result.show_comment,
                show_sell:resData.result.show_sell,
                sell_base:resData.result.sell_base
              }
            })
          })    
          this.initPrice();
          // this.imgFile = this.CART.imgFile?this.CART.imgFile:[]; 
          // this.imgUrl = this.CART.imgUrl?this.CART.imgUrl:[]; 

        }  else {
          if (resData.code == '403' || resData.code == '250') {
            this.goto('/');
          }else{
            this.initMSG(resData.codemsg)
          }
        }
      })

    },
    chooseImg(){
      // console.log(this.choosed)
      let _this = this;
      wx.chooseImage({
          count: 9 - this.choosed, // 默认9
          sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
          success: function (res) {
            var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
            this.defaultImgLen = localIds.length;
            _this.showImg(localIds)            
          }
      });      
    },
    showImg(localIds){
      let _this = this;
      let localId = localIds.shift();
      wx.getLocalImgData({
        localId: localId,
        success: function (res) {
          let localData = res.localData;
          if (localData.indexOf('data:image') != 0) {//判断是否有这样的头部
              localData = 'data:image/jpeg;base64,' +  localData
          }
          localData = localData.replace(/\r|\n/g, '').replace('data:image/jgp', 'data:image/jpeg')
          //第一个替换的是换行符，第二个替换的是图片类型，因为在IOS机上测试时看到它的图片类型时jgp，
          //这不知道时什么格式的图片，为了兼容其他设备就把它转为jpeg
          _this.imgUrl.push(localData)
          
          _this.choosed++;

          if(localIds.length > 0){
              _this.showImg(localIds);
          }else{
            _this.loadImg = 0;
            _this.modifyImg(_this.imgUrl[0])
          }
        }
      })
    },
    previewImage(currentImg){
      wx.previewImage({
        current: currentImg,
        urls: this.imgUrl
      });
    },
    delImg (index){
      // debugger
      // console.log(index)
       this.imgUrl.splice(index,1);
       this.imgFile.splice(index,1);
       this.choosed--;
    },
    initMSG(arr){
      this.loading = true;
      this.loadError = arr;
      setTimeout(()=>{
        this.loading = false;
        this.loadError = '';
      },2000)
    },
    modifyImg (b64data){
      // alert(this.loadImg)
      axios.post('/seller_api/v1/seller/upload_image',qs.stringify({
        uid:this.paraData.uid,
        image_b64:b64data
      }),{
          headers: {
              "A-Token-Header": this.token,
              // 'Content-Type':'multipart/form-data'
          }
        }).then((response)=>{   
          // this.loading = false;        
          let resData = response.data;  
          if (resData.success) {
            
            this.imgFile.push(resData.result)
            this.loadImg++;

            if (this.loadImg < this.imgUrl.length) {
              // alert(this.imgUrl[this.loadImg])
              this.modifyImg(this.imgUrl[this.loadImg])
            }
            // this.getProfile ();
          }  else {
            if (resData.code == '403' || resData.code == '250') {
              this.goto('/')
            }else{
              this.initMSG(resData.codemsg)
            }
          }

      }).catch(function(response){})
    },
    /**
    * 文本框根据输入内容自适应高度
    * @param                {HTMLElement}        输入框元素
    * @param                {Number}                设置光标与输入框保持的距离(默认0)
    * @param                {Number}                设置最大高度(可选)
    */
    autoTextarea (elem, extra, maxHeight) {
        extra = extra || 0;
        var isFirefox = !!document.getBoxObjectFor || 'mozInnerScreenX' in window,
        isOpera = !!window.opera && !!window.opera.toString().indexOf('Opera'),
                addEvent = function (type, callback) {
                        elem.addEventListener ?
                                elem.addEventListener(type, callback, false) :
                                elem.attachEvent('on' + type, callback);
                },
                getStyle = elem.currentStyle ? function (name) {
                        var val = elem.currentStyle[name];
 
                        if (name === 'height' && val.search(/px/i) !== 1) {
                                var rect = elem.getBoundingClientRect();
                                return rect.bottom - rect.top -
                                        parseFloat(getStyle('paddingTop')) -
                                        parseFloat(getStyle('paddingBottom')) + 'px';        
                        };
 
                        return val;
                } : function (name) {
                                return getComputedStyle(elem, null)[name];
                },
                minHeight = parseFloat(getStyle('height'));
 
        elem.style.resize = 'none';
 
        var change = function () {
                var scrollTop, height,
                        padding = 0,
                        style = elem.style;
 
                if (elem._length === elem.value.length) return;
                elem._length = elem.value.length;
 
                if (!isFirefox && !isOpera) {
                        padding = parseInt(getStyle('paddingTop')) + parseInt(getStyle('paddingBottom'));
                };
                scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
 
                elem.style.height = minHeight + 'px';
                if (elem.scrollHeight > minHeight) {
                        if (maxHeight && elem.scrollHeight > maxHeight) {
                                height = maxHeight - padding;
                                style.overflowY = 'auto';
                        } else {
                                height = elem.scrollHeight - padding;
                                style.overflowY = 'hidden';
                        };
                        style.height = height + extra + 'px';
                        scrollTop += parseInt(style.height) - elem.currHeight;
                        document.body.scrollTop = scrollTop;
                        document.documentElement.scrollTop = scrollTop;
                        elem.currHeight = parseInt(style.height);
                };
        };
 
        addEvent('propertychange', change);
        addEvent('input', change);
        addEvent('focus', change);
        change();
    },
    created(){
      let obj = {};
      obj.spec_name = this.CART.priceSet.spec_name;
      obj.def_price = this.CART.priceSet.def_price;
      obj.price = this.CART.priceSet.list;

      this.paraData.imgs = JSON.stringify(this.imgFile);
      this.paraData.price = JSON.stringify(obj)
      if (this.CART.specs.length) 
        this.paraData.spec = JSON.stringify(this.CART.specs);
      this.paraData.show_comment = this.CART.other.show_comment;
      this.paraData.show_sell = this.CART.other.show_sell;
      this.paraData.sell_base = this.CART.other.sell_base;
      this.paraData.ext = JSON.stringify(this.CART.priceSet);
      if (this.prdID) this.paraData.gid = this.prdID;
      
      if (!this.paraData.desc) {
        this.initMSG('添加商品描述')
        return;
      }
      if (!this.imgUrl.length) {
        this.initMSG('请选择图片');
        return
      }


      if (!obj.spec_name || obj.spec_name != '*' && !Object.keys(obj.price).length) {
        this.initMSG('请设置定价')
        return;
      }
      if (obj.spec_name == '*') {
        this.paraData.spec = ''
      }

      this.loading = true;
      if (this.imgUrl.length != this.imgFile.length) {
        setTimeout(()=>{
          this.created();
        },1000)
        return;
      }

      axios.post('/seller_api/v1/seller/create_goods',qs.stringify(this.paraData),{
          headers: {
              "A-Token-Header": this.token,
          }
        }).then((response)=>{   
        this.loading = false;        
          let resData = response.data;  
          if (resData.success) {
            this.initMSG(this.prdID?'修改成功':'发布成功');
            setTimeout(()=>{
              this.goto('/')
            },2000)
          }  else {
            if (resData.code == '403' || resData.code == '250') {
              // this.goto('/')
            }else{
              this.initMSG(resData.codemsg)
            }
          }

      }).catch(function(response){});        
    },
    goto (arr){
      if (arr != '/') {
        this.switchState({
          CART:Object.assign(this.CART,{imgFile:this.imgFile,desc:this.paraData.desc,imgUrl:this.imgUrl})
        })      
      }else{
        //初始化数据
        this.switchState({
          CART:{
              priceSet:{
                  def_price:'',
                  subIndex: 0,
                  curIndex:0,
                  price:[] ,
                  list:{}               
              },
              specs:[],
              other:{
                  show_comment:true,
                  show_sell:true,
                  sell_base:0
              }
          }
        });
        this.imgUrl = [];
        this.paraData = {
          price:{},
          imgs:[]
        };
        this.imgFile = []
      }
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

