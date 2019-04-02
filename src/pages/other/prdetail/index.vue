<style src="./style.css" scoped></style>
<template src="./template.html"></template>

<script>
import modalDialog from '../../../components/base/dialog'
import myhead from '../../../components/base/header'
import nodate from '../../../components/base/nodate'
import { mapState, mapActions } from 'vuex'
import {html} from '../../../assets/js/global.js';
import axios from 'axios';
import qs from 'qs';

export default {
  data () {
    return {
      noticeData: [], // 下拉更新数据存放数组
      header:{
        'name':'商品详情',
        'link':'/index',
      },
      qiimgs:'',
      isCur: 1,
      isSlider:0,
      profile:{},
      token:'',
      noDataText:'',
      paraData:{
        uid:'',
        ps:10,
        pn:1
      },
      paraDataW:{
        uid:'',
        ps:100,
        pn:1
      },
      isApp:false,
      needLogin:false,
      loading:false,
      noData:false,
      statusBar:{},
      hasOrderIndex:'',
      current:1,
      friendRank:0,
      wordkRank:0,
      rankAnimated:0,
      bottomBarH:'',
      navType:'rank',
      tabs:[
        {'title':'商品详情',"id":'',"updated_at":"2019-03-20 15:51:57","uid":10,"state":1,"created_at":"2019-03-20 15:51:57","idModified":false,"identifier":5},
      ],
      noDataText:'-----我是有底线的-----',
      headImg:'',
      prdData:{}
    }
  },
  components: {
    modalDialog,
    myhead,
    nodate,
    // myfooter
  },
  computed:{
    ...mapState([
      // 映射 this.count 为 store.state.count
      'UID',
      'TOKEN',
      'PRDETAIL'
    ]),
  },
  created(){
    if (html.isPc()) {
      document.body.setAttribute('id','pcBody');
    }
    this.token = this.TOKEN;
    this.paraData.uid = this.UID; 

    if (this.$route.query.id) {
      this.paraData.gid = this.$route.query.id;
      this.fetchPrd();
    }
  },
  mounted () {

    dplus.track('小小麦商品详情',{'from':html.useragent()});//统计代码
    document.body.addEventListener('touchstart', function () {});

  },
  methods: {
    fetchPrd(){

      this.loading = true;
      
      axios.post('/seller_api/v1/proxy/fetch_goods',qs.stringify({
        uid:this.paraData.uid,
        gid:this.paraData.gid
      }),{
        headers: {
            "A-Token-Header": this.token,
        }
      }).then((response)=>{   
        
          let resData = response.data;  

          this.loading = false;
          if (resData.success) {
            this.prdData = resData.result.items[0];
            // this.paraData = Object.assign(this.paraData, this.prdData);
            this.headImg = this.globalAvatar+'goods/'+ this.prdData.head_image
          }  else {
            if (resData.code == '403' || resData.code == '250') {
              this.goto('/')
            }else{
              this.initMSG(resData.codemsg)
            }
          }
      }); 
    },
    goto(arr){
      this.$router.push(arr);
    },
    initMsg(){
      this.loading = true;
      setTimeout(()=>{
        // this.errorMsg = '';
        this.loading = false;
      },3000)
    },
  }
}
</script>

