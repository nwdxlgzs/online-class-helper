/**
 * Created by Administrator on 2017/5/5.
 */
function getDom(id) {
    return document.getElementById(id);
}
/*首页轮播图
 * imgBoxId:包裹所有图片的盒子id，
 * codeBoxId:包裹所有序号的盒子id，
 * codeTagName:序号的标签名，
 * btnLeftId:左侧按钮id,
 * btnRightId:右侧按钮id,
 * codeActiveClass:序号高亮样式的类名,
 * setTime:轮播间隔时间
*/
function bannerPlay(imgBoxId, codeBoxId, codeTagName, btnLeftId, btnRightId, codeActiveClass, setTime) {
    //当前高亮显示的编码
    var codeIndex = 0;
    var bannertimer = null;
    //获取所有要切换的图片和编码标签
    var imgBox = getDom(imgBoxId);
    var imgCodes = getDom(codeBoxId).getElementsByTagName(codeTagName);
    //每张图片的宽度
    var imgWidth = parseInt(imgBox.offsetWidth / imgCodes.length);

    var btnL = getDom(btnLeftId);
    var btnR = getDom(btnRightId);

    imgBox.style.width = 1204 * imgCodes.length + "px";

    bannerPlays();

    function bannerPlays() {
        bannertimer = setInterval(function () {
            codeIndex++;
            if (codeIndex >= imgCodes.length) {
                codeIndex = 0;
            };
            bannerMove(codeIndex, codeActiveClass);
        }, setTime);
    }
    function clearBannerPlay() {
        clearInterval(bannertimer);
    }

    btnL.onclick = function () {
        clearBannerPlay();
        //获取当前移动中的图片在那个位置，算出当前的索引值,同时点击要减1
        codeIndex = parseInt(Math.abs(imgBox.offsetLeft) / 1204) - 1;
        if (codeIndex < 0) {
            codeIndex = imgCodes.length - 1;
        };
        bannerMove(codeIndex, codeActiveClass);
        bannerPlays();
        //
    };

    btnR.onclick = function (bannertimer) {
        clearBannerPlay();
        codeIndex = parseInt(Math.abs(imgBox.offsetLeft) / 1204) + 1;
        if (codeIndex >= imgCodes.length) {
            codeIndex = 0;
        }
        bannerMove(codeIndex, codeActiveClass);
        bannerPlays();
    };
    function bannerMove(index, codeActiveClass) {
        for (var j = 0; j < imgCodes.length; j++) {
            imgCodes[j].className = "";
        };
        imgCodes[index].className = codeActiveClass;
        imgBox.style.left = ((-1204) * index) + "px";
    }
}

/*加载轮播图
 * playPath:不同项目的首页路径（"BeijingSportUniversity"，"MiYun"）etc，
 * isLiving:有直播是否优先将直播封面作为轮播
*/
function loadBanner(playPath, isLiving) {
    var nofindPics = "/images/indexImg/bannerImg0.png";

    if (isLiving) {
        Ajax.ajax({
            url: AjaxUrls.LiveInfo.GetLiveList,
            data: { PageSize: 6, PageNumber: 1, IsLiving: true, IsCompleted: false, Sort: 'StartTime', Order: 1 },
            async: false
        }).done(function (data) {
            if (data.Data.length > 0) {
                var htmlImg = '', htmlDot = '';
                if (data.Data.length > 0) {
                    for (var i = 0; i < data.Data.length; i++) {
                        var href = '';
                        var item = data.Data[i];
                        htmlImg += '<a href="/' + playPath + '/Live.aspx?LiveID=' + item.LiveID + '" ><img src=' + (item.ImageUri || nofindPics) + ' / ></a>';
                        if (i == 0) {
                            htmlDot += '<b class="iBannerCurrentDot"></b>';
                        } else {
                            htmlDot += '<b ></b>';
                        };
                    };
                    $("#indexBannerImages").empty().html(htmlImg);
                    $("#indexBannerCode").empty().html(htmlDot);
                };
            } else {
                Ajax.ajax({
                    url: AjaxUrls.NewsPublic.NewsList,
                    data: { PageSize: 6, PageNumber: 1, IsPublic: "", IsShow: "", contentType: "", articleTypeName: "首页轮播图" },
                    async: false
                }).done(function (datas) {
                    var htmlImg = '', htmlDot = '';
                    if (datas.Data.length > 0) {
                        for (var i = 0; i < datas.Data.length; i++) {
                            var href = '';
                            var item = datas.Data[i];
                            if (item.OutsideUri) {
                                href = 'href="' + item.OutsideUri + '"';
                            };

                            htmlImg += '<a ' + href + ' ><img src=' + (item.ImageFilePath || nofindPics) + ' / ></a>';
                            if (i == 0) {
                                htmlDot += '<b class="iBannerCurrentDot"></b>';
                            } else {
                                htmlDot += '<b ></b>';
                            };
                        };
                        $("#indexBannerImages").empty().html(htmlImg);
                        $("#indexBannerCode").empty().html(htmlDot);
                    };
                })
            };
        })
    } else {
        Ajax.ajax({
            url: AjaxUrls.NewsPublic.NewsList,
            data: { PageSize: 6, PageNumber: 1, IsPublic: "", IsShow: "", contentType: "", articleTypeName: "首页轮播图" },
            async: false
        }).done(function (datas) {
            var htmlImg = '', htmlDot = '';
            if (datas.Data.length > 0) {
                for (var i = 0; i < datas.Data.length; i++) {
                    var href = '';
                    var item = datas.Data[i];
                    if (item.OutsideUri) {
                        href = 'href="' + item.OutsideUri + '"';
                    };

                    htmlImg += '<a ' + href + ' ><img src="' + (item.ImageFilePath || nofindPics) + '" / ></a>';
                    if (i == 0) {
                        htmlDot += '<b class="iBannerCurrentDot"></b>';
                    } else {
                        htmlDot += '<b ></b>';
                    };
                };
                $("#indexBannerImages").empty().html(htmlImg);
                $("#indexBannerCode").empty().html(htmlDot);
            };
        })
    };

    Ajax.ajax({
        url: AjaxUrls.TurnningSpeed.GetTurnningSpeed
    }).done(function (data) {
        //图片轮播
        bannerPlay("indexBannerImages", "indexBannerCode", "b", "indexLeftArrow", "indexRightArrow", "iBannerCurrentDot", parseInt(data) * 1000);
    })
}

/*单数补位*/
function patch(num) {
    return num < 10 ? "0" + num : num;
}

/*04:00:00 分割成时分*/
function formatHourMin(time) {
    var timeArr = time.split(":");
    var newTime = timeArr[0] + ":" + timeArr[1];
    return newTime;
}

/*判断是否为闰年*/
function runYear(year) {
    if ((year % 4 == 0) && (year % 100 != 0 || year % 400 == 0)) {
        var monthArr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    } else {
        var monthArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    }
    return monthArr;
}

/*文件大小 将字节 格式转换*/
function bytesToSize(bytes) {
    if (bytes === 0)
        return "0B";
    var k = 1024;
    var sizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    var i = Math.floor(Math.log(bytes) / Math.log(k));
    return (bytes / Math.pow(k, i)).toPrecision(3) + "" + sizes[i];
}

/*高亮样式*/
function ActiveStyle(pEle, ele, className) {
    $(pEle).delegate(ele, "click", function () {
        $(this).addClass(className).siblings(ele).removeClass(className);
    });
}
/*箭头切换
 * eleId:元素
 * currentClass:反方向箭头背景的类名
 * changeClass:当前箭头背景类名
*/
function arrowChange(eleId, currentClass, changeClass) {
    var newClass = "";
    var ele = $("#" + eleId + "")[0];
    var eleClass = ele.getAttribute("class");
    indexOfIE();
    if (eleClass.indexOf(currentClass) >= 0) {
        newClass = eleClass.replace(currentClass, changeClass);
        ele.className = newClass;
    } else if (eleClass.indexOf(changeClass) >= 0) {
        newClass = eleClass.replace(changeClass, currentClass);
        ele.className = newClass;
    }
}

/*ie8兼容数组indexOf方法*/
function indexOfIE() {
    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function (elt /*, from*/) {
            var len = this.length >>> 0;
            var from = Number(arguments[1]) || 0;
            from = (from < 0) ? Math.ceil(from) : Math.floor(from);
            if (from < 0)
                from += len;
            for (; from < len; from++) {
                if (from in this && this[from] === elt)
                    return from;
            }
            return -1;
        }
    }
}
/*获取班级单选（下拉列表式）
 * eleID:元素ID
 * hdKeyID:查询用元素ID
 * ClassValue:默认值
 * CurrentSchoolID:当前学校id
*/
function getClassList(eleID, hdKeyID, ClassValue, CurrentSchoolID) {
    var hx = 1;
    if (typeof eleID == "string")
        eleID = $("#" + eleID);
    if (typeof hdKeyID == "string")
        hdKeyID = $("#" + hdKeyID);

    Combogride.CreatCombogride(eleID, {
        panelWidth: 420,      //面板宽度
        multiple: false,        //设置多选
        singleSelect: true,
        delay: 500,
        idField: 'ClassID',        //ID字段
        textField: 'ClassName',    //显示的字段
        url: AjaxUrls.ClassUrl.QueryClass,
        queryParams: { "ClassID": "0", "SchoolID": CurrentSchoolID, "QueryCondition": "", "PageSize": "5", "PageNumber": "1" },
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
             { field: 'ClassName', title: '班级名称', width: 120 },//第一列：班级名称
             { field: 'GradeName', title: '所属年级', width: 120 },
             { field: 'PhaseName', title: '所属学段', width: 120 }
             //{ field: 'ClassID', title: '班级ID号', width: 60 }
        ]],
        onLoadSuccess: function () {
            if (ClassValue != "" && hx == 1) {
                eleID.combogrid('setValues', ClassValue);
                hx = -1;
            }
        },

        keyHandler: {
            query: function (keyword) {
                //过滤筛选功能 -- 设置查询参数
                var queryParams = eleID.combogrid("grid").datagrid('options').queryParams;
                queryParams.QueryCondition = keyword;
                queryParams.keyword = keyword;
                queryParams.PageSize = $(".pagination-page-list").val();
                queryParams.PageNumber = "1";
                eleID.combogrid("grid").datagrid('options').queryParams = queryParams;
                //重新加载
                eleID.combogrid("grid").datagrid("reload");
                eleID.combogrid("setValue", keyword);

                //将查询条件存入隐藏域 hdKeyword
                hdKeyID.val(keyword);
            }
        }
    });
    //分页--写法
    var pager = eleID.combogrid("grid").datagrid("getPager");
    if (pager) {
        $(pager).pagination({
            pageNumber: 1,
            pageSize: 5,
            pageList: [5, 10, 20],
            onSelectPage: function (page, rows) {
                var keyTxt = hdKeyID.val();
                var searchData = { ClassID: 0, SchoolID: CurrentSchoolID, QueryCondition: keyTxt, PageSize: rows, PageNumber: page, keyword: keyTxt };
                eleID.combogrid("grid").datagrid('options').queryParams = searchData;
                //重新加载
                eleID.combogrid("grid").datagrid("reload");
            },
            onChangePageSize: function () { },
            onRefresh: function (page, rows) {
                var keyTxt = hdKeyID.val();
                var searchData = { ClassID: 0, SchoolID: CurrentSchoolID, QueryCondition: keyTxt, PageSize: rows, PageNumber: page, keyword: keyTxt };
                eleID.combogrid("grid").datagrid('options').queryParams = searchData;
                //重新加载
                eleID.combogrid("grid").datagrid("reload");
            }
        })
    }
};

/*班级下拉--选中班级，就进行验证（有选择按钮，展示在气泡中）
 * eleID:元素id
 * hdKeyID:隐藏域id
 * ClassValue:默认选中项
 * CurrentSchoolID:学校id
 * arr:当前教师所属班级列表（当选择了这个老师，班级下拉列表的前几位应该展示该老师的相关班级）
*/
function PopClassSelect2(eleID, hdKeyID, ClassValue, CurrentSchoolID, arr) {
    var hx = 1, len;
    if (typeof eleID == "string")
        eleID = $("#" + eleID);
    if (typeof hdKeyID == "string")
        hdKeyID = $("#" + hdKeyID);
    Combogride.CreatCombogride(eleID, {
        panelWidth: 420,      //面板宽度
        multiple: true,        //设置多选
        singleSelect: false,
        delay: 500,
        idField: 'ClassID',        //ID字段
        textField: 'ClassName',    //显示的字段
        url: AjaxUrls.ClassUrl.QueryClass,
        queryParams: { "ClassID": "0", "SchoolID": CurrentSchoolID, "QueryCondition": "", "PageSize": "5", "PageNumber": "1" },
        loadFilter: function (r) {
            if (r.Success) {
                r = r.Value;
            } else {
                return;
            };
            if (arr && arr.length != 0) {
                for (var i = 0; i < arr.length; i++) {
                    navfor: for (var n = 0; n < r.Data.length; n++) {
                        if (arr[i].ClassID == r.Data[n].ClassID) {
                            r.Data.splice(n, 1);
                            break navfor;
                        }
                    };
                };

                $(arr).each(function (m, item) {
                    r.Data.unshift(item);
                })
            };
            len = r.Data.length;
            return {
                total: r.TotalCount,
                rows: r.Data
            };
        },
        columns: [[
             { field: 'ClassName', title: '班级名称', width: 90 },//第一列：班级名称
             { field: 'GradeName', title: '所属年级', width: 90 },
             { field: 'PhaseName', title: '所属学段', width: 80 },
              { field: 'ClassID', title: '选择按钮', width: 100 }
        ]],
        onLoadSuccess: function () {
            if (ClassValue != "" && hx == 1) {
                eleID.combogrid('setValues', ClassValue);
                hx = -1;
            };

            if (len > 0) {
                $(".datagrid-btable td[field='ClassID']").empty().append("<button class='click_btn'>选择</button>");
            };

        },
        onClickRow: function (index, row) {//点击事件--将筛选值清空
            var keyWord = hdKeyID.val();
            if (keyWord != "") {
                var values = eleID.combogrid("getValues");
                $.each(values, function (index, ele) {
                    if (keyWord == ele) {
                        values.splice(index, 1);
                    }
                });
                eleID.combogrid("setValues", values);
            }
        },
        keyHandler: {
            query: function (keyword) {
                //过滤筛选功能 -- 设置查询参数
                var queryParams = eleID.combogrid("grid").datagrid('options').queryParams;
                queryParams.QueryCondition = keyword;
                queryParams.keyword = keyword;
                queryParams.PageSize = $(".pagination-page-list").val();
                queryParams.PageNumber = "1";
                eleID.combogrid("grid").datagrid('options').queryParams = queryParams;
                //重新加载
                eleID.combogrid("grid").datagrid("reload");
                eleID.combogrid("setValue", keyword);

                //将查询条件存入隐藏域 hdKeyword
                hdKeyID.val(keyword);
            }
        },
        onSelect: function (index, row) {
            var input = $(".classes_list_wrap_row input");
            $(".classes_list_wrap_row").show();
            var repeat = false;
            $(input).each(function (n, obj) {
                if ($(obj).val() == row.ClassID) {
                    Dialogue.Msg("您已选过该班级");
                    eleID.combogrid("setValues", "");
                    repeat = true;
                    return;
                };
            })

            if (repeat) {
                return;
            };

            var studentHtml = ' <div class="classes_item_wrap has_choose items_item_wrap" >' +
                    '<input name="ClassID" type="hidden" value="' + row.ClassID + '" />' +
                    '<img  class="delete" src="/images/backstage/activeClassClose_03.png " />' +
                    '<label><p class="class_name">' + row.ClassName + '</p>' +
                 '</div>';
            $(".classes_list_wrap").append(studentHtml);
            eleID.combogrid("setValues", "");
        }
    });
    //分页--写法
    var pager = eleID.combogrid("grid").datagrid("getPager");
    if (pager) {
        $(pager).pagination({
            pageNumber: 1,
            pageSize: 5,
            pageList: [5, 10, 20],
            onSelectPage: function (page, rows) {
                var keyTxt = hdKeyID.val();
                var searchData = { ClassID: 0, SchoolID: CurrentSchoolID, QueryCondition: keyTxt, PageSize: rows, PageNumber: page, keyword: keyTxt };
                eleID.combogrid("grid").datagrid('options').queryParams = searchData;
                //重新加载
                eleID.combogrid("grid").datagrid("reload");
            },
            onChangePageSize: function () { },
            onRefresh: function (page, rows) {
                var keyTxt = hdKeyID.val();
                var searchData = { ClassID: 0, SchoolID: CurrentSchoolID, QueryCondition: keyTxt, PageSize: rows, PageNumber: page, keyword: keyTxt };
                eleID.combogrid("grid").datagrid('options').queryParams = searchData;
                //重新加载
                eleID.combogrid("grid").datagrid("reload");
            }
        })
    }
};

