<template>
    <div>
        <div class="end_text" :class="{'dn': !wechat_code_show}" @click.prevent="wechat">
            <!-- <p>{{ end_text }}</p> -->
            <p><span style="margin-right: 30px;">小小麦</span>|<span style="margin: 0 30px;">订单查询</span>|<span style="margin-left: 30px;">物流查询</span></p>
        </div> 
    </div>
</template>
<script>
    export default {
        props: [
            'wechat_code',
            'wechat_code_show'
        ],
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