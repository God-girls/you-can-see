
<style src="./style.css" scoped></style>
<template src="./template.html"></template>

<script>
import {html} from '../../../assets/js/global.js';
import myhead from '../../../components/base/header'
import modalDialog from '../../../components/base/dialog'
import nodate from '../../../components/base/nodate'
import loading from '../../../components/base/loading'
import { mapState, mapActions } from 'vuex'
import axios from 'axios';
import qs from 'qs';

export default {
  components: {
    myhead,
    modalDialog,
    loading,
    nodate
  },
  data () {
    return {
      header:{
        'name':'规格设置',
        'link':'/prd/create',
        'subFunc':true,
        'subname':'添加'
      },
      loading:false,
      loadError:'',
      statusBarH:'',
      bottomBarH:'',
      paraData:{
        uid:5,
        ps:100000,
        state:0,
        pn:1
      },
      token:'',
      profile:{},
      addFirst:false,
      addSecond:false,
      delSpec:false,
      specs:[],
      firstVal:'',
      secondVal:'',
      curProperty:0,
      curDel:0,
      tabs:[
        {name:'尺寸',type:'0'},
        {name:'颜色',type:'1'},
        {name:'重量',type:null},
      ],
      // tabs:['尺寸','颜色','重量']
    }
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
    if (html.isWechat()) {
      this.header.opacity = true;
    }
  },
  mounted: function () {

    if (this.TOKEN) {
      this.token = this.TOKEN;
      this.profile = this.PROFILE;
    }
    if (this.$route.query.id) {
      this.header.link = '/prd/create?id='+this.$route.query.id
    }    
    if (this.CART.specs.length) this.specs = html.objClone(this.CART.specs);
    // console.log(this.CART.specs)
  },
  methods: {
    ...mapActions([
      'switchState', // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`'
      'clearState'
    ]),
    getStatusBar(){
      if (this.BOTTOMBARH) {
        this.bottomBarH = {'padding-bottom':this.BOTTOMBARH+'px'}
      }
    },
    changeType(index,item){
      let obj = {}
      obj[item.name] = [];
      for (var i = 0; i < this.specs.length; i++) {
        for (var j in this.specs[i]) {
          if (item.name == j) {
            return;
          }
        }
      }
      this.specs.push(obj);
      // this.
      console.log(this.specs)
      // this.isCur = index;
      // this.typeFormat();
      // {"颜色":[]}
    },
    addFirstSpec(){
      if (this.specs.length == 5) {
        this.initMSG('最多添加5种规格')
        return;
      }
      this.addFirst = true;
    },
    addSpec (){
      if (!html.trimStr(this.firstVal)) {
        this.initMSG('请添加规格')
        return;
      }
      let obj = {};
      // obj.type = this.firstVal;
      // obj.value = [];
      obj[this.firstVal] = []
      this.specs.push(obj);
      this.firstVal = '';
      this.closeDialog('addFirst')
    },
    addProperty(){
      if (!html.trimStr(this.secondVal)) {
        this.initMSG('请添加属性')
        return;
      }
      let myKey = Object.keys(this.specs[this.curProperty])[0]
      this.specs[this.curProperty][myKey].push(this.secondVal);
      // console.log(JSON.stringify(this.specs))
      // this.specs[this.curProperty].value.push(this.secondVal);
      this.secondVal = '';
      this.closeDialog('addSecond')
    },
    delProperty(params){
      this.curDel = params;
      this.delSpec = true;
    },
    delSubmit(){
      this.specs.splice(this.curDel,1);
      this.closeDialog('delSpec')
    },
    initMSG(arr){
      this.loading = true;
      this.loadError = arr;
      setTimeout(()=>{
        this.loading = false;
        this.loadError = '';
      },2000)
    },
    closeDialog(arr){
      this[arr] = false
    },
    goBack(){
      this.$router.push('/prd/create')        
    },
    goto(arr){
      // debugger

      for (let i = 0; i < this.specs.length; i++) {
        //Things[i]
        for (let j in this.specs[i]) {
          if (this.specs[i][j].length == 0) {
            this.initMSG('请添加规格对应的属性')
            return;
          }
        }      
      }
      console.log(this.specs)
      this.switchState({
        CART:Object.assign(this.CART,{specs:this.specs})
      })
      this.$router.push(arr)        
    },
  }
}
</script>

