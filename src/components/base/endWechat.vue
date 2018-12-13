<template>
    <div>
        <div class="end_text" :class="{'dn': !wechat_code_show}" @click.prevent="wechat">
            <p>{{ end_text }}</p>
        </div> 
    </div>
</template>
<script>
    export default {
        props: [
            'wechat_code',
            'wechat_code_show'
        ],
        data () {
            return {
                end_text:'-----技术支持：公众号“小小麦的家"-----',
            }
        },
        computed: {
        },
        methods: {
            closeDialog (arr){
                this[arr] = false;
              // this.$emit('hide2')
            },
            wechat (){
                this.$emit('wechat')
            }
        }
    }
</script>
<style scoped>
img{
    width: 60%;
    height: 100%;
}
.dn{
    display: none;
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