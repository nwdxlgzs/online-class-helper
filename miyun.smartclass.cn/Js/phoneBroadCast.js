/**
 * Created by hber on 2017/5/6.
 */

function adapt(designWidth, rem2px){
    var d = window.document.createElement('div');
    d.style.width = '1rem';
    d.style.display = "none";
    var head = window.document.getElementsByTagName('head')[0];
    head.appendChild(d);
    var defaultFontSize = parseFloat(window.getComputedStyle(d, null).getPropertyValue('width'));
    d.remove();
    document.documentElement.style.fontSize = window.innerWidth / designWidth * rem2px / defaultFontSize * 100 + '%';
    var st = document.createElement('style');
    var portrait = "@media screen and (min-width: "+window.innerWidth+"px) {html{font-size:"+ ((window.innerWidth/(designWidth/rem2px)/defaultFontSize)*100) +"%;}}";
    var landscape = "@media screen and (min-width: "+window.innerHeight+"px) {html{font-size:"+ ((window.innerHeight/(designWidth/rem2px)/defaultFontSize)*100) +"%;}}"
    st.innerHTML = portrait + landscape;
    head.appendChild(st);
    return defaultFontSize
};
var defaultFontSize = adapt(750, 100);


$(function () {
    $(".tabItem").each(function (index) {
        $(this).click(function () {
            $(this).addClass("focus_border").siblings().removeClass("focus_border");
            $(".classlists").eq(index).show().siblings(".classlists").hide();
        })
    })
})
//获取地址栏的属性
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return window.decodeURIComponent(r[2])
    return null;
}
//把秒变成十分秒
function changeTime(val) {
    var hour = Math.floor(val / 3600);//小时
    var remainder = val % 3600;
    var minite = Math.floor(remainder / 60);//分钟
    var second = remainder % 60;//秒
    if (hour < 10) {
        hour = "0" + hour;
    };
    if (minite < 10) {
        minite = "0" + minite;
    };
    if (second < 10) {
        second = "0" + second;
    };
    return (hour + ":" + minite + ":" + second)
}
function nofindPic(imgsrc) {
    var img = event.srcElement;
    //img.src = "/images/videoClassImg/videoCourse_01.png";
    img.src = imgsrc;
    img.onerror = null;
}
