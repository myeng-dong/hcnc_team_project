(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Member_withdrawAndDormant");
            this.set_titletext("New Form");
            this.set_background("lightBlue");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_status", this);
            obj._setContents("<ColumnInfo><Column id=\"STATUS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"STATUS_CODE\">R</Col><Col id=\"STATUS_NAME\">휴면</Col></Row><Row><Col id=\"STATUS_CODE\">N</Col><Col id=\"STATUS_NAME\">탈퇴</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"JOIN_START_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"JOIN_END_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"DORMANT_START_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"DORMANT_END_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"DELETE_START_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"DELETE_END_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"PRICE_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MEMBER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_LOGIN_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DELETE_DT\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DAYS_SINCE_CHANGE\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_upCnt", this);
            obj._setContents("<ColumnInfo><Column id=\"UPDATED\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_delCnt", this);
            obj._setContents("<ColumnInfo><Column id=\"DELETED\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_member", this);
            obj._setContents("<ColumnInfo><Column id=\"MEMBER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("search_box","20","10","1240","330",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("white");
            obj.set_text("");
            obj.set_borderRadius("8px");
            this.addChild(obj.name, obj);

            obj = new Static("grade_search_box00","20","349","1240","325",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("white");
            obj.set_text("");
            obj.set_borderRadius("8px");
            this.addChild(obj.name, obj);

            obj = new Static("status","46","20","48","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("상태");
            obj.set_font("14px/normal \"Noto Sans KR Black\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("status00","46","104","48","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("이메일");
            obj.set_font("14px/normal \"Noto Sans KR Black\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("status00_00","46","154","48","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("가입일");
            obj.set_font("14px/normal \"Noto Sans KR Black\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("status00_00_00","46","201","48","40",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("휴면일");
            obj.set_font("14px/normal \"Noto Sans KR Black\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("status00_00_00_00","46","251","48","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("탈퇴일");
            obj.set_font("14px/normal \"Noto Sans KR Black\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("status01","46","58","48","40",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("이름");
            obj.set_font("14px/normal \"Noto Sans KR Black\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","130","24","190","32",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_innerdataset("ds_status");
            obj.set_codecolumn("STATUS_CODE");
            obj.set_datacolumn("STATUS_NAME");
            obj.set_direction("vertical");
            obj.set_font("11px \"Noto Sans KR Black\"");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","130","60","940","32",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","130","108","940","32",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","131","155","404","35",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00","565","155","404","35",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","535","161","30","23",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("~");
            obj.set_textAlign("center");
            obj.set_font("bold 12px/normal \"Noto Sans KR Black\"");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_01","131","204","404","35",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00_00","565","205","404","35",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","535","211","25","23",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("~");
            obj.set_textAlign("center");
            obj.set_font("bold 12px/normal \"Noto Sans KR Black\"");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_01_00","130","251","404","35",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00_00_00","565","251","404","35",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","535","257","25",null,null,"440",null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("~");
            obj.set_textAlign("center");
            obj.set_font("bold 12px/normal \"Noto Sans KR Black\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","520","301","100","31",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("검색");
            obj.set_font("12px/normal \"Noto Sans KR Black\"");
            obj.set_background("#2563eb");
            obj.set_borderRadius("4px");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","650","301",null,"31","530",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("초기화");
            obj.set_font("12px/normal \"Noto Sans KR Black\"");
            obj.set_background(" #9ca3af");
            obj.set_borderRadius("4px");
            this.addChild(obj.name, obj);

            obj = new Grid("grid_list","30","359",null,"303","60",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_background("#FFFFFF");
            obj.set_border("0px none");
            obj.set_borderRadius("10px");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"49\"/><Column size=\"52\"/><Column size=\"103\"/><Column size=\"175\"/><Column size=\"178\"/><Column size=\"137\"/><Column size=\"135\"/><Column size=\"118\"/><Column size=\"139\"/><Column size=\"106\"/></Columns><Rows><Row size=\"48\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"NO\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"2\" text=\"이름\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"3\" text=\"이메일\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"4\" text=\"전화번호 \" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"5\" text=\"상태 \" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"6\" text=\"구매액\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"7\" text=\"가입일\" textAlign=\"CENTER\" font=\"11pt/normal &quot;LG Smart UI Bold&quot;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"8\" text=\"휴면일\" textAlign=\"CENTER\" font=\"11pt/normal &quot;LG Smart UI Bold&quot;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"9\" text=\"탈퇴일\" textAlign=\"CENTER\" font=\"11pt/normal &quot;LG Smart UI Bold&quot;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"expr:currow + 1\"/><Cell col=\"2\" text=\"bind:USER_NAME\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:EMAIL_ADDR\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:PHONE_NUMBER\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:STATUS_NAME\" textAlign=\"center\"/><Cell col=\"6\" edittype=\"normal\" text=\"bind:PRICE_AMOUNT\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:INPUT_DT\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:LAST_LOGIN_DT\"/><Cell col=\"9\" text=\"bind:DELETE_DT\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("withdraw_btn","516","684","129","33",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("삭제");
            obj.set_background("#2563eb");
            obj.set_borderRadius("4px");
            obj.set_color("white");
            obj.set_font("12px \"Noto Sans KR Black\"");
            this.addChild(obj.name, obj);

            obj = new Button("domant_btn","670","684","129","33",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("휴면복구");
            obj.set_background(" #9ca3af");
            obj.set_borderRadius("4px");
            obj.set_font("12px \"Noto Sans KR Black\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","grid_list","binddataset","ds_user","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Radio00","value","ds_search","STATUS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Edit00","value","ds_search","USER_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Edit00_00","value","ds_search","EMAIL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Calendar00","value","ds_search","JOIN_START_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Calendar00_00","value","ds_search","JOIN_END_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Calendar00_01","value","ds_search","DORMANT_START_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Calendar00_00_00","value","ds_search","DORMANT_END_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","Calendar00_01_00","value","ds_search","DELETE_START_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","Calendar00_00_00_00","value","ds_search","DELETE_END_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Member_withdrawAndDormant.xfdl", function() {

        this.Form_Member_withdrawAndDormant_onload = function(obj,e)
        {
        	this.fn_selectDormantWithdrawnMembers();
        };

        //검색버튼
        this.Button00_onclick = function(obj,e)
        {
        	this.fn_selectDormantWithdrawnMembers();
        };

        //초기화 버튼
        this.Button00_00_onclick = function(obj,e)
        {
        	this.reload();
        };


        //휴면, 탈퇴 회원  리스트 조회
        this.fn_selectDormantWithdrawnMembers = function(){

        	var strSvcID = "selectDormantWithdrawnMembers"
        	var setURL = "svc::/selectDormantWithdrawnMembersByAdmin.do";
        	var strInDatasets = "ds_search=ds_search";
        	var strOutDatasets = "ds_list=ds_list";
        	var strArg = "";
        	var callBack = "fn_callBack";
        	var inAsync = true;

        	this.transaction(strSvcID,setURL,strInDatasets,strOutDatasets,strArg,callBack,inAsync);
        }

        //삭제 버튼
        this.withdraw_btn_onclick = function(obj,e)
        {

        	// 트랜잭션 호출
        	var strSvcID = "withdrawMember"
        	var setURL = "svc::/withdrawMemberByAdmin.do";
        	var strInDatasets = "ds_list=ds_list";
        	var strOutDatasets = "";
        	var strArg = "";
        	var callBack = "fn_callBack";
        	var inAsync = true;

        	this.transaction(strSvcID,setURL,strInDatasets,strOutDatasets,strArg,callBack,inAsync);
        };

        //휴면 복구 버튼
        this.Button01_00_onclick = function(obj,e)
        {

            // 트랜잭션 호출
        	var strSvcID = "reactivateDormantMember"
        	var setURL = "svc::/reactivateDormantMemberByAdmin.do";
        	var strInDatasets = "ds_list=ds_list";
        	var strOutDatasets = "";
        	var strArg = "";
        	var callBack = "fn_callBack";
        	var inAsync = true;

        	this.transaction(strSvcID,setURL,strInDatasets,strOutDatasets,strArg,callBack,inAsync);

        };

        // 공통 콜백
        this.fn_callBack = function(svcID, errorCode, errorMSG){

        	if(errorCode == -1){
        		this.alert(errorMSG)
        	}

        	switch(svcID){
        	case "selectDormantWithdrawnMembers" :
        		console.log(this.ds_list.saveXML());
        		break;
        	case "withdrawMember" :
        		alert("회원이 탈퇴 처리되었습니다.");
        		this.fn_selectDormantWithdrawnMembers();
        		break;
        	case "reactivateDormantMember" :
        		alert("휴면 회원이 복구되었습니다.");
        		this.fn_selectDormantWithdrawnMembers();
        		break;

        	}

        }

        //체크박스 체크하기
        this.grid_list_oncellclick = function(obj,e)
        {
        	if(e.cell == 0){

        		if(this.ds_list.getColumn(this.ds_list.rowposition,"CHK") == 0){
        			this.ds_list.setColumn(this.ds_list.rowposition,"CHK", "0");
        			return;
        		}else{
        			this.ds_list.setColumn(this.ds_list.rowposition,"CHK", "1");
        			return;
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Member_withdrawAndDormant_onload,this);
            this.status.addEventHandler("onclick",this.Static00_onclick,this);
            this.status00.addEventHandler("onclick",this.Static00_onclick,this);
            this.status00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.status00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.status00_00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.status01.addEventHandler("onclick",this.Static00_onclick,this);
            this.Radio00.addEventHandler("onitemchanged",this.Radio00_onitemchanged,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button00_00.addEventHandler("onclick",this.Button00_00_onclick,this);
            this.grid_list.addEventHandler("oncellclick",this.grid_list_oncellclick,this);
            this.withdraw_btn.addEventHandler("onclick",this.withdraw_btn_onclick,this);
            this.domant_btn.addEventHandler("onclick",this.Button01_00_onclick,this);
        };
        this.loadIncludeScript("Form_Member_withdrawAndDormant.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
