// 须要在希望 Mixin 的 component 上面加上 data: { resizeOptions: { selector: '.xxx', showFooter: true, showHeader: true } }
// 其中， resizeOptions.selector 代表想要设定高度的节点上的 query 目标（id, class, tag...）
import { mapState } from 'vuex'
const rootValue = 75

const mixin = {
    mounted() {
        window.addEventListener('resize', this.setHeight, true)
        this.setHeight()
    },
    destroyed() {
        window.removeEventListener('resize', this.setHeight, true)
    },
    computed: {
        ...mapState({
            currentFontSize: state => state.app.fontSize
        })
    },
    methods: {
        setHeight() {
            const els = [...document.querySelectorAll(this.resizeOptions.selector)]
            els.forEach(el => {
                let vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
                // 扣掉 Header height
                if (this.resizeOptions.showHeader) vh -= ((this.resizeOptions.headerHeight || 88) * (this.currentFontSize / rootValue))
                // 扣掉 Footer height
                if (this.resizeOptions.showFooter) vh -= ((this.resizeOptions.footerHeight || 120) * (this.currentFontSize / rootValue))
                const heightRem = vh / this.currentFontSize
                el.setAttribute('style', `height: ${heightRem}rem;`)
            })
        }
    }
}

export default mixin
