//添加编辑弹窗中 组织机构下拉列表功能函数--页面 ManageSchoolClass.aspx?SchoolID=5364
//用法简介：参考ManageSchoolClass.aspx页面代码
//行数：（标签结构） 83~89   106~112  （增加） 342  345  （编辑） 390~400  （表单验证）522~526   (弹窗宽度) 512
var retturn_flag = true
//增加弹窗 查询组织机构数据,添加到弹窗中--下拉菜单的联动生成和选择
function OrganizationList(_idParent, _selectELe, CurrentSchoolID) {
    Ajax.ajax({
        url: AjaxUrls.OrganizationUrl.QueryOrganization,
        data: { OrganizationID: "0", QueryCondition: "", SchoolID: CurrentSchoolID, ParentID: _idParent, PageSize: "0", PageNumber: "0" }
    }).done(function (data) {
        var officeArr1 = [];
        officeArr1.push({ id: -1, text: "默认：无" });
        for (var i = 0 ; i < data.Data.length; i++) {
            var item = data.Data[i];
            var officeItem = { id: item.OrganizationID, text: item.OrganizationName, isChild: item.HasChild };
            officeArr1.push(officeItem);
        }
        //初始化 弹窗 组织机构下拉框
        _selectELe.empty();
        Select2.SelectPicker({
            obj: _selectELe,
            data: officeArr1,
            allowClear: false
        });
    })

    _selectELe.change(function () {
        //获取当前数据
        var res = _selectELe.select2("data")[0];
        //当前select标签
        var self = res.element.parentNode;
        var selfClass = $(self).attr("class");
        var classArr = selfClass.split(" ");
        var selfSpan = self.nextElementSibling;
        //其后所有的兄弟
        var afterSelect = $(self).nextAll("select");
        var afterSpan = $(selfSpan).nextAll("span");
        //其父元素div.pop_input
        var $div = $(self).parents(".pop_input");
        //获取当前div下第一个select
        var $selectFirst = $div.find("select").eq(0);
        //添加按钮显示
        if (classArr[0] == "organ-select") {
            $("#pop_wrap .addOffice").css("display", "inline-block");
        }
        //其后所有的删除
        afterSelect.remove();
        afterSpan.remove();
        if (res.id != "-1") {//如果用户选择了组织机构，就看他有没有子级组织机构
            if (res.isChild) {//布尔值 true
                //获取当前div下第一个select的类名
                var firstClass = $selectFirst.attr("class").split(" ");
                var tempClassArr = firstClass[0].split("-");
                var tempArr = tempClassArr.splice(1, 0, res.id);
                var newClass = tempClassArr.join("-");

                var $newSelect = $("<select></select>");
                $newSelect.attr("class", "" + newClass + " popSelect");
                $(selfSpan).after($newSelect);

                //调用函数自身
                OrganizationList(res.id, $("#pop_wrap ." + newClass + ""), CurrentSchoolID);
            };
        } else {//如果用户选择默认项：无
            var idClassArr = classArr[0].split("-");
            if (idClassArr.length == 2) {

            } else {//数组长度为3、4
                if (idClassArr[1] == "select") {//动态创建的pop_input
                    $div.remove();
                } else {
                    $(self).remove();
                    $(selfSpan).remove();
                };
            };
        };
    });
}

//编辑弹窗 默认展示的组织机构下拉 绑定change事件
function selectChange(ele) {
    //编辑弹窗状态改变事件
    ele.change(function (e) {
        //当前select标签
        var self = e.target;
        var selfClass = $(self).attr("class");
        var classArr = selfClass.split(" ");
        var selfSpan = self.nextElementSibling;
        //其后所有的兄弟
        var afterSelect = $(self).nextAll("select");
        var afterSpan = $(selfSpan).nextAll("span");
        //其父元素div.pop_input
        var $div = $(self).parents(".pop_input");
        if ($(this).val() == "-1") {////如果用户选择默认项：无
            //其后所有的删除
            afterSelect.remove();
            afterSpan.remove();
            var idClassArr = classArr[0].split("-");
            // ["organ", "select"] ["organ", "17893", "select"] ["organ", "select", "edit2"] ["organ", "17908", "select", "edit2"]
            if (idClassArr.length == 2) {
                $(self).remove();
                $(selfSpan).remove();

            } else {//数组长度为3、4
                if (idClassArr[1] == "select") {//动态创建的pop_input
                    $div.remove();
                } else {
                    $(self).remove();
                    $(selfSpan).remove();
                };
            };
        };
    });
}

//编辑弹窗组织机构数据展示 
//参数：当前班级所属的组织机构id数组
function organDataShow(organIdArr) {
    $("#pop_wrap .addOffice").css("display", "inline-block");
    if (organIdArr.length == 1) {//当前有1个组织机构
        Ajax.ajax({
            url: AjaxUrls.OrganizationUrl.GetParent,
            data: { OrganizationID: organIdArr[0].OrganizationID }
        }).done(function (data) {
            for (var j = 0 ; j < data.length; j++) {
                var currentItem = [{ id: data[j].ID, text: data[j].Name }, { id: -1, text: "默认：无" }];
                if (j == 0) {
                    //编辑弹窗  初始化 组织下拉框 组织数据展示
                    $("#pop_wrap .organ-select").empty();
                    Select2.SelectPicker({
                        obj: $("#pop_wrap .organ-select"),
                        data: currentItem,
                        allowClear: false
                    });
                    selectChange($("#pop_wrap .organ-select"));
                } else {
                    //找到前一个select
                    var $tempSelect = $("#pop_wrap .OfficeWrap .pop_input").find("select").eq(j - 1);
                    var tempSpan = $tempSelect[0].nextElementSibling;

                    //动态创建新的下拉
                    var $newSelect = $("<select></select>");
                    $newSelect.attr("class", "organ-" + data[j - 1].ID + "-select popSelect");
                    $(tempSpan).after($newSelect);

                    //编辑弹窗  初始化 组织下拉框 组织数据展示
                    $newSelect.empty();
                    Select2.SelectPicker({
                        obj: $newSelect,
                        data: currentItem,
                        allowClear: false
                    });
                    //绑定change事件
                    selectChange($newSelect);
                };
            };
        })
    } else {//当前有多个组织机构
        var num = 0;
        for (var i = 0; i < organIdArr.length; i++) {
            if (retturn_flag) {
                retturn_flag = false;
                Ajax.ajax({
                    url: AjaxUrls.OrganizationUrl.GetParent,
                    data: { OrganizationID: organIdArr[i].OrganizationID },
                    async: false
                }).done(function (organData) {
                    retturn_flag = true;
                    num++;
                    for (var j = 0 ; j < organData.length; j++) {
                        var ritem = organData[j];
                        var selectItem = [{ id: ritem.ID, text: ritem.Name }, { id: -1, text: "默认：无" }];
                        if (num == 1 && j == 0) {
                            $("#pop_wrap .organ-select").empty();
                            Select2.SelectPicker({
                                obj: $("#pop_wrap .organ-select"),
                                data: selectItem,
                                allowClear: false
                            });
                            selectChange($("#pop_wrap .organ-select"));
                        } else if (num > 1 && j == 0) {
                            var $div = $("<div></div>");
                            var divHtml = '<span class="attribute_name"><i class="rice"></i></span>&nbsp;' +
                                            '<select id="" class="organ-select-edit' + num + ' popSelect"></select>' +
                                            '<i class="rice OfficeName"></i>';
                            $div.attr("class", "pop_input").html(divHtml).appendTo($("#pop_wrap .OfficeWrap"));

                            $("#pop_wrap .organ-select-edit" + num + "").empty();
                            Select2.SelectPicker({
                                obj: $("#pop_wrap .organ-select-edit" + num + ""),
                                data: selectItem,
                                allowClear: false
                            });
                            selectChange($("#pop_wrap .organ-select-edit" + num + ""));
                        } else {
                            var $thisDiv = $("#pop_wrap .OfficeWrap").find(".pop_input").eq(num - 1);
                            var firstClassStr = $thisDiv.find("select").eq(0).attr("class");
                            var firstClass = firstClassStr.split(" ");
                            var tempClassArr = firstClass[0].split("-");
                            var tempArr = tempClassArr.splice(1, 0, organData[j - 1].ID);
                            var newClass = tempClassArr.join("-");
                            //找到当前div下的前一个select
                            var $temSelect = $thisDiv.find("select").eq(j - 1);
                            var temSpan = $temSelect[0].nextElementSibling;
                            //动态创建新的下拉
                            var $createSelect = $("<select></select>");
                            $createSelect.attr("class", "" + newClass + " popSelect");
                            $(temSpan).after($createSelect);
                            //编辑弹窗  初始化 组织下拉框 组织数据展示
                            $createSelect.empty();
                            Select2.SelectPicker({
                                obj: $createSelect,
                                data: selectItem,
                                allowClear: false
                            });
                            selectChange($createSelect);
                        };
                    };
                })
            };
        }
    }
}

//增加编辑弹窗 添加组织机构按钮 点击函数
function addOrganClick(schoolID) {  
    var clickCount = 0;
    $("#pop_wrap .addOffice").click(function () {
        var $firstDiv = $("#pop_wrap .OfficeWrap .pop_input:eq(0)");
        var $firstSelects = $firstDiv.find("select");
        if ($firstSelects.length == 0) {
            var $select = $("<select></select>")
            $select.attr("class", "organ-select popSelect");
            $firstDiv.find(".OfficeName").before($select);
            OrganizationList("0", $select, schoolID);
        } else {
            clickCount++;
            var $div = $("<div></div>");
            var divHtml = '<span class="attribute_name"><i class="rice"></i></span>&nbsp;' +
                            '<select id="" class="organ-select-' + clickCount + ' popSelect"></select>' +
                            '<i class="rice OfficeName"></i>';
            $div.attr("class", "pop_input").html(divHtml).appendTo($("#pop_wrap .OfficeWrap"));
            OrganizationList("0", $("#pop_wrap .organ-select-" + clickCount + ""), schoolID);
        }

    });
}

//增加编辑弹窗--组织机构表单验证
// 设置最后选择的不为空的组织机构下拉列表的name属性
// 遍历每一组下拉列表，找到最后一个选择了组织机构的下拉列表，把它的name值设置为 OrganizationID
//参数：设置的name属性值
function organForm(nameVal) {
    var $divs = $("#pop_wrap .OfficeWrap .pop_input");
    var organFormData = [];
    var organFormObj = {};
    var currentVal = "";
    $.each($divs, function (index, item) {
        var $selects = $(item).find("select");
        var selectIdArr = [];
        $.each($selects, function (inDex, ele) {
            selectIdArr.push($(ele).val());
        });

        if (selectIdArr.length!= 1 || selectIdArr[0] != "-1") {       
            indexOfIE();
            var _index = selectIdArr.indexOf("-1");
            if (_index != -1) {//存在默认项:无
                currentVal = $(item).find("select").eq(_index - 1).val();
                organFormObj = { divIndex: index, selectIndex: (_index - 1), selectVal: currentVal };              
            } else {
                currentVal = $(item).find("select").eq(selectIdArr.length - 1).val();
                organFormObj = { divIndex: index, selectIndex: (selectIdArr.length - 1), selectVal: currentVal };
            }
            organFormData.push(organFormObj);
        }
    });

    //组织机构去重
    var tempArr = [], organArray = [];
    indexOfIE();
    for (var i = 0 ; i < organFormData.length; i++) {
        if (tempArr.indexOf(organFormData[i].selectVal) == -1) {
            tempArr.push(organFormData[i].selectVal);
            organArray.push(organFormData[i]);
        };
    };
 
    for (var j = 0; j < organArray.length; j++) {
        var $setDiv = $("#pop_wrap .OfficeWrap .pop_input").eq(organArray[j].divIndex);
        $setDiv.find("select").eq(organArray[j].selectIndex).attr("name", nameVal);
    };
}

//ie8兼容数组indexOf方法
function indexOfIE () {
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
            };
            return -1;
        };
    };
}

