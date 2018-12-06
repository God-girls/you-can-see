/*
* @Author: xiaoxiao
* @Date:   2017-11-28 13:47:58
* @Last Modified by:   xiaoxiao
* @Last Modified time: 2018-12-06 17:54:51
*/
import axios from 'axios';
import qs from 'qs';
import Vue from 'vue'
var html = {
        globalProfile:{

        },
	    browser : {
        versions: function () {    
            var userAgent = navigator.userAgent.toLowerCase();          
            return {
                browser: userAgent.indexOf('browser') > -1, //是否含有browser
                ios: !!userAgent.match(/\(i[^;]+;( u;)? cpu.+mac os x/), //ios终端
                mobile: !!userAgent.match(/applewebkit.*mobile.*/) || userAgent.match(/zte/), //是否为移动终端
                android: userAgent.indexOf('android') > -1 || userAgent.indexOf('linux') > -1 || userAgent.indexOf('windows phone') > -1, //android终端或者uc浏览器
                iphone: userAgent.indexOf('iphone') > -1, //是否为iPhone或者QQHD浏览器
                ipad: userAgent.indexOf('ipad') > -1,
                opr:userAgent.indexOf("opr/") > -1, //openg 
                ucbrowser: userAgent.indexOf("ucbrowser") > -1, // 是否为UC浏览器
                baidubrowser: userAgent.indexOf("baidubrowser") > -1, //baidu 
                liebaofast : userAgent.indexOf("liebaofast") > -1, // 
                mqqbrowser : userAgent.indexOf("mqqbrowser") > -1, // 
                sogou : userAgent.indexOf("sogoumse") > -1 || userAgent.indexOf("sogoumobilebrowser") > -1, // 
                mxbrowser : userAgent.indexOf("mxbrowser") > -1, // 遨游
                samsungbrowser : userAgent.indexOf("samsungbrowser") > -1,
                wechat : userAgent.indexOf("micromessenger") > -1,
                wawa : userAgent.indexOf("hddgood") > -1 || userAgent.indexOf("rushingking") > -1,
                wawaIos : userAgent.indexOf("hddgood/ios") > -1 || userAgent.indexOf("rushingking/ios") > -1,
                wawaAndroid : userAgent.indexOf("hddgood/android") > -1 || userAgent.indexOf("rushingking/android") > -1,
                wawaHideQuit: userAgent.indexOf('babyhidequit') > -1,
                wawah5Pay: userAgent.indexOf('h5pay') > -1,
                appshare: userAgent.indexOf('appshare') > -1,
                inqq: userAgent.indexOf('qq/') > -1
            };
        }()
    },
    useragent:function () {
    	if (html.browser.versions.wechat) {
			if (html.browser.versions.iphone || html.browser.versions.ipad) {
	    		return 'weixin_ios';
	    	}else if (html.browser.versions.android) {
	    		return 'weixin_android';
	    	}    		
    	}
    	if (html.browser.versions.wawa) {
			if (html.browser.versions.wawaIos) {
	    		return 'hddgood_ios';
	    	}else if (html.browser.versions.wawaAndroid) {
	    		return 'hddgood_android';
	    	}    		
    	}
    	if (html.browser.versions.iphone || html.browser.versions.ipad) {
    		return 'web_ios';
    	}else if (html.browser.versions.android) {
    		return 'web_android';
    	}
        // else if (html.browser.versions.wechat) {
    	// 	return 'weixin';
    	// }else if (html.browser.versions.wawa) {
    	// 	return 'wawaAPP';
    	// }
    	// else return 'pc';
    },
    isInqq(){
        if (html.browser.versions.inqq) return true;
        else return false
    },
    isIpad(){
        if (html.browser.versions.ipad) return true;
        else return false
    },
    isWebAndroid(){
        if (html.browser.versions.android) return true;
        else return false
    },
    isWebIos(){
        if (html.browser.versions.iphone || html.browser.versions.ipad) return true;
        else return false
    },
    isWechat(){
        if (html.browser.versions.wechat) return true;
        else return false
    },
    istestPay(){//2.0.2版本开始增加支付
        if (navigator.userAgent.toLowerCase().indexOf('2.0.2') > -1 
            || location.href.indexOf('localhost') > -1
            || location.href.indexOf('3.11') > -1) 
            return true;
        else return false
    },
    isWawa(){
        if (html.browser.versions.wawa) return true;
        else return false
    },
    isWawaIos(){
        if (html.browser.versions.wawaIos) return true;
        else return false        
    },
    isWawaAndroid(){
        if (html.browser.versions.wawaAndroid) return true;
        else return false        
    },
    isWawaHideQuit(){// h5页面嵌入别人渠道包里不显示 设置 
        if (html.browser.versions.wawaHideQuit) return true;
        else return false
    },
    isWawah5Pay(){//渠道包app 用h5 的分享
        if (html.browser.versions.wawah5Pay) return true;
        else return false
    },
    isPc(){
        if (html.browser.versions.iphone || html.browser.versions.android || html.browser.versions.mobile) return false
        else return true;
    },
    isMiniprogram (){
        if (window.__wxjs_environment == 'miniprogram') return true;
        else return false
    }, 
    objClone (obj) {//浅拷贝对象
      return JSON.parse(JSON.stringify(obj))
    },
    getQueryValue (name) {
        var str = self.location.search.substr(1)
        var reg = new RegExp("(^|&)"+name+"=([^&\n]*)(&|\n|$)");
        var r = str.match(reg);
        if (r!=null) return r[2]; return null;
    },   
    getSpeValue (name) {
        var str = self.location.href.split('?')[1]
        var reg = new RegExp("(^|&)"+name+"=([^&\n]*)(&|\n|$)");
        var r = str.match(reg);
        if (r!=null) return r[2]; return null;
    },  
    getShareVal (name){

        var str = self.location.href.split('#')[1].split('?')[1]
        var reg = new RegExp("(^|&)"+name+"=([^&\n]*)(&|\n|$)");
        var r = str.match(reg);
        if (r!=null) return r[2]; return null;
    },   
    isChinese(str) { //is chinese
        var regExp = new RegExp("[\\u4E00-\\u9FFF]+", "g");
        return regExp.test(str);
    },
    isPwd (str){
        if (str.length > 20 || str.length < 6 || html.isChinese(str)) return false
        else return true;
    },
    isNum: function(str) {
        var regExp = new RegExp("^\\d+$");
        var i = Number(str);
        return regExp.test(i)
    },
    isdotNumber:(str)=>{//非零开头的最多带两位小数的数字
        var regExp = new RegExp("^([1-9][0-9]*)+(.[0-9]{1,2})?$");
        return regExp.test(str)        
    },
    isAppshare: function(){// 渠道包app 可以用自己的分享
        if (html.browser.versions.appshare) return true;
        else return false        
    },
    openInWechat(jumpUrl){
        return 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx357ca89ca431b3ca&redirect_uri='
                   + encodeURIComponent(jumpUrl) +'&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect'
    },
    openInOher(jumpUrl){
        return 'https://graph.qq.com/oauth2.0/authorize?client_id=101532512&redirect_uri='
                   + encodeURIComponent(jumpUrl) +'&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect'
    },
    timeForMat (count) {
    // 拼接时间
    　　let time1 = new Date()
    　　time1.setTime(time1.getTime() - (24 * 60 * 60 * 1000))
    　　let Y1 = time1.getFullYear()
    　　let M1 = ((time1.getMonth() + 1) > 10 ? (time1.getMonth() + 1) : '0' + (time1.getMonth() + 1))
    　　let D1 = (time1.getDate() > 10 ? time1.getDate() : '0' + time1.getDate())
    　　let timer1 = Y1 + '-' + M1 + '-' + D1 // 当前时间
    　　let time2 = new Date()
    　　time2.setTime(time2.getTime() - (24 * 60 * 60 * 1000 * count))
    　　let Y2 = time2.getFullYear()
    　　let M2 = ((time2.getMonth() + 1) > 9 ? (time2.getMonth() + 1) : '0' + (time2.getMonth() + 1))
    　　let D2 = (time2.getDate() > 9 ? time2.getDate() : '0' + time2.getDate())

    　　return Y2 + '-' + M2 + '-' + D2;
    },
    add (a, b) {
        var c, d, e;
        try {
            c = a.toString().split(".")[1].length;
        } catch (f) {
            c = 0;
        }
        try {
            d = b.toString().split(".")[1].length;
        } catch (f) {
            d = 0;
        }
        return e = Math.pow(10, Math.max(c, d)), (html.mul(a, e) + html.mul(b, e)) / e;
    },
    sub (a, b) {
        var c, d, e;
        try {
            c = a.toString().split(".")[1].length;
        } catch (f) {
            c = 0;
        }
        try {
            d = b.toString().split(".")[1].length;
        } catch (f) {
            d = 0;
        }
        return e = Math.pow(10, Math.max(c, d)), (html.mul(a, e) - html.mul(b, e)) / e;
    },
    mul (a, b) {
        var c = 0,
            d = a.toString(),
            e = b.toString();
        try {
            c += d.split(".")[1].length;
        } catch (f) {}
        try {
            c += e.split(".")[1].length;
        } catch (f) {}
        return Number(d.replace(".", "")) * Number(e.replace(".", "")) / Math.pow(10, c);
    },
    div (a, b) {
        var c, d, e = 0,
            f = 0;
        try {
            e = a.toString().split(".")[1].length;
        } catch (g) {}
        try {
            f = b.toString().split(".")[1].length;
        } catch (g) {}
        return c = Number(a.toString().replace(".", "")), d = Number(b.toString().replace(".", "")), html.mul(c / d, Math.pow(10, f - e));
    },
    getMyProfile (arr){
        // console.log(Vue.prototype.globalProfile)
        axios.post('/land_api/v1/land/userinfo',qs.stringify({
            uid:localStorage.ttUid
        }),{
            headers: {
                "A-Token-Header": localStorage.ttToken,
            }
          }).then((response)=>{   
            let resData = response.data;  
            if (resData.success) {
              if (!resData.result.country && arr == 'index') {
                    location.href = '/#/app/modify'
                }
              window.localStorage.setItem(localStorage.ttUid+'profile', JSON.stringify(resData.result));
            }else{
                if (arr != 'index') {
                    location.href = '/#/'
                }
            }
        }).catch((response)=>{});  
    },
    dailySign (){
        axios.post('/land_api/v1/user/daily_sign',qs.stringify({
            uid:localStorage.ttUid
        }),{
            headers: {
                "A-Token-Header": localStorage.ttToken,
            }
          }).then((response)=>{   
            // alert(JSON.stringify(response.data))
        }).catch((response)=>{
        });  
    }
}
export {html};