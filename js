$(".userLogin .username").val("2333"); $(".userLogin .password").val("123456");var btn_a = document.querySelectorAll('span[type]')[0];if (btn_a != null || btn_a != undefined) {  var btn_b = document.querySelectorAll('span[type]')[1];btn_a.click();};
//javascript:

//手机登录
//账户=""
//密码=""
//javascript:$(".userLogin .username").val(账户); $(".userLogin .password").val(密码);var btn_a = document.querySelectorAll('span[type]')[0];if (btn_a != null || btn_a != undefined) {  var btn_b = document.querySelectorAll('span[type]')[1];btn_a.click();};

//手机登录
//账户=""
//密码=""
//javascript:

//javascript:var spaninnerHTML;spaninnerHTML = document.getElementsByTagName("span");console.log(spaninnerHTML)

var spaninnerHTML = document.getElementsByTagName("span");
for (var i = 0; i < spaninnerHTML.length; i++) {
  if (spaninnerHTML[i].innerHTML=="确认") {
    console.log(spaninnerHTML[i])
  }
}


//javascript:var spaninnerHTML = document.getElementsByTagName("span");for (var i = 0; i < spaninnerHTML.length; i++) {  if (spaninnerHTML[i].innerHTML=="确认") {console.log(spaninnerHTML[i]) }}

//javascript:var spaninnerHTML = document.getElementsByTagName("H3");for (var i = 0; i < spaninnerHTML.length; i++) {  if (spaninnerHTML[i].innerHTML=="用户登陆") {console.log(spaninnerHTML[i]) }}


