<style scoped>
.shareBg{
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 14;
  background: rgba(0,0,0,.2);
}
.shareMask{
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 15;
}
.shareCon{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #fff;
  color: #dedee6;
  text-align: center;
  padding: 40px 20px 60px;
  z-index: 15;
}
.shareCon  h3{
  padding: 0px 0 0; 
}
.icon-guanbi{
  position: absolute;
  font-size: 40px;
  /*background-position: -100px 8px;*/
  right: 30px;
  top: 30px;
}

.shareCon  ul{
  display: -webkit-box;
  display: flex;    
  padding-top: 0px;
}

.shareCon  ul li{
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  width: 0%;  
  color: #6b6d7f;
}
.shareCon  ul li p{
  display: -webkit-box;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 8px;    
  width: 117px;
  height: 117px;
  border-radius: 50%;
  /*background: #dedee6;*/
}
.shareCon  ul li:active{
  color: #42ae33;
}
.shareCon  ul li i{
  font-size: 56px;
}
.icon-zhuanfa1{
  position: relative;
  top: -5px;
}
.invite-share{
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background:rgba(0,0,0,.85);
  background-size: 750px;
  z-index: 1255;
}
.invite-share p{
  width: 482px;
  margin: 30px 0px 0;
  float: right;
  background:url(../../assets/img12/icon/icontof.png) no-repeat;
  background-size: 482px;
  padding-top: 250px;
  color: #fff;
  text-align: right;
}

</style>
<template>
  <div>
    <!-- <div class="shareBg"> -->
      <div class="shareCon slideInUp animateds">
        <i class="iconfont icon-guanbi"  @touchend.prevent="closeApp"></i>
        <!-- <h3 class="f30 greenCR">分享到</h3> -->
        <ul><!--  v-if="isWawaIos"
   v-if="isWawaIos" -->
          <!-- <li @touchend.prevent="gotoShare('message')"><p><i class="iconfont icon-weixin2"></i></p>微信</li> -->
          <li @touchend.prevent="initPoster"><p><i class="iconfont icon-haibao"></i></p>生成海报</li>
          <li @touchend.prevent="gotoShare('timeline')"><p><i class="iconfont icon-zhuanfa1"></i></p>发给好友</li>
          <li @touchend.prevent="gotoShare('timeline')"><p><i  class="iconfont icon-pengyouquan"></i></p>转发朋友圈</li>
          <li @touchend.prevent="gotoShare('QQSession')"><p><i class="iconfont icon-qq-link-icon"></i></p>转发QQ</li>
          <!-- <li @touchend.prevent="gotoShare('QQZone')"><p><i class="iconfont icon-qqkongjian"></i></p>QQ空间</li> -->
  <!--         <li class="inviteFriend" :data-clipboard-text = "shareData.shareText">
            <p><i  class="iconfont icon-weibo"></i></p>
            微博
          </li> -->
          <li class="inviteFriend" :data-clipboard-text = "shareData.shareText">
            <p><i  class="iconfont icon-lianjie"></i></p>
            复制链接
          </li>
        </ul>
      </div>
    <!-- </div> -->
    <div class="shareBg" @click.prevent="closeShare"></div>

    <modal-dialog :dialogshow2.sync="copyOk" @hide="closeDialog('copyOk')" :fail='true'>
        <div class="dialog-header" slot="dialog-header">
          复制成功
        </div>
        <div slot="dialog-body" class="guestCON tC">
           快去粘贴给好友吧
        </div>    
    
        <dl class="dialog-footer" slot="dialog-footer">
          <dd  @touchend.prevent="closeDialog('copyOk')">
            <button type="button" class="btn btn-green">确定</button>
          </dd>
        </dl>
    </modal-dialog>

    <div class="invite-share f30 fadeIn animateds" v-if="shareRight" @touchend.prevent="shareRight = false">
       <p></p>
     </div>
  </div>
</template>

<script>
import {html} from '../../assets/js/global.js';
import modalDialog from '../../components/base/dialog'
// import {setupWebViewJavascriptBridge} from '../../assets/js/iosbridge.js';
import clipboard from 'clipboard';
let landLogo = ''
export default {
  props: {
    shareData:{

    },
    copyWords:''
  },
  components: {
    modalDialog,
  },
  data () {
    return {
      isWawaIos:false,
      copyOk:false,
      shareRight:false
    }
  },  
  computed:{
    shareFlag(){
      return this.shareData.show
    },
  },
  // watch: {//深度 watcher
  //   'copyWords': {
  //     handler (val, oldVal) { 
  //       this.shareData.shareText = val;
  //       console.log(val)
  //     },
  //     deep: true
  //   },
  // },
  mounted: function () {
    if (html.isWawaIos() || navigator.userAgent.toLowerCase().indexOf('qqcanshare') > -1) {
      this.isWawaIos = true;
    }
    this.copyText()
  },
  methods: {
    closeShare (e){
      console.log(e.target)
      if (e.target.className == 'shareBg')
        this.$emit('shareclose')
    },
    gotoShare(type){

      console.log(type)
        this.shareRight = true;
        // this.$emit('shareclose')
        return;

      // console.log(type)
      this.shareOBJ ={
          title: this.shareData.title,
          desc: this.shareData.desc,
          link: this.shareData.link,
          imgUrl: this.ttDomain+landLogo,
          shareType:html.isWawaIos()?'Link':'link',
          success () {
             // dplus.track('分享成功',{'from':html.useragent(),'page':'inviter'});
          }
      };

      if(html.isWawa()) {
        this.shareOBJ.type = type;
        setupWebViewJavascriptBridge((webBridge)=> {
          this.$emit('shareclose')
          webBridge.callHandler('share', this.shareOBJ)
        })
      }
    },
    closeDialog(arr){
      this[arr] = false
    },
    closeApp (){
      this.$emit('shareclose')
    },
    initPoster(){
      this.$emit('initPoster')
    },
    copyText(){//复制到剪贴版
      // console.log('222')
      this.shareText = this.shareData.shareText;

      let btns = document.querySelectorAll('.inviteFriend');
        const shareNative = new clipboard(btns)
        shareNative.on('success', (e)=> {
            this.copyOk = true;
            e.clearSelection();
        });

        shareNative.on('error', function(e) {
            console.error('Action:', e.action);
            console.error('Trigger:', e.trigger);
        });
    },
  }
}
</script>