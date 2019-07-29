<style src="./style.css" scoped></style>
<template src="./template.html"></template>

<script>
import loading from '../../../components/base/loading'
import myhead from '../../../components/base/header'
import myfooter from '../../../components/base/footer'
import nodate from '../../../components/base/nodate'
import { mapState, mapActions } from 'vuex'
import {html} from '../../../assets/js/global.js';
import axios from 'axios';
import qs from 'qs';
import echarts from 'echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/title';

// 引入图表
export default {
  data () {
    return {
      show1:true,     
      header:{
        'name':'我的上级：',
        // 'link':'/my',
        noBack:true,
      },
      token:'',
      loading:false,
      noData:true,
      isCur:0,
      statusBar:{},
      loadError:'',
      bottomBarH:[],
      isApp:'',
      noDataText:'--技术支持：小小麦--',
      totalPageCount:-1,
      paraData:{
        type:''
      },
      tabs:[
        {name:'最近7天',type:'W'},
        {name:'最近30天',type:'M'},
        {name:'最近1年',type:'Y'}
      ],
      minDate:'2018-1-01',
      profile:{},
      listData:[],
      profitTotal:{},
      profitDday:{}
    }
  },
  components: {
    loading,
    nodate,
    myhead,
    myfooter,
  },
  computed:{
    ...mapState([
      // 映射 this.count 为 store.state.count
      'UID',
      'TOKEN',
      'PROFILE',
    ])
  },
  created(){
    if (html.isPc()) {
      document.body.setAttribute('id','pcBody');
    }
    this.paraData.uid = this.UID;
    this.token = this.TOKEN;
    this.getprofit('W');
    this.getProfile()
  },
  mounted () {

    dplus.track('小小麦数据分析',{'from':html.useragent()});//统计代码
    document.body.addEventListener('touchstart', function () {});

  },
  methods: {
    ...mapActions([
      'switchState', // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`'
      'clearState'
    ]),
    changeType(index,type){
      this.isCur = index;
      this.getprofit(type)
    },
    getProfile (){
      // this.loading = true;
      axios.post(this.ttDomain + '/seller_api/v1/proxy/userinfo',qs.stringify(this.paraData),{
          headers: {
              "A-Token-Header": this.token,
          }
        }).then((response)=>{   
          let resData = response.data;
          this.loading = false;
          if (resData.success) {
            this.profile = resData.result;
            this.header.name = '我的上级：'+resData.result.parent_nick;
          }  else {
            if (resData.code == '403' || resData.code == '250') {
              this.goto('/')
            }else{
              this.initMSG(resData.codemsg)
            }
          }
      });  
    },
    getprofit (type){
      this.paraData.type = type;
      axios.post(this.ttDomain + '/seller_api/v1/proxy/stat',qs.stringify(this.paraData),{
          headers: {
              "A-Token-Header": this.token,
          }
        }).then((response)=>{   
          let resData = response.data;
          
          if (resData.success) {
            let xData = [],
                dataOrder = [],
                dataProfit = [],
                count = 0;

            this.profitDday = resData.result.today;
            // this.profitY = resData.result.yesterday.income;
            this.profitTotal = resData.result.total;
            resData.result.list.forEach((item)=> {
              xData.push(item.id);
              dataOrder.push(item.count);
              dataProfit.push(item.amount);
              count += item.count;
            });
            this.noData = false
            this.drawLine (xData,dataOrder,dataProfit)
          }  else {
            if (resData.code == '403' || resData.code == '250') {
              this.goto('/')
            }else{
              this.initMSG(resData.codemsg)
            }
          }
      });  
    },
    drawLine (xData,dataOrder,dataProfit){//关键指标趋势图 this.drawLine (xData,yData);
      // console.log(xData)
      var myChart = echarts.init(document.getElementById('lineMain'));
      // console.log(myChart)
      var option = {
          tooltip: {
              trigger: 'axis',
              textStyle:{
                  fontSize:this.getDpr() //此处设置提示文字大小
              },
          },
          legend: {
              data:['订单数','支出(元)'],
              textStyle : {
                  fontSize : this.getDpr()
              },
          },
          grid: {
              left: '4%',
              top: '18%',
              right: '9%',
              bottom: '0%',
              containLabel: true
          },
          xAxis: {
              type: 'category',
              boundaryGap: false,
              data: xData,
              axisLabel:{'interval':0,rotate:30}, 
              axisLabel : {
                  textStyle : {
                      fontSize : this.getDpr()
                  },
              }
          },
          calculable : false,
          yAxis: {
              type: 'value',
              axisLabel : {
                  textStyle : {
                      fontSize : this.getDpr()
                  }
              }
          },
          color:['#1caf9a','#00b4ff',],
          series: [
              {
                  name:'订单数',
                  type:'line',
                  // stack: '总量',
                  data:dataOrder,
                  symbol:'emptyCircle',
                  // smooth : true,
              },
              {
                  name:'支出(元)',
                  type:'line',
                  // stack: '总量',
                  data:dataProfit,
                  symbol:'emptyCircle',
                  // smooth : true,
              }
          ]
      };
      myChart.setOption(option);
      
    },
    getDpr(){
        var dpr = document.documentElement.getAttribute('data-dpr');
        if (dpr == 1) {
            return 12;
        }else if (dpr == 2) {
            return  24;
        }else {
            return 36;
        }
    },
    initMSG(errors){
      this.loadError = errors;
      this.loading = true;
      setTimeout(()=>{
        this.loadError = '';
        this.loading = false;
      },3000)
    },
    goto (arr){
       this.$router.push(arr)        
    },
    goBack (){
      this.$router.push('/')      
    },
    wechatOpen(arr){
      this[arr]=true;
    },
    closeDialog (arr){
      this[arr] = false
    }
  },
  beforeDestroy(){
    clearInterval(this.timer);
    clearInterval(this.timeout);
    clearInterval(this.timerTree);
  }
}
</script>