/* 学校联动的年级单选
 * ele:元素id
 * PhaseListData:学段数据
*/
function selectSchoolGrade(ele, PhaseListData) {
    var newData = [];
    for (var i = 0; i < PhaseListData.length; i++) {
        var obj = PhaseListData[i];
        for (var j = 0; j < obj.GradeList.length; j++) {
            var obj2 = obj.GradeList[j];
            newData.push({
                "GradeID": obj2.GradeID,
                "GradeName": obj2.GradeName,
                "PhaseID": obj.PhaseID,
                "PhaseName": obj.PhaseName,
            })
        }
    };
    var hx = 1, len;
    if (typeof ele == "string")
        ele = $("#" + ele);
    Combogride.CreatCombogride(ele, {
        pagination: false,
        singleSelect: true,
        panelWidth: 410,      //面板宽度
        multiple: false,        //设置多选
        delay: 500,
        idField: 'GradeID',        //ID字段
        textField: 'GradeName',    //显示的字段
        data: newData,
        queryParams: { "QueryCondition": "", "PageSize": "5", "PageNumber": "1" },
        columns: [[
             { field: 'GradeName', title: '年级名称', width: 140 },
             { field: 'PhaseName', title: '所属学段', width: 140 },
             { field: 'GradeID', title: '年级ID', width: 80 }
        ]]
    });
}

/* 年级单选
 * ele:元素id
 * hdKey:隐藏域id
 * ClassValue:默认选中项
 * schoolid:学校id
*/
function selectSingleGrade(ele, hdKey, ClassValue, schoolid) {
    var hx = 1, len;
    if (typeof ele == "string")
        ele = $("#" + ele);

    if (typeof hdKey == "string")
        hdKey = $("#" + hdKey);
    Combogride.CreatCombogride(ele, {
        panelWidth: 410,      //面板宽度
        pagination: false,
        multiple: false,        //设置多选
        singleSelect: true,
        delay: 500,
        idField: 'GradeID',        //ID字段
        textField: 'GradeName',    //显示的字段
        url: AjaxUrls.GradeUrls.GetGrades,
        queryParams: { "GradeID": 0, "SchoolID": schoolid || CurrentSchoolID, "QueryCondition": "" },
        loadFilter: function (r) {
            if (r.Success) {
                r = r.Value;
            } else {
                Dialogue.Error(r.Message);
            };
            len = r.length;
            return {            // 返回的数据结构需要解析一下
                total: r.length,
                rows: r
            };
        },
        columns: [[
             { field: 'GradeName', title: '年级名称', width: 140 },//第一列：班级名称
             { field: 'PhaseName', title: '所属学段', width: 140 },
             { field: 'GradeID', title: '年级ID', width: 80 }
        ]],
        onLoadSuccess: function () {
            if (ClassValue != "" && hx == 1) {
                ele.combogrid('setValues', ClassValue);//设置默认值
                hx = -1;
            };
        },
        onClickRow: function (index, row) {//点击事件--将筛选值清空
            var keyWord = hdKey.val();//获取到筛选内容
            if (keyWord != "") {
                var values = ele.combogrid("getValues");
                $.each(values, function (index, ele) {
                    if (keyWord == ele) {
                        values.splice(index, 1);
                    };
                });
                ele.combogrid("setValues", values);
            }
        },
        keyHandler: {
            query: function (keyword) {
                //过滤筛选功能 -- 设置查询参数
                var queryParams = ele.combogrid("grid").datagrid('options').queryParams;
                queryParams.QueryCondition = keyword;
                queryParams.keyword = keyword;
                queryParams.PageSize = $(".pagination-page-list").val();
                queryParams.PageNumber = "1";
                ele.combogrid("grid").datagrid('options').queryParams = queryParams;
                //重新加载
                ele.combogrid("grid").datagrid("reload");
                ele.combogrid("setValue", keyword);

                //将查询条件存入隐藏域 hdKeyword
                hdKey.val(keyword);
            }
        }
    });
}

/* 年级气泡多选，（老师管理页面）,非多选
 * ele:元素id
 * hdKey:隐藏域id
 * ClassValue:默认选中项
*/
function PopGradeSelectNoValidate(ele, hdKey, ClassValue) {
    var hx = 1, len;
    if (typeof ele == "string")
        ele = $("#" + ele);

    if (typeof hdKey == "string")
        hdKey = $("#" + hdKey);
    Combogride.CreatCombogride(ele, {
        panelWidth: 410,      //面板宽度
        pagination: false,
        multiple: true,        //设置多选
        singleSelect: false,
        delay: 500,
        idField: 'GradeID',        //ID字段
        textField: 'GradeName',    //显示的字段
        url: AjaxUrls.GradeUrls.GetGrades,
        queryParams: { "GradeID": 0, "SchoolID": CurrentSchoolID, "QueryCondition": "" },
        loadFilter: function (r) {
            if (r.Success) {
                r = r.Value;
            } else {
                Dialogue.Error(r.Message);
            };
            len = r.length;
            return {            // 返回的数据结构需要解析一下
                total: r.length,
                rows: r
            };
        },
        columns: [[
             { field: 'GradeName', title: '年级名称', width: 120 },//第一列：班级名称
             { field: 'PhaseName', title: '所属学段', width: 120 },
             { field: 'GradeID', title: '选择按钮', width: 60 }
        ]],
        onLoadSuccess: function () {
            if (ClassValue != "" && hx == 1) {
                ele.combogrid('setValues', ClassValue);//设置默认值
                hx = -1;
            };
            if (len > 0) {
                $(".datagrid-btable td[field='GradeID']").empty().append("<button class='click_btn'>选择</button>");
            };
        },
        onClickRow: function (index, row) {//点击事件--将筛选值清空
            var keyWord = hdKey.val();//获取到筛选内容
            if (keyWord != "") {
                var values = ele.combogrid("getValues");
                $.each(values, function (index, ele) {
                    if (keyWord == ele) {
                        values.splice(index, 1);
                    };
                });
                ele.combogrid("setValues", values);
            }
        },
        keyHandler: {
            query: function (keyword) {
                //过滤筛选功能 -- 设置查询参数
                var queryParams = ele.combogrid("grid").datagrid('options').queryParams;
                queryParams.QueryCondition = keyword;
                queryParams.keyword = keyword;
                queryParams.PageSize = $(".pagination-page-list").val();
                queryParams.PageNumber = "1";
                ele.combogrid("grid").datagrid('options').queryParams = queryParams;
                //重新加载
                ele.combogrid("grid").datagrid("reload");
                ele.combogrid("setValue", keyword);

                //将查询条件存入隐藏域 hdKeyword
                hdKey.val(keyword);
            }
        },
        onSelect: function (index, row) {
            var input = $(".grades_list_wrap_row  input");
            $(".grades_list_wrap_row").show();
            var repeat = false;
            $(input).each(function (n, obj) {
                if ($(obj).val() == row.GradeID) {
                    Dialogue.Msg("您已选过该年级");
                    ele.combogrid("setValues", "");
                    repeat = true;
                    return;
                };
            })

            if (repeat) {
                return;
            };

            var studentHtml = ' <div class="grades_item_wrap has_choose items_item_wrap" >' +
                    '<input name="GradeID" type="hidden" value="' + row.GradeID + '" />' +
                    '<img  class="delete" src="/images/backstage/activeClassClose_03.png " />' +
                    '<label><p class="class_name">' + row.GradeName + '</p>' +
                 '</div>';
            $(".grades_list_wrap").append(studentHtml);
            ele.combogrid("setValues", "");
        }
    });
};

/* 学生下拉多选（气泡多选）
 * eleID:元素id
 * hdKeyID:隐藏域id
 * showValue:默认选中项
 * CurrentSchoolID:学校id
*/
function SchedulePopStudentSelect(eleID, hdKeyID, showValue, CurrentSchoolID) {
    var hx = 1, len;
    if (typeof eleID == "string")
        eleID = $("#" + eleID);

    if (typeof hdKeyID == "string")
        hdKeyID = $("#" + hdKeyID);

    Combogride.CreatCombogride(eleID, {
        panelWidth: 430,      //面板宽度
        multiple: true,        //设置多选
        singleSelect: false,
        delay: 500,
        idField: 'StudentID',        //ID字段
        textField: 'StudentName',    //显示的字段
        url: AjaxUrls.StudentUrls.QueryStudent,
        queryParams: { "SchoolID": CurrentSchoolID, "QueryCondition": "", "PageSize": "5", "PageNumber": "1" },
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
             { field: 'StudentName', title: '学生姓名', width: 120 },
             { field: 'StudentNo', title: '学生学号', width: 150 },
             { field: 'StudentID', title: '选择按钮', width: 100 }
        ]],
        onLoadSuccess: function () {
            if (showValue != "" && hx == 1) {
                eleID.combogrid('setValues', showValue);//设置默认值
                hx = -1;
            };
            if (len > 0) {
                $(".datagrid-btable td[field='StudentID']").empty().append("<button class='click_btn'>选择</button>");
            }
        },
        onClickRow: function (index, row) {
            var keyWord = hdKeyID.val();
            if (keyWord != "") {
                var values = eleID.combogrid("getValues");
                $.each(values, function (index, ele) {
                    if (keyWord == ele) {
                        values.splice(index, 1);
                    }
                });
                eleID.combogrid("setValues", values);
            }
        },
        keyHandler: {
            query: function (keyword) {
                //过滤筛选功能 -- 设置查询参数
                var queryParams = eleID.combogrid("grid").datagrid('options').queryParams;
                queryParams.QueryCondition = keyword;
                queryParams.keyword = keyword;
                queryParams.PageSize = $(".pagination-page-list").val();
                queryParams.PageNumber = "1";
                eleID.combogrid("grid").datagrid('options').queryParams = queryParams;
                //重新加载
                eleID.combogrid("grid").datagrid("reload");
                eleID.combogrid("setValue", keyword);

                //将查询条件存入隐藏域 hdKeyword
                hdKeyID.val(keyword);
            }
        },
        //学生表单验证，看当前学生是否空闲
        onSelect: function (index, row) {
            var input = $(".students_list_wrap input[type='checkbox']");
            $(".students_list_wrap_row").show();
            var repeat = false;
            $(input).each(function (n, obj) {
                if ($(obj).attr("studentsID") == row.StudentID) {
                    Dialogue.Msg("您已选过该学生");
                    eleID.combogrid("setValues", "");
                    repeat = true;
                    return;
                };
            })

            if (repeat) {
                return;
            };

            var studentHtml = ' <div class="students_item_wrap has_choose" >' +
                    '<input type="hidden" value="' + row.StudentID + '" />' +
                    '<img  class="delete" src="/images/backstage/activeClassClose_03.png " />' +
                    '<label><p class="student_name">' + row.StudentName + '</p>' +
                    '<div class="study_hall">' +
                       '<input class="check"  type="checkbox" studentsID=' + row.StudentID + '  />自修</label>' +
                    '</div>' +
                 '</div>';
            $(".students_list_wrap").append(studentHtml);
            eleID.combogrid("setValues", "");
        }
    });
    //分页--写法
    var pager = eleID.combogrid("grid").datagrid("getPager");
    if (pager) {
        $(pager).pagination({
            pageNumber: 1,
            pageSize: 5,
            pageList: [5, 10, 20],
            onSelectPage: function (page, rows) {
                var keyTxt = hdKeyID.val();
                var searchData = { SchoolID: CurrentSchoolID, QueryCondition: keyTxt, PageSize: rows, PageNumber: page, keyword: keyTxt };
                eleID.combogrid("grid").datagrid('options').queryParams = searchData;
                //重新加载
                eleID.combogrid("grid").datagrid("reload");
            },
            onChangePageSize: function () { },
            onRefresh: function (page, rows) {
                var keyTxt = hdKeyID.val();
                var searchData = { SchoolID: CurrentSchoolID, QueryCondition: keyTxt, PageSize: rows, PageNumber: page, keyword: keyTxt };
                eleID.combogrid("grid").datagrid('options').queryParams = searchData;
                //重新加载
                eleID.combogrid("grid").datagrid("reload");
            }
        })
    }
};


