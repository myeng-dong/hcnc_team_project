(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Login");
            this.set_titletext("New Form");
            this.set_background("#CACDDC");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_admin", this);
            obj._setContents("<ColumnInfo><Column id=\"MEMBER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PASSWORD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_loginChk", this);
            obj._setContents("<ColumnInfo><Column id=\"MEMBER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_isLogin", this);
            obj._setContents("<ColumnInfo><Column id=\"MEMBER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("loginForm","365","33","553","620",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_borderRadius("15px");
            obj.set_background("white");
            obj.set_boxShadow("6px 6px 12px rgba(0,0,0,0.25)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","484","311","48","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("아이디*");
            obj.set_textAlign("center");
            obj.set_font("13px/normal \"Noto Sans KR Medium\"");
            this.addChild(obj.name, obj);

            obj = new Edit("admin_id","486","343","310","44",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_borderRadius("15px");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","486","405","56","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("비밀번호*");
            obj.set_textAlign("center");
            obj.set_font("13px/normal \"Noto Sans KR Medium\"");
            this.addChild(obj.name, obj);

            obj = new Edit("admin_pw","486","437","310","44",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_borderRadius("15px");
            obj.set_password("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","490","150","291","104",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("관리자 로그인");
            obj.set_textAlign("center");
            obj.set_font("normal 50px/normal \"Noto Sans KR Black\"");
            this.addChild(obj.name, obj);

            obj = new Button("admin_login","504","546","272","49",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("로그인");
            obj.set_borderRadius("15px");
            obj.set_background("black");
            obj.set_color("white");
            obj.set_font("15px/normal \"Noto Sans KR Medium\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","1000","30","230","38",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("아이디 및 비밀번호를 입력하세요");
            obj.set_font("normal 15px/normal");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","500","240","220","40",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("아이디 및 비밀번호를 입력하세요");
            obj.set_textAlign("center");
            obj.set_font("16px/normal \"Noto Sans KR Medium\"");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("h1_logo","495","110","170","52",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("logo");
            obj.set_image("url(\'imagerc::h1_logo.png\')");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","486","495","88","22",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("아이디 기억");
            obj.set_font("12px/normal \"Noto Sans KR Medium\"");
            this.addChild(obj.name, obj);

            obj = new Static("findPw","700","495","70","22",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("비밀번호 찾기");
            obj.set_font("12px/normal \"Noto Sans KR Medium\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","admin_id","value","ds_admin","MEMBER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","admin_pw","value","ds_admin","PASSWORD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("Form_Login.xfdl","common::common.xjs");
        this.registerScript("Form_Login.xfdl", function() {
        this.executeIncludeScript("common::common.xjs"); /*include "common::common.xjs"*/;
        this.Form_Login_onload = function(obj,e)
        {
        	// controller에 httpsession
        	var args = this.parent.arguments;
        	if(args.isLogout){

        		var glbAd = nexacro.getApplication();

        		glbAd.mainframe.VFrameSet00.HFrameSet00.VFrameSet01.WorkFrame.arguments = { "isLogout": false};

        		return;
        	}
        	this.checkLogin();
        };


        //콜백
        this.fn_callBack = function (svcID, errorCode, errorMSG)
        {
            if(errorCode == -1){
        		this.alert(errorMSG);
        		return;
        	}
        	console.log("errorCode= "+errorCode);

        	switch(svcID){
        	case "adminCheckLogin":

        		var isLogin = this.ds_isLogin.getColumn(0,"MEMBER_ID");


        		if(isLogin != null && isLogin !='undefined'){

        			this.loginSet();
        		}
        		break;
        	case "adminLogin" :
        		if(this.ds_loginChk.getRowCount() == 0){
        			alert("아이디 또는 비밀번호를 확인하세요");
        			return;
        		}
        		this.loginSet();

        		break;
        	}
        };


        //로그인 버튼
        this.admin_login_onclick = function(obj,e)
        {
        	var adminId = this.ds_admin.getColumn(0,"MEMBER_ID")
        	var adminPw = this.ds_admin.getColumn(0,"PASSWORD")

        	if(adminId == null || adminId ==''){
        		this.alert('아이디를 입력해 주세요')
        		return;
        	}

        	if(adminPw == null || adminPw ==''){
        		this.alert('비밀번호를 입력해 주새요')
        		return;
        	}

        	var strSvcID = "adminLogin"
        	var setURL = "svc::/adminLoginByAdmin.do?time=" + new Date().getTime();
        	var strInDatasets = "ds_admin=ds_admin";
        	var strOutDatasets = "ds_loginChk=ds_loginChk";
        	var strArg = "";
        	var callBack = "fn_callBack";
        	var inAsync = true;

        	this.transaction(strSvcID,setURL,strInDatasets,strOutDatasets,strArg,callBack,inAsync);

        };

        //ds_loginChk도 다시 업데이트
        this.checkLogin = function(){
        	var strSvcID = "adminCheckLogin"
        	var setURL = "svc::/adminLoginCheckByAdmin.do?time=" + new Date().getTime();
        	var strInDatasets = "";
        	var strOutDatasets = "ds_isLogin=ds_isLogin ds_loginChk=ds_loginChk";
        	var strArg = "";
        	var callBack = "fn_callBack";
        	var inAsync = true;

        	this.transaction(strSvcID,setURL,strInDatasets,strOutDatasets,strArg,callBack,inAsync);

        }

        this.loginSet = function () {

        	var glbAd = nexacro.getApplication();

        	// 전역데이터셋 저장( copydata() )
        	glbAd.gds_adminInfo.copyData(this.ds_loginChk, true);


        	//직접 탑 프레임에 접근해서 상단에 멤버 id 띄우기(중요!)
        	if (glbAd.gds_adminInfo.rowcount > 0) {
        		var memberId = glbAd.gds_adminInfo.getColumn(0, "MEMBER_ID");
        		var topForm = glbAd.mainframe.VFrameSet00.TopFrame.form;
        		topForm.admin_id.set_text(memberId);
        		trace("로그인한 관리자 ID = " + memberId);
        	}

        	// 메뉴/타이틀 영역 복구
        	nexacro.VFrameSet00.set_separatesize("50,*");   // TopFrame 높이 복원
        	nexacro.HFrameSet00.set_separatesize("200,*");  // LeftFrame 너비 복원
        	nexacro.InnerVFrameSet.set_separatesize("110,*"); // TitleFrame 높이 복원

        	// 대시보드로 이동
        	glbAd.mainframe.VFrameSet00.HFrameSet00.VFrameSet01.WorkFrame.set_formurl("dash::Form_test.xfdl");

        }

        this.admin_pw_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13){
        		var adminId = this.ds_admin.getColumn(0,"MEMBER_ID")
        		var adminPw = this.ds_admin.getColumn(0,"PASSWORD")

        		if(adminId == null || adminId ==''){
        			this.alert('아이디를 입력해 주세요')
        			return;
        		}

        		if(adminPw == null || adminPw ==''){
        			this.alert('비밀번호를 입력해 주새요')
        			return;
        		}

        		var strSvcID = "adminLogin"
        		var setURL = "svc::/adminLoginByAdmin.do?time=" + new Date().getTime();
        		var strInDatasets = "ds_admin=ds_admin";
        		var strOutDatasets = "ds_loginChk=ds_loginChk";
        		var strArg = "";
        		var callBack = "fn_callBack";
        		var inAsync = true;

        		this.transaction(strSvcID,setURL,strInDatasets,strOutDatasets,strArg,callBack,inAsync);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Login_onload,this);
            this.addEventHandler("onkeyup",this.Form_Login_onkeyup,this);
            this.loginForm.addEventHandler("onclick",this.Static03_onclick,this);
            this.Static00_00.addEventHandler("onclick",this.Static00_00_onclick,this);
            this.admin_pw.addEventHandler("onkeyup",this.admin_pw_onkeyup,this);
            this.admin_login.addEventHandler("onclick",this.admin_login_onclick,this);
            this.Static02.addEventHandler("onclick",this.Static02_onclick,this);
            this.h1_logo.addEventHandler("onclick",this.h1_logo_onclick,this);
        };
        this.loadIncludeScript("Form_Login.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
