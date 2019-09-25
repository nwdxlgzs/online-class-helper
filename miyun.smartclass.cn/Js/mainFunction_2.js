var tabConfig = [{
    "backstagePermission": [//最高管理员
{ "PermissionID": 20, "pageName": "ManageUser", "showWords": "用户管理", "imageSrc": "/images/active/activeClassClose_good.png", "bigImgSrc": "/images/backstage/manage_user.png" },
{ "PermissionID": 18, "pageName": "ManageRole", "showWords": "角色管理", "imageSrc": "/images/active/activeClassClose_good.png", "bigImgSrc": "/images/backstage/manage_role.png" },
{ "PermissionID": 48, "pageName": "ManageSchool", "showWords": "学校管理", "imageSrc": "/images/active/activeClassClose_good.png", "bigImgSrc": "/images/backstage/manage_school.png" },
{ "PermissionID": 40, "pageName": "ManageStage", "showWords": "学段管理", "imageSrc": "/images/active/activeClassClose_good.png", "bigImgSrc": "/images/backstage/manage_phase.png" },
{ "PermissionID": 104, "pageName": "ManageSchoolCourse", "showWords": "课程管理", "imageSrc": "/images/backstage/tab_course.png", "bigImgSrc": "/images/backstage/manage_course.png" },
{ "PermissionID": 32, "pageName": "ManageSubject", "showWords": "学科管理", "imageSrc": "/images/active/activeClassClose_good.png", "bigImgSrc": "/images/backstage/manage_subject.png" },
{ "PermissionID": 36, "pageName": "ManageTextbook", "showWords": "教材管理", "imageSrc": "/images/active/activeClassClose_good.png", "bigImgSrc": "/images/backstage/manage_material.png" },
{ "PermissionID": 200, "pageName": "ManageExamCategory", "showWords": "考试类别", "imageSrc": "/images/backstage/tab_exam_type.png", "bigImgSrc": "/images/selfSpace/selfSpaceIcon10_testSee.png" },
{ "PermissionID": 240, "pageName": "AutoRules", "showWords": "自动策略", "imageSrc": "/images/active/activeClassClose_good.png", "bigImgSrc": "/images/backstage/manage_autorules.png" },
{ "PermissionID": 16, "pageName": "QueryLog", "showWords": "系统日志", "imageSrc": "/images/backstage/tab_querylog.png", "bigImgSrc": "/images/backstage/manage_query.png" },
//{ "PermissionID": 88, "pageName": "ManageSchoolServer", "showWords": "服务器管理", "imageSrc": "/images/backstage/tab_serve.png", "bigImgSrc": "/images/backstage/manage_serve.png" },
//{ "PermissionID": 96, "pageName": "ManageSchoolStorage", "showWords": "存储管理", "imageSrc": "/images/backstage/tab_storage.png", "bigImgSrc": "/images/backstage/manage_storage.png" },
{ "PermissionID": 152, "pageName": "ManageSchoolDeliveryDevice", "showWords": "专递设备管理", "imageSrc": "/images/backstage/tab_delivery_device.png", "bigImgSrc": "/images/backstage/manage_delivery_device.png" },
{ "PermissionID": 168, "pageName": "ManageArticle", "showWords": "公告管理", "imageSrc": "/images/backstage/tab_delivery_device.png", "bigImgSrc": "/images/backstage/manage_news.png" },
{ "PermissionID": 216, "pageName": "ManageSensitiveWord", "showWords": "敏感词管理", "imageSrc": "/images/backstage/tab_serve.png", "bigImgSrc": "/images/backstage/sensitive_img.png" }
    ],
    //学校管理员和最高管理员都有的模块
    "bothHave": [
{ "PermissionID": 16, "pageName": "QueryLog", "showWords": "系统日志", "imageSrc": "/images/backstage/tab_querylog.png", "bigImgSrc": "/images/backstage/manage_query.png" },
//{ "PermissionID": 88, "pageName": "ManageSchoolServer", "showWords": "服务器管理", "imageSrc": "/images/backstage/tab_serve.png", "bigImgSrc": "/images/backstage/manage_serve.png" },
//{ "PermissionID": 96, "pageName": "ManageSchoolStorage", "showWords": "存储管理", "imageSrc": "/images/backstage/tab_storage.png", "bigImgSrc": "/images/backstage/manage_storage.png" },
{ "PermissionID": 152, "pageName": "ManageSchoolDeliveryDevice", "showWords": "专递设备管理", "imageSrc": "/images/backstage/tab_delivery_device.png", "bigImgSrc": "/images/backstage/manage_delivery_device.png" },
{ "PermissionID": 168, "pageName": "ManageArticle", "showWords": "公告管理", "imageSrc": "/images/backstage/tab_delivery_device.png", "bigImgSrc": "/images/backstage/manage_news.png" }
    ],
    //学校管理员
    "schoolPermission": [
{ "PermissionID": 96, "pageName": "ManageSchoolStorage", "showWords": "存储管理", "imageSrc": "/images/backstage/tab_storage.png", "bigImgSrc": "/images/backstage/manage_storage.png" },
{ "PermissionID": 18, "pageName": "ManageRole", "showWords": "角色管理", "imageSrc": "/images/active/activeClassClose_good.png", "bigImgSrc": "/images/backstage/manage_role.png" },
{ "PermissionID": 64, "pageName": "ManageSchoolOrganization", "showWords": "组织机构管理", "imageSrc": "/images/backstage/tab_organition.png", "bigImgSrc": "/images/backstage/manage_organizition.png" },
{ "PermissionID": 48, "pageName": "ManageSchoolArea", "showWords": "校区管理", "imageSrc": "/images/backstage/tab_area.png", "bigImgSrc": "/images/backstage/manage_school.png" },
{ "PermissionID": 80, "pageName": "ManageSchoolClass", "showWords": "班级管理", "imageSrc": "/images/backstage/tab_class.png", "bigImgSrc": "/images/backstage/manage_class.png" },
{ "PermissionID": 72, "pageName": "ManageSchoolClassTime", "showWords": "节次管理", "imageSrc": "/images/backstage/tab_classTime.png", "bigImgSrc": "/images/backstage/manage_classtime.png" },
{ "PermissionID": 200, "pageName": "ManageExamCategory", "showWords": "考试类别", "imageSrc": "/images/backstage/tab_exam_type.png", "bigImgSrc": "/images/selfSpace/selfSpaceIcon10_testSee.png" },
{ "PermissionID": 104, "pageName": "ManageSchoolCourse", "showWords": "课程管理", "imageSrc": "/images/backstage/tab_course.png", "bigImgSrc": "/images/backstage/manage_course.png" },
{ "PermissionID": 128, "pageName": "ManageSchoolClassRoom", "showWords": "教室管理", "imageSrc": "/images/backstage/tab_classroom.png", "bigImgSrc": "/images/backstage/manage_classroom.png" },
{ "PermissionID": 112, "pageName": "ManageSchoolStudent", "showWords": "学生管理", "imageSrc": "/images/backstage/tab_students.png", "bigImgSrc": "/images/backstage/manage_students.png" },
{ "PermissionID": 120, "pageName": "ManageSchoolTeacher", "showWords": "教师管理", "imageSrc": "/images/backstage/tab_teacher.png", "bigImgSrc": "/images/backstage/manage_role.png" },
{ "PermissionID": 176, "pageName": "ManageScoreItem", "showWords": "评分项管理", "imageSrc": "/images/backstage/tab_ManageScoreItem.png", "bigImgSrc": "/images/backstage/ManageScoreItem.png" },
{ "PermissionID": 168, "pageName": "ManageArticle", "showWords": "公告管理", "imageSrc": "/images/backstage/tab_delivery_device.png", "bigImgSrc": "/images/backstage/manage_news.png" },
{ "PermissionID": 72, "pageName": "ManageSchoolTeachingCycle", "showWords": "学年学期", "imageSrc": "/images/backstage/tab_semester.png", "bigImgSrc": "/images/backstage/manage_sesterm.png" },
{ "PermissionID": 152, "pageName": "ManageSchoolDeliveryDevice", "showWords": "专递设备管理", "imageSrc": "/images/backstage/tab_delivery_device.png", "bigImgSrc": "/images/backstage/manage_delivery_device.png" },
{ "PermissionID": 89, "pageName": "ManageSchoolDevice", "showWords": "设备管理", "imageSrc": "/images/backstage/tab_device.png", "bigImgSrc": "/images/backstage/manageDevice.png" },
{ "PermissionID": 244, "pageName": "SystemStatistics/WatchRanking", "showWords": "平台数据统计", "imageSrc": "/images/backstage/tab_statestics.png", "bigImgSrc": "/images/backstage/manage_statestics.png" },
{ "PermissionID": 216, "pageName": "ManageSensitiveWord", "showWords": "敏感词管理", "imageSrc": "/images/backstage/tab_serve.png", "bigImgSrc": "/images/backstage/sensitive_img.png" }
    ],
    //个人中心模块
    "userSpacePermission": [
{
    "PermissionID": 132,
    "tree": [{ "PermissionID": 132, "pageName": "/PlayPages/Classroom", "showWords": "在线巡视", "imageSrc": "/images/backstage/tab_area.png", "bigImgSrc": "/images/selfSpace/selfSpaceIcon4_onlineSee.png" }],
    "list": [{ "PermissionID": 132, "pageName": "/UserSpace/ClassroomList", "showWords": "录播管理", "imageSrc": "/images/backstage/tab_area.png", "bigImgSrc": "/images/selfSpace/selfSpaceIcon1_videoCtrl.png" }]
},
{ "PermissionID": 136, "pageName": "/UserSpace/ScheduleList", "showWords": "录播计划", "imageSrc": "/images/backstage/tab_area.png", "bigImgSrc": "/images/selfSpace/record_plan.png" },
{ "PermissionID": 160, "pageName": "/UserSpace/DeliveryClassList", "showWords": "专递课堂", "imageSrc": "/images/backstage/tab_area.png", "bigImgSrc": "/images/selfSpace/selfSpaceIcon6_internetClass.png" },
{ "PermissionID": 138, "pageName": "/UserSpace/ClassAttendanceList", "showWords": "学情分析", "imageSrc": "/images/backstage/tab_area.png", "bigImgSrc": "/images/selfSpace/selfSpaceAnalyze.png" },
{ "PermissionID": 200, "pageName": "/UserSpace/Exam", "showWords": "考试管理", "imageSrc": "/images/backstage/tab_area.png", "bigImgSrc": "/images/selfSpace/selfSpaceIcon10_testSee.png" },
{
    "PermissionID": 144,
    "tree": [{ "PermissionID": 144, "pageName": "/UserSpace/ResourceList", "showWords": "资源管理", "imageSrc": "/images/backstage/tab_area.png", "bigImgSrc": "/images/selfSpace/selfSpaceIcon3_resourceCtrl.png" }],
    "list": [{ "PermissionID": 144, "pageName": "/UserSpace/RecycleBin", "showWords": "回收站", "imageSrc": "/images/backstage/tab_area.png", "bigImgSrc": "/images/selfSpace/selfSpaceIcon11_recycle.png" }]
}
    ]

}];


