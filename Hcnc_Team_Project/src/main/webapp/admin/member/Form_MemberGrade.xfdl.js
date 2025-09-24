(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_MemberGrade");
            this.set_titletext("New Form");
            this.set_background("lightblue");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grade", this);
            obj._setContents("<ColumnInfo><Column id=\"GRADE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gradeList", this);
            obj._setContents("<ColumnInfo><Column id=\"MEMBER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRICE_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE_NUMBER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"GRADE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"SDATE\" type=\"STRING\" size=\"256\"/><Column id=\"EDATE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_upCnt", this);
            obj._setContents("<ColumnInfo><Column id=\"UPDATED\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("grade_search_box","20","17","1240","303",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("white");
            obj.set_text("");
            obj.set_borderRadius("8px");
            this.addChild(obj.name, obj);

            obj = new Radio("member_grade","100","53","980","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_grade");
            obj.set_codecolumn("GRADE_CODE");
            obj.set_datacolumn("GRADE_NAME");
            obj.set_direction("vertical");
            obj.set_font("12px/normal \"Noto Sans KR Black\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","34","57","52","27",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("등급");
            obj.set_font("14px/normal \"Noto Sans KR Black\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","34","110","52",null,null,"583",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("이름");
            obj.set_font("14px/normal \"Noto Sans KR Black\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","34","170","52",null,null,"523",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("이메일");
            obj.set_font("bold 14px/normal \"Noto Sans KR Black\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","34","230","52",null,null,"463",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("가입일");
            obj.set_font("14px/normal \"Noto Sans KR Black\"");
            this.addChild(obj.name, obj);

            obj = new Edit("grade_name","100","106","1093","35",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Edit("grade_emil","100","165","1093","35",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","100","224","520","32",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00","649","224","520","32",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","632","228","17","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("~");
            obj.set_font("bold 12px \"Noto Sans KR Black\"");
            this.addChild(obj.name, obj);

            obj = new Button("search_btn","523","275","97","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("검색");
            obj.set_background("#2563eb");
            obj.set_font("12px/normal \"Noto Sans KR Black\"");
            obj.set_color("white");
            obj.set_borderRadius("4px");
            this.addChild(obj.name, obj);

            obj = new Button("reset_btn","649","275","97","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("초기화");
            obj.set_background(" #9ca3af");
            obj.set_borderRadius("4px");
            obj.set_font("12px/normal \"Noto Sans KR Black\"");
            this.addChild(obj.name, obj);

            obj = new Static("grade_search_box00","20","333","1240","337",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_background("white");
            obj.set_text("");
            obj.set_borderRadius("8px");
            this.addChild(obj.name, obj);

            obj = new Grid("grid_list","45","350",null,"303","45",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_background("#FFFFFF");
            obj.set_border("0px none");
            obj.set_borderRadius("10px");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_gradeList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"52\"/><Column size=\"165\"/><Column size=\"136\"/><Column size=\"164\"/><Column size=\"150\"/><Column size=\"145\"/><Column size=\"237\"/><Column size=\"144\"/></Columns><Rows><Row size=\"48\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"NO\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"1\" text=\"아이디\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"2\" text=\"이름\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"3\" text=\"이메일\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"4\" text=\"전화번호\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"5\" text=\"구매액\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"6\" text=\"가입일\" textAlign=\"CENTER\" font=\"11pt/normal &quot;LG Smart UI Bold&quot;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"7\" text=\"등급변경\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\" font=\"11pt/normal &quot;LG Smart UI Bold&quot;\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:MEMBER_ID\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:USER_NAME\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:EMAIL_ADDR\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:PHONE_NUMBER\" textAlign=\"center\"/><Cell col=\"5\" edittype=\"normal\" text=\"bind:PRICE_AMOUNT\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:INPUT_DT\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:GRADE_CODE\" displaytype=\"combocontrol\" edittype=\"combo\" combocodecol=\"GRADE_CODE\" combodatacol=\"GRADE_NAME\" combodataset=\"ds_grade\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("update_grade","591","680","82","35",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("등급 변경");
            obj.set_background("#2563eb");
            obj.set_borderRadius("4px");
            obj.set_color("white");
            obj.set_font("12px/normal \"Noto Sans KR Black\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","grid_list","binddataset","ds_user","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","member_grade","value","ds_search","GRADE_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","grade_name","value","ds_search","USER_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","grade_emil","value","ds_search","EMAIL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Calendar00","value","ds_search","SDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Calendar00_00","value","ds_search","EDATE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("Form_MemberGrade.xfdl","common::common.xjs");
        this.registerScript("Form_MemberGrade.xfdl", function() {
        this.executeIncludeScript("common::common.xjs"); /*include "common::common.xjs"*/;
        this.Form_MemberGrade_onload = function(obj,e)
        {
        	this.fn_gradeSearch();
        	this.fn_GradeManageSearch();
        };


        //회원 등급 관리 리스트 조회
        this.fn_GradeManageSearch = function(){

        	var strSvcID = "selectGradeManageList"
        	var setURL = "svc::/selectGradeManageByAdmin.do";
        	var strInDatasets = "ds_search=ds_search";
        	var strOutDatasets = "ds_gradeList=ds_gradeList";
        	var strArg = "";
        	var callBack = "fn_callBack";
        	var inAsync = true;

        	this.transaction(strSvcID,setURL,strInDatasets,strOutDatasets,strArg,callBack,inAsync);
        }

        //회원 등급 조회
        this.fn_gradeSearch = function(){

        	var strSvcID = "selectGradeExceptionAdminList"
        	var setURL = "svc::/selectGradeExceptionAdminListByAdmin.do";
        	var strInDatasets = "";
        	var strOutDatasets = "ds_grade=ds_grade";
        	var strArg = "";
        	var callBack = "fn_callBack";
        	var inAsync = true;

        	this.transaction(strSvcID,setURL,strInDatasets,strOutDatasets,strArg,callBack,inAsync);
        }

        //등급 변경하기
        this.inse_onclick = function(obj,e)
        {

        	// 변경된 행만 추려서 업데이트
        	var strSvcID = "updateMemberGrade";
        	var setURL = "svc::/updateMemberGradeByAdmin.do";
        	var strInDatasets = "ds_gradeList=ds_gradeList:u"; // 수정된 데이터만 서버로 보냄
        	var strOutDatasets = "ds_upCnt = ds_upCnt";
        	var strArg = "";
        	var callBack = "fn_callBack";
        	var inAsync = true;

        	this.transaction(strSvcID, setURL, strInDatasets, strOutDatasets, strArg, callBack, inAsync);

        };


        // 공통 콜백
        this.fn_callBack = function(svcID, errorCode, errorMSG){

        	if(errorCode == -1){
        		this.alert(errorMSG)
        	}

        	switch(svcID){
        	case "selectGradeManageList" :
        		console.log(this.ds_gradeList.saveXML());
        		break;

        	case "selectGradeExceptionAdminList" :
        		console.log(this.ds_grade.saveXML())
        		break;

        	case "updateMemberGrade" :
        		console.log(this.ds_upCnt.saveXML())
        		if(this.ds_upCnt.getColumn(0,"UPDATED") > 0 ){

        			this.alert("등급이 변경되었습니다")
        			this.reload();

        		}else{
        			this.alert("등급이 변경되지 않았습니다")
        		}
        		break;
        	}

        }

        //검색하기
        this.Button00_onclick = function(obj,e)
        {
            this.fn_GradeManageSearch();
        };

        //초기화
        this.Button00_00_onclick = function(obj,e)
        {
        	this.reload();
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_MemberGrade_onload,this);
            this.search_btn.addEventHandler("onclick",this.Button00_onclick,this);
            this.reset_btn.addEventHandler("onclick",this.Button00_00_onclick,this);
            this.update_grade.addEventHandler("onclick",this.inse_onclick,this);
        };
        this.loadIncludeScript("Form_MemberGrade.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
