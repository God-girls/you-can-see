
<style src="./style.css" scoped></style>
<template src="./template.html"></template>

<script>
import {html} from '../../../assets/js/global.js';
import myhead from '../../../components/base/header'
import {map} from '../../../assets/js/map.js'
import modalDialog from '../../../components/base/dialog'
import loading from '../../../components/base/loading'
import { mapState, mapActions } from 'vuex'
import wx from 'weixin-js-sdk'; 
import axios from 'axios';
import qs from 'qs';

export default {
  components: {
    myhead,
    modalDialog,
    loading
  },
  data () {
    return {
      header:{
        'name':'购买',
        'link':'/prd/list',
      },
      whichOne:'',
      selectOne:false,
      loading:false,
      loadError:'',
      profile:{
        power:0
      },
      listData:{
        district:{}
      },
      isBc: false, // 用于控制保存按钮高亮
      toggle: false, // 用于切换默认地址
      showDeter: false,
      oneac: true,
      twoac: false,
      threeac: false,
      twoshow: false,
      threeshow: false,
      // userAddress: '',
      oneliIndex: '', // 用于高亮子菜单
      twoliIndex: '',
      titleIndex: Number,
      showProvince: true, // 第一个li默认显示
      showCity: false, // 第二个li默认隐藏
      showDistrict: false, // 第三个li默认隐藏
      showCityList: [],
      showDistrictList: [],
      province: '',
      city: '',
      district: '',
      // GetProvinceId: 2,
      District: '',
      Province: '',
      City: '',
      // v-for循环判断是否为当前
      selected: true,
      info: [], // 三级联动城市列表,
      editAddress:'',
      isEdit:false,
      istoggHeight:false,
      islayout:false,
      amount:1,
      statusBarH:'',
      bottomBarH:'',
      paraData:{
        commdityid:101,
        channel:'W4',//W4 公众号支付 W5微信支付 W2
        goods:'',
        context:'',
        agent:'qq'
      },
      sellerInfo:{
        imgs:'[]'
      },
      paraReceive:{},
      payment_url:{},
      singlePrice:0,
      totalPrice:0,
      amount:1,
      indexArr:[],
      buyTemp:{
        count:1
      },
      buyList:[],
      addressList:[],
      selectIndex:0
    }
  },
  computed:{
    ...mapState([
      // 映射 this.count 为 store.state.count
      'UID',
      'TOKEN',
      'PROFILE',
      'STATUSBARH',
      'EDITPRD'
    ])
  },
  created () {
    this.info = map.concat([]);


    if (html.isWechat()) {
      this.header.opacity = true;
      this.paraData.agent = 'weixin' 
    }

  },
  mounted: function () {

    if (this.TOKEN) {
      this.token = this.TOKEN;
      this.paraData.uid = this.UID;
      this.profile = this.PROFILE;
      this.editPrd = this.EDITPRD;
      this.paraData.goodsid = this.editPrd.goodsid;
      this.fetchAddress()
    }
    if (this.$route.query.seller) {
      this.mySeller = this.$route.query.seller;
      this.goodid = this.$route.query.goodid;
      this.header.link = '/prd/list?seller=' + this.mySeller;
      if (this.$route.query.from) {
        this.header.link = '/prd/list?goodid='+this.goodid+'&seller=' + this.mySeller;
      }
      this.fetchPrd();
    }
    dplus.track('订单确认',{'from':html.useragent()});//统计代码
  },
  methods: {
    ...mapActions([
      'switchState', // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`'
      'clearState'
    ]),
    getStatusBar(){
      if (localStorage['bottomBarH']) {
        let statusLocalBarH = JSON.parse(localStorage['bottomBarH']);
        this.bottomBarH = statusLocalBarH['padding-bottom'];    
      }
      if (localStorage['statusBarH']) this.statusBarH = JSON.parse(localStorage['statusBarH'])
    },
    fetchPrd(){
      axios.post('/seller_api/v1/seller/goods_info',qs.stringify({
        uid:this.mySeller,
        gid:this.goodid
      }),{
        headers: {
            "A-Token-Header": this.token,
        }
      }).then((response)=>{   
        // alert()
          let resData = response.data;  

          if (resData.success) {
            this.sellerInfo = resData.result;
            if (this.sellerInfo.spec) 
              this.indexArr.length = JSON.parse(this.sellerInfo.spec).length
            if (JSON.parse(resData.result.price).spec_name == '*') {
              this.singlePrice = Number(this.sellerInfo.price_range)
              this.totalPrice = this.singlePrice;
            }else{
              this.specPrice = JSON.parse(resData.result.price).price;
              this.specName = JSON.parse(resData.result.price).spec_name;
            }
          }  else {
            if (resData.code == '403' || resData.code == '250') {
              // this.goto('/')
            }else{
              this.initMSG(resData.codemsg)
            }
          }
      })

    },
    fetchAddress (){
      axios.post('/seller_api/v1/user/fetch_receive_info',qs.stringify({
        uid:this.paraData.uid
      }),{
          headers: {
              "A-Token-Header": this.token,
          }
        }).then((response)=>{           
          let resData = response.data;  
          this.loading = false
          if (resData.success) {            
            this.addressList = resData.result;
            if (resData.result.length) { // 
              
              this.setDefault(resData.result[0],0)

            }else{
              this._newArr(this.info, -1)
            }

          }else {
            if (resData.code == '403' || resData.code == '250') {
               // this.goto('/')
            }
          }
      }).catch(function(response){});  
    },
    updateAddress (){
      
      let temObj = {}
      temObj.info = JSON.stringify({
        editDate:{
          province:this.province,
          city:this.city,
          district:this.district
        },
        name:this.paraReceive.name,
        tel:this.paraReceive.tel,
        address:this.paraReceive.address,
        district:{
          Province:this.Province,
          City:this.City,
          District:this.District
        }
      })
      temObj.uid = this.paraData.uid;
      temObj.def = true;
      if (this.addressID) {
        temObj.id = this.addressID;
      }
      axios.post('/seller_api/v1/user/update_receive_info',qs.stringify(temObj),{
          headers: {
              "A-Token-Header": this.token,
          }
        });  
    },
    setDefault(item,index){
      this.selectOne = false;
      this.selectIndex = index;
      this.isEdit = true;
      this.showDeter = true;
      let editAddress = JSON.parse(item.info);
      let editDate = editAddress.editDate;

      this.province = editDate.province
      this.city = editDate.city
      this.district = editDate.district;
      this.Province = editAddress.district.Province;
      this.City = editAddress.district.City
      this.District = editAddress.district.District
      this.paraReceive.district = this.Province + ' ' + this.City + ' '  + this.District;
      this.paraReceive.name = editAddress.name;
      this.paraReceive.tel = editAddress.tel;
      this.paraReceive.address = editAddress.address;
      this.twoshow = true;
      this.threeshow = true;

      this._newArr(this.info, -1)
      this._newArr(this.showCityList, -1)
      this._newArr(this.showDistrictList, -1)
      
      this.showCityList = this._filter(this.info, 'city', this.province) // editDate.province由后台获取的id
      this.showDistrictList = this._filter(this.showCityList, 'district', this.city) // editDate.city由后台获取的id
      this._newArr(this.info, this.province)
      this._newArr(this.showCityList, this.city)
      this._newArr(this.showDistrictList, this.district)

    },
    changeType(index,index2){

     this.indexArr.splice(index,1,index2)
      // this.countList()
      // console.log(this.indexArr)
    },
    countList(){
      let specs = JSON.parse(this.sellerInfo.spec);
      let names = []
      for (var i = 0; i < this.indexArr.length; i++) {

        if (this.indexArr[i] || this.indexArr[i] === 0) {
          for (var j in specs[i]) {
            this.buyTemp[j] = specs[i][j][this.indexArr[i]];
            names.push(j+': '+specs[i][j][this.indexArr[i]])
          }
        }
      }
      this.buyTemp.name = names.join('， ')
      for (var i = 0; i < this.buyList.length; i++) {
        if (this.buyList[i].name == this.buyTemp.name) {
          this.buyList[i].count++;
          this.countPrice();
          return;
        }
      }
      if (Object.keys(this.buyTemp).length == specs.length + 2) {
        this.buyList.push(this.buyTemp);
        this.buyTemp = {count:1}
        this.countPrice();
      }else{
        this.initMSG('请选择规格')
      }
      // console.log(this.buyList)
    },
    countPrice(){
      let totalPrice = 0;
      for (var i = 0; i < this.buyList.length; i++) {
        totalPrice += html.mul(this.buyList[i].count,this.specPrice[this.buyList[i][this.specName]])
      }   
      this.totalPrice = totalPrice;   
    },
    payment (){
      
      if (!this.paraReceive.name || !this.paraReceive.tel 
          || !this.paraReceive.address || !this.paraReceive.district) {
        this.initMSG('请添加完整的收货地址')
        return;
      }
      if (!html.isWechat()) {
        this.paraData.channel = 'W2'
      }
      this.paraData.context = JSON.stringify({
        receiver:this.paraReceive.name,
        mobileno:this.paraReceive.tel,
        address:this.paraReceive.district + ' ' + this.paraReceive.address,
        buyer_remark:this.paraReceive.buyer_remark
      });

      let tempObj = {};
      tempObj.id = this.goodid;
      tempObj.count = this.amount;
      if (this.sellerInfo.spec) {//如果是选规格
        tempObj.spec = html.objClone(this.buyList);
        for (var i = 0; i < tempObj.spec.length; i++) {
          delete tempObj.spec[i].name;
        }
        if (!this.buyList.length) {
          this.initMSG('请选择商品')
          return;
        }
      }
      this.paraData.goods = JSON.stringify(tempObj)
      this.loading = true;

      if (this.addressList.length) {
        let tempUse = JSON.parse(this.addressList[this.selectIndex].info)
        if (this.paraReceive.name == tempUse.name ||
            this.paraReceive.tel == tempUse.tel ||
            this.paraReceive.address == tempUse.address ||
            this.paraReceive.district == tempUse.district.Province + ' ' + tempUse.district.City + ' '  + tempUse.district.District) {
          this.addressID = this.addressList[this.selectIndex].id;
        }
      }
      this.updateAddress ();
      axios.post('/seller_api/v1/pay/payment_url',qs.stringify(this.paraData),{
          headers: {
              "A-Token-Header": this.token,
          }
        }).then((response)=>{           
          let resData = response.data;  

          if (resData.success) {
         
              if (this.onlyWechat) {
                this.payment_url = JSON.parse(resData.result.payment_url);
                let payVM = this;
                
                if (typeof WeixinJSBridge == "undefined"){
                   if( document.addEventListener ){
                       document.addEventListener('WeixinJSBridgeReady', payVM.onBridgeReady, false);
                   }else if (document.attachEvent){
                       document.attachEvent('WeixinJSBridgeReady', payVM.onBridgeReady); 
                       document.attachEvent('onWeixinJSBridgeReady', payVM.onBridgeReady);
                   }
                }else{
                   this.onBridgeReady();
                }
              }else{
                location.href = JSON.parse(resData.result.payment_url).mweb_url
              }


          }else {
            if (resData.code == '403' || resData.code == '250') {
               this.goto('/')
            }else{
              this.initMSG(resData.codemsg)
            }
          }
      }).catch(function(response){});  
    },
    onBridgeReady (){
      let vm = this;
      this.loading = true;
      WeixinJSBridge.invoke(
         'getBrandWCPayRequest', vm.payment_url,
         function(res){ 
          
           if(res.err_msg == "get_brand_wcpay_request:ok" ) {// 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。 
            vm.initMSG('购买成功')
           }else if(res.err_msg == "get_brand_wcpay_request:cancel" || res.err_msg == "get_brand_wcpay_request:fail") {
            vm.initMSG('购买失败')
           }
         }
      );
    },
    minusPlus(flag,index){
      // debugger
        if (flag) {
          if (index || index === 0) {
            this.buyList[index].count++;
          }
          else  this.amount++;
        }else{
          if (index || index === 0) {
            this.buyList[index].count--;
            if (this.buyList[index].count == 0) {
              this.buyList.splice(index,1)
            }
          }else{
            if (this.amount == 1) return;
            this.amount--;            
          }
        }
        if (index || index === 0){
          this.countPrice();
        }else{
          this.totalPrice = html.mul(this.singlePrice,this.amount)
        }
        
    },
    changeInput(type){
      if (type == 2) {
        this.countPrice();
      }else{
        if (isNaN(this.amount)) {
          this.amount = 1
        }
        if (this.amount) {
          if (this.amount <= 0) {
            this.amount = 1
          }
        }  
        this.totalPrice = html.mul(this.singlePrice,this.amount)      
      }

    },
    choseAdd () { // 选择地址弹层，打开弹层
      this.islayout = true
      this.istoggHeight = true
      // console.log(this.$route.query.data !== undefined)
      // if (this.$route.query.data !== undefined) {
      //   this._gotoTop('.proJuli', 0)
      // }
      let proJuliBox = document.querySelector('.proJuli')
      let activeBox = document.getElementsByClassName('active')

      // console.log(activeBox)
      // this._gotoTop('.proJuli', 0)
    },
    closeAdd () { // 关闭弹层
      this.istoggHeight = false
      this.islayout = false
    },
    determine () {
      this.istoggHeight = false
      this.islayout = false
      // this.showDeter = false;
      this.paraReceive.district = this.Province + ' ' + this.City + ' ' + this.District
      // console.log(this.province + ' ' + this.city + ' '  + this.district )
    },
    _newArr (arr, selectid) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].id === selectid) {
          this.$set(arr[i], 'selected', true)
          // this._gotoTop('.disJuli',i);
        } else if (selectid === -1) {
          this.$set(arr[i], 'selected', false)
        }
      }
      return arr
    },
    _filter (add, name, code) { // 数组，对应数组内容，对应数组id
      // console.log(code)
      let result = []
      for (let i = 0; i < add.length; i++) {
        if (code === add[i].id) {
          // console.log(code, add[i].id)
          result = add[i][name]
        }
      }
      return result
    },
    _gotoTop (info, index) { // 滚动距离 --> 对应class,第几个index
      let proJuliBox = document.querySelector(info)
      let activeBox = document.getElementsByClassName('active')[index]
      let t = activeBox.offsetTop - 67 + 20 // 后面的数据，根据页面情况自己调整
      proJuliBox.scrollTo(0, t)
    },
    getProvinceId (code, input, index) { // 点击第一个li
      // console.log('code', code, input, index)
      this.titleIndex = Number
      this.province = code
      this.Province = input // 获取选中的省份
      this.showProvince = false
      this.showCity = true
      this.showDistrict = false
      this.showCityList = this._filter(this.info, 'city', this.province)
      // 点击选择当前
      this.info.map(a => { a.selected = false })
      this.info[index].selected = true
      // console.log(this.info[index].name) // 点击的省份的名字

      this.oneac = false // 给第一个nav去掉高亮
      this.twoac = true // 给第二个nav添加高亮
      this.threeac = false // 去除第三个li的高亮
      this.twoshow = true // 控制第二个nav显示
      // this.City = false // 清除市级和区级nav选项
      // this.District = false // 清除市级和区级nav选项
      this.City = '' // 第二nav置空
      this.threeshow = false // 第三nav隐藏
      this.oneliIndex = index
      this._newArr(this.showCityList, -1) // 清除市级高亮
      this.showDeter = false
    },
    provinceSelected () {
      // console.log('点击了第一个nav')
      // this.titleIndex = 1
      // 清除市级和区级列表
      // this.showCityList = true
      // this.showDistrictList = true
      // 清除市级和区级nav选项
      // this.City = false
      // this.District = false
      // 选项页面的切换
      this.showProvince = true
      this.showCity = false
      this.showDistrict = false
      this.oneac = true // 给第一个nav添加高亮
      this.twoac = false // 给第二个nav去除高亮
      this.threeac = false // 给第三个nav去掉高亮
    },
    getCityId (code, input, index) { // 点击第二个li
      // console.log('id', code, input, 'index', index)
      this.titleIndex = Number
      this.city = code
      this.City = input
      this.showProvince = false
      this.showCity = false
      this.showDistrict = true
      this.showDistrictList = this._filter(this.showCityList, 'district', this.city)
      // 选择当前添加active
      this.showCityList.map(a => { a.selected = false })
      this.showCityList[index].selected = true
      this.twoliIndex = index

      this.twoac = false // 给第二个nav去除高亮
      this.threeac = true // 给第三个nav添加高亮
      this.threeshow = true // 给第三个nav显示
      this.District = '' // 第三nav置空
      this._newArr(this.showDistrictList, -1) // 清除区级高亮
      this.showDeter = false
    },
    citySelected () {
      // console.log('点击了第二个nav')
      this.titleIndex = 2
      this.showProvince = false
      this.showCity = true
      this.showDistrict = false

      this.oneac = false // 给第一个nav去掉高亮
      this.twoac = true // 给第二个nav添加高亮
      this.threeac = false // 给第三个nav去掉高亮
      // if (this.$route.query.data !== undefined) {
      //   this.$nextTick(() => { // 让li标签回到顶部
      //     this._gotoTop('.citJuli', 1)
      //   })
      // }
    },
    getDistrictId (code, input, index) {
      this.titleIndex = Number
      this.district = code
      this.District = input
      // 选择当前添加active
      this.showDistrictList.map(a => { a.selected = false })
      this.showDistrictList[index].selected = true
      // 选取市区选项之后关闭弹层

      this.oneac = false // 给第一个nav去掉高亮
      this.showDeter = true
    },
    districtSelected () { // 第三个选择
      // console.log('点击了第三个nav')
      this.showProvince = false
      this.showCity = false
      this.showDistrict = true

      this.oneac = false // 给第一个nav去掉高亮
      this.twoac = false // 给第二个nav去掉高亮
      this.threeac = true // 给第三个nav添加高亮
      // if (this.$route.query.data !== undefined) {
      //   this.$nextTick(() => { // 让li标签回到顶部
      //     this._gotoTop('.disJuli', 2)
      //   })
      // }
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