//头部二级菜单
var EidtDoc = "";//文档管理权限
function secondNav(roomID) {
    Ajax.ajax({
        url: AjaxUrls.OperationPermissionUrls.UserSpacePageList
    }).done(function (data) {
        var html = "", arr = [];
        for (var i = 0; i < data.PermissionList.length; i++) {
            if (data.PermissionList[i].Value) {
                arr.push(data.PermissionList[i].PermissionID)//存放获取到的value值为true的项
            };
            if (data.PermissionList[i].PermissionID == 21) {
                if (data.PermissionList[i].Value) {
                    $(".editPsw_item").show();
                } else {
                    $(".editPsw_item").hide();
                }
            }
            if (data.PermissionList[i].PermissionID == 184) {
                data.PermissionList[i].Value == true ? EditDoc = true : EidtDoc = false;
            }
        };
        for (var j = 0; j < tabConfig[0].userSpacePermission.length; j++) {
            var row = tabConfig[0].userSpacePermission[j];
            if ($.inArray(row.PermissionID, arr) == -1) {
                continue;
            };
            if (row.PermissionID == 132) {
                html += '<a href="' + row.tree[0].pageName + '.aspx?" class="sec_nav_child">' + row.tree[0].showWords + '</a>';
                html += '<a href="' + row.list[0].pageName + '.aspx?" class="sec_nav_child ">' + row.list[0].showWords + '</a>';
            } else if (row.PermissionID == 144) {
                html += '<a href="' + row.tree[0].pageName + '.aspx?" class="sec_nav_child">' + row.tree[0].showWords + '</a>';
                html += '<a href="' + row.list[0].pageName + '.aspx?" class="sec_nav_child ">' + row.list[0].showWords + '</a>';
            } else {
                html += '<a href="' + row.pageName + '.aspx?" class="sec_nav_child ">' + row.showWords + '</a>';
            };
        };
        //for (var m = 0; m < tabConfig[0].userSpace.length; m++) {
        //    html += '<a href="' + tabConfig[0].userSpace[m].pageName + '.aspx?" class="sec_nav_child ">' + tabConfig[0].userSpace[m].showWords + '</a>';
        //};
        if ($.trim(html).length != 0) {
            $(".second_nav").empty().append(html);
        } else {
            $(".second_nav").hide();
        };

        $(".sec_nav_child").each(function () {
            $(this).hover(function () {
                $(this).addClass("choose_secNav").siblings().removeClass("choose_secNav");
            })
        })
    })
}

//个人中心 页面加载图标
function addUserSpace() {
    Ajax.ajax({
        url: AjaxUrls.OperationPermissionUrls.UserSpacePageList
    }).done(function (data) {
        var html = "", arr = [];
        for (var i = 0; i < data.PermissionList.length; i++) {
            if (data.PermissionList[i].Value) {
                arr.push(data.PermissionList[i].PermissionID)
            };
        };

        for (var j = 0; j < tabConfig[0].userSpacePermission.length; j++) {
            var row = tabConfig[0].userSpacePermission[j];
            if ($.inArray(row.PermissionID, arr) == -1) {
                continue;
            };
            if (row.PermissionID == 132) {
                html += '   <li class="selfSpaceMenu">' +
                       '<a href="' + row.tree[0].pageName + '.aspx?" class="sSpaceMenuIcon">' +
                           '<img src=' + row.tree[0].bigImgSrc + ' alt=' + row.tree[0].showWords + '>' +
                       '</a>' +
                       '<a href="' + row.tree[0].pageName + '.aspx?" class="sSpaceMenuTxt">' + row.tree[0].showWords + '</a>' +
                   '</li>';
                html += '   <li class="selfSpaceMenu">' +
                       '<a href="' + row.list[0].pageName + '.aspx" class="sSpaceMenuIcon">' +
                           '<img src=' + row.list[0].bigImgSrc + ' alt=' + row.list[0].showWords + '>' +
                       '</a>' +
                       '<a href="' + row.list[0].pageName + '.aspx" class="sSpaceMenuTxt">' + row.list[0].showWords + '</a>' +
                   '</li>';
            } else if (row.PermissionID == 144) {
                html += '   <li class="selfSpaceMenu">' +
                  '<a href="' + row.tree[0].pageName + '.aspx?" class="sSpaceMenuIcon">' +
                      '<img src=' + row.tree[0].bigImgSrc + ' alt=' + row.tree[0].showWords + '>' +
                  '</a>' +
                  '<a href="' + row.tree[0].pageName + '.aspx?" class="sSpaceMenuTxt">' + row.tree[0].showWords + '</a>' +
              '</li>';
                html += '   <li class="selfSpaceMenu">' +
                       '<a href="' + row.list[0].pageName + '.aspx" class="sSpaceMenuIcon">' +
                           '<img src=' + row.list[0].bigImgSrc + ' alt=' + row.list[0].showWords + '>' +
                       '</a>' +
                       '<a href="' + row.list[0].pageName + '.aspx" class="sSpaceMenuTxt">' + row.list[0].showWords + '</a>' +
                   '</li>';
            } else {
                html += '   <li class="selfSpaceMenu">' +
                       '<a href="' + row.pageName + '.aspx" class="sSpaceMenuIcon">' +
                           '<img src=' + row.bigImgSrc + ' alt=' + row.showWords + '>' +
                       '</a>' +
                       '<a href="' + row.pageName + '.aspx" class="sSpaceMenuTxt">' + row.showWords + '</a>' +
                   '</li>';
            };
        };
        $(".selfSpaceBody").append(html);
    })
};
//后台管理页面加载图标
function addTabContent(params) {
    Ajax.ajax({
        url: AjaxUrls.OperationPermissionUrls.SystemSpacePageList
    }).done(function (data) {
        var PersonInfo;
        var params01;
        if (params) {//区分管理员和教师的true和false
            params01 = tabConfig[0].backstagePermission;
        } else {
            params01 = tabConfig[0].schoolPermission;
        };
        PersonInfo = data.PermissionList;

        //PersonInfo = JSON.parse(data).PermissionList;
        var html = "", arr = [];
        for (var i = 0; i < PersonInfo.length; i++) {
            if (PersonInfo[i].Value) {
                arr.push(PersonInfo[i].PermissionID)
            };
        };
        for (var i = 0; i < params01.length; i++) {
            if ($.inArray(params01[i].PermissionID, arr) == -1) {
                continue;
            };
            if (params01[i].PermissionID == 168) {
                html += '<li class="selfSpaceMenu">' +
                           '<a href="/SystemSpace/' + params01[i].pageName + '.aspx" class="sSpaceMenuIcon">' +
                               '<img src=' + params01[i].bigImgSrc + ' alt=' + params01[i].showWords + '>' +
                           '</a>' +
                           '<a href="/SystemSpace/' + params01[i].pageName + '.aspx" class="sSpaceMenuTxt">' + params01[i].showWords + '</a>' +
                       '</li>';
                html += '<li class="selfSpaceMenu">' +
                           '<a href="/SystemSpace/ManageBannerSetting.aspx" class="sSpaceMenuIcon">' +
                               '<img src=/Images/backstage/bannersetting.png />' +
                           '</a>' +
                           '<a href="/SystemSpace/ManageBannerSetting.aspx" class="sSpaceMenuTxt">首页设置</a>' +
                       '</li>'
            } else {
                html += '   <li class="selfSpaceMenu">' +
                       '<a href="/SystemSpace/' + params01[i].pageName + '.aspx" class="sSpaceMenuIcon">' +
                           '<img src=' + params01[i].bigImgSrc + ' alt=' + params01[i].showWords + '>' +
                       '</a>' +
                       '<a href="/SystemSpace/' + params01[i].pageName + '.aspx" class="sSpaceMenuTxt">' + params01[i].showWords + '</a>' +
                   '</li>';
            };
        };
        //msplayer插件下载链接
        html += '<li class="selfSpaceMenu" >' +
                        '<a href="/MSPlayer.ocx" class="sSpaceMenuIcon">' +
                            '<img src="/images/backstage/msplayer_download.png">' +
                        '</a>' +
                        '<a href="/MSPlayer.ocx"  class="sSpaceMenuTxt">专递插件下载</a>' +
                    '</li>';
        if (params) {
            html += '<li class="selfSpaceMenu" >' +
                         '<a href="/SystemSpace/ImportData.aspx" class="sSpaceMenuIcon">' +
                             '<img src="/images/backstage/import_data.png">' +
                         '</a>' +
                         '<a href="/SystemSpace/ImportData.aspx"  class="sSpaceMenuTxt">数据导入</a>' +
                     '</li>';
            html += '<li class="selfSpaceMenu set_gray" >' +
                      '<a href="javascript:;" class="sSpaceMenuIcon">' +
                          '<img src="/images/backstage/set_gray.png">' +
                      '</a>' +
                      '<a href="javascript:;"  class="sSpaceMenuTxt">一键置灰</a>' +
                  '</li>';
        };
        $(".selfSpaceBody").append(html);
    })
}

