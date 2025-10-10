(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_MemberInsert");
            this.set_titletext("New Form");
            this.set_background("#F4F7FE");
            if (Form == this.constructor)
            {
                this._setFormPosition(1370,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_gender", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GENDER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">남자</Col><Col id=\"GENDER\">Male</Col></Row><Row><Col id=\"CODE\">여자</Col><Col id=\"GENDER\">Female</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_type", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MEMBER_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">회원</Col><Col id=\"MEMBER_TYPE\">user</Col></Row><Row><Col id=\"CODE\">관리자</Col><Col id=\"MEMBER_TYPE\">admin</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grade", this);
            obj._setContents("<ColumnInfo><Column id=\"GRADE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_member", this);
            obj._setContents("<ColumnInfo><Column id=\"MEMBER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PASSWORD\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTH\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MEMBER_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"GENDER\" type=\"STRING\" size=\"256\"/><Column id=\"LOGIN_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_insCnt", this);
            obj._setContents("<ColumnInfo><Column id=\"INSERTED\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_loginType", this);
            obj._setContents("<ColumnInfo><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOGIN_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NAME\">홈페이지</Col><Col id=\"LOGIN_TYPE\">IDPW</Col></Row><Row><Col id=\"NAME\">관리자</Col><Col id=\"LOGIN_TYPE\">NORMAL</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("insert_box","13","10","1337","688",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_borderRadius("8px");
            obj.set_background("#fff");
            obj.set_boxShadow("0 2px 6px rgba(0,0,0,0.05)");
            this.addChild(obj.name, obj);

            obj = new Static("m","269","77","60","28",null,null,null,null,null,null,this.insert_box.form);
            obj.set_taborder("0");
            obj.set_text("아이디");
            obj.set_font("15px/normal \"Noto Sans KR Black\"");
            this.insert_box.addChild(obj.name, obj);

            obj = new Static("m2","269","140","59","28",null,null,null,null,null,null,this.insert_box.form);
            obj.set_taborder("1");
            obj.set_text("이름");
            obj.set_font("15px/normal \"Noto Sans KR Black\"");
            this.insert_box.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","269","196","60","28",null,null,null,null,null,null,this.insert_box.form);
            obj.set_taborder("2");
            obj.set_text("비밀번호");
            obj.set_font("15px/normal \"Noto Sans KR Black\"");
            this.insert_box.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","269","256","50","28",null,null,null,null,null,null,this.insert_box.form);
            obj.set_taborder("3");
            obj.set_text("이메일");
            obj.set_font("15px/normal \"Noto Sans KR Black\"");
            this.insert_box.addChild(obj.name, obj);

            obj = new Edit("insert_id","347","74","260","34",null,null,null,null,null,null,this.insert_box.form);
            obj.set_taborder("4");
            obj.set_border("1px solid black");
            obj.set_borderRadius("8px");
            obj.set_displaynulltext("영문, 숫자 포함 16자");
            this.insert_box.addChild(obj.name, obj);

            obj = new Static("Static00","1109","159","34","16",null,null,null,null,null,null,this.insert_box.form);
            obj.set_taborder("5");
            obj.set_text("~");
            this.insert_box.addChild(obj.name, obj);

            obj = new Static("Static01","27","12","170","38",null,null,null,null,null,null,this.insert_box.form);
            obj.set_taborder("6");
            obj.set_text("회원 및 관리자 등록");
            obj.set_textAlign("center");
            obj.set_font("20px/normal \"Noto Sans KR Black\"");
            this.insert_box.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","269","322","59","28",null,null,null,null,null,null,this.insert_box.form);
            obj.set_taborder("7");
            obj.set_text("휴대전화");
            obj.set_font("15px/normal \"Noto Sans KR Black\"");
            this.insert_box.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00","269","376","38","28",null,null,null,null,null,null,this.insert_box.form);
            obj.set_taborder("8");
            obj.set_text("생일");
            obj.set_font("15px/normal \"Noto Sans KR Black\"");
            this.insert_box.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00","269","436","38","28",null,null,null,null,null,null,this.insert_box.form);
            obj.set_taborder("9");
            obj.set_text("성별");
            obj.set_font("15px/normal \"Noto Sans KR Black\"");
            this.insert_box.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00_00","746","63","38","28",null,null,null,null,null,null,this.insert_box.form);
            obj.set_taborder("10");
            obj.set_text("등급");
            obj.set_font("15px/normal \"Noto Sans KR Black\"");
            this.insert_box.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00_00_00","727","132","57","28",null,null,null,null,null,null,this.insert_box.form);
            obj.set_taborder("11");
            obj.set_text("회원타입");
            obj.set_font("15px/normal \"Noto Sans KR Black\"");
            this.insert_box.addChild(obj.name, obj);

            obj = new Edit("insert_name","348","137","259","34",null,null,null,null,null,null,this.insert_box.form);
            obj.set_taborder("12");
            obj.set_border("1px solid black");
            obj.set_borderRadius("8px");
            this.insert_box.addChild(obj.name, obj);

            obj = new Edit("insert_password","348","193","259","34",null,null,null,null,null,null,this.insert_box.form);
            obj.set_taborder("13");
            obj.set_border("1px solid black");
            obj.set_borderRadius("8px");
            obj.set_displaynulltext("영문+숫자 포함 8~20자");
            obj.set_password("true");
            this.insert_box.addChild(obj.name, obj);

            obj = new Edit("insert_password00","347","250","260","34",null,null,null,null,null,null,this.insert_box.form);
            obj.set_taborder("14");
            obj.set_border("1px solid black");
            obj.set_borderRadius("8px");
            obj.set_displaynulltext("example@email.com");
            this.insert_box.addChild(obj.name, obj);

            obj = new Combo("Combo00","826","59","262","36",null,null,null,null,null,null,this.insert_box.form);
            obj.set_taborder("15");
            obj.set_innerdataset("ds_grade");
            obj.set_codecolumn("GRADE_CODE");
            obj.set_datacolumn("GRADE_NAME");
            obj.set_border("1px solid black");
            obj.set_borderRadius("8px");
            obj.set_text("Combo00");
            this.insert_box.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","348","373","259","34",null,null,null,null,null,null,this.insert_box.form);
            obj.set_taborder("16");
            obj.set_border("1px solid black");
            obj.set_borderRadius("8px");
            this.insert_box.addChild(obj.name, obj);

            obj = new Button("close_btn","697","590","129","41",null,null,null,null,null,null,this.insert_box.form);
            obj.set_taborder("17");
            obj.set_text("취소");
            obj.set_background(" #9ca3af");
            obj.set_borderRadius("4px");
            obj.set_color("#fff");
            obj.set_font("13px/normal \"Noto Sans KR Black\"");
            this.insert_box.addChild(obj.name, obj);

            obj = new Radio("gender_radio","348","433","259","34",null,null,null,null,null,null,this.insert_box.form);
            obj.set_taborder("18");
            obj.set_innerdataset("ds_gender");
            obj.set_codecolumn("GENDER");
            obj.set_datacolumn("CODE");
            obj.set_font("16px/normal \"Noto Sans KR Black\"");
            obj.set_direction("vertical");
            this.insert_box.addChild(obj.name, obj);

            obj = new Radio("type_radio","827","132","261","28",null,null,null,null,null,null,this.insert_box.form);
            obj.set_taborder("19");
            obj.set_innerdataset("ds_type");
            obj.set_codecolumn("MEMBER_TYPE");
            obj.set_datacolumn("CODE");
            obj.set_font("16px/normal \"Noto Sans KR Black\"");
            obj.set_direction("vertical");
            this.insert_box.addChild(obj.name, obj);

            obj = new Button("insert_btn","535","590","132","41",null,null,null,null,null,null,this.insert_box.form);
            obj.set_taborder("20");
            obj.set_text("등록하기");
            obj.set_background("#2563eb");
            obj.set_borderRadius("4px");
            obj.set_color("#fff");
            obj.set_font("13px/normal \"Noto Sans KR Black\"");
            this.insert_box.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00_00_00_00","712","203","72","28",null,null,null,null,null,null,this.insert_box.form);
            obj.set_taborder("21");
            obj.set_text("로그인 타입");
            obj.set_font("15px/normal \"Noto Sans KR Black\"");
            this.insert_box.addChild(obj.name, obj);

            obj = new Radio("Radio00","832","205","256","30",null,null,null,null,null,null,this.insert_box.form);
            obj.set_taborder("22");
            obj.set_innerdataset("ds_loginType");
            obj.set_codecolumn("LOGIN_TYPE");
            obj.set_datacolumn("NAME");
            obj.set_direction("vertical");
            obj.set_font("16px/normal \"Noto Sans KR Black\"");
            this.insert_box.addChild(obj.name, obj);

            obj = new MaskEdit("insert_password00_00","348","316","259","34",null,null,null,null,null,null,this.insert_box.form);
            obj.set_taborder("23");
            obj.set_border("1px solid black");
            obj.set_borderRadius("8px");
            obj.set_format("###-####-####");
            obj.set_type("string");
            this.insert_box.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1370,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","insert_box.form.insert_id","value","ds_member","MEMBER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","insert_box.form.insert_name","value","ds_member","USER_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","insert_box.form.insert_password","value","ds_member","PASSWORD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","insert_box.form.insert_password00","value","ds_member","EMAIL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","insert_box.form.Calendar01","value","ds_member","BIRTH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","insert_box.form.gender_radio","value","ds_member","GENDER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","insert_box.form.Combo00","value","ds_member","GRADE_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","insert_box.form.type_radio","value","ds_member","MEMBER_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","insert_box.form.insert_password00_00","value","ds_member","PHONE_NUMBER");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("Form_MemberInsert.xfdl","common::common.xjs");
        this.registerScript("Form_MemberInsert.xfdl", function() {
        this.executeIncludeScript("common::common.xjs"); /*include "common::common.xjs"*/;

        //시작 시 등급 조회
        this.Form_MemberInsert_onload = function(obj,e)
        {
        	this.fn_gradeSearch();
        };

        //회원 등급 조회 함수
        this.fn_gradeSearch = function(){
        	var strSvcID = "selectMemberGradeList"
        	var setURL = "svc::/selectMemberGradeListByAdmin.do?time=" + new Date().getTime();
        	var strInDatasets = "";
        	var strOutDatasets = "ds_grade=ds_grade";
        	var strArg = "";
        	var callBack = "fn_callBack";
        	var inAsync = true;

        	this.transaction(strSvcID,setURL,strInDatasets,strOutDatasets,strArg,callBack,inAsync);
        }

        //등록 버튼 - insert
        this.insert_box_insert_btn_onclick = function(obj,e)
        {
        	// 1. 값 가져오기 + trim (null 방지)
        	var memberId = (this.ds_member.getColumn(0,"MEMBER_ID") || "").trim();
        	var userName = (this.ds_member.getColumn(0,"USER_NAME") || "").trim();
        	var password = (this.ds_member.getColumn(0,"PASSWORD") || "").trim();
        	var emailAddr = (this.ds_member.getColumn(0,"EMAIL_ADDR") || "").trim();
        	var phoneNumber = (this.ds_member.getColumn(0,"PHONE_NUMBER") || "").trim();
        	var gradeCode = this.ds_member.getColumn(0,"GRADE_CODE");
        	var memberType = this.ds_member.getColumn(0,"MEMBER_TYPE");

        	// 2. 필수값 체크
        	if(!memberId) {
        		this.alert("아이디를 입력하세요");
        		return;
        	}

        	if(!userName) {
        		this.alert("이름을 입력하세요");
        		return;
        	}

        	if(!password) {
        		this.alert("비밀번호를 입력하세요");
        		return;
        	}

        	if(!emailAddr) {
        		this.alert("이메일을 입력하세요");
        		return;
        	}

        	if(!phoneNumber) {
        		this.alert("전화번호를 입력하세요");
        		return;
        	}

        	if(!gradeCode) {
        		this.alert("회원 등급을 선택하세요");
        		return;
        	}

        	if(!memberType) {
        		this.alert("회원 타입을 선택하세요");
        		return;
        	}

        	// 3. 아이디 검증 varchar(255)
        	if(memberId.length > 16) {
        		this.alert("아이디는 255자 이하로 입력해주세요");
        		return;
        	}

        	if(memberId.indexOf(' ') !== -1) {
        		this.alert("아이디에 공백을 사용할 수 없습니다");
        		return;
        	}

        	// 4. 이름 검증 varchar(50)
        	if(userName.length > 50) {
        		this.alert("이름은 50자 이하로 입력해주세요");
        		return;
        	}
        	// 이름은 중간 공백 허용 (trim으로 앞뒤만 제거)

        	// 5. 비밀번호 검증
        	if(password.length < 8 || password.length > 20) {
        		this.alert("비밀번호는 8~20자로 입력해주세요");
        		return;
        	}

        	var pwRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;
        	if(!pwRegex.test(password)) {
        		this.alert("비밀번호는 영문과 숫자를 포함해야 합니다");
        		return;
        	}

        	// 6. 이메일 검증 varchar(100)
        	if(emailAddr.length > 100) {
        		this.alert("이메일은 100자 이하로 입력해주세요");
        		return;
        	}

        	if(emailAddr.indexOf(' ') !== -1) {
        		this.alert("이메일에 공백을 사용할 수 없습니다");
        		return;
        	}

        	var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        	if(!emailRegex.test(emailAddr)) {
        		this.alert("올바른 이메일 형식이 아닙니다");
        		return;
        	}

        	// 7. trim된 값을 dataset에 다시 저장
        	this.ds_member.setColumn(0, "MEMBER_ID", memberId);
        	this.ds_member.setColumn(0, "USER_NAME", userName);
        	this.ds_member.setColumn(0, "PASSWORD", password);
        	this.ds_member.setColumn(0, "EMAIL_ADDR", emailAddr);
        	this.ds_member.setColumn(0, "PHONE_NUMBER", phoneNumber);

        	// 8. 서버로 데이터 전송
        	var strSvcID = "insertMember"
        	var setURL = "svc::/insertMemberByAdmin.do?time=" + new Date().getTime();
        	var strInDatasets = "ds_member=ds_member";
        	var strOutDatasets = "ds_insCnt=ds_insCnt";
        	var strArg = "";
        	var callBack = "fn_callBack";
        	var inAsync = true;

        	this.transaction(strSvcID,setURL,strInDatasets,strOutDatasets,strArg,callBack,inAsync);
        };

        // 공통 콜백
        this.fn_callBack = function(svcID, errorCode, errorMSG){

        	if(errorCode == -1){
        		this.alert(errorMSG);
        		return;
        	}

        	switch(svcID){
        		case "selectMemberList" :
        			console.log(this.ds_list.saveXML());
        			break;

        		case "selectMemberGradeList" :
        			console.log(this.ds_grade.saveXML());
        			break;

        		case "insertMember" :
        			console.log(this.ds_member.saveXML());

        			if(this.ds_insCnt.getColumn(0,"INSERTED") > 0){
        				this.alert("등록완료");
        				this.getOwnerFrame().set_formurl("member::Form_MemberList.xfdl");
        			}else{
        				this.alert("등록실패");
        			}
        			break;
        	}
        }

        //취소 버튼
        this.insert_box_close_btn_onclick = function(obj,e)
        {
        	this.getOwnerFrame().set_formurl("member::Form_MemberList.xfdl");
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_MemberInsert_onload,this);
            this.insert_box.form.Static01.addEventHandler("onclick",this.insert_box_Static01_onclick,this);
            this.insert_box.form.insert_name.addEventHandler("onchanged",this.insert_box_insert_name_onchanged,this);
            this.insert_box.form.close_btn.addEventHandler("onclick",this.insert_box_close_btn_onclick,this);
            this.insert_box.form.type_radio.addEventHandler("onitemchanged",this.insert_box_type_radio_onitemchanged,this);
            this.insert_box.form.insert_btn.addEventHandler("onclick",this.insert_box_insert_btn_onclick,this);
        };
        this.loadIncludeScript("Form_MemberInsert.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
