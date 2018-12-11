<style src="./style.css" scoped></style>
<template src="./template.html"></template>

<script>
import {setupWebViewJavascriptBridge} from '../../../assets/js/iosbridge.js';
import loading from '../../../components/base/loading'
import myhead from '../../../components/base/header'
import imageClipper from '../../../components/base/imageClipper'
import {html} from '../../../assets/js/global.js';
import {map} from '../../../assets/js/map.js'
import modalDialog from '../../../components/base/dialog'
import { mapState, mapActions } from 'vuex'
import wx from 'weixin-js-sdk'; 
import axios from 'axios';
import qs from 'qs';
// import Croppa from 'vue-croppa'
// console.log(croppa)
export default {
  data () {
    return {
      show1:true,     
      header:{
        'name':'个人设置',
        'link':'/my',
        // isNobg:true,
      },
      qiimgs:'',
      isCur: 1,
      iquit:0,
      token:'',
      loading:false,
      loadError:'',
      begin_seconds:false,
      isBc: false, // 用于控制保存按钮高亮
      toggle: false, // 用于切换默认地址
      showDeter: false,
      oneac: true,
      twoac: false,
      threeac: false,
      twoshow: false,
      threeshow: false,
      whichOne:'',
      selectOne:false,
      oneliIndex: '', // 用于高亮子菜单
      twoliIndex: '',
      titleIndex: Number,
      showProvince: true, // 第一个li默认显示
      showCity: false, // 第二个li默认隐藏
      showDistrict: false, // 第三个li默认隐藏
      showCityList: [],
      showDistrictList: [],
      addressList:[],
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
      statusBar:{},
      loadError:'',
      historyTotalPN:1,
      bottomBarH:[],
      profile:{},
      paraData:{},
      headImg:'',
      pushpop:{
        version:'',
        push:''
      },
      isWechat:false,
      showClipper:false,
      img: '',
      myCroppa:''
    }
  },
  components: {
    loading,
    myhead,
    modalDialog,
    imageClipper
  },
  computed:{
    ...mapState([
      // 映射 this.count 为 store.state.count
      'PROFILE',
      'TOKEN',
      'UID',
      'PUSHPOP'
    ])
  },
  created(){
    if (html.isWechat()) {
      this.header.opacity = true;
      this.isWechat = true;
    }
  },
  mounted () {

    if (this.TOKEN) {
      this.token = this.TOKEN;
      this.paraData.uid = this.UID;
      this.profile = this.PROFILE;
      // if (html.isWawa()) this.pushpop = this.PUSHPOP
      this.headImg = this.globalAvatar+(this.profile.avatar?this.profile.avatar:'')+'?imageView2/2/w/210/h/210/t/'+new Date().getTime();
      // this.img = this.globalAvatar+(this.profile.avatar?this.profile.avatar:'')
    }
    if (this.$route.query.from == 'index') {
      this.header.link = '/'
    }
    if (html.isWawa()) {
      this.initBridge();
    }
    dplus.track('个人信息',{'from':html.useragent()});//统计代码
    document.body.addEventListener('touchstart', function () {});

  },
  methods: {
    ...mapActions([
      'switchState', // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`'
    ]),
    getProfile (){
      axios.post('/seller_api/v1/seller/userinfo',qs.stringify(this.paraData),{
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
    chooseImg(){
      let _this = this;
      wx.chooseImage({
          count: 1, // 默认9
          sizeType: ['original'], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
          success: function (res) {
            var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
            _this.showImg(localIds[0])
          }
      });      

    },
    showImg(localIds){
      let _this = this;
      wx.getLocalImgData({
        localId: localIds,
        success: function (res) {
            var localData = res.localData;
            if (localData.indexOf('data:image') != 0) {
                //判断是否有这样的头部
                localData = 'data:image/jpeg;base64,' +  localData
            }
            localData = localData.replace(/\r|\n/g, '').replace('data:image/jgp', 'data:image/jpeg')
            //第一个替换的是换行符，第二个替换的是图片类型，因为在IOS机上测试时看到它的图片类型时jgp，
            //这不知道时什么格式的图片，为了兼容其他设备就把它转为jpeg
            // _this.headImg = localData//images是业务中用到的变量
            _this.img = localData;
            _this.showClipper = true;
            // _this.modifyImg(localData);
        }
      })
    },
    ok(data){
      this.modifyImg(data.replace('data:image/png', 'data:image/jpeg'));
    },
    modifyImg (localData){
      this.headImg = localData;
      this.loading = true;
      axios.post('/seller_api/v1/user/upd_profile',qs.stringify({
        uid:this.paraData.uid,
        avatar_b64:localData
      }),{
          headers: {
              "A-Token-Header": this.token,
          }
        }).then((response)=>{   
        this.loading = false;        
          let resData = response.data;  
          if (resData.success) {
            this.getProfile ();
            this.loading = false;
            this.showClipper = false;
          }  else {
            if (resData.code == '403' || resData.code == '250') {
              this.goto('/')
            }else{
              this.initMSG(resData.codemsg)
            }
          }

      }).catch(function(response){});  
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