//展示置灰状态
function setGray() {
    Ajax.ajax({
        url: AjaxUrls.PublicOperation.GetGreyState
    }).done(function (data) {
        if (data) {
            $("#gray_css").attr("href", "/css/gray.css");
            $("#gray_css_IE").attr("href", "/css/grayIE.css");
            $(".set_gray").attr("state", false);
        } else {
            $("#gray_css").attr("href", "");
            $("#gray_css_IE").attr("href", "");
            $(".set_gray").attr("state", true);
        };
    })
}

//schoolData页面的侧边tab条内容
function showTab() {
    Ajax.ajax({
        url: AjaxUrls.OperationPermissionUrls.SystemSpacePageList,
        async: false
    }).done(function (data) {
        var PersonInfo = data.PermissionList;
        var html = "", arr = [];
        for (var i = 0; i < PersonInfo.length; i++) {
            if (PersonInfo[i].Value) {
                arr.push(PersonInfo[i].PermissionID)
            };
        };
        for (var i = 0; i < tabConfig[0].schoolPermission.length; i++) {
            if ($.inArray(tabConfig[0].schoolPermission[i].PermissionID, arr) == -1) {
                continue;
            };
            html += '<li class="school_data" pageName=' + tabConfig[0].schoolPermission[i].pageName + '>' +
                    '<span class="textcontent  ">' + tabConfig[0].schoolPermission[i].showWords + '</span>' +
                    '<img src=' + tabConfig[0].schoolPermission[i].imageSrc + ' />' +
            '</li>';
        };
        $(".tab_lists").append(html);
        $(".textcontent").eq(0).addClass("choose");
    })
}

//检查数组中的某一项
Array.prototype.All = function (predicate) {
    for (var i = 0; i < this.length; i++) {
        if (!predicate(this[i], i)) {
            return false;
        }
    }
    return true;
};

//ajax请求
var Ajax = (function () {
    var g_canSend = true;

    return {
        ajax: function (obj) {
            var deferred = $.Deferred();
            //notloadingImg：是否需要loading图
            if (!obj.notloadingImg) {
                var loadPop = layer.load(1);
            };

            $.ajax({
                url: obj.url,
                data: obj.data || {},
                type: obj.type || "post",
                async: obj.async
            })
            .success(function (data) {
                loadPop ? layer.close(loadPop) : "";
                typeof data == "string" && (data = JSON.parse(data));
                if (data.Success) {
                    deferred.resolve(data.Value);
                } else {
                    deferred.reject(data.Message);
                };
            })
             .error(function (err) {
                 layer.close(loadPop);
                 deferred.reject("请求错误，请重试");
             })

            return deferred;
        },
        /*
        * 无限制发送请求
        */
        Post: function (data) {
            $.ajax({
                url: data.url,
                data: data.data,
                type: "post",
                async: data.async,
                success: data.success,
                error: function () {
                    Dialogue.Error("请求失败");
                }
            });
        },

        /*
        * 等待上次请求返回后才能再次发送请求（一般写在弹窗出现的yes操作请求里）
        */
        PostWait: function (data) {
            if (!g_canSend) {
                return;
            }

            g_canSend = false;

            try {
                $.ajax({
                    url: data.url,
                    data: data.data,
                    async: data.async,
                    type: "post",
                    success: function (Datar) {
                        g_canSend = true;
                        data.success && data.success(Datar);
                    },
                    error: function () {
                        g_canSend = true;
                        Dialogue.Error("请求失败");
                    }
                });
            } catch (ex) {
                g_canSend = true;

                throw ex;
            }
        }
    };
})();


/*
   * select下拉选项菜单
   *
   * Parameters:{data:传入的数据，placeholder:占位字，allowClear:是否允许清空}
   *
   * 注意: data的数据结构必须要有id和text（需要展示的内容）属性.
   */
var Select2 = (function () {
    return {
        SelectPicker: function (data) {
            data.obj.select2({
                data: data.data,
                placeholder: (data.placeholder || '请选择'),
                allowClear: data.allowClear == false ? data.allowClear : true
            });
        }
    }
})();


var SelectPlugin = {
    //select2的单选
    CreatSelect2Single: function (ele, params) {
        if (!ele) return;

        if (typeof ele == "string")
            ele = $("#" + ele);

        var def = {
            placeholder: '请选择',
            allowClear: true
        }
        ele.select2($.extend(def, params))
    },
    //select2的多选
    CreatSelect2Multiple: function (ele, params) {
        if (!ele) return;

        if (typeof ele == "string")
            ele = $("#" + ele);

        var def = {
            multiple: true,
            placeholder: '请选择',
            allowClear: true
        }
        ele.select2($.extend(def, params))
    }
}



//弹窗函数
var Dialogue = (function () {
    var g_tipTimeout = 4000;
    var tipsArr = ["创建成功", "编辑成功", "创建失败", "编辑失败", "设置成功", "设置失败", "删除成功", "删除失败", "停止成功", "停止失败", "开启成功", "开启失败"];
    return {
        //提示语
        Msg: function (message, timeOut) {
            layer.msg(message, {
                zIndex: 1100000,
                time: (timeOut || g_tipTimeout)
            });
        },

        Error: function (message, timeOut) {
            var tips;
            if (typeof message == "string") {
                tips = message;
            } else {
                tips = tipsArr[message];
            };
            layer.msg(tips, {
                icon: 2,
                time: (timeOut || g_tipTimeout)
            });
        },

        Success: function (message, timeOut) {
            var tips;
            if (typeof message == "string") {
                tips = message;
            } else {
                tips = tipsArr[message];
            };
            layer.msg(tips, {
                icon: 1,
                time: (timeOut || g_tipTimeout)
            });
        },

        //弹窗不能最大最小化
        Layer: function (data) {
            layer.open({
                type: data.type,
                title: data.title,
                area: data.area,
                shade: data.shade,
                anim: data.anim,
                btn: data.btn,
                zIndex: 1100000,
                btnAlign: data.btnAlign,
                content: data.content,
                success: data.success,
                yes: data.yes,
                btn2: data.btn2,
                end: data.end,
                cancel: data.cancel,
                end: function () {
                    if (typeof (nowPageNumber) != "undefined") {
                        Query.setHash({
                            page: nowPageNumber
                        })
                    };
                }
            })
        },
        /*弹窗可以最大化最小化 
        */
        LayerFullScreen: function (data) {
            layer.open({
                type: 1,
                title: data.title,
                area: data.area,
                btn: data.btn,
                zIndex: 1000,
                // maxmin: true,（最大最小禁用了，因为最大化后用户的界面展示要求不同）
                btnAlign: data.btnAlign,
                content: data.content,
                success: data.success,
                yes: data.yes,
                btn2: data.btn2,
                end: data.end,
                cancel: data.cancel,
                end: function () {
                    if (typeof (nowPageNumber) != "undefined") { //设置当前页面的hash值（这个弹出层插件会把哈希值干掉）
                        Query.setHash({
                            page: nowPageNumber
                        })
                    };
                }
            })
        }
    };
})();

