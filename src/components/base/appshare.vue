<style scoped>
.shareBg{
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 15;
}
.shareCon{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(0,0,0,.8);
  color: #dedee6;
  text-align: center;
  padding: 40px 20px 60px;
}
.shareCon  h3{
  padding: 15px; 
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
  padding-top: 40px;
}

.shareCon  ul li{
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  width: 0%;  
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
  background: #dedee6;
}
.shareCon  ul li p:active{
  background: #53cae3;
  transition: all 2s
}
.shareCon  ul li i{
  color: #333230;
  font-size: 56px;
}


</style>
<template>
  <div>
  <div class="shareBg fadeInUp animateds" @click.prevent="closeShare">
    <div class="shareCon">
      <i class="iconfont icon-guanbi"  @touchend.prevent="closeApp"></i>
      <h3 class="f30">分享到</h3>
      <ul>
        <li @touchend.prevent="gotoShare('message')"><p><i class="iconfont icon-weixin2"></i></p>微信</li>
        <li @touchend.prevent="gotoShare('timeline')"><p><i  class="iconfont icon-pengyouquan"></i></p>朋友圈</li>
        <li @touchend.prevent="gotoShare('QQSession')" v-if="isWawaIos"><p><i class="iconfont icon-qq-link-icon"></i></p>QQ</li>
        <li @touchend.prevent="gotoShare('QQZone')" v-if="isWawaIos"><p><i class="iconfont icon-qqkongjian"></i></p>QQ空间</li>
        <li class="inviteFriend" :data-clipboard-text = "shareData.shareText">
          <p><i  class="iconfont icon-lianjie"></i></p>
          复制
        </li>
      </ul>
    </div>
  </div>
  <modal-dialog :dialogshow2.sync="copyOk" @hide="closeDialog('copyOk')">
      <div class="dialog-header" slot="dialog-header">
        复制成功
      </div>
      <div slot="dialog-body" class="guestCON tC">
         快去粘贴给好友吧
      </div>    
  
      <dl class="dialog-footer" slot="dialog-footer">
        <dd  @touchend.prevent="closeDialog('copyOk')">
          <button type="button">确定</button>
        </dd>
      </dl>
  </modal-dialog>
    
  </div>
</template>

<script>
import {html} from '../../assets/js/global.js';
import modalDialog from '../../components/base/dialog'
import {setupWebViewJavascriptBridge} from '../../assets/js/iosbridge.js';
import clipboard from 'clipboard';
let landLogo = require('../../assets/img12/login/logo.jpg')
export default {
  props: {
    shareData:{

    }
  },
  components: {
    modalDialog,
  },
  data () {
    return {
      isWawaIos:false,
      copyOk:false
    }
  },  
  computed:{
    shareFlag(){
      return this.shareData.show
    },
  },
  mounted: function () {
    if (html.isWawaIos() || navigator.userAgent.toLowerCase().indexOf('qqcanshare') > -1) {
      this.isWawaIos = true;
    }
    this.copyText()
  },
  methods: {
    closeShare (e){
      if (e.target.className == 'shareBg fadeInUp animateds')
        this.$emit('shareclose')
    },
    gotoShare(type){
      console.log(type)
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

    copyText(){//复制到剪贴版
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