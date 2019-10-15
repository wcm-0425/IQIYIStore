require(['config'], function () {
    require(['jquery', 'lazyload'], function () {

        // 主页轮播图渲染
        banner: (function () {
            $banner_item = $('.new-focus-list')
            $.ajax({
                type: 'get',
                url: 'http://10.31.155.18/IQIYIStore/php/bannerdata.php',
                async: true,
                dataType: 'json',
            }).done(function (arrdata) {
                let strhtml = ''
                $.each(arrdata, function (index, value) {
                    strhtml += `
                        <li class="new-focus-li"   display: block;">
                          <a target="_blank" style="background-image:url(${value.url});"></a>
                         </li> 
                        `
                });
                $banner_item.html(strhtml);
            })
        })();


        // 精选渲染
        jxrender: (function () {
            const $jx_item = $('.mod-new-model-content .tchoiceness-productList')
            $.ajax({
                type: 'get',
                url: 'http://10.31.155.18/IQIYIStore/php/jxdata.php',
                async: true,
                dataType: 'json',
            }).done(function (arrdata) {
                let strhtml = ''
                $.each(arrdata, function (index, value) {
                    if (index < 10) {
                        strhtml += `
                        <li>
                        <div class="tchoiceness-product">
                            <a class="tchoiceness-productPic" style="display:block !important;" target="_blank">
                                <img alt="jrjxPic"
                                    src="${value.url}"
                                    width="140" height="140">
                            </a>
                            <div class="tchoiceness-productInfo">
                                <p class="tchoiceness-productTitle"><a 
                                        style="display:block !important;" target="_blank">${value.title}</a></p>
                                <p class="tchoiceness-productSubTitle"><span
                                        class="tchoiceness-productStatus"><em>经典怀旧</em></span>${value.stitle}</p>
                                <p class="tchoiceness-productDesc">
                                    <span class="tchoiceness-productPrice">¥${value.price}</span>
                                    <span class="tchoiceness-productSale">已售 ${value.num}</span>
                                </p>
                            </div>
                        </div>
                    </li>
                        `}
                });
                $jx_item.html(strhtml);
            })
        })();
        // 特卖渲染
        tmrender: (function () {
            const $tm_item = $('.todaySale_list')
            $.ajax({
                type: 'get',
                url: 'http://10.31.155.18/IQIYIStore/php/tmdata.php',
                async: true,
                dataType: 'json',
            }).done(function (arrdata) {
                let strhtml = ''
                $.each(arrdata, function (index, value) {
                    strhtml += `<li class="shopActivity">
                        <div class="shopInfo">
                            <p class="shopTitle"><a>${value.title}</a></p>
                            <p class="shopPrice"><a>${value.stitle}</a></p>
                        </div>
                        <div class="shopImg">
                        <a ><img class="lazy" data-original="${value.url}" alt="${value.title}" ></a>
                        </div>
                    </li>`
                });
                $tm_item.html(strhtml);
                $(function () { //页面加载完成
                    $("img.lazy").lazyload({
                        effect: "fadeIn" //效果方式
                    });
                });
            })


        })();
        rmtjrender: (function () {
            const $rmtj_item = $('.hotRecommendList')
            $.ajax({
                type: 'get',
                url: 'http://10.31.155.18/IQIYIStore/php/rmtj.php',
                async: true,
                dataType: 'json',
            }).done(function (arrdata) {
                let strhtml = ''
                $.each(arrdata, function (index, value) {
                    strhtml += `<li target="_blank">
                    <div class="goodImg"><a href=""
                            target="_blank"><img
                                src="${value.url}"
                                alt="${value.title}" width="320" height="160" ></a>
                    </div>
                    <p class="goodTitle">${value.title}</p>
                    <p class="goodDescribe">${value.stitle}</p>
                </li>`
                });
                $rmtj_item.html(strhtml);
            })
        })();
        rxbdrender: (function () {
            const $rxbd_item = $('.hotSaleList')
            $.ajax({
                type: 'get',
                url: 'http://10.31.155.18/IQIYIStore/php/rxbd.php',
                async: true,
                dataType: 'json',
            }).done(function (arrdata) {
                let strhtml = ''
                $.each(arrdata, function (index, value) {
                    strhtml += `<li>

                    <div class="shopImg">
                        <a href="" target="_blank"><img
                                src="${value.url}"
                                alt="" width="90" height="90"></a>
                    </div>
                    <div class="shopInfo">
                        <div class="icon firstIcon"></div>
                        <p class="shopTitle"><a href="//mall.iqiyi.com/item/19rrobum68" target="_blank"
                                rseat="hotSale_title_1">${value.title}</a></p>
                        <p class="shopPriceoNum">
                            <span class="shopPrice">￥${value.price}</span>
                            <span class="joinNum">已售<em>${value.sales}</em></span>
                        </p>
                    </div>

                </li>`
                });
                $rxbd_item.html(strhtml);
            })
        })();


    })
})
