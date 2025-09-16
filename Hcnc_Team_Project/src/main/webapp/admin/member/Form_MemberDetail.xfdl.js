(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_MemberDetail");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_memberDt", this);
            obj._setContents("<ColumnInfo><Column id=\"MEMBER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTH\" type=\"STRING\" size=\"256\"/><Column id=\"GENDER\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MEMBER_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOGIN_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FIRST_LOGIN_DT\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_LOGIN_DT\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"PRICE_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gender", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GENDER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">남자</Col><Col id=\"GENDER\">Male</Col></Row><Row><Col id=\"CODE\">여자</Col><Col id=\"GENDER\">Female</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_type", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MEMBER_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">회원</Col><Col id=\"MEMBER_TYPE\">user</Col></Row><Row><Col id=\"CODE\">관리자</Col><Col id=\"MEMBER_TYPE\">admin</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grade", this);
            obj._setContents("<ColumnInfo><Column id=\"GRADE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_status", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"STATUS\">Y</Col><Col id=\"CODE\">이용중</Col></Row><Row><Col id=\"STATUS\">N</Col><Col id=\"CODE\">탈퇴</Col></Row><Row><Col id=\"STATUS\">R</Col><Col id=\"CODE\">휴면</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("detail_box","10","12","1243","688",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_border("1px solid black");
            obj.set_borderRadius("8px");
            obj.set_background("#fff");
            obj.set_boxShadow("0 2px 6px rgba(0,0,0,0.05)");
            this.addChild(obj.name, obj);

            obj = new Static("m","23","63","60","28",null,null,null,null,null,null,this.detail_box.form);
            obj.set_taborder("0");
            obj.set_text("아이디");
            obj.set_font("15px/normal \"Noto Sans KR Black\"");
            this.detail_box.addChild(obj.name, obj);

            obj = new Static("m2","21","114","59","28",null,null,null,null,null,null,this.detail_box.form);
            obj.set_taborder("1");
            obj.set_text("이름");
            obj.set_font("15px/normal \"Noto Sans KR Black\"");
            this.detail_box.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","19","161","50","28",null,null,null,null,null,null,this.detail_box.form);
            obj.set_taborder("2");
            obj.set_text("이메일");
            obj.set_font("15px/normal \"Noto Sans KR Black\"");
            this.detail_box.addChild(obj.name, obj);

            obj = new Static("Static00","1109","159","34","16",null,null,null,null,null,null,this.detail_box.form);
            obj.set_taborder("3");
            obj.set_text("~");
            this.detail_box.addChild(obj.name, obj);

            obj = new Static("Static01","9","6","170","38",null,null,null,null,null,null,this.detail_box.form);
            obj.set_taborder("4");
            obj.set_text("회원 및 관리자 상세");
            obj.set_textAlign("center");
            obj.set_font("20px/normal \"Noto Sans KR Black\"");
            this.detail_box.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","14","219","59","28",null,null,null,null,null,null,this.detail_box.form);
            obj.set_taborder("5");
            obj.set_text("휴대전화");
            obj.set_font("15px/normal \"Noto Sans KR Black\"");
            this.detail_box.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00","21","273","38","28",null,null,null,null,null,null,this.detail_box.form);
            obj.set_taborder("6");
            obj.set_text("생일");
            obj.set_font("15px/normal \"Noto Sans KR Black\"");
            this.detail_box.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00","18","333","38","28",null,null,null,null,null,null,this.detail_box.form);
            obj.set_taborder("7");
            obj.set_text("성별");
            obj.set_font("15px/normal \"Noto Sans KR Black\"");
            this.detail_box.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00_00","18","381","38","28",null,null,null,null,null,null,this.detail_box.form);
            obj.set_taborder("8");
            obj.set_text("등급");
            obj.set_font("15px/normal \"Noto Sans KR Black\"");
            this.detail_box.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00_00_00","9","443","57","28",null,null,null,null,null,null,this.detail_box.form);
            obj.set_taborder("9");
            obj.set_text("회원타입");
            obj.set_font("15px/normal \"Noto Sans KR Black\"");
            this.detail_box.addChild(obj.name, obj);

            obj = new Button("close_btn","564","567","95","36",null,null,null,null,null,null,this.detail_box.form);
            obj.set_taborder("10");
            obj.set_text("뒤로가기");
            obj.set_background(" #9ca3af");
            obj.set_borderRadius("4px");
            obj.set_color("#fff");
            obj.set_font("13px/normal \"Noto Sans KR Black\"");
            this.detail_box.addChild(obj.name, obj);

            obj = new Static("m00","399","63","80","28",null,null,null,null,null,null,this.detail_box.form);
            obj.set_taborder("11");
            obj.set_text("로그인 타입");
            obj.set_font("15px/normal \"Noto Sans KR Black\"");
            this.detail_box.addChild(obj.name, obj);

            obj = new Static("m00_00","399","117","90","28",null,null,null,null,null,null,this.detail_box.form);
            obj.set_taborder("12");
            obj.set_text("첫 로그인 날짜");
            obj.set_font("15px/normal \"Noto Sans KR Black\"");
            this.detail_box.addChild(obj.name, obj);

            obj = new Static("m00_00_00","398","170","123","28",null,null,null,null,null,null,this.detail_box.form);
            obj.set_taborder("13");
            obj.set_text("마지막 로그인 날짜");
            obj.set_font("15px/normal \"Noto Sans KR Black\"");
            this.detail_box.addChild(obj.name, obj);

            obj = new Static("m00_00_00_00","399","213","61","28",null,null,null,null,null,null,this.detail_box.form);
            obj.set_taborder("14");
            obj.set_text("회원 상태");
            obj.set_font("15px/normal \"Noto Sans KR Black\"");
            this.detail_box.addChild(obj.name, obj);

            obj = new Static("m00_00_00_00_00","399","259","61","28",null,null,null,null,null,null,this.detail_box.form);
            obj.set_taborder("15");
            obj.set_text("누적 금액");
            obj.set_font("15px/normal \"Noto Sans KR Black\"");
            this.detail_box.addChild(obj.name, obj);

            obj = new Static("m00_00_00_00_00_00","398","307","61","28",null,null,null,null,null,null,this.detail_box.form);
            obj.set_taborder("16");
            obj.set_text("가입 날짜");
            obj.set_font("15px/normal \"Noto Sans KR Black\"");
            this.detail_box.addChild(obj.name, obj);

            obj = new Static("m00_00_00_00_00_00_00","399","357","101","28",null,null,null,null,null,null,this.detail_box.form);
            obj.set_taborder("17");
            obj.set_text("최종 수정 날짜");
            obj.set_font("15px/normal \"Noto Sans KR Black\"");
            this.detail_box.addChild(obj.name, obj);

            obj = new Button("update_btn","456","567","93","36",null,null,null,null,null,null,this.detail_box.form);
            obj.set_taborder("18");
            obj.set_text("수정하기");
            obj.set_background("#2563eb");
            obj.set_borderRadius("4px");
            obj.set_color("#fff");
            obj.set_font("bold 13px \"Noto Sans KR Black\"");
            this.detail_box.addChild(obj.name, obj);

            obj = new Radio("gender_radio","78","333","144","24",null,null,null,null,null,null,this.detail_box.form);
            obj.set_readonly("true");
            obj.set_taborder("19");
            obj.set_innerdataset("ds_gender");
            obj.set_codecolumn("GENDER");
            obj.set_datacolumn("CODE");
            obj.set_direction("vertical");
            obj.set_font("12pt/normal \"Noto Sans KR Black\"");
            this.detail_box.addChild(obj.name, obj);

            obj = new Radio("type_radio","83","447","124","27",null,null,null,null,null,null,this.detail_box.form);
            obj.set_readonly("true");
            obj.set_taborder("20");
            obj.set_innerdataset("ds_type");
            obj.set_codecolumn("MEMBER_TYPE");
            obj.set_datacolumn("CODE");
            obj.set_direction("vertical");
            obj.set_font("12pt \"Noto Sans KR Black\"");
            this.detail_box.addChild(obj.name, obj);

            obj = new Radio("status_radio","548","217","191","24",null,null,null,null,null,null,this.detail_box.form);
            obj.set_readonly("true");
            obj.set_taborder("21");
            obj.set_innerdataset("ds_status");
            obj.set_codecolumn("STATUS");
            obj.set_datacolumn("CODE");
            obj.set_direction("vertical");
            obj.set_font("12px/normal \"Noto Sans KR Black\"");
            this.detail_box.addChild(obj.name, obj);

            obj = new Edit("detail_loginType00","549","63","161","34",null,null,null,null,null,null,this.detail_box.form);
            obj.set_readonly("true");
            obj.set_taborder("22");
            this.detail_box.addChild(obj.name, obj);

            obj = new Calendar("dstail_first_login_dt00","549","118","183","29",null,null,null,null,null,null,this.detail_box.form);
            obj.set_readonly("true");
            obj.set_taborder("23");
            this.detail_box.addChild(obj.name, obj);

            obj = new Calendar("dstail_last_login_dt00","549","167","183","29",null,null,null,null,null,null,this.detail_box.form);
            obj.set_readonly("true");
            obj.set_taborder("24");
            this.detail_box.addChild(obj.name, obj);

            obj = new Edit("detail_price_amount00","546","260","161","34",null,null,null,null,null,null,this.detail_box.form);
            obj.set_readonly("true");
            obj.set_taborder("25");
            this.detail_box.addChild(obj.name, obj);

            obj = new Calendar("dstail_input_dt00","546","313","183","29",null,null,null,null,null,null,this.detail_box.form);
            obj.set_readonly("true");
            obj.set_taborder("26");
            this.detail_box.addChild(obj.name, obj);

            obj = new Calendar("dstail_update_dt00","546","363","183","29",null,null,null,null,null,null,this.detail_box.form);
            obj.set_readonly("true");
            obj.set_taborder("27");
            this.detail_box.addChild(obj.name, obj);

            obj = new Combo("grade_combo00","78","381","108","37",null,null,null,null,null,null,this.detail_box.form);
            obj.set_readonly("true");
            obj.set_taborder("28");
            obj.set_innerdataset("ds_grade");
            obj.set_codecolumn("GRADE_CODE");
            obj.set_datacolumn("GRADE_NAME");
            obj.set_text("Combo00");
            this.detail_box.addChild(obj.name, obj);

            obj = new Calendar("dstail_birth00","79","274","183","29",null,null,null,null,null,null,this.detail_box.form);
            obj.set_readonly("true");
            obj.set_taborder("29");
            this.detail_box.addChild(obj.name, obj);

            obj = new Edit("detail_phoneNumber00","80","220","161","34",null,null,null,null,null,null,this.detail_box.form);
            obj.set_readonly("true");
            obj.set_taborder("30");
            this.detail_box.addChild(obj.name, obj);

            obj = new Edit("detail_email00","80","159","161","34",null,null,null,null,null,null,this.detail_box.form);
            obj.set_readonly("true");
            obj.set_taborder("31");
            this.detail_box.addChild(obj.name, obj);

            obj = new Edit("dstail_name00","83","111","161","34",null,null,null,null,null,null,this.detail_box.form);
            obj.set_readonly("true");
            obj.set_taborder("32");
            this.detail_box.addChild(obj.name, obj);

            obj = new Edit("detail_id00","83","63","161","34",null,null,null,null,null,null,this.detail_box.form);
            obj.set_readonly("true");
            obj.set_taborder("33");
            this.detail_box.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","detail_box.form.gender_radio","value","ds_memberDt","GENDER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","detail_box.form.type_radio","value","ds_memberDt","MEMBER_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","detail_box.form.status_radio","value","ds_memberDt","STATUS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","detail_box.form.detail_loginType00","value","ds_memberDt","LOGIN_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","detail_box.form.dstail_first_login_dt00","value","ds_memberDt","FIRST_LOGIN_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","detail_box.form.dstail_last_login_dt00","value","ds_memberDt","LAST_LOGIN_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","detail_box.form.detail_price_amount00","value","ds_memberDt","PRICE_AMOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","detail_box.form.dstail_input_dt00","value","ds_memberDt","INPUT_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","detail_box.form.dstail_update_dt00","value","ds_memberDt","UPDATE_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","detail_box.form.grade_combo00","value","ds_memberDt","GRADE_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","detail_box.form.dstail_birth00","value","ds_memberDt","BIRTH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","detail_box.form.detail_phoneNumber00","value","ds_memberDt","PHONE_NUMBER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","detail_box.form.detail_email00","value","ds_memberDt","EMAIL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","detail_box.form.dstail_name00","value","ds_memberDt","USER_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","detail_box.form.detail_id00","value","ds_memberDt","MEMBER_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_MemberDetail.xfdl", function() {
        this.memberId=""; //전역변수 선언
        this.Form_MemberDetail_onload = function(obj,e)
        {
        	// 부모 Frame에서 arguments 꺼내오기
            var ownerFrame = this.getOwnerFrame();
            var memberId = ownerFrame.arguments["MEMBER_ID"];

        	this.fn_memberDetail(memberId);
        	this.fn_gradeSearch();

        };

        //상세 조회 함수
        this.fn_memberDetail = function(memberId){

        	var strSvcID = "selectMemberDetail"
        	var setURL = "svc::/selectMemberDetailByAdmin.do";
        	var strInDatasets = "";
        	var strOutDatasets = "ds_memberDt=ds_memberDt";
        	var strArg = "memberId="+memberId;
        	var callBack = "fn_callBack";
        	var inAsync = true;

        	this.transaction(strSvcID,setURL,strInDatasets,strOutDatasets,strArg,callBack,inAsync);
        }

        //회원 등급 조회
        this.fn_gradeSearch = function(){

        	var strSvcID = "selectMemberGradeList"
        	var setURL = "svc::/selectMemberGradeListByAdmin.do";
        	var strInDatasets = "";
        	var strOutDatasets = "ds_grade=ds_grade";
        	var strArg = "";
        	var callBack = "fn_callBack";
        	var inAsync = true;

        	this.transaction(strSvcID,setURL,strInDatasets,strOutDatasets,strArg,callBack,inAsync);
        }


        // 콜백
        this.fn_callBack = function(svcID, errorCode, errorMSG){

        	if(errorCode == -1){
        		this.alert(errorMSG)
        	}

        	switch(svcID){
        	case "selectMemberDetail" :
        		console.log(this.ds_memberDt.saveXML());
        		break;

        	case "selectMemberGradeList" :
        		console.log(this.ds_grade.saveXML())
        		break;

        	}
        }

        //뒤로가기 버튼
        this.insert_box_close_btn_onclick = function(obj,e)
        {
        	this.getOwnerFrame().set_formurl("member::Form_MemberList.xfdl");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_MemberDetail_onload,this);
            this.detail_box.form.Static01.addEventHandler("onclick",this.insert_box_Static01_onclick,this);
            this.detail_box.form.close_btn.addEventHandler("onclick",this.insert_box_close_btn_onclick,this);
            this.detail_box.form.gender_radio.addEventHandler("onitemchanged",this.detail_box_gender_radio_onitemchanged,this);
            this.detail_box.form.dstail_name00.addEventHandler("onchanged",this.insert_box_insert_name_onchanged,this);
        };
        this.loadIncludeScript("Form_MemberDetail.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