//easyui 的combogride插件（下拉select列表）
var Combogride = {
    CreatCombogride: function (ele, params, onLoadSuccess) {//  如需使用onLoadSuccess函数不要直接写在params里但如果不需要加载操作按钮时 可把onLoadSuccess函数写在params参数里
        if (!ele) return;

        if (typeof ele == "string")
            ele = $("#" + ele);

        var def = {
            panelWidth: 420,
            rownumbers: true,     //序号
            striped: true,        //设置为 true，则把行条纹化
            checkOnSelect: false,
            selectOnCheck: false,
            singleSelect: true,
            pagesize: 5,
            pageList: [5, 10, 20],
            pagination: true,           //是否分页
            collapsible: true,         //是否可折叠的
            fit: true,                  //自动大小
            //queryParams:{
            //   // "page.PageSize": function () {
            //        PageSize: function () {
            //            return ele.combogrid('grid').datagrid('getPager').pagination("options").pageSize;
            //    },
            //    //"page.PageNumber": function () {
            //       PageNumber: function () {
            //        return ele.combogrid('grid').datagrid('getPager').pagination("options").pageNumber;
            //    }
            //},
            keyHandler: {
                up: function () {               //【向上键】
                    //取得选中行
                    var selected = ele.combogrid('grid').datagrid('getSelected');
                    if (selected) {
                        //取得选中行的rowIndex
                        var index = ele.combogrid('grid').datagrid('getRowIndex', selected);
                        //向上移动到第一行为止
                        if (index > 0) {
                            ele.combogrid('grid').datagrid('selectRow', index - 1);
                        }
                    } else {
                        var rows = ele.combogrid('grid').datagrid('getRows');
                        ele.combogrid('grid').datagrid('selectRow', rows.length - 1);
                    }
                },
                down: function () {             //【向下键】
                    //取得选中行
                    var selected = ele.combogrid('grid').datagrid('getSelected');
                    if (selected) {
                        //取得选中行的rowIndex
                        var index = ele.combogrid('grid').datagrid('getRowIndex', selected);
                        //向下移动到当页最后一行为止
                        if (index < ele.combogrid('grid').datagrid('getData').rows.length - 1) {
                            ele.combogrid('grid').datagrid('selectRow', index + 1);
                        }
                    } else {
                        ele.combogrid('grid').datagrid('selectRow', 0);
                    }
                },
                query: function (keyword) {     //【动态搜索】处理
                    //设置查询参数
                    var queryParams = ele.combogrid("grid").datagrid('options').queryParams;
                    queryParams.keyword = keyword;
                    ele.combogrid("grid").datagrid('options').queryParams = queryParams;
                    //重新加载
                    ele.combogrid("grid").datagrid("reload");

                    ele.combogrid("setValue", keyword);
                }
            }
        };
        ele.combogrid($.extend(def, params))
    }
}

//富应用编辑面板     所有ele都是id名称，不加"#"
var EditorPanel = {

    isFocus: function (ele, e) {         //编辑器是否获得焦点
        // alert(UE.getEditor(ele).isFocus());
        UE.dom.domUtils.preventDefault(e)
    },
    setblur: function (ele, e) {         //编辑器失去焦点
        UE.getEditor(ele).blur();
        UE.dom.domUtils.preventDefault(e)
    },
    insertHtml: function (ele) {        //插入给定的内容
        var value = prompt('插入html代码', '');
        UE.getEditor(ele).execCommand('insertHtml', value)
    },
    createEditor: function (ele) {
        this.enableBtn();
        UE.getEditor(ele);
    },
    getAllHtml: function (ele) {        //获得整个html的内容
        return UE.getEditor(ele).getAllHtml()
    },
    getContent: function (ele) {       //获得内容
        var arr = [];
        arr.push(UE.getEditor(ele).getContent());
        return arr.join("\n")
    },
    getPlainTxt: function (ele) {       //获得带格式的纯文本
        var arr = [];
        arr.push(UE.getEditor(ele).getPlainTxt());
        return arr.join('\n')
    },
    setContent: function (ele, html, isAppendTo) {    //写入内容  isAppendTo:true则是追加内容
        var arr = [];
        UE.getEditor(ele).setContent(html, isAppendTo);
        return arr.join('\n')
    },
    setDisabled: function (ele) {      //不可以编辑
        UE.getEditor(ele).setDisabled('fullscreen');
        this.disableBtn("enable");
    },

    setEnabled: function (ele) {      //可以编辑
        UE.getEditor(ele).setEnabled();
        this.enableBtn();
    },

    getText: function (ele) {     //获得当前选中的文本
        //当你点击按钮时编辑区域已经失去了焦点，如果直接用getText将不会得到内容，所以要在选回来，然后取得内容
        var range = UE.getEditor(ele).selection.getRange();
        range.select();
        var txt = UE.getEditor(ele).selection.getText();
        return txt
    },

    getContentTxt: function (ele) {     //获得纯文本
        var arr = [];
        arr.push(UE.getEditor(ele).getContentTxt());
        return arr.join("\n")
    },
    hasContent: function (ele) {         //判断是否有内容
        var arr = [];
        arr.push(UE.getEditor(ele).hasContents());
        return arr.join("\n")
    },
    setFocus: function (ele) {            //使编辑器获得焦点
        UE.getEditor(ele).focus();
    },
    deleteEditor: function (ele) {
        this.disableBtn();
        UE.getEditor(ele).destroy();
    },
    disableBtn: function (str) {
        var div = document.getElementById('btns');
        var btns = UE.dom.domUtils.getElementsByTagName(div, "button");
        for (var i = 0, btn; btn = btns[i++];) {
            if (btn.id == str) {
                UE.dom.domUtils.removeAttributes(btn, ["disabled"]);
            } else {
                btn.setAttribute("disabled", "true");
            }
        }
    },
    enableBtn: function () {
        var div = document.getElementById('btns');
        var btns = UE.dom.domUtils.getElementsByTagName(div, "button");
        for (var i = 0, btn; btn = btns[i++];) {
            UE.dom.domUtils.removeAttributes(btn, ["disabled"]);
        }
    },

    getLocalData: function (ele) {            //获取草稿箱内容
        return UE.getEditor(ele).execCommand("getlocaldata")
    },

    clearLocalData: function (ele) {         //清空草稿箱
        UE.getEditor(ele).execCommand("clearlocaldata");
    }

};

//获取地址栏的属性
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return window.decodeURIComponent(r[2])
    return null;
}
/*  //主体页面全选框选中
* obj:全选的元素-$("#checkAllRoom")
* name:input属性-("checkChildren")
* ID:设置在input上的要传出的id号属性
* arrID:选中的id数组
*/
function checkAll(obj, name, ID, arrID) {
    obj.change(function () {
        arrID.length = 0;
        var $inputList = $("input[name='" + name + "']:visible");
        if (this.checked) {
            $inputList.prop("checked", true);
            for (var i = 0; i < $inputList.length; i++) {
                var children = $inputList.eq(i).attr(ID);
                arrID.push(children);
            };
        } else {
            arrID.length = 0;
            $inputList.prop("checked", false);
        };

    })
    return arrID
}
//主体列表选框选中
/*
* obj:事件监听对象 $(".active_lists")
* name:事件对象input属性checkChildren
* ID:设置在input上的要传出的id号属性activeRoomID
* AllObj:全选框 $("#checkAllRoom")
* arrID:选中的id数组
*/
function singleSelection(obj, name, ID, AllObj, arrID) {
    obj.delegate("input[name='" + name + "']", "change", function () {
        var $inputList = $("input[name = '" + name + "']:visible");
        var children = $(this).attr(ID);
        if (this.checked) {
            arrID.push(children);
            if ($inputList.length == arrID.length) {
                AllObj.prop("checked", true);
            };
        } else {//没选上
            if ($.inArray(children, arrID) != -1) {//而且在数组中可以找到
                arrID.splice($.inArray(children), 1)
            };
            AllObj.prop("checked", false);
        };
    })
    return arrID
}

/*分页控制显示隐藏
data:所有数据
start：起始索引
endNum:终止索引
obj:内容列表所在元素
*/
function pageShowOrNot(data, start, endNum, obj2) {
    if (endNum > data.length) {
        endNum = data.length;
    } else {
        endNum = endNum;
    };
    obj2.find("li").each(function (n, item) {
        if (endNum <= n || n < start) {
            item.style.display = "none";
        } else {
            item.style.display = "block";
        }
    })
}

/*检查是否重名
        Url: 地址
        params:传入的参数
        objTip:提示的对象
        tips:自定义显示的内容
        flags:返回值是否字符串
        values:需要验证的内容
        context:固定参数（xphter.js的验证时的参数）
        */
function repeatCheck(Url, params, values, context, tips, flags) {
    if (values.length && values[0].length > 0) {
        Ajax.ajax({
            url: Url,
            data: params,
            notloadingImg: true
        }).done(function (data) {
            if (flags) {
                if (data) {
                    context.WarningElement && (context.WarningElement.innerHTML = tips || "名称已存在");
                    context.SetStatus(false);
                } else {
                    context.SetStatus(true);
                };
            } else {
                if (data == "True" || data == "0") {
                    context.WarningElement && (context.WarningElement.innerHTML = tips || "名称已存在");
                    context.SetStatus(false);
                    $(".layui-layer-content").scrollTop(20);
                } else {
                    context.SetStatus(true);
                };
            };
        })
    } else {
        if (!context.Nullable) {
            context.WarningElement && (context.WarningElement.innerHTML = "请完善信息");
            context.SetStatus(false);
        } else {
            context.SetStatus(true);
        };
    }
}
//验证密码
function CheckPassword(target, values, context) {
    var $pasword = $("#pop_wrap  .password").val();
    var $repeatPassword = $("#pop_wrap  .passwordConfirm").val();

    if ($.trim($pasword) != 0) {
        $("#pop_wrap  .passwordConfirm").removeAttr("disabled");
    } else {
        $("#pop_wrap .passwordConfirm").val("");
        $("#pop_wrap  .passwordConfirm").attr("disabled", "disabled")
        $("#pop_wrap  .password_attention").hide();
    };

    if ($.trim($repeatPassword) != 0) {
        if ($repeatPassword != $pasword) {
            context.SetStatus(false);
            $("#passwordWarning").html("密码错误").show();
        } else {
            context.SetStatus(true);
            $("#passwordWarning").html("密码错误").hide();
        };
    } else {
        if ($.trim($pasword) != 0) {
            context.SetStatus(false);
            $("#passwordWarning").html("请验证密码").show();
        } else {
            context.SetStatus(true);
            $("#passwordWarning").html("密码错误").hide();
        };
    };
    if (true) {

    }
    $(target).eq(0).focus();
}

//验证用，检查日期是否不合理
function checkDate(Url, params, values, context) {
    if (values.length && values[0].length > 0) {
        Ajax.ajax({
            url: Url,
            data: params
        }).done(function (data) {
            if (data == 1) {
                context.WarningElement && (context.WarningElement.innerHTML = "该时间段已有学期");
                context.SetStatus(false);
            } else if (data == 2) {
                context.WarningElement && (context.WarningElement.innerHTML = "学期起止时间超出学年起止时间");
                context.SetStatus(false);
            } else if (data == 0) {
                context.SetStatus(true);
            } else if (data == 3) {
                context.WarningElement && (context.WarningElement.innerHTML = "该时间段已有周次");
                context.SetStatus(false);
            } else if (data == 4) {
                context.WarningElement && (context.WarningElement.innerHTML = "结束时间和开始时间不在同一周");
                context.SetStatus(false);
            } else if (data == 5) {
                context.WarningElement && (context.WarningElement.innerHTML = "周次起止时间超出学期起止时间");
                context.SetStatus(false);
            } else {
                context.WarningElement && (context.WarningElement.innerHTML = "请完善信息");
                context.SetStatus(true);
            };
        }).fail(function (data) {
            Dialogue.Error(data);
        })
    } else {
        if (!context.Nullable) {
            context.WarningElement && (context.WarningElement.innerHTML = "请完善信息");
            context.SetStatus(false);
        } else {
            context.SetStatus(true);
        }
    }
}

// 设置表单地址并初始化可验证表单
function InitializeValidatedForm(url) {
    var validatedForm = null;
    var form = window.document.forms[window.document.forms.length - 1];
    form.action = url;
    validatedForm = new Xphter.ValidatedForm(form);
    return validatedForm;
}


//回车确定事件
function enterKeyEvent(fatherObj, childObj) {
    fatherObj.keyup(function (event) {
        if (event.keyCode == "13") {
            childObj.click();
        };
    });
}

/* 下拉选择 
 * ele:id名称，不加"#"
 * initDefa:默认数据
 * isMultiple:是否多选
 * CurrentSchoolID:当前用户所在学校id
*/
var selectOptions = {
    //选择学校
    selectSchool: function (ele, initDefa) {
        SelectPlugin.CreatSelect2Single(ele, {
            placeholder: "请输入学校",
            minimumInputLength: 1,
            ajax: {
                url: AjaxUrls.SchoolUrl.QuerySchool,
                delay: 500,
                dataType: 'json',
                data: function (params) {
                    return {
                        SchoolID: 0,
                        QueryCondition: params.term
                    };
                },
                processResults: function (data) {
                    if (data.Success) {
                        data = data.Value;
                    } else {
                        return;
                    };

                    var newDatafilter = $.map(data.Data, function (obj) {
                        obj.id = obj.id || obj.SchoolID;
                        obj.text = obj.text || obj.SchoolName;
                        return obj;
                    })
                    return {
                        results: newDatafilter
                    };
                }
            }
        });
    },
    //选择教材
    selectMaterial: function (ele, initDefa) {
        Ajax.ajax({
            url: AjaxUrls.MaterialUrls.QueryMaterial,
            data: { ID: 0, QueryCondition: "" }
        }).done(function (data) {
            var newData = $.map(data.Data, function (obj) {
                obj.id = obj.id || obj.ID;
                obj.text = obj.text || obj.Name;
                return obj;
            })
            if (newData.length != 0) {
                SelectPlugin.CreatSelect2Single(ele, {
                    placeholder: "请选择教材",
                    data: newData,
                    allowClear: false
                });
                $("#" + ele).select2().val(initDefa).trigger("change");
            };
        })
    },
    //选择年级——学段
    selectPhase: function (ele, initDefa) {
        if (typeof ele == "string") {
            ele = $("#" + ele);
        };

        Ajax.ajax({
            url: AjaxUrls.PhaseUrls.QueryPhase,
            data: { PhaseID: 0 }
        }).done(function (data) {
            var newDate = $.map(data, function (obj) {
                obj.id = obj.id || obj.PhaseID;
                obj.text = obj.text || obj.PhaseName;
                obj.children = obj.children || obj.GradeList;
                $.map(obj.children, function (obj) {
                    obj.id = obj.id || obj.GradeID;
                    obj.text = obj.text || obj.GradeName;
                })
                return obj;
            })
            if (newDate.length != 0) {
                SelectPlugin.CreatSelect2Single(ele, {
                    placeholder: "请选择年级",
                    data: newDate
                });
                ele.select2().val(initDefa).trigger("change");
            };
        })
    },
    //选择星期
    selectWeek: function (ele, initDefa) {
        if (typeof ele == "string") {
            ele = $("#" + ele);
        };

        var data = [{ id: 0, text: "星期一" }, { id: 1, text: "星期二" }, { id: 2, text: "星期三" }, { id: 3, text: "星期四" }, { id: 4, text: "星期五" }, { id: 5, text: "星期六" }, { id: 6, text: "星期日" }];
        SelectPlugin.CreatSelect2Single(ele, {
            placeholder: "请选择年级",
            data: data
        });

        ele.select2().val(initDefa).trigger("change");
    },
    //选择学科(无按钮)
    selectSubjectNoBtn: function (ele, initDefa, isMultiple) {//initDefa默认值
        if (typeof ele == "string") {
            ele = $("#" + ele);
        };

        if (isMultiple != false) {
            isMultiple = true;
        }
        var hx = 1;
        Combogride.CreatCombogride(ele, {
            panelHeight: 210,
            multiple: isMultiple,
            delay: 500,
            idField: 'ID',
            textField: 'Name',
            url: AjaxUrls.SubjectUrls.QuerySubject,
            queryParams: { "ID": "0", "QueryCondition": "", "PageSize": "10", "PageNumber": "1" },
            loadFilter: function (r) {
                if (r.Success) {
                    r = r.Value;
                } else {
                    return;
                };
                return {
                    total: r.TotalCount,
                    rows: r.Data
                };
            },
            columns: [[
                 { field: 'ID', title: '学科ID号', width: 100 },
                 { field: 'Name', title: '学科名称', width: 260 }
            ]],
            onLoadSuccess: function () {
                if (initDefa != "" && hx == 1) {
                    ele.combogrid('setValue', initDefa);//设置默认值
                    hx = -1;//首次打开下拉数据时，设置默认选中，点击分页后，不再进行重复设置，否则会覆盖掉你新选中的值
                }
            },
            onClickRow: function (index, row) {//点击事件--将筛选值清空
                var keyWord = ele.siblings().val();//获取到筛选内容
                // 此处2行代码为表单验证提供数据（点击时）
                var checkSubjectID = $("#pop_wrap form input[name='SubjectID']").val();
                $("#pop_wrap form input[name='checkSubjectID']").val(checkSubjectID);
                if (keyWord != "") {
                    console.log(keyWord);
                    var values = ele.combogrid("getValues");
                    $.each(values, function (index, obj) {
                        if (keyWord == obj) {
                            values.splice(index, 1);
                        }
                    });
                    ele.combogrid("setValues", values);
                }
            },

            keyHandler: {
                query: function (keyword) {
                    var queryParams = ele.combogrid("grid").datagrid('options').queryParams;
                    queryParams.QueryCondition = keyword;
                    queryParams.keyword = keyword;
                    queryParams.PageSize = $(".pagination-page-list").val();
                    queryParams.PageNumber = "1";
                    ele.combogrid("grid").datagrid('options').queryParams = queryParams;
                    ele.combogrid("grid").datagrid("reload");
                    ele.combogrid("setValue", keyword);
                    ele.siblings("input").val(keyword);
                }
            }
        });
        //分页--写法
        var pager = ele.combogrid("grid").datagrid("getPager");
        if (pager) {
            $(pager).pagination({
                pageNumber: 1,
                pageSize: 10,
                onSelectPage: function (page, rows) {
                    var keyTxt = ele.siblings("input").val();
                    var searchData = { ID: 0, QueryCondition: keyTxt, PageSize: rows, PageNumber: page, keyword: keyTxt };
                    ele.combogrid("grid").datagrid('options').queryParams = searchData;
                    ele.combogrid("grid").datagrid("reload");
                },
                onChangePageSize: function () { },
                onRefresh: function (page, rows) {
                    var keyTxt = ele.siblings("input").val();
                    var searchData = { ID: 0, QueryCondition: keyTxt, PageSize: rows, PageNumber: page, keyword: keyTxt };
                    ele.combogrid("grid").datagrid('options').queryParams = searchData;
                    ele.combogrid("grid").datagrid("reload");
                }
            })
        }
    },
    //选择学科(按钮)
    selectSubject: function (ele, initDefa, isMultiple) {//initDefa默认值
        if (typeof ele == "string") {
            ele = $("#" + ele);
        };

        if (isMultiple != false) {
            isMultiple = true;
        }
        var hx = 1, len;
        Combogride.CreatCombogride(ele, {
            //panelWidth: 420,
            panelHeight: 210,
            multiple: isMultiple,
            delay: 500,
            idField: 'ID',
            textField: 'Name',
            url: AjaxUrls.SubjectUrls.QuerySubject,
            queryParams: { "ID": "0", "QueryCondition": "", "PageSize": "10", "PageNumber": "1" },
            loadFilter: function (r) {
                if (r.Success) {
                    r = r.Value;
                } else {
                    return;
                };
                len = r.Data.length;
                return {
                    total: r.TotalCount,
                    rows: r.Data
                };
            },
            columns: [[
                 { field: 'Name', title: '学科名称', width: 260 },
                 { field: 'ID', title: '选择按钮', width: 100 }
            ]],
            onLoadSuccess: function () {
                if (initDefa != "" && hx == 1) {
                    ele.combogrid('setValue', initDefa);//设置默认值
                    hx = -1;//首次打开下拉数据时，设置默认选中，点击分页后，不再进行重复设置，否则会覆盖掉你新选中的值
                };
                if (len > 0) {
                    $(".datagrid-btable td[field='ID']").empty().append("<button class='click_btn'>选择</button>");
                };

            },
            onClickRow: function (index, row) {//点击事件--将筛选值清空
                var keyWord = ele.siblings().val();//获取到筛选内容
                // 此处2行代码为表单验证提供数据（点击时）
                var checkSubjectID = $("#pop_wrap form input[name='SubjectID']").val();
                $("#pop_wrap form input[name='checkSubjectID']").val(checkSubjectID);
                if (keyWord != "") {
                    console.log(keyWord);
                    var values = ele.combogrid("getValues");
                    $.each(values, function (index, obj) {
                        if (keyWord == obj) {
                            values.splice(index, 1);
                        }
                    });
                    ele.combogrid("setValues", values);
                }
            },

            keyHandler: {
                query: function (keyword) {
                    var queryParams = ele.combogrid("grid").datagrid('options').queryParams;
                    queryParams.QueryCondition = keyword;
                    queryParams.keyword = keyword;
                    queryParams.PageSize = $(".pagination-page-list").val();
                    queryParams.PageNumber = "1";
                    ele.combogrid("grid").datagrid('options').queryParams = queryParams;
                    ele.combogrid("grid").datagrid("reload");
                    ele.combogrid("setValue", keyword);
                    ele.siblings("input").val(keyword);
                }
            },
            onSelect: function (index, row) {
                var input = $(".subjects_list_wrap_row  input");
                $(".subjects_list_wrap_row").show();
                var repeat = false;
                $(input).each(function (n, obj) {
                    if ($(obj).val() == row.ID) {
                        Dialogue.Msg("您已选过该学科");
                        ele.combogrid("setValues", "");
                        repeat = true;
                        return;
                    };
                })

                if (repeat) {
                    return;
                };

                var studentHtml = ' <div class="subjects_item_wrap has_choose items_item_wrap" >' +
                        '<input name="SubjectID" type="hidden" value="' + row.ID + '" />' +
                        '<img  class="delete" src="/images/backstage/activeClassClose_03.png " />' +
                        '<label><p class="subject_name">' + row.Name + '</p>' +
                     '</div>';
                $(".subjects_list_wrap").append(studentHtml);
                ele.combogrid("setValues", "");
            }
        });
        //分页--写法
        var pager = ele.combogrid("grid").datagrid("getPager");
        if (pager) {
            $(pager).pagination({
                pageNumber: 1,
                pageSize: 10,
                onSelectPage: function (page, rows) {
                    var keyTxt = ele.siblings("input").val();
                    var searchData = { ID: 0, QueryCondition: keyTxt, PageSize: rows, PageNumber: page, keyword: keyTxt };
                    ele.combogrid("grid").datagrid('options').queryParams = searchData;
                    ele.combogrid("grid").datagrid("reload");
                },
                onChangePageSize: function () { },
                onRefresh: function (page, rows) {
                    var keyTxt = ele.siblings("input").val();
                    var searchData = { ID: 0, QueryCondition: keyTxt, PageSize: rows, PageNumber: page, keyword: keyTxt };
                    ele.combogrid("grid").datagrid('options').queryParams = searchData;
                    ele.combogrid("grid").datagrid("reload");
                }
            })
        }
    },
    //选择小时分钟
    selectHoursMinite: function (ele, tp, initDefa) {
        var placeH, val;
        var newDate = [];
        for (var i = 0; i < tp; i++) {
            if (i < 10) {
                val = "0" + i;
            } else {
                val = i;
            };
            newDate.push({ "id": i, "text": val });
        };
        SelectPlugin.CreatSelect2Single(ele, {
            data: newDate,
            allowClear: false
        });
        if (initDefa && initDefa != null) {
            $("#" + ele).select2().val(initDefa).trigger("change");
        };
    },
    //查询周次
    selectEduWeek: function (ele, pamaras, initDefa) {
        if (initDefa && initDefa != null) {
            $("#" + ele).select2().val(initDefa).trigger("change");
        } else {
            Ajax.ajax({
                url: AjaxUrls.WeekUrl.GetAllWeekByTime,
                data: pamaras
            }).done(function (data) {
                var nowWeek = data && data.CurrentWeekID;

                if (data && data.WeekList) {
                    var newDate = $.map(data.WeekList, function (obj) {
                        obj.id = obj.id || obj.WeekID;
                        obj.text = obj.text || obj.WeekName;
                        return obj;
                    })
                    if (newDate.length != 0) {
                        newDate.unshift({ id: -1, text: "假期" });
                        SelectPlugin.CreatSelect2Single(ele, {
                            data: newDate,
                            allowClear: true
                        });
                    };

                }
                nowWeek && nowWeek != null ? $("#" + ele).select2().val(nowWeek).trigger("change") : $("#" + ele).select2().val(-1).trigger("change");
            })
        }
    },
    //选择文章类型
    selectArticle: function (ele, initDefa) {
        Ajax.ajax({
            url: AjaxUrls.NewTypeUrl.NewTypeList,
            data: { Name: "", PageSize: 100, PageNumber: 1 }
        }).done(function (data) {
            var newData = $.map(data.Data, function (obj) {
                obj.id = obj.id || obj.ID;
                obj.text = obj.text || obj.Name;
                return obj;
            })
            if (newData.length != 0) {
                SelectPlugin.CreatSelect2Single(ele, {
                    placeholder: "请选择文章类型",
                    data: newData,
                    allowClear: false
                });
                $("#" + ele).select2().val(initDefa).trigger("change");
            } else {
                $("#" + ele).select2().val(-1).trigger("change");
            };
        })
    },
    //选择课程
    selectCourse: function (ele, initDefa, isMultiple, CurrentSchoolID) {//initDefa默认值
        if (typeof ele == "string") {
            ele = $("#" + ele);
        };

        if (isMultiple != false) {
            isMultiple = true;
        }
        var hx = 1;
        Combogride.CreatCombogride(ele, {
            panelWidth: 420,
            panelHeight: 210,
            multiple: isMultiple,
            delay: 500,
            idField: 'CourseID',
            textField: 'CourseName',
            url: AjaxUrls.CourseUrl.SelectUrl,
            queryParams: { "SchoolID": CurrentSchoolID, "QueryCondition": "", "PageSize": "10", "PageNumber": "1" },
            loadFilter: function (r) {
                if (r.Success) {
                    r = r.Value;
                } else {
                    return;
                };
                return {
                    total: r.TotalCount,
                    rows: r.Data
                };
            },
            columns: [[
                 { field: 'CourseName', title: '课程名称', width: 140 },
                 { field: 'CourseID', title: '课程ID号', width: 100 }
            ]],
            onLoadSuccess: function () {
                if (initDefa != "" && hx == 1) {
                    ele.combogrid('setValue', initDefa);//设置默认值
                    hx = -1;//首次打开下拉数据时，设置默认选中，点击分页后，不再进行重复设置，否则会覆盖掉你新选中的值
                }
            },
            onClickRow: function (index, row) {//点击事件--将筛选值清空
                var keyWord = ele.siblings().val();//获取到筛选内容
                // 此处2行代码为表单验证提供数据（点击时）
                var checkCourseID = $("#pop_wrap form input[name='CourseID']").val();
                $("#pop_wrap form input[name='checkCourseID']").val(checkCourseID);
                if (keyWord != "") {
                    var values = ele.combogrid("getValues");
                    $.each(values, function (index, obj) {
                        if (keyWord == obj) {
                            values.splice(index, 1);
                        }
                    });
                    ele.combogrid("setValues", values);
                }
            },

            keyHandler: {
                query: function (keyword) {
                    var queryParams = ele.combogrid("grid").datagrid('options').queryParams;
                    queryParams.QueryCondition = keyword;
                    queryParams.keyword = keyword;
                    queryParams.PageSize = $(".pagination-page-list").val();
                    queryParams.PageNumber = "1";
                    ele.combogrid("grid").datagrid('options').queryParams = queryParams;
                    ele.combogrid("grid").datagrid("reload");
                    ele.combogrid("setValue", keyword);
                    ele.siblings("input").val(keyword);
                }
            }
        });
        //分页--写法
        var pager = ele.combogrid("grid").datagrid("getPager");
        if (pager) {
            $(pager).pagination({
                pageNumber: 1,
                pageSize: 10,
                pageList: [5, 10, 20],
                onSelectPage: function (page, rows) {
                    var keyTxt = ele.siblings("input").val();
                    var searchData = { ID: 0, QueryCondition: keyTxt, PageSize: rows, PageNumber: page, keyword: keyTxt };
                    ele.combogrid("grid").datagrid('options').queryParams = searchData;
                    ele.combogrid("grid").datagrid("reload");
                },
                onChangePageSize: function () { },
                onRefresh: function (page, rows) {
                    var keyTxt = ele.siblings("input").val();
                    var searchData = { ID: 0, QueryCondition: keyTxt, PageSize: rows, PageNumber: page, keyword: keyTxt };
                    ele.combogrid("grid").datagrid('options').queryParams = searchData;
                    ele.combogrid("grid").datagrid("reload");
                }
            })
        }


    },
    //评分类型
    selectScoreItemType: function (ele, initDefa,schoolID) {
        Ajax.ajax({
            url: AjaxUrls.ScoreItemTypeUrl.TypeList,
            data: {SchoolID:schoolID, UsageID: 0, PageSize: 100, PageNumber: 1 }
        }).done(function (data) {
            var newData = $.map(data.Data, function (obj) {
                obj.id = obj.id || obj.ID;
                obj.text = obj.text || obj.Name;
                return obj;
            })

            if (newData.length != 0) {
                SelectPlugin.CreatSelect2Single(ele, {
                    placeholder: "请选择评分类型",
                    data: newData,
                    allowClear: false
                });
                $("#" + ele).select2().val(initDefa).trigger("change");
            } else {
                $("#" + ele).select2().val(-1).trigger("change");
            };
        })
    },
    // 学段
    selectStage: function (ele, initDefa) {
        Ajax.ajax({
            url: AjaxUrls.PhaseUrls.QueryPhase,
            data: { PhaseID: 0 }
        }).done(function (data) {
            var newDate = $.map(data, function (obj) {
                obj.id = obj.id || obj.PhaseID;
                obj.text = obj.text || obj.PhaseName;
                return obj;
            })
            if (newDate.length != 0) {
                SelectPlugin.CreatSelect2Single(ele, {
                    placeholder: "请选择学段",
                    data: newDate
                });
                $("#" + ele).select2().val(initDefa).trigger("change");
            };
        })
    },
    // 评分用途
    selectScoreUsage: function (ele, initDefa) {
        Ajax.ajax({
            url: AjaxUrls.ScoreItemUsageUrl.UsageList
        }).done(function (data) {
            var newDate = $.map(data, function (obj) {
                obj.id = obj.id || obj.ID;
                obj.text = obj.text || obj.Name;
                return obj;
            })
            if (newDate.length != 0) {
                SelectPlugin.CreatSelect2Single(ele, {
                    placeholder: "请选择用途",
                    data: newDate
                });
                $("#" + ele).select2().val(initDefa).trigger("change");
            };
        })
    },
}
/* 获取当前（传入数据）日期 
 * val:非必传参数 需要转化的日期毫秒
 * noHours:是否需要返回 时:分:秒
*/
function getNowDate(val, noHours) {
    var now;
    if (val) {
        now = val;
    } else {
        now = new Date();
    };
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    var hour = now.getHours();
    var minite = now.getMinutes();
    var second = now.getSeconds();

    if (noHours) {
        return year + "-" + month + "-" + day;
    } else {
        return year + "-" + month + "-" + day + " " + hour + ":" + minite + ":" + second;
    };
}

/*获取一周前的今天 YYYY-MM-DD格式*/
function getDay(day) {
    //Date()返回当日的日期和时间。
    var days = new Date();
    //getTime()返回 1970 年 1 月 1 日至今的毫秒数。
    var gettimes = days.getTime() + 1000 * 60 * 60 * 24 * day;
    //setTime()以毫秒设置 Date 对象。
    days.setTime(gettimes);
    var year = days.getFullYear();
    var month = days.getMonth() + 1;
    if (month < 10) {
        month = "0" + month;
    }
    var today = days.getDate();
    if (today < 10) {
        today = "0" + today;
    }
    return year + "-" + month + "-" + today;
}


/* 秒数转换为日期
 * value:秒
*/
function formatsSeconds(value) {
    var theTime = Math.ceil(value);
    var theTime0 = 0;//时
    var theTime1 = 0;//分
    var theTime2 = 0;//秒
    if (theTime > 60) {
        theTime1 = parseInt(theTime / 60);
        theTime2 = parseInt(theTime % 60);
        if (theTime1 > 60) {
            theTime0 = parseInt(theTime1 / 60);
            theTime1 = parseInt(theTime1 % 60);
        };
    };
    var resule = "";
    if (theTime1 > 0) {
        resule = "" + parseInt(theTime1) + "分" + resule;
    };
    if (theTime0 > 0) {
        resule = "" + parseInt(theTime0) + "小时" + resule;
    };
    return resule;
}

/*两个时间比较
 * first:格式"2018-07-27 12:20:00"
 * end:格式"2018-07-27 12:20:00"不传和当前时间比较
*/
function compareTimes_different(first, end) {
    var t_first = first.split(" ");
    var ymd_first = t_first[0].split("-");
    var hms_first = t_first[1].split(":");
    var first_sec = new Date(parseInt(ymd_first[0]), parseInt(ymd_first[1]) - 1, parseInt(ymd_first[2]), parseInt(hms_first[0]), parseInt(hms_first[1]), (parseInt(hms_first[2]) || 0));

    if (end) {
        var t_end = end.split(" ");
        var ymd_end = t_end[0].split("-");
        var hms_end = t_end[1].split(":");
        var end_sec = new Date(ymd_end[0], (ymd_end[1] - 1), ymd_end[2], hms_end[0], hms_end[1], (hms_end[2] || 0));
    } else {
        var end_sec = new Date();
    };
    return (first_sec - end_sec);
}

/*计算延长的时间后的结束时间 
 * val:传入时间 格式"2017-2-4 12:35:56"
 * mm:延长的毫秒
*/
function addTime(val, mm) {
    var nowTime;
    if (val.split("-")) {
        var vals = val.split(" ");
        var date = vals[0].split("-");
        var time = vals[1].split(":");
        var year = date[0];
        var month = date[1] - 1;
        var day = date[2];
        var hour = time[0];
        var minite = time[1];
        var second = time[2];
        nowTime = new Date(Date.parse(new Date(year, month, day, hour, minite, second)) + mm);
    } else {
        nowTime = new Date(Date.parse(val) + mm);
    };
    return nowTime;
}

/*获取当前时间精确到秒
 * noSecond:true 将中国标准时间 转换成 '2017-9-10 11:12'格式
                 不填  转换成 '2017-9-10 11:12:30'格式
*/
function getNowTimes(noSecond) {
    var myDate = new Date();
    var year = myDate.getFullYear() + "-";
    var month = (myDate.getMonth() + 1) + "-";
    var day = myDate.getDate();

    var hour = myDate.getHours() + ":";
    var minite = myDate.getMinutes();
    var second = myDate.getSeconds();

    if (noSecond) {
        return (year + month + day + " " + hour + minite);
    } else {
        return (year + month + day + " " + hour + minite + ":" + second);
    }
}

