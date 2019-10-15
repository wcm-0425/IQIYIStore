require(['config'], function () {
    require(['jquery'], function () {
        class IndexBanner {

            constructor() {
                this.ban_items = $('.new-focus-list')
                this.banbtns = $('.new-trigger-dot')
                this.prev = $('.new-focus-prev')
                this.next = $('.new-focus-next')
                this.index = 0
                this.timer = null

            }
            init() {
                let _this = this
                this.banbtns.on('click', function () {
                    _this.index = $(this).index();

                    _this.lunbo();

                })
                // 左右箭头
                this.prev.on('click', function () {
                    _this.index--;
                    if (_this.index == 0) {
                        _this.index = _this.banbtns.length
                    }
                    _this.lunbo()

                });
                this.prev.on('mouseover', function () {
                    $(this).css({
                        backgroundPositionX: '-66px',
                    })
                })
                this.prev.on('mousedown', function () {
                    $(this).css({
                        backgroundPositionX: '-132px',

                    })
                })
                this.prev.on('mouseup', function () {
                    $(this).css({
                        backgroundPositionX: '-66px',
                    })
                })
                this.prev.on('mouseout', function () {
                    $(this).css({
                        backgroundPositionX: '0px',
                    })
                })
                this.next.on('click', function () {
                    _this.index++;
                    if (_this.index >= _this.banbtns.length) {
                        _this.index = 0
                    }

                    _this.lunbo()

                });
                this.next.on('mouseover', function () {
                    $(this).css({
                        backgroundPositionX: '-66px',
                    })
                })
                this.next.on('mousedown', function () {
                    $(this).css({
                        backgroundPositionX: '-132px',

                    })
                })
                this.next.on('mouseup', function () {
                    $(this).css({
                        backgroundPositionX: '-66px',
                    })
                })
                this.next.on('mouseout', function () {
                    $(this).css({
                        backgroundPositionX: '0px',
                    })
                })
                // 定时
                this.timer = setInterval(function () {
                    _this.ds()
                }, 5000)
                this.ban_items.on('mouseover', function () {
                    clearInterval(_this.timer)
                })
                this.ban_items.on('mouseout', function () {
                    _this.timer = setInterval(function () {
                        _this.ds()
                    }, 5000)
                })
            }
            lunbo() {
                this.ban_items.children().eq(this.index).stop(true, true).animate({
                    opacity: 1
                },800).siblings().stop(true, true).animate({
                    opacity: 0
                }, 800)
                this.banbtns.eq(this.index).addClass('active').siblings().removeClass('active')
            }
            ds() {
                this.index++;
                if (this.index >= this.banbtns.length) {
                    this.index = 0
                }
                this.lunbo()
            }

        }

        new IndexBanner().init()

    })
})