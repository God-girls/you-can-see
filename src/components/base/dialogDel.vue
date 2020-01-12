<template>
    <div class="dialogWrap" :class="{ 'dialog-active': isActive}" v-if="isActive">
        <div class="dialogdel">
            <div :class="['dialog-con',{ 'animateds slideInUp': isActive}]">
                <div class="diaplg-border">
                    <slot name="dialog-header"></slot>
                    <slot name="dialog-body"></slot>
                    <slot name="dialog-footer"></slot>                   
                </div>
            </div>
        </div>
        <div class="dialogMask" v-if="isActive" @click.prevent="closeDefault"></div>
    </div>
</template>
<script>
    export default {
        props: [
            'dialogshow2',
            'closeShow',
            'noClickBg'
        ],
        computed: {
          isActive: function () {
            return this.dialogshow2
          },
          dialogClose(){
            return this.closeShow ? this.closeShow : true
          }
        },
        methods: {
            closeDefault(e){
                if (!this.noClickBg) 
                    this.$emit('hide')
            },
            close (e) {
              this.$emit('hide')
            }
        }
    }
</script>
<style scoped>
.footerP{
    text-align: right;
    padding: 0 80px 30px;
    font-size: 14px;
}
#dialog-template{
    display: none;
}   
.dialogMask{
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 53;
}
.dialogWrap{
    /*display: table;*/
    content: "";
    position: absolute;
    visibility: hidden;
    /*top: 0;*/
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 55;
    margin: auto;
    width: 100%;
}
.dialogdel {
    /*display: table-cell;*/
    /*vertical-align: middle;*/
    perspective: 500px;
    position: relative;
    z-index: 54;
    /*transition: all .6s;*/
}

.dialog-active {
    visibility: visible;
}

.dialog-active .dialog-con {
    opacity: 1;
    position: relative;
    transform: rotateY(0);
}

.dialog-active ~ .dialog-overlay {
    opacity: 1;
    visibility: visible;
}

.dialog-con {
    margin: 0 auto;
    background: #fff;
    width: 100%;
    height: auto;
    /*padding: 10px 0px;*/
    /*border:6px solid #6c6c81;*/
    opacity: 0;
    display: -webkit-box;
    display: flex;
    align-items: center;
}
.diaplg-border{
    width: 100%;
    color: #000000;
    line-height: 40px;
}
.del-header {
    border-bottom: 1px solid #c0c0c0;/*no*/
    padding: 40px 0;
    text-align: center;
    position: relative;
    z-index: 2;
}

.dialog-title {
    padding: 60px 0 25px;
    text-align: center;
    color: #Fff;
}

.dialog-body {
    padding: 2em;
}

.dialog-body .error {
    font-size: 1.2em;
    color: salmon;
}

.del-footer{
    padding: 0px 0px 0px;
    width: 100%;
    text-align: center;
    line-height: 90px;
}
.del-footer dd{
    border-top: 10px solid #eeedf2;
}


.dialog-overlay {
    content: "";
    position: fixed;
    visibility: hidden;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5;
    opacity: 0;
    background: rgba(0, 0, 0, 0.7);
    transition: all .6s;
}

.close {
    display: inline-block;
    position: absolute;
    top: 10px;
    right: 10px;
    color: #333;
    text-decoration: none;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    z-index: 10;
}
/*.icon-close{
    display: inline-block;
    width: 64px;
    height: 64px;
}*/
.close:hover {
/*  transition: .8s ease all;
    -moz-transition: .8s ease all;
    -webkit-transition: .8s ease all;
*/}

.close .iconfont {
    font-size: 40px;
}

.rotate {
    cursor: pointer;
}

.rotate:hover {
    transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    transition: transform 1.0s ease all;
    -moz-transition: -moz-transform 1.0s ease all;
    -webkit-transition: -webkit-transform 1.0s ease all;
}

.loading-overlay {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5;
    opacity: 1;
    background: rgba(0, 0, 0, 0.5);
    transition: all .6s;
}
.dialog-active[fail="true"] .close{
  display: none;
}

.borNone{
  border: none!important;
}
.dialog-active[close="false"] .close{
    opacity: 0;
    right: -10000px;
}

.dialog-active[defaultlock="true"] .close{
    display: none;
}
.dialog-active[defaultlock="true"] .dialog-con{
    border: none;
}
.dialog-active[defaultlock="true"] .dialog-con{
    padding: 0;
    background:none;
}
.dialog-active[noclose="true"] .close{
    display: none;
}



</style>