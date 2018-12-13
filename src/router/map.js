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
	'/index': {
		meta: { title: '小小麦' },
		component: (resolve) => {
			require(['pages/index'], resolve)
		}
	},
	'/my': {
		meta: { title: '我的'},
		component: (resolve) => {
			require(['pages/set/my'], resolve)
		}
	},
	'/discovery': {
		meta: { title: '发现'},
		component: (resolve) => {
			require(['pages/set/discovery'], resolve)
		}
	},
	'/my/profile': {
		meta: { title: '个人信息'},
		component: (resolve) => {
			require(['pages/set/profile'], resolve)
		}
	},
	// '/my/recharge': {
	// 	meta: { title: '充值'},
	// 	component: (resolve) => {
	// 		require(['pages/set/recharge'], resolve)
	// 	}
	// },
	'/my/balance': {
		meta: { title: '我的钱包'},
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
	'/webtips': {
		meta: { title: '小小麦'},
		component: (resolve) => {
			require(['pages/set/web'], resolve)
		}
	},
	'/my/fans': {
		meta: { title: '小小麦'},
		component: (resolve) => {
			require(['pages/info/fans'], resolve)
		}
	},
	'/my/about': {
		meta: { title: '关于小小麦'},
		component: (resolve) => {
			require(['pages/info/about'], resolve)
		}
	},
	'/my/agreement': {
		meta: { title: '服务协议'},
		component: (resolve) => {
			require(['pages/info/agreement'], resolve)
		}
	},
	'/my/private': {
		meta: { title: '隐私条款'},
		component: (resolve) => {
			require(['pages/info/private'], resolve)
		}
	},
	'/my/withdraw': {
		meta: { title: '提现'},
		component: (resolve) => {
			require(['pages/set/withdraw'], resolve)
		}
	},
	'/my/nick': {
		meta: { title: '修改昵称'},
		component: (resolve) => {
			require(['pages/info/nick'], resolve)
		}
	},
	'/my/sex': {
		meta: { title: '性别'},
		component: (resolve) => {
			require(['pages/info/sex'], resolve)
		}
	},
	'/my/signature': {
		meta: { title: '个性签名'},
		component: (resolve) => {
			require(['pages/info/signature'], resolve)
		}
	},
	'/my/qrcode': {
		meta: { title: '我的二维码'},
		component: (resolve) => {
			require(['pages/info/qrcode'], resolve)
		}
	},
	'/my/bindacc': {
		meta: { title: '绑定手机号'},
		component: (resolve) => {
			require(['pages/info/bindacc'], resolve)
		}
	},
	'/my/service': {
		meta: { title: '客服方式'},
		component: (resolve) => {
			require(['pages/info/service'], resolve)
		}
	},
	'/my/seller': {
		meta: { title: '卖家信息'},
		component: (resolve) => {
			require(['pages/info/seller'], resolve)
		}
	},
	'/prd/success': {//新建商品
		meta: { title: '小小麦'},
		component: (resolve) => {
			require(['pages/prd/success'], resolve)
		}
	},
	'/prd/create': {//新建商品
		meta: { title: '发布商品'},
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
	'/order/buyer': {//选择地址
		meta: { title: '已购宝贝'},
		component: (resolve) => {
			require(['pages/order/buyer'], resolve)
		}
	},
	'/prd/list': {
		meta: { title: ''},
		component: (resolve) => {
			require(['pages/prd/index'], resolve)
		}
	},
	'/prd/detail': {
		meta: { title: '小小麦'},
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