function plugin(Vue, opts) {
    opts = Object.assign({
        src: ''//https://www.baidu.com/favicon.ico
    }, opts)

    Object.defineProperty(Vue.prototype, '$title', {
        get() {
            return document.title
        },
        set(value) {
            let id, iframe
            if (navigator.userAgent.toLowerCase().indexOf("micromessenger") > -1) {
                document.title = value;
            }
            
            id = '__refreshDocumentTitle__'
            iframe = document.getElementById(id)

            if (!iframe) {
                iframe = Object.assign(document.createElement('iframe'), {
                    id,
                    width: 0,
                    height: 0,
                    src: opts.src,
                    scolling: 'no',
                    frameborder: 0
                })

                iframe.style.display = 'none'

                document.body.appendChild(iframe)
            } else {
                iframe.src = iframe.src
            }
        }
    })
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(plugin)
}

export default plugin