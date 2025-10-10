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
            this.set_visible("true");
            this.set_font("14px/normal \"Noto Sans KR Black\"");
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


            obj = new Dataset("ds_findPassword", this);
            obj._setContents("<ColumnInfo><Column id=\"MEMBER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_findResult", this);
            obj._setContents("<ColumnInfo><Column id=\"RESULT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("loginForm","365","33","553","620",null,null,null,null,null,null,this);
            obj.set_taborder("9");
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
            obj.set_font("50px/normal \"Noto Sans KR Black\"");
            this.addChild(obj.name, obj);

            obj = new Button("admin_login","504","546","272","49",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("로그인");
            obj.set_borderRadius("15px");
            obj.set_background("black");
            obj.set_color("white");
            obj.set_font("15px/normal \"Noto Sans KR Medium\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","500","240","220","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("아이디 및 비밀번호를 입력하세요");
            obj.set_textAlign("center");
            obj.set_font("16px/normal \"Noto Sans KR Medium\"");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("h1_logo","495","110","185","52",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_image("url(\'imagerc::h1_logo.png\')");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_saveId","486","495","88","22",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("아이디 기억");
            obj.set_font("12px/normal \"Noto Sans KR Medium\"");
            this.addChild(obj.name, obj);

            obj = new Static("findPw","700","495","70","22",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("비밀번호 찾기");
            obj.set_font("12px/normal \"Noto Sans KR Medium\"");
            this.addChild(obj.name, obj);

            obj = new Div("div_findPassword","0","0","100.00%","720",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_visible("false");
            obj.set_background("rgba(0,0,0,0.5)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","390","200","500","300",null,null,null,null,null,null,this.div_findPassword.form);
            obj.set_taborder("0");
            obj.set_background("white");
            obj.set_borderRadius("16px");
            this.div_findPassword.addChild(obj.name, obj);

            obj = new Static("Static01","530","210","220","44",null,null,null,null,null,null,this.div_findPassword.form);
            obj.set_taborder("1");
            obj.set_text("비밀번호 찾기");
            obj.set_textAlign("center");
            obj.set_font("20px/normal \"Noto Sans KR Black\"");
            this.div_findPassword.addChild(obj.name, obj);

            obj = new Edit("edt_findId","484","269","333","42",null,null,null,null,null,null,this.div_findPassword.form);
            obj.set_taborder("2");
            obj.set_border("1px solid black");
            obj.set_borderRadius("8px");
            this.div_findPassword.addChild(obj.name, obj);

            obj = new Edit("edt_findEmail","484","339","331","43",null,null,null,null,null,null,this.div_findPassword.form);
            obj.set_taborder("3");
            obj.set_border("1px solid black");
            obj.set_borderRadius("8px");
            this.div_findPassword.addChild(obj.name, obj);

            obj = new Button("btn_findSubmit","521","420","99","36",null,null,null,null,null,null,this.div_findPassword.form);
            obj.set_taborder("4");
            obj.set_text("발급");
            obj.set_font("12px/normal \"Noto Sans KR Black\"");
            obj.set_background("#2563eb");
            obj.set_borderRadius("4px");
            obj.set_color("white");
            this.div_findPassword.addChild(obj.name, obj);

            obj = new Button("btn_findCancel","658","420","105","36",null,null,null,null,null,null,this.div_findPassword.form);
            obj.set_taborder("5");
            obj.set_text("취소");
            obj.set_font("12px/normal \"Noto Sans KR Black\"");
            obj.set_background(" #9ca3af");
            obj.set_borderRadius("4px");
            this.div_findPassword.addChild(obj.name, obj);

            obj = new Static("Static02","420","279","39","23",null,null,null,null,null,null,this.div_findPassword.form);
            obj.set_taborder("6");
            obj.set_text("아이디");
            obj.set_font("12px/normal \"Noto Sans KR Black\"");
            this.div_findPassword.addChild(obj.name, obj);

            obj = new Static("Static03","423","345","35","30",null,null,null,null,null,null,this.div_findPassword.form);
            obj.set_taborder("7");
            obj.set_text("이메일");
            obj.set_font("12px/normal \"Noto Sans KR Black\"");
            this.div_findPassword.addChild(obj.name, obj);
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

            obj = new BindItem("item2","div_findPassword.form.edt_findId","value","ds_findPassword","MEMBER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_findPassword.form.edt_findEmail","value","ds_findPassword","EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Login.xfdl", function() {
        this.isWait = false;
        this.Form_Login_onload = function(obj, e)
        {
            var args = this.parent.arguments;

            // 로그아웃 후 재진입 처리
            if(args && args.isLogout) {
                var glbAd = nexacro.getApplication();
                glbAd.mainframe.VFrameSet00.HFrameSet00.VFrameSet01.WorkFrame.arguments =
                    { "isLogout": false };
            }

            // 로그인 상태 확인 (세션 체크)
            this.checkLogin();

            // 저장된 아이디 불러오기 (쿠키 읽기만)
            this.loadSavedId();
        };

        // 로그인 버튼
        this.admin_login_onclick = function(obj, e)
        {
            var adminId = this.ds_admin.getColumn(0, "MEMBER_ID");
            var adminPw = this.ds_admin.getColumn(0, "PASSWORD");

            if(!adminId || adminId == '') {
                this.alert('아이디를 입력해 주세요');
                this.admin_id.setFocus();
                return;
            }

            if(!adminPw || adminPw == '') {
                this.alert('비밀번호를 입력해 주세요');
                this.admin_pw.setFocus();
                return;
            }

            // 체크박스 상태를 서버로 전달만
            var saveId = this.chk_saveId.value == true ? "Y" : "N";

            var strSvcID = "adminLogin";
            var setURL = "svc::/adminLoginByAdmin.do?time=" + new Date().getTime();
            var strInDatasets = "ds_admin=ds_admin";
            var strOutDatasets = "ds_loginChk=ds_loginChk";
            var strArg = "SAVE_ID=" + saveId;
            var callBack = "fn_callBack";
            var inAsync = true;

            this.transaction(strSvcID, setURL, strInDatasets, strOutDatasets, strArg, callBack, inAsync);
        };

        // 엔터키 로그인 (중복 코드 제거 - 버튼 클릭 호출)
        this.admin_pw_onkeyup = function(obj, e)
        {
            if(e.keycode == 13) {
                this.admin_login_onclick(this.admin_login, null);
            }
        };

        // 콜백
        this.fn_callBack = function(svcID, errorCode, errorMSG)
        {
            if(errorCode == -1) {
                this.alert(errorMSG);
                return;
            }

            switch(svcID) {
                case "adminCheckLogin":
                    var isLogin = this.ds_isLogin.getColumn(0, "MEMBER_ID");
                    if(isLogin != null && isLogin != 'undefined') {
                        this.loginSet();
                    }
                    break;

                case "adminLogin":
                    if(this.ds_loginChk.getRowCount() == 0) {
                        this.alert("아이디 또는 비밀번호를 확인하세요");
                        return;
                    }
                    this.loginSet();
                    break;

                case "findPassword":
                    if(this.ds_findResult.getRowCount() > 0) {
                        var result = this.ds_findResult.getColumn(0, "RESULT");
                        if(result == "SUCCESS") {
                            this.alert("임시 비밀번호가 이메일로 발송되었습니다.\n" +
                                      "(개발 중에는 콘솔 로그를 확인하세요)\n" +
                                      "로그인 후 비밀번호를 변경해주세요.");
                            this.closePasswordFindPopup();
                        } else if(result == "NOT_FOUND") {
                            this.alert("일치하는 회원 정보가 없습니다.\n" +
                                      "아이디와 이메일을 확인해주세요.");
                        } else {
                            this.alert("비밀번호 찾기에 실패했습니다.\n" +
                                      "잠시 후 다시 시도해주세요.");
                        }
                    }
                    break;
            }
        };

        // 세션 확인
        this.checkLogin = function() {
            var strSvcID = "adminCheckLogin";
            var setURL = "svc::/adminLoginCheckByAdmin.do?time=" + new Date().getTime();
            var strInDatasets = "";
            var strOutDatasets = "ds_isLogin=ds_isLogin ds_loginChk=ds_loginChk";
            var strArg = "";
            var callBack = "fn_callBack";
            var inAsync = true;

            this.transaction(strSvcID, setURL, strInDatasets, strOutDatasets, strArg, callBack, inAsync);
        };

        // 로그인 완료 처리
        this.loginSet = function() {
            var glbAd = nexacro.getApplication();

            // 전역 데이터셋에 저장
            glbAd.gds_adminInfo.copyData(this.ds_loginChk, true);

            // 상단 프레임에 아이디 표시
            if(glbAd.gds_adminInfo.rowcount > 0) {
                var memberId = glbAd.gds_adminInfo.getColumn(0, "MEMBER_ID");
                var topForm = glbAd.mainframe.VFrameSet00.TopFrame.form;
                topForm.admin_id.set_text(memberId);
            }

            // 메뉴 영역 복구
            nexacro.VFrameSet00.set_separatesize("50,*");
            nexacro.HFrameSet00.set_separatesize("200,*");
            nexacro.InnerVFrameSet.set_separatesize("110,*");

            // 대시보드로 이동
            glbAd.mainframe.VFrameSet00.HFrameSet00.VFrameSet01.WorkFrame.set_formurl(
                "dash::Form_test.xfdl"
            );
        };

        // 쿠키 읽기 (표시만)
        this.loadSavedId = function()
        {
            var savedId = this.getCookie("ADMIN_ID");

            if(savedId && savedId != '' && savedId != 'undefined' && savedId != 'null') {
                this.ds_admin.setColumn(0, "MEMBER_ID", savedId);
                this.chk_saveId.set_value(true);
            } else {
                this.ds_admin.setColumn(0, "MEMBER_ID", "");
                this.chk_saveId.set_value(false);
            }
        };

        // 쿠키 읽기 함수
        this.getCookie = function(name)
        {
            try {
                var value = "; " + document.cookie;
                var parts = value.split("; " + name + "=");
                if(parts.length == 2) {
                    return decodeURIComponent(parts.pop().split(";").shift());
                }
            } catch(e) {
                console.log("getCookie error: " + e.message);
            }
            return null;
        };

        // 비밀번호 찾기 관련 함수들은 그대로 유지...

        /************************************************
        * 비밀번호 찾기 기능
        ************************************************/

        // 비밀번호 찾기 텍스트 클릭
        this.findPw_onclick = function(obj,e)
        {
        	this.showPasswordFindPopup();
        };

        // 비밀번호 찾기 팝업 표시
        this.showPasswordFindPopup = function()
        {
        	// Dataset 초기화
        	this.ds_findPassword.clearData();
        	this.ds_findPassword.addRow();

        	// 팝업 표시
        	this.div_findPassword.set_visible(true);

        	// 첫 번째 입력란에 포커스
        	this.div_findPassword.form.edt_findId.setFocus();
        };

        // 비밀번호 찾기 팝업 닫기
        this.closePasswordFindPopup = function()
        {
        	this.div_findPassword.set_visible(false);
        	this.ds_findPassword.clearData();
        	this.ds_findPassword.addRow();
        };

        //발급 버튼
        this.div_findPassword_btn_findSubmit_onclick = function(obj,e)
        {
        	var memberId = this.ds_findPassword.getColumn(0, "MEMBER_ID");
        	var email = this.ds_findPassword.getColumn(0, "EMAIL");

        	if(memberId == null || memberId == ''){
        		this.alert('아이디를 입력해주세요.');
        		this.div_findPassword.form.edt_findId.setFocus();
        		return;
        	}

        	if(email == null || email == ''){
        		this.alert('이메일을 입력해주세요.');
        		this.div_findPassword.form.edt_findEmail.setFocus();
        		return;
        	}

        	// 이메일 형식 검증
        	var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        	if(!emailPattern.test(email)){
        		this.alert('올바른 이메일 형식을 입력해주세요.');
        		this.div_findPassword.form.edt_findEmail.setFocus();
        		return;
        	}

        	var strSvcID = "findPassword";
        	var setURL = "svc::/findPasswordByAdmin.do?time=" + new Date().getTime();
        	var strInDatasets = "ds_findPassword=ds_findPassword";
        	var strOutDatasets = "ds_findResult=ds_findResult";
        	var strArg = "";
        	var callBack = "fn_callBack";
        	var inAsync = true;

        	this.transaction(strSvcID, setURL, strInDatasets, strOutDatasets, strArg, callBack, inAsync);
        };


        // 비밀번호 찾기 취소 버튼
        this.div_findPassword_btn_findCancel_onclick = function(obj,e)
        {
        	this.closePasswordFindPopup();
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
            this.h1_logo.addEventHandler("onclick",this.h1_logo_onclick,this);
            this.chk_saveId.addEventHandler("canchange",this.chk_saveId_canchange,this);
            this.findPw.addEventHandler("onclick",this.findPw_onclick,this);
            this.div_findPassword.form.btn_findSubmit.addEventHandler("onclick",this.div_findPassword_btn_findSubmit_onclick,this);
            this.div_findPassword.form.btn_findCancel.addEventHandler("onclick",this.div_findPassword_btn_findCancel_onclick,this);
        };
        this.loadIncludeScript("Form_Login.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
