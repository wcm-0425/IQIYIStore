require(['config'], function () {
    require(['jquery'], function () {

        return {

            // 特卖渲染
            tmrender: (function () {
                const $tm_item = $('.todaySale_list')
                $.ajax({
                    type: 'get',
                    url: 'http://10.31.155.18/IQIYI/php/tmdata.php',
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
                        <a ><img src="${value.url}" alt="${value.title}" ></a>
                        </div>
                    </li>`
                    });
                    $tm_item.html(strhtml);
                })
            })(),

            // 精选渲染
            jxrender: (function () {
                const $jx_item = $('.mod-new-model-content .tchoiceness-productList')
                $.ajax({
                    type: 'get',
                    url: 'http://10.31.155.18/IQIYI/php/jxdata.php',
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
            })(),
            // 主页轮播图渲染
            banner: (function () {
                $banner_item = $('.new-focus-list')
                $.ajax({
                    type: 'get',
                    url: 'http://10.31.155.18/IQIYI/php/bannerdata.php',
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
            })()


        }

    })
})
