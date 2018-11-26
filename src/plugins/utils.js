export default{
  install(Vue,options)
  {
    let iamMiniprogram = false;
    let avatarg='https://bonusimg.hddgood.com/bonus/';//头像
    let ttDomain = 'https://bonus.hddgood.com';
    let randomTime = new Date().getTime();
    let qiimgsg = 'https://bonusimg.hddgood.com/'
    let qMusic = 'https://bonusimg.hddgood.com/'
    let userAgent = navigator.userAgent.toLowerCase();     
    //测试
    if (location.href.indexOf('testseller.bhuwifi.com') > -1 
        || location.href.indexOf('localhost') > -1 
        || location.href.indexOf('4.114') > -1) {
        avatarg = 'https://bonustestimg.bhuwifi.com/seller/';
        ttDomain = 'https://testseller.bhuwifi.com';
        qiimgsg = 'https://bonustestimg.bhuwifi.com/';
    }
    // Vue.prototype.downPC = 'https://www.ethmainchain.com/pages/master/download.html';
    Vue.prototype.downMobile = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.lianlian.hdd'
    // 'https://bonusimg.hddgood.com/hddgood.apk?'+new Date().getTime();
    Vue.prototype.globalAvatar = avatarg;
    Vue.prototype.globalM = qiimgsg;
    Vue.prototype.ttDomain = ttDomain;
    Vue.prototype.qMusic = qMusic;
    //判断是否是ios 审核 显示就是true
    Vue.prototype.ioShow = userAgent.indexOf("hddgood/ios") > -1 || userAgent.indexOf("rushingking/ios") > -1 ? false : true;
    Vue.prototype.defaultHead = 'this.src="' + require('../assets/img12/index/header.png') +'"';
    // Vue.prototype.profile = {diamond:0,power:0};
  }
}