<style scoped>
.my-tabs{
  padding: 0px 0;
}
.my-tabs ul{
  /*padding-top: 27px;*/
  margin: 0px 0px 0px;
  border-bottom:1px solid #e82d66;/*no*/
  text-align: center;
  display: -webkit-box;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 60px;
}
.my-tabs ul li{
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    width: 0%;
    position: relative;
    height: 100%;
    border-bottom: 3px solid #ec4074;
}
.my-tabs ul li span{
    position: relative;
    z-index: 2;
}

.my-tabs ul li.current{
    color: #fff;
    color: #e53268;
    border-color: #fff625;
    text-shadow: 0 2px #fff, 2px 0 #fff, -2px 0 #fff, 0 -2px #fff;
}
</style>
<template>
    <div class="my-tabs">
      <ul class="f30">
        <li v-for="(item, index) in selections" 
          :class="{'current':index == nowIndex}" 
          @click.prevent="chosenSelection(index,item)">
          <i></i><span>{{item.name}}</span>
        </li>
      </ul>
    </div>
</template>
<script>
export default {
  props: {
    selections: {
      type: Array,
      default: [{
        label: 'test',
        value: 0
      }]
    }
  },
  data () {
    return {
      nowIndex: 0
    }
  },
  methods: {
    chosenSelection (index,item) {
      this.nowIndex = index
      this.$emit('onChange', item)
    }
  }
}
</script>
