//分享
function PhoneShareTo(params) {
    layer.open({
        title: '分享链接',
        //area: ["100px", "270px"],
        shadeClose: true,
        style: 'width:200px;height:150px;',
        success: function () {
            $(".layui-layer-min").hide();
            $(".layui-layer-max").hide();
            $('#share-2').share({
                title: params.titles,
                sites: ['qq', 'weibo', 'wechat'],
                url: params.urls
            });
            $(".layui-layer-page .layui-layer-content").css("overflow", "visible");
            $("#share_content").val(params.urls);

            $("#share_content_btn").click(function () {
                var e = document.getElementById("share_content");
                e.select();
                document.execCommand("Copy");
            })
        },
        content: '<div class="popWrap" id="share_to_society" style="display:block;">' +
                    '<div class="popContainer">' +
                        '<div class="popBody">' +
                            '<div class="popCenter">' +
                                '<ul class="clearFloat shareAddr">' +
                                    '<li class="fl">' +
                                        '<ol>' +
                                            '<li class="row">' +
                                                '<div id="share-2"></div>' +
                                            '</li>' +
                                       ' </ol>' +
                                    '</li>' +
                                '</ul>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>'
    })
}