/*老师下拉多选（气泡多选）
 * eleID:元素id
 * hdKeyID:隐藏域id
 * showValue:默认选中项
 * CurrentSchoolID:学校id
*/
function SchedulePopTeacherSelect(eleID, hdKeyID, showValue, CurrentSchoolID,scheduleID,obj) {
    var hx = 1, len;
    if (typeof eleID == "string")
        eleID = $("#" + eleID);

    if (typeof hdKeyID == "string")
        hdKeyID = $("#" + hdKeyID);

    Combogride.CreatCombogride(eleID, {
        panelWidth: 430,      //面板宽度
        multiple: true,        //设置多选
        singleSelect: false,
        delay: 500,
        idField: 'TeacherID',        //ID字段
        textField: 'TeacherName',    //显示的字段
        url: AjaxUrls.TeacherUrl.QueryTeacher,
        queryParams: { "SchoolID": CurrentSchoolID, "QueryCondition": "", "PageSize": "5", "PageNumber": "1" },
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
             { field: 'TeacherName', title: '教师名称', width: 120 },
             { field: 'TeacherNo', title: '教师编号', width: 150 },
             { field: 'UserID', title: '选择教师', width: 100 }
        ]],
        onLoadSuccess: function () {
            if (showValue != "" && hx == 1) {
                eleID.combogrid('setValues', showValue);//设置默认值
                hx = -1;
            };
            if (len > 0) {
                $(".datagrid-btable td[field='UserID']").empty().append("<button class='click_btn'>选择</button>");
            }
        },
        onClickRow: function (index, row) {
            var keyWord = hdKeyID.val();
            if (keyWord != "") {
                var values = eleID.combogrid("getValues");
                $.each(values, function (index, ele) {
                    if (keyWord == ele) {
                        values.splice(index, 1);
                    }
                });
                eleID.combogrid("setValues", values);
            }
        },
        keyHandler: {
            query: function (keyword) {
                //过滤筛选功能 -- 设置查询参数
                var queryParams = eleID.combogrid("grid").datagrid('options').queryParams;
                queryParams.QueryCondition = keyword;
                queryParams.keyword = keyword;
                queryParams.PageSize = $(".pagination-page-list").val();
                queryParams.PageNumber = "1";
                eleID.combogrid("grid").datagrid('options').queryParams = queryParams;
                //重新加载
                eleID.combogrid("grid").datagrid("reload");
                eleID.combogrid("setValue", keyword);

                //将查询条件存入隐藏域 hdKeyword
                hdKeyID.val(keyword);
            }
        },
        //学生表单验证，看当前学生是否空闲
        onSelect: function (index, row) {
            if (obj == "schedule") {//分享课表
                var ShareAjax = AjaxUrls.ScheduleUrl.SharSchedule;
                var ShareData = { ScheduleID: scheduleID, UserID: row.UserID };
            } else if (obj == "video") {//分享视频
                var ShareAjax = AjaxUrls.OperateVideo.SharVideo;
                var ShareData = { VideoID: scheduleID, UserID: row.UserID };
            }
            var input = $(".students_list_wrap input[type='checkbox']");
            var repeat = false;
            $(input).each(function (n, obj) {
                if ($(obj).attr("studentsID") == row.UserID) {
                    Dialogue.Msg("您已选过该老师");
                    eleID.combogrid("setValues", "");
                    repeat = true;
                    return;
                };
            })

            if (repeat) {
                return;
            };

            var studentHtml = ' <div class="students_item_wrap has_choose" id="teacherDiv_' + row.UserID + '">' +
                    '<input type="hidden" value="' + row.UserID + '" />' +
                    '<img  class="delete" src="/images/backstage/activeClassClose_03.png" id="teacher_' + row.UserID + '"/>' +
                    '<label><p class="student_name">' + row.TeacherName + '</p>' +
                    '<div class="study_hall">' +
                       '<input class="check hidee" type="checkbox" studentsID=' + row.UserID + ' value=' + row.UserID + '/></label>' +
                       '<input name="UserID" type="hidden" value="' + row.UserID + '"/>' +
                    '</div>' +
                 '</div>';
            $(".students_list_wrap").append(studentHtml);
            eleID.combogrid("setValues", "");
            Ajax.ajax({
                url: ShareAjax,
                data: ShareData
            }).done(function (data) {
                Dialogue.Success("共享给" + row.TeacherName + "老师成功！");
                if ($(".students_list_wrap .students_item_wrap").length > 0) {
                    $(".students_list_wrap_row").css({ "display": "inline-block" });
                };
            }).fail(function (data) {
                Dialogue.Msg(data);
            });
        }
    });
    //分页--写法
    var pager = eleID.combogrid("grid").datagrid("getPager");
    if (pager) {
        $(pager).pagination({
            pageNumber: 1,
            pageSize: 5,
            pageList: [5, 10, 20],
            onSelectPage: function (page, rows) {
                var keyTxt = hdKeyID.val();
                var searchData = { SchoolID: CurrentSchoolID, QueryCondition: keyTxt, PageSize: rows, PageNumber: page, keyword: keyTxt };
                eleID.combogrid("grid").datagrid('options').queryParams = searchData;
                //重新加载
                eleID.combogrid("grid").datagrid("reload");
            },
            onChangePageSize: function () { },
            onRefresh: function (page, rows) {
                var keyTxt = hdKeyID.val();
                var searchData = { SchoolID: CurrentSchoolID, QueryCondition: keyTxt, PageSize: rows, PageNumber: page, keyword: keyTxt };
                eleID.combogrid("grid").datagrid('options').queryParams = searchData;
                //重新加载
                eleID.combogrid("grid").datagrid("reload");
            }
        })
    }
};

/*课程下拉单选 
 * eleID:元素id
 * hdKeyID:隐藏域id
 * showValue:默认选中项
 * CurrentSchoolID:学校id
 * arr:当前教师所属的课程列表arr
*/
function CourseListSelect(eleID, hdKeyID, showValue, CurrentSchoolID, arr) {
    var hx = 1;
    if (typeof eleID == "string")
        eleID = $("#" + eleID);

    if (typeof hdKeyID == "string")
        hdKeyID = $("#" + hdKeyID);
    Combogride.CreatCombogride(eleID, {
        panelWidth: 420,      //面板宽度
        pagination: true,
        singleSelect: true,
        delay: 500,
        idField: 'CourseID',        //ID字段
        textField: 'CourseName',    //显示的字段
        url: AjaxUrls.CourseUrl.SelectUrl,
        queryParams: { "SchoolID": CurrentSchoolID, "QueryCondition": "", "PageSize": "5", "PageNumber": "1" },
        loadFilter: function (r) {
            if (r.Success) {
                r = r.Value;
            } else {
                return;
            };
            if (arr && arr.length != 0) {
                for (var i = 0; i < arr.length; i++) {
                    navfor: for (var n = 0; n < r.Data.length; n++) {
                        if (arr[i].CourseID == r.Data[n].CourseID) {
                            r.Data.splice(n, 1);
                            break navfor;
                        }
                    };
                };
                $(arr).each(function (m, item) {
                    r.Data.unshift(item);
                })
            };
            return {            // 返回的数据结构需要解析一下
                total: r.TotalCount,
                rows: r.Data
            };
        },
        columns: [[
             { field: 'CourseName', title: '课程名称', width: 165 },
              { field: 'GradeName', title: '所属年级', width: 145 },
             { field: 'CourseNo', title: '课程编号', width: 70 }
        ]],
        onLoadSuccess: function () {
            if (showValue != "" && hx == 1) {
                eleID.combogrid('setValue', showValue);//设置默认值
                hx = -1;
            }
        },
        keyHandler: {
            query: function (keyword) {
                //过滤筛选功能 -- 设置查询参数
                var queryParams = eleID.combogrid("grid").datagrid('options').queryParams;
                queryParams.QueryCondition = keyword;
                queryParams.keyword = keyword;
                queryParams.PageSize = $(".pagination-page-list").val();
                queryParams.PageNumber = "1";
                eleID.combogrid("grid").datagrid('options').queryParams = queryParams;
                //重新加载
                eleID.combogrid("grid").datagrid("reload");
                eleID.combogrid("setValue", keyword);

                //将查询条件存入隐藏域 hdKeyword
                hdKeyID.val(keyword);
            }
        },
        onClickRow: function (index, row) {
            if (row.CourseID) {
                $("#pop_wrap input[name=ISAddAllClass]").prop("checked", "checked");
                $("#courseWarning").hide();
            };
        }
    });
    //分页--写法
    var pager = eleID.combogrid("grid").datagrid("getPager");
    if (pager) {
        $(pager).pagination({
            pageNumber: 1,
            pageSize: 5,
            pageList: [5, 10, 20],
            onSelectPage: function (page, rows) {
                var keyTxt = hdKeyID.val();
                var searchData = { SchoolID: CurrentSchoolID, QueryCondition: keyTxt, PageSize: rows, PageNumber: page, keyword: keyTxt };
                eleID.combogrid("grid").datagrid('options').queryParams = searchData;
                //重新加载
                eleID.combogrid("grid").datagrid("reload");
            },
            onChangePageSize: function () { },
            onRefresh: function (page, rows) {
                var keyTxt = hdKeyID.val();
                var searchData = { SchoolID: CurrentSchoolID, QueryCondition: keyTxt, PageSize: rows, PageNumber: page, keyword: keyTxt };
                eleID.combogrid("grid").datagrid('options').queryParams = searchData;
                ////重新加载
                eleID.combogrid("grid").datagrid("reload");
            }
        })
    }
};


/*课程下拉单选(密云) cy20181008  
 * eleID:元素id
 * hdKeyID:隐藏域id
 * showValue:默认选中项
 * CurrentSchoolID:学校id
 * arr:当前教师所属的课程列表arr
*/
function MiyunCourseListSelect(eleID, hdKeyID, showValue, CurrentSchoolID, arr) {
    var hx = 1;
    if (typeof eleID == "string")
        eleID = $("#" + eleID);

    if (typeof hdKeyID == "string")
        hdKeyID = $("#" + hdKeyID);
    Combogride.CreatCombogride(eleID, {
        panelWidth: 420,      //面板宽度
        pagination: true,
        singleSelect: true,
        delay: 500,
        idField: 'CourseID',        //ID字段
        textField: 'CourseName',    //显示的字段
        url: AjaxUrls.MiYun.CourseQueryL,
        queryParams: { "SchoolID": CurrentSchoolID, "QueryCondition": "", "PageSize": "5", "PageNumber": "1" },
        loadFilter: function (r) {
            if (r.Success) {
                r = r.Value;
            } else {
                return;
            };
            if (arr && arr.length != 0) {
                for (var i = 0; i < arr.length; i++) {
                    navfor: for (var n = 0; n < r.Data.length; n++) {
                        if (arr[i].CourseID == r.Data[n].CourseID) {
                            r.Data.splice(n, 1);
                            break navfor;
                        }
                    };
                };
                $(arr).each(function (m, item) {
                    r.Data.unshift(item);
                })
            };
            return {            // 返回的数据结构需要解析一下
                total: r.TotalCount,
                rows: r.Data
            };
        },
        columns: [[
             { field: 'CourseName', title: '课程名称', width: 165 },
              { field: 'GradeName', title: '所属年级', width: 145 },
             { field: 'CourseNo', title: '课程编号', width: 70 }
        ]],
        onLoadSuccess: function () {
            if (showValue != "" && hx == 1) {
                eleID.combogrid('setValue', showValue);//设置默认值
                hx = -1;
            }
        },
        keyHandler: {
            query: function (keyword) {
                //过滤筛选功能 -- 设置查询参数
                var queryParams = eleID.combogrid("grid").datagrid('options').queryParams;
                queryParams.QueryCondition = keyword;
                queryParams.keyword = keyword;
                queryParams.PageSize = $(".pagination-page-list").val();
                queryParams.PageNumber = "1";
                eleID.combogrid("grid").datagrid('options').queryParams = queryParams;
                //重新加载
                eleID.combogrid("grid").datagrid("reload");
                eleID.combogrid("setValue", keyword);

                //将查询条件存入隐藏域 hdKeyword
                hdKeyID.val(keyword);
            }
        },
        onClickRow: function (index, row) {
            if (row.CourseID) {
                $("#pop_wrap input[name=ISAddAllClass]").prop("checked", "checked");
                $("#courseWarning").hide();
            };
        }
    });
    //分页--写法
    var pager = eleID.combogrid("grid").datagrid("getPager");
    if (pager) {
        $(pager).pagination({
            pageNumber: 1,
            pageSize: 5,
            pageList: [5, 10, 20],
            onSelectPage: function (page, rows) {
                var keyTxt = hdKeyID.val();
                var searchData = { SchoolID: CurrentSchoolID, QueryCondition: keyTxt, PageSize: rows, PageNumber: page, keyword: keyTxt };
                eleID.combogrid("grid").datagrid('options').queryParams = searchData;
                //重新加载
                eleID.combogrid("grid").datagrid("reload");
            },
            onChangePageSize: function () { },
            onRefresh: function (page, rows) {
                var keyTxt = hdKeyID.val();
                var searchData = { SchoolID: CurrentSchoolID, QueryCondition: keyTxt, PageSize: rows, PageNumber: page, keyword: keyTxt };
                eleID.combogrid("grid").datagrid('options').queryParams = searchData;
                ////重新加载
                eleID.combogrid("grid").datagrid("reload");
            }
        })
    }
};

/* 课程气泡多选
 * eleID:元素id
 * hdKeyID:隐藏域id
 * showValue:默认选中项
*/
function PopCourseSelect(eleID, hdKeyID, showValue) {
    var hx = 1, len;
    if (typeof eleID == "string")
        eleID = $("#" + eleID);

    if (typeof hdKeyID == "string")
        hdKeyID = $("#" + hdKeyID);

    Combogride.CreatCombogride(eleID, {
        panelWidth: 410,      //面板宽度
        pagination: true,
        multiple: true,        //设置多选
        singleSelect: false,
        delay: 500,
        idField: 'CourseID',        //ID字段
        textField: 'CourseName',    //显示的字段
        url: AjaxUrls.CourseUrl.SelectUrl,
        queryParams: { "SchoolID": CurrentSchoolID, "QueryCondition": "", "PageSize": "5", "PageNumber": "1" },
        loadFilter: function (r) {
            if (r.Success) {
                r = r.Value;
            } else {
                Dialogue.Error(r.Message);
            };
            len = r.Data.length;

            return {            // 返回的数据结构需要解析一下
                total: r.TotalCount,
                rows: r.Data
            };
        },
        columns: [[
             { field: 'CourseName', title: '课程名称', width: 140 },
             { field: 'CourseNo', title: '课程编号', width: 120 },
             { field: 'CourseID', title: '选择按钮', width: 100 }
        ]],
        onLoadSuccess: function () {
            if (showValue != "" && hx == 1) {
                eleID.combogrid('setValues', showValue);//设置默认值
                hx = -1;
            };
            if (len > 0) {
                $(".datagrid-btable td[field='CourseID']").empty().append("<button class='click_btn'>选择</button>");
            };
        },
        onClickRow: function (index, row) {//点击事件--将筛选值清空
            var keyWord = hdKeyID.val();//获取到筛选内容
            if (keyWord != "") {
                //获取到选中的值
                var values = eleID.combogrid("getValues");
                $.each(values, function (index, ele) {
                    if (keyWord == ele) {
                        values.splice(index, 1);
                    };
                });
                eleID.combogrid("setValues", values);
            }
        },
        keyHandler: {
            query: function (keyword) {
                //过滤筛选功能 -- 设置查询参数
                var queryParams = eleID.combogrid("grid").datagrid('options').queryParams;
                queryParams.QueryCondition = keyword;
                queryParams.keyword = keyword;
                queryParams.PageSize = $(".pagination-page-list").val();
                queryParams.PageNumber = "1";
                eleID.combogrid("grid").datagrid('options').queryParams = queryParams;
                eleID.combogrid("grid").datagrid("reload");
                eleID.combogrid("setValue", keyword);

                //将查询条件存入隐藏域 hdKeyword
                hdKeyID.val(keyword);
            }
        },
        onSelect: function (index, row) {
            var input = $(".courses_list_wrap_row   input");
            $(".courses_list_wrap_row ").show();
            var repeat = false;
            $(input).each(function (n, obj) {
                if ($(obj).val() == row.CourseID) {
                    Dialogue.Msg("您已选过该课程");
                    eleID.combogrid("setValues", "");
                    repeat = true;
                    return;
                };
            })

            if (repeat) {
                return;
            };

            var studentHtml = ' <div class="courses_item_wrap has_choose items_item_wrap" >' +
                    '<input name="CourseID" type="hidden" value="' + row.CourseID + '" />' +
                    '<img  class="delete" src="/images/backstage/activeClassClose_03.png " />' +
                    '<label><p class="subject_name">' + row.CourseName + '</p>' +
                 '</div>';
            $(".courses_list_wrap").append(studentHtml);
            eleID.combogrid("setValues", "");
        }

    });
    //分页--写法
    var pager = eleID.combogrid("grid").datagrid("getPager");
    if (pager) {
        $(pager).pagination({
            pageNumber: 1,
            pageSize: 5,
            pageList: [5, 10, 20],
            onSelectPage: function (page, rows) {
                var keyTxt = hdKeyID.val();
                var searchData = { SchoolID: CurrentSchoolID, QueryCondition: keyTxt, PageSize: rows, PageNumber: page, keyword: keyTxt };
                eleID.combogrid("grid").datagrid('options').queryParams = searchData;
                //重新加载
                eleID.combogrid("grid").datagrid("reload");
            },
            onChangePageSize: function () { },
            onRefresh: function (page, rows) {
                var keyTxt = hdKeyID.val();
                var searchData = { SchoolID: CurrentSchoolID, QueryCondition: keyTxt, PageSize: rows, PageNumber: page, keyword: keyTxt };
                eleID.combogrid("grid").datagrid('options').queryParams = searchData;
                ////重新加载
                eleID.combogrid("grid").datagrid("reload");
            }
        })
    }
};

/* 主讲教师下拉单选（班级和课程下拉数据联动变化） 
 * eleID:元素id值，
 * hdKeyID:隐藏域id值，
 * showValue:默认选中项，
 * CurrentSchoolID:学校id，
 * notHasClass：不需要加载班级
*/
function TeacherListSelect(eleID, hdKeyID, showValue, CurrentSchoolID, notHasClass) {
    var hx = 1, len;

    if (typeof eleID == "string")
        eleID = $("#" + eleID);

    if (typeof hdKeyID == "string")
        hdKeyID = $("#" + hdKeyID);

    Combogride.CreatCombogride(eleID, {
        panelWidth: 420,      //面板宽度
        pagination: true,
        multiple: true,        //设置多选
        singleSelect: false, //设置默认选中项
        delay: 500,
        idField: 'TeacherID',        //ID字段
        textField: 'TeacherName',    //显示的字段
        url: AjaxUrls.TeacherUrl.QueryTeacher,
        queryParams: { "SchoolID": CurrentSchoolID, "QueryCondition": "", "PageSize": "5", "PageNumber": "1" },
        loadFilter: function (r) {
            if (r.Success) {
                r = r.Value;
            } else {
                return;
            };
            len = r.Data.length;
            return {            // 返回的数据结构需要解析一下
                total: r.TotalCount,
                rows: r.Data
            };
        },
        columns: [[
             { field: 'TeacherName', title: '教师名称', width: 130 },
             { field: 'TeacherNo', title: '教师编号', width: 128 },
             { field: 'TeacherID', title: '选择按钮', width: 100 }
        ]],
        onLoadSuccess: function () {
            if (showValue != "" && hx == 1) {
                eleID.combogrid('setValues', showValue);//设置默认值
                hx = -1;
            };
            if (len > 0) {
                $(".datagrid-btable td[field='TeacherID']").empty().append("<button class='click_btn'>选择</button>");
            };
        },
        keyHandler: {
            query: function (keyword) {
                //过滤筛选功能 -- 设置查询参数
                var queryParams = eleID.combogrid("grid").datagrid('options').queryParams;
                queryParams.QueryCondition = keyword;
                queryParams.keyword = keyword;
                queryParams.PageSize = $(".pagination-page-list").val();
                queryParams.PageNumber = "1";
                eleID.combogrid("grid").datagrid('options').queryParams = queryParams;
                //重新加载
                eleID.combogrid("grid").datagrid("reload");
                eleID.combogrid("setValue", keyword);

                //将查询条件存入隐藏域 hdKeyword
                hdKeyID.val(keyword);
            }
        },
        onSelect: function (index, row) {
            $(".teachers_list_wrap_row ").show();
            $("#teachWarning").html("请先选择开始时间和结束时间").hide();
            var input = $(".teachers_list_wrap input[type='checkbox']");
            var state = "";
            if (input.length == 0) {
                state = "checked='checked'";
            };

            var repeat = false;
            $(input).each(function (n, obj) {
                if ($(obj).attr("teacherID") == row.TeacherID) {
                    Dialogue.Msg("您已选过该教师");
                    eleID.combogrid("setValues", "");
                    repeat = true;
                    return;
                };
            })

            if (repeat) {
                return;
            };
            var teacherHtml = ' <div class="items_item_wrap has_choose" >' +
                                               '<input type="hidden" value="' + row.TeacherID + '" />' +
                                               '<img  class="delete" src="/images/backstage/activeClassClose_03.png " />' +
                                               '<label><p class="items_name">' + row.TeacherName + '</p>' +
                                               '<div class="study_hall">' +
                                                  '<input class="check"  teacherID="' + row.TeacherID + '" type="checkbox"  ' + state + '  />主讲教师</label>' +
                                               '</div>' +
                                            '</div>';
            $(".teachers_list_wrap ").append(teacherHtml);
            $("#teacherListWarning").hide();
            //主讲教师是单选  获取教师id或输入名称
            var teachVal = eleID.combogrid("getValue");
            var teachget = eleID.combogrid("grid").datagrid("getSelected");//编辑时取不到默认选中的值
            var teachNum = parseInt(teachVal) + "";
            eleID.combogrid("setValues", "   ");

            if (teachNum != "NaN") {//有id
                $("#pop_wrap .teachForm").val(teachNum);
                Ajax.ajax({
                    url: AjaxUrls.TeacherUrl.QueryTeacher,
                    data: { TeacherID: teachNum },
                    notloadingImg: true
                }).done(function (data) {
                    CourseListSelect("courseg", "courseKey", "", CurrentSchoolID, data.CourseList);
                    if (!notHasClass) {
                        //班级
                        PopClassSelect2("classg", "hdKeyword", "", CurrentSchoolID, data.ClassList);
                        $(".classes_list_wrap ").on("click", ".delete", function () {
                            $(this).parent().remove();
                            if ($(".classes_list_wrap .items_item_wrap").length == 0) {
                                $(".classes_list_wrap_row ").hide();
                            };
                        })

                    };
                })
            } else {//手动输入 
                CourseListSelect("courseg", "courseKey", "", CurrentSchoolID);
                if (!notHasClass) {
                    //班级
                    PopClassSelect2("classg", "hdKeyword", "", CurrentSchoolID, data.ClassList);
                    $(".classes_list_wrap ").on("click", ".delete", function () {
                        $(this).parent().remove();
                        if ($(".classes_list_wrap .items_item_wrap").length == 0) {
                            $(".classes_list_wrap_row ").hide();
                        };
                    })

                };
            };

        }
    });
    //分页--写法
    var pager = eleID.combogrid("grid").datagrid("getPager");
    if (pager) {
        $(pager).pagination({
            pageNumber: 1,
            pageSize: 5,
            pageList: [5, 10, 20],
            onSelectPage: function (page, rows) {
                var keyTxt = hdKeyID.val();
                var searchData = { SchoolID: CurrentSchoolID, QueryCondition: keyTxt, PageSize: rows, PageNumber: page, keyword: keyTxt };
                eleID.combogrid("grid").datagrid('options').queryParams = searchData;
                //重新加载
                eleID.combogrid("grid").datagrid("reload");
            },
            onChangePageSize: function () { },
            onRefresh: function (page, rows) {
                var keyTxt = hdKeyID.val();
                var searchData = { SchoolID: CurrentSchoolID, QueryCondition: keyTxt, PageSize: rows, PageNumber: page, keyword: keyTxt };
                eleID.combogrid("grid").datagrid('options').queryParams = searchData;
                //重新加载
                eleID.combogrid("grid").datagrid("reload");
            }
        })
    }
};
/* 考试管理:教师多选
 * ele:元素id值，
 * eleKey:隐藏域id值，
 * showValue:默认选中项，
 * CurrentSchoolID:学校id，
*/
function examTeacherListSelect(ele, eleKey, showValue, CurrentSchoolID) {
    var hx = 1;
    if (typeof ele == "string")
        ele = $("#" + ele);

    if (typeof eleKey == "string")
        eleKey = $("#" + eleKey);

    Combogride.CreatCombogride(ele, {
        panelWidth: 420,      //面板宽度
        multiple: true,
        singleSelect: false,
        delay: 500,
        idField: 'TeacherID',        //ID字段
        textField: 'TeacherName',    //显示的字段
        url: AjaxUrls.TeacherUrl.QueryTeacher,
        queryParams: { "SchoolID": CurrentSchoolID, "QueryCondition": "", "PageSize": "5", "PageNumber": "1" },
        loadFilter: function (r) {
            if (r.Success) {
                r = r.Value;
            } else {
                return;
            };

            return {            // 返回的数据结构需要解析一下
                total: r.TotalCount,
                rows: r.Data
            };
        },
        columns: [[
             { field: 'TeacherName', title: '教师名称', width: 130 },
             { field: 'TeacherNo', title: '教师编号', width: 130 },
              { field: 'TeacherID', title: '选择教师', width: 100 }
        ]],
        onLoadSuccess: function () {
            if (showValue != "" && hx == 1) {
                ele.combogrid('setValue', showValue);//设置默认值
                hx = -1;
            }
            $(".datagrid-btable td[field='TeacherID']").empty().append("<button class='click_btn'>选择</button>");
        },
        keyHandler: {
            query: function (keyword) {
                //过滤筛选功能 -- 设置查询参数
                var queryParams = ele.combogrid("grid").datagrid('options').queryParams;
                queryParams.QueryCondition = keyword;
                queryParams.keyword = keyword;
                queryParams.PageSize = $(".pagination-page-list").val();
                queryParams.PageNumber = "1";
                ele.combogrid("grid").datagrid('options').queryParams = queryParams;
                //重新加载
                ele.combogrid("grid").datagrid("reload");
                ele.combogrid("setValue", keyword);

                //将查询条件存入隐藏域 hdKeyword
                eleKey.val(keyword);
            }
        },
        onSelect: function (index, row) {
            ele.combogrid("setValues", "");
            //主讲教师是单选  获取教师id或输入名称
            var teachVal = ele.combogrid("getValue");
            var teachget = ele.combogrid("grid").datagrid("getSelected");//编辑时取不到默认选中的值
            var teachNum = parseInt(teachVal) + "";

            if (teachNum != "NaN") {//有id
                $("#pop_wrap .teachForm").val(teachNum);
            };
            ele.parents(".exam_infor_wrap").siblings().find(".show_exam_teachers").hide();
            var arrs = ele.parents(".exam_teacher_wrap").find(".show_exam_teachers div");

            $(arrs).each(function (n, obj) {
                if ($(obj).attr("teacherID") == row.TeacherID) {
                    Dialogue.Msg("您已经选择了该监考人！");
                    return false;
                } else {
                    if (n == $(arrs).length - 1) {
                        var teachersHtml = '  <div teacherID=' + row.TeacherID + '> <img src="/images/backstage/activeClassClose_03.png " />' + row.TeacherName + '</div>';
                        ele.parents(".exam_teacher_wrap").find(".show_exam_teachers").fadeIn().append(teachersHtml);
                    };
                };
            })

            if ($(arrs).length == 0) {
                var teachersHtml = '  <div teacherID=' + row.TeacherID + '> <img src="/images/backstage/activeClassClose_03.png " />' + row.TeacherName + '</div>';
                ele.parents(".exam_teacher_wrap").find(".show_exam_teachers").fadeIn().append(teachersHtml);
            };
        }
    });
    //分页--写法
    var pager = ele.combogrid("grid").datagrid("getPager");
    if (pager) {
        $(pager).pagination({
            pageNumber: 1,
            pageSize: 5,
            pageList: [5, 10, 20],
            onSelectPage: function (page, rows) {
                var keyTxt = eleKey.val();
                var searchData = { SchoolID: CurrentSchoolID, QueryCondition: keyTxt, PageSize: rows, PageNumber: page, keyword: keyTxt };
                ele.combogrid("grid").datagrid('options').queryParams = searchData;
                //重新加载
                ele.combogrid("grid").datagrid("reload");
            },
            onChangePageSize: function () { },
            onRefresh: function (page, rows) {
                var keyTxt = eleKey.val();
                var searchData = { SchoolID: CurrentSchoolID, QueryCondition: keyTxt, PageSize: rows, PageNumber: page, keyword: keyTxt };
                ele.combogrid("grid").datagrid('options').queryParams = searchData;
                ////重新加载
                ele.combogrid("grid").datagrid("reload");
            }
        })
    }

};
/* 考试类型
 * ele:元素id值，
 * eleKey:隐藏域id值，
 * showValue:默认选中项，
*/
function ExamRagulationsListSelect(ele, eleKey, showValue) {
    var hx = 1;
    if (typeof ele == "string")
        ele = $("#" + ele);

    if (typeof eleKey == "string")
        eleKey = $("#" + eleKey);
    Combogride.CreatCombogride(ele, {
        //panelWidth: 420,      //面板宽度
        pagination: true,
        singleSelect: true,
        delay: 500,
        idField: 'ExamTypeID',        //ID字段
        textField: 'ExamTypeName',    //显示的字段
        url: AjaxUrls.ExamNew.ExamTypeList,
        queryParams: { "Name": "", "PageSize": "5", "PageNumber": "1" },
        loadFilter: function (r) {
            if (r.Success) {
                r = r.Value;
            } else {
                return;
            };
            return {            // 返回的数据结构需要解析一下
                total: r.TotalCount,
                rows: r.Data
            };
        },
        columns: [[
             { field: 'ExamTypeName', title: '考试类型', width: 380 }
        ]],
        onLoadSuccess: function () {
            if (showValue != "" && hx == 1) {
                ele.combogrid('setValue', showValue);//设置默认值
                hx = -1;
            }
        },
        keyHandler: {
            query: function (keyword) {
                //过滤筛选功能 -- 设置查询参数
                var queryParams = ele.combogrid("grid").datagrid('options').queryParams;
                queryParams.QueryCondition = keyword;
                queryParams.keyword = keyword;
                queryParams.PageSize = $(".pagination-page-list").val();
                queryParams.PageNumber = "1";
                ele.combogrid("grid").datagrid('options').queryParams = queryParams;
                //重新加载
                ele.combogrid("grid").datagrid("reload");
                ele.combogrid("setValue", keyword);

                //将查询条件存入隐藏域 hdKeyword
                eleKey.val(keyword);
            }
        },
        onChange: function (newVal, oldVal) {
            var nodeData = ele.combogrid("grid").datagrid("getSelected");
            if (nodeData != null) {
                var roomVal = nodeData.ExamTypeID;
                eleKey.siblings(".exam-type").val(roomVal);
            } else {
                eleKey.siblings(".exam-type").val("");
            };
        }
    });
    //分页--写法
    var pager = ele.combogrid("grid").datagrid("getPager");
    if (pager) {
        $(pager).pagination({
            pageNumber: 1,
            pageSize: 5,
            // pageList: [5, 10, 20],
            onSelectPage: function (page, rows) {
                var keyTxt = eleKey.val();
                var searchData = { ExamTypeName: keyTxt, PageSize: rows, PageNumber: page, keyword: keyTxt };
                ele.combogrid("grid").datagrid('options').queryParams = searchData;
                //重新加载
                ele.combogrid("grid").datagrid("reload");
            },
            onChangePageSize: function () { },
            onRefresh: function (page, rows) {
                var keyTxt = eleKey.val();
                var searchData = { ExamTypeName: keyTxt, PageSize: rows, PageNumber: page, keyword: keyTxt };
                ele.combogrid("grid").datagrid('options').queryParams = searchData;
                ////重新加载
                ele.combogrid("grid").datagrid("reload");
            }
        })
    }
};

/* 教室下拉单选
 * eleID:元素id值，
 * hdKeyID:隐藏域id值，
 * showValue:默认选中项，
 * CurrentSchoolID:学校id，
*/
function RoomListSelect(ele, eleKey, showValue, CurrentSchoolID) {
    var hx = 1;
    if (typeof ele == "string")
        ele = $("#" + ele);

    if (typeof eleKey == "string")
        eleKey = $("#" + eleKey);
    Combogride.CreatCombogride(ele, {
        //panelWidth: 420,      //面板宽度
        pagination: true,
        singleSelect: true,
        delay: 500,
        idField: 'ClassRoomID',        //ID字段
        textField: 'ClassRoomName',    //显示的字段
        url: AjaxUrls.QueryClassRoom.Select,
        queryParams: { "SchoolID": CurrentSchoolID, "QueryCondition": "", "PageSize": "5", "PageNumber": "1" },
        loadFilter: function (r) {
            if (r.Success) {
                r = r.Value;
            } else {
                return;
            };
            return {            // 返回的数据结构需要解析一下
                total: r.TotalCount,
                rows: r.Data
            };
        },
        columns: [[
             { field: 'ClassRoomName', title: '教室名称', width: 190 },
             { field: 'BuildingName', title: '所属教学楼', width: 178 }
        ]],
        onLoadSuccess: function () {
            if (showValue != "" && hx == 1) {
                ele.combogrid('setValue', showValue);//设置默认值
                hx = -1;
            }
        },
        keyHandler: {
            query: function (keyword) {
                //过滤筛选功能 -- 设置查询参数
                var queryParams = ele.combogrid("grid").datagrid('options').queryParams;
                queryParams.QueryCondition = keyword;
                queryParams.keyword = keyword;
                queryParams.PageSize = $(".pagination-page-list").val();
                queryParams.PageNumber = "1";
                ele.combogrid("grid").datagrid('options').queryParams = queryParams;
                //重新加载
                ele.combogrid("grid").datagrid("reload");
                ele.combogrid("setValue", keyword);

                //将查询条件存入隐藏域 hdKeyword
                eleKey.val(keyword);
            }
        },
        onChange: function (newVal, oldVal) {
            var nodeData = ele.combogrid("grid").datagrid("getSelected");
            if (nodeData != null) {
                var roomVal = nodeData.ClassRoomID;
                $("#pop_wrap .RoomWrap .roomName").val(roomVal);
                $(".batch_verify").val(nodeData.ClassRoomID);//需要提交的教室id
            } else {
                $("#pop_wrap .RoomWrap .roomName").val("");
                if (hx != 1) {//初始化不清空roomid的值
                    $(".batch_verify").val("");
                };
            };
        }
    });
    //分页--写法
    var pager = ele.combogrid("grid").datagrid("getPager");
    if (pager) {
        $(pager).pagination({
            pageNumber: 1,
            pageSize: 5,
            // pageList: [5, 10, 20],
            onSelectPage: function (page, rows) {
                var keyTxt = eleKey.val();
                var searchData = { SchoolID: CurrentSchoolID, QueryCondition: keyTxt, PageSize: rows, PageNumber: page, keyword: keyTxt };
                ele.combogrid("grid").datagrid('options').queryParams = searchData;
                //重新加载
                ele.combogrid("grid").datagrid("reload");
            },
            onChangePageSize: function () { },
            onRefresh: function (page, rows) {
                var keyTxt = eleKey.val();
                var searchData = { SchoolID: CurrentSchoolID, QueryCondition: keyTxt, PageSize: rows, PageNumber: page, keyword: keyTxt };
                ele.combogrid("grid").datagrid('options').queryParams = searchData;
                ////重新加载
                ele.combogrid("grid").datagrid("reload");
            }
        })
    }
};

//课表弹窗--节次change事件，选中节次，起止时间段中的时间就被限定死了
//弹窗中 节次下拉单选 不带分页  参数：元素id值，隐藏域id值，默认选中项，学校id，isNotSchedule不为课表处使用
function NodeListSelect(eleID, showValue, CurrentSchoolID, isNotSchedule) {
    Combogride.CreatCombogride(eleID, {
        panelWidth: 400,      //面板宽度
        pagination: false,
        singleSelect: true,
        value: showValue,  //设置默认选中项
        delay: 500,
        idField: 'NodeID',        //ID字段
        textField: 'NodeName',    //显示的字段
        url: AjaxUrls.NodeUrl.QueryNode,
        queryParams: { "NodeID": 0, "SchoolID": CurrentSchoolID },
        loadFilter: function (r) {
            if (r.Success) {
                r = r.Value;
            } else {
                return;
            };
            for (var i = 0 ; i < r.length; i++) {
                r[i].StartT = r[i].StartTime.split(" ")[1];
                r[i].StopT = r[i].StopTime.split(" ")[1];
            }
            return {            // 返回的数据结构需要解析一下
                total: r.length,
                rows: r
            };
        },
        columns: [[
             { field: 'NodeName', title: '节次名称', width: 110 },
             { field: 'StartT', title: '开始时间', width: 120 },
             { field: 'StopT', title: '结束时间', width: 120 }
        ]],
        onChange: function (newVal, oldVal) {
            if (!isNotSchedule) {
                var nodeData = $("#chapterg").combogrid("grid").datagrid("getSelected");
                if (nodeData != null) {
                    var startTime = nodeData.StartTime.split(" ")[1];//节次开始时间
                    var endTime = nodeData.StopTime.split(" ")[1];//节次结束 时间
                    var todayDate = new Date();

                    //替换的起止时间插件
                    var startIn = $dp.$('startDT').value;
                    var endIn = $dp.$('endDT').value;

                    if (startIn != "" && endIn != "") {
                        var start_date = startIn.split(" ")[0];
                        var end_date = endIn.split(" ")[0];
                        var set_start = start_date + " " + formatHourMin(startTime);
                        var set_end = end_date + " " + formatHourMin(endTime);
                        $dp.$("startDT").value = set_start;
                        $dp.$('showStart').value = set_start;
                        $dp.$("endDT").value = set_end;
                        $dp.$('showEnd').value = set_end;
                    } else if (startIn != "" && endIn == "") {
                        var start_date = startIn.split(" ")[0];
                        var set_start = start_date + " " + formatHourMin(startTime);
                        $dp.$("startDT").value = set_start;
                        $dp.$('showStart').value = set_start;
                    } else if (startIn == "" && endIn != "") {
                        var end_date = endIn.split(" ")[0];
                        var set_end = end_date + " " + formatHourMin(endTime);
                        $dp.$("endDT").value = set_end;
                        $dp.$('showEnd').value = set_end;
                    } else {
                        var todayDate = getNowTimes().split(" ")[0];
                        var setStart = todayDate + " " + formatHourMin(startTime);
                        var setEnd = todayDate + " " + formatHourMin(endTime);
                        $dp.$("startDT").value = setStart;
                        $dp.$('showStart').value = setStart;
                        $dp.$("endDT").value = setEnd;
                        $dp.$('showEnd').value = setEnd;
                    };
                } else {
                    $dp.$("startDT").value = "";
                    $dp.$('showStart').value = "";
                    $dp.$("endDT").value = "";
                    $dp.$('showEnd').value = "";
                    $(".stuNum").focus();
                }
            };
        }
    });
};

/*主讲单选
 * eleID:元素id值，
 * hdKeyID:隐藏域id值，
 * showValue:默认选中项，{"TeacherID":TeacherID,"TeacherName":TeacherName}
 * CurrentSchoolID:学校id，
*/
function listTeacherSearch(eleID, hdKeyID, showValue, CurrentSchoolID) {
    var hx = 1;
    if (typeof eleID == "string")
        eleID = $("#" + eleID);

    if (typeof hdKeyID == "string")
        hdKeyID = $("#" + hdKeyID);

    Combogride.CreatCombogride(eleID, {
        //面板宽度
        pagination: true,
        singleSelect: true,
        //value: showValue,  //设置默认选中项
        delay: 500,
        idField: 'TeacherID',        //ID字段
        textField: 'TeacherName',    //显示的字段
        url: AjaxUrls.TeacherUrl.QueryTeacher,
        queryParams: { "SchoolID": CurrentSchoolID, "QueryCondition": "", "PageSize": "5", "PageNumber": "1" },
        loadFilter: function (r) {
            if (r.Success) {
                r = r.Value;
            } else {
                return;
            };
            return {            // 返回的数据结构需要解析一下
                total: r.TotalCount,
                rows: r.Data
            };
        },
        columns: [[
             { field: 'TeacherName', title: '教师名称', width: 190 },
             { field: 'TeacherNo', title: '教师编号', width: 178 }
        ]],
        onLoadSuccess: function () {
            if (showValue != "" && hx == 1) {
                eleID.combogrid('setValue', showValue);
                hx = -1;
            }
        },
        keyHandler: {
            query: function (keyword) {
                //过滤筛选功能 -- 设置查询参数
                var queryParams = eleID.combogrid("grid").datagrid('options').queryParams;
                queryParams.QueryCondition = keyword;
                queryParams.keyword = keyword;
                queryParams.PageSize = $(".pagination-page-list").val();
                queryParams.PageNumber = "1";
                eleID.combogrid("grid").datagrid('options').queryParams = queryParams;
                //重新加载
                eleID.combogrid("grid").datagrid("reload");
                eleID.combogrid("setValue", keyword);
                hdKeyID.val(keyword);
            }
        }
    });
    //分页--写法
    var pager = eleID.combogrid("grid").datagrid("getPager");
    if (pager) {
        $(pager).pagination({
            pageNumber: 1,
            pageSize: 5,
            pageList: [5, 10, 20],
            onSelectPage: function (page, rows) {
                var keyTxt = hdKeyID.val();
                var searchData = { SchoolID: CurrentSchoolID, QueryCondition: keyTxt, PageSize: rows, PageNumber: page, keyword: keyTxt };
                eleID.combogrid("grid").datagrid('options').queryParams = searchData;
                //重新加载
                eleID.combogrid("grid").datagrid("reload");
            },
            onChangePageSize: function () { },
            onRefresh: function (page, rows) {
                var keyTxt = hdKeyID.val();
                var searchData = { SchoolID: CurrentSchoolID, QueryCondition: keyTxt, PageSize: rows, PageNumber: page, keyword: keyTxt };
                eleID.combogrid("grid").datagrid('options').queryParams = searchData;
                ////重新加载
                eleID.combogrid("grid").datagrid("reload");
            }
        })
    }
};

/*主讲单选(密云)  cy20181008
 * eleID:元素id值，
 * hdKeyID:隐藏域id值，
 * showValue:默认选中项，{"TeacherID":TeacherID,"TeacherName":TeacherName}
 * CurrentSchoolID:学校id，
*/
function MiyunlistTeacherSearch(eleID, hdKeyID, showValue, CurrentSchoolID) {
    var hx = 1;
    if (typeof eleID == "string")
        eleID = $("#" + eleID);

    if (typeof hdKeyID == "string")
        hdKeyID = $("#" + hdKeyID);

    Combogride.CreatCombogride(eleID, {
        //面板宽度
        pagination: true,
        singleSelect: true,
        //value: showValue,  //设置默认选中项
        delay: 500,
        idField: 'TeacherID',        //ID字段
        textField: 'TeacherName',    //显示的字段
        url: AjaxUrls.MiYun.TeacherQuery,
        queryParams: { "SchoolID": CurrentSchoolID, "QueryCondition": "", "PageSize": "5", "PageNumber": "1" },
        loadFilter: function (r) {
            if (r.Success) {
                r = r.Value;
            } else {
                return;
            };
            return {            // 返回的数据结构需要解析一下
                total: r.TotalCount,
                rows: r.Data
            };
        },
        columns: [[
             { field: 'TeacherName', title: '教师名称', width: 190 },
             { field: 'TeacherNo', title: '教师编号', width: 178 }
        ]],
        onLoadSuccess: function () {
            if (showValue != "" && hx == 1) {
                eleID.combogrid('setValue', showValue);
                hx = -1;
            }
        },
        keyHandler: {
            query: function (keyword) {
                //过滤筛选功能 -- 设置查询参数
                var queryParams = eleID.combogrid("grid").datagrid('options').queryParams;
                queryParams.QueryCondition = keyword;
                queryParams.keyword = keyword;
                queryParams.PageSize = $(".pagination-page-list").val();
                queryParams.PageNumber = "1";
                eleID.combogrid("grid").datagrid('options').queryParams = queryParams;
                //重新加载
                eleID.combogrid("grid").datagrid("reload");
                eleID.combogrid("setValue", keyword);
                hdKeyID.val(keyword);
            }
        }
    });
    //分页--写法
    var pager = eleID.combogrid("grid").datagrid("getPager");
    if (pager) {
        $(pager).pagination({
            pageNumber: 1,
            pageSize: 5,
            pageList: [5, 10, 20],
            onSelectPage: function (page, rows) {
                var keyTxt = hdKeyID.val();
                var searchData = { SchoolID: CurrentSchoolID, QueryCondition: keyTxt, PageSize: rows, PageNumber: page, keyword: keyTxt };
                eleID.combogrid("grid").datagrid('options').queryParams = searchData;
                //重新加载
                eleID.combogrid("grid").datagrid("reload");
            },
            onChangePageSize: function () { },
            onRefresh: function (page, rows) {
                var keyTxt = hdKeyID.val();
                var searchData = { SchoolID: CurrentSchoolID, QueryCondition: keyTxt, PageSize: rows, PageNumber: page, keyword: keyTxt };
                eleID.combogrid("grid").datagrid('options').queryParams = searchData;
                ////重新加载
                eleID.combogrid("grid").datagrid("reload");
            }
        })
    }
};

/*课程单选
 * eleID:元素id值，
 * hdKeyID:隐藏域id值，
 * showValue:默认选中项，
 * CurrentSchoolID:学校id，
*/
function listCourseSearch(eleID, hdKeyID, showValue, CurrentSchoolID) {
    if (typeof eleID == "string")
        eleID = $("#" + eleID);

    if (typeof hdKeyID == "string")
        hdKeyID = $("#" + hdKeyID);

    Combogride.CreatCombogride(eleID, {
        panelWidth: 420,      //面板宽度
        pagination: true,
        singleSelect: true,
        value: showValue,  //设置默认选中项
        delay: 500,
        idField: 'CourseID',        //ID字段
        textField: 'CourseName',    //显示的字段
        url: AjaxUrls.CourseUrl.SelectUrl,
        queryParams: { "SchoolID": CurrentSchoolID, "QueryCondition": "", "PageSize": "5", "PageNumber": "1" },
        loadFilter: function (r) {
            if (r.Success) {
                r = r.Value;
            } else {
                return;
            };
            return {            // 返回的数据结构需要解析一下
                total: r.TotalCount,
                rows: r.Data
            };
        },
        columns: [[
             { field: 'CourseName', title: '课程名称', width: 190 },
             { field: 'CourseNo', title: '课程编号', width: 178 }
        ]],
        keyHandler: {
            query: function (keyword) {
                //过滤筛选功能 -- 设置查询参数
                var queryParams = eleID.combogrid("grid").datagrid('options').queryParams;
                queryParams.QueryCondition = keyword;
                queryParams.keyword = keyword;
                queryParams.PageSize = $(".pagination-page-list").val();
                queryParams.PageNumber = "1";
                eleID.combogrid("grid").datagrid('options').queryParams = queryParams;

                //重新加载
                eleID.combogrid("grid").datagrid("reload");
                eleID.combogrid("setValue", keyword);

                //将查询条件存入隐藏域 hdKeyword
                hdKeyID.val(keyword);
            }
        }
    });
    //分页--写法
    var pager = eleID.combogrid("grid").datagrid("getPager");
    if (pager) {
        $(pager).pagination({
            pageNumber: 1,
            pageSize: 5,
            pageList: [5, 10, 20],
            onSelectPage: function (page, rows) {
                var keyTxt = hdKeyID.val();
                var searchData = { SchoolID: CurrentSchoolID, QueryCondition: keyTxt, PageSize: rows, PageNumber: page, keyword: keyTxt };
                eleID.combogrid("grid").datagrid('options').queryParams = searchData;

                //重新加载
                eleID.combogrid("grid").datagrid("reload");
            },
            onChangePageSize: function () { },
            onRefresh: function (page, rows) {
                var keyTxt = hdKeyID.val();
                var searchData = { SchoolID: CurrentSchoolID, QueryCondition: keyTxt, PageSize: rows, PageNumber: page, keyword: keyTxt };
                eleID.combogrid("grid").datagrid('options').queryParams = searchData;

                ////重新加载
                eleID.combogrid("grid").datagrid("reload");
            }
        })
    }
};

/*课表教室单选
 * eleID:元素id值，
 * hdKeyID:隐藏域id值，
 * showValue:默认选中项，
 * CurrentSchoolID:学校id，
*/
function listCroomSearch(eleID, hdKeyID, showValue, CurrentSchoolID) {
    var hx = 1;
    if (typeof eleID == "string")
        eleID = $("#" + eleID);

    if (typeof hdKeyID == "string")
        hdKeyID = $("#" + hdKeyID);
    Combogride.CreatCombogride(eleID, {
        panelWidth: 420,      //面板宽度
        pagination: true,
        singleSelect: true,
        // value: showValue,  //设置默认选中项
        delay: 500,
        idField: 'ClassRoomID',        //ID字段
        textField: 'ClassRoomName',    //显示的字段
        url: AjaxUrls.QueryClassRoom.Select,
        queryParams: { "SchoolID": CurrentSchoolID, "QueryCondition": "", "PageSize": "5", "PageNumber": "1" },
        loadFilter: function (r) {
            if (r.Success) {
                r = r.Value;
            } else {
                return;
            };
            return {            // 返回的数据结构需要解析一下
                total: r.TotalCount,
                rows: r.Data
            };
        },
        columns: [[
             { field: 'ClassRoomName', title: '教室名称', width: 190 },
             { field: 'BuildingName', title: '所属教学楼', width: 178 }
        ]],
        onLoadSuccess: function () {
            if (showValue != "" && hx == 1) {
                eleID.combogrid('setValue', showValue);//设置默认值
                hx = -1;
            }
        },
        keyHandler: {
            query: function (keyword) {
                //过滤筛选功能 -- 设置查询参数
                var queryParams = eleID.combogrid("grid").datagrid('options').queryParams;
                queryParams.QueryCondition = keyword;
                queryParams.keyword = keyword;
                queryParams.PageSize = $(".pagination-page-list").val();
                queryParams.PageNumber = "1";
                eleID.combogrid("grid").datagrid('options').queryParams = queryParams;
                //重新加载
                eleID.combogrid("grid").datagrid("reload");
                eleID.combogrid("setValue", keyword);

                //将查询条件存入隐藏域 hdKeyword
                hdKeyID.val(keyword);
            }
        }
    });
    //分页--写法
    var pager = eleID.combogrid("grid").datagrid("getPager");
    if (pager) {
        $(pager).pagination({
            pageNumber: 1,
            pageSize: 5,
            pageList: [5, 10, 20],
            onSelectPage: function (page, rows) {
                var keyTxt = hdKeyID.val();
                var searchData = { SchoolID: CurrentSchoolID, QueryCondition: keyTxt, PageSize: rows, PageNumber: page, keyword: keyTxt };
                eleID.combogrid("grid").datagrid('options').queryParams = searchData;
                //重新加载
                eleID.combogrid("grid").datagrid("reload");
            },
            onChangePageSize: function () { },
            onRefresh: function (page, rows) {
                var keyTxt = hdKeyID.val();
                var searchData = { SchoolID: CurrentSchoolID, QueryCondition: keyTxt, PageSize: rows, PageNumber: page, keyword: keyTxt };
                eleID.combogrid("grid").datagrid('options').queryParams = searchData;
                ////重新加载
                eleID.combogrid("grid").datagrid("reload");
            }
        })
    }
};

/*学期（查询所有学期）单选
 * eleID:元素id值，
 * showValue:默认选中项，
 * CurrentSchoolID:学校id，
 */
function listTermsSearch(eleID, showValue, CurrentSchoolID) {
    Combogride.CreatCombogride(eleID, {
        panelWidth: 320,      //面板宽度
        pagination: false,
        singleSelect: true,
        editable: false,
        value: showValue,  //设置默认选中项
        delay: 500,
        idField: 'SemeSterID',        //ID字段
        textField: 'SemeSterName',    //显示的字段
        url: AjaxUrls.SemeSterUrl.QuerySemeSter,
        queryParams: { "SemeSterID": 0, "SchoolID": CurrentSchoolID },
        loadFilter: function (r) {
            if (r.Success) {
                r = r.Value;
            } else {
                return;
            };
            return {            // 返回的数据结构需要解析一下
                total: r.length,
                rows: r
            };
        },
        columns: [[
             { field: 'SchoolYearName', title: '所属学年', width: 140 },
             { field: 'SemeSterName', title: '学期名称', width: 140 }
        ]],
        onChange: function () {
            //判断选中的是否是当前学期
            //如果是当前学期，就按 全部 | 今日 | 本月内 | 两月内 时间查询项来查找
            //如果不是当前学期，全部 | 今日 | 本月内 | 两月内 就隐藏不显示，按照所选学期时间来查找
            var nodeData = $("#videoTerm").combogrid("grid").datagrid("getSelected");
            if (nodeData != null) {
                $StartTime = null; $StopTime = null;
                $dp.$('startDT').value = "";
                $dp.$('endDT').value = "";
                $("#time-all").addClass("vClassSelectBtmActive").siblings().removeClass("vClassSelectBtmActive");

                $StartTime = nodeData.StartTime.split(" ")[0];
                $StopTime = nodeData.StopTime.split(" ")[0];
                $dp.$('startDT').value = nodeData.StartTime.split(" ")[0];
                $dp.$('endDT').value = nodeData.StopTime.split(" ")[0];
                $(".vClassSelectBtmTime").hide();
            } else {//学期为空，用户不选择学期，按照全部 | 今日 | 本月内 | 两月内进行查询
                $(".vClassSelectBtmTime").removeClass("hidee");
            };
        }
    });
};
/*批量创建课表 的学期(气泡)
 * eleID:元素id值，
 * showValue:默认选中项，
 * CurrentSchoolID:学校id，
 */

function listTermsSchedule(eleID, hdKeyID, showValue, CurrentSchoolID) {
    var hx = 1;//判断是否是第一次加载状态
    if (typeof eleID == "string")
        eleID = $("#" + eleID);
    Combogride.CreatCombogride(eleID, {
        panelWidth: 320,      //面板宽度
        pagination: false,
        singleSelect: true,
        editable: false,
        value: showValue,  //设置默认选中项
        delay: 500,
        idField: 'SemeSterID',        //ID字段
        textField: 'NewName',    //显示的字段
        url: AjaxUrls.SemeSterUrl.QuerySemeSter,
        queryParams: { "SemeSterID": 0, "SchoolID": CurrentSchoolID },
        loadFilter: function (r) {
            if (r.Success) {
                r = r.Value;
            } else {
                return;
            };
           r= $.map(r, function (obj) {
                obj.NewName = obj.SemeSterName + '(' + getMonthDay(obj.StartTime) + '~' + getMonthDay(obj.StopTime) + ')';
                return obj;
            })
            return {            // 返回的数据结构需要解析一下
                total: r.length,
                rows: r
            };
        },
        columns: [[
             { field: 'SchoolYearName', title: '所属学年', width: 140 },
             { field: 'SemeSterName', title: '学期名称', width: 140 }
        ]],
        onLoadSuccess: function () {
            if (showValue != "" && hx == 1) {
                eleID.combogrid('setValue', showValue);//设置默认值
                hx = -1;
            }
        },
        onChange: function () {
            var nodeData = eleID.combogrid("grid").datagrid("getSelected");
            $(".weekChoose").show();
            $(".weekLists").empty();

            $("#pop_wrap input[name=SemeSterID]").val(nodeData.SemeSterID);
            $(".top_choose input").prop("checked", false);
            if ((hx != 1 && showValue != "") || (showValue == "") && hx == 1) {
                $("#pop_wrap input[name=WeekID]").val('');
                //获取周次
                Ajax.ajax({
                    url: AjaxUrls.WeekUrl.QueryWeek,
                    data: { ID: 0, SchoolID: CurrentSchoolID, SchoolYearID: nodeData.SchoolYearID, SemeSterID: nodeData.SemeSterID }
                }).done(function (data) {
                    if (data.Data.length > 0) {
                        var weekHtml = "";
                        for (var i = 0; i < data.Data.length; i++) {
                            var item = data.Data[i];
                            weekHtml += '<div class="items_item_wrap has_choose">' +
                                        '<label>' +
                                        '<p class="items_name">' + item.WeekName + '</p>' +
                                        '<p class="items_date">(' + getMonthDay(item.StartTime) + '~' + getMonthDay(item.StopTime) + ')</p>' +
                                        '<div class="study_hall">' +
                                        '<input class="check" weekid="' + item.WeekID + '" type="checkbox">选择' +
                                        '</div>' +
                                        '</label>' +
                                        '</div>';
                        };
                        $(".weekLists").empty().append(weekHtml)
                    };
                })
            }
        }
    });
};

/* 组织机构 院系专业
 * eleID:元素id值，
 * CurrentSchoolID:学校id，
*/
function collegeCombotreegrid(eleID, CurrentSchoolID) {
    if (typeof eleID == "string")
        eleID = $("#" + eleID);

    eleID.combotreegrid({
        width: "100%",
        panelWidth: 400,
        rownumbers: true,     //序号
        striped: true,        //设置为 true，则把行条纹化
        idField: "OrganizationID",//ID字段名称
        treeField: "OrganizationName",//定义树节点字段
        textField: "OrganizationName",//要显示在文本框中的文本字段
        lines: true,
        animate: true,
        columns: [[
            { field: 'OrganizationName', title: '组织机构名称', width: 250 },
            { field: 'OrganizationID', title: '组织机构ID号', width: 90 }
        ]],
        onBeforeExpand: function (row) {
            var childData = eleID.combotreegrid('grid').treegrid('getChildren', row.OrganizationID);
            if (!childData.length) {
                collegeAjax(row.OrganizationID);
            }
            return true;
        }
    });
    //根据父级id参数，请求子级组织机构数据
    function collegeAjax(PID) {
        Ajax.ajax({
            url: AjaxUrls.OrganizationUrl.QueryOrganization,
            data: { "OrganizationID": "0", "QueryCondition": "", "SchoolID": CurrentSchoolID, "ParentID": PID, "PageSize": "0", "PageNumber": "0" },
            async: false
        }).done(function (data) {
            for (var i = 0; i < data.Data.length; i++) {
                var item = data.Data[i];
                item.HasChild ? item.state = "closed" : item.state = "open";
            };
            eleID.combotreegrid('grid').treegrid('append', { parent: PID, data: data.Data });
            eleID.combotreegrid('grid').treegrid('expand', PID);
        }).fail(function (data) {
            Dialogue.Error(data);
        })
    }
    collegeAjax(0);
}

/* 查询--学年学期周次 单选--联动日历控件的清空禁用功能
 * eleID:元素id值，
 * CurrentSchoolID:学校id，
*/
function termWeekCombotreegrid(eleID, CurrentSchoolID) {
    if (typeof eleID == "string")
        eleID = $("#" + eleID);

    eleID.combotreegrid({
        width: "100%",
        panelWidth: 400,
        rownumbers: true,     //序号
        striped: true,        //设置为 true，则把行条纹化
        idField: "id",//ID字段名称
        treeField: "text",//定义树节点字段
        textField: "text",//要显示在文本框中的文本字段
        url: AjaxUrls.GetAllTeachingCycle.TeachingCycle,
        queryParams: { "SchoolID": CurrentSchoolID },
        lines: true,
        animate: true,
        loadFilter: function (r) {
            if (r.Success) {
                r = r.Value;
            } else {
                return;
            };
            for (var i = 0; i < r.length; i++) {
                var termArr = r[i].SemeSterList;//学期数组
                r[i].children = termArr;
                r[i].id = r[i].YearID;
                r[i].text = r[i].YearName;
                r[i].StartTime = r[i].YearStartTime;
                r[i].StopTime = r[i].YearStopTime;
                if (termArr.length > 0) {
                    r[i].state = "closed";
                } else {
                    r[i].state = "open";
                };
                for (var j = 0; j < termArr.length; j++) {
                    var weekArr = termArr[j].WeekList;//周次数组
                    termArr[j].children = weekArr;
                    termArr[j].id = termArr[j].SemeSterID;
                    termArr[j].text = termArr[j].SemeSterName;
                    termArr[j].StartTime = termArr[j].SemeSterStartTime;
                    termArr[j].StopTime = termArr[j].SemeSterStopTime;
                    if (weekArr.length > 0) {
                        termArr[j].state = "closed";
                        for (var m = 0; m < weekArr.length; m++) {
                            weekArr[m].state = "open";
                            weekArr[m].id = weekArr[m].WeekID;
                            weekArr[m].text = weekArr[m].WeekName;
                            weekArr[m].StartTime = weekArr[m].WeekStartTime;
                            weekArr[m].StopTime = weekArr[m].WeekStopTime;
                        };
                    } else {
                        termArr[j].state = "open";
                    };
                };
            }
            return {
                total: r.length,
                rows: r
            };
        },
        columns: [[
            { field: 'text', title: '学年学期周次名称', width: 260 },
            { field: 'id', title: 'ID', width: 90 }
        ]],
        onChange: function () {
            var nodeData = eleID.combotreegrid('grid').datagrid('getSelected');
            if (nodeData != null) {
                $dp.$("startDT").value = nodeData.StartTime.split(" ")[0];
                $dp.$("endDT").value = nodeData.StopTime.split(" ")[0];
                $("#startDT").attr("disabled", "disabled");
                $("#endDT").attr("disabled", "disabled");

            } else {
                $("#startDT").removeAttr("disabled");
                $("#endDT").removeAttr("disabled");
            }
        }
    });
}

/* 课表、资源管理弹窗 combogrid表单提交--单选或多选，但输入文本不提交
 * eleID:input所在盒子
 * boxClass:包裹input的最外层节点的class name
*/
function formName(eleID, boxClass) {
    var queryParams = $("#" + eleID + "").combogrid("grid").datagrid('options').queryParams;
    var $classIdInput = $("#pop_wrap ." + boxClass + " .textbox-value");
    $.each($classIdInput, function (index, ele) {
        if ($(ele).val() == queryParams.keyword) {
            $(ele).remove();
        }
    });
}

//课表、资源管理弹窗combogrid表单提交--单选或多选，同时提交输入文本
//有手写的就去掉id
function formTxtName(eleID, boxClass, nameVal, obj) {
    var queryParams = $("#" + eleID + "").combogrid("grid").datagrid('options').queryParams;
    if (obj) {
        var $classIdInput = $("#" + obj + " ." + boxClass + " .textbox-value");
    } else {
        var $classIdInput = $("#pop_wrap ." + boxClass + " .textbox-value");
    };
    $.each($classIdInput, function (index, ele) {
        var $eleNum = parseInt($(ele).val()) + "";
        if ($(ele).val() == queryParams.keyword || $eleNum == "NaN") {
            $(ele).attr("name", nameVal);
        }
    });
}

/* 专递服务器--设备管理后台页面
 * idSchool:学校id
 * ele:元素id值
 * showID:默认选中项，
*/
function selectDeliveryServer(idSchool, ele, showID) {
    Combogride.CreatCombogride(ele, {
        panelWidth: 400,
        panelHeight: 180,
        pagination: false,
        singleSelect: true,
        editable: false,
        value: showID,
        idField: 'DeviceID',
        textField: 'DeviceName',
        url: AjaxUrls.Device.DeliveryServerList,
        queryParams: { "SchoolID": idSchool },
        loadFilter: function (r) {
            if (r.Success) {
                r = r.Value;
            } else {
                return;
            };
            return {
                total: r.length,
                rows: r
            };
        },
        columns: [[
             { field: 'DeviceName', title: '服务器名称', width: 180 },
             { field: 'LanIpAddress', title: '内网IP', width: 110 },
             { field: 'Port', title: '端口', width: 80 },
             { field: 'SchoolID', title: '学校ID', width: 80 },
             { field: 'DeviceID', title: '服务器ID', width: 60 }
        ]]
    });
}

/* 班级（多选 带分页筛选功能）--表单提交（需要清除筛选项并且选中的值去重）  
 * eleId:元素id值，
 * inputWrap:包裹input的最外层节点的class name
 * className:需要提交的name值，
 * flagss:是否通过拼字符串提交，
*/
function classMoreForm(eleId, inputWrap, className, flagss) {
    //班级表单
    var queryParams = $(eleId).combogrid("grid").datagrid('options').queryParams;
    var $classIdInput = $("#pop_wrap " + inputWrap + " .textbox-value");
    //去重
    var tempArr = [], classList = [];
    indexOfIE();
    $.each($classIdInput, function (index, ele) {
        if ($(ele).val() == queryParams.keyword) {
            $(ele).remove();
        } else {
            //多选去重
            if (tempArr.indexOf($(ele).val()) == -1) {
                tempArr.push($(ele).val());
                if (flagss) {
                    classList.push({ "ID": $(ele).val(), "Flag": false });
                };
                $(ele).attr("name", className);
            } else {
                $(ele).remove();
            };
        };
    });
    if (flagss) {
        $("#studentList").val(JSON.stringify(classList));
    };
}

//根据窗口大小设置弹出层高度
function popHeight(areaH) {
    var windowH = $(window).height();
    var popHg = (windowH >= areaH ? ((areaH - 40) + "px") : ((windowH - 40) + "px"));
    return popHg;
}

/* 学科下拉查询 
 * ele:元素id值，
 * eleKey:隐藏域id值，
 * showValue:默认选中项，
*/
function SubjectSearchListSelect(ele, eleKey, showValue) {
    var hx = 1;
    if (typeof ele == "string")
        ele = $("#" + ele);

    if (typeof eleKey == "string")
        eleKey = $("#" + eleKey);
    Combogride.CreatCombogride(ele, {
        pagination: true,
        singleSelect: true,
        delay: 500,
        idField: 'ID',        //ID字段
        textField: 'Name',    //显示的字段
        url: AjaxUrls.SubjectUrls.QuerySubject,
        queryParams: { "QueryCondition": "", "PageSize": "5", "PageNumber": "1" },
        loadFilter: function (r) {
            if (r.Success) {
                r = r.Value;
            } else {
                return;
            };

            return {            // 返回的数据结构需要解析一下
                total: r.TotalCount,
                rows: r.Data
            };
        },
        columns: [[
             { field: 'Name', title: '学科名称', width: 380 }
        ]],
        onLoadSuccess: function () {
            if (showValue != "" && hx == 1) {
                ele.combogrid('setValue', showValue);//设置默认值
                hx = -1;
            }
        },
        keyHandler: {
            query: function (keyword) {
                //过滤筛选功能 -- 设置查询参数
                var queryParams = ele.combogrid("grid").datagrid('options').queryParams;
                queryParams.QueryCondition = keyword;
                queryParams.keyword = keyword;
                queryParams.PageSize = $(".pagination-page-list").val();
                queryParams.PageNumber = "1";
                ele.combogrid("grid").datagrid('options').queryParams = queryParams;
                //重新加载
                ele.combogrid("grid").datagrid("reload");
                ele.combogrid("setValue", keyword);

                //将查询条件存入隐藏域 hdKeyword
                eleKey.val(keyword);
            }
        }
    });
    //分页--写法
    var pager = ele.combogrid("grid").datagrid("getPager");
    if (pager) {
        $(pager).pagination({
            pageNumber: 1,
            pageSize: 5,
            // pageList: [5, 10, 20],
            onSelectPage: function (page, rows) {
                var keyTxt = eleKey.val();
                var searchData = { ExamTypeName: keyTxt, PageSize: rows, PageNumber: page, keyword: keyTxt };
                ele.combogrid("grid").datagrid('options').queryParams = searchData;
                //重新加载
                ele.combogrid("grid").datagrid("reload");
            },
            onChangePageSize: function () { },
            onRefresh: function (page, rows) {
                var keyTxt = eleKey.val();
                var searchData = { ExamTypeName: keyTxt, PageSize: rows, PageNumber: page, keyword: keyTxt };
                ele.combogrid("grid").datagrid('options').queryParams = searchData;
                ////重新加载
                ele.combogrid("grid").datagrid("reload");
            }
        })
    }
};

/* 学科下拉查询 (密云直播) cy20181008
 * ele:元素id值，
 * eleKey:隐藏域id值，
 * showValue:默认选中项，
*/
function MiyunSubjectSearchListSelect(ele, eleKey, showValue) {
    var hx = 1;
    if (typeof ele == "string")
        ele = $("#" + ele);

    if (typeof eleKey == "string")
        eleKey = $("#" + eleKey);
    Combogride.CreatCombogride(ele, {
        pagination: true,
        singleSelect: true,
        delay: 500,
        idField: 'ID',        //ID字段
        textField: 'Name',    //显示的字段
        url: AjaxUrls.MiYun.SubjectQuery,
        queryParams: { "QueryCondition": "", "PageSize": "5", "PageNumber": "1" },
        loadFilter: function (r) {
            if (r.Success) {
                r = r.Value;
            } else {
                return;
            };

            return {            // 返回的数据结构需要解析一下
                total: r.TotalCount,
                rows: r.Data
            };
        },
        columns: [[
             { field: 'Name', title: '学科名称', width: 380 }
        ]],
        onLoadSuccess: function () {
            if (showValue != "" && hx == 1) {
                ele.combogrid('setValue', showValue);//设置默认值
                hx = -1;
            }
        },
        keyHandler: {
            query: function (keyword) {
                //过滤筛选功能 -- 设置查询参数
                var queryParams = ele.combogrid("grid").datagrid('options').queryParams;
                queryParams.QueryCondition = keyword;
                queryParams.CommonKey = keyword;
                queryParams.keyword = keyword;
                queryParams.PageSize = $(".pagination-page-list").val();
                queryParams.PageNumber = "1";
                ele.combogrid("grid").datagrid('options').queryParams = queryParams;
                //重新加载
                ele.combogrid("grid").datagrid("reload");
                ele.combogrid("setValue", keyword);

                //将查询条件存入隐藏域 hdKeyword
                eleKey.val(keyword);
            }
        }
    });
    //分页--写法
    var pager = ele.combogrid("grid").datagrid("getPager");
    if (pager) {
        $(pager).pagination({
            pageNumber: 1,
            pageSize: 5,
            // pageList: [5, 10, 20],
            onSelectPage: function (page, rows) {
                var keyTxt = eleKey.val();
                var searchData = { ExamTypeName: keyTxt, PageSize: rows, PageNumber: page, keyword: keyTxt };
                ele.combogrid("grid").datagrid('options').queryParams = searchData;
                //重新加载
                ele.combogrid("grid").datagrid("reload");
            },
            onChangePageSize: function () { },
            onRefresh: function (page, rows) {
                var keyTxt = eleKey.val();
                var searchData = { ExamTypeName: keyTxt, PageSize: rows, PageNumber: page, keyword: keyTxt };
                ele.combogrid("grid").datagrid('options').queryParams = searchData;
                ////重新加载
                ele.combogrid("grid").datagrid("reload");
            }
        })
    }
};

/* 学校下拉查询 ，联动校区查询
 * ele:元素id值，
 * eleKey:隐藏域id值
 * showValue:默认选中项
*/
function SchoolSearchListSelect(ele, eleKey, showValue) {
    var hx = 1;
    if (typeof ele == "string")
        ele = $("#" + ele);

    if (typeof eleKey == "string")
        eleKey = $("#" + eleKey);
    Combogride.CreatCombogride(ele, {
        pagination: true,
        singleSelect: true,
        delay: 500,
        idField: 'SchoolID',        //ID字段
        textField: 'SchoolName',    //显示的字段
        url: AjaxUrls.SchoolUrl.QuerySchool,
        queryParams: { "QueryCondition": "", "PageSize": "5", "PageNumber": "1" },
        loadFilter: function (r) {
            if (r.Success) {
                r = r.Value;
            } else {
                return;
            };
            return {            // 返回的数据结构需要解析一下
                total: r.TotalCount,
                rows: r.Data
            };
        },
        columns: [[
             { field: 'SchoolName', title: '学校名称', width: 380 }
        ]],
        onLoadSuccess: function () {
            if (showValue != "" && hx == 1) {
                ele.combogrid('setValue', showValue);//设置默认值
                hx = -1;
            }
        },
        keyHandler: {
            query: function (keyword) {
                //过滤筛选功能 -- 设置查询参数
                var queryParams = ele.combogrid("grid").datagrid('options').queryParams;
                queryParams.QueryCondition = keyword;
                queryParams.keyword = keyword;
                queryParams.PageSize = $(".pagination-page-list").val();
                queryParams.PageNumber = "1";
                ele.combogrid("grid").datagrid('options').queryParams = queryParams;
                //重新加载
                ele.combogrid("grid").datagrid("reload");
                ele.combogrid("setValue", keyword);

                //将查询条件存入隐藏域 hdKeyword
                eleKey.val(keyword);
            }
        },
        onClickRow: function (index, row) {
            schoolAreaSelect("schoolArea", "searchSchoolArea", "", row.SchoolID);
            $(".schoolarea").show();
        }
    });
    //分页--写法
    var pager = ele.combogrid("grid").datagrid("getPager");
    if (pager) {
        $(pager).pagination({
            pageNumber: 1,
            pageSize: 5,
            // pageList: [5, 10, 20],
            onSelectPage: function (page, rows) {
                var keyTxt = eleKey.val();
                var searchData = { ExamTypeName: keyTxt, PageSize: rows, PageNumber: page, keyword: keyTxt };
                ele.combogrid("grid").datagrid('options').queryParams = searchData;
                //重新加载
                ele.combogrid("grid").datagrid("reload");
            },
            onChangePageSize: function () { },
            onRefresh: function (page, rows) {
                var keyTxt = eleKey.val();
                var searchData = { ExamTypeName: keyTxt, PageSize: rows, PageNumber: page, keyword: keyTxt };
                ele.combogrid("grid").datagrid('options').queryParams = searchData;
                ////重新加载
                ele.combogrid("grid").datagrid("reload");
            }
        })
    }
};

/* 学校联动年级(密云查询条件)
 * ele:元素id值，
 * eleKey:隐藏域id值
 * showValue:默认选中项
 * hasCourse:是否有联动课程列表
 * hasTeacher:是否有联动老师列表
 * notshowCourse:不展示课程
 * hasClass:是否有联动班级列表
*/
function SchoolSearchListAndGradeSelect(ele, eleKey, showValue, hasCourse, hasTeacher, notshowCourse, hasClass) {
    var hx = 1, schooleArr = [];
    if (typeof ele == "string")
        ele = $("#" + ele);

    if (typeof eleKey == "string")
        eleKey = $("#" + eleKey);
    Combogride.CreatCombogride(ele, {
        pagination: true,
        singleSelect: true,
        delay: 500,
        idField: 'SchoolID',        //ID字段
        textField: 'SchoolName',    //显示的字段
        url: AjaxUrls.SchoolUrl.QuerySchool,
        queryParams: { "QueryCondition": "", "PageSize": "5", "PageNumber": "1" },
        loadFilter: function (r) {
            if (r.Success) {
                r = r.Value;
                schooleArr = r.Data;
            } else {
                return;
            };

            return {            // 返回的数据结构需要解析一下
                total: r.TotalCount,
                rows: r.Data
            };
        },
        columns: [[
             { field: 'SchoolName', title: '学校名称', width: 380 }
        ]],
        onLoadSuccess: function () {
            var defaultSchool;
            if (showValue != "" && hx == 1) {
                if (typeof showValue.SchoolName == "undefined") {
                    defaultSchool = {
                        'SchoolID': schooleArr[0].SchoolID,
                        'SchoolName': schooleArr[0].SchoolName
                    }
                    selectSchoolGrade("gradeList", schooleArr[0].PhaseList);
                } else {
                    defaultSchool = showValue;
                    selectSchoolGrade("gradeList", schooleArr[0].PhaseList);
                };

                //ele.combogrid('setValue', defaultSchool);//设置默认值 

                if (hasClass) {
                    $(".classesListWrap").show();
                    getClassList("classesList", "classesListKeyword", "", defaultSchool.SchoolID);
                };
                if (hasCourse) {
                    if (!notshowCourse) {
                        $(".courseListWrap").css("display", "inline");
                    };
                    CourseListSelect("videoCourse", "courseKeyword", "", defaultSchool.SchoolID);
                };
                if (hasTeacher) {
                    $(".teacherWrap").show();
                    listTeacherSearch("listTeach", "listTeachKey", "", defaultSchool.SchoolID);
                };


                hx = -1;
            }
        },
        keyHandler: {
            query: function (keyword) {
                //过滤筛选功能 -- 设置查询参数
                var queryParams = ele.combogrid("grid").datagrid('options').queryParams;
                queryParams.QueryCondition = keyword;
                queryParams.keyword = keyword;
                queryParams.PageSize = $(".pagination-page-list").val();
                queryParams.PageNumber = "1";
                ele.combogrid("grid").datagrid('options').queryParams = queryParams;
                //重新加载
                ele.combogrid("grid").datagrid("reload");
                ele.combogrid("setValue", keyword);

                //将查询条件存入隐藏域 hdKeyword
                eleKey.val(keyword);
            }
        },
        onClickRow: function (index, row) {

            var nodeData = row.SchoolID;
            if (typeof parseInt(nodeData) == "number" && parseInt(nodeData) != 0) {
                if (schooleArr[index].PhaseList.length > 0) {
                    $(".gradeListWrap").css("display", "inline");
                    selectSchoolGrade("gradeList", schooleArr[index].PhaseList);
                } else {
                    $(".gradeListWrap").hide();
                };
                if (hasClass) {
                    if (!(parseInt($(".js-page-jump .vClassSelectBtmActive").attr("index")) == 3)) {
                        $(".classesListWrap").show();
                    } else {
                        $(".classesListWrap").hide();
                    };

                    getClassList("classesList", "classesListKeyword", "", nodeData);
                };
                if (hasCourse) {
                    if ($(".js-page-jump ").length > 0) {
                        if (parseInt($(".js-page-jump .vClassSelectBtmActive").attr("index")) == 1 || parseInt($(".js-page-jump .vClassSelectBtmActive").attr("index")) == 2) {
                            $(".courseListWrap ").css("display", "inline");
                        } else {
                            $(".courseListWrap ").css("display", "none");
                        };
                    };
                    CourseListSelect("videoCourse", "courseKeyword", "", nodeData);
                };
                if (hasTeacher) {
                    $(".teacherWrap").show();
                    listTeacherSearch("listTeach", "listTeachKey", "", nodeData);
                }
            };
        }
    });
    //分页--写法
    var pager = ele.combogrid("grid").datagrid("getPager");
    if (pager) {
        $(pager).pagination({
            pageNumber: 1,
            pageSize: 5,
            // pageList: [5, 10, 20],
            onSelectPage: function (page, rows) {
                var keyTxt = eleKey.val();
                var searchData = { ExamTypeName: keyTxt, PageSize: rows, PageNumber: page, keyword: keyTxt };
                ele.combogrid("grid").datagrid('options').queryParams = searchData;
                //重新加载
                ele.combogrid("grid").datagrid("reload");
            },
            onChangePageSize: function () { },
            onRefresh: function (page, rows) {
                var keyTxt = eleKey.val();
                var searchData = { ExamTypeName: keyTxt, PageSize: rows, PageNumber: page, keyword: keyTxt };
                ele.combogrid("grid").datagrid('options').queryParams = searchData;
                ////重新加载
                ele.combogrid("grid").datagrid("reload");
            }
        })
    }
};


/* 学校联动年级(密云查询条件) cy20181008
 * ele:元素id值，
 * eleKey:隐藏域id值
 * showValue:默认选中项
 * hasCourse:是否有联动课程列表
 * hasTeacher:是否有联动老师列表
 * notshowCourse:不展示课程
 * hasClass:是否有联动班级列表
*/
function MiyunSchoolSearchListAndGradeSelect(ele, eleKey, showValue, hasCourse, hasTeacher, notshowCourse, hasClass) {
    var hx = 1, schooleArr = [];
    if (typeof ele == "string")
        ele = $("#" + ele);

    if (typeof eleKey == "string")
        eleKey = $("#" + eleKey);
    Combogride.CreatCombogride(ele, {
        pagination: true,
        singleSelect: true,
        delay: 500,
        idField: 'SchoolID',        //ID字段
        textField: 'SchoolName',    //显示的字段
        url: AjaxUrls.MiYun.SchoolQuery,
        queryParams: { "QueryCondition": "", "PageSize": "5", "PageNumber": "1" },
        loadFilter: function (r) {
            if (r.Success) {
                r = r.Value;
                schooleArr = r.Data;
            } else {
                return;
            };

            return {            // 返回的数据结构需要解析一下
                total: r.TotalCount,
                rows: r.Data
            };
        },
        columns: [[
             { field: 'SchoolName', title: '学校名称', width: 380 }
        ]],
        onLoadSuccess: function () {
            var defaultSchool;
            if (showValue != "" && hx == 1) {
                if (typeof showValue.SchoolName == "undefined") {
                    defaultSchool = {
                        'SchoolID': schooleArr[0].SchoolID,
                        'SchoolName': schooleArr[0].SchoolName
                    }
                    selectSchoolGrade("gradeList", schooleArr[0].PhaseList);
                } else {
                    defaultSchool = {
                        'SchoolID': schooleArr[0].SchoolID,
                        'SchoolName': schooleArr[0].SchoolName
                    };
                    selectSchoolGrade("gradeList", schooleArr[0].PhaseList);
                };

                ele.combogrid('setValue', defaultSchool);//设置默认值

                if (hasClass) {
                    $(".classesListWrap").show();
                    getClassList("classesList", "classesListKeyword", "", defaultSchool.SchoolID);
                };
                if (hasCourse) {
                    if (!notshowCourse) {
                        $(".courseListWrap").css("display", "inline");
                    };
                    //MiyunCourseListSelect("videoCourse", "courseKeyword", "", defaultSchool.SchoolID);
                    MiyunCourseListSelect("videoCourse", "courseKeyword", "", "");
                };
                if (hasTeacher) {
                    $(".teacherWrap").show();
                    MiyunlistTeacherSearch("listTeach", "listTeachKey", "", defaultSchool.SchoolID);
                };


                hx = -1;
            }
        },
        keyHandler: {
            query: function (keyword) {
                //过滤筛选功能 -- 设置查询参数
                var queryParams = ele.combogrid("grid").datagrid('options').queryParams;
                queryParams.QueryCondition = keyword;
                queryParams.CommonKey = keyword;
                queryParams.keyword = keyword;
                queryParams.PageSize = $(".pagination-page-list").val();
                queryParams.PageNumber = "1";
                ele.combogrid("grid").datagrid('options').queryParams = queryParams;
                //重新加载
                ele.combogrid("grid").datagrid("reload");
                ele.combogrid("setValue", keyword);

                //将查询条件存入隐藏域 hdKeyword
                eleKey.val(keyword);
            }
        },
        onClickRow: function (index, row) {

            var nodeData = row.SchoolID;
            if (typeof parseInt(nodeData) == "number" && parseInt(nodeData) != 0) {
                if (schooleArr[index].PhaseList.length > 0) {
                    $(".gradeListWrap").css("display", "inline");
                    selectSchoolGrade("gradeList", schooleArr[index].PhaseList);
                } else {
                    $(".gradeListWrap").hide();
                };
                if (hasClass) {
                    if (!(parseInt($(".js-page-jump .vClassSelectBtmActive").attr("index")) == 3)) {
                        $(".classesListWrap").show();
                    } else {
                        $(".classesListWrap").hide();
                    };

                    getClassList("classesList", "classesListKeyword", "", nodeData);
                };
                if (hasCourse) {
                    if ($(".js-page-jump ").length > 0) {
                        if (parseInt($(".js-page-jump .vClassSelectBtmActive").attr("index")) == 1 || parseInt($(".js-page-jump .vClassSelectBtmActive").attr("index")) == 2) {
                            $(".courseListWrap ").css("display", "inline");
                        } else {
                            $(".courseListWrap ").css("display", "none");
                        };
                    };
                    MiyunCourseListSelect("videoCourse", "courseKeyword", "", nodeData);
                };
                if (hasTeacher) {
                    $(".teacherWrap").show();
                    listTeacherSearch("listTeach", "listTeachKey", "", nodeData);
                }
            };
        }
    });
    //分页--写法
    var pager = ele.combogrid("grid").datagrid("getPager");
    if (pager) {
        $(pager).pagination({
            pageNumber: 1,
            pageSize: 5,
            // pageList: [5, 10, 20],
            onSelectPage: function (page, rows) {
                var keyTxt = eleKey.val();
                var searchData = { ExamTypeName: keyTxt, PageSize: rows, PageNumber: page, keyword: keyTxt };
                ele.combogrid("grid").datagrid('options').queryParams = searchData;
                //重新加载
                ele.combogrid("grid").datagrid("reload");
            },
            onChangePageSize: function () { },
            onRefresh: function (page, rows) {
                var keyTxt = eleKey.val();
                var searchData = { ExamTypeName: keyTxt, PageSize: rows, PageNumber: page, keyword: keyTxt };
                ele.combogrid("grid").datagrid('options').queryParams = searchData;
                ////重新加载
                ele.combogrid("grid").datagrid("reload");
            }
        })
    }
}

/* 学校联动一堆(密云直播课堂新建课表)
 * ele:元素id值，
 * eleKey:隐藏域id值
 * showValue:默认选中项
*/
function SchoolSearchAndCreateSchedule(ele, eleKey, showValue) {
    var hx = 1, schooleArr = [];
    if (typeof ele == "string")
        ele = $("#" + ele);

    if (typeof eleKey == "string")
        eleKey = $("#" + eleKey);
    Combogride.CreatCombogride(ele, {
        pagination: true,
        singleSelect: true,
        delay: 500,
        idField: 'SchoolID',        //ID字段
        textField: 'SchoolName',    //显示的字段
        url: AjaxUrls.SchoolUrl.QuerySchool,
        queryParams: { "QueryCondition": "", "PageSize": "5", "PageNumber": "1" },
        loadFilter: function (r) {
            if (r.Success) {
                r = r.Value;
                schooleArr = r.Data;
            } else {
                return;
            };
            return {            // 返回的数据结构需要解析一下
                total: r.TotalCount,
                rows: r.Data
            };
        },
        columns: [[
             { field: 'SchoolName', title: '学校名称', width: 380 }
        ]],
        onLoadSuccess: function () {
            if (showValue != "" && hx == 1) {
                if (typeof showValue.SchoolName == 'undefined') {
                    ele.combogrid('setValue', {
                        "SchoolID": schooleArr[0].SchoolID,
                        "SchoolName": schooleArr[0].SchoolName,
                    });//设置默认值
                    $("#pop_wrap input[name=SchoolID]").val(schooleArr[0].SchoolID);
                    UserIP(schooleArr[0].SchoolID);
                    SchedulePopStudentSelect("studentg", "studentKeyword", "", schooleArr[0].SchoolID);
                    teacherInputEdit(null, schooleArr[0].SchoolID);
                } else {
                    ele.combogrid('setValue', showValue);//设置默认值
                }
                hx = -1;
            };
        },
        keyHandler: {
            query: function (keyword) {
                //过滤筛选功能 -- 设置查询参数
                var queryParams = ele.combogrid("grid").datagrid('options').queryParams;
                queryParams.QueryCondition = keyword;
                queryParams.keyword = keyword;
                queryParams.PageSize = $(".pagination-page-list").val();
                queryParams.PageNumber = "1";
                ele.combogrid("grid").datagrid('options').queryParams = queryParams;
                //重新加载
                ele.combogrid("grid").datagrid("reload");
                ele.combogrid("setValue", keyword);

                //将查询条件存入隐藏域 hdKeyword
                eleKey.val(keyword);
            }
        },
        onClickRow: function (index, row) {
            var nodeData = row.SchoolID;
            if (typeof parseInt(nodeData) == "number" && parseInt(nodeData) != 0) {
                $("#pop_wrap .items_list_wrap").empty();
                $("#pop_wrap .students_list_wrap_row").hide();
                $("#pop_wrap .teachers_list_wrap_row ").hide();
                $("#pop_wrap .classes_list_wrap_row ").hide();

                $("#pop_wrap input[name=SchoolID]").val(nodeData);
                UserIP(nodeData);
                SchedulePopStudentSelect("studentg", "studentKeyword", "", nodeData);
                teacherInputEdit(null, nodeData);
                $("#pop_wrap input[name=ISAddAllClass]").prop("checked", false);
            };
        }
    });
    //分页--写法
    var pager = ele.combogrid("grid").datagrid("getPager");
    if (pager) {
        $(pager).pagination({
            pageNumber: 1,
            pageSize: 5,
            // pageList: [5, 10, 20],
            onSelectPage: function (page, rows) {
                var keyTxt = eleKey.val();
                var searchData = { ExamTypeName: keyTxt, PageSize: rows, PageNumber: page, keyword: keyTxt };
                ele.combogrid("grid").datagrid('options').queryParams = searchData;
                //重新加载
                ele.combogrid("grid").datagrid("reload");
            },
            onChangePageSize: function () { },
            onRefresh: function (page, rows) {
                var keyTxt = eleKey.val();
                var searchData = { ExamTypeName: keyTxt, PageSize: rows, PageNumber: page, keyword: keyTxt };
                ele.combogrid("grid").datagrid('options').queryParams = searchData;
                ////重新加载
                ele.combogrid("grid").datagrid("reload");
            }
        })
    }
};
/* 选择校区
 * ele:元素id值，
 * eleKey:隐藏域id值
 * showValue:默认选中项
 * SchoolID:学校id
*/
function schoolAreaSelect(ele, eleKey, showValue, SchoolID) {
    var hx = 1;
    if (typeof ele == "string")
        ele = $("#" + ele);

    if (typeof eleKey == "string")
        eleKey = $("#" + eleKey);
    Combogride.CreatCombogride(ele, {
        //panelWidth: 420,      //面板宽度
        pagination: true,
        singleSelect: true,
        delay: 500,
        idField: 'CampusID',        //ID字段
        textField: 'CampusName',    //显示的字段
        url: AjaxUrls.CampusUrl.QueryCampus,
        queryParams: { "QueryCondition": "", "SchoolID": SchoolID, "PageSize": "5", "PageNumber": "1" },
        loadFilter: function (r) {
            if (r.Success) {
                r = r.Value;
            } else {
                return;
            };
            return {            // 返回的数据结构需要解析一下
                total: r.TotalCount,
                rows: r.Data
            };
        },
        columns: [[
             { field: 'CampusName', title: '校区名称', width: 380 }
        ]],
        onLoadSuccess: function () {
            if (showValue != "" && hx == 1) {
                ele.combogrid('setValue', showValue);//设置默认值
                hx = -1;
            }
        },
        keyHandler: {
            query: function (keyword) {
                //过滤筛选功能 -- 设置查询参数
                var queryParams = ele.combogrid("grid").datagrid('options').queryParams;
                queryParams.QueryCondition = keyword;
                queryParams.keyword = keyword;
                queryParams.PageSize = $(".pagination-page-list").val();
                queryParams.PageNumber = "1";
                ele.combogrid("grid").datagrid('options').queryParams = queryParams;
                //重新加载
                ele.combogrid("grid").datagrid("reload");
                ele.combogrid("setValue", keyword);

                //将查询条件存入隐藏域 hdKeyword
                eleKey.val(keyword);
            }
        }
    });
    //分页--写法
    var pager = ele.combogrid("grid").datagrid("getPager");
    if (pager) {
        $(pager).pagination({
            pageNumber: 1,
            pageSize: 5,
            // pageList: [5, 10, 20],
            onSelectPage: function (page, rows) {
                var keyTxt = eleKey.val();
                var searchData = { ExamTypeName: keyTxt, PageSize: rows, PageNumber: page, keyword: keyTxt };
                ele.combogrid("grid").datagrid('options').queryParams = searchData;
                //重新加载
                ele.combogrid("grid").datagrid("reload");
            },
            onChangePageSize: function () { },
            onRefresh: function (page, rows) {
                var keyTxt = eleKey.val();
                var searchData = { ExamTypeName: keyTxt, PageSize: rows, PageNumber: page, keyword: keyTxt };
                ele.combogrid("grid").datagrid('options').queryParams = searchData;
                ////重新加载
                ele.combogrid("grid").datagrid("reload");
            }
        })
    }
};
/* 选择学期
 * ele:元素id值，
 * eleKey:隐藏域id值
 * CurrentSchoolID:学校id，
 * startTimeEle:需要联动的开始时间id
 * endTimeEle:需要联动的结束时间id
*/
function SemesterSelectList(ele, eleKey, CurrentSchoolID, startTimeEle, endTimeEle) {
    if (typeof ele == "string") {
        ele = $("#" + ele);
    };
    if (typeof eleKey == "string") {
        eleKey = $("#" + eleKey);
    };
    Combogride.CreatCombogride(ele, {
        panelWidth: 320,      //面板宽度
        pagination: false,
        singleSelect: true,
        editable: false,
        value: "",  //设置默认选中项
        delay: 500,
        idField: 'SemeSterID',        //ID字段
        textField: 'SemeSterName',    //显示的字段
        url: AjaxUrls.SemeSterUrl.QuerySemeSter,
        queryParams: { "SemeSterID": 0, "SchoolID": CurrentSchoolID },
        loadFilter: function (r) {
            if (r.Success) {
                r = r.Value;
            } else {
                return;
            };
            return {           
                total: r.length,
                rows: r
            };
        },
        columns: [[
             { field: 'SchoolYearName', title: '所属学年', width: 140 },
             { field: 'SemeSterName', title: '学期名称', width: 140 }
        ]],
        onChange: function () {
            var nodeData = ele.combogrid("grid").datagrid("getSelected");
            if (nodeData != null) {
                $dp.$(startTimeEle).value = nodeData.StartTime.split(" ")[0];
                $dp.$(endTimeEle).value = nodeData.StopTime.split(" ")[0];
            }
        }
    });
}
/* 选择学段
 * ele:元素id值，
 * eleKey:隐藏域id值
 * CurrentSchoolID:学校id，
 * startTimeEle:需要联动的开始时间id
 * endTimeEle:需要联动的结束时间id
*/
function SemesterPhaseList(ele) {
    if (typeof ele == "string") {
        ele = $("#" + ele);
    };
    Combogride.CreatCombogride(ele, {
        panelWidth: 320,      //面板宽度
        pagination: false,
        singleSelect: true,
        editable: false,
        value: "",  //设置默认选中项
        delay: 500,
        idField: 'PhaseID',        //ID字段
        textField: 'PhaseName',    //显示的字段
        url: AjaxUrls.PhaseUrls.QueryPhase,
        queryParams: { "PhaseID": 0},
        loadFilter: function (r) {
            if (r.Success) {
                r = r.Value;
            } else {
                return;
            };
            return {
                total: r.length,
                rows: r
            };
        },
        columns: [[
             { field: 'PhaseID', title: '学段ID', width: 140 },
             { field: 'PhaseName', title: '学段名称', width: 140 }
        ]],
        onChange: function () {
            var nodeData = ele.combogrid("grid").datagrid("getSelected");
        }
    });
}
