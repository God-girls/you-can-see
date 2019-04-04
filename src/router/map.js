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
			require(['pages/order/create'], resolve)
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
	'/app/admin': {
		meta: { title: '小小麦' },
		component: (resolve) => {
			require(['pages/app/admin'], resolve)
		}
	},
	'/index': {
		meta: { title: '小小麦' },
		component: (resolve) => {
			require(['pages/index'], resolve)
		}
	},
	'/prd/detail': {
		meta: { title: '小小麦' },
		component: (resolve) => {
			require(['pages/other/prdetail'], resolve)
		}
	},
	'/order/create': {//创建订单
		meta: { title: '创建订单'},
		component: (resolve) => {
			require(['pages/order/create'], resolve)
		}
	},
	'/order/submit': {//我的关注
		meta: { title: '小小麦'},
		component: (resolve) => {
			require(['pages/order/submit'], resolve)
		}
	},
	'/order/balance': {
		meta: { title: '我的收益'},
		component: (resolve) => {
			require(['pages/order/balance'], resolve)
		}
	},
	'/order/list': {
		meta: { title: '订单管理'},
		component: (resolve) => {
			require(['pages/order/list'], resolve)
		}
	},
	'/other/notice': {
		meta: { title: '小小麦'},
		component: (resolve) => {
			require(['pages/other/notice'], resolve)
		}
	},
}