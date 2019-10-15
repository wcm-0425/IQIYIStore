require(['config'], function () {
    require(['jquery'], function () {
        class IndexBanner {

            constructor() {
                this.banpics = $('.new-focus-list li')
                this.banbtns = $('.new-trigger-dot')
            }
            init() {
                let _this = this
                this.banbtns.on('click', function () {
                    // _this.banpics.eq($(this).index).addClass('o1').siblings().addClass('o0');
                })
            }

        }

        new IndexBanner().init()

    })
})