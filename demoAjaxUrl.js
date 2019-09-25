//https://miyun.smartclass.cn/Js/AjaxUrl.js
var AjaxUrls = {
    BuctUrls: {
        GetModule: "/Buct/Api/Buct.ashx/GETMODULE",
        GetMoculeList: "/Buct/Api/Buct.ashx/GETLIST",
        CreateModule: "/Buct/Api/Buct.ashx/CREATE",
        DeleteModule: "/Buct/Api/Buct.ashx/DELETE",
        ModifyModule: "/Buct/Api/Buct.ashx/Modify",
        GetUserList: "/Buct/Api/Buct.ashx/GETUSERLIST?schoolID=1",
        GetCurrentUserModules: "/Buct/Api/Buct.ashx/GETCURRENTUSERMODULES",
        ChangeAccessQuantity: "/Buct/Api/Buct.ashx/CHANGEACCESSQUANTITY",
        ValidUser: "/Buct/Api/Buct.ashx/VALIDUSER"
    },
    UserUrls: {
        /* ID:用户ID 查询单个 传入ID , 查询所有(ID=0, QueryCondition:查询条件, PageSize：页数大小, PageNumber：页码), 输出 {"Success":true,"Message":"失败原因","Value":["TotalCount":15,"Data":[{"ID": 145,"Account":"用户名" ,"ImageFileUri":"头像", "Name": "姓名", "Sex":"0男 1女" , "TelNumber":"联系电话","RoleList":"[{"RoleID":1 , "RoleName":"角色名"}]" "CreatorID": 121,"CreatorName": "创建人","Memo": "备注","CreateTime": "2017-06-06 12:53:31"}]]}   */
        QueryUser: "/User/Select",

        /* QueryCondition:查询条件, 输出: {"Success":true,"Message":"失败原因","Value":}*/
        UserCount: "/User/Count",

        /* ID:用户ID(若无 ID=0)), Account:用户名  输出  {"Success":true,"Message":"失败原因","Value":} */
        IsExist: "/User/ValidateAccount",

        /* Account:用户名, Name：姓名, PassWord：密码,RoleID:通过表单Post过来(RoleID=&RoleID=),  Sex：0男 1女, TelNumber：电话号码, Memo：备注,  HasImage:是否有图片 true or false, Width:图片宽 , Height:图片高 , ResizeMode:0-禁用调整大小 1-调整到指定的尺寸 2-调整到指定的比例 , 输出 {"Success":true,"Message":"失败原因","Value":}*/
        AddUser: "/User/Add",

        /* ID:用户ID, Account:用户名, Name：姓名, PassWord：密码, RoleID:通过表单Post过来(RoleID=&RoleID=),  Sex：0男 1女, TelNumber：电话号码, Memo：备注,  HasImage:是否有图片 true or false, Width:图片宽 , Height:图片高 , ResizeMode:0-禁用调整大小 1-调整到指定的尺寸 2-调整到指定的比例 , 输出 {"Success":true,"Message":"失败原因","Value":}*/
        UpdateUser: "/User/Update",

        /* ID:用户ID  批量删除 ID-ID-ID  输出 {"Success":true,"Message":"失败原因","Value":}*/
        DelUser: "/User/Del",

        /* PassWord:旧密码 , NewPassWord:新密码  输出 {"Success":true,"Message":"失败原因","Value":}*/
        ChangePassWord: "/User/ChangePassWord",

        /*UserID:用户ID */
        ResetPassWord: "/User/ResetPassWord",

        /*获取guid*/
        GetCurrentAccessToken: "/User/GetCurrentAccessToken",

        /*RoleID:角色ID 查询单个 传入RoleID , 查询(QueryCondition: 查询条件（空）,RoleID = 122, PageSize：页数大小, PageNumber：页码), 输出 {"Success":true,"Message":"失败原因","Value":["TotalCount":15,"Data":[{"ID": 145,"Account":"用户名" ,"ImageFileUri":"头像", "Name": "姓名", "Sex":"0男 1女" , "TelNumber":"联系电话","RoleList":"[{"RoleID":1 , "RoleName":"角色名"}]" "CreatorID": 121,"CreatorName": "创建人","Memo": "备注","CreateTime": "2017-06-06 12:53:31"}]]}   */
        GetCurrentRoleUsers: "/User/SelectRoleUser"
    },
    RoleUrls: {
        /* ID:角色ID 查询单个 传入ID  输出 {"Success":true,"Message":"失败原因","Value":[{"ID": 145,"Name": "角色名","Memo": "备注","CreateTime": "2017-06-06 12:53:31"}]} */
        QueryRole: "/Role/Select",

        /*角色分页 NameKey:名称关键字,PageSize：页大小，PagNumber：页码*/
        RoleList: "/Role/RoleList",

        /*ID:角色ID (若无 ID=0)  Name:角色名称 输出  {"Success":true,"Message":"失败原因","Value":} */
        IsExist: "/Role/ValidateName",

        /*Name：角色名, Memo：备注, 输出  {"Success":true,"Message":"失败原因","Value":} */
        AddRole: "/Role/Add",

        /*ID:角色ID, Name：角色名, Memo：备注, 输出  {"Success":true,"Message":"失败原因","Value":} */
        UpdateRole: "/Role/Update",

        /*ID:角色ID  批量删除 ID-ID-ID 输出 {"Success":true,"Message":"失败原因","Value":} */
        DelRole: "/Role/Del"
    },
    SubjectUrls: {
        /* ID:学科ID 查询单个 传入ID 查询所有 ID=0, QueryCondition:查询条件,FatherID：上级学科ID(此参数可有可无 顶级学科 FatherID=0)， PageSize：页数大小, PageNumber：页码,   输出{"Success":true,"Message":"失败原因","Value":["TotalCount":15,"Data":[{"ID": 145,"No": "学科编号","Name": "学科名", "CreatorID": 121,"CreatorName": "创建人","Memo": "备注","CreateTime": "2017-06-06 12:53:31"}]]}  */
        QuerySubject: "/Subject/Select",

        /* ID:学科ID   Name:学科名称 输出  {"Success":true,"Message":"失败原因","Value":} */
        IsExist: "/Subject/ValidateName",

        /*SubjectID:(int)年级ID, Up:(bool)上升 true  下降 false 输出 {"Success":true,"Message":"失败原因","Value":}  */
        MoveSubject: "/Subject/Move",

        /* ID:学科ID    No:学科编号  输出  {"Success":true,"Message":"失败原因","Value":}  */
        NoIsExist: "/Subject/ValidateNo",

        /* SubjectID:学科ID 输出 {"Success":true,"Message":"失败原因","Value":} */
        GetParent: "/Subject/GetParent",

        /* ID:0, QueryCondition:查询条件, PageSize：页数大小, PageNumber：页码,FatherID：上级学科ID(此参数可有可无 顶级学科 FatherID=0)  输出  {"Success":true,"Message":"失败原因","Value":} */
        SubjectCount: "/Subject/Count",

        /*No: 学科编号,Name：学科名, Memo：备注, imagePath : 图标 ,FatherId 父级学科ID  输出{"Success":true,"Message":"失败原因","Value":} */
        AddSubject: "/Subject/Add",

        /* ID:学科ID,No: 学科编号,Name：学科名,Memo：备注, imagePath : 图标 ,FatherId 父级学科ID  输出  {"Success":true,"Message":"失败原因","Value":}  */
        UpdateSubject: "/Subject/Update",

        /*ID:学科ID  批量删除 ID-ID-ID  输出 {"Success":true,"Message":"失败原因","Value":}  */
        DelSubject: "/Subject/Del"
    },
    MaterialUrls: {
        /* ID:教材ID 查询单个 传入ID 查询所有 ID=0, QueryCondition:查询条件, PageSize：页数大小, PageNumber：页码,   输出 {"Success":true,"Message":"失败原因","Value":[["TotalCount":15,"Data":[{"ID": 145,"No":"教材编号","Name": "教材名称", "CreatorID": 121,"CreatorName": "创建人","Memo": "备注","CreateTime": "2017-06-06 12:53:31"}]]}  */
        QueryMaterial: "/Material/Select",

        /* ID:教材ID （若无 ID=0)   Name:教材名称 输出  {"Success":true,"Message":"失败原因","Value":}  */
        IsExist: "/Material/ValidateName",

        /* ID:学科ID （若无 ID=0)   No:学科编号 输出 {"Success":true,"Message":"失败原因","Value":}  */
        NoIsExist: "/Material/ValidateNo",

        /*ID:0,QueryCondition:查询条件, 输出  {"Success":true,"Message":"失败原因","Value":}  */
        MaterialCount: "/Material/Count",

        /*No:教材编号,Name：教材名,Memo：备注  输出  {"Success":true,"Message":"失败原因","Value":} */
        AddMaterial: "/Material/Add",

        /*ID:教材ID,No:教材编号, Name：教材名,Memo：备注 输出  {"Success":true,"Message":"失败原因","Value":}  */
        UpdateMaterial: "/Material/Update",

        /*ID:教材ID   批量删除 ID-ID-ID 输出 {"Success":true,"Message":"失败原因","Value":}  */
        DelMaterial: "/Material/Del"
    },
    PhaseUrls: {
        /* PhaseID:学段ID 查询单个 传入ID 查询所有 PhaseID=0, *  输出 {"Success":true,"Message":"失败原因","Value":[{"PhaseID": 145,"PhaseName": "学段名称", "OrderID":"序号" ,"GradeList": [ { "GradeID": 18313, "GradeName": "学前班" } ], "CreatorID": 121,"CreatorName": "创建人","Memo": "备注","CreateTime": "2017-06-06 12:53:31"}]} */
        QueryPhase: "/Phase/Select",

        /* PhaseName：学段名,Memo：备注 输出  {"Success":true,"Message":"失败原因","Value":} */
        AddPhase: "/Phase/Add",

        /*PhaseID:学段ID, Up 上升 true  下降 false 输出 {"Success":true,"Message":"失败原因","Value":}*/
        MovePhase: "/Phase/Move",

        /* PhaseID:学段ID （若无 PhaseID=0)   PhaseName:学段名称 输出  {"Success":true,"Message":"失败原因","Value":}  */
        IsExist: "/Phase/ValidateName",

        /*PhaseID:学段ID, PhaseName：学段名,Memo：备注 输出  {"Success":true,"Message":"失败原因","Value":} */
        UpdatePhase: "/Phase/Update",

        /*PhaseID:学段ID  批量删除 ID-ID-ID 输出  {"Success":true,"Message":"失败原因","Value":} */
        DelPhase: "/Phase/Del"
    },
    GradeUrls: {
        /* GradeID:学段ID 查询单个 传入GradeID 查询所有 GradeID=0, PhaseID : 所属学段ID  输出 {"Success":true,"Message":"失败原因","Value":[{"GradeID": 145,"GradeNo":"年级编号" ,"GradeName": "年级名称", "OrderID":"序号" , "CreatorID": 121,"CreatorName": "创建人","Memo": "备注","CreateTime": "2017-06-06 12:53:31","PhaseID":1,"PhaseName":"学段名称"}]}  */
        QueryGrade: "/Grade/Select",

        /*GradeNo:(string)年级编号 ,GradeName:(string)年级名,Memo:(string)备注, PhaseID:(int)学段ID, StartTime:(DateTime)开始时间, EndTime（DateTime):结束时间, TotalDays（int)：总天数  输出 {"Success":true,"Message":"失败原因","Value":}  */
        AddGrade: "/Grade/Add",

        /*GradeID:(int)年级ID, Up:(bool)上升 true  下降 false 输出 {"Success":true,"Message":"失败原因","Value":}  */
        MoveGrade: "/Grade/Move",

        /*  GradeID:(int?)年级ID ,GradeName:(string)学段名称  PhaseID:(int)所属学段ID 输出  {"Success":true,"Message":"失败原因","Value":} */
        IsExist: "/Grade/ValidateName",

        /*  GradeID:(int?)年级ID    GradeNo:(string)年级编号,PhaseID:(int) 学段ID  输出  {"Success":true,"Message":"失败原因","Value":} */
        NoIsExist: "/Grade/ValidateNo",


        /*GradeID:年级ID, GradeNo:年级编号 ,GradeName：年级名,Memo：备注, PhaseID : 学段ID, StartTime:(DateTime)开始时间, EndTime（DateTime):结束时间, TotalDays（int)：总天数  输出 {"Success":true,"Message":"失败原因","Value":} */
        UpdateGrade: "/Grade/Update",

        /*GradeID:年级ID   批量删除 ID-ID-ID 输出  {"Success":true,"Message":"失败原因","Value":} */
        DelGrade: "/Grade/Del",

        /*  输出 {"Success":true,"Message":"失败原因","Value":[{"GradeID": 145,"GradeNo":"年级编号" ,"GradeName": "年级名称", "OrderID":"序号" , "CreatorID": 121,"CreatorName": "创建人","Memo": "备注","CreateTime": "2017-06-06 12:53:31","PhaseID":1,"PhaseName":"学段名称"}]} */
        GetGrades: "/Grade/GetGrades"
    },
    OperationPermissionUrls: {
        /*  RoleID:角色ID  输出 {"Success":true,"Message":"失败原因","Value":["ID" : ID, "HasOperation": true or false,"Name" : "操作类别名称", "type" : "操作类型", "Description" : "描述"]}  */
        QueryOperationPermission: "/Permission/SelectOperationPermission",

        /*  RoleID:角色ID UpdateContent:13=true&14=false   输出 {"Success":true,"Message":"失败原因","Value":} */
        UpdateOperationPermission: "/Permission/UpdateOperationPermission",

        /*参数:RoleID:角色ID 输出 {"Success":true,"Message":"失败原因","Value":[{"ID":"Video","Name":"视频","PermissionRange":[{"GroupID":"组ID","PID":"All","PName":"全部","Description":"可以查看全部视频数据","IsConfigurable":true,"CanModifyData":true,"PermissionValue":0}]}]}*/
        GetManagerPermission: "/Permission/SelectManagePermission",

        /*参数:RoleID:角色ID , Content:传入JSON 格式 [{"ID":"Video","PID":"视频","GroupID":"组ID","PermissionValue":"","RuleValue":"规则值"}] 输出 {"Success":true,"Message":"失败原因","Value":}*/
        SetManagerPermission: "/Permission/UpdateManagePermission",

        /*当前用户是否拥有控制课表录制和直播的权限   输入参数: ScheduleID:课表ID    输出:{"Success":true,"Message":"失败原因","Value":{"HasRecordPermission":true,"HasLivePermission":true}}*/
        HasControlRecordOrLivePermission: "/Permission/HasControlRecordOrLivePermission",

        /*获取后台页面显示列表  输出: {"Success":true,"Message":"失败原因","Value":{"ID":1,"Name":"系统创始人","schoolID":0,"Sex":false,"Memo":null,"TelNumber":null,"PermissionList":[{"PermissionID":16,"Value":true,"Name":"操作日志管理"},{"PermissionID":20,"Value":true,"Name":"用户管理"}]}}*/
        SystemSpacePageList: "/Permission/SystemSpacePageList",

        /*获取个人空间页面显示列表  输出: {"Success":true,"Message":"失败原因","Value":{"ID":1,"Name":"系统创始人","schoolID":0,"No":"222","Sex":false,"Memo":null,"TelNumber":null,"PermissionList":[{"PermissionID":16,"Value":true,"Name":"操作日志管理"},{"PermissionID":20,"Value":true,"Name":"用户管理"}]} */
        UserSpacePageList: "/Permission/UserSpacePageList"
    },
    QuerySystemLogUrls: {
        /* 输出{"Success":true,"Message":"失败原因","Value":["角色管理","教材管理","学科管理","用户管理"]}  */
        QueryCategory: "/SystemLog/Category",

        /* Category:操作类型 输出 {"Success":true,"Message":"失败原因","Value":["添加","删除","修改"]}  */
        QueryTypes: "/SystemLog/Types",

        /* RecordID:操作日志ID  输出 {"Success":true,"Message":"失败原因","Value":["RecordID":ID, "UserID":UserID,  "UserName"："用户名",  "IPAddress":"IP地址",  "OperationCategory":"操作类型",  "OperationType":"操作类别",  "OperationDescription":"操作描述", "OperationResult":"操作结果",  "CreateTime":"操作时间"]} */
        QueryRecordByID: "/SystemLog/GetRecordByID",

        /* UserNameKey : 用户名称关键字 , OperationDescriptionLikeKey:搜索关键字 , OperationCategory ：操作类型 OperationType：操作类别  StartTime：开始时间  StopTime ：结束时间   PageSize：页数大小, PageNumber：页码,  输出 {"Success":true,"Message":"失败原因","Value":[TotalCount:124,Data:["ID":ID, "UserID":UserID,  "UserName"："用户名",  "IPAddress":"IP地址",  "OperationCategory":"操作类型",  "OperationType":"操作类别",  "OperationDescription":"操作描述", "OperationResult":"操作结果",  "CreateTime":"操作时间"]]}  */
        QueryRecords: "/SystemLog/QueryRecords",

        /*roomID: 教室ID ,pageSize:页面大小,pageNumber:页码 输出:{"Success":true,"Message":"失败原因","Value":[TotalCount:124,Data:["UserName"："用户名",UserAccounNo:"用户账号"  "IPAddress":"IP地址", "OperationDescription":"操作描述", "OperationResult":"操作结果",  "CreateTime":"操作时间"]]}*/
        QueryControlRecords: "/SystemLog/QueryControlRecords"
    },
    SchoolUrl: {
        /* SchoolID:学校ID 查询单个 传入ID 查询所有 ID=0, QueryCondition:查询条件,  PageSize：页数大小, PageNumber：页码,  输出 {"Success":true,"Message":"失败原因","Value":[TotalCount:456,Data:[{"SchoolID": 145,"SchoolNo":"学校编号","SchoolName": "学校名称","Address":"地址","PersonName":"姓名","TelNumber":"电话号码","PhaseList":[{"PhaseID":学段ID,"PhaseName":"学段名","GradeList":[{"GradeID":年级ID,"GradeName":"年级名"}]}],"CreatorID": 121,"CreatorName": "创建人","Memo": "备注","CreateTime": "2017-06-06 12:53:31"}]]} */
        QuerySchool: "/School/Select",

        /*  SchoolID:学校ID （若无 SchoolID=0)   SchoolName:学校名称   输出  {"Success":true,"Message":"失败原因","Value":}  */
        IsExist: "/School/ValidateName",

        /*  SchoolID:学校ID （若无 ID=0)   SchoolNo:学校编号  输出 {"Success":true,"Message":"失败原因","Value":}  */
        NoIsExist: "/School/ValidateNo",

        /* QueryCondition:查询条件,  输出  {"Success":true,"Message":"失败原因","Value":}  */
        SchoolCount: "/School/Count",

        /*SchoolNo:学校编号,SchoolName: "学校名称",Address:"地址",PersonName:"姓名",TelNumber:"电话号码",PhaseID:"所属学段ID列表(PhaseID=&PhaseID=),Memo:"备注" 输出 {"Success":true,"Message":"失败原因","Value":} */
        AddSchool: "/School/Add",

        /*SchoolID: 145,SchoolNo:学校编号,SchoolName: "学校名称",Address:"地址",PersonName:"姓名",TelNumber:"电话号码",PhaseID:"所属学段ID列表(PhaseID=&PhaseID=) , Memo:"备注" 输出 {"Success":true,"Message":"失败原因","Value":} */
        UpdateSchool: "/School/Update",

        /* SchoolID:学校ID  批量删除 ID-ID-ID  输出 {"Success":true,"Message":"失败原因","Value":} */
        DelSchool: "/School/Del",

        /* 参数 ： SchoolID 学校ID {"Success":true,"Message":"失败原因","Value":{ "SchoolID": 5364, "SchoolNo":"学校编号","SchoolName": "清华大学", "Address": "天朝帝都", "PersonName": "皇帝", "TelNumber": "", "PhaseList": [ { "PhaseID": 18011, "PhaseName": "社科院", "GradeList": [ { "GradeID": 18864, "GradeName": "社一" }, { "GradeID": 18865, "GradeName": "社二" } ] }, { "PhaseID": 17979, "PhaseName": "大学", "GradeList": [ { "GradeID": 17988, "GradeName": "大一" }, { "GradeID": 17989, "GradeName": "大二" }, { "GradeID": 17990, "GradeName": "大三" }, { "GradeID": 17991, "GradeName": "大四" } ] }, { "PhaseID": 17978, "PhaseName": "高中", "GradeList": [ { "GradeID": 17985, "GradeName": "一年级" }, { "GradeID": 17986, "GradeName": "二年级" }, { "GradeID": 17987, "GradeName": "三年级" } ] } ], "CampusList": [ { "CampusID": 5421, "CampusName": "1111", "TeachingBuildingList": [ { "TeachingBuildingID": 5423, "TeachingBuildingName": "教学楼1" } ] }, { "CampusID": 5422, "CampusName": "2222", "TeachingBuildingList": [ { "TeachingBuildingID": 5425, "TeachingBuildingName": "教学楼22" } ] }, { "CampusID": 5460, "CampusName": "A校区", "TeachingBuildingList": [ { "TeachingBuildingID": 5464, "TeachingBuildingName": "文学楼" } ] }, { "CampusID": 5461, "CampusName": "B校区", "TeachingBuildingList": [ { "TeachingBuildingID": 5462, "TeachingBuildingName": "学子楼" } ] } ], "CreatorID": 1, "CreatorName": "系统创始人", "Memo": "（服务器测试专修学校）", "CreateTime": "2017-07-03 09:43:52" }}  */
        SelectSchool: "/School/SelectSchool"
    },
    CampusUrl: {
        /* CampusID:校区ID 查询单个 传入ID 查询所有 ID=0,  SchoolID:所属学校ID, 输出{"Success":true,"Message":"失败原因","Value":[TotalCount:456,Data:[{"CampusID": 145,"CampusNo":"校区编号","CampusName": "校区名称","Address":"地址","PersonName":"姓名","TelNumber":"电话号码","SchoolID":"所属学校ID","SchoolName":"所属学校名字","CreatorID": 121,"CreatorName": "创建人","Memo": "备注","CreateTime": "2017-06-06 12:53:31"}]]}  */
        QueryCampus: "/Campus/Select",

        /*  CampusID:校区ID 可有可无)   CampusName:校区名称  SchoolID :所属学校ID 输出 {"Success":true,"Message":"失败原因","Value":} */
        IsExist: "/Campus/ValidateName",

        /* CampusID:校区ID 可有可无)   CampusNo:校区编号  SchoolID :所属学校ID  输出  {"Success":true,"Message":"失败原因","Value":} */
        NoIsExist: "/Campus/ValidateNo",

        /* SchoolID :所属学校ID  输出  {"Success":true,"Message":"失败原因","Value":} */
        SchoolCount: "/Campus/Count",

        /*CampusNo:校区编号,CampusName: "校区名称",Address:"地址",PersonName:"姓名",TelNumber:"电话号码",SchoolID:"所属学校ID" 输出 {"Success":true,"Message":"失败原因","Value":} */
        AddCampus: "/Campus/Add",

        /*CampusID: 145,CampusNo:校区编号,CampusName: "校区名称",Address:"地址",PersonName:"姓名",TelNumber:"电话号码",SchoolID:"所属学校ID"  输出 {"Success":true,"Message":"失败原因","Value":} */
        UpdateCampus: "/Campus/Update",

        /* CampusID:校区ID  批量删除 ID-ID-ID  输出 {"Success":true,"Message":"失败原因","Value":}   */
        DelCampus: "/Campus/Del"
    },
    TeachingBuildingUrl: {
        /* TeachingBuildingID:教学楼ID 查询单个 传入ID 查询所有 ID=0, QueryCondition:查询条件, CampusID:所属校区ID(可不传), SchoolID:学校ID
        分页 PageSize：页数大小, PageNumber：页码
        不分页 Count:条数 (int?null)
        输出 {"Success":true,"Message":"失败原因","Value":[TotalCount:456,Data:[{"TeachingBuildingID": 145,"TeachingBuildingNo": "教学楼编号","TeachingBuildingName": "教学楼名称","Address":"地址","PersonName":"姓名","TelNumber":"电话号码","SchoolID":"所属校区ID","SchoolName":"所属校区名字","CreatorID": 121,"CreatorName": "创建人","Memo": "备注","CreateTime": "2017-06-06 12:53:31"}]]}
        */
        QueryTeachingBuilding: "/TeachingBuilding/Select",

        /* TeachingBuildingID:教学楼ID 可有可无)   TeachingBuildingName:教学楼名称  CampusID :所属校区ID 输出  {"Success":true,"Message":"失败原因","Value":}  */
        IsExist: "/TeachingBuilding/ValidateName",

        /* TeachingBuildingID:教学楼ID 可有可无)   TeachingBuildingN0:教学楼编号  CampusID :所属校区ID  输出  {"Success":true,"Message":"失败原因","Value":}  */
        NoIsExist: "/TeachingBuilding/ValidateNo",

        /* QueryCondition:查询条件,  CampusID :所属校区ID（可有可无）, SchoolID:学校ID  输出 {"Success":true,"Message":"失败原因","Value":} */
        TeachingBuildingCount: "/TeachingBuilding/Count",

        /*TeachingBuildingNo: 教学楼编号,TeachingBuildingName: "教学楼名称",Address:"地址",PersonName:"姓名",TelNumber:"电话号码",CampusID:"所属校区ID",Memo:"备注"  输出  {"Success":true,"Message":"失败原因","Value":}  */
        AddTeachingBuilding: "/TeachingBuilding/Add",

        /*TeachingBuildingID: 145,TeachingBuildingNo: 教学楼编号,TeachingBuildingName: "教学楼名称",Address:"地址",PersonName:"姓名",TelNumber:"电话号码",CampusID:"所属校区ID" ,Memo:"备注"  输出 {"Success":true,"Message":"失败原因","Value":}  */
        UpdateTeachingBuilding: "/TeachingBuilding/Update",

        /* TeachingBuildingID:教学楼ID  批量删除 ID-ID-ID 输出 {"Success":true,"Message":"失败原因","Value":} */
        DelTeachingBuilding: "/TeachingBuilding/Del"
    },
    OrganizationUrl: {
        /* OrganizationID:组织机构ID 查询单个 传入ID 查询所有 ID=0, QueryCondition:名称关键字,  SchoolID :所属学校ID ,  ParentID：上级组织机构ID(此参数可有可无 顶级组织机构 ParentID=0)， PageSize：页数大小, PageNumber：页码,
        组织机构查询有两个结果 ：如果PageSize==0&PageNumber==0 查询的结果是不分页的 ；如不等于0 查询的结果是带分页的
        输出  {"Success":true,"Message":"失败原因","Value":[TotalCount:456,Data:[{"OrganizationID": 145,"OrganizationNo": "组织机构编号","OrganizationName": "组织机构名称","SchoolID":"所属学校ID","SchoolName":"学校名称","ParentID":"上级组织机构ID","ParentName":"上级组织机构名称","HasChild":"true or false","CreatorID": 121,"CreatorName": "创建人","Memo": "备注","CreateTime": "2017-06-06 12:53:31"}]]} */
        QueryOrganization: "/Organization/Select",

        /* OrganizationName:名称,  SchoolID :所属学校ID,  ParentID：上级组织机构ID(此参数可有可无 顶级组织机构 ParentID=0), OrganizationID:此参数可有可无 输出 {"Success":true,"Message":"失败原因","Value":} */
        IsExist: "/Organization/ValidateName",

        /* OrganizationNo:名称,  SchoolID :所属学校ID,  ParentID：上级组织机构ID(此参数可有可无 顶级组织机构 ParentID=0), OrganizationID:此参数可有可无 输出  {"Success":true,"Message":"失败原因","Value":} */
        NoIsExist: "/Organization/ValidateNo",

        /* OrganizationID:组织机构ID 输出 {"Success":true,"Message":"失败原因","Value":[{"ID":1171,"Name":"理科"},{"ID":17908,"Name":"按时打算的撒"}]} 从最上级往下排 */
        GetParent: "/Organization/GetParent",

        /* QueryCondition:名称关键字,  SchoolID :所属学校ID  ParentID：上级组织机构ID(此参数可有可无 顶级组织机构 ParentID=0)  输出  {"Success":true,"Message":"失败原因","Value":} */
        OrganizationCount: "/Organization/Count",

        /*OrganizationNo: 组织机构编号,OrganizationName: "组织机构名称",Memo : 备注, ParentID：上级组织机构ID(顶级组织机构 ParentID=0)  SchoolID:"所属学校ID" 输出 {"Success":true,"Message":"失败原因","Value":}  */
        AddOrganization: "/Organization/Add",

        /*OrganizationID: 145,OrganizationNo: 组织机构编号,OrganizationName: "组织机构名称",Memo : 备注, ParentID：上级组织机构ID(顶级组织机构 ParentID=0)  SchoolID:"所属校区ID" 输出 {"Success":true,"Message":"失败原因","Value":} */
        UpdateOrganization: "/Organization/Update",

        /* OrganizationID:组织机构ID  批量删除 ID-ID-ID 输出 {"Success":true,"Message":"失败原因","Value":} */
        DelOrganization: "/Organization/Del",

        /*导入组织机构数据,上传一个表格  返回{"Success":true,"Message":"失败原因","Value":[{"Success":true,"Message":"失败原因","Value":},{"Success":true,"Message":"失败原因","Value":}]}*/
        Import: "/Organization/Import",

        /*获取导入进度   返回格式 {"Success":true,"Message":"失败原因","Value":}*/
        GetProcess: "/Organization/GetProcess",

        /*下载导入模板*/
        DownLoad: "/Organization/DownLoadTemplete",

        /*导出数据  QueryCondition:名称关键字,  SchoolID :所属学校ID  ParentID：上级组织机构ID(此参数可有可无)*/
        Export: "/Organization/Export",
    },
    SchoolYearUrl: {
        /* SchoolYearID:学年ID 查询单个 传入ID 查询所有 ID=0, SchoolID:学校ID 输出 {"Success":true,"Message":"失败原因","Value":[{"SchoolYearID": 145,"SchoolYearName": "学年名称","StartTime":"开始时间" ,"StopTime":"结束时间","SchoolID":"学校ID","SchoolName":"学校名","CreatorID": 121,"CreatorName": "创建人","Memo": "备注","CreateTime": "2017-06-06 12:53:31"}]} */
        QuerySchoolYear: "/SchoolYear/Select",

        /* SchoolYearID:学年ID （若无 SchoolYearID=0)   SchoolYearName:学年名称  SchoolID:所属学校ID  输出  {"Success":true,"Message":"失败原因","Value":} */
        IsExist: "/SchoolYear/ValidateName",

        /* SchoolYearID:学年ID(若无 SchoolYearID=0) , StartTime:开始时间 ,StopTime:结束时间, SchoolID:所属学校ID, 输出  {"Success":true,"Message":"失败原因","Value":}  */
        IsOverlap: "/SchoolYear/IsOverlap",

        /*SchoolYearName: "学年名称",StartTime:"开始时间" ,StopTime:"结束时间",SchoolID:"学校ID", Memo:备注 输出 {"Success":true,"Message":"失败原因","Value":} */
        AddSchoolYear: "/SchoolYear/Add",

        /*SchoolYearID: 145,SchoolYearName: "学年名称",StartTime:"开始时间" ,StopTime:"结束时间",SchoolID:"学校ID", Memo:备注  输出 {"Success":true,"Message":"失败原因","Value":}  */
        UpdateSchoolYear: "/SchoolYear/Update",

        /* SchoolYearID:学校ID  批量删除 ID-ID-ID  输出 {"Success":true,"Message":"失败原因","Value":} */
        DelSchoolYear: "/SchoolYear/Del"
    },
    SemeSterUrl: {
        /* SemeSterID:学期ID 查询单个 传入ID 查询所有( ID=0, SchoolID:学校ID  SchoolYearID:学年ID(该参数可有可无))
        输出 {"Success":true,"Message":"失败原因","Value":[{"SemeSterID": 145,"SemeSterName": "学期名称","StartTime":"开始时间" ,"StopTime":"结束时间","SchoolYearID":"学年ID","SchoolYearName":"学年名","CreatorID": 121,"CreatorName": "创建人","Memo": "备注","CreateTime": "2017-06-06 12:53:31"}]}
       */
        QuerySemeSter: "/SemeSter/Select",

        /*  SemeSterID:学期ID （若无 SemeSterID=0)   SemeSterName:学期名称  SchoolYearID:所属学年ID  输出  {"Success":true,"Message":"失败原因","Value":}  */
        IsExist: "/SemeSter/ValidateName",

        /* SemeSterID:学期ID(若无 SemeSterID=0) , StartTime:开始时间 ,StopTime:结束时间, SchoolYearID:所属学校ID, 输出  {"Success":true,"Message":"失败原因","Value":1:该时间段已有学期   2：学期起止时间超出学年起止时间}*/
        CheckDate: "/SemeSter/CheckDate",

        /*SemeSterName: "学期名称",StartTime:"开始时间" ,StopTime:"结束时间",SchoolYearID:"学年ID", Memo:备注  输出  {"Success":true,"Message":"失败原因","Value":}  */
        AddSemeSter: "/SemeSter/Add",

        /*SemeSterID: 145,SemeSterName: "学期名称",StartTime:"开始时间" ,StopTime:"结束时间",SchoolYearID:"学年ID", Memo:备注 输出 {"Success":true,"Message":"失败原因","Value":} */
        UpdateSemeSter: "/SemeSter/Update",

        /* SemeSterID:学期ID  批量删除 ID-ID-ID  输出 {"Success":true,"Message":"失败原因","Value":} */
        DelSemeSter: "/SemeSter/Del"
    },
    WeekUrl: {
        /* WeekID:学期ID 查询单个 传入ID 查询所有( ID=0, SchoolID:学校ID  SchoolYearID:学年ID(该参数可有可无)  SemeSterID:学期ID(该参数可有可无))
        分页: PageSize：页数大小, PageNumber：页码
        不分页: Count:数量
        输出 {"Success":true,"Message":"失败原因","Value":[TotalCount:123,Data:[{"WeekID": 145,"WeekNo": "周次编号","WeekName": "周次名称","StartTime":"开始时间" ,"StopTime":"结束时间","SemeSterID":"学期ID","SemeSterName":"学期名","CreatorID": 121,"CreatorName": "创建人","Memo": "备注","CreateTime": "2017-06-06 12:53:31"}]]}
       */
        QueryWeek: "/TeachingWeek/Select",

        /* WeekID:周次ID （若无 WeekID=0)   WeekName:周次名称  SemeSterID:所属学期ID 输出  {"Success":true,"Message":"失败原因","Value":} */
        IsExist: "/TeachingWeek/ValidateName",

        /* WeekID:周次ID(若无 WeekID=0) , StartTime:开始时间 ,StopTime:结束时间, SemeSterID:所属学期ID,  输出  {"Success":true,"Message":"失败原因","Value":3:该时间段已有周次  4：结束时间和开始时间不在同一周 5：周次起止时间超出学期起止时间}  */
        CheckDate: "/TeachingWeek/CheckDate",

        /*WeekNo: 周次编号,WeekName: "周次名称",StartTime:"开始时间" ,StopTime:"结束时间",SemeSterID:"学期ID", Memo:备注  输出 {"Success":true,"Message":"失败原因","Value":}  */
        AddWeek: "/TeachingWeek/Add",

        /*WeekID: 145,WeekNo: 周次编号,WeekName: "周次名称",StartTime:"开始时间" ,StopTime:"结束时间",SemeSterID:"学期ID", Memo:备注 输出 {"Success":true,"Message":"失败原因","Value":}  */
        UpdateWeek: "/TeachingWeek/Update",

        /* WeekID:周次ID  批量删除 ID-ID-ID  输出{"Success":true,"Message":"失败原因","Value":} */
        DelWeek: "/TeachingWeek/Del",

        /*
        SchoolID:学校ID , Times:时间
        输出:{"Success":true,"Message":"失败原因","Value":{ "SchoolYearID": 学年ID, "SchoolYearName": "学年名称", "SchoolYearStartTime":学年开始时间", "SchoolYearStopTime": "学年结束时间",
        "SemeSterID":学期ID, "SemeSterName": "学期名称", "StartTime": "学期开始时间", "StopTime": "学期结束时间", "CurrentWeekID": 当前周次ID, 
        "CurrentWeekName": "当前周次名称","CurrentWeekNo": "当前周次编号", "CurrentWeekStartTime": "当前周次开始时间", "CurrentWeekStopTime": "当前周次结束时间", 
        "WeekList": [ { "WeekID": 周次ID,"WeekNo": "周次编号", "WeekName": "周次名称", "StartTime": "开始时间", "StopTime": "结束时间", "SemeSterID": 所属学期ID, 
        "SemeSterName": "所属学期名称", "CreatorID": 1, "CreatorName": "系统创始人", "Memo": "" }] }}
        */
        GetAllWeekByTime: "/TeachingWeek/GetAllWeekByTime",


        /*自动生成教学周   SemeSterID int  学期ID  ,StartDay  int  第几天开始 ,EndDay int  第几天结束  , NameSelector  string 命名规则  第*周  *为占位符  输出{"Success":true,"Message":"失败原因","Value": }*/
        GenerateWeeks: "/TeachingWeek/GenerateWeeks"

    },
    NodeUrl: {
        /* NodeID:节次ID 查询单个 传入ID 查询所有 ID=0,SchoolID:学校ID 输出  {"Success":true,"Message":"失败原因","Value":[{"NodeID": 145,"NodeNo": "节次编号","NodeName": "节次名称","StartTime":"开始时间" ,"StopTime":"结束时间","SchoolID":"学校ID","SchoolName":"学校名","CreatorID": 121,"CreatorName": "创建人","Memo": "备注","CreateTime": "2017-06-06 12:53:31"}]} */
        QueryNode: "/Node/Select",

        /* NodeID:节次ID    NodeName:节次名称  SchoolID:所属学校ID 输出  {"Success":true,"Message":"失败原因","Value":} */
        IsExist: "/Node/ValidateName",

        /* NodeID:节次ID, StartTime:开始时间 ,StopTime:结束时间, SchoolID:所属学校ID, 输出  {"Success":true,"Message":"失败原因","Value":} */
        IsOverlap: "/Node/IsOverlap",

        /*NodeNo: 节次编号,NodeName: "节次名称",StartTime:"开始时间" ,StopTime:"结束时间",SchoolID:"学校ID", Memo:备注 输出  {"Success":true,"Message":"失败原因","Value":} */
        AddNode: "/Node/Add",

        /*NodeID: 145,NodeNo: 节次编号,NodeName: "节次名称",StartTime:"开始时间" ,StopTime:"结束时间",SchoolID:"学校ID", Memo:备注 输出{"Success":true,"Message":"失败原因","Value":} */
        UpdateNode: "/Node/Update",

        /* NodeID:节次ID  批量删除 ID-ID-ID 输出 {"Success":true,"Message":"失败原因","Value":} */
        DelNode: "/Node/Del"
    },
    ClassUrl: {
        /* ClassID:班级ID 查询单个 传入ID 查询所有(ID=0, QueryCondition:名称关键字,  SchoolID :所属学校ID ,  GradeID：所属年级ID(可有可无), PhaseID:学段ID , PageSize：页数大小, PageNumber：页码,Year:传的年份，默认为空，显示全部) 输出   {"Success":true,"Message":"失败原因","Value":[TotalCount:456,Data:[{"ClassID": 145,"ClassNo":"班级编号","ClassName": "班级名称",StudentNumber:班级人数 , "SchoolID":"所属学校ID","SchoolName":"学校名称","GradeID":"所属年级ID","GradeName":"所属年级名称","PhaseID":"所属学段ID","PhaseName":"所属学段名称",  Organzation:[{"OrganzationID":"组织机构ID"," OrganzationName":"组织机构名称"}] , "CreatorID": 121,"CreatorName": "创建人","Memo": "备注","CreateTime": "2017-06-06 12:53:31"}]]}*/
        QueryClass: "/ClassG/Select",

        /* ClassName:名称关键字,  SchoolID :学校ID,  ClassID:此参数可有可无 输出  {"Success":true,"Message":"失败原因","Value":} */
        IsExist: "/ClassG/ValidateName",

        /* ClassNo:班级编号,  SchoolID :学校ID,  ClassID:此参数可有可无  输出  {"Success":true,"Message":"失败原因","Value":}  */
        NoIsExist: "/ClassG/ValidateNo",

        /* QueryCondition:名称关键字,  SchoolID :所属学校ID  PhaseID：学段ID(此参数可有可无) , GradeID:年级ID(此参数可有可无) 输出  {"Success":true,"Message":"失败原因","Value":} */
        ClassCount: "/ClassG/Count",

        /*ClassNo:班级编号,ClassName: "班级名称",Memo : 备注, StudentNumber：学生人数,  SchoolID:"所属学校ID" , GradeID:"所属年级ID" , OrganizationID:"组织机构ID 通过表单提交(OrganizationID=&OrganizationID=) ",TeacherID:选择老师的ID, StartTime(DateTime) 开始时间,  EndTime（DateTime）：结束时间， TotalDays:(int)默认时长,Abbreviation（string）:简称  输出 {"Success":true,"Message":"失败原因","Value":} */
        AddClass: "/ClassG/Add",

        /*ClassID: 145,ClassNo:班级编号,ClassName: "班级名称",Memo : 备注, StudentNumber：学生人数,  SchoolID:"所属学校ID" , GradeID:"所属年级ID" , OrganizationID:"组织机构ID 通过表单提交(OrganizationID=&OrganizationID=),TeacherID:选择老师的ID , StartTime(DateTime) 开始时间,  EndTime（DateTime）：结束时间，TotalDays:(int)默认时长，Abbreviation（string）:简称   输出 {"Success":true,"Message":"失败原因","Value":} */
        UpdateClass: "/ClassG/Update",

        /* ClassID:班级ID  批量删除 ID-ID-ID 输出 {"Success":true,"Message":"失败原因","Value":} */
        DelClass: "/ClassG/Del",

        /*ClassID:班级ID 输出*/
        ClassStudent: "/ClassG/OwnerStudents",

        /*导入班级数据,上传一个表格  返回{"Success":true,"Message":"失败原因","Value":[{"Success":true,"Message":"失败原因","Value":},{"Success":true,"Message":"失败原因","Value":}]}*/
        Import: "/ClassG/Import",

        /*获取导入进度   返回格式 {"Success":true,"Message":"失败原因","Value":}*/
        GetProcess: "/ClassG/GetProcess",

        /*下载导入模板*/
        DownLoad: "/ClassG/DownLoadTemplete",

        /*导出数据   QueryCondition:名称关键字,  SchoolID :所属学校ID ,  GradeID：所属年级ID(可有可无), PhaseID:学段ID(可有可无)  */
        Export: "/ClassG/Export"

    },
    ServerOperationUrl: {
        /*
        ServerID:服务器ID   OperationName:操作名 (获取服务器列表时 OperationList 里面有个OperationName 获取该值传入);
        */
        Operation: "/Ashx/ServerOperation.ashx"
    },
    VirtualDirectoryOpera: {
        /* VirtualName:虚拟目录名称  , VirtualPath:虚拟目录路径 , Memo:备注 , ServerID:点播服务器ID ,UserName:用户名 ,PassWord:密码{"Success":true,"Message":"失败原因","Value":}*/
        Add: "/VirtualDirectory/Add",

        /* VirtualID:虚拟目录ID  , VirtualName:虚拟目录名称  , VirtualPath:虚拟目录路径 , Memo:备注 , ServerID:点播服务器ID ,UserName:用户名 ,PassWord:密码{"Success":true,"Message":"失败原因","Value":} */
        Update: "/VirtualDirectory/Update",

        /*VirtualID:虚拟目录ID 删除多个(VirtualID-VirtualID-VirtualID){"Success":true,"Message":"失败原因","Value":} */
        Del: "/VirtualDirectory/Del",

        /* ServerID:点播服务器ID 输出：{"Success":true,"Message":"失败原因","Value":[{"Name":"D:\\","FreeSzie":99.782352447509765625,"TotalSize":99.873043060302734375,"Folder":["D:\\A","D:\\log","D:\\share"]}]}*/
        GetDiskDetailInfo: "/VirtualDirectory/GetDiskDetailInfo"
    },
    QueryVirtualDirectory: {
        /*  ServerID:点播服务器ID  , VirtualName:名称  ,VirtualID:ID (编辑时使用)  输出 {"Success":true,"Message":"失败原因","Value":}  */
        IsNameExists: "/VirtualDirectory/ValidateName",

        /* VirtualID:虚拟目录ID  输出:{"Success":true,"Message":"失败原因","Value":{ "VirtualID": 24, "VirtualName": "测试添加2", "VirtualPath": "E:/vod-t", "FreeSize": "0", "TotalSize": "0", "Memo": "测试", "CreatorID": "1", "CreatorName": "系统创始人", "CreateTime": "2017/7/4 14:42:25", "ServerID": "58", "ServerName": "测试点播添加","ServerIP":"内网IP","ServerPort":"端口" }}  */
        GetStorage: "/VirtualDirectory/Get",

        /* QueryCondition：名称关键字, SchoolID:学校ID (此参数可有可无) ,IsIncludePublic:是否包含公共服务器(true or false) , 输出 {"Success":true,"Message":"失败原因","Value":} */
        GetStorageCount: "/VirtualDirectory/Count",

        /*  QueryCondition：名称关键字, SchoolID:学校ID (此参数可有可无),IsIncludePublic:是否包含公共服务器(true or false) , PageSize:页大小 , PageNumber: 当前页  Count:查询条数  输出;{"Success":true,"Message":"失败原因","Value":{ "TotalCount": 0, "Data": [ { "VirtualID": 24, "VirtualName": "测试添加2", "VirtualPath": "E:/vod-t", "FreeSize": "0", "TotalSize": "0", "Memo": "测试", "CreatorID": "1", "CreatorName": "系统创始人", "CreateTime": "2017/7/4 14:42:25", "ServerID": "58", "ServerName": "测试点播添加","ServerIP":"内网IP","ServerPort":"端口" } ] }}  */
        QueryVirtual: "/VirtualDirectory/Query"
    },
    CourseUrl: {
        /*参数：Attribute  string  课程属性多个用,隔开  ，IsRequired  bool  是否必修  CourseNo:课程编号 , CourseName:课程名称 ,HasImage:是否有图片 true or false ,Width:图片宽 , Height:图片高 , ResizeMode:0-禁用调整大小 1-调整到指定的尺寸 2-调整到指定的比例, Summary:简介 , Introduction:图文描述 , IsPublic:是否公开 true or false  , IsPublished:是否发布  true or false ,  IsShow:是否显示 true or false  , SchoolID:学校ID , GradeID:年级ID  , MetriID:教材ID , SubjectID:学科ID 若属于多个学科(SubjectID=90&SubjectID=91)  , OrganizationID:组织机构ID 若属于多个组织机构(OrganizationID=&OrganizationID=)  {"Success":true,"Message":"失败原因","Value":}*/
        AddUrl: "/Course/Add",

        /*参数:Attribute  string  课程属性多个用,隔开  ，IsRequired  bool  是否必修  CourseID:课程ID , CourseNo:课程编号 , CourseName:课程名称 ,HasImage:是否有图片 true or false, Width:图片宽 , Height:图片高 , ResizeMode:0-禁用调整大小 1-调整到指定的尺寸 2-调整到指定的比例 , Summary:简介 , Introduction:图文描述 , IsPublic:是否公开 true or false  , IsPublished:是否发布  true or false ,  IsShow:是否显示 true or false  , SchoolID:学校ID , GradeID:年级ID  , MetriID:教材ID , SubjectID:学科ID 若属于多个学科(SubjectID=90&SubjectID=91)  , OrganizationID:组织机构ID 若属于多个组织机构(OrganizationID=&OrganizationID=)  {"Success":true,"Message":"失败原因","Value":}*/
        UpdateUrl: "/Course/Update",

        /*参数 SchoolID:学校ID 可不传  , QueryCondition:查询条件  {"Success":true,"Message":"失败原因","Value":}*/
        GetCount: "/Course/Count",

        /*参数:SchoolID:学校ID 可不传 , CourseID:课程ID 编辑时使用 , CourseNo:课程编号 {"Success":true,"Message":"失败原因","Value":}*/
        IsExists: "/Course/NoIsExist",

        /*参数:CourseID:课程ID  删除多个(CourseID-CourseID)  {"Success":true,"Message":"失败原因","Value":}*/
        DelUrl: "/Course/Del",

        /*参数:CourseID:课程ID  {"Success":true,"Message":"失败原因","Value": { "TotalDownloadCount":视频下载数量,"CourseID": 课程ID, "CourseName": "课程名称", "CourseNo": "课程编号", "ImageFilePath": "图片路径", "ImageCount": 图片数量, "Summary": 描述, "Introduction": 详细描述, "VideoCount": 视频数量, "VideoPublishedCount": 发布数量, "DocumentCount": 文档数量, "IsPublic": 是否公开, "IsPublished": 是否发布, "IsShow": 是否显示, "SchoolID": 学校ID, "SchoolName": "河南师范大学", "GradeID": 18310, "GradeName": "小班", "MetriID": 教材ID, "MetriName": "教材名称", "SubjectList": [ { "SubjectID": 90, "SubjectName": "是的发送到" }, { "SubjectID": 91, "SubjectName": "萨达" } ], "OrganizationList": [], "Memo": null, "CreatorID": 1, "CreatorName": "系统创始人", "CreateTime": "2017-07-05 18:21:06" }}
        查询多条  SchoolID:学校ID , QueryCondition:查询关键字 ,MustHasNoSchool:是否查学校, IsRequired bool 是否必修, AnyAttributes string 属性交集关系 多条件用,隔开  AllAttributes string 属性并集关系 多条件用,隔开  OrganizationID:组织机构ID, SubjectID:学科ID,GradeID:年级ID , Count:数量, PageSize:页大小 , PageNumber:第几页  {"Success":true,"Message":"失败原因","Value":{ "TotalCount": 0, "Data": [ { "CourseID": 课程ID, "CourseName": "课程名称", "CourseNo": "课程编号", "ImageFilePath": "图片路径", "ImageCount": 图片数量, "Summary": 描述, "Introduction": 详细描述, "VideoCount": 视频数量, "VideoPublishedCount": 发布数量, "DocumentCount": 文档数量, "IsPublic": 是否公开, "IsPublished": 是否发布, "IsShow": 是否显示, "SchoolID": 学校ID, "SchoolName": "河南师范大学", "GradeID": 18310, "GradeName": "小班", "MetriID": 教材ID, "MetriName": "教材名称", "SubjectList": [ { "SubjectID": 90, "SubjectName": "是的发送到" }, { "SubjectID": 91, "SubjectName": "萨达" } ], "OrganizationList": [], "Memo": null, "CreatorID": 1, "CreatorName": "系统创始人", "CreateTime": "2017-07-05 18:21:06" } ] }}*/
        SelectUrl: "/Course/Select",

        /*CourseID:课程ID  ,  IsPublic:是否公开    {"Success":true,"Message":"失败原因","Value":}*/
        SetCourseIsPublic: "/Course/SetPublic",

        /*CourseID:课程ID  , IsPublished:是否发布       {"Success":true,"Message":"失败原因","Value":}*/
        SetCourseIsPublished: "/Course/SetPublished",

        /*CourseID:课程ID  , IsShow:是否显示  {"Success":true,"Message":"失败原因","Value":}*/
        SetCourseIsShow: "/Course/SetShow",

        /*CourseID  int  课程ID  , IsRequired   bool  是否显示  {"Success":true,"Message":"失败原因","Value":}*/
        SetIsRequired: "/Course/SetIsRequired",

        /*添加课程属性  Attribute  string  课程属性  {"Success":true,"Message":"失败原因","Value":}*/
        AddCourseAttribute: "/Course/AddCourseAttribute",

        /*删除课程属性  Attribute  string  课程属性  {"Success":true,"Message":"失败原因","Value":}*/
        DelCourseAttribute: "/Course/DelCourseAttribute",

        /*获取课程属性   {"Success":true,"Message":"失败原因","Value":["",""]}*/
        GetCourseAttributes: "/Course/GetCourseAttributes",

        /*为课程添加属性 CourseID  int  课程ID  Attribute  string  课程属性多个用,隔开  {"Success":true,"Message":"失败原因","Value":}*/
        AddAttributeToCourse: "/Course/AddAttributeToCourse",

        /*为课程移除属性 CourseID  int  课程ID  Attribute  string  课程属性多个用,隔开  {"Success":true,"Message":"失败原因","Value":}*/
        RemoveAttributeFromCourse: "/Course/RemoveAttributeFromCourse",

        /*导入课程数据,上传一个表格  返回{"Success":true,"Message":"失败原因","Value":[{"Success":true,"Message":"失败原因","Value":},{"Success":true,"Message":"失败原因","Value":}]}*/
        Import: "/Course/Import",

        /*获取导入进度   返回格式 {"Success":true,"Message":"失败原因","Value":}*/
        GetProcess: "/Course/GetProcess",

        /*下载导入模板*/
        DownLoad: "/Course/DownLoadTemplete",

        /*导出数据   QueryCondition:名称关键字,  SchoolID :所属学校ID*/
        Export: "/Course/Export"
    },
    FileUpload: {
        /*获取上传支持的文件格式 {"Success":true,"Message":"失败原因","Value":[".txt",".doc",".docx",".xls",".xlsx",".ppt",".pptx",".zip",".rar"]}  */
        GetSupportedExtensions: "/PublicOperation/GetSupportedFileExtensions",

        /*执行上传 参数: post过来的文件  返回：{"Success":true,"Message":"失败原因","Value":[["Static\\Images\\2017\\07\\06\\112048880000000001.jpg","/Static/Images/2017/07/06/112048880000000001.jpg"]]} */
        Upload: "/PublicOperation/UploadFile"
    },
    ImageUpload: {
        /*获取上传支持的图片格式 {"Success":true,"Message":"失败原因","Value":[".jpg",".jpeg",".png",".bmp"]}  */
        GetSupportedExtensions: "/PublicOperation/GetSupportedImageExtensions",

        /*执行上传   参数: post过来的文件  ,Width:图片宽 , Height:图片高 , ResizeMode:0-禁用调整大小 1-调整到指定的尺寸 2-调整到指定的比例  返回：{"Success":true,"Message":"失败原因","Value":[["Static\\Images\\2017\\07\\06\\112048880000000001.jpg","/Static/Images/2017/07/06/112048880000000001.jpg"]]}  */
        Upload: "/PublicOperation/UploadImage"
    },
    StudentUrls: {
        /*  参数:StudentID:学生ID  {"Success":true,"Message":"失败原因","Value":{"GradeList":[{"ID":年级ID ,"Name":"年级名称"}], "StudentID": 12, "StudentNo": "faferr", "ImageFileUri":"头像","StudentName": "asdfadf", "Sex": true, "TelNumber": "1231231234", "SchoolID": 5294, "SchoolName": "河南师范大学", "ClassList": [{ "ClassID": 18610, "ClassName": "01" }], "OrganizationList": [{ "OrganizationID": 18610, "OrganizationName": "01" }],"RoleList": [{ "RoleID": 18610, "RoleName": "01" }], "Memo": "测试", "CreateTime": "2017-07-06 17:26:17" }}
        查询多条  SchoolID:学校ID , QueryCondition:查询关键字 , PageSize:页大小 , PageNumber:第几页  {"Success":true,"Message":"失败原因","Value":{ "TotalCount": 1, "Data": [ {"GradeList":[{"ID":年级ID ,"Name":"年级名称"}], "StudentID": 12, "StudentNo": "faferr", "ImageFileUri":"头像","StudentName": "asdfadf", "Sex": true, "TelNumber": "1231231234", "SchoolID": 5294, "SchoolName": "河南师范大学", "ClassList": [{ "ClassID": 18610, "ClassName": "01" }], "OrganizationList": [{ "OrganizationID": 18610, "OrganizationName": "01" }],"RoleList": [{ "RoleID": 18610, "RoleName": "01" }], "Memo": "测试", "CreateTime": "2017-07-06 17:26:17" } ] }}  */
        QueryStudent: "/Student/Select",

        /* SchoolID:学校ID , QueryCondition:查询条件 ,  {"Success":true,"Message":"失败原因","Value":} */
        StudentCount: "/Student/Count",

        /*  StudentID:学生ID, Account:登录名 输出  {"Success":true,"Message":"失败原因","Value":}  */
        IsAccount: "/Student/ValidateAccount",

        /* StudentID:学生ID, StudentNo:学生编号  , SchoolID:学校ID 输出 {"Success":true,"Message":"失败原因","Value":}  */
        IsExist: "/Student/ValidateNo",

        /* StudentNo:学生编号, StudentName：姓名, SchoolID:学校ID ,PassWord:密码 ,RoleID:通过表单Post过来(RoleID=&RoleID=), GradeID:通过表单Post过来 , ClassID:班级ID  通过表单Post过来(ClassID=&ClassID=) , OrganizationID:通过表单Post过来(OrganizationID=&OrganizationID=),  Sex：0男 1女, TelNumber：电话号码, Memo：备注,   HasImage:是否有图片 true or false, Width:图片宽 , Height:图片高 , ResizeMode:0-禁用调整大小 1-调整到指定的尺寸 2-调整到指定的比例 , {"Success":true,"Message":"失败原因","Value":}*/
        AddStudent: "/Student/Add",

        /* StudentID:学生ID, StudentNo:学生编号, StudentName：姓名, SchoolID:学校ID ,RoleID:通过表单Post过来(RoleID=&RoleID=),GradeID:通过表单Post过来 ,  ClassID:班级ID  通过表单Post过来(ClassID=&ClassID=) , OrganizationID:通过表单Post过来(OrganizationID=&OrganizationID=),  Sex：0男 1女, TelNumber：电话号码, Memo：备注,   HasImage:是否有图片 true or false, Width:图片宽 , Height:图片高 , ResizeMode:0-禁用调整大小 1-调整到指定的尺寸 2-调整到指定的比例 ,  {"Success":true,"Message":"失败原因","Value":}*/
        UpdateStudent: "/Student/Update",

        /* StudentID:学生ID  批量删除 StudentID-StudentID-StudentID    {"Success":true,"Message":"失败原因","Value":}*/
        DelStudent: "/Student/Del",

        /*导入班级数据,上传一个表格  返回{"Success":true,"Message":"失败原因","Value":[{"Success":true,"Message":"失败原因","Value":},{"Success":true,"Message":"失败原因","Value":}]}*/
        Import: "/Student/Import",

        /*获取导入进度   返回格式 {"Success":true,"Message":"失败原因","Value":}*/
        GetProcess: "/Student/GetProcess",

        /*下载导入模板*/
        DownLoad: "/Student/DownLoadTemplete",

        /*导出数据   QueryCondition:名称关键字,  SchoolID :所属学校ID*/
        Export: "/Student/Export",

        /*获取学生登陆的记录  SchoolID int? 学校ID  GradeID  int? 年级ID  ClassID int? 班级ID  MinLoginDate datetime? 开始日期  MaxLoginDate  datetime? 结束日期   PageSize int 页大小  PageNumber int 页码
         输出  {"Success":true,"Message":"失败原因","Value":{"TotalCount": 总数,"Data": [{"StudentID": 50493,"HostAddress": "192.168.1.46","Name": "ldh1","JoinTime": "2018-07-05 14:17:42","UserName": "ldh1","SchoolID": 7897,"SchoolName": "李登辉测试学校","TerminalName": "电脑"}]}*/
        StudentLoginInfo: "/Student/StudentLoginInfos",

        /*导出学生登陆的记录  SchoolID int? 学校ID  GradeID  int? 年级ID  ClassID int? 班级ID  MinLoginDate datetime? 开始日期  MaxLoginDate  datetime? 结束日期   PageSize int 页大小  PageNumber int 页码*/
        StudentLoginInfosExport: "/Student/StudentLoginInfosExport",
    },
    TeacherUrl: {
        /* 参数:TeacherID:教师ID {"Success":true,"Message":"失败原因","Value":{ "TotalDownloadCount":视频下载数量,"TeacherID": 12, "TeacherNo": "faferr","ImageFileUri":"头像", "TeacherName": "asdfadf", "Sex": true, "TelNumber": "1231231234", "SchoolID": 5294, "SchoolName": "河南师范大学","ClassList": [{ "ClassID": 18610, "ClassName": "01" }], "OrganizationList": [{ "OrganizationID": 18610, "OrganizationName": "01" }], "GradeList": [{ "GradeID": 18610, "GradeName": "01" }],"CourseList": [{ "CourseID": 18610, "CourseName": "01" }],"SubjectList": [{ "SubjectID": 18610, "SubjectName": "01" }],"RoleList": [{ "RoleID": 18610, "RoleName": "01" }], "Memo": "测试", "CreateTime": "2017-07-06 17:26:17" }}    
        查询多条 SortRule:排序规则  TotalLiveCount 直播数量排行  TotalLiveViewTimes  直播观看次数排行   ,Order: 0正序  1倒序 SchoolID:学校ID , QueryCondition:查询关键字 , CourseList 课程ID 多个用逗号隔开,  GradeList  年级ID 多个用逗号隔开, SubjectList  学科ID 多个用逗号隔开， PageSize:页大小 , PageNumber:第几页{"Success":true,"Message":"失败原因","Value":{ "TotalCount": 1, "Data": [ { "TeacherID": 12, "TeacherNo": "faferr","ImageFileUri":"头像", "TeacherName": "asdfadf", "Sex": true, "TelNumber": "1231231234", "SchoolID": 5294, "SchoolName": "河南师范大学", "ClassList": [{ "ClassID": 18610, "ClassName": "01" }], "OrganizationList": [{ "OrganizationID": 18610, "OrganizationName": "01" }], "GradeList": [{ "GradeID": 18610, "GradeName": "01" }],"CourseList": [{ "CourseID": 18610, "CourseName": "01" }],"SubjectList": [{ "SubjectID": 18610, "SubjectName": "01" }],"RoleList": [{ "RoleID": 18610, "RoleName": "01" }], "Memo": "测试", "CreateTime": "2017-07-06 17:26:17" } ] }}  */
        QueryTeacher: "/Teacher/Select",

        /* SchoolID:学校ID , QueryCondition:查询条件 ,  {"Success":true,"Message":"失败原因","Value":}*/
        TeacherCount: "/Teacher/Count",

        /* TeacherID:教师ID, Account:登录名 输出  {"Success":true,"Message":"失败原因","Value":} */
        IsAccount: "/Teacher/ValidateAccount",

        /* TeacherID:教师ID, TeacherNo:教师  , SchoolID:学校ID  输出  {"Success":true,"Message":"失败原因","Value":}  */
        IsExist: "/Teacher/ValidateNo",

        /* TeacherNo:教师编号, TeacherName：姓名, SchoolID:学校ID ,PassWord:密码 ,RoleID:通过表单Post过来(RoleID=&RoleID=), GradeID:年级ID 通过表单Post过来(GradeID=&GradeID=) ,SubjectID:学科ID 通过表单Post过来(SubjectID=&SubjectID=) ,CourseID:课程ID 通过表单Post过来(CourseID=&CourseID=) ,ClassID:班级ID  通过表单Post过来(ClassID=&ClassID=) , OrganizationID:通过表单Post过来(OrganizationID=&OrganizationID=),  Sex：0男 1女, TelNumber：电话号码, Memo：备注,   HasImage:是否有图片 true or false, Width:图片宽 , Height:图片高 , ResizeMode:0-禁用调整大小 1-调整到指定的尺寸 2-调整到指定的比例 , Nationality(string):民族 ,Birthday(DateTime): 出生日期 ,Partisan(string):党派 , Employer（string）：工作单位, Position（string）：行政职务 , JobTitle（string）：职称, Landline(string):座机 ,  Email（string）：邮箱, OffCampus(string):校内校外,Famous(bool):是否名师，ShowJobTitle ：职称展示，ShowOrganization ：组织机构展示，ShowEmployer ：工作单位展示，ShowPosition ：职务展示 ,Education:学历 {"Success":true,"Message":"失败原因","Value":}*/
        AddTeacher: "/Teacher/Add",

        /* TeacherID:教师ID, TeacherNo:教师编号, TeacherName：姓名, SchoolID:学校ID ,RoleID:通过表单Post过来(RoleID=&RoleID=), GradeID:年级ID 通过表单Post过来(GradeID=&GradeID=) ,SubjectID:学科ID 通过表单Post过来(SubjectID=&SubjectID=) ,CourseID:课程ID 通过表单Post过来(CourseID=&CourseID=) ,ClassID:班级ID  通过表单Post过来(ClassID=&ClassID=) , OrganizationID:通过表单Post过来(OrganizationID=&OrganizationID=),  Sex：0男 1女, TelNumber：电话号码, Memo：备注,    HasImage:是否有图片 true or false, Width:图片宽 , Height:图片高 , ResizeMode:0-禁用调整大小 1-调整到指定的尺寸 2-调整到指定的比例 ,Nationality(string):民族 ,Birthday(DateTime): 出生日期 ,Partisan(string):党派 , Employer（string）：工作单位, Position（string）：行政职务 , JobTitle（string）：职称，Landline(string):座机 ,  Email（string）：邮箱, OffCampus(string):校内校外，Famous(bool):是否名师，ShowJobTitle ：职称展示，ShowOrganization ：组织机构展示，ShowEmployer ：工作单位展示，ShowPosition ：职务展示，Education：学历   {"Success":true,"Message":"失败原因","Value":}*/
        UpdateTeacher: "/Teacher/Update",

        /* TeacherID:教师ID  批量删除 TeacherID-TeacherID-TeacherID   {"Success":true,"Message":"失败原因","Value":}*/
        DelTeacher: "/Teacher/Del",

        /*CourseID:课程ID*/
        QueryTeacherByCourse: "/Teacher/QueryTeacherByCourse",

        /*导入教师数据,上传一个表格  返回{"Success":true,"Message":"失败原因","Value":[{"Success":true,"Message":"失败原因","Value":},{"Success":true,"Message":"失败原因","Value":}]}*/
        Import: "/Teacher/Import",

        /*获取导入进度   返回格式 {"Success":true,"Message":"失败原因","Value":}*/
        GetProcess: "/Teacher/GetProcess",

        /*下载导入模板*/
        DownLoad: "/Teacher/DownLoadTemplete",

        /*导出数据   QueryCondition:名称关键字,  SchoolID :所属学校ID*/
        Export: "/Teacher/Export"
    },
    QueryClassRoom: {
        /*  输出:{"Success":true,"Message":"失败原因","Value":[{"ID":"PowerCreator Launch Driver","Name":"PowerCreator Launch Driver","Description":"郎驰编码器 主码流通道号为0 子码流通道号为1","Modes":[{"Name":"Pull","Label":"拉模式","Description":"从视频设备拉取数据","DefaultPort":3000,"DefaultUserName":"888888","DefaultPassword":"888888","DefaultChannelNo":"0","Parameter":[]}]}]}  */
        GetTypes: "/ClassRoom/GetVideoDeviceType",

        /* 参数:SchoolID:学校ID , CampusID:校区ID(可不传)  , TeachingBuildingID:教学楼ID (可不传) , QueryCondition:查询参数 输出：{"Success":true,"Message":"失败原因","Value":}  */
        Num: "/ClassRoom/Count",

        /* 参数:TeachingBuildingID:教学楼ID , ClassRoomName:教室名称 ,ClassRoomID:教室ID 输出:{"Success":true,"Message":"失败原因","Value":}  */
        IsExists: "/ClassRoom/ValidateName",

        /* 参数:TeachingBuildingID:教学楼ID , ClassRoomNo:教室名称 ,ClassRoomID:教室ID 输出: {"Success":true,"Message":"失败原因","Value":} */
        NoIsExists: "/ClassRoom/ValidateNo",

        /*
       参数:ClassRoomID:教室ID
       {"Success":true,"Message":"失败原因","Value":{"ClassRoomID":ID, "ClassRoomName":"Name","ResolutionWidth":视频宽度 ,"ResolutionHeight":视频高度 , "HasSchedule":"true or false" , "ClassRoomNo":"No", "Floor":"Floor","BuildingID" : "id" , "BuildingName" : "Name","ClassID" : "ID" , "ClassName" : "Name", "RecordServerID" : "ServerID", "RecordServerName": "ServerName", "LiveServerID" : "ServerID","LiveServerName" : "ServerName", "VirtualID" : "ID", "VirtualName" : "Name","OrganizationList" : [{ "OrganizationID" : "ID", "OrganizationName" : "Name"}],
        "VideoList" : [{"VideoID" = "ID","VideoTypeID" : "TypeID","VideoTypeName" : "TypeName","IPAddress" : "IpAddress", "IsScreen" : "true","IsAvailable" : "true", "Channel" : [{
        "ID" : "ID","Mode" : "Mode", "No" : "No","Port" : "Port", "UserName" : "UserName","PassWord" : "Port", "Parameter" : [{"Name" : "para.Name","Label" : "para.Label","Value" : "para.Value" }] }] }],
        "CreatorID" : "info.CreatorID", "State":"0未知 1空闲 2 录制  4 直播 6 录播" , "RecordSeconds":"录制时长" , "LiveSeconds":"直播时长" , "CreatorName" : "CreatorName", "Memo" : "Memo", "CreateTime" : "CreateTime"}}
       查询多条  QueryCondition:查询关键字 , ScreenState:屏幕视频状态 , Video1State:视频1状态 , Video2State:视频2状态, Video3State:视频3状态 0未知 1可用 2 不可用   
       不分页  SchoolID:学校ID , CampusID:校区ID(可不传)  , TeachingBuildingID:教学楼ID (可不传),  , Count:数量
       分页   SchoolID:学校ID ,CampusID:校区ID(可不传)  , TeachingBuildingID:教学楼ID (可不传),  PageSize:页大小 , PageNumber:第几页
       {"Success":true,"Message":"失败原因","Value":{ "TotalCount": 1, "Data": [     {"AttendanceAnalysisID":考勤分析设备ID,"AttendanceAnalysisName":考勤分析设备名称,"ClassRoomID":ID, "ClassRoomName":"Name","ClassRoomNo":"No", "HasSchedule":"true or false" , "Floor":"Floor","BuildingID" : "id" , "BuildingName" : "Name","ClassID" : "ID" , "ClassName" : "Name", "RecordServerID" : "ServerID", "RecordServerName": "ServerName", "LiveServerID" : "ServerID","LiveServerName" : "ServerName", "VirtualID" : "ID", "VirtualName" : "Name","OrganizationList" : [{ "OrganizationID" : "ID", "OrganizationName" : "Name"}],
        "VideoList" : [{"VideoID" = "ID","VideoTypeID" : "类型ID","VideoTypeName" : "类型名称","IPAddress" : "IpAddress", "IsScreen" : "是否屏幕视频","IsAvailable" : "是否可用", "Channel" : [{
        "ID" : "ID","Mode" : "Mode", "No" : "No","Port" : "Port", "UserName" : "UserName","PassWord" : "Port", "Parameter" : [{"Name" : "para.Name","Label" : "para.Label","Value" : "para.Value" }] }] }],
        "CreatorID" : "info.CreatorID", "State":"0未知 1空闲 2 录制  4 直播 6 录播" , "RecordSeconds":"录制时长" , "LiveSeconds":"直播时长" ,"CreatorName" : "CreatorName", "Memo" : "Memo", "CreateTime" : "CreateTime"}]}}
       */
        Select: "/ClassRoom/Select",


        /*SchoolID:学校ID,  CommonKey  查询关键字*/
        GetClassRoomTree: "/ClassRoom/GetClassRoomTree"
    },
    ClassRoom: {
        /*  参数 Content :"[{"IsEnableStudyAnalysis": 是否开启学情分析 , "IsEnableAttendanceAnalysis":是否开启考勤分析 ,"ResolutionWidth":视频宽度 ,"ResolutionHeight":视频高度 , "AttendanceAnalysisID":考勤分析设备ID,"ClassRoomName":"Test","ClassRoomNo":"Test", "Floor":"1","BuildingID" : 5424,"Memo":"TTTT","SeatCount":"座位数","ClassID" : 23, "RecordServerID" : 56, "LiveServerID" : 57, "VirtualID" : 39,"AnalysisServerID":11,  "OrganizationList" : [{ "OrganizationID" : 18811 },{"OrganizationID" : 18823}],"VideoList" : [{"VideoTypeID" : "PowerCreator Launch Driver", "VideoTypeName" : "PowerCreator Launch Driver", "IPAddress" : "192.168.1.23","IsScreen" : "true","IsAvailable" : "true","Channel" : [{"Mode" : "Pull","No" : "0","Port" : 78, "UserName" : "UserName","PassWord" : "454545", "Parameter" : [{ "Name" : "para.Name","Label" : "para.Label", "Value" : "para.Value"}]}]}] }]" {"Success":true,"Message":"失败原因","Value":}*/
        Add: "/ClassRoom/Add",

        /* 参数 Content :"[{"ClassRoomID":111 ,"IsEnableStudyAnalysis": 是否开启学情分析 , "IsEnableAttendanceAnalysis":是否开启考勤分析 , "ResolutionWidth":视频宽度 ,"ResolutionHeight":视频高度 ,"AttendanceAnalysisID":考勤分析设备ID, "ClassRoomName":"Test", "ClassRoomNo":"Test", "Floor":"1","BuildingID" : 5424,"Memo":"TTTT","SeatCount":"座位数","ClassID" : 23, "RecordServerID" : 56,  "LiveServerID" : 57,  "VirtualID" : 39, "AnalysisServerID":11, "OrganizationList" : [{  "OrganizationID" : 18811 }], "VideoList" : [{"VideoTypeID" : "PowerCreator Launch Driver","VideoTypeName" : "PowerCreator Launch Driver",  "IPAddress" : "192.168.1.23",  "IsScreen" : "true", "IsAvailable" : "true", "Channel" : [{ "Mode" : "Pull", "No" : "0", "Port" : 78, "UserName" : "UserName", "PassWord" : "454545",   "Parameter" : [{  "Name" : "para.Name", "Label" : "para.Label","Value" : "para.Value" }] }] }]}]"    输出{"Success":true,"Message":"失败原因","Value":}  */
        Update: "/ClassRoom/Update",

        /*  参数： ClassRoomID (多选删除'-'隔开)   输出 [{"Success":true,"Message":"失败原因","Value":}]  */
        Del: "/ClassRoom/Del",

        /*参数: ClassRoomID:教室ID , Value:第几个预置位  返回 {"Success":是否成功,"Message":"错误信息","Value":"教室ID"}*/
        PreSetting: "/ClassRoom/PreSetting",

        /*导入教室数据,上传一个表格  返回{"Success":true,"Message":"失败原因","Value":[{"Success":true,"Message":"失败原因","Value":},{"Success":true,"Message":"失败原因","Value":}]}*/
        Import: "/ClassRoom/Import",

        /*获取导入进度   返回格式 {"Success":true,"Message":"失败原因","Value":}*/
        GetProcess: "/ClassRoom/GetProcess",

        /*下载导入模板*/
        DownLoad: "/ClassRoom/DownLoadTemplete",

        /*导出数据    int? CampusID  校区ID, int? TeachingBuildingID 教学楼ID,  SchoolID :所属学校ID*/
        Export: "/ClassRoom/Export",

        GetDefaultClassRoom: "/ClassRoom/GetDefaultClassRoomID"
    },
    ScheduleUrl: {
        /* 参数 ClassRoomID:教室ID , StartTime:开始时间  ,  StopTime:结束时间 , ScheduleID:课表ID(编辑时验证使用) 返回 {"Success":true,"Message":"失败原因","Value":}  */
        CheckClassRoom: "/Schedule/CheckClassRoom",

        /*  参数 ClassID:班级ID , StartTime:开始时间  ,  StopTime:结束时间 , ScheduleID:课表ID(编辑时验证使用) 返回 {"Success":true,"Message":"失败原因","Value":} */
        CheckClass: "/Schedule/CheckClass",

        /*参数  ClassList:班级ID(-隔开) , StartTime:开始时间  ,  StopTime:结束时间 , ScheduleID:课表ID(编辑时验证使用)  输出 {"Success":true,"Message":null,"Value":[{"ID":251,"Value":false},{"ID":252,"Value":false},{"ID":277,"Value":false}]}*/
        CheckClassList: "/Schedule/CheckClassList",

        /*参数  StudentList:学生ID(-隔开) , StartTime:开始时间  ,  StopTime:结束时间 , ScheduleID:课表ID(编辑时验证使用)  输出 {"Success":true,"Message":null,"Value":[{"ID":251,"Value":false},{"ID":252,"Value":false},{"ID":277,"Value":false}]}*/
        CheckStudentList: "/Schedule/CheckStudentList",

        /*参数 TeacherID:主讲ID , StartTime:开始时间  ,  StopTime:结束时间 , ScheduleID:课表ID(编辑时验证使用) 返回 {"Success":true,"Message":"失败原因","Value":} */
        CheckTeacher: "/Schedule/CheckTeacher",

        /*参数 TeacherList:主讲ID , StartTime:开始时间  ,  StopTime:结束时间 , ScheduleID:课表ID(编辑时验证使用) 返回 {"Success":true,"Message":"失败原因","Value":}  */
        CheckTeacherList: "/Schedule/CheckTeacherList",

        /* 参数 StudentID:学生ID , StartTime:开始时间  ,  StopTime:结束时间 , ScheduleID:课表ID(编辑时验证使用)返回 {"Success":true,"Message":"失败原因","Value":} */
        CheckStudent: "/Schedule/CheckStudent",

        /* 参数 ScheduleID:课表ID , ScheduleNo：课表编号 ,SchoolID:学校ID 返回 {"Success":true,"Message":"失败原因","Value":} */
        NoIsExist: "/Schedule/ValidateNo",

        //获取阿里云直播键值对  返回的  Value的值是[{"Key":"","Value":""}]
        GetThirdPartyService: "/Schedule/GetThirdPartyService",

        /* 参数:IsEnableCommentVideo bool? 点播是否可以评论 ,IsEnableCommentLive bool? 直播是否可以评论  GradeID  int  年级ID 多选传多个GradeID LiveStreamProviderID:阿里云直播键,VGAHttpStream,  Video1HttpStream , Video2HttpStream ,Video1Stream:教师视频,Video2Stream:学生视频,VGAStream:屏幕视频,  Title:标题 ,IsPublicVideo 视频是否公开，StudentCount:应到人数, HasImage:是否有图片 true or false, Width:图片宽 , Height:图片高 , ResizeMode:0-禁用调整大小 1-调整到指定的尺寸 2-调整到指定的比例 , SchoolID:学校ID , WeekID:周次ID , NodeID:节次ID , StartTime:开始时间 , StopTime:结束时间 , ClassRoomID:教室ID , CourseID:课程ID , CourseName:课程名称 , TeacherID:教师ID , TeacherName:教师名 , Summary:简介 ， IsNeedRecord:是否录制 , RecordVideo:录制ID(RecordVideo=&RecordVideo=) , RecordChannel:录制通道(RecordChannel=&RecordChannel=) , IsNeedLive:是否直播 , LiveVideo:直播ID(LiveVideo=&LiveVideo=) , LiveChannel:直播通道(LiveChannel=&LiveChannel=) , IsPublicLive:是否公开直播 , LivePassword:直播密码 , LiveMaxCount:直播最大观看人数 , ClassID:班级ID(ClassID=&ClassID=) , OrganizationID:组织机构ID(OrganizationID=&OrganizationID=) , StudentID:学生ID(StudentID=&StudentID)  输出 {"Success":true,"Message":"失败原因","Value":}  */
        Add: "/Schedule/Add",

        /*  参数:IsEnableCommentVideo bool? 点播是否可以评论 ,IsEnableCommentLive bool? 直播是否可以评论GradeID  int  年级ID 多选传多个GradeID  LiveStreamProviderID:阿里云直播键,ScheduleID:课表ID ,VGAHttpStream,  Video1HttpStream , Video2HttpStream ,Video1Stream:教师视频,Video2Stream:学生视频,VGAStream:屏幕视频, IsPublicVideo 视频是否公开， StudentCount:应到人数, Title:标题 , HasImage:是否有图片 true or false, Width:图片宽 , Height:图片高 , ResizeMode:0-禁用调整大小 1-调整到指定的尺寸 2-调整到指定的比例 , SchoolID:学校ID , WeekID:周次ID , NodeID:节次ID , StartTime:开始时间 , StopTime:结束时间 , ClassRoomID:教室ID , CourseID:课程ID , CourseName:课程名称 , TeacherID:教师ID , TeacherName:教师名 , Summary:简介 ， IsNeedRecord:是否录制 , RecordVideo:录制ID(RecordVideo=&RecordVideo=) , RecordChannel:录制通道(RecordChannel=&RecordChannel=) , IsNeedLive:是否直播 , LiveVideo:直播ID(LiveVideo=&LiveVideo=) , LiveChannel:直播通道(LiveChannel=&LiveChannel=) , IsPublicLive:是否公开直播 , LivePassword:直播密码 ,LiveMaxCount:直播最大观看人数 , ClassID:班级ID(ClassID=&ClassID=) , OrganizationID:组织机构ID(OrganizationID=&OrganizationID=) , StudentID:学生ID(StudentID=&StudentID)  输出 {"Success":true,"Message":"失败原因","Value":} */
        Update: "/Schedule/Update",

        /* 参数: ScheduleID:课表ID 删除多个(ScheduleID-ScheduleID-ScheduleID) {"Success":true,"Message":"失败原因","Value":}  */
        Del: "/Schedule/Del",

        /*  参数:SchoolID:学校ID , QueryTitle:标题关键字 , QueryTeacherID:教师ID , QueryStudentID:学生ID , QueryCourseID:课程ID , QueryClassroomID:教室ID , QueryWeekID:周次ID , QueryStartDate:开始时间 , QueryStopDate:结束时间   输出：{"Success":true,"Message":"失败原因","Value":} */
        Num: "/Schedule/Count",

        /* 查询一条:ScheduleID:课表ID, IsLoadVideoAnalysisResults:是否加载视频分析结果 , IsShowAllStudents:是否显示所有学生 {"Success":true,"Message":"失败原因","Value":{"GradeList":[{"GradeID":,"GradeName":"年级名称"}],AttendanceResults:[{"Ordinal":序号,"CreateTime":"抓拍时间","Students":[{"ID":学生ID,"StudenName":"姓名","Sex":true 男 false  女,"StudetNo":"学号","StudentImageUri":"学生头像","HitCount":采集次数,"Status":学生状态 0学生没有头像 1 学生到场  2学生缺席 3 学生头像中无法检测出人脸 ,ImageUri:"图片路径"}]}],"IsVideoPublish":"视频是否发布","ScheduleID":"","Title":"","StudentCount":"","Summary":"", "IsRecordRunning":"录制是否正在进行", "IsLivingRunning" :"直播是否正在进行","CanModify":"是否可以编辑","StartTime":"","StopTime":"","TeacherID":"","ImagePath":"图片路径" ,"TeacherName":"","CourseID":"","CourseName":"","SchoolID":"","SchoolName":"","WeekID":"","WeekName":"","NodeID":"","NodeName":"","ClassRoomID":"","ClassRoomName":"","IsRecording":"" , "IsNeedLiving":"true or false" , "IsNeedRecord":"true or false" , "RecordVideo":[0,1,2],"RecordChannel":[1,2],"IsLiving":""\ "LiveVideo":[1,2,3],"LiveChannel":[1,2],"LivePassword":"","IsPublicLive":"","LiveMaxCount":直播最大观看人数 ,CreatorID:"","CreatorName":"","CreateTime":"","OwnerClasses":[{"ClassID":"","ClassName":""}],"OwnerStudents":[{"StudentID":"","StudentName":""}],"OwnerStudents":[{"OrganizationID":"","OrganizationName":""}],"CourseList":[{"CourseID":课程ID, "CourseName":"课程名称"}]}}
        查询多条：参数:IsShowAllStudents:是否显示所有学生 , IsLiveFailed:直播是否失败 , IsRecordFailed: 录制是否失败 , SchoolID:学校ID , NodeID:节次ID, MinStartTime:最小开始时间, MaxStopTime:最大结束时间 , IsLoadVideoAnalysisResults:是否加载视频分析结果 , QueryTitle:标题关键字 , QueryTeacherID:教师ID , QueryStudentID:学生ID , QueryCourseID:课程ID , QueryClassroomID:教室ID , QueryWeekID:周次ID , QueryStartDate:开始时间 , QueryStopDate:结束时间 , SortRule:ID,Title,ClassroomName,Node,CourseName,CreateTime,StartTime,StopTime,TeacherName    正倒叙 Order:  Asc  Desc , PageSize:页大小 , PageNumber:页码, Count:前几条 输出：{"Success":true,"Message":"失败原因","Value":["TotalCount":"",Data:[{"ScheduleID":"","ScheduleOperationInfo":[],"Title":"","Summary":"", "IsRecordRunning":"录制是否正在进行", "IsLivingRunning" :"直播是否正在进行","CanModify":"是否可以编辑","StartTime":"","StopTime":"","TeacherID":"","ImagePath":"图片路径" ,"TeacherName":"","CourseID":"","CourseName":"","SchoolID":"","SchoolName":"","WeekID":"","WeekName":"","NodeID":"","NodeName":"","ClassRoomID":"","ClassRoomName":"", "IsNeedLiving":"true or false" , "IsNeedRecord":"true or false" , "IsRecording":"","RecordVideo":[0,1,2],"RecordChannel":[1,2],"IsLiving":"", "LiveVideo":[1,2,3],"LiveChannel":[1,2],"LivePassword":"","IsPublicLive":"","LiveMaxCount":直播最大观看人数 ,CreatorID:"","CreatorName":"","CreateTime":"","OwnerClasses":[{"ClassID":"","ClassName":""}],"OwnerStudents":[{"StudentID":"","StudentName":""}],"OwnerStudents":[{"StudentID":"","StudentName":""}],"VideoAnalysisResults":[{"ListenersCount":0,"HeadUpCount":0,"ImageUri":"/images/0.jpg","CreateTime":"yyyy-MM-dd HH:mm:ss"}],"ShouldAppearsCount":0,"AttendanceRate":null}]]}
        */
        Select: "/Schedule/Select",

        /*导入课表数据,上传一个表格  返回{"Success":true,"Message":"失败原因","Value":[{"Success":true,"Message":"失败原因","Value":},{"Success":true,"Message":"失败原因","Value":}]}*/
        Import: "/Schedule/Import",

        /*获取导入进度   返回格式 {"Success":true,"Message":"失败原因","Value":}*/
        GetProcess: "/Schedule/GetProcess",

        /*下载导入模板*/
        DownLoad: "/Schedule/DownLoadTemplete",

        /*导出数据    查询条件和查询列表一样，不需要分页*/
        Export: "/Schedule/Export",


        /*获取新视频是否公开   返回格式 {"Success":true,"Message":"失败原因","Value": bool}*/
        GetIsVideoPublic: "/Schedule/GetIsVideoPublic",

        /*获取新视频是否发布   返回格式 {"Success":true,"Message":"失败原因","Value": bool}*/
        GetIsVideoPublish: "/Schedule/GetIsVideoPublish",

        /*获取新直播是否公开   返回格式 {"Success":true,"Message":"失败原因","Value": bool}*/
        GetIsLivePublic: "/Schedule/GetIsLivePublic",

        /*获取新直播是否可以评论   返回格式 {"Success":true,"Message":"失败原因","Value": bool}*/
        GetIsEnableCommentLive: "/Schedule/GetIsEnableCommentLive",

        /*获取点播是否可以评论   返回格式 {"Success":true,"Message":"失败原因","Value": bool}*/
        GetIsEnableCommentVideo: "/Schedule/GetIsEnableCommentVideo",

        /*添加重复课表  添加课表的参数+   SemeSterID:重复策略学期ID  , WeekID:周次ID 逗号隔开   Days:天 逗号隔开   NodeID:节次ID  逗号隔开*/
        AddBatchSchedule: "/Schedule/AddBatchSchedule",

        /*修改重复课表*/
        UpdateBatchSchedule: "/Schedule/UpdateBatchSchedule",

        /*获取重复策略详细信息*/
        GetRepeatInfo: "/Schedule/GetRepeatInfo",

        //分享课表  ScheduleID  课表ID    UserID  用户ID
        SharSchedule: "/Schedule/SharSchedule",

        //取消分享课表  ScheduleID  课表ID    UserID  用户ID
        CanelSharSchedule: "/Schedule/CanelSharSchedule",

        //查询课表分享的用户  ScheduleID  课表ID   返回 {"Success":true,"Message":"失败原因","Value": "[{"ID":用户id ,"Name":"姓名"}]"}
        QuerySharScheduleUser: "/Schedule/QuerySharScheduleUser"
    },
    PublicOperation: {
        /*输出:{"Success":true,"Message":"失败原因","Value":{"SetOtherSchedule":true,"ID":37,"No":"t1","Name":"t1","Sex":true,"Account":"t1","TelNumber":"","SchoolID":5364,"SchoolName":"清华大学","ClassList":[{"ClassID":153,"ClassName":"大一1班"},{"ClassID":155,"ClassName":"大三1班"}],"OrganizationList":[],"GradeList":[{"GradeID":18865,"GradeName":"社二"}],"CourseList":[],"SubjectList":[{"SubjectID":252,"SubjectName":"123sddssss"},{"SubjectID":232,"SubjectName":"124"}],"RoleList":[{"RoleID":172,"RoleName":"系统管理员"}],"Memo":""}}*/
        GetCurrentUser: "/PublicOperation/GetCurrentUser",

        /*修改定时器配置  
         * 参数: IsAutoRecord             bool   是否自动录制 ,
         *       IsVideoPublic            bool   视频是否自动公开,
         *       IsVideoPublish           bool   视频是否自动发布,
         *       StartRecordTimeOffset    int    开始录制时间偏移量，
         *       StopRecordTimeOffset     int    停止录制时间偏移量
         *       IsAutoLive               bool   是否自动直播,
         *       IsLivePublic             bool   直播是否自动公开,
         *       StartLiveTimeOffset      int    开始直播时间偏移量
         *       StopLiveTimeOffset       int    停止直播时间偏移量
         *       IsAutoAnalysis           bool   是否自动开启学情分析
         *       StartAnalysisTimeOffset  int    开始学情分析时间偏移量 
         *       StopAnalysisTimeOffset   int    停止学情分析时间偏移量
         *       IsAutoAttendanceAnalysis bool   是否自动开启考勤分析
         *       StartAttendanceAnalysisTimeOffset   bool   开始考勤分析时间偏移量
         *       StopAttendanceAnalysisTimeOffset    bool   停止考勤分析时间偏移量 
         *       输出 {"Success":true,"Message":"失败原因","Value":}*/
        OperationTimer: "/PublicOperation/ChangeOption",

        /*获取定时器状态      输出 {"Success":true,"Message":null,"Value":{ 
                                    "IsAutoRecord": false,
                                    "IsVideoPublic": true,
                                    "StartRecordTimeOffset": 0,
                                    "StopRecordTimeOffset": 0,
                                    "IsAutoLive": false,
                                    "IsLivePublic": true,
                                    "StartLiveTimeOffset": 0,
                                    "StopLiveTimeOffset": 0,
                                    "IsAutoAnalysis": false,
                                    "StartAnalysisTimeOffset": 0,
                                    "StopAnalysisTimeOffset": 0,
                                    "IsAutoAttendanceAnalysis": false,
                                    "StartAttendanceAnalysisTimeOffset": 0,
                                    "StopAttendanceAnalysisTimeOffset": 0,
                                    "IsVideoPublish": true}}*/
        GetTimerState: "/PublicOperation/GetTimerState",

        /*获取置灰状态  输出 {"Success":true,"Message":null,"Value":bool}*/
        GetGreyState: "/PublicOperation/GetGreyState",

        /*设置置灰  GreyState:是否置灰 bool  输出 {"Success":true,"Message":null,"Value":}*/
        SetGreyState: "/PublicOperation/SetGreyState",

        /*获取是否登录*/
        IsLogin: "/PublicOperation/GetIsLogin",

        /*登录*/
        Login: "/Home/Login",

        /*登出  返回 {"Success":true,"Message":null,"Value":"要跳转的界面"}*/
        Logout: "/Home/Logout",

        /*Version*/
        Version: "/Home/Version",

        AndroidDownPath: "/Home/GetAndroidQRImage",

        //是否可以创建录播计划
        IsCreateRecordPlan: "/PublicOperation/IsCreateRecordPlan",

        //是否显示角色选择框
        IsShowRolePanel: "/PublicOperation/IsShowRolePanel",

        //获取当前是否登录  true  已登录  false  未登录
        LoginState: "/PublicOperation/LoginState"
    },
    LiveInfo: {

        GetLiveInfo: "/Live/GetLiveInfo",

        /*LiveID:直播ID 输出: {"Success":true,"Message":"失败原因","Value":{"IsThirdPartyTargetLive":true,"VideoClientInfo":"客户端请求地址","LiveID":"直播ID","VideoID":"回放视频的ID 若无 返回0","CanViewCourse":"能否看到课程","Title":"标题","Summary":"简介","StartTime":"开始时间","StopTime":"结束时间" ,"ImagePath":"图片路径" , "IsCollected":"是否被收藏" ,"LikerID":"是否点赞"， "IsRecordCompleted":"是否录制完成" , "IsRecordCompleted":"是否直播完成" , "CollectorsCount":"收藏数","LikersCount":"点赞数","CommentsCount":"评论数","ViewersCount":"观看人数", "ViewTimes":"观看人次" ,"IsEnableComment":"是否能够评论","CanModify":"能否编辑","TeacherID":"教师ID","TeacherName":"教师名字","CourseID":"课程ID","CourseName":"课程名称","CoursePicPath":"课程缩略图路径","SchoolID":"学校ID","SchoolName":"学校名","ClassRoomID":"教室ID","ClassRoomName":"教室名","TeachingBuildingID":"教学楼ID","TeachingBuildingName":"教学楼名称","IsLiving":"是否正在直播","LivePassword":"密码","IsPublicLive":"是否公开直播","LiveMaxCount":"直播最大观看人数","OwnerClasses":"[{"ClassID":"班级ID","ClassName":"班级名称"}]","OwnerOrganizations":"[{"OrganizationID":"组织机构ID","OrganizationName":"组织机构名称"}]"}}*/
        GetLiveInfoByID: "/Live/GetLiveInfoByID",

        /*  参数 LiveID:直播ID  ,SubjectID  学科ID  GradeID  年级ID   IsAutomaticStart:是否自动开始, IsAutomaticStop:是否自动停止, TitleKey:名称关键字 , NodeID:节次ID, StartDate:开始日期,StopDate:结束日期, TeacherID:教师ID ， StudentID:学生ID , OrganizationID:组织机构ID , CourseID:课程ID , ClassroomID:教室ID , MinStartTime:最小开始时间 , MaxStartTime:最大开始时间 , MinStopTime:最小结束时间 , MaxStopTime:最大结束时间 , IsPublic:是否公开 , IsLiving:是否正在直播 , ViewerID:观看人ID , CollectorID:收藏人ID,LikerID:点赞ID,IsCompleted:是否完成, IsNeedRecord:是否录制 ,  Sort:排序规则(ID:直播ID,ViewTimes:观看次数, TotalViewersCount:总观看人数 , OnlineViewersCount:在线观看人数 , StartTime:开始时间 , StopTime:结束时间) , Order:0正序  1倒序, 分页 PageSize:页大小  PageNumber:页码   不分页 Count(int?null) 条数  输出:{"Success":true,"Message":"失败原因","Value":[TotalCount:0,Data:[{"IsThirdPartyTargetLive":true,"VideoClientInfo":"客户端请求地址","LiveID":"课表ID","VideoID":"回放视频的ID 若无 返回0","CanViewCourse":"能否看到课程","Title":"标题","Summary":"简介","StartTime":"开始时间","StopTime":"结束时间","ImagePath":"图片路径" , "IsCollected":"是否被收藏" ,"LikerID":"是否点赞"， "IsRecordCompleted":"是否录制完成" , "IsRecordCompleted":"是否直播完成" ,"CollectorsCount":"收藏数","LikersCount":"点赞数","CommentsCount":"评论数","ViewersCount":"在线观看人数", "ViewTimes":"观看人次" , "IsEnableComment":"是否能够评论","CanModify":"能否编辑","TeacherID":"教师ID","TeacherName":"教师名字","CourseID":"课程ID","CourseName":"课程名称","CoursePicPath":"课程缩略图路径","SchoolID":"学校ID","SchoolName":"学校名","ClassRoomID":"教室ID","ClassRoomName":"教室名","TeachingBuildingID":"教学楼ID","TeachingBuildingName":"教学楼名称","IsLiving":"是否正在直播","LivePassword":"密码","IsPublicLive":"是否公开直播","LiveMaxCount":"直播最大观看人数","OwnerClasses":"[{"ClassID":"班级ID","ClassName":"班级名称"}]","OwnerOrganizations":"[{"OrganizationID":"组织机构ID","OrganizationName":"组织机构名称"}]"}]]}*/
        GetLiveList: "/Live/GetLiveList",

        ExportOnlineLive: "/Live/ExportOnlineLive",

        /* 参数 TitleKey:名称关键字 , StartDate:开始日期,StopDate:结束日期, TeacherID:教师ID ， StudentID:学生ID , OrganizationID:组织机构ID , CourseID:课程ID , ClassroomID:教室ID , MinStartTime:最小开始时间 , MaxStartTime:最大开始时间 , MinStopTime:最小结束时间 , MaxStopTime:最大结束时间 , IsPublic:是否公开 , IsLiving:是否正在直播 , ViewerID:观看人ID , CollectorID:收藏人ID ,LikerID:点赞ID, IsCompleted:是否完成, IsNeedRecord:是否录制  返回值  {"Success":true,"Message":"失败原因","Value":}*/
        GetLiveCount: "/Live/GetLiveCount",

        /*收藏直播 LiveID    输出 {"Success":true,"Message":"失败原因","Value":}*/
        CollectLive: "/Live/CollectLive",

        /*取消收藏直播 LiveID  输出 {"Success":true,"Message":"失败原因","Value":}*/
        CanelCollectLive: "/Live/CanelCollectLive",

        /*点赞直播 LiveID    输出 {"Success":true,"Message":"失败原因","Value":}*/
        LikeLive: "/Live/Likelive",

        /*取消点赞直播 LiveID 输出 {"Success":true,"Message":"失败原因","Value":}*/
        CancelLikeLive: "/Live/CanelLikeLive",

        /*检查是否可以添加文字评论  LiveID int 直播ID*/
        CheckCanAddTextComment: "/Live/CheckCanAddTextComment",

        /*设置是否可以添文字评论  LiveID  int  直播ID  UserID  int  用户ID Enable bool 是否可以   Reason  string 禁言原因   Deadline  DateTime? 截止时间  */
        SetCanAddTextCommetn: "/Live/SetCanAddTextComment",

        /*添加文字评论  LiveID:直播ID  , Name:名字  , Content:评论内容 输出 {"Success":true,"Message":"失败原因","Value":评论ID}*/
        AddTextComment: "/Live/AddTextComment",

        /*添加文字评论回复  LiveID: int 直播ID  CommentID  int 评论ID   CreatorName:昵称  , Content:评论内容  输出 {"Success":true,"Message":"失败原因","Value":评论ID}*/
        AddTextCommentReply: "/Live/AddTextCommentReply",

        /*获取评论 LiveID:直播ID , LastID:上次获取的最后ID  分页 PageSize，PageNumber {"Success":true,"Message":"失败原因","Value":[TotalCount:0,CommentsCount:评论总数, Data[{"ID":"评论ID" ,, "IsEnable":当前用户是否可以发言 "CommentType":"评论类型","Content":"评论内容","Progress":"评论时间点","IsPublic":"是否公开评论","CreatorID":"发表人","CreatorName":"发表人","CreateTime":"创建时间","ImagePath":"头像相对路径"}]]} */
        GetComments: "/Live/GetComments",

        /*删除评论  CommentID  int 评论ID*/
        DeleteComment: "/Live/DeleteComment",

        /*检查是否可以添加弹幕  LiveID int 直播ID*/
        CheckCanAddBullectComment: "/Live/CheckCanAddBullectComment",

        /*设置是否可以添加弹幕  LiveID  int  直播ID  UserID  string  用户ID Enable bool 是否可以   Reason  string 禁言原因   Deadline  DateTime? 截止时间  */
        SetCanAddBullectComment: "/Live/SetCanAddBulletComment",

        /*添加弹幕 LiveID:直播ID  , Name:名字  , Content:评论内容  输出 {"Success":true,"Message":"失败原因","Value":}*/
        AddBulletComment: "/Live/AddBulletComment",

        /*获取弹幕 LiveID:直播ID , LastID:上次获取的最后ID  Count:数量 {"Success":true,"Message":"失败原因","Value":[{"ID":"评论ID" , "IsEnable":当前用户是否可以发言,"CommentType":"评论类型","Content":"评论内容","Progress":"评论时间点","IsPublic":"是否公开评论","CreatorID":"发表人","CreatorName":"发表人","CreateTime":"创建时间"}]}*/
        GetBulletComment: "/Live/GetBulletComment",

        /*添加播放记录  LiveID:直播ID Name:游客名字  输出 {"Success":true,"Message":"失败原因","Value":}*/
        AddViewRecord: "/Live/AddViewRecord",

        /*延长直播 LiveID:直播ID  TimeSpan:时长   输出 {"Success":true,"Message":"失败原因","Value":}*/
        ExtendLive: "/Live/ExtendLive",

        /*设置能否评论 LiveID:直播ID IsEnableComment:能否评论 输出 {"Success":true,"Message":"失败原因","Value":}*/
        SetIsEnableComment: "/Live/SetIsEnableComment",

        /*设置能否提问 LiveID:直播ID IsEnable:能否提问 输出 {"Success":true,"Message":"失败原因","Value":}*/
        SetIsEnableAsk: "/Live/SetIsEnableAsk",

        /*获取能否问答 LiveID:直播ID 输出 {"Success":true,"Message":"失败原因","Value":}*/
        GetIsEnableAsk: "/Live/GetIsEnableAsk",

        /*获取详细信息，并更新播放进度 LiveID：直播ID  , RecordID:记录ID 返回：{"Success":true,"Message":"失败原因","Value":{"TotalCount":总人数, IsEnableComment:"是否可以评论" ,IsEnableAsk:是否可以提问 Data:[{"ID": 145,"Name": "姓名"}]}}  */
        GetViewInfo: "/Live/GetViewInfo",

        /*添加文档  参数 LiveID:直播ID , Title:文档标题 ,  AuthorName:主讲人  , Extension:后缀名  输出 {"Success":true,"Message":,"Value":"文件ID"} */
        DocumentAdd: "/Live/DocumentAdd",

        /*修改文档  参数 LiveID:直播ID ,  ID:文档ID , Title:文档标题 ,  AuthorName:主讲人  , Extension:后缀名  返回值 {"Success":true,"Message":,"Value":} */
        DocumentUpdate: "/Live/DocumentUpdate",

        /*删除文档  参数 LiveID:直播ID , DocumentID:文档ID  输出 {"Success":true,"Message":,"Value":} */
        DocumentDel: "/Live/DocumentDel",

        /*获取文档详细信息  参数 DocumentID:文档ID  输出 {"Success":true,"Message":,"Value":{ "ID": 12, "Title": "11111111111111", "FileUri": "/Static/Files/2017/11/21/164608449000000001.zip", "FileSize": 3, "AuthorName": "11111111111", "DownloadCount": 0, "CreatorID": 3466, "CreatorName": "t1", "CreateTime": "2017-11-21 16:46:08", "Memo": null }}*/

        DocumentInfo: "/Live/DocumentInfoByID",

        /*获取文档列表  参数 LiveID:直播ID  输出{"Success":true,"Message":,"Value":[{ "ID": 12, "Title": "11111111111111", "FileUri": "/Static/Files/2017/11/21/164608449000000001.zip", "FileSize": 3, "AuthorName": "11111111111", "DownloadCount": 0, "CreatorID": 3466, "CreatorName": "t1", "CreateTime": "2017-11-21 16:46:08", "Memo": null }}] */
        DocumentList: "/Live/DocumentList",


        /*检查是否可以发起提问  LiveID  int 直播ID*/
        CheckCanAsk: "/Live/CheckCanAsk",

        /*设置是否可以发起提问  LiveID  int  直播ID   UserID  int  用户ID  Enable bool 是否可以   Reason  string 禁言原因   Deadline  DateTime? 截止时间 */
        SetCanAsk: "/Live/SetCanAsk",

        /*添加提问    参数  LiveID  int 直播ID ,  CreatorName string 游客昵称 , Content:评论内容  输出 {"Success":true,"Message":,"Value":评论ID}*/
        AskAdd: "/Live/Ask",

        //设置问答是否公开   参数  LiveID  int 直播ID ,  ReplyID  int 回复ID , IsPublic bool 是否公开  输出 {"Success":true,"Message":,"Value":}
        SetAskIsPublic: "/Live/SetAskIsPublic",

        /*添加回答  参数 LiveID int 直播ID  , AskID  int 提问ID ,  CreatorName string 游客昵称 , Content:评论内容    输出 {"Success":true,"Message":,"Value":回答ID} */
        Reply: "/Live/Reply",

        //获取提问的相信信息  LiveID  int 直播ID   AskID int 提问ID  输出数据格式和所有一致
        GetAskInfo: "/Live/GetAskInfo",

        /*获取所有的提问和回答     参数 LiveID int 直播ID , MaxTime  DateTime? 上次获取的最大时间 , MaxDataID  int 上次获取的最大ID ,  CreatorID int? 创建人ID(若输入，则只查看此人的问答 默认为空), Count int? 查询数量 
        输出 [{"ID":问答ID, "DataType":问答类型, "IsEnable":当前用户是否可以发言 , "Content":"问答内容" , "Progress":"直播进度， 开始的第几秒" , "IsPublic": true 问答是否公开, "CreatorID":创建人ID , "CreatorName":"创建人姓名或昵称" ,"ImagePath":"头像相对路径","CreateTime":"创建时间" ,"ChildData":[{内容和上级一样}]}]*/
        GetAskAndReplies: "/Live/GetAskAndReplies",

        /*删除提问  AskID  int  提问ID*/
        DeleteAsk: "/Live/DeleteAsk",

        /*获取评论禁言列表  LiveID  int  直播ID  输出 {"Success":true,"Message":,"Value":[{"ID":用户ID ,"Name":"姓名"}]}*/
        GetDisabledTextCommentUsers: "/Live/GetDisabledTextCommentUsers",

        /*获取问答禁言列表  LiveID  int  直播ID  输出 {"Success":true,"Message":,"Value":[{"ID":用户ID ,"Name":"姓名"}]}*/
        GetDisabledAskOrReplyUsers: "/Live/GetDisabledAskOrReplyUsers",

        /*获取结束时间  LiveID  直播ID 输出 {"Success":true,"Message":,"Value":结束时间*/
        GetStopTime: "/Live/GetStopTime",

        /*获取直播状态  LiveID  直播ID 输出 {"Success":true,"Message":,"Value":0 已结束  1正在直播  2暂停直播*/
        GetLiveState: "/Live/GetLiveState",

        /*定时获取一系列接口   LiveID  int 直播ID   ViewRecordID  int  观看记录ID, ScheduleID int 课表ID ,  StudentID  int 学生ID ,IsGetDisabledTextCommentUser bool  是否获取评论被禁言的用户列表
          IsGetDisabledAskUser  bool  是否获取提问被禁言的用户列表, IsGetOnlineUser  bool 是否获取在线用户列表 ,IsGetAsk bool 是否获取问答 , AskQueryCondition  string  问答查询条件{"MaxTime":最大观看时间,"CreatorID"创建人ID,"Count":查询数量,"MaxDataID":最大数据ID} ,
          IsGetBullet  bool 是否获取弹幕 , BulletQueryCondition string 弹幕查询条件{"LastID":最大记录ID,"Count":查询数量}  , IsGetComment  bool 是否获取评论 CommentQueryCondition string 评论查询条件 {"PageSize":页大小,"PageNumber":页码,"LastID":最大ID},
          IsGetTeacherTestList bool  是否获取教师端测验列表 ,  IsGetRunningTest bool 是否获取正在进行的测验  , IsGetStudentTestList bool 是否获取学生测验历史  , IsGetTeacherHistorySign bool 是否获取教师签到列表 , IsGetStudentRunningSign bool 是否获取学生正在进行的签到
          IsGetStudentSignInfo  bool  是否获取学生签到详情  ,  IsGetDocument bool 是否获取文档

          输出 {"Success":true,"Message":,"Value":{"DisabledTextCommentUsers":[],"DisabledAskOrReplyUsers":[] , "IsEnableAsk":是否可以发提问 ,"IsEnableComment":是否可以发评论 ,"AskReplies":[问答列表],"LiveState":直播状态 ,"StopTime":停止时间,"BulletComment":[弹幕]
          "Comments":[评论],"OnlineUsers":[在线用户列表],"TeacherTestList":[教师测验列表],"RunningTest":正在进行的测验 ,"StudentTestList":学生测验列表,"TeacherSignList":教师端签到列表 ,"StudentRunningSign":正在签到,"StudentSignInfo":学生签到详情 ,"DocumentList":文档列表 }}
         */
        TimerResult: "/Miyun/TimerResult.ashx",

        //设置直播是否默认公开评论   参数 LiveID  int  直播ID , IsPublic  bool 是否公开
        SetIsAutoPublicComment: "/Live/SetIsAutoPublicComment",

        //设置直播是否默认公开问答  参数 LiveID  int  直播ID , IsPublic  bool 是否公开
        SetIsAutoPublicAsk: "/Live/SetIsAutoPublicAsk",

        //设置公开评论  参数 LiveID  int  直播ID , IsPublic  bool 是否公开  CommentID  int 评论ID
        SetIsPublicComment: "/Live/SetIsPublicComment",

        //微信直播页面接口整合  参数 LiveID  int 直播ID
        PhoneLiveInfo: "/Live/PhoneLiveInfo",

        //获取http直播流信息
        GetHttpStream: "/Live/GetHttpStream",

        //检查直播公开状态  LiveID 直播ID     true  公开  false  未公开
        LivePublicState: "/Live/LivePublicState",

        //检查直播观看权限  LiveID 直播ID     true  可以观看  false  不可以观看
        CheckViewLivePermission: "/Live/CheckViewLivePermission",

        //直播信息总接口  LiveID  直播ID  输出 {"ViewRecordID":观看记录ID,"Title":"标题","ImageUri":封面路径,"Summary":简介,"ViewTimes":观看次数,"PassWord":直播密码,"LiveState": 直播状态 ,"ScheduleID":课表ID,"IsEnableComment":是否允许评论,"TeacherList":[{"TeacherID":教师ID ,"TeacherName":教师名称 ,"IsMajor":是否主讲}],"CourseID":课程ID,"CourseName":课程名称,"OwnerClasses":[{"ID":班级ID ,"Name": 班级名称}],"OwnerOrganizations":[{"ID":院系ID ,"Name": 院系名称}],"httpVideo1Url":null,"httpSubVideo1Url":null,"httpVideo2Url":null,"httpSubVideo2Url":null,"httpVGAUrl":null,"httpSubVGAUrl":null}
        PhoneLive: "/Live/PhoneLive"

    },
    LiveSystem: {
        /*开始预览直播 ClassRoomID    输出 {"Success":true,"Message":"失败原因","Value":""}*/
        StartPrewLive: "/OpeationRecordLive/StartPrewLive",

        /*  开始录制 IsNeedRecord:true , 开始直播 IsNeedLive:true  通过课表开课  ScheduleID ：课表ID 在线巡课开课  传入参数  Title:标题 ,HasImage:是否有图片 true or false, Width:图片宽 , Height:图片高 , ResizeMode:0-禁用调整大小 1-调整到指定的尺寸 2-调整到指定的比例 , SchoolID:学校ID , WeekID:周次ID , NodeID:节次ID , StartTime:开始时间 , StopTime:结束时间 , ClassRoomID:教室ID , CourseID:课程ID , CourseName:课程名称 , TeacherID:教师ID , TeacherName:教师名 , Summary:简介 ， IsNeedRecord:是否录制 , RecordVideo:录制ID(RecordVideo=&RecordVideo=) , RecordChannel:录制通道(RecordChannel=&RecordChannel=) , IsNeedLive:是否直播 , LiveVideo:直播ID(LiveVideo=&LiveVideo=) , LiveChannel:直播通道(LiveChannel=&LiveChannel=) , IsPublicLive:是否公开直播 , LivePassword:直播密码 , LiveMaxCount:直播最大观看人数 , ClassID:班级ID(ClassID=&ClassID=) , OrganizationID:组织机构ID(OrganizationID=&OrganizationID=) , StudentID:学生ID(StudentID=&StudentID)  输出  {"Success":true,"Message":"失败原因","Value":""}*/
        StartRecordLive: "/OpeationRecordLive/StartRecordLive",

        /*参数: ScheduleID:课表ID ,  IsStopRecord:是否停止录制  ,  IsStopLive:是否停止直播    输出  {"Success":true,"Message":"失败原因","Value":""}*/
        StopRecordLive: "/OpeationRecordLive/StopRecordLive",

        /*延长录制时间  ScheduleID: 课表ID , Times:时长   成功  0*/
        ExtendRecord: "/OpeationRecordLive/ExtendRecord",

        /*获取教室状态 ClassRoomID  返回:{"State":0未知 1空闲 2 录制  4 直播 6 录播 , "RecordSeconds":录制时间 , "LiveSeconds":直播时间} */
        GetRoomState: "/OpeationRecordLive/GetClassRoomState",

        /*获取当前教室正在进行的课表   ClassRoomID:教室ID*/
        GetActiveSchedule: "/OpeationRecordLive/GetActiveSchedule",

        /*暂停直播 参数 :ScheduleID:课表ID ,  输出 {"Success":true,"Message":"失败原因","Value":""}*/
        PauseLive: "/OpeationRecordLive/LivePause",

        /*恢复直播 参数 :ScheduleID:课表ID ,  输出 {"Success":true,"Message":"失败原因","Value":""}*/
        ResumeLive: "/OpeationRecordLive/LiveResume",

        /*暂停录播 参数 :ScheduleID:课表ID ,  输出 {"Success":true,"Message":"失败原因","Value":""}*/
        PauseRecord: "/OpeationRecordLive/RecordPause",

        /*恢复录播 参数 :ScheduleID:课表ID ,  输出 {"Success":true,"Message":"失败原因","Value":""}*/
        ResumeRecord: "/OpeationRecordLive/RecordResume",

        /*获取正在上课的教室集合 */
        GetHasScheduleRoomCount: "/OpeationRecordLive/GetHasScheduleRoom"
    },
    OperateVideo: {
        /*根据班级获取资源数量  ClassID:班级ID  输出：{"Success":true,"Message":"","Value":{"数量"}*/
        GetNumberByClassID: "/Video/GetNumberByClassID",

        /*获取视频信息  VideoID:视频ID  输出：{"Success":true,"Message":"","Value":{"GradeList":[{"GradeID":,"GradeName":"年级名称"}],"TotalDownloadCount":视频下载数量,"VideoID":"视频ID","CanViewCourse":"能否看到课程","Title":"标题","Summary":"简介","StartTime":"开始时间","StopTime":"结束时间", "IsCollected":"是否被收藏" ,"LikerID":"是否点赞"， "IsCanModify":"是否能够编辑" , "CollectorsCount":"收藏数","LikersCount":"点赞数","CommentsCount":"评论数","ViewersCount":"观看人数","ViewTimes":"观看人次","IsEnableComment":"是否能够评论","Source":"视频来源"  , "UserID":"用户ID" , "TeacherID":"教师ID" , "FileUrl":"视频播放路径", "PicUrl":"视频缩略图路径" , "Duration":"视频时长" , "Process":"视频进度" , "Size":"视频大小" ， "IsPublic":"是否公开"， "IsPublish":"是否发布" , "IsProcessing":"是否正在转码" , "IsProcessSucess":"是否转码成功" ,"IsDeleted":"是否在课件回收站" ,"Ordinal":"视频序号" ,"TeacherName":"教师名字","CourseID":"课程ID","CourseName":"课程名称","CoursePicPath":"课程缩略图路径","SchoolID":"学校ID","SchoolName":"学校名","ClassRoomID":"教室ID","ClassRoomName":"教室名","TeachingBuildingID":"教学楼ID","TeachingBuildingName":"教学楼名称","IsLiving":"是否正在直播","LivePassword":"密码","IsPublicLive":"是否公开直播","LiveMaxCount":"直播最大观看人数","OwnerClasses":"[{"ClassID":"班级ID","ClassName":"班级名称"}]","OwnerOrganizations":"[{"OrganizationID":"组织机构ID","OrganizationName":"组织机构名称"}]"}}*/
        GetVideoByID: "/Video/GetVideoInfoByID",

        /*查询视频数量   TitleKey:名称关键字 , TeacherID:教师ID , IsPublish:是否公开 , StudentID:学生ID , OrganizationID:组织机构ID , CourseID:课程ID , ClassroomID:教室ID ,  StartTime:开始时间 , StopTime:结束时间 , IsPublic:是否公开 , ViewerID:观看人ID , CollectorID:收藏人ID ,LikerID:点赞ID,IsNeedLive:是否直播 ,  StartDate:开始日期,StopDate:结束日期, IsProcessing:是否正在转码 , IsProcessSuccess:是否转码成功 , IsDeleted:是否在回收站中 , Source:视频来源 返回值: {"Success":true,"Message":"","Value":89}*/
        GetVideoCount: "/Video/GetVideoCount",

        /*TitleKey:名称关键字 ,SubjectID  学科ID  GradeID  年级ID IsAutomaticStart:是否自动开始, IsAutomaticStop:是否自动停止, NodeID:节次ID, MustCanModify:是否必须能够修改, TeacherID:教师ID , IsPublish:是否公开 , StudentID:学生ID , OrganizationID:组织机构ID , CourseID:课程ID , ClassroomID:教室ID , StartTime:开始时间 , StopTime:结束时间 , IsPublic:是否公开 , ViewerID:观看人ID , CollectorID:收藏人ID ,LikerID:点赞ID,IsNeedLive:是否直播 , StartDate:开始日期,StopDate:结束日期, IsProcessing:是否正在转码 , IsProcessSuccess:是否转码成功 , IsDeleted:是否在回收站中 , Source:视频来源  ,Sort:排序规则(ID:直播ID,ViewTimes:观看次数, TotalViewersCount:总观看人数 , OnlineViewersCount:在线观看人数 , StartTime:开始时间 , StopTime:结束时间,Duration:时长 , Size:大小,VoteCount:投票数 , LikersCount:点赞数 , CollectorsCount:收藏数,"TotalDownloadCount":视频下载数量) , Order:0正序  1倒序

        输出:{"Success":true,"Message":"","Value":{"TotalCount":0 , Data:[{"GradeList":[{"GradeID":,"GradeName":"年级名称"}],"VideoID":"视频ID","CanViewCourse":"能否看到课程","Title":"标题","Summary":"简介","StartTime":"开始时间","StopTime":"结束时间", "IsCollected":"是否被收藏" ,"LikerID":"是否点赞"， "IsCanModify":"是否能够编辑" ,  "CollectorsCount":"收藏数","LikersCount":"点赞数","CommentsCount":"评论  数","ViewersCount":"观看人数","ViewTimes":"观看人次","IsEnableComment":"是否能够评论","Source":"视频来源", "UserID":"用户ID" ,"TeacherID":"教师ID" , "FileUrl":"视频播放路径", "PicUrl":"视频缩略图路径" , "Duration":"视频时长" , "Process":"视频进度" , "Size":"视频大小" ， "IsPublic":"是否公开"， "IsPublish":"是否发布" , "IsProcessing":"是否正在转码" ,  "IsProcessSucess":"是否转码成功" ,"IsDeleted":"是否在课件回收站" ,"Ordinal":"视频序号" ,"TeacherName":"教师 名字","CourseID":"课程ID","CourseName":"课程名称","CoursePicPath":"课程缩略图路径","SchoolID":"学校 ID","SchoolName":"学校名","ClassRoomID":"教室ID","ClassRoomName":"教室名","TeachingBuildingID":"教学楼 ID","TeachingBuildingName":"教学楼名称","IsLiving":"是否正在直播","LivePassword":"密码","IsPublicLive":"是 否公开直播","LiveMaxCount":"直播最大观看人数","OwnerClasses":"[{"ClassID":"班级ID","ClassName":"班级名 称"}]","OwnerOrganizations":"[{"OrganizationID":"组织机构ID","OrganizationName":"组织机构名称"}]"}]}} */
        QueryVideoList: "/Video/GetVideoList",

        /*添加播放记录  VideoID:视频ID , Name:游客名字 , Process:上次观看时间点  返回 {"Success":true,"Message":"","Value":12}*/
        AddViewRecord: "/Video/AddViewRecord",

        /*收藏视频      VideoID:视频ID*   返回: {"Success":true,"Message":,"Value":}*/
        CollectVideo: "/Video/CollectVideo",

        /*取消收藏视频  VideoID:视频ID  返回: {"Success":true,"Message":,"Value":}*/
        CanelCollectVideo: "/Video/CanelCollectVideo",

        /*点赞视频      VideoID:视频ID*   返回: {"Success":true,"Message":,"Value":}*/
        LikeVideo: "/Video/LikeVideo",

        /*取消点赞视频  VideoID:视频ID  返回: {"Success":true,"Message":,"Value":}*/
        CancelLikeVideo: "/Video/CancelLikeVideo",

        /*添加文字评论  VideoID:视频ID  , Name:名字 ,Process:视频进度 , Content:评论内容  输出 : {"Success":true,"Message":,"Value":} */
        AddTextComment: "/Video/AddTextComment",

        /*获取评论 VideoID:视频ID , LastID:上次获取的最后ID   分页 PageSize，PageNumber  输出 : {"Success":true,"Message":,"Value":{TotalCount:0,Data[{"ID":"评论ID" , "CommentType":"评论类型","Content":"评论内容","Progress":"评论时间点","IsPublic":"是否公开评论","CreatorID":"发表人","CreatorName":"发表人","CreateTime":"创建时间","ImagePath":"头像相对路径"}]}}  */
        GetComments: "/Video/GetComment",

        /*添加弹幕 VideoID:视频ID  , Name:名字 ,Process:视频进度 , Content:评论内容  输出: {"Success":true,"Message":,"Value":}*/
        AddBulletComment: "/Video/AddBulletComment",

        /*获取弹幕 VideoID:视频ID , LastID:上次获取的最后ID , Count:数量: {"Success":true,"Message":,"Value":[{"ID":"评论ID" , "CommentType":"评论类型","Content":"评论内容","Progress":"评论时间点","IsPublic":"是否公开评论","CreatorID":"发表人","CreatorName":"发表人","CreateTime":"创建时间"}]}*/
        GetBulletComment: "/Video/GetBulletComment",

        /*删除评论  CommentID  int 评论ID*/
        DeleteComment: "/Video/DeleteComment",

        /*添加索引 VideoID:视频ID , Name:名字 , Process:进度 , Content:评论内容  输出 : {"Success":true,"Message":,"Value":}*/
        AddVideoIndex: "/Video/AddVideoIndex",

        /*获取索引  VideoID:视频ID , LastID:上次获取的最后ID  输出: {"Success":true,"Message":,"Value":[{"ID":"评论ID" , "CommentType":"评论类型","Content":"评论内容","Progress":"评论时间点","IsPublic":"是否公开评论","CreatorID":"发表人","CreatorName":"发表人","CreateTime":"创建时间"}]}*/
        GetVideoIndex: "/Video/GetVideoIndex",

        /*设置能否评论 VideoID:视频ID , IsEnableComment:能否评论  输出: {"Success":true,"Message":,"Value":} */
        SetIsEnableComment: "/Video/SetIsEnableComment",

        /*VideoID:视频ID , IsPublic:是否公开   输出: {"Success":true,"Message":,"Value":} */
        SetIsPublic: "/Video/SetIsPublic",

        /*VideoID:视频ID , IsPublish:是否发布   输出: {"Success":true,"Message":,"Value":}*/
        SetIsPublish: "/Video/SetIsPublish",

        /* 设置进入回收站，或者从回收站还原   VideoID：视频ID , IsDeleted   输出: {"Success":true,"Message":,"Value":}*/
        SetIsDelete: "/Video/SetIsDelete",

        /*设置视频序号   VideoID:视频ID , Ordinal:序号   输出: {"Success":true,"Message":,"Value":} */
        SetOrdinal: "/Video/SetOrdinal",

        /*获取详细信息，并更新播放进度 VideoID：视频ID  , Process:当前播放进度 , RecordID:记录ID 输出: {"Success":true,"Message":,"Value":{"TotalCount":总人数, IsEnableComment:"是否可以评论" , Data:[{"ID": 145,"Name": "姓名"}]}} */
        GetViewInfo: "/Video/GetViewInfo",

        /*开始删除视频  VideoID:视频ID  IsDeleteFile:是否删除源文件  输出: {"Success":true,"Message":,"Value":}*/
        VideoDel: "/Video/DelVideo",

        /*视频基础数据修改GradeID  int  年级ID 多选传多个GradeID ScheduleID:课表ID , Title:标题 , CourseID:课程ID , CourseName:课程名称 , TeacherID:教师ID , TeacherName:教师名 , ClassID:教室ID , OrganizationID:组织机构ID , StudentID:学生ID  输出: {"Success":true,"Message":,"Value":} */
        VideoUpdate: "/Video/VideoUpdate",

        /*获取视频播放的地址以及视频数量   参数 VideoID:    输出:{"Success":true,"Message":null,"Value":"{\"FileStyle\":\"m3u8\",\"VideoCount\":2,\"Video1Src\":"",\"Video1Width\":1920,\"Video1Height\":1080,\"Video1StartTime\":0,\"Video2Src\":"",\"Video2Width\":1920,\"Video2Height\":1080,\"Video2StartTime\":0,\"Video3Src\":null,\"Video3Width\":0,\"Video3Height\":0,\"Video3StartTime\":0,\"VGASrc\":null,\"VGAWidth\":0,\"VGAHeight\":0,\"VGAStartTime\":0,\"Video1Show\":true,\"Video2Show\":true,\"Video3Show\":false,\"VGAShow\":false}"}*/
        PlayUrlInfo: "/VideoApi/GetVideoUrl",

        /*创建临时文件  参数: FileName: string  文件名称 输出 {"Success":true,"Message":,"Value":文件ID}*/
        CreateTempFile: "/VideoUpload/CreateTempFile",

        /*向临时文件中追加数据  参数 ID: int  临时文件ID   输出: {"Success":true,"Message":,"Value":}*/
        AppendTempFile: "/VideoUpload/AppendToTempFile",

        /*从临时文件里创建视频 参数SchoolID  int  学校ID, Title:string 标题, TeacherID:int?null 教师ID , TeacherName:string 教师名字 , CourseID:int?null  课程ID, CourseName:string 课程名称 , StartTime:DateTime?  开始时间 ,StopTime:DateTime?  结束时间 , OrganizationID: int  组织机构id ,Duration：时长, TempFiles IEnumerable<int?> 临时文件ID 输出: {"Success":true,"Message":,"Value":}*/
        CreateVideoFromTempFile: "/VideoUpload/CreateVideoFromTempFile",

        /*添加文档  参数 VideoID:视频ID , Title:文档标题 ,  AuthorName:主讲人  , Extension:后缀名  输出 {"Success":true,"Message":,"Value":"文件ID"} */
        DocumentAdd: "/Video/DocumentAdd",

        /*修改文档  参数 VideoID:视频ID ,  ID:文档ID , Title:文档标题 ,  AuthorName:主讲人  , Extension:后缀名  返回值 {"Success":true,"Message":,"Value":} */
        DocumentUpdate: "/Video/DocumentUpdate",

        /*删除文档  参数 VideoID:视频ID , DocumentID:文档ID  输出 {"Success":true,"Message":,"Value":} */
        DocumentDel: "/Video/DocumentDel",

        /*获取文档详细信息  参数 DocumentID:文档ID  输出 {"Success":true,"Message":,"Value":{ "ID": 12, "Title": "11111111111111", "FileUri": "/Static/Files/2017/11/21/164608449000000001.zip", "FileSize": 3, "AuthorName": "11111111111", "DownloadCount": 0, "CreatorID": 3466, "CreatorName": "t1", "CreateTime": "2017-11-21 16:46:08", "Memo": null }}*/

        DocumentInfo: "/Video/DocumentInfoByID",

        /*获取文档列表  参数 VideoID:视频ID  输出{"Success":true,"Message":,"Value":[{ "ID": 12, "Title": "11111111111111", "FileUri": "/Static/Files/2017/11/21/164608449000000001.zip", "FileSize": 3, "AuthorName": "11111111111", "DownloadCount": 0, "CreatorID": 3466, "CreatorName": "t1", "CreateTime": "2017-11-21 16:46:08", "Memo": null }}] */
        DocumentList: "/Video/DocumentList",

        /*设置投票数  参数 VideoID:视频ID , VoteCount:投票数  输出 {"Success":true,"Message":,"Value":} */
        SetVoteCount: "/Video/SetVoteCount",

        /*投票  参数 VideoID:视频ID  输出 {"Success":true,"Message":,"Value":} */
        VoteVideo: "/Video/VoteVideo",

        /*星星评分  参数 VideoID：视频ID  , ScoreContent:评分内容 [{"ID":评分项ID , "Value":分数}]  输出 {"Success":true,"Message":,"Value":}*/
        SaveStarRatingScores: "/Video/SaveStarRatingScores",

        /*文字评分  参数 VideoID：视频ID  , ScoreContent:评分内容 [{"ID":评分项ID , "Value":分数}]  输出 {"Success":true,"Message":,"Value":}*/
        SaveEvaluationClassScores: "/Video/SaveEvaluationClassScores",

        //获取视频公开状态   参数 VideoID：视频ID   返回  true 公开  false 不公开
        VideoPublicState: "/Video/VideoPublicState",

        //检查当前用户是否有观看此视频的权限   参数 VideoID：视频ID   返回  true 可以观看  false 无权限观看
        CheckViewLivePermission: "/Video/CheckViewLivePermission",

        //手机点播详细信息 参数 VideoID：视频ID  输出{"ViewRecordID":观看记录ID,"Title":"标题","ImageUri":封面路径,"ViewTimes":观看次数,"Duration":时长 , "Process":观看时长 , "IsEnableComment":是否可以评论,"Summary":简介,"DocumentList":[],"FileUrl":"播放地址","TeacherList":[{"TeacherID":教师ID ,"TeacherName":教师名称 ,"IsMajor":是否主讲}],"CourseID":课程ID,"CourseName":课程名称,"OwnerClasses":[{"ID":班级ID ,"Name": 班级名称}],"OwnerOrganizations":[{"ID":院系ID ,"Name": 院系名称}]}
        VideoPhone: "/Video/PhoneVideo",

        //分享视频  VideoID  视频ID    UserID  用户ID
        SharVideo: "/Video/SharVideo",

        //取消分享课表  Video  视频ID    UserID  用户ID
        CanelVideo: "/Video/CanelSharVideo",

        //查询课表分享的用户  Video  课表ID   返回 {"Success":true,"Message":"失败原因","Value": "[{"ID":用户id ,"Name":"姓名"}]"}
        QuerySharVideoUser: "/Video/QuerySharVideoUser",

        //批量修改视频的基本信息 参数 VideoID  传多个, Title string  不修改不用传, CourseID int? 课程id  可空, string CourseName  课程名称  手动输入系统内不存在的课程, OrganizationID  组织机构ID  传多个或不传
        VideoBasicUpdates:"/Video/VideoUpdates"
    },
    GetAllTeachingCycle: {
        /*参数:SchoolID:学校ID  输出:{"Success":true,Message:"失败原因","Value":[ { "YearID": 393, "YearName": "2018-2019学年", "YearStartTime": "2018-09-10 00:09:00", "YearStopTime": "2019-06-01 00:06:00", "SemeSterList": [ { "SemeSterID": 394, "SemeSterName": "上学期", "SemeSterStartTime": "2018-09-10 00:09:00", "SemeSterStopTime": "2018-12-31 00:12:00", "WeekList": [ { "WeekID": 396, "WeekName": "第1周", "WeekStartTime": "2018-09-10 00:09:00", "WeekStopTime": "2018-09-14 00:09:00" } ] } ] }]}*/
        TeachingCycle: "/PublicOperation/GetAllTeachingCycle"
    },
    DeliveryDeviceUrl: {
        /*通过ID查询设备信息  参数  deviceID:设备ID   返回  {"Success":true,Message:"失败原因","Value":{ "ID":"设备ID","Name":"名字","No":"编号","DeliveryServerID":"专递服务器ID","DeliveryServerName":"专递服务器名称", "SchoolID":"学校ID","SchoolName":"学校名称","IsIdle":"是否空闲"}}*/
        DeviceInfo: "/DeliveryDevice/DeviceInfoByID",

        /*设备列表查询   参数 SchoolID:学校ID(int?null)  CommonKey:名称关键字, IsIdle:是否空闲 , Count:(int?null)查询数量 ,PageSize:页大小 ,PageNumber:页码 返回  {"Success":true,Message:"失败原因","Value":["Total":"0","Data":[{ "ID":"设备ID","Name":"名字","No":"编号","DeliveryServerID":"专递服务器ID","DeliveryServerName":"专递服务器名称", "SchoolID":"学校ID","SchoolName":"学校名称","IsIdle":"是否空闲"}]]}*/
        DeviceList: "/DeliveryDevice/DeviceList",

        /*设备列表查询   参数  DeliveryID:专递课堂ID(int?null)  CommonKey:名称关键字, IsIdle:是否空闲 , Count:(int?null)查询数量 ,PageSize:页大小 ,PageNumber:页码 返回   {"Success":true,Message:"失败原因","Value":["Total":"0","Data":[{ "ID":"设备ID","Name":"名字","No":"编号","DeliveryServerID":"专递服务器ID","DeliveryServerName":"专递服务器名称","SchoolID":"学校ID","SchoolName":"学校名称","IsIdle":"是否空闲"}]]}*/
        AllDeviceList: "/DeliveryDevice/AllDeviceList",

        /*获取设备数量  参数 SchoolID:学校ID(int?null)  CommonKey:名称关键字, IsIdle:是否空闲    返回:  {"Success":true,"Message":"失败原因","Value":60}*/
        DeviceCount: "/DeliveryDevice/DeviceCount",

        /*设备名字是否重复  参数 SchoolID:学校ID(int?null) Name:名字  ,  ID:(int?null)设备ID   返回   {"Success":true,"Message":"失败原因","Value":true重复 false不重复}*/
        NameIsExist: "/DeliveryDevice/NameIsExist",

        /*设备编号是否重复  参数  No:名字  ,  ID:(int?null)设备ID 返回  {"Success":true,"Message":"失败原因","Value":true重复 false不重复}*/
        NameNoExist: "/DeliveryDevice/NoIsExist",

        /*删除设备   参数   ID:多设备删除 id-id  成功 {"Success":true,"Message":"失败原因","Value":true}*/
        DeviceDel: "/DeliveryDevice/DeviceDel",

        /*设备修改   参数   ID:设备ID , ServerID:所属服务器ID  ,  No:编号 , Name:名字  返回 {"Success":true,"Message":"失败原因","Value":true}*/
        DeviceUpdate: "/DeliveryDevice/DeviceUpdate"
    },
    DeliveryUrl: {
        /*创建专递课堂  参数:DeliveryName:专递课堂名称 , MasterDeviceID:设备ID ,Duration:时长 ,PassWord:密码,otherDeviceID:设备列表,Memo:备注
         返回值 {"Success":true,"Message":"失败原因","Value":}*/
        DeliveryCreate: "/DeliveryClass/DeliveryClassCreate",

        /*关闭专递课堂  参数:DeliveryID:专递课堂ID  返回值 {"Success":true,"Message":"失败原因","Value":}*/

        DeliveryDel: "/DeliveryClass/DeliveryClassClose",

        /*添加设备  参数   DeliveryID:专递课堂ID , DeviceID:设备ID  批量添加 设备ID之间用','隔开  返回值 {"Success":true,"Message":"失败原因","Value":}*/
        AddDevice: "/DeliveryClass/DeliveryClassAddDevice",

        /*删除设备  参数   DeliveryID:专递课堂ID , DeviceID:设备ID  批量添加 设备ID之间用','隔开  返回值 {"Success":true,"Message":"失败原因","Value":}*/
        DelDevice: "/DeliveryClass/DeliveryClassDelDevice",

        /*获取专递课堂设备状态  参数 DeliveryID:互动课堂ID
        返回值:  {"Success":true,"Message":"失败原因","Value":[{"ID":ID,"Name":"设备名称","IsMaster":"是否主讲" ,"CanListen":"是否静音","CanSpeak":"是否哑音","IsShowInHomeScreen":"是否互动","IsVideoAvailable":"是否可用"}]}*/
        DeliveryDeviceConnectState: "/DeliveryClass/GetDeviceConnectionState",

        /*专递课堂延长时长  参数  DeliveryID:专递课堂ID  , Duration:时长  返回值 {"Success":true,"Message":"失败原因","Value":}*/
        DeliveryExtendDuration: "/DeliveryClass/DeliveryExtendDuration",

        /*设置收听  参数 DeliveryID:课堂ID, DeviceID:设备ID,ID,ID , Flag:false禁止收听 true允许收听 返回值 [{"Success":true,"Message":"失败原因","Value":}]*/
        SetListen: "/DeliveryClass/SetListen",

        /*设置发言  参数 DeliveryID:课堂ID, DeviceID:设备ID,ID,ID , Flag:false禁止发言 true允许发言 返回值 [{"Success":true,"Message":"失败原因","Value":}]*/
        SetSpeak: "/DeliveryClass/SetSpeak",

        /*设置互动  参数DeliveryID:课堂ID,  DeviceID:设备ID,ID,ID , Flag:false否 true是 返回值 [{"Success":true,"Message":"失败原因","Value":}]*/
        SetHuDong: "/DeliveryClass/SetHuDong",

        /*验证专递课堂名称是否重复  SchoolID:学校ID,DeliveryName:课堂名称,DeliveryID:课堂ID   返回值 {"Success":true,"Message":"失败原因","Value":true 重复 false 不重复}*/
        NameIsExist: "/DeliveryClass/DeliveryNameIsExist",

        /*课堂记录重开    DeliveryID:课堂记录ID   返回值 {"Success":true,"Message":"失败原因","Value":}*/
        DeliveryClassRecordReuse: "/DeliveryClass/DeliveryClassRecordReuse",

        /*课堂记录删除   DeliveryID:课堂记录ID   返回值 [{"Success":true,"Message":"失败原因","Value":}]*/
        DeliveryClassRecordDel: "/DeliveryClass/DeliveryClassRecordDel",

        /*获取专递课堂数量  参数 SchoolID:学校ID , NameKey:名称 ,MinStartDate:最小开始日期 , MaxStartDate:最大开始日期  返回值 {"Success":true,"Message":"失败原因","Value":数量} */
        DeliveryCount: "/DeliveryClass/DeliveryClassCount",

        /*根据专递课堂ID获取专递课堂详细信息  参数   DeliveryID:专递课堂ID  返回：  {"Success":true,"Message":"失败原因","Value":{"DeliveryID":课堂ID,"DeliveryName":"课堂名称","PassWord":"密码","StartTime":"开始时间","Duration":"时长","StopTime":"结束时间","Memo":"备注","IsRunning":"是否正在运行","IsCompleted":"是否已完成","MasterDeviceID":"主讲设备ID","MasterDeviceName":"主讲设备名称","DeliveryServerID":"专递服务器ID","DeliveryServerName":"专递服务器名称","DeviceList":[{"DeviceID":"设备ID","DeviceName":"设备名称"}],"CreatorID":"创建人ID","CreatorName":"创建人名称","CreateTime":"创建时间"}}*/
        DeliveryInfoByID: "/DeliveryClass/DeliveryInfoByID",

        /*获取专递课堂列表  参数 IsCompleted:是否已经结束 , SchoolID:学校ID , NameKey:名称 ,MinStartDate:最小开始日期 , MaxStartDate:最大开始日期 , PageSize:页大小,PageNumber:页码 , Count:数量  返回:{"Success":true,"Message":"失败原因","Value":{"TotalCount":数量,Data:[{"DeliveryID":课堂ID,"DeliveryName":"课堂名称","PassWord":"密码","Duration":"时长","StartTime":"开始时间","StopTime":"结束时间","Memo":"备注","IsRunning":"是否正在运行","IsCompleted":"是否已完成","MasterDeviceID":"主讲设备ID","MasterDeviceName":"主讲设备名称","DeliveryServerID":"专递服务器ID","DeliveryServerName":"专递服务器名称","DeviceList":[{"DeviceID":"设备ID","DeviceName":"设备名称"}],"CreatorID":"创建人ID","CreatorName":"创建人名称","CreateTime":"创建时间"}]}}*/
        DeliveryList: "/DeliveryClass/DeliveryList",

        /*获取播放流   参数  DeliveryID:专递课堂ID  , DeviceID:设备ID  返回  {"Success":true,"Message":"失败原因","Value":{"VideoTIP":"推ip","VideoTPort":"推端口","VideoTStream":"推流名","VideoLIP":"拉ip","VideoLPort":"拉端口","VideoLStream":"拉流名"}}*/
        PlayUrl: "/DeliveryClass/PlayUrl",

        //开始录制   DeliveryClassID 专递课堂ID  
        StartRecord: "/DeliveryClass/StartRecord",

        //停止录制   DeliveryClassID 专递课堂ID  
        StopRecord: "/DeliveryClass/StopRecord",

        //开始直播   DeliveryClassID 专递课堂ID  
        StartLive: "/DeliveryClass/StartLive",

        //停止直播   DeliveryClassID 专递课堂ID  
        StopLive: "/DeliveryClass/StopLive"
    },
    NewTypeUrl: {
        /*名字验证是否重复  ID:新闻类别ID(int?null) , Name:类别名称  返回值: {"Success":true,"Message":"失败原因","Value":}*/
        NameIsExist: "/NewType/ValidateName",

        /*增加新闻类别  Name:新闻类别名称 , Memo:备注  返回值: {"Success":true,"Message":"失败原因","Value":}*/
        NewTypeAdd: "/NewType/Add",

        /*修改新闻类别  ID:新闻类别ID , Name:新闻类别名称 , Memo:备注  返回值 : {"Success":true,"Message":"失败原因","Value":}*/
        NewTypeUpdate: "/NewType/Update",

        /*删除新闻类别  ID:新闻类别ID 多选删除 ID-ID-ID   返回值: {"Success":true,"Message":"失败原因","Value":}*/
        NewTypeDelete: "/NewType/Del",

        /*新闻类别详细信息  ID:新闻类别ID  返回值:{"Success":true,"Message":"失败原因","Value":{"ID":1 , "Name":"类别名称" , "Memo","备注" , "CreateTime":"创建时间" ,"Creator":"创建人"}}*/
        NewTypeInfo: "/NewType/Get",

        /*新闻类别列表  查询参数 Name:新闻类别名称 , PageSize:页大小 , PageNumber:页码 ,IsInsideType:是否是内部类型 返回值:{"Success":true,"Message":"失败原因","Value":{"TotalCount":总数 , "Data":[{"ID":1 , "Name":"类别名称" , "Memo","备注" , "CreateTime":"创建时间" ,"Creator":"创建人"}]}}*/
        NewTypeList: "/NewType/Query"
    },
    NewsUrl: {
        /*添加新闻 参数: Title:标题 , TypeName:类别名称, TypeID:类别ID , Content:"新闻内容" ,"IsPublic":是否公开 , "IsShow":是否显示  成功 {"Success":true,"Message":"失败原因","Value":}*/
        NewsAdd: "/News/Add",

        /*修改新闻 参数 ID:新闻ID , Title:标题 , TypeID:类别ID , Content:"新闻内容" ,"IsPublic":是否公开 , "IsShow":是否显示  成功 {"Success":true,"Message":"失败原因","Value":}*/
        NewsUpdate: "/News/Update",

        /*删除新闻  ID:新闻ID 多选删除 ID-ID-ID   返回值: {"Success":true,"Message":"失败原因","Value":} */
        NewsDelete: "/News/Del",

        /*新闻详细信息  ID:新闻ID 返回值:{"Success":true,"Message":"失败原因","Value":{"ID":1,"Title":"标题","Content":"内容","IsPublic":是否公开,"IsShow":"是否显示","Creator":"创建人","CreateTime":"创建时间","PublicTime":"公开时间"}}*/
        NewInfo: "/News/Get",

        /*新闻列表  Title:标题 ,contentType:查询类别, PageSize:页大小 , PageNumber:页码  返回值:{"Success":true,"Message":"失败原因","Value":{"TotalCount":10,"Data":[{"ID":1,"Title":"标题","Content":"内容","IsPublic":是否公开,"IsShow":"是否显示","Creator":"创建人","CreateTime":"创建时间","PublicTime":"公开时间"}]}}*/
        NewsList: "/News/Query",

        /*设置公开  ID:新闻ID  , IsPublic:是否公开  返回值:{"Success":true,"Message":"失败原因","Value":}*/
        SetPublic: "/News/SetPublic",

        /*设置是否显示  ID:新闻ID  , IsShow:是否显示  返回值:{"Success":true,"Message":"失败原因","Value":}*/
        SetIsShow: "/News/SetIsShow"
    },
    NewsPublic: {
        /*新闻类别列表  PageSize:页大小 , PageNumber:页码 ,IsInsideType:是否是内部类型  返回值:{"Success":true,"Message":"失败原因","Value":{"TotalCount":总数 , "Data":[{"ID":1 , "Name":"类别名称" , "Memo","备注" , "CreateTime":"创建时间" ,"Creator":"创建人"}]}}*/
        NewTypeList: "/NewType/Query",

        /*新闻列表 contentType:查询类别, PageSize:页大小 , PageNumber:页码  返回值:{"Success":true,"Message":"失败原因","Value":{"TotalCount":10,"Data":[{"ID":1,"Title":"标题","Content":"内容","IsPublic":是否公开,"IsShow":"是否显示","Creator":"创建人","CreateTime":"创建时间","PublicTime":"公开时间"}]}}*/
        NewsList: "/News/Query",

        /*新闻详细信息  ID:新闻ID 返回值:{"Success":true,"Message":"失败原因","Value":{"ID":1,"Title":"标题","Content":"内容","IsPublic":是否公开,"IsShow":"是否显示","Creator":"创建人","CreateTime":"创建时间","PublicTime":"公开时间"}}*/
        NewInfo: "/News/Get"
    },
    ScoreItemUsageUrl: {
        /*评分用途列表 输出 { "Success": true, "Message": null, "Value": [ { "ID": 1, "Name": "评委评分", "Description": "评委评分" }, { "ID": 2, "Name": "星星评分", "Description": "星星评分" } ] }*/
        UsageList: "/ScoreItemUsage/Query",

        /*评分用途详细信息 输出 { "Success": false, "Message": { "ID": 1, "Name": "评委评分", "Description": "评委评分" }, "Value": null }*/
        UsageInfoByID: "/ScoreItemUsage/Get"
    },
    ScoreItemTypeUrl: {
        /*添加评分类型  参数 : UsageID:用途ID,Name:类型名称, Description:描述 ,CourseID:课程ID , PhaseID:学段ID , SubjectID:学科ID   输出 {"Success":true,"Message":"失败原因","Value":}*/
        TypeAdd: "/ScoreItemType/Add",

        /*修改评分类型 参数 : ID:类型ID , UsageID:用途ID,Name:类型名称, Description:描述 ,CourseID:课程ID , PhaseID:学段ID , SubjectID:学科ID   输出 {"Success":true,"Message":"失败原因","Value":} */
        TypeUpdate: "/ScoreItemType/Update",

        /*删除评分类型 参数 ID:类型ID 输出{"Success":true,"Message":"失败原因","Value":}*/
        TypeDel: "/ScoreItemType/Del",

        /*通过ID查询评分类型详细信息  参数 ID:类型ID 输出{ "Success": true, "Message": null, "Value": { "ID": 0, "Name": "Test1", "UsageID": 1, "Description": "Test1", "Course": { "CourseID": 0, "CourseName": null }, "Phase": { "PhaseID": 0, "PhaseName": null }, "Subject": { "SubjectID": 0, "SubjectName": null } }}*/
        TypeInfoByID: "/ScoreItemType/Get",

        /*查询评分类型列表 参数 SchoolID  int  学校ID, UsageID:用途ID ,PageSize:页大小 , PageNumber:页码   输出 { "Success": true, "Message": null, "Value": { "TotalCount": 1, "Data": [ { "ID": 0, "Name": "Test1", "UsageID": 1, "Description": "Test1", "Course": { "CourseID": 0, "CourseName": null }, "Phase": { "PhaseID": 0, "PhaseName": null }, "Subject": { "SubjectID": 0, "SubjectName": null } } ] } }*/
        TypeList: "/ScoreItemType/Query",

        /*验证评分类型是否重复  参数 ID:id  , Name:名称  输出 {"Success":true,"Message":"失败原因","Value":true}*/
        TypeIsExist: "/ScoreItemType/ValidateName",

        /*验证评分类型是否重复  参数 ID:id  , UsageID:用途ID , CourseID:课程ID , SubjectID:学科ID , PhaseID:学段ID   输出 {"Success":true,"Message":"失败原因","Value":true}*/
        CSPIsExist: "/ScoreItemType/ValidateCPS"
    },
    ScoreItemUrl: {
        /*添加评分 参数 : CategoryID:类型ID , Score:分数 ,Name:名字 , Description:描述 输出 {"Success":true,"Message":"失败原因","Value":} */
        ItemAdd: "/ScoreItem/Add",

        /*修改评分 参数 ID:评分ID , CategoryID:类型ID , Score:分数 ,Name:名字 , Description:描述 输出 {"Success":true,"Message":"失败原因","Value":}*/
        ItemUpdate: "/ScoreItem/Update",

        /*删除评分 参数 ID:评分ID 输出 {"Success":true,"Message":"失败原因","Value":} */
        ItemDel: "/ScoreItem/Del",

        /*评分详细信息 参数 ID:评分ID 输出 {"Success":true,"Message":"失败原因","Value":{"ID":0 , "ItemType:{"ScoreItemTypeID":0 , "ScoreItemTypeName":""} ,"Name":"Tset1" , "Description":"" , "Score":80 , "CreateTime":"" }}*/
        ItemInfoByID: "/ScoreItem/Get",

        /*评分列表信息 参数 CategoryID:类型ID , PageSize:页大小 , PageNumber:页码 , Name:名称关键字  输出 {"Success":true,"Message":"失败原因","Value":{"TotalCount":1 , "Data":[{"ID":0 , "ItemType:{"ScoreItemTypeID":0 , "ScoreItemTypeName":""} ,"Name":"Tset1" , "Description":"" , "Score":80 , "CreateTime":"" }]}}*/
        ItemList: "/ScoreItem/Query",

        /*评分项是否重复 参数 ID:项ID , CategoryID:类型ID , Name:名称  输出 {"Success":true,"Message":"失败原因","Value":true}*/
        ItemIsExist: "/ScoreItem/ValidateName"
    },
    DefaultPage: {
        /* UserName ：用户名 , PassWord:密码*/
        RegisterStudent: "/BeijingSportUniversity/RegisterStudent.ashx"
    },
    Document: {
        /*参数 : Title:标题  ,Name:主讲  Memo :备注  HasImage:是否有图片   返回 {"Success":true,"Message":"失败原因","Value":}*/
        DocumentAdd: "/Document/DocumentAdd",

        /*参数 : ID:id ,Title:标题  ,Name:珠江  Memo :备注  HasImage:是否有图片   返回 {"Success":true,"Message":"失败原因","Value":}*/
        DocumentUpdate: "/Document/DocumentUpdate",

        /*参数 : ID (-连接)  返回 {"Success":true,"Message":"失败原因","Value":}*/
        DocumentDel: "/Document/DocumentDel",

        /*参数 : ID   返回 {"Success":true,"Message":"失败原因","Value":}*/
        DocumentInfo: "/Document/DocumentInfo",

        /*参数 : PageSize:页大小  PageNumber:页码 , Count:数量  CommonKey:关键字  SchoolID：学校ID   返回 {"Success":true,"Message":"失败原因","Value":}*/
        DocumentList: "/Document/DocumentList"
    },
    SynchronousCMS1: {
        /*SchoolID:学校ID，SchoolAreaID:校区ID,SchoolName:学校名称, StudentRole:学生默认角色名称*/
        SynchronousNode: "/SynchronousCMS/SynchronousNode",

        /*SchoolID:学校ID，SchoolAreaID:校区ID,SchoolName:学校名称, StudentRole:学生默认角色名称*/
        SynchronousBuilding: "/SynchronousCMS/SynchronousBuilding",

        /*SchoolID:学校ID，SchoolAreaID:校区ID,SchoolName:学校名称, StudentRole:学生默认角色名称*/
        SynchronousOrganization: "/SynchronousCMS/SynchronousOrganization",

        /*SchoolID:学校ID，SchoolAreaID:校区ID,SchoolName:学校名称, StudentRole:学生默认角色名称*/
        SynchronousCourse: "/SynchronousCMS/SynchronousCourse",

        /*SchoolID:学校ID，SchoolAreaID:校区ID,SchoolName:学校名称, StudentRole:学生默认角色名称*/
        SynchronousRole: "/SynchronousCMS/SynchronousRole",

        /*SchoolID:学校ID，SchoolAreaID:校区ID,SchoolName:学校名称, StudentRole:学生默认角色名称*/
        SynchronousUser: "/SynchronousCMS/SynchronousUser",

        /*SchoolID:学校ID，SchoolAreaID:校区ID,SchoolName:学校名称, StudentRole:学生默认角色名称*/
        SynchronousClassRoom: "/SynchronousCMS/SynchronousClassRoom",

        /*SchoolID:学校ID，SchoolAreaID:校区ID,SchoolName:学校名称, StudentRole:学生默认角色名称*/
        SynchronousResource: "/SynchronousCMS/SynchronousResource"
    },
    SynchronousCMS2: {
        /*SchoolID:学校ID，SchoolAreaID:校区ID,SchoolName:学校名称, StudentRole:学生默认角色名称*/
        SynchronousNode: "/SynchronousCMS2/SynchronousNode",

        /*SchoolID:学校ID，SchoolAreaID:校区ID,SchoolName:学校名称, StudentRole:学生默认角色名称*/
        SynchronousBuilding: "/SynchronousCMS2/SynchronousBuilding",

        /*SchoolID:学校ID，SchoolAreaID:校区ID,SchoolName:学校名称, StudentRole:学生默认角色名称*/
        SynchronousOrganization: "/SynchronousCMS2/SynchronousOrganization",

        /*SchoolID:学校ID，SchoolAreaID:校区ID,SchoolName:学校名称, StudentRole:学生默认角色名称*/
        SynchronousCourse: "/SynchronousCMS2/SynchronousCourse",

        /*SchoolID:学校ID，SchoolAreaID:校区ID,SchoolName:学校名称, StudentRole:学生默认角色名称*/
        SynchronousRole: "/SynchronousCMS2/SynchronousRole",

        /*SchoolID:学校ID，SchoolAreaID:校区ID,SchoolName:学校名称, StudentRole:学生默认角色名称*/
        SynchronousUser: "/SynchronousCMS2/SynchronousUser",

        /*SchoolID:学校ID，SchoolAreaID:校区ID,SchoolName:学校名称, StudentRole:学生默认角色名称*/
        SynchronousClassRoom: "/SynchronousCMS2/SynchronousClassRoom",

        /*SchoolID:学校ID，SchoolAreaID:校区ID,SchoolName:学校名称, StudentRole:学生默认角色名称*/
        SynchronousResource: "/SynchronousCMS2/SynchronousResource"
    },
    TurnningSpeed: {
        GetTurnningSpeed: "/PublicOperation/GetTurnningSpeed",

        /* 参数 TurnningSpeed*/
        SetTurnningSpeed: "/PublicOperation/SetTurnningSpeed"
    },
    /*数据统计排行*/
    Statistics: {
        /*参数：SchoolID:学校ID, Count:查询数量,PageSize:页大小,PageNumber:页码  返回值:{"Success": true, "Message": null, "Value": ["TotalCount":总数,"Data":{"ID": 视频ID,"Title": "视频标题","ViewTimes": 点播次数}]}*/
        StatisticsVideo: "/Statistics/GetVideoPlayStatistics",

        /*参数：SchoolID:学校ID, Count:查询数量,PageSize:页大小,PageNumber:页码  返回值:{"Success": true, "Message": null, "Value": ["TotalCount":总数,"Data":{"ID": 直播ID,"Title": "直播标题","ViewTimes": 点播次数}]}*/
        StatisticsLive: "/Statistics/GetLivePlayStatistics",

        /*参数: SchoolID:学校ID, Count:查询数量,PageSize:页大小,PageNumber:页码   返回值:{"Success": true,"Message": null,"Value": {"TotalCount": 0,"Data": [{"ID": 237,"Title": "杜彭周三测试01","VideoViewTimes": 0, "LiveViewTimes": 0,"IsNeedLive": true,"IsNeedRecord": true,"IsLiveCompleted": false,"IsRecordCompleted": true,"TeacherName": null,"OrganizationName": null}]}}*/
        StatisticsRecordLive: "/Statistics/GetLiveRecordPlayStatistics",

        /*参数：SchoolID:学校ID, Count:查询数量,PageSize:页大小,PageNumber:页码 返回值:{"Success": true,"Message": null,"Value": {"TotalCount": 1,"Data": [{"ID": 4766,"Type": 1,"Account": "t1", "Name": "t1", "Sex": true, "Organization": "文科类", "LoginTime": "2018-04-12 11:02:33", "LoginDuration": 6} ] }}*/
        OnlineUser: "/Statistics/GetOnlineUserList",

        /*{"Success": true,"Message": null,"Value": 7}*/
        LoginCount: "/Statistics/GetUserLoginCount",

        /*获取录制最多的教师排行榜 参数 SchoolID:学校ID, Count:查询数量,PageSize:页大小,PageNumber:页码   {"Success": true,"Message": null,"Value": {"TotalCount": 0,"Data": [{ "ID": 23, "Account": "333333", "Name": "as","OrganizationName": "理科类","RecordCount": 0, "LiveCount": 0,"TotalCount": 0}]}*/
        StatisticsRecordTeacher: "/Statistics/GetStatisticsRecordTeacher",

        /*获取直播最多的教师排行榜 参数SchoolID:学校ID, Count:查询数量,PageSize:页大小,PageNumber:页码 {"Success": true,"Message": null,"Value": {"TotalCount": 0,"Data": [{ "ID": 23, "Account": "333333", "Name": "as","OrganizationName": "理科类","RecordCount": 0, "LiveCount": 0,"TotalCount": 0}]}*/
        StatisticsLiveTeacher: "/Statistics/GetStatisticsLiveTeacher",

        /*获取录制和直播最多的教师排行榜  参数SchoolID:学校ID, Count:查询数量,PageSize:页大小,PageNumber:页码 {"Success": true,"Message": null,"Value": {"TotalCount": 0,"Data": [{ "ID": 23, "Account": "333333", "Name": "as","OrganizationName": "理科类","RecordCount": 0, "LiveCount": 0,"TotalCount": 0}]}*/
        StatisticsRecordLiveTeacher: "/Statistics/GetStatisticsRecordLiveTeacher",

        /*获取观看时间最长的学生排行榜  参数SchoolID:学校ID, Count:查询数量,PageSize:页大小,PageNumber:页码 返回值 { "Success": true,"Message": null,"Value": {"TotalCount": 0,"Data": [ {"ID": 50,"Account": "20170006","ImageUrl": null,"Type": 2,"Name": "20170006","OrganizationName": null,"LiveDuration": 0,"VideoDuration": 0,"ViewCount": 0 }  ] }}*/
        GetStatisticsStudentStudyTime: "/Statistics/GetStatisticsStudentStudyTime",

        /*获取观看时间最长的教师排行榜  参数SchoolID:学校ID, Count:查询数量,PageSize:页大小,PageNumber:页码 返回值 { "Success": true,"Message": null,"Value": {"TotalCount": 0,"Data": [ {"ID": 50,"Account": "20170006","ImageUrl": null,"Type": 2,"Name": "20170006","OrganizationName": null,"LiveDuration": 0,"VideoDuration": 0,"ViewCount": 0 }  ] }}*/
        GetStatisticsTeacherStudyTime: "/Statistics/GetStatisticsTeacherStudyTime",

        /*获取观看时间最长的用户排行榜 参数SchoolID:学校ID, Count:查询数量,PageSize:页大小,PageNumber:页码   返回值 { "Success": true,"Message": null,"Value": {"TotalCount": 0,"Data": [ {"ID": 50,"Account": "20170006","ImageUrl": null,"Type": 2,"Name": "20170006","OrganizationName": null,"LiveDuration": 0,"VideoDuration": 0,"ViewCount": 0 }  ] }} */
        GetStatisticsUserStudyTime: "/Statistics/GetStatisticsUserStudyTime",

        /*获取点击视频的教师排行榜  参数SchoolID:学校ID, Count:查询数量,PageSize:页大小,PageNumber:页码 返回值 { "Success": true,"Message": null,"Value": {"TotalCount": 0,"Data": [ {"ID": 50,"Account": "20170006","ImageUrl": null,"Type": 2,"Name": "20170006","OrganizationName": null,"LiveDuration": 0,"VideoDuration": 0,"VideoViews":1,"LiveViews":1 }  ] }}*/
        GetStatisticsTeacherViewVideo: "/Statistics/GetStatisticsTeacherViewVideo",

        /*获取点击直播的教师排行榜  参数SchoolID:学校ID, Count:查询数量,PageSize:页大小,PageNumber:页码 返回值 { "Success": true,"Message": null,"Value": {"TotalCount": 0,"Data": [ {"ID": 50,"Account": "20170006","ImageUrl": null,"Type": 2,"Name": "20170006","OrganizationName": null,"LiveDuration": 0,"VideoDuration": 0,"VideoViews":1,"LiveViews":1}  ] }}*/
        GetStatisticsTeacherViewLive: "/Statistics/GetStatisticsTeacherViewLive",

        /*获取点击视频和直播的教师排行榜  参数SchoolID:学校ID, Count:查询数量,PageSize:页大小,PageNumber:页码 返回值 { "Success": true,"Message": null,"Value": {"TotalCount": 0,"Data": [ {"ID": 50,"Account": "20170006","ImageUrl": null,"Type": 2,"Name": "20170006","OrganizationName": null,"LiveDuration": 0,"VideoDuration": 0,"VideoViews":1,"LiveViews":1 }  ] }}*/
        GetStatisticsTeacherViewTotal: "/Statistics/GetStatisticsTeacherViewTotal",

        /*获取问答统计  SchoolID int? 学校ID  GradeID  int? 年级ID  ClassID int? 班级ID  MinAskDate datetime? 开始日期  MaxAskDate  datetime? 结束日期   PageSize int 页大小  PageNumber int 页码 
        { "Success": true,"Message": null,"Value": {"TotalCount": 0,"Data": ["QuestionContent":"题干","CreateTime":提交时间 ,"Name"：提问人,"ReplyInfos":[数据和问答一致]]}}*/
        StatisticsAskInfos: "/Statistics/StatisticsAsk",

        /*获取问答统计  SchoolID int? 学校ID  GradeID  int? 年级ID  ClassID int? 班级ID  MinAskDate datetime? 开始日期  MaxAskDate  datetime? 结束日期   PageSize int 页大小  PageNumber int 页码 */
        StatisticsAskInfosExport: "/Statistics/ExportStatisticsAsk",

        /*在线学生统计   输出 {"Success": true,"Message": null,"Value": [{"GradeName": "一年级","OnlineCount": 0,"TotalCount": 3,"Prcent": 0}]}*/
        StatisticsOnlineStudent: "/Statistics/StatisticsOnlineStudent",

        //获取用户登录次数  查询 UserID int? 用户ID  UserName  string 用户名   MinLoginDate  datetime? 起时间   MaxLoginDate  datetime? 止时间    输出 {"Success": true,"Message": null,"Value":登陆次数}
        GetLoginCount: "/Statistics/GetLoginCount",

        //获取点播年级分组观看人次和观看总时长  SchoolID  int?  学校ID , StartTime  datetime?  开始时间 ,StopTime  datetime?  结束时间 输出 {"Success":true,"Message":null,"Value":{"TotalViewTimes":总观看次数,"TotalViewDuration":总观看时长,"Data":[{"GradeID":17983,"GradeName":"一年级","ViewTimes":0,"ViewDuration":0}]}
        VideoStatisticStudentsGroupByGrades: "/Statistics/VideoStatisticStudentsGroupByGrades",

        //获取点播年级分组观看课时数 SchoolID  int?  学校ID , StartTime  datetime?  开始时间,StopTime  datetime?  结束时间 输出{"Success":true,"Message":null,"Value":{"TotalCount":总课时数,"Data":[{"GradeID":0,"GradeName":null,"Count":842}]}
        VideoStatisticCountGroupByGrades: "/Statistics/VideoStatisticCountGroupByGrades",

        //获取直播年级分组观看人次和观看总时长  StartTime  datetime?  开始时间,StopTime  datetime?  结束时间  输出 {"Success":true,"Message":null,"Value":{"TotalViewTimes":总观看次数,"TotalViewDuration":总观看时长,"Data":[{"GradeID":17983,"GradeName":"一年级","ViewTimes":0,"ViewDuration":0}]}
        LiveStatisticStudentsGroupByGrades: "/Statistics/LiveStatisticStudentsGroupByGrades",

        //获取直播年级分组观看课时数 StartTime  datetime?  开始时间 ,StopTime  datetime?  结束时间 输出{"Success":true,"Message":null,"Value":{"TotalCount":总课时数,"Data":[{"GradeID":0,"GradeName":null,"Count":842}]}
        LiveStatisticCountGroupByGrades: "/Statistics/LiveStatisticCountGroupByGrades",

        //获取签到数据详情  int? SchoolID 学校ID, int? GradeID 年级ID, int? ClassID 班级ID , int SignID 签到ID, int PageSize 页大小, int PageNumber 页码
        //输出 {"Success":true,"Message":"失败原因","Value":{"TotalCount":数量 ,Data:{"SignID":490,"Title":"1512--直播测试","Teachers":"sy1","SignTime":"2018-08-10 15:16:29","GradeNames":null,"TotalStudents":5,"AllStudents":[{"StudentID":50493,"Name":"ldh1","HasSign":true,"SignTime":"2018-08-10 15:16:34","Sex":true,"SchoolName":学校名称,"GradeName":"年级名称","ClassName":班级名称}]"SignStudent":[{"StudentID":50493,"Name":"ldh1","HasSign":true,"SignTime":"2018-08-10 15:16:34","Sex":true,"SchoolName":学校名称,"GradeName":"年级名称","ClassName":班级名称}],"NoSignStudent":[{"StudentID":50493,"Name":"ldh1","HasSign":true,"SignTime":"2018-08-10 15:16:34","Sex":true,"SchoolName":学校名称,"GradeName":"年级名称","ClassName":班级名称}],"Percent":20}}}
        SignInfo: "/Statistics/SignInfo",

        //获取签到数据统计  DateTime? StartTime  开始时间, DateTime? StopTime 结束时间, int? SchoolID 学校ID, int? GradeID 年级ID, int? ClassID 班级ID , int PageSize 页大小, int PageNumber 页码
        //输出 {"Success":true,"Message":"失败原因","Value":{"TotalCount":数量 ,Data:[{"SignID":490,"Title":"1512--直播测试","Teachers":"sy1","SignTime":"2018-08-10 15:16:29","GradeNames":null,"TotalStudents":5,"AllStudents":[{"StudentID":50493,"Name":"ldh1","HasSign":true,"SignTime":"2018-08-10 15:16:34","Sex":true,"SchoolName":学校名称,"GradeName":"年级名称","ClassName":班级名称}]"SignStudent":[{"StudentID":50493,"Name":"ldh1","HasSign":true,"SignTime":"2018-08-10 15:16:34","Sex":true,"SchoolName":学校名称,"GradeName":"年级名称","ClassName":班级名称}],"NoSignStudent":[{"StudentID":50493,"Name":"ldh1","HasSign":true,"SignTime":"2018-08-10 15:16:34","Sex":true,"SchoolName":学校名称,"GradeName":"年级名称","ClassName":班级名称}],"Percent":20}]}}
        StatiSticsSign: "/Statistics/StatisticsSign",

        //导出签到统计  DateTime? StartTime  开始时间, DateTime? StopTime 结束时间, int? SchoolID 学校ID, int? GradeID 年级ID, int? ClassID 班级ID , int? SignID 签到ID, int PageSize 页大小, int PageNumber 页码
        ExportStatisticsSign: "/Statistics/ExportStatisticsSign",

        //直播参与率按日期显示  DateTime? StartTime  开始时间, DateTime? StopTime 结束时间, int? SchoolID 学校ID, int? StageID 学段ID
        //{"Success":true,"Message":null,"Value":[{"Date":"2018-05-24 00:00:00","ExpectedCount":217,"ActualCount":0}]}
        StatisticsStudentLiveJoinRateByDate: "/Statistics/StatisticsStudentLiveJoinRateByDate",

        //直播参与率按学校显示  DateTime? StartTime  开始时间, DateTime? StopTime 结束时间, int? SchoolID 学校ID, int? StageID 学段ID
        //{"Success":true,"Message":null,"Value":[{"SchoolName":"清华大学","ExpectedCount":0,"ActualCount":0}]}
        StatisticsStudentLiveJoinRateBySchool: "/Statistics/StatisticsStudentLiveJoinRateBySchool",

        //直播参与率按年级显示 DateTime? StartTime  开始时间, DateTime? StopTime 结束时间, int? SchoolID 学校ID, int? StageID 学段ID
        //{"Success":true,"Message":null,"Value":[{"SchoolName":"清华大学","GradeName":"社一","ExpectedCount":0,"ActualCount":0}]}
        StatisticsStudentLiveJoinRateByGrade: "/Statistics/StatisticsStudentLiveJoinRateByGrade",

        //直播参与率按班级显示 DateTime? StartTime  开始时间, DateTime? StopTime 结束时间, int? SchoolID 学校ID, int? StageID 学段ID
        //{"Success":true,"Message":null,"Value":[{"SchoolName":"清华大学","GradeName":"社一","ClassName":"社一22班","ExpectedCount":0,"ActualCount":0}]}
        StatisticsStudentLiveJoinRateByClass: "/Statistics/StatisticsStudentLiveJoinRateByClass",

        //获取学生直播学习时长  DateTime? StartTime  开始时间, DateTime? StopTime 结束时间, int? SchoolID 学校ID, int? StageID 学段ID , int? GradeID  年级ID  ,Count  int 数量
        //{"Success":true,"Message":null,"Value":[{"StudentID":72,"StudentName":"s1","SchoolID":5364,"SchoolName":"清华大学","GradeID":null,"GradeName":null,"ClassID":161,"ClassName":"s1学生所属班级勿删","Duration":243}]}
        StatisticsStudentLiveViewDuration: "/Statistics/StatisticsStudentLiveViewDuration",

        //获取学生点播学习时长  DateTime? StartTime  开始时间, DateTime? StopTime 结束时间, int? SchoolID 学校ID, int? StageID 学段ID , int? GradeID  年级ID  ,Count  int 数量
        //{"Success":true,"Message":null,"Value":[{"StudentID":72,"StudentName":"s1","SchoolID":5364,"SchoolName":"清华大学","GradeID":null,"GradeName":null,"ClassID":161,"ClassName":"s1学生所属班级勿删","Duration":243}]}
        StatisticsStudentVideoViewDuration: "/Statistics/StatisticsStudentVideoViewDuration",

        //获取学生点播学习时长折线图  DateTime? StartTime  开始时间, DateTime? StopTime 结束时间, int? SchoolID 学校ID, int? StageID 学段ID
        //{"Success":true,"Message":null,"Value":[{"DateTime":"2017-09-18 00:00:00","Duration":27}]}
        StatisticsStudentVideoViewDurationByDate: "/Statistics/StatisticsStudentVideoViewDurationByDate",

        //获取用户人数
        GetUserCount: "/Statistics/GetUserCount",
        //学生学习记录 参数：  int GradeID, int ClassID, DateTime? StartDate, DateTime? StopDate, int PageSize, int PageNumber
        //返回  {"TotalCount" : 0,"Data":[{
        // "Title" : "标题",
        // "SchoolName" : ,
        // "GradeName" : ,
        // "ClassName" : ,
        // "Ip" : ,
        // "Name" : ,
        // "EnterTime" : ,
        // "OutTime" : "离开时间",
        // "DeviceWay" : "终端方式",
        // "OnlineTime" : "在线时长"}]
        StudyRecord: "/Statistics/StudyRecord",

        //导出学习记录 int GradeID, int ClassID, DateTime? StartDate, DateTime? StopDate
        ExportStudyRecord: "/Statistics/ExportStudyRecord",

        //直播观看设备统计表    int GradeID, int ClassID, DateTime? StartDate, DateTime? StopDate
        //返回  [{"AccessTerminalType":设备类型 ,"Count":访问数量}]
        StatisticStudentViewLiveDeviceTypes: "/Statistics/StatisticStudentViewLiveDeviceTypes",

        //点播观看设备统计表    int GradeID, int ClassID, DateTime? StartDate, DateTime? StopDate
        //返回  [{"AccessTerminalType":设备类型 ,"Count":访问数量}]
        StatisticStudentViewVideoDeviceTypes: "/Statistics/StatisticStudentViewVideoDeviceTypes",

        //导出学校直播参与率  int? StageID  ,DateTime? StartTime , DateTime? StopTime
        ExportStudentLiveJoinRateByGrade: "/Statistics/ExportStudentLiveJoinRateByGrade",

        //导出测验统计  DateTime StartTime, DateTime StopTime

        ExportTestdExcelByTime:"/Statistics/ExportTestdExcelByTime"
    },
    ExamNew: {
        /*验证考试类别  参数 Name:名称 ,ID:(int?null)  返回值：{"Success":true,"Message":"失败原因","Value":} */
        ValidateExamType: "/Exam/ValidateExamType",

        /*添加或修改类别  参数:ID:(添加时可以不传), "Name":"类别名称" , "Memo":"备注"  返回值：{"Success":true,"Message":"失败原因","Value":}*/
        ExamTypeAddOrUpdate: "/Exam/ExamTypeAddOrUpdate",

        /*查询单个类别 参数 ID    返回值：{"Success":true,"Message":"失败原因","Value":} */
        ExamTypeInfoByID: "/Exam/ExamTypeInfoByID",

        /*类别列表 参数 "Name":查询关键字 , PageSize:页大小 , PageNumber:页码  返回值：{"Success":true,"Message":"失败原因","Value":}*/
        ExamTypeList: "/Exam/ExamTypeList",

        /*类别列表删除  参数 ID(,) 返回值：{"Success":true,"Message":"失败原因","Value":}*/
        ExamTypeDel: "/Exam/ExamTypeDel",

        /*添加或修改  参数 :ID:(添加时可不传)，, DateTime? ShowStartTime, DateTime? ShowStopTime  ,Title:标题，DiyTitle:自定义标题,StartTime:开始时间,StopTime:结束时间,VideoTimeLength:时间间隔, MoveVideo:挪动视频 1移动 2不移动，RecordModel:录制类型 1是按总时间录制，2是按各教室的时间单独录制 CourseID:课程ID,SchoolID:学校ID ,ExamTypeID:考试类别ID, VideoIndex:",分隔" 
        ,Content:[{"ClassRoomID":123,"ClassRoomName":"教室","ExamNumber":"123","Course":,"PeopleList":[{"ID":教师ID,"Name":教师名称}], "StartTime":"开始时间","StopTime":"结束时间"}] 返回值：{"Success":true,"Message":"失败原因","Value":}*/
        ExamAddOrUpdate: "/Exam/ExamAddOrUpdate",

        /* 删除  参数 : ID:考试ID (ID,ID,ID),  返回值：{"Success":true,"Message":"失败原因","Value":}*/
        ExamDel: "/Exam/ExamDel",

        /*考试详细信息 参数： ID:考试ID 返回值:{"Success":true,"Message":"失败原因","Value":}*/
        ExamInfoByID: "/Exam/ExamInfoByID",

        /*考试列表 参数: Title:标题 , StartTime:开始时间 , StopTime:结束时间 , ExamTypeID:考试类别ID,PageSize:页大小,PageNumber:页码*/
        ExamList: "/Exam/ExamList",

        /*导入excel 返回值：{"Success":true,"Message":"失败原因","Value":true  or false}*/
        ImportExcel: "/Exam/Import",

        /*获取默认配置信息  返回值：{"Success": true,"Message": null,"Value": { "TitleModel": "{市简称}{考点名称}{校区代码}{考场代码}考场{监控点编号}号监控点{录像开始时间}","TitleParamers": ["{考试标题}","{录像开始时间}","{录像结束时间}","{监控点编号}", "{教室}", "{考场代码}","{监考人}", "{课程}", "{市简称}","{考点名称}", "{校区代码}" ]}}*/
        GetConfig: "/Exam/GetConfig",

        /*获取考试的教学楼和教室列表  参数 ExamID:考试ID  CommonKey  查询关键字 返回格式与教室树的结构一致 */
        GetBuildingRoom: "/Exam/GetBuildingRoom",

        /*查询考场列表 参数 CourseID:课程ID,TeacherID:教师ID, Title:标题 , StartTime:开始时间 , StopTime:结束时间 , ExamTypeID:考试类别ID,Invigilator:监考人,ClassRoomID:教室ID,PageSize:页大小,PageNumber:页码*/
        QueryClassRoom: "/Exam/QueryClassRoom",

        /*验证标题是否存在 参数 ExamID:考试ID（int?null）, Title:标题  返回值：{"Success":true,"Message":"失败原因","Value":true  or false}*/
        TitleIsExist: "/Exam/TitleIsExist",

        /*通过考试，教学楼，课程来搜索考场  ID:int 考试ID ,CourseID:','分隔 课程ID,BuildingID:','分隔 教学楼ID,PageSize:int?null 页大小,PageNumber:int?null 页码*/
        ExamInfoByIDCourseBuilding: "/Exam/ExamInfoByIDCourseBuilding",

        /*获取考试下的课程   ExamID：考试ID */
        GetCourse: "/Exam/GetCourse",

        /*获取考试视频  考试类型ID int? ExamTypeID, 考试标题 string Title, 教师ID int? TeacherID, 教师名称 string TeacherName, 教室ID int? ClassRoomID, 课程ID int? CourseID, 开始时间 DateTime? StartTime, 结束时间 DateTime? StopTime, 页码 int PageNumber, 页大小 int PageSize */
        GetAllVideo: "/Exam/GetAllVideo",

        /*获取考场视频  int ExamID  考试ID, int? ExamRoomID 考场ID, int? ClassRoomID 教室ID, int? PageSize 页大小, int? PageNumber 页码*/
        GetVideos: "/Exam/GetVideos",

        //获取正在考试的教室id列表    参数 SchoolID  学校ID
        ExamRoomList: "/Exam/ExamRoomList",

        //获取考试教室的详细信息  参数 SchoolID  学校ID  ClassRoomID 教室ID
        ExamRoonInfo: "/Exam/ExamRoomInfo"
    },
    Device: {
        /*获取设备类型列表  {"Success": true,"Message": null,"Value": [{"ID": "服务器设备类型","Version": "设备版本","Name": "设备名称","Parameters": [{"Name": "HttpPort","Label": "HTTP端口","Description": "使用HTTP协议观看直播的端口，为空则使用默认端口","DefaultValue": "82"}]}]*/
        GetDeviceType: "/Device/GetDeviceType",

        /*验证设备名称  参数:SchoolID int 学校ID  , Name string 设备名称 , TypeID string 设备类型ID , ID int? 设备ID  返回格式 {"Success": true,"Message": null,"Value":true}*/
        ValidateName: "/Device/ValidateName",

        /*注册设备   SchoolID int 学校ID  , ClassRoomID:教室ID   DeviceTypeID 设备类型,  DeviceName 设备名称,  LanIpAddress 设备IP,  MacAddress Mac地址,  DeviceIdentity 设备唯一标识,  ModelVersion 型号版本,  CanAutoUpdate 是否可以修改,  AsymmetricKey 请求秘钥,  SymmetricKey 调用秘钥,  Paramters [{Name: ””, Value: ””}] */
        Register: "/Device/Register",

        /*删除设备 参数 ID ,隔开 返回格式 {"Success": true,"Message": null,"Value":}*/
        Del: "/Device/Del",

        /*获取设备数量  参数 SchoolID int?  学校ID  , CommonKey  string 查询关键字  返回格式 {"Success": true,"Message": null,"Value":}*/
        Count: "/Device/Count",

        /*获取设备信息  参数 ID int 设备ID  返回格式 {"Success": true,"Message": null,"Value": {"TypeID": "RecordServer V1.0","TypeName": "录制服务器 V1.0","Description": null, "RegisterToken": "3b346eaeab464723b15e002343cb3deb","LastRegisterTime": null,"LastAccessTime": null,"LastOnlineTime": null,"Memo": null, "CreatorID": 1, "CreatorName": "系统创始人", "CreateTime": "2018-05-16 09:14:58", "SchoolID": 5364, "SchoolName": "清华大学", "Operations": [ { "Name": "Sync", "Label": "同步","Description": "同步使用该录制服务器的教室数据" }],"IsAvailable": false,"DeviceID": 14,"DeviceName": "Test","WanIpAddress": "192.168.1.249","LanIpAddress": "192.168.1.249","Port": 83,"AsymmetricKey": "","Parameters": [{"Name": "???","Label": null,"Value": ""}],"CanAutoUpdate":true or false,"MacAddress":"mac地址","ModelVersion":"型号版本","DeviceIdentity":"设备标识"}}*/
        Get: "/Device/Get",

        /*获取设备列表  参数 SchoolID int?  学校ID  ,CommonKey  string 查询关键字, TypeID string 设备类型ID, Count int? 查询数量  ,PageSize int? 页大小 , PageNumber int? 页码  返回格式 {"Success": true,"Message": null,"Value": {"TotalCount":2,"Data":[{"TypeID": "RecordServer V1.0","TypeName": "录制服务器 V1.0","Description": null, "RegisterToken": "3b346eaeab464723b15e002343cb3deb","LastRegisterTime": null,"LastAccessTime": null,"LastOnlineTime": null,"Memo": null, "CreatorID": 1, "CreatorName": "系统创始人", "CreateTime": "2018-05-16 09:14:58", "SchoolID": 5364, "SchoolName": "清华大学", "Operations": [ { "Name": "Sync", "Label": "同步","Description": "同步使用该录制服务器的教室数据" }],"IsAvailable": false,"DeviceID": 14,"DeviceName": "Test","WanIpAddress": "192.168.1.249","LanIpAddress": "192.168.1.249","Port": 83,"AsymmetricKey": "","Parameters": [{"Name": "???","Label": null,"Value": ""}],"CanAutoUpdate":true or false,"MacAddress":"mac地址","ModelVersion":"型号版本","DeviceIdentity":"设备标识"}]}}*/
        Query: "/Device/Query",

        /*获取设备状态 参数和获取设备列表一样     返回格式 {"Success": true,"Message": null,"Value": {"DeviceID":2,"IsAvailable":是否可用}}*/
        ConnectionState: "/Device/ConnectionState",

        /*获取录制设备列表  参数 SchoolID int? 返回格式 {"Success": true,"Message": null,"Value": [{"TypeID": "RecordServer V1.0","TypeName": "录制服务器 V1.0","Description": null, "RegisterToken": "3b346eaeab464723b15e002343cb3deb","LastRegisterTime": null,"LastAccessTime": null,"LastOnlineTime": null,"Memo": null, "CreatorID": 1, "CreatorName": "系统创始人", "CreateTime": "2018-05-16 09:14:58", "SchoolID": 5364, "SchoolName": "清华大学", "Operations": [ { "Name": "Sync", "Label": "同步","Description": "同步使用该录制服务器的教室数据" }],"IsAvailable": false,"DeviceID": 14,"DeviceName": "Test","WanIpAddress": "192.168.1.249","LanIpAddress": "192.168.1.249","Port": 83,"AsymmetricKey": "","Parameters": [{"Name": "???","Label": null,"Value": ""}]}]}*/
        RecordServerList: "/Device/RecordServerList",

        /*获取直播设备列表  参数和返回格式与录制设备列表一致*/
        LiveServerList: "/Device/LiveServerList",

        /*获取点播设备列表  参数和返回格式与录制设备列表一致*/
        VodServerList: "/Device/VodServerList",

        /*获取专递设备列表  参数和返回格式与录制设备列表一致*/
        DeliveryServerList: "/Device/DeliveryServerList",

        /*获取视频分析设备列表  参数和返回格式与录制设备列表一致*/
        VideoAnalysisServerList: "/Device/VideoAnalysisServerList",

        /*获取考勤分析设备列表  参数和返回格式与录制设备列表一致*/
        AttendanceAnalysisServerList: "/Device/AttendanceAnalysisServerList",

        /*设备操作  ID int 设备ID  Name string 操作名称  返回格式 {"Success": true,"Message": null,"Value":}*/
        Operation: "/Device/Operation"
    },
    SignUrl: {
        //教师端新建签到
        TeacherSignAdd: "/Sign/TeacherSignAdd",

        //停止签到  参数  SignID签到ID
        TeacherStopSign: "/Sign/TeacherStopSign",

        //教师端获取历史签到  Model返回参数增加  Status 是否需要签到   Second  剩余时间
        TeacherHistoricalSign: "/Sign/TeacherHistoricalSign",

        //学生端获取自己当前签到ID
        StudentHaveSigned: "/Sign/StudentHaveSigned",

        //学生端开始签到
        StudentSign: "/Sign/StudentSign",

        //学生端获取历史签到信息
        StudentSignInfo: "/Sign/StudentSignInfo"
    },
    TestUrl: {
        //新建题目
        QuestionAdd: "/Test/QuestionAdd",

        //删除题目
        QuestionDel: "/Test/QuestionDel",

        //下发  ScheduleID 课表ID  QuestionID题目ID 若批量则传入多个  Duration  测验时长  
        IsSue: "/Test/IsSue",

        //获取历史测验信息
        TeacherTestList: "/Test/TeacherTestList",

        //学生获取正在测验题目
        GetRunningTest: "/Test/GetRunningTest",

        //学生历史测验信息
        StudentTestList: "/Test/StudentTestList",

        //学生提交答案
        StudentSubmit: "/Test/StudentSubmit",

        //学生批量提交答案  int ScheduleID 课表ID, int StudentID  学生ID, string Content 答题列表 [{"TestID":测验ID,"ItemID":选项}]
        StudentSubmits: "/Test/StudentSubmits",

        //学生测验详情 //学生测验统计   参数 int? SchoolID 学校ID, int? GradeID 年级ID, int? ClassID 班级ID, int? CourseID 课程ID,  int PageSize 页大小, int PageNumber 页码 
        //返回值 {"Success": true,"Message": null,"Value":{"Title":"课程标题",  "GradeNames":["",""], "TeacherNames": 教师名字','字符串  , "TestID":测验ID , "TestTime":"测验时间" , "TestType":"测验类型", "QuestionTitle":"题干","QuestionAnswer": ["正确","答案"],"AllStudents":[{"StudentID":学生ID , "Name":"姓名" ,"Sex":性别,"AnswerStatus":1正确 2错误,SchoolName:学校名称,Grade:年级名称,ClassName:班级名称}] "AnswerRight":[{"StudentID":学生ID , "Name":"姓名" ,"Sex":性别,"AnswerStatus":1正确 2错误,SchoolName:学校名称,Grade:年级名称,ClassName:班级名称}] , "AnswerError":[{"StudentID":学生ID , "Name":"姓名" ,"Sex":性别,"AnswerStatus":1正确 2错误,SchoolName:学校名称,Grade:年级名称,ClassName:班级名称}] , "Percent":正确率}}
        StudentTestInfo: "/Test/StudentTestInfo",

        //学生测验统计   参数 int? SchoolID 学校ID, int? GradeID 年级ID, int? ClassID 班级ID, int? CourseID 课程ID, DateTime? StartTime 开始时间, DateTime? StopTime 结束时间, int PageSize 页大小, int PageNumber 页码 
        //返回值 {"Success": true,"Message": null,"Value": [{"Title":"课程标题",  "GradeNames":["",""], "TeacherNames": 教师名字','字符串  , "TestID":测验ID , "TestTime":"测验时间" , "TestType":"测验类型", "QuestionTitle":"题干","QuestionAnswer": ["正确","答案"], "AnswerRight":[{"StudentID":学生ID , "Name":"姓名" ,"Sex":性别}] , "AnswerError":[{"StudentID":学生ID , "Name":"姓名" ,"Sex":性别}] , "Percent":正确率}]}
        StudentTestStatics: "/Test/StudentTestStatics",

        //学生测验统计导出   参数 int? SchoolID 学校ID, int? GradeID 年级ID, int? ClassID 班级ID, int? CourseID 课程ID, DateTime? StartTime 开始时间, DateTime? StopTime 结束时间, int PageSize 页大小, int PageNumber 页码
        ExportStudentTestStatics: "/Test/ExportStudentTestStatics"
    },
    SensitiveWord: {
        //添加敏感词类型  TypeName string 敏感词类型  SchoolID int? 学校ID 输出 {"Success": true,"Message": null,"Value": null}
        AddType: "/SensitiveWord/AddType",

        //删除敏感词类型 TypeName string 敏感词类型  SchoolID int? 学校ID 输出 {"Success": true,"Message": null,"Value": null}
        DelType: "/SensitiveWord/DelType",

        //查询敏感词类型 SchoolID int? 学校ID  输出 {"Success": true,"Message": null,"Value": ["",""]}
        QueryType: "/SensitiveWord/QueryType",

        //验证敏感词 ID int? 敏感词ID  ,SensitiveWord string SchoolID int? 学校ID 敏感词  输出 {"Success": true,"Message": null,"Value": ture or false }
        ValidateWord: "/SensitiveWord/ValidateWord",

        //添加敏感词 SchoolID  int?  学校ID,  SensitiveWord  string 敏感词  ,TypeName  string 敏感词类型  输出 {"Success": true,"Message": null,"Value": null}
        Add: "/SensitiveWord/Add",

        //修改敏感词  ID int 敏感词ID   SensitiveWord  string 敏感词  ,TypeName  string 敏感词类型  输出 {"Success": true,"Message": null,"Value": null}
        Update: "/SensitiveWord/Update",

        //删除敏感词   ID int 敏感词ID , TypeName  string 敏感词类型 SchoolID int? 学校ID  输出  {"Success": true,"Message": null,"Value": null}
        Del: "/SensitiveWord/Del",

        //查询敏感词  ID int 敏感词ID  输出 {"Success": true,"Message": null,"Value":{"ID":敏感词ID,"SensitiveWord":敏感词,"TypeName":敏感词类型}}
        Get: "/SensitiveWord/Get",

        //查询敏感词  TypeName string 敏感词类型  CommonKey string 查询关键字   PageSize int 页大小  PageNumber  int 页码 SchoolID int? 学校ID   IsUsingType  bool  true则查询无类型的敏感词  false 则查询所有的敏感词 输出 {"Success": true,"Message": null,"Value": {"TotalCount":总数  ,Data:[{"ID":敏感词ID,"SensitiveWord":敏感词,"TypeName":敏感词类型}]}}
        Query: "/SensitiveWord/Query"
    },
    MiYun: {
        SchoolQuery: "/MiYun/School/Query",
        SubjectQuery: "/MiYun/Subject/Query",
        TeacherQuery: "/MiYun/Teacher/Query",
        NewsQuery: "/MiYun/News/Query",
        CourseQueryL: "/MiYun/Course/Query",
        LiveQuery: "/MiYun/Live/Query",
        LiveInfo: "/MiYun/Live/Get",
        VideoQuery: "/MiYun/Video/Query",
        VideoInfo: "/MiYun/Video/Get",
        VideoComment: "/MiYun/Video/GetComment",
        GetViewInfo: "/MiYun/Video/GetViewInfo"

    },
    Phone: {
        // LiveID 直播ID     true  公开  false  未公开
        LivePublicState: "/Phone/LivePublicState",


    }
}
