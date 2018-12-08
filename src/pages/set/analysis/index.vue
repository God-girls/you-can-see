<style src="./style.css" scoped></style>
<template src="./template.html"></template>

<script>
import loading from '../../../components/base/loading'
import myhead from '../../../components/base/header'
import nodate from '../../../components/base/nodate'
import modalDialog from '../../../components/base/dialog'
import datepicker from '../../../components/base/Datepicker.vue'
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
        'name':'商品分析',
        'link':'/discovery',
        // isNobg:true,
      },
      token:'',
      loading:false,
      noData:false,
      selectOne:false,
      isCur:0,
      isCur2:1,
      isCur3:0,
      statusBar:{},
      loadError:'',
      bottomBarH:[],
      isApp:'',
      noDataText:'-----我是有底线的-----',
      tabsSeq:[
        {name:'按金额',type:'A'},
        {name:'按销量',type:'C'},
      ],
      tabsData:[
        {name:'昨日',type:'0'},
        {name:'今日',type:'1'},
        {name:'7天',type:null},
        {name:'30天',type:null}
      ],
      tabs:[
        {name:'全部商品'},
        {name:'查看单品'},
        {name:'商品排行'}
      ],
      paraData:{
        begin_time:'',
        end_time:'',
        ps:10,
        pn:1,
        status:'0'
      },
      totalPages:-2,
      sellerInfo:{
        imgs:'[]'
      },
      rankData:[],
      profile:{},
      listData:{},
      saleData:{},
      dataTime:{},
      prdGid:'',
      allPrdData:[],
      isIosWechat:false
    }
  },
  components: {
    loading,
    nodate,
    myhead,
    datepicker,
    modalDialog
  },
  computed:{
    ...mapState([
      // 映射 this.count 为 store.state.count
      'UID',
      'TOKEN',
      'PROFILE',
      'STATUSBARH',
    ])
  },
  created(){
    if (html.isIosWechat()) {
      this.isIosWechat = true;
    }
  },
  mounted () {

    if (html.isWebAndroid()) {
      this.isAndroid = true;
    }
    if (this.TOKEN) {
      this.profile = this.PROFILE
      this.paraData.uid = this.UID;
      this.token = this.TOKEN;
    }

    this.dataTime.start = html.timeForMat(0)
    this.dataTime.end = html.timeForMat(0)

    this.getList ();
    this.fetchList();
    this.getBonus();
    dplus.track('收入分析',{'from':html.useragent()});//统计代码
    document.body.addEventListener('touchstart', function () {});

  },
  methods: {
    ...mapActions([
      'switchState', // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`'
      'clearState'
    ]),
    setSellerInfo(item){
      this.sellerInfo = item;
      this.prdGid = item.id;
      this.getList();
      this.getBonus();
      this.selectOne = false;
    },
    changeTabs(index){
      this.isCur = index;
      if (this.isCur == 0) {
        this.prdGid = '';
        this.getList();
        this.getBonus();
      }else if(this.isCur == 1){
        this.prdGid = this.sellerInfo.id;
        // this.fetchList();
        this.getBonus();
        this.getList();
      }
      if (this.isCur == 2) {
        this.getRank('A');
      }
    },
    changeType(index){
      this.isCur2 = index;
      this.typeFormat();
      this.getList()
    },
    changeSeq(index,type){
      this.isCur3 = index;
      this.getRank(type);
    },
    typeFormat(){
      switch(this.isCur2){
        case 0:
          this.dataTime.start = html.timeForMat(1)
          this.dataTime.end = html.timeForMat(1)
        break;

        case 1:
          this.dataTime.start = html.timeForMat(0)
          this.dataTime.end = html.timeForMat(0)
        break;

        case 2:
          this.dataTime.start = html.timeForMat(6)
          this.dataTime.end = html.timeForMat(0)
        break;

        case 3:
          this.dataTime.start = html.timeForMat(29)
          this.dataTime.end = html.timeForMat(0)
        break;

      }
    },
    getRank (type){
      axios.post('/seller_api/v1/seller/board',qs.stringify({
        uid:this.paraData.uid,
        type:type
      }),{
          headers: {
              "A-Token-Header": this.token,
          }
        }).then((response)=>{   
          let resData = response.data;

          if (resData.success) {
            this.rankData = resData.result;
          }  else {
            if (resData.code == '403' || resData.code == '250') {
              this.goto('/')
            }
          }
      }).catch((response)=>{
        // this.logErrors(JSON.stringify(response))
      });  
    },
    getBonus (){
      axios.post('/seller_api/v1/seller/goods_stat',qs.stringify({
        uid:this.paraData.uid,
        gid:this.prdGid
      }),{
          headers: {
              "A-Token-Header": this.token,
          }
        }).then((response)=>{   
          let resData = response.data;

          if (resData.success) {
            this.saleData = resData.result;
          }  else {
            if (resData.code == '403' || resData.code == '250') {
              this.needLogin = true;
              this.noToken = true;
            }
          }
      }).catch((response)=>{
        // this.logErrors(JSON.stringify(response))
      });  
    },
    fetchList(){
      axios.post('/seller_api/v1/seller/my_goods',qs.stringify({
        uid:this.paraData.uid,
        ps:10,
        pn:this.paraData.pn
      }),{
        headers: {
            "A-Token-Header": this.token,
        }
      }).then((response)=>{   
        
          let resData = response.data;  

          if (resData.success) {
            if (resData.result.items.length) {
              if (this.paraData.pn == 1) {
                this.sellerInfo = resData.result.items[0];
                this.allPrdData = resData.result.items;
                this.totalPages = resData.result.totalPageCount;
              }else{
                this.allPrdData = this.allPrdData.concat(resData.result.items)
              }              
            }
          }  else {
            if (resData.code == '403' || resData.code == '250') {
              this.needLogin = true;
              this.noToken = true;
            }else{
              this.initMSG(resData.codemsg)
            }
          }
      })

    },
    getList(done){
      this.noData = true;
      axios.post('/seller_api/v1/seller/goods_chart',qs.stringify({
        uid:this.paraData.uid,
        gid:this.prdGid,
        start:this.dataTime.start,
        end:this.dataTime.end
      }),{
          headers: {
              "A-Token-Header": this.token,
          }
        }).then((response)=>{     

          let resData = response.data; 
          
          if (resData.success) {
            let ranks = resData.result;
              if (ranks.list.length) {
                this.listData = ranks;

                let lineData = resData.result.list;
                let count = 0;
                let xData = [];
                let yData = [];
                // console.log(resData)
                for (let i = 0; i < lineData.length; i++) {
                  xData.push(lineData[i].id);
                  yData.push(lineData[i].amount);
                  count = html.add(count,lineData[i].count);
                }
                // console.log(count)
                if (count) {
                  this.noData = false;
                  this.$nextTick(function(){
                      this.drawLine (xData,yData);
                  })
                }else this.noData = true;                          
              }
          }  else {
            if (resData.code == '403' || resData.code == '250') {
              this.$router.push('/')
            }
          }

      }).catch((response)=>{if (done) done(true)});  

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
    drawLine (xData,yData){//关键指标趋势图
        var myChart = echarts.init(document.getElementById('lineMain'));
        // console.log(myChart)
        var option = {
            tooltip: {
                trigger: 'axis',
                textStyle:{
                    fontSize:this.getDpr() //此处设置提示文字大小
                },
            },
            // legend: {
            //     data:['收入']
            // },
            grid: {
                left: '4%',
                 top: '6%',
                right: '9%',
                bottom: '0%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: xData,
                // axisLabel:{'interval':0,rotate:30}, 
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
            name:{
              fontSize:36//ios 24
            },
            // dataZoom: [ { show: true, start: 60, end: 100 }],
            color:['#1caf9a'],
            series: [
                {
                    name:'收入',
                    type:'line',
                    stack: '总量',
                    data:yData,
                    symbol:'emptyCircle',
                    // smooth : true,
                }
            ]
        };
        // myChart.setOptionoption);
        myChart.setOption(option);
        
      },
    onRefresh(done) {
      setTimeout(()=>{
        this.totalPageCount = -1;
        this.paraData.pn = 1;
        this.getList(done);  
        this.getProfile ();      
      },1000)
    },
    onInfinite(done) {   
      this.indexDone = done;   
      this.getList(done);
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

