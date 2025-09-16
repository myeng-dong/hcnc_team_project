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
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
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
            obj._setContents("<ColumnInfo><Column id=\"MEMBER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PASSWORD\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTH\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MEMBER_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"GENDER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_insCnt", this);
            obj._setContents("<ColumnInfo><Column id=\"INSERTED\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("insert_box","10","12","1243","688",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_border("1px solid black");
            obj.set_borderRadius("8px");
            obj.set_background("#fff");
            obj.set_boxShadow("0 2px 6px rgba(0,0,0,0.05)");
            this.addChild(obj.name, obj);

            obj = new Static("m","8","63","60","28",null,null,null,null,null,null,this.insert_box.form);
            obj.set_taborder("0");
            obj.set_text("아이디");
            obj.set_font("15px/normal \"Noto Sans KR Black\"");
            this.insert_box.addChild(obj.name, obj);

            obj = new Static("m2","8","117","59","28",null,null,null,null,null,null,this.insert_box.form);
            obj.set_taborder("1");
            obj.set_text("이름");
            obj.set_font("15px/normal \"Noto Sans KR Black\"");
            this.insert_box.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","8","170","60","28",null,null,null,null,null,null,this.insert_box.form);
            obj.set_taborder("2");
            obj.set_text("비밀번호");
            obj.set_font("15px/normal \"Noto Sans KR Black\"");
            this.insert_box.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","8","229","50","28",null,null,null,null,null,null,this.insert_box.form);
            obj.set_taborder("3");
            obj.set_text("이메일");
            obj.set_font("15px/normal \"Noto Sans KR Black\"");
            this.insert_box.addChild(obj.name, obj);

            obj = new Edit("insert_id","83","60","161","34",null,null,null,null,null,null,this.insert_box.form);
            obj.set_taborder("4");
            this.insert_box.addChild(obj.name, obj);

            obj = new Static("Static00","1109","159","34","16",null,null,null,null,null,null,this.insert_box.form);
            obj.set_taborder("5");
            obj.set_text("~");
            this.insert_box.addChild(obj.name, obj);

            obj = new Static("Static01","9","6","170","38",null,null,null,null,null,null,this.insert_box.form);
            obj.set_taborder("6");
            obj.set_text("회원 및 관리자 등록");
            obj.set_textAlign("center");
            obj.set_font("20px/normal \"Noto Sans KR Black\"");
            this.insert_box.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","8","279","59","28",null,null,null,null,null,null,this.insert_box.form);
            obj.set_taborder("7");
            obj.set_text("휴대전화");
            obj.set_font("15px/normal \"Noto Sans KR Black\"");
            this.insert_box.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00","8","337","38","28",null,null,null,null,null,null,this.insert_box.form);
            obj.set_taborder("8");
            obj.set_text("생일");
            obj.set_font("15px/normal \"Noto Sans KR Black\"");
            this.insert_box.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00","8","401","38","28",null,null,null,null,null,null,this.insert_box.form);
            obj.set_taborder("9");
            obj.set_text("성별");
            obj.set_font("15px/normal \"Noto Sans KR Black\"");
            this.insert_box.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00_00","8","463","38","28",null,null,null,null,null,null,this.insert_box.form);
            obj.set_taborder("10");
            obj.set_text("등급");
            obj.set_font("15px/normal \"Noto Sans KR Black\"");
            this.insert_box.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00_00_00","8","527","57","28",null,null,null,null,null,null,this.insert_box.form);
            obj.set_taborder("11");
            obj.set_text("회원타입");
            obj.set_font("15px/normal \"Noto Sans KR Black\"");
            this.insert_box.addChild(obj.name, obj);

            obj = new Edit("insert_name","83","111","161","34",null,null,null,null,null,null,this.insert_box.form);
            obj.set_taborder("12");
            this.insert_box.addChild(obj.name, obj);

            obj = new Edit("insert_password","83","167","161","34",null,null,null,null,null,null,this.insert_box.form);
            obj.set_taborder("13");
            this.insert_box.addChild(obj.name, obj);

            obj = new Edit("insert_password00","83","223","161","34",null,null,null,null,null,null,this.insert_box.form);
            obj.set_taborder("14");
            this.insert_box.addChild(obj.name, obj);

            obj = new Edit("insert_password00_00","83","278","161","34",null,null,null,null,null,null,this.insert_box.form);
            obj.set_taborder("15");
            this.insert_box.addChild(obj.name, obj);

            obj = new Combo("Combo00","80","457","172","36",null,null,null,null,null,null,this.insert_box.form);
            obj.set_taborder("16");
            obj.set_innerdataset("ds_grade");
            obj.set_codecolumn("GRADE_CODE");
            obj.set_datacolumn("GRADE_NAME");
            obj.set_text("Combo00");
            this.insert_box.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","83","338","183","29",null,null,null,null,null,null,this.insert_box.form);
            obj.set_taborder("17");
            this.insert_box.addChild(obj.name, obj);

            obj = new Button("close_btn","573","600","95","31",null,null,null,null,null,null,this.insert_box.form);
            obj.set_taborder("18");
            obj.set_text("취소");
            obj.set_background(" #9ca3af");
            obj.set_borderRadius("4px");
            obj.set_color("#fff");
            obj.set_font("13px/normal \"Noto Sans KR Black\"");
            this.insert_box.addChild(obj.name, obj);

            obj = new Radio("gender_radio","80","398","119","34",null,null,null,null,null,null,this.insert_box.form);
            obj.set_taborder("19");
            obj.set_innerdataset("ds_gender");
            obj.set_codecolumn("GENDER");
            obj.set_datacolumn("CODE");
            obj.set_font("12px \"Noto Sans KR Black\"");
            obj.set_direction("vertical");
            this.insert_box.addChild(obj.name, obj);

            obj = new Radio("type_radio","83","527","116","28",null,null,null,null,null,null,this.insert_box.form);
            obj.set_taborder("20");
            obj.set_innerdataset("ds_type");
            obj.set_codecolumn("MEMBER_TYPE");
            obj.set_datacolumn("CODE");
            obj.set_font("12px/normal \"Noto Sans KR Black\"");
            obj.set_direction("vertical");
            this.insert_box.addChild(obj.name, obj);

            obj = new Button("insert_btn","469","600","90","31",null,null,null,null,null,null,this.insert_box.form);
            obj.set_taborder("21");
            obj.set_text("등록하기");
            obj.set_background("#2563eb");
            obj.set_borderRadius("4px");
            obj.set_color("#fff");
            obj.set_font("13px/normal \"Noto Sans KR Black\"");
            this.insert_box.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
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

            obj = new BindItem("item9","insert_box.form.insert_password00_00","value","ds_member","PHONE_NUMBER");
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
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_MemberInsert.xfdl", function() {
        //취소 버튼
        this.insert_box_close_btn_onclick = function(obj,e)
        {
        	this.getOwnerFrame().set_formurl("member::Form_MemberList.xfdl");
        };

        //회원 등급 조회 함수
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


        //시작 시 등급 조회
        this.Form_MemberInsert_onload = function(obj,e)
        {
        	this.fn_gradeSearch();
        };


        //등록 버튼시 insert
        this.insert_box_insert_btn_onclick = function(obj,e)
        {
        	//빈값체크
        	var memberId = this.ds_member.getColumn(0,"MEMBER_ID")
        	var emailAddr = this.ds_member.getColumn(0,"EMAIL_ADDR")
        	var phoneNumber = this.ds_member.getColumn(0,"PHONE_NUMBER")

        	if(memberId == "" || memberId == null){
        		this.alert("아이디를 입력하세요우워어")
        		return;
        	}

        	if(emailAddr == "" || emailAddr == null){
        		this.alert("이메일를 입력하거라")
        		return;
        	}

        	if(phoneNumber == "" || phoneNumber == null){
        		this.alert("전화번호를 입력안하니?")
        		return;
        	}

        	//통신하기
        	var strSvcID = "insertMember"
        	var setURL = "svc::/insertMemberByAdmin.do";
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
        		this.alert(errorMSG)

        		return;
        	}

        	switch(svcID){
        	case "selectMemberList" :
        		console.log(this.ds_list.saveXML());
        		break;

        	case "selectMemberGradeList" :
        		console.log(this.ds_grade.saveXML())
        		break;

        	case "insertMember" :
        		console.log(this.ds_member.saveXML())

        		if(this.ds_insCnt.getColumn(0,"INSERTED") > 0){
        			alert("등록완료")
        			this.getOwnerFrame().set_formurl("member::Form_MemberList.xfdl");
        		}else{
        			alert("등록실패")
        		}

        		break;
        	}

        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_MemberInsert_onload,this);
            this.insert_box.form.Static01.addEventHandler("onclick",this.insert_box_Static01_onclick,this);
            this.insert_box.form.insert_name.addEventHandler("onchanged",this.insert_box_insert_name_onchanged,this);
            this.insert_box.form.close_btn.addEventHandler("onclick",this.insert_box_close_btn_onclick,this);
            this.insert_box.form.insert_btn.addEventHandler("onclick",this.insert_box_insert_btn_onclick,this);
        };
        this.loadIncludeScript("Form_MemberInsert.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
