<template>
    <div class="dialogs" :class="{ 'dialog-active': isActive}" v-if="isActive">
        <div class="dialog">
            <div :class="['dialog-content',{ 'slideInDown': isActive}]">
                <div class="diaplg-border">
                    <div class="close rotate" @click.prevent="close" v-if="dialogClose">
                      <span class="iconfont icon-close redCR"></span>
                    </div>
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
.dialogs{
    display: table;
    content: "";
    position: absolute;
    visibility: hidden;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 55;
    margin: auto;
    width: 100%;
}
.dialog {
    display: table-cell;
    vertical-align: middle;
    perspective: 500px;
    position: relative;z-index: 54;
    /*transition: all .6s;*/
}

.dialog-active {
    visibility: visible;
}

.dialog-active .dialog-content {
    opacity: 1;
    position: relative;
    transform: rotateY(0);
}

.dialog-active ~ .dialog-overlay {
    opacity: 1;
    visibility: visible;
}

.dialog-content {
    border-radius: 20px;
    margin: 0 auto;
    background: #fff;
    background-size: 100%;
    width: 90%;
    height: auto;
    padding: 50px 30px;
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
.dialog-header {
    font-size: 30px;
    /*color: #d66167;*/
    border-bottom: 1px solid #c0c0c0;/*no*/
    padding-bottom: 20px;
    margin-bottom: 20px;
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

.dialog-footer {
    padding: 40px 0px 0px;
    display: -webkit-box;
    display: flex;
    width: 100%;
}
.dialog-footer dd{
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  width: 0%;
  text-align: center;
  font-size: 30px;
  padding: 5px;
  position: relative
}
.dialog-footer dd:last-child:before{
 content: ' ';
  border-left:1px solid #dedede ;/*no*/
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 1px;

}
.dialog-footer dd button{
  width: 90%;
  height: 70px;
  line-height: 70px;
  color: #fff;
  /*box-shadow: 5px 5px 8px rgba(248,97,1,1);*/
  font-size: 24px;

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
.dialog-active[defaultlock="true"] .dialog-content{
    border: none;
}
.dialog-active[defaultlock="true"] .dialog-content{
    padding: 0;
    background:none;
}
.dialog-active[noclose="true"] .close{
    display: none;
}
/*.animated.infinite {
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite
}*/
@-webkit-keyframes slideInDown {
    0% {
        opacity: .5;
        -webkit-transform: translateY(-500px);
        transform: translateY(-500px)
    }

    100% {
        -webkit-transform: translateY(0);
        transform: translateY(0)
    }
}

@keyframes slideInDown {
    0% {
        opacity: .5;
        -webkit-transform: translateY(-500px);
        -ms-transform: translateY(-500px);
        transform: translateY(-500px)
    }

    100% {
        -webkit-transform: translateY(0);
        -ms-transform: translateY(0);
        transform: translateY(0)
    }
}

.slideInDown {
    -webkit-animation-duration: .2s;
    animation-duration: .2s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-name: bounceIn;
    animation-name: bounceIn
}
@-webkit-keyframes bounceIn {
    0% {
        opacity: 0;
        -webkit-transform: scale(.3);
        transform: scale(.3)
    }
    100% {
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1)
    }
}

@keyframes bounceIn {
    0% {
        opacity: 0;
        -webkit-transform: scale(.3);
        -ms-transform: scale(.3);
        transform: scale(.3)
    }
    100% {
        opacity: 1;
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1)
    }
}




</style>