(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_MemberRegHistory");
            this.set_titletext("New Form");
            this.set_background("lightblue");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_loginType", this);
            obj._setContents("<ColumnInfo><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOGIN_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NAME\">홈페이지</Col><Col id=\"LOGIN_TYPE\">IDPW</Col></Row><Row><Col id=\"NAME\">카카오</Col><Col id=\"LOGIN_TYPE\">KAKAO</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"MEMBER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"LOGIN_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"LOGIN_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"MEMBER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_START_DT\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_END_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("reg_search_box","20","17","1240","143",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("white");
            obj.set_text("");
            obj.set_borderRadius("8px");
            this.addChild(obj.name, obj);

            obj = new Grid("black_list","20","170",null,"530","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#FFFFFF");
            obj.set_border("0px none");
            obj.set_borderRadius("10px");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"52\"/><Column size=\"165\"/><Column size=\"127\"/><Column size=\"185\"/><Column size=\"171\"/><Column size=\"230\"/></Columns><Rows><Row size=\"48\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"NO\" textAlign=\"CENTER\" font=\"11pt/normal &quot;LG Smart UI Bold&quot;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"1\" text=\"아이디\" textAlign=\"CENTER\" font=\"11pt/normal &quot;LG Smart UI Bold&quot;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"2\" text=\"이름\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"3\" text=\"전화번호\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"4\" text=\"로그인 유형\" textAlign=\"CENTER\" font=\"11pt/normal &quot;LG Smart UI Bold&quot;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"5\" text=\"회원등록일\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\" font=\"11pt/normal &quot;LG Smart UI Bold&quot;\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\" textAlign=\"center\" font=\"12px/normal &quot;LG Smart UI Bold&quot;\"/><Cell col=\"1\" text=\"bind:MEMBER_ID\" textAlign=\"center\" font=\"12px/normal &quot;Noto Sans KR Black&quot;\"/><Cell col=\"2\" text=\"bind:USER_NAME\" textAlign=\"center\" font=\"12px/normal &quot;Noto Sans KR Black&quot;\"/><Cell col=\"3\" text=\"bind:PHONE_NUMBER\" font=\"12px/normal &quot;Noto Sans KR Black&quot;\" textAlign=\"center\" displaytype=\"mask\" edittype=\"mask\" maskedittype=\"string\" maskeditformat=\"###-####-####\"/><Cell col=\"4\" text=\"bind:LOGIN_TYPE\" textAlign=\"center\" font=\"12px/normal &quot;Noto Sans KR Black&quot;\"/><Cell col=\"5\" text=\"bind:INPUT_DT\" displaytype=\"normal\" edittype=\"none\" combocodecol=\"GRADE_CODE\" combodatacol=\"GRADE_NAME\" combodataset=\"ds_grade\" font=\"12px/normal &quot;Noto Sans KR Black&quot;\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","36","36","69","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("로그인 유형");
            obj.set_font("14px/normal \"Noto Sans KR Black\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","430","90","60","32",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("전화번호");
            obj.set_font("14px/normal \"Noto Sans KR Black\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","50","90","40","32",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("아이디");
            obj.set_font("14px/normal \"Noto Sans KR Black\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","450","37","27","32",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("이름");
            obj.set_font("14px/normal \"Noto Sans KR Black\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","820","37","70","32",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("회원 등록일");
            obj.set_font("14px/normal \"Noto Sans KR Black\"");
            this.addChild(obj.name, obj);

            obj = new Radio("login_type","130","40","181","26",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_innerdataset("ds_loginType");
            obj.set_codecolumn("LOGIN_TYPE");
            obj.set_datacolumn("NAME");
            obj.set_direction("vertical");
            obj.set_font("12px/normal \"Noto Sans KR Black\"");
            this.addChild(obj.name, obj);

            obj = new Edit("search_member_id","113","92","256","28",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_borderRadius("8px");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new Edit("search_user_name","510","40","256","28",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_borderRadius("8px");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("search_phoneNumber","510","91","254","31",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_border("1px solid black");
            obj.set_borderRadius("8px");
            obj.set_format("###-####-####");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","900","40","160","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_border("1px solid black");
            obj.set_borderRadius("8px");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","1070","43","20","22",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("~");
            obj.set_font("bold 14px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","1090","40","160","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_border("1px solid black");
            obj.set_borderRadius("8px");
            this.addChild(obj.name, obj);

            obj = new Button("search_btn","940","110","110","29",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("검색하기");
            obj.set_background("#2563eb");
            obj.set_borderRadius("4px");
            obj.set_font("12px/normal \"Noto Sans KR Black\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Button("reset_btn","1070","111","110","27",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("초기화");
            obj.set_background(" #9ca3af");
            obj.set_borderRadius("4px");
            obj.set_font("12px/normal \"Noto Sans KR Black\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","black_list","binddataset","ds_list","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","login_type","value","ds_search","LOGIN_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","search_member_id","value","ds_search","MEMBER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","search_user_name","value","ds_search","USER_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Calendar00","value","ds_search","INPUT_START_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","Calendar01","value","ds_search","INPUT_END_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","search_phoneNumber","value","ds_search","PHONE_NUMBER");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_MemberRegHistory.xfdl", function() {
        this.Form_MemberRegHistory_onload = function(obj,e)
        {
        	this.fn_selectMemberRegHistoryList();
        };


        //가입 이력 조회
        this.fn_selectMemberRegHistoryList = function(){

        	var strSvcID = "selectMemberRegHistoryList"
        	var setURL = "svc::/selectMemberRegHistoryListByAdmin.do";
        	var strInDatasets = "ds_search=ds_search";
        	var strOutDatasets = "ds_list=ds_list";
        	var strArg = "";
        	var callBack = "fn_callBack";
        	var inAsync = true;

        	this.transaction(strSvcID,setURL,strInDatasets,strOutDatasets,strArg,callBack,inAsync);
        }


        // 공통 콜백
        this.fn_callBack = function(svcID, errorCode, errorMSG){

        	if(errorCode == -1){
        		this.alert(errorMSG)
        	}

        	switch(svcID){
        	case "selectMemberRegHistoryList" :
        		console.log(this.ds_list.saveXML());
        		break;

        	}

        }

        //검색버튼
        this.search_btn_onclick = function(obj,e)
        {
        	this.fn_selectMemberRegHistoryList();
        };


        //초기화
        this.reset_btn_onclick = function(obj,e)
        {
        	this.reload();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_MemberRegHistory_onload,this);
            this.reg_search_box.addEventHandler("onclick",this.reg_search_box_onclick,this);
            this.black_list.addEventHandler("oncellclick",this.black_list_oncellclick,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.search_btn.addEventHandler("onclick",this.search_btn_onclick,this);
            this.reset_btn.addEventHandler("onclick",this.reset_btn_onclick,this);
        };
        this.loadIncludeScript("Form_MemberRegHistory.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
