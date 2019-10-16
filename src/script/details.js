require(['config'], function () {
    require(['jquery', 'jqcookie'], function () {
        class zoom {
            constructor() {
                this.left_item = document.querySelector('.mod-preview')
                this.zoom = document.querySelector('.preview-pic');
                this.szoom = document.querySelector('.image-zoom-wrap')
                this.spic = document.querySelector('.image-zoom-wrap img');
                this.sf = document.querySelector('.image-zoom');
                this.bf = document.querySelector('.image-retina');
                this.bpic = document.querySelector('.image-retina img');

                this.minipic_item = $('.thumbnail-item')
            }
            init() {
                let _this = this
                $.ajax({
                    type: 'get',
                    url: 'http://10.31.155.18/IQIYIStore/php/jxdata.php',
                    async: true,
                    dataType: 'json'
                }).done(function (arrdata) {
                    var strhtml = ''
                    $.each(arrdata, function (index, value) {
                        if (value.sid == location.search.substring(5)) {
                            _this.spic.src = value.url
                            _this.bpic.src = value.url
                            var strhtml = ''
                            strhtml += `
                            <li><img src="${value.url}" alt=""></li>
                            <li><img src="${value.url1}" alt=""></li>
                            <li><img src="${value.url2}" alt=""></li>
                            <li><img src="${value.url3}" alt=""></li>
                            <li><img src="${value.url4}" alt=""></li>
                            `
                        }
                        _this.minipic_item.html(strhtml)
                    });
                }
                )
                this.zoomeffect()
            }

            zoomeffect() {
                let _this = this
                this.szoom.onmouseover = function () {
                    _this.sf.style.visibility = 'visible'
                    _this.bf.style.visibility = 'visible'
                    this.onmousemove = function (ev) {

                        var ev = ev || window.event;
                        var l = ev.clientX - _this.zoom.offsetLeft - _this.sf.offsetWidth / 2
                        var t = ev.clientY - _this.zoom.offsetTop - _this.sf.offsetHeight / 2
                        if (l < 0) {
                            l = 0;
                        } else if (l >= _this.spic.offsetWidth - _this.sf.offsetWidth) {
                            l = _this.spic.offsetWidth - _this.sf.offsetWidth - 2;
                        }

                        if (t < 0) {
                            t = 0;
                        } else if (t >= _this.spic.offsetHeight - _this.sf.offsetHeight) {
                            t = _this.spic.offsetHeight - _this.sf.offsetHeight - 2;
                        }
                        _this.bili = _this.bpic.offsetWidth / _this.spic.offsetWidth


                        _this.sf.style.left = l + 'px'
                        _this.sf.style.top = t + 'px'

                        _this.bpic.style.left = -_this.bili * l + 'px';
                        _this.bpic.style.top = -_this.bili * t + 'px';

                    }

                }
                this.szoom.onmouseout = function () {
                    _this.sf.style.visibility = 'hidden'
                    _this.bf.style.visibility = 'hidden'
                }

            }


        }
        new zoom().init();

        class toCart {
            constructor() {
                this.sid = location.search.substring(5)
                this.sidarr = []; //存放sid 
                this.numarr = []; //存放数量
                this.cartbtn = $('.detail-btn-cart')
                this.goodsnum = $('.mod-amount .amount-input')
            };
            init() {
                let _this = this
                console.log($.cookie('cookiesid'))
                if ($.cookie('cookiesid') && $.cookie('cookienum')) {
                    this.sidarr = $.cookie('cookiesid').split(',');
                    this.numarr = $.cookie('cookienum').split(',');
                }
                this.cartbtn.on('click', function () {
                    // alert('商品添加成功');
                    //当前取出的cookie里面存放sid的数组
                    if (_this.sidarr.indexOf(_this.sid) !== -1) { //第二次只需要数量累加
                        //获取当前sid对应的数量，取出数量，和当前的新的数量进行累加
                        //sidarr.indexOf(sid)//当前的sid在存入cookie数组的索引位置
                        let index = _this.sidarr.indexOf(_this.sid)
                        _this.numarr[index] = parseInt(_this.numarr[index]) + parseInt(_this.goodsnum.val());
                        $.cookie('cookienum', _this.numarr.toString(), { expires: 10 });

                        alert('第二次商品添加成功');

                    } else { //第一次加入购物车，创建商品列表
                        _this.sidarr.push(_this.sid);
                        console.log(_this.sidarr)

                        $.cookie('cookiesid', _this.sidarr.toString(), { expires: 10 });
                        _this.numarr.push(_this.goodsnum.val());
                        console.log(_this.numarr)

                        $.cookie('cookienum', _this.numarr.toString(), { expires: 10 });

                        alert('第一次商品添加成功');


                    }
                })
            }
        }
        new toCart().init()
    })
})