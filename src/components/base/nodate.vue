<style scoped>

.nodata{
  padding-top: 30px;
  text-align: center;
  color: #a8a8aa
}
.nodata p i{
  font-size: 86px;
}

</style>
<template>
   <div class="nodata">
    <p><i class="iconfont icon-jilu"></i></p>
     {{noText}}
   </div>
</template>
<script>

export default {
    props: [
        'noText',
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
            console.log(e)
            this.$emit('hide')
        },
        close (e) {
          this.$emit('hide')
        }
    }
}

</script>
