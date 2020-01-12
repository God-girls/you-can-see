    let author = '';
    global.avatarg='';
    global.qiimgsg='';
    global.ttDomain = '';
    global.wechatDirect = '';
    global.appID = '';
    global.randomTime = new Date().getTime();
    if (location.href.indexOf('wawa.ttkuaizhua.com') > -1) {
        avatarg='http://avatar.ttkuaizhua.com/';
        qiimgsg='http://image.ttkuaizhua.com/';
        ttDomain = 'https://wawa.ttkuaizhua.com';
        appID = 'wxfb89934a1f0ac4ad';
    }else{
        avatarg='http://babyavatartest.bhuwifi.com/';
        qiimgsg='http://babyimagetest.bhuwifi.com/';
        ttDomain = 'http://gzhtest666.bhuwifi.com';
        appID = 'wx126530d1a1e1e4ed';
    }
    global.openWechat = (jumpUrl)=>{
        return 'https://open.weixin.qq.com/connect/oauth2/authorize?appid='+appID+'&redirect_uri='+encodeURIComponent(jumpUrl)+'&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect'
    }
    author = ttDomain+'/#/author';
    wechatDirect = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid='+appID+'&redirect_uri='+encodeURIComponent(author)+'&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect'
    if (navigator.userAgent.toLowerCase().indexOf('micromessenger') < 0) {
        wechatDirect = ttDomain+'/#/share/safari';
    }


