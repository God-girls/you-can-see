export default{
  install(Vue,options)
  {
    let iamMiniprogram = false;
    let avatarg='https://sellerimg.hddgood.com/seller/';//头像
    let ttDomain = 'https://seller.hddgood.com';
    let qiimgsg = 'https://sellerimg.hddgood.com/'
    let userAgent = navigator.userAgent.toLowerCase();     
    //测试
    if (location.href.indexOf('testseller.bhuwifi.com') > -1 
        || location.href.indexOf('localhost') > -1 
        || location.href.indexOf('4.114') > -1) {
        avatarg = 'https://testsellerimg.bhuwifi.com/seller/';
        ttDomain = 'https://testseller.bhuwifi.com';
        qiimgsg = 'https://testsellerimg.bhuwifi.com/';
    }
    Vue.prototype.globalAvatar = avatarg;
    Vue.prototype.globalM = qiimgsg;
    Vue.prototype.ttDomain = ttDomain;
    //判断是否是ios 审核 显示就是true
    Vue.prototype.ioShow = userAgent.indexOf("hddgood/ios") > -1 || userAgent.indexOf("rushingking/ios") > -1 ? false : true;
    Vue.prototype.defaultHead = 'this.src="' + require('../assets/img12/other/errorimg.jpg') +'"';
    Vue.prototype.ttLogoImg = ttDomain + require('../assets/img12/index/logo.png')
    Vue.prototype.errorImg = 'this.src="' + require('../assets/img12/other/errorimg.jpg') +'"';
    Vue.prototype.errorBg = 'this.src="'  + require('../assets/img12/other/errorbg.jpg') +'"';
  }
}