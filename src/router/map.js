export default {
	'*': {
		meta: { title: '小小麦' },
		component: (resolve) => {
			require(['pages/app/404'], resolve)
		}
	},
	'/404': {
		meta: { title: '小小麦' },
		component: (resolve) => {
			require(['pages/app/404'], resolve)
		}
	},
	'/': {
		meta: { title: '小小麦' },
		component: (resolve) => {
			require(['pages/index'], resolve)
		}
	},
	'/app/login': {
		meta: { title: '小小麦' },
		component: (resolve) => {
			require(['pages/app/login'], resolve)
		}
	},
	'/app/author': {
		meta: { title: '小小麦' },
		component: (resolve) => {
			require(['pages/app/author'], resolve)
		}
	},
	'/app/invite': {
		meta: { title: '小小麦' },
		component: (resolve) => {
			require(['pages/app/invite'], resolve)
		}
	},
	'/index': {
		meta: { title: '小小麦' },
		component: (resolve) => {
			require(['pages/index'], resolve)
		}
	},
	'/my': {
		meta: { title: '小小麦'},
		component: (resolve) => {
			require(['pages/set/my'], resolve)
		}
	},
	'/my/profile': {
		meta: { title: '系统设置'},
		component: (resolve) => {
			require(['pages/set/profile'], resolve)
		}
	},
	'/my/recharge': {
		meta: { title: '充值'},
		component: (resolve) => {
			require(['pages/set/recharge'], resolve)
		}
	},
	'/my/balance': {
		meta: { title: '我的余额'},
		component: (resolve) => {
			require(['pages/set/balance'], resolve)
		}
	},
	'/my/bonus': {
		meta: { title: '收入分析'},
		component: (resolve) => {
			require(['pages/set/bonus'], resolve)
		}
	},
	'/my/analysis': {
		meta: { title: '商品分析'},
		component: (resolve) => {
			require(['pages/set/analysis'], resolve)
		}
	},
	// '/my/invite': {
	// 	meta: { title: '邀请有礼'},
	// 	component: (resolve) => {
	// 		require(['pages/set/invite'], resolve)
	// 	}
	// },
	'/my/withdraw': {
		meta: { title: '提现'},
		component: (resolve) => {
			require(['pages/set/withdraw'], resolve)
		}
	},
	'/my/nick': {
		meta: { title: '修改昵称'},
		component: (resolve) => {
			require(['pages/set/nick'], resolve)
		}
	},
	'/my/sex': {
		meta: { title: '性别'},
		component: (resolve) => {
			require(['pages/set/sex'], resolve)
		}
	},
	'/prd/create': {//新建商品
		meta: { title: '新建商品'},
		component: (resolve) => {
			require(['pages/order/create'], resolve)
		}
	},
	'/prd/other': {//新建商品
		meta: { title: '其它设置'},
		component: (resolve) => {
			require(['pages/order/other'], resolve)
		}
	},
	'/prd/spec': {
		meta: { title: '规格设置'},
		component: (resolve) => {
			require(['pages/order/spec'], resolve)
		}
	},
	'/prd/price': {//编辑地址
		meta: { title: '价格设置'},
		component: (resolve) => {
			require(['pages/order/price'], resolve)
		}
	},
	'/order/select': {//选择地址
		meta: { title: '选择收货地址'},
		component: (resolve) => {
			require(['pages/order/select'], resolve)
		}
	},
	'/prd/list': {
		meta: { title: ''},
		component: (resolve) => {
			require(['pages/prd/index'], resolve)
		}
	},
	'/prd/detail': {
		meta: { title: '商品详情'},
		component: (resolve) => {
			require(['pages/prd/detail'], resolve)
		}
	},
	'/order/list': {
		meta: { title: '订单管理'},
		component: (resolve) => {
			require(['pages/order/list'], resolve)
		}
	},
	'/prd/suborder': {
		meta: { title: '管理收货地址'},
		component: (resolve) => {
			require(['pages/order/suborder'], resolve)
		}
	},
	'/admin/list': {
		meta: { title: '小小麦'},
		component: (resolve) => {
			require(['pages/admin/list'], resolve)
		}
	},
	'/admin/order': {
		meta: { title: '小小麦'},
		component: (resolve) => {
			require(['pages/admin/order'], resolve)
		}
	},
	'/admin/deliver': {
		meta: { title: '小小麦'},
		component: (resolve) => {
			require(['pages/admin/deliver'], resolve)
		}
	},
	'/admin/product': {
		meta: { title: '小小麦'},
		component: (resolve) => {
			require(['pages/admin/product'], resolve)
		}
	},
	'/admin/edit': {
		meta: { title: '添加新地址'},
		component: (resolve) => {
			require(['pages/admin/edit'], resolve)
		}
	},
	'/admin/notice': {
		meta: { title: '小小麦'},
		component: (resolve) => {
			require(['pages/admin/notice'], resolve)
		}
	},
	'/admin/login': {
		meta: { title: '小小麦'},
		component: (resolve) => {
			require(['pages/app/admin'], resolve)
		}
	},
	'/webtips': {
		meta: { title: '小小麦'},
		component: (resolve) => {
			require(['pages/set/web'], resolve)
		}
	},
}