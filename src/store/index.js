import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

export default new vuex.Store({
    state:{
        TOKEN:'',
        UID:'',
        STATUSBARH:{},
        BOTTOMBARH:{},
        PROFILE:{},
        EDITPRD:{},
        EDITAddress:{},
        LISTDATA:[],
        UNIONID:'',
        CART:{
            priceSet:{
                def_price:'',
                subIndex: 0,
                curIndex:0,
                price:[]  ,
                list:{}             
            },
            specs:[],
            other:{
                show_comment:true,
                show_sell:true,
                sell_base:0
            }
        },
        SHARETITLE:{},
        ISWXAAPPINSTALLED:'',
        SHOWFOOTER:true
    },
    getters:{//getters 和 vue 中的 computed 类似 , 都是用来计算 state 然后生成新的数据 ( 状态 ) 的。
        not_show(state){//这里的state对应着上面这个state
            return !state.profileFlag;
        }
    },
    mutations:{
        switchState(state, obj){
        	Object.keys(obj).forEach(key => {
			    state[key] = obj[key]
			})
        },
        clearState(state){
        	Object.keys(state).forEach(key => {
                if (key != 'STATUSBARH' && key != 'BOTTOMBARH') 
    			    state[key] =  '';
			})
        }
    },
    actions:{
        switchState(context,obj){//这里的context和我们使用的$store拥有相同的对象和方法
            context.commit('switchState',obj);
        },
        clearState(context){
        	context.commit('clearState');
        }
    }
})