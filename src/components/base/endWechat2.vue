<template>
    <div> 
        <modal-dialog :dialogshow2.sync="wechat_code2" @hide="closeDialog('wechat_code2')"  :fail='true'>
          <div class="dialog-header" slot="dialog-header">
            识别二维码关注公众号
          </div>

          <dl class="dialog-footer" slot="dialog-footer">
            <dd>
               <img src="../../assets/img12/index/qrcode.jpg" alt=""> 
            </dd>
          </dl>    
        </modal-dialog>
    </div>
</template>
<script>
import modalDialog from './dialog'
    export default {
        components: {
            modalDialog
        },
        props: [
            'wechat_code2'
        ],
        computed: {
        },
        methods: {
            closeDialog (arr){
               // this[arr] = false;
              this.$emit('hide2')
            }
        }
    }
</script>
<style scoped>
img{
    width: 60%;
    height: 100%;
}
.end_text{
    width: 100%;
    height: 1.3rem;
    margin-top: 20px;
    text-align: center;
    font-size: 0.32rem;
    line-height: 1.3rem;
    color: #aaa;
}
</style>