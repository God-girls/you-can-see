<style src="./style.css" scoped></style>
<template src="./template.html"></template>

<script>
import {setupWebViewJavascriptBridge} from '../../../assets/js/iosbridge.js';
import loading from '../../../components/base/loading'
import myfooter from '../../../components/base/footer'
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
        'name':'我的',
        'link':'/',
        isNobg:true,
      },
      headImg:'',
      isCur: 1,
      isSlider:0,
      token:'',
      loading:false,
      begin_seconds:false,
      statusBar:{},
      loadError:'',
      historyTotalPN:1,
      bottomBarH:[],
      leftTime:'00:00:00',
      curFomoData:{},
      isApp:'',
      navType:'my',
      profile:{},
      isWechat:false
    }
  },
  components: {
    loading,
    myfooter,
  },
  computed:{
    ...mapState([
      // 映射 this.count 为 store.state.count
      'UID',
      'TOKEN',
      'PROFILE',
      'STATUSBARH',
    ])
  },
  mounted () {

    // if (html.isWebAndroid()) {
    //   this.isAndroid = true;
    // }
    // if (html.isWawa()) this.getStatusBar();
    // if (html.isWechat()) {
    //   this.isWechat = true;
    // }

    // if (this.TOKEN) {
    //   this.profile = this.PROFILE
    //   this.headImg = this.globalAvatar+(this.profile.avatar?this.profile.avatar:'')+'?imageView2/2/w/200/h/200/t/'+new Date().getTime();
    // }
    this.autoTextarea(document.getElementById("text"),'',400)
    dplus.track('我的',{'from':html.useragent()});//统计代码
    document.body.addEventListener('touchstart', function () {});

  },
  methods: {
    getStatusBar(){
      if (this.STATUSBARH) {
        this.statusBar = this.STATUSBARH+'px';     
      }
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
    wakeQQ(){
      if(html.isWawa()) {
        setupWebViewJavascriptBridge((webBridge)=> {
          webBridge.callHandler('wakeQQ',
            {'qq':'875332802',
             'key':html.isWawaIos()?'8d8a7b4f7f60a342612e85bcd36908a5205d1381d48904d3240ed3997587d49b':'nfHFQkaZul8ms7jg23YmvKg8-ix0ZoTO'})
        })
      }
    },
    goto (arr){
      if (arr == '/my/invite' && this.isWechat) {
        if (Number(this.profile.total_bonus) > 10) {
          wx.miniProgram.navigateTo({url: `/pages/share/share?type=invite&sharepic=sharefinviter.jpg&inviter=${this.profile.invite_code}&desc=${this.profile.nick}邀请你一起购物赚钱，${this.profile.nick}已在红多多获得分红${this.profile.total_bonus}元！`})
        }else{
          wx.miniProgram.navigateTo({url: `/pages/share/share?type=invite&sharepic=sharefinviter.jpg&inviter=${this.profile.invite_code}&desc=${this.profile.nick}邀请你一起购物赚钱，全新分红式电商，买的多赚的多！`})
        }
        return;
      }
       this.$router.push(arr)        
    },
    closeDialog (arr){
      this[arr] = false
    }
  },
}
</script>

