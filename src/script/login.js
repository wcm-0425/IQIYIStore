class login {
    constructor() {
        this.$loginBox = $('.login');
        this.$registerBox = $('.register');
        this.$otherWay = $('.otherWay')
        this.$toLogin = $('.to-login');
        this.$toRegister = $('.to-register');
        this.$toOtherLogin = $('.to-other-login')
    }
    tabswith() {
        let _this = this;
        this.$toRegister.on('click', function () {
            _this.$loginBox.addClass('dn');
            _this.$otherWay.addClass('dn');
            _this.$registerBox.removeClass('dn')
        })
        this.$toLogin.on('click', function () {
            _this.$registerBox.addClass('dn')
            _this.$otherWay.addClass('dn')
            _this.$loginBox.removeClass('dn');
        })
        this.$toOtherLogin.on('click', function () {
            _this.$loginBox.addClass('dn');
            _this.$registerBox.addClass('dn');
            _this.$otherWay.removeClass('dn');
        })
    }
}



