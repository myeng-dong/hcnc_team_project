(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_MemberList");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"FIRST_LOGIN_DT\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_LOGIN_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"INPUT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MEMBER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"EAMIL_ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"GENDER\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTH\" type=\"STRING\" size=\"256\"/><Column id=\"MEMBER_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("member_list","20","350",null,"320","60",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#FFFFFF");
            obj.set_border("0px none");
            obj.set_borderRadius("10px");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"78\"/><Column size=\"102\"/><Column size=\"96\"/><Column size=\"92\"/><Column size=\"105\"/><Column size=\"115\"/><Column size=\"158\"/><Column size=\"129\"/><Column size=\"170\"/><Column size=\"108\"/></Columns><Rows><Row size=\"48\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"NO\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"2\" text=\"등록일\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"3\" text=\"이름\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"4\" text=\"아이디\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"5\" text=\"이메일\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"6\" text=\"등급\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"7\" text=\"휴대전화\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"8\" text=\"성별\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"9\" text=\"생년월일\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"10\" text=\"권한\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" text=\"bind:BANNER_ID\"/><Cell col=\"1\" text=\"expr:currow + 1\"/><Cell col=\"2\" text=\"bind:INPUT_DT\"/><Cell col=\"3\" text=\"bind:USER_NAME\"/><Cell col=\"4\" text=\"bind:MEMBER_ID\"/><Cell col=\"5\" text=\"bind:EAMIL_ADDRESS\"/><Cell col=\"6\" text=\"bind:GRADE_CODE\"/><Cell col=\"7\" edittype=\"normal\" text=\"bind:PHONE_NUMBER\"/><Cell col=\"8\" text=\"bind:GENDER\"/><Cell col=\"9\" edittype=\"normal\" text=\"bind:BIRTH\"/><Cell col=\"10\" edittype=\"normal\" text=\"bind:MEMBER_TYPE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","15","330","70","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("회원목록");
            obj.set_textAlign("center");
            obj.set_font("15px/normal \"Noto Sans KR Black\"");
            this.addChild(obj.name, obj);

            obj = new Div("search_box","10","12","1243","296",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_border("1px solid black");
            obj.set_borderRadius("8px");
            obj.set_background("#fff");
            obj.set_boxShadow("0 2px 6px rgba(0,0,0,0.05)");
            this.addChild(obj.name, obj);

            obj = new Static("m","20","63","60","28",null,null,null,null,null,null,this.search_box.form);
            obj.set_taborder("0");
            obj.set_text("개인정보");
            obj.set_font("15px/normal \"Noto Sans KR Black\"");
            this.search_box.addChild(obj.name, obj);

            obj = new Static("m2","20","109","59","28",null,null,null,null,null,null,this.search_box.form);
            obj.set_taborder("1");
            obj.set_text("회원등급");
            obj.set_font("15px/normal \"Noto Sans KR Black\"");
            this.search_box.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","20","157","60","28",null,null,null,null,null,null,this.search_box.form);
            obj.set_taborder("2");
            obj.set_text("휴대전화");
            obj.set_font("15px/normal \"Noto Sans KR Black\"");
            this.search_box.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","20","199","50","28",null,null,null,null,null,null,this.search_box.form);
            obj.set_taborder("3");
            obj.set_text("접속일");
            obj.set_font("15px/normal \"Noto Sans KR Black\"");
            this.search_box.addChild(obj.name, obj);

            obj = new Combo("member_info","94","62","104","33",null,null,null,null,null,null,this.search_box.form);
            obj.set_taborder("4");
            obj.set_text("");
            this.search_box.addChild(obj.name, obj);

            obj = new Edit("Edit00","211","61","161","34",null,null,null,null,null,null,this.search_box.form);
            obj.set_taborder("5");
            this.search_box.addChild(obj.name, obj);

            obj = new Combo("member_grade","94","111","104","30",null,null,null,null,null,null,this.search_box.form);
            obj.set_taborder("6");
            this.search_box.addChild(obj.name, obj);

            obj = new Edit("member_phoneNum","94","156","137","29",null,null,null,null,null,null,this.search_box.form);
            obj.set_taborder("7");
            this.search_box.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","94","199","58","24",null,null,null,null,null,null,this.search_box.form);
            obj.set_taborder("8");
            this.search_box.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00","179","199","52","24",null,null,null,null,null,null,this.search_box.form);
            obj.set_taborder("9");
            this.search_box.addChild(obj.name, obj);

            obj = new Static("Static00","162","205","34","16",null,null,null,null,null,null,this.search_box.form);
            obj.set_taborder("10");
            obj.set_text("~");
            this.search_box.addChild(obj.name, obj);

            obj = new Static("Static01","9","11","102","38",null,null,null,null,null,null,this.search_box.form);
            obj.set_taborder("11");
            obj.set_text("회원 검색");
            obj.set_textAlign("center");
            obj.set_font("20px/normal \"Noto Sans KR Black\"");
            this.search_box.addChild(obj.name, obj);

            obj = new Button("search_btn","280","247","100","31",null,null,null,null,null,null,this.search_box.form);
            obj.set_taborder("12");
            obj.set_text("조회하기");
            obj.set_font("13px/normal \"Noto Sans KR Black\"");
            obj.set_background("#2563eb");
            obj.set_color("#fff");
            obj.set_borderRadius("4px");
            this.search_box.addChild(obj.name, obj);

            obj = new Button("reset_btn","399","247","100","31",null,null,null,null,null,null,this.search_box.form);
            obj.set_taborder("13");
            obj.set_text("초기화");
            obj.set_font("13px/normal \"Noto Sans KR Black\"");
            obj.set_background(" #9ca3af");
            obj.set_color("#fff");
            obj.set_borderRadius("4px");
            this.search_box.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","member_list","binddataset","ds_user","");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_MemberList.xfdl", function() {
        //회원 리스트 조회
        this.fn_search = function(){

           //트랜잭션 id -> 콜백 함수에서 쓰임
        	var strSvcID = "selectList"
        	//url controller에서 받을 주소
        	var setURL = "svc::/selectList.do";
        	//컨트롤러로 보내는 값
        	var strInDatasets = "";
        	//컨트롤러에서 받는 값
        	var strOutDatasets = "ds_list=ds_list";
        	var strArg = "";
        	//콜백함수
        	var callBack = "fn_callBack";
        	//스크립트 바로 실행
        	var inAsync = true;

        	this.transaction(strSvcID,setURL,strInDatasets,strOutDatasets,strArg,callBack,inAsync);
        }


        // 공통 콜백
        this.fn_callBack = function(svcID, errorCode, errorMSG){

        	if(errorCode == -1){
        		this.alert(errorMSG)
        	}

        	switch(svcID){
        		case "selectMemberList" :
        		   console.log(this.ds_list.saveXML());
        		break;
        	}
        }



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.search_box.form.member_info.addEventHandler("onitemchanged",this.search_box_member_info_onitemchanged,this);
        };
        this.loadIncludeScript("Form_MemberList.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