/*把秒变成时分秒
 * val:秒
*/
function changeTime(val) {
    val = parseInt(val);
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
/*将传入的日期去掉秒
 * t:格式"2018-07-27 12:20:00",返回:"2018-07-27 12:20"
*/
function timeFilterNoSecond(t) {
    var arr = t.split(" ");
    var hourMinite = arr[1].split(":");

    return arr[0] + " " + hourMinite[0] + ":" + hourMinite[1];
}
/*将时：分：秒转换为秒或者毫秒
 * val:格式"12:20:36"
 * type:固定'ms'返回毫秒，不传就返回秒
*/
function toChangeSeconds(val, type) {
    var arr = val.split(":");
    var hour = parseInt(arr[0]);
    var minite = parseInt(arr[1]);
    var second = parseInt(arr[2]);
    var finalNum = hour * 3600 + minite * 60 + second;
    if (type == 'ms') {
        return finalNum * 1000;
    } else {
        return finalNum;
    };
}
/*获取 月  天
 * val：格式"2018-07-27 12:20:00"，返回"7-27"
*/
function getMonthDay(val) {
    var arr = val.split(" ");
    var first = arr[0].split("-");
    return parseInt(first[1]) + "." + parseInt(first[2]);
}



// 获取schoolID
function GetSchoolID(id, isContinue) {
    if (id) {
        return id;
    } else if (GetQueryString("SchoolID")) {
        return GetQueryString("SchoolID");
    } else if (!isContinue) {
        alert("参数非法");
        window.location.href = "/default.aspx?";
    } else {
        return 0;
    };
}


function changeURLPar(destiny, par, par_value) {
    var pattern = par + '=([^&]*)';
    var replaceText = par + '=' + par_value;
    if (destiny.match(pattern)) {
        var tmp = '/\\' + par + '=[^&]*/';
        tmp = destiny.replace(eval(tmp), replaceText);
        return (tmp);
    } else {
        if (destiny.match('[\?]')) {
            return destiny + '&' + replaceText;
        }
        else {
            return destiny + '?' + replaceText;
        };
        return destiny + '\n' + par + '\n' + par_value;
    }
}

/*加载图片失败显示默认图片
 * imgsrc:默认图地址
 * flag:图片加载失败后是否删除此图片节点
 * event:默认参数，事件的状态
*/
function nofindPic(imgsrc, flag, event) {
    var img = event.target || event.srcElement;
    if (flag) {
        var _parentElement = img.parentNode;
        _parentElement.removeChild(img);
    } else {
        img.src = imgsrc;
    };
    img.onerror = null;
}
/*分享
 * params:{
    "titles":分享的标题,
    "urls":分享的地址
   }
*/
function shareTo(params) {
    Dialogue.LayerFullScreen({
        title: '分享链接',
        area: ["510px", "270px"],
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
                            '<div class="popTop">' +
                                '<div class="row-pad hidee">' +
                                    '<h1>test</h1>' +
                                '</div>' +
                                '<input class="popTtxt" type="text" name="content" id="share_content"  placeholder="" />' +
                                '<input class="popTbtn" type="button" value="复制" id="share_content_btn"  />' +
                            '</div>' +
                            '<div class="popCenter">' +
                                '<ul class="clearFloat shareAddr">' +
                                    '<li class="fl" >分享至：</li>' +
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

/*巡课页面过滤有课的教室
 * newData:全局变量
 * data:教室列表
*/
function filterClassroom(newData, data) {
    var newArr = [];
    newData = $.map(data, function (obj) {
        var roomState = "";
        if (obj.HasSchedule) {
            roomState = "[ 有课 ]";
            obj.hasClassing = true;
            obj.iconSkin = "diy03";
        } else {
            roomState = "";
            obj.hasClassing = false;
        };
        obj.Name = obj.Name || (obj.ClassRoomName + roomState);
        obj.isClassroom = true;
        if ((canSeeAllRoom[0].toLowerCase() == "false") && (obj.hasClassing == true)) {//canSeeAllRoom:只能观看有课教室，无课教室看不了
            newArr.push(obj);
        };
        return obj;
    })
    if (canSeeAllRoom[0].toLowerCase() == "false") {
        return newArr;
    } else {
        return newData;
    };
}
/*检查下拉列表(easyui)是手动输入还是选中*/
function CheckHandOrNot(obj, conent) {
    var val = obj.combogrid("getValue")
    if ((parseInt(val) + '') == "NaN" && $.trim(val).length != 0) {
        Dialogue.Msg(conent);
        return;
    };
}
/*获取图片格式,初始化上传图片的dom;*/
function imagesFormatting(imagesData) {
    Ajax.Post({
        url: AjaxUrls.ImageUpload.GetSupportedExtensions,
        success: function (data) {
            data = JSON.parse(data).join("|");
            data = data.replace(/\./g, "");

            $("#pop_wrap .picBox").uploadImg({
                "picNum": 1,
                "width": 100,
                "height": 100,
                "name": "ImagePath",
                "format": data,
                "initialImages": imagesData
            });
        }
    })
}

/*清空用户密码
 * ID:用户id
*/
function resetUserPassword(ID) {
    Ajax.ajax({
        url: AjaxUrls.UserUrls.ResetPassWord,
        data: { UserID: ID, PassWord:"123456" }
    }).done(function (data) {
        Dialogue.Success("重置密码成功");
    }).fail(function () {
        Dialogue.Error("重置密码失败");
    })
}

/*多选学科，以气泡的形式展示
 * arr:选择的学科列表
 * ele:展示学科的dom
*/
function showChooseSubjects(arr, ele) {
    if (arr.length == 0) {
        return;
    };
    $(".subjects_list_wrap_row ").show();

    var html = "";
    for (var i = 0; i < arr.length; i++) {
        var row = arr[i];
        html += ' <div class="subjects_item_wrap  has_choose items_item_wrap" >' +
                                '<input name="SubjectID" type="hidden" value="' + row.SubjectID + '" />' +
                                '<img  class="delete" src="/images/backstage/activeClassClose_03.png " />' +
                                '<label><p class="class_name">' + row.SubjectName + '</p>' +
                             '</div>';
    };
    ele.empty().append(html);
}

/*多选课程，以气泡的形式展示
 * arr:选择的学科列表
 * ele:展示学科的dom
*/
function showChooseCourses(arr, ele) {
    if (arr.length == 0) {
        return;
    };
    $(".courses_list_wrap_row  ").show();

    var html = "";
    for (var i = 0; i < arr.length; i++) {
        var row = arr[i];
        html += ' <div class="courses_item_wrap   has_choose items_item_wrap" >' +
                                '<input name="CourseID" type="hidden" value="' + row.CourseID + '" />' +
                                '<img  class="delete" src="/images/backstage/activeClassClose_03.png " />' +
                                '<label><p class="class_name">' + row.CourseName + '</p>' +
                             '</div>';
    };
    ele.empty().append(html);
}

/*多选班级，以气泡的形式展示
 * arr:选择的学科列表
 * ele:展示学科的dom
*/
function showChooseClass2(arr, ele) {
    if (arr.length == 0) {
        return;
    };
    $(".classes_list_wrap_row").show();

    var html = "";
    for (var i = 0; i < arr.length; i++) {
        var row = arr[i];
        html += ' <div class="classes_item_wrap  has_choose items_item_wrap" >' +
                                '<input name="ClassID" type="hidden" value="' + row.ClassID + '" />' +
                                '<img  class="delete" src="/images/backstage/activeClassClose_03.png " />' +
                                '<label><p class="class_name">' + row.ClassName + '</p>' +
                             '</div>';
    };
    ele.empty().append(html);
}

/*多选年级，以气泡的形式展示
 * arr:选择的学科列表
 * ele:展示学科的dom
*/

function showChooseGrade2(arr, ele) {
    if (arr.length == 0) {
        return;
    };
    $(".grades_list_wrap_row").show();

    var html = "";
    for (var i = 0; i < arr.length; i++) {
        var row = arr[i];
        html += ' <div class="grades_item_wrap   has_choose items_item_wrap" >' +
                                '<input name="GradeID" type="hidden" value="' + row.GradeID + '" />' +
                                '<img  class="delete" src="/images/backstage/activeClassClose_03.png " />' +
                                '<label><p class="class_name">' + row.GradeName + '</p>' +
                             '</div>';
    };
    ele.empty().append(html);
}

/*新建a标签并跳转一个新定页面*/
function openNewPage(url) {
    var a = document.createElement("a");
    a.setAttribute('href', url);
    a.setAttribute('target', '_blank');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

/*排序
 * arr:需要排序的数组
*/
function bubbleSort(arr,itemName,length){
    var i = arr.length - 1;
    while (i > 0) {
        var pos = 0;
        for (var j = 0; j < i; j++) {
            if (itemName) {
                if (arr[j].itemName < arr[j + 1].itemName) {
                    pos = j;
                    var tmp = arr[j]; arr[j] = arr[j + 1]; arr[j + 1] = tmp;
                };
            } else {
                if (arr[j] < arr[j + 1]) {
                    pos = j;
                    var tmp = arr[j]; arr[j] = arr[j + 1]; arr[j + 1] = tmp;
                };
            };
        };
        i = pos;
    };
    if (length) {
        return arr.slice(0, length);
    } else {
        return arr;
    }
}

///*倒计时代码*/
//function cutDownTime(intDiff, dom) {
//    cutDownTimer = window.setInterval(function () {
//        var day = 0,
//        hour = 0,
//        minute = 0,
//        second = 0; //时间默认值		
//        if (intDiff > 0) {
//            hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
//            minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
//            second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
//        }
//        if (hour <= 9) hour = '0' + hour;
//        if (minute <= 9) minute = '0' + minute;
//        if (second <= 9) second = '0' + second;
//        $(dom).html(hour + ":" + minute + ":" + second);
//        intDiff--;
//    }, 1000);
//}