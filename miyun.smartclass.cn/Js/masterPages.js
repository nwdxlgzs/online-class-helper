/***********************/
/*******模板页的js******/
/***********************/
var PersonInfo;// 获取用户数据
var headSchoolID;
var hasClassingRoom = "";
if (userInfo && userInfo != null) {
    headSchoolID = userInfo[0].SchoolID;
};

$(function () {
    //安卓下载的二维码
    $(".QRhide_bottom .anzhuoqr").attr("src", AjaxUrls.PublicOperation.AndroidDownPath);

    if (strCookie && (strCookie != 0) && (userInfo[0].UserType != 0)) {
        secondNav();//二级菜单赋值
        $(".first_nav_img").show();
        $(".fheader  .personal_space").show();
    } else {
        $(".fheader  .personal_space").hide();
    };
    isLogin();//判断用户是否登陆          
    loginClick();//点击登陆          
    quitClick();//点击退出
    APPload();//App下载
    secNavSh();//头部个人空间下拉菜单

    quitBtn(); //退出按钮显示隐藏
    //头部进入后台
    $(".enter_backstage").click(function () {
        if (window !== top) {
            top.location.href = "/SystemSpace/Manage.aspx";
        } else {
            window.location.href = "/SystemSpace/Manage.aspx";
        };
    });

    //后台路径处进入后台
    $(".joinBackstates").click(function () {
        if (window !== top) {
            top.location.href = "/SystemSpace/Manage.aspx";
        } else {
            window.location.href = "/SystemSpace/Manage.aspx";
        };
    })
    //首页logo跳转；
    $(".company_logo a").click(function () {
        window !== top ? top.location.href = "/default.aspx" : window.location.href = "/default.aspx";
    })
    $(".company_logo2 a").click(function () {
        if (window !== top) {
            top.location.href = "/ChangPing/index.aspx";
        } else {
            window.location.href = "/ChangPing/index.aspx";
        };
    })

    $(".defaultPage a").click(function () {
        window !== top ? top.location.href = "/default.aspx" : window.location.href = "/default.aspx";
    })
    $(".defaultPage2 a").click(function () {
        if (window !== top) {
            top.location.href = "/ChangPing/index.aspx";
        } else {
            window.location.href = "/ChangPing/index.aspx";
        };
    })

    $(".livePage a").click(function () {
        if (window !== top) {
            top.location.href = "/UserSpace/livelist.aspx";
        } else {
            window.location.href = "/UserSpace/livelist.aspx";
        };
    })
    $(".videoPage a").click(function () {
        if (window !== top) {
            top.location.href = "/UserSpace/CourseList.aspx";
        } else {
            window.location.href = "/UserSpace/CourseList.aspx";
        };
    })
    $(".videoPage2 a").click(function () {
        if (window !== top) {
            top.location.href = "/ChangPing/Search.aspx";
        } else {
            window.location.href = "/ChangPing/Search.aspx";
        };
    })
    //面包屑个人空间
    $(".enterUserSpace").click(function () {
        $.ajax({
            url: AjaxUrls.PublicOperation.IsLogin,
            type: "post",
            success: function (data) {
                if (data.Success) {
                    data = parseInt(data.Value);
                } else {
                    Dialogue.Error(data.Message);
                    return;
                };
                if (data == -1) {
                    window.location.href = "/Login.aspx";
                } else if (data && data != null) {
                    window.location.href = "/UserSpace/UserSpace.aspx";
                } else if (data == 0) {
                    window.location.href = "/Default.aspx";
                };
            }
        })
    })

    
    //个人空间
    $("#self_space_wrap").click(function () {
        $.ajax({
            url: AjaxUrls.PublicOperation.IsLogin,
            type: "post",
            success: function (data) {
                if (data.Success) {
                    data = parseInt(data.Value);
                } else {
                    Dialogue.Error(data.Message);
                    return;
                };
                if (data == -1) {
                    window.location.href = "/Login.aspx";
                } else if (data && data != null) {
                    window.location.href = "/UserSpace/UserSpace.aspx";
                } else if (data == 0) {
                    window.location.href = "/Default.aspx";
                };
            }
        })
    })
    //
    $(".courseCenter a").click(function () {
        if (window !== top) {
            top.location.href = "/UserSpace/CourseCenter.aspx";
        } else {
            window.location.href = "/UserSpace/CourseCenter.aspx";
        };
    })
 
    //修改密码
    $(".self_nav_wrap .editPsw_item").click(function () {
        var canSubmit = true;
        Dialogue.Layer({
            title: "修改密码",
            area: ['550px', '280px'],
            btn: ['确定', '取消'],
            btnAlign: 'c',
            content: '<div id="pop_wrap"><div class="pop_input"><span class="attribute_name"><i class="rice"></i>原密码</span><input type="password" name="OldPassWord" class="rightContent password" /></div>'+
                     '<div class="pop_input"><span class="attribute_name"><i class="rice"></i>新密码</span><input type="password" name="NewPassword" class="rightContent passwordConfirm" /></div>'+
                     '<div class="pop_input"><span class="attribute_name"><i class="rice"></i>新密码确认</span><input type="password" name="RepeatPassword" class="rightContent passwordConfirm" /><i id="passwordWarningNew" class="rice password_attention hidee"></i></div></div>',
            success: function () {
                //$("#pop_wrap input[name='NewPassword']").keyup(function () {
                //    var val = $("#pop_wrap input[name='NewPassword']").val();
                //    //if ($.trim(val).length != 0) {
                //    if (val.length != 0) {
                //        $("#pop_wrap input[name='RepeatPassword']").removeAttr("disabled");
                //    };
                //}).focus(function () {
                //    var val = $("#pop_wrap input[name='RepeatPassword']").val();
                //    if (val.length != 0) {
                //        $("#pop_wrap input[name='RepeatPassword']").val("").attr("disabled", "disabled");
                //        $(this).val("");
                //    };
                //    $("#passwordWarningNew").hide();
                //})

                $("#pop_wrap input[name='RepeatPassword']").blur(function () {
                    var newPsw = $("#pop_wrap input[name='NewPassword']").val();
                    if (newPsw == $(this).val()) {
                        canSubmit = true;
                        $("#passwordWarningNew").hide();
                    } else {
                        $("#passwordWarningNew").html("输入不一致").show();
                        canSubmit = false;
                    };
                }).keyup(function () {
                    var newPsw = $("#pop_wrap input[name='NewPassword']").val();
                    if (newPsw == $(this).val()) {
                        $("#passwordWarningNew").hide();
                        canSubmit = true;
                    } else {
                        $("#passwordWarningNew").html("输入不一致").show();
                        canSubmit = false;
                    };
                })
            },
            yes: function () {
                if (canSubmit) {
                    Ajax.Post({
                        url: AjaxUrls.UserUrls.ChangePassWord,
                        data: { PassWord: $("input[name='OldPassWord']").val(), NewPassWord: $("input[name='NewPassword']").val() },
                        success: function (data) {
                            if (data.Success) {
                                Dialogue.Success("修改成功！");
                            } else {
                                Dialogue.Error(data.Message);
                                return;
                            };
                        }
                    })
                }
            }
        })
    })

    //修改头像
    //$(".self_nav_wrap .upload_img").click(function () {
    //    Dialogue.Layer({
    //        title: "修改密码",
    //        area: ['550px', '280px'],
    //        btn: ['确定', '取消'],
    //        btnAlign: 'c',
    //        content:'<div class="pop_input">'+
    //                '<span class="attribute_name" style="vertical-align: top;"><i class="rice"></i>录播封面</span>'+
    //                '<div class="picBox"></div>'+
    //                '</div>',
    //        success: function () {
    //            Ajax.Post({
    //                url: AjaxUrls.ImageUpload.GetSupportedExtensions,
    //                success: function (data) {
    //                    data = JSON.parse(data).join("|");
    //                    data = data.replace(/\./g, "");

    //                    Ajax.ajax({
    //                        url:
    //                    })
    //                    $("#pop_wrap .picBox").uploadImg({
    //                        "picNum": 1,
    //                        "width": 100,
    //                        "height": 100,
    //                        "name": "ImagePath",
    //                        "format": data,
    //                        "initialImages": imagesData
    //                    });
    //                }
    //            })
    //        },
    //        yes: function () {

    //        }
    //    })
    //})
    
});

//判断用户是否登陆
function isLogin() {
    if (strCookie != 0) {
        if (userInfo[0].ImageFileUri) {
            $("#user_images").attr("src", userInfo[0].ImageFileUri);//显示用户头像名称
        } else {
            $("#user_images").attr("src", '/images/broadcastlive_06.png');//显示用户头像名称
        };
        $("#user_name").html(userInfo[0].Name);
        $(".personal_img").show();
        $(".login_area").hide();
        $(".personal_info .enter_backstage").show();
    } else {
        $(".personal_img").hide();
        $(".login_area").show();
        $(".quit_area").hide();
        $(".personal_info .enter_backstage").hide();
    };
}

//导航hover字体变色
function navHover() {
    $(".middle_nav li").each(function () {
        $(this).hover(function () {
            $(this).css("color", "#6ec3ca");
        }).click(function () {
            // $(this).find(">a").addClass("choose_nav").parent().siblings().find(">a").removeClass("choose_nav");
            $(this).addClass("choose_nav").siblings().removeClass("choose_nav");
        });
    });
};
//头部手机App下载
function APPload() {
    var timer = null;
    $(".APP_wrap").hover(function () {
        clearTimeout(timer);
        $(".QRhide_bottom").show();
    }, function () {
        timer = setTimeout(function () {
            $(".QRhide_bottom").hide();
        }, 200);
    })
};
//退出按钮显示隐藏
function quitBtn() {
    var timer = null;
    $(".personal_img").hover(function () {
        clearTimeout(timer);
        $(".quit_area").show();
    }, function () {
        timer = setTimeout(function () {
            $(".quit_area").hide();
        }, 200);
    })
}
//头部个人空间下拉菜单
function secNavSh() {
    var timer = null;
    $(".personal_space").hover(function () {
        clearTimeout(timer);
        if ($(".second_nav a").length != 0) {
            $(".second_nav").show();
        } else {
            $(".second_nav").hide();
        };
        $(this).find("img").attr("src", "/images/broadcastlive_blue_03.png");
    }, function () {
        timer = setTimeout(function () {
            $(".second_nav").hide();
        }, 200);
        $(this).find("img").attr("src", "/images/broadcastlive_14.png");

    })
};
//页面高度计算
function middleContentHeight(h) {
    if (h) {
        h = h + 10;
    } else {
        h = 0;
    }

    var minHeight = $(window).height() - $(".publicFooter").height() - $(".publicHeader").height() - h - 1;
    var middleHeight = $(".middle_content_wrap").height();
    if (middleHeight - minHeight < 0) {
        $(".middle_content_wrap").css("minHeight", minHeight);

    };
}
//点击登陆
function loginClick() {
    $(".login_area").click(function () {
        $(this).find("a").attr("href", "/Login.aspx");
    })
}
//点击退出
function quitClick() {
    $(".quit_area .quit_item").click(function () {
        Ajax.Post({
            url: AjaxUrls.PublicOperation.Logout,
            success: function (data) {
                data = data.Value;
                window.top.location = data;
            }
        })
    })
}
//区分手机和PC
function browserRedirect(page, phonePage) {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        location.href = location.href.replace(page.toLowerCase(), phonePage.toLowerCase());
    }
}

/***********************/
/*******模板页的js到此结束******/
/***********************/
