
<style scoped>
.dialog-body{
    text-align: center;
}
<style scoped>
.wchat_tc{
    text-align: center;
}
.wechat_titel, .wechat_body, .wechat_end{
    text-align: center;
}
.wechat_titel > img{
    width: 30%;
    height: 100%;
}
.wechat_titel > p{
    font-size: 30px;
    color: #484848;
}
.wechat_body{
    margin: 40px 0;
}
.wechat_body > p{
    line-height: 50px;
    font-size: 30px;
    color: #000;
}
.wechat_end > img{
    width: 50%;
    height: 100%;
}
.wechat_end > p{
    font-size: 30px;
    color: #303030;
}
</style>
<template>
    <div> 
        <modal-dialog :dialogshow2.sync="wechat_code2" @hide="closeDialog('wechat_code2')" :noClickBg.sync="noClickBg" :noCloseText.sync="noCloseText">
          <div class="dialog-body wchat_tc" slot="dialog-body">
            <div class="wechat_titel">
                <img src="../../assets/img12/index/mai.png" height="120" width="120" alt="">
                <p>小小卖的家</p>
            </div>
            <div class="wechat_body">
                <p>查询购买记录 / 物流信息 / 卖家动态 / 我的关注 / 成为新卖家 / 在线客服等</p>
            </div>
            <div class="wechat_end">
               <img src="../../assets/img12/index/qrcode.jpg" height="344" width="344"> 
               <p>{{ text }}</p>
            </div>
          </div>    
        </modal-dialog>
    </div>
</template>
<script>
import modalDialog from './dialog'
import {html} from '../../assets/js/global.js';
    export default {
        components: {
            modalDialog
        },
        props: [
            'wechat_code2',
        ],
        data() {
            return {
                noClickBg:true,
                noCloseText:true,
                text:"长按保存图片 打开微信扫码关注公众号"
            }
        },
        computed: {
        },
        mounted: function () {
            if(html.isInqq()){
                this.text="长按保存图片 打开微信扫码关注公众号";
            }else{
                this.text="长按扫码关注公众号";
            }
        },
        methods: {
            closeDialog (arr){
               // this[arr] = false;
              this.$emit('hide2')
            }
        }
    }
</script>