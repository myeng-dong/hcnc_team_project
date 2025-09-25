(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_memberCouponDetail");
            this.set_titletext("New Form");
            this.set_background("lightBlue");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"COUPON_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"COUPON_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DISCOUNT_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DISCOUNT_VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"MIN_ORDER_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"ISSUED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"EXPIRY_DT\" type=\"STRING\" size=\"256\"/><Column id=\"IS_USED\" type=\"STRING\" size=\"256\"/><Column id=\"USED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ORDER_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"COUPON_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"IS_USED\" type=\"STRING\" size=\"256\"/><Column id=\"COUPON_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"EXPIRY_START_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"EXPIRY_END_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISSUED_START_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISSUED_END_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"MEMBER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_use", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"IS_USED\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">사용</Col><Col id=\"IS_USED\">Y</Col></Row><Row><Col id=\"CODE\">미사용</Col><Col id=\"IS_USED\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("point_detail_box","25","14","1210","213",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("white");
            obj.set_text("");
            obj.set_borderRadius("8px");
            this.addChild(obj.name, obj);

            obj = new Grid("coupon","25","245",null,"411","45",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#FFFFFF");
            obj.set_border("0px none");
            obj.set_borderRadius("10px");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"52\"/><Column size=\"145\"/><Column size=\"160\"/><Column size=\"145\"/><Column size=\"84\"/><Column size=\"91\"/><Column size=\"94\"/><Column size=\"159\"/><Column size=\"146\"/><Column size=\"70\"/><Column size=\"140\"/><Column size=\"145\"/></Columns><Rows><Row size=\"48\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"NO\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"1\" text=\"쿠폰코드\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"2\" text=\"쿠폰 명\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"3\" text=\"쿠폰종류\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"4\" text=\"할인방식\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"5\" text=\"할인값\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"6\" text=\"최소주문금액\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"7\" text=\"발급일\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"8\" text=\"만료일\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"9\" text=\"사용여부\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"10\" text=\"사용일자\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"11\" text=\"주문번호\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\" font=\"12px/normal &quot;LG Smart UI Bold&quot;\"/><Cell col=\"1\" text=\"bind:COUPON_CODE\" textAlign=\"center\" font=\"12px/normal &quot;LG Smart UI Bold&quot;\"/><Cell col=\"2\" text=\"bind:COUPON_NAME\" font=\"12px/normal &quot;LG Smart UI Bold&quot;\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:COUPON_TYPE\" textAlign=\"center\" font=\"12px/normal &quot;LG Smart UI Bold&quot;\"/><Cell col=\"4\" text=\"bind:DISCOUNT_UNIT\" textAlign=\"center\" font=\"12px/normal &quot;LG Smart UI Bold&quot;\"/><Cell col=\"5\" edittype=\"normal\" text=\"bind:DISCOUNT_VALUE\" textAlign=\"center\" font=\"12px/normal &quot;LG Smart UI Bold&quot;\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"none\" font=\"12px/normal &quot;LG Smart UI Bold&quot;\" text=\"bind:MIN_ORDER_PRICE\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:ISSUED_DT\" font=\"12px/normal &quot;LG Smart UI Bold&quot;\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:EXPIRY_DT\" font=\"12px/normal &quot;LG Smart UI Bold&quot;\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:IS_USED\" font=\"12px/normal &quot;LG Smart UI Bold&quot;\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:USED_DT\" font=\"12px/normal &quot;LG Smart UI Bold&quot;\" textAlign=\"center\" calendardisplaynulltype=\"none\" displaytype=\"date\"/><Cell col=\"11\" text=\"bind:ORDER_NUMBER\" font=\"12px/normal &quot;LG Smart UI Bold&quot;\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","43","30","66",null,null,"663",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("사용 여부");
            obj.set_font("14px/normal \"Noto Sans KR Black\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","43","67","66",null,null,"626",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("쿠폰 종류");
            obj.set_font("14px/normal \"Noto Sans KR Black\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","43","110","66",null,null,"583",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("발급일자");
            obj.set_font("14px/normal \"Noto Sans KR Black\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","43","157","66",null,null,"536",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("만료일자");
            obj.set_font("14px/normal \"Noto Sans KR Black\"");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","120","31","204","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_innerdataset("ds_use");
            obj.set_codecolumn("IS_USED");
            obj.set_datacolumn("CODE");
            obj.set_direction("vertical");
            obj.set_font("12px/normal \"Noto Sans KR Black\"");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","116","62","900","36",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","119","110","409","32",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","550","110","469","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","528","113",null,"24","724",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("~");
            obj.set_textAlign("center");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar02","120","155","408","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","526","160",null,null,"726","536",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("~");
            obj.set_textAlign("center");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar03","551","157","469","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Button("back_btn","556","666","104","28",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("뒤로가기");
            obj.set_background("#2563eb");
            obj.set_borderRadius("4px");
            obj.set_color("white");
            obj.set_font("12px/normal \"Noto Sans KR Black\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","450","197","78","24",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("조회하기");
            obj.set_background("#2563eb");
            obj.set_borderRadius("4px");
            obj.set_color("white");
            obj.set_font("12px/normal \"Noto Sans KR Black\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","542","198","78","22",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("초기화");
            obj.set_background(" #9ca3af");
            obj.set_borderRadius("4px");
            obj.set_font("12px/normal \"Noto Sans KR Black\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","680","666","98","28",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("쿠폰 지급");
            obj.set_borderRadius("4px");
            obj.set_color("black");
            obj.set_font("12px/normal \"Noto Sans KR Black\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","coupon","binddataset","ds_user","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Radio00","value","ds_search","IS_USED");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Edit00","value","ds_search","COUPON_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Calendar00","value","ds_search","ISSUED_START_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Calendar01","value","ds_search","ISSUED_END_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Calendar02","value","ds_search","EXPIRY_START_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Calendar03","value","ds_search","EXPIRY_END_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("Form_memberCouponDetail.xfdl","common::common.xjs");
        this.registerScript("Form_memberCouponDetail.xfdl", function() {
        this.executeIncludeScript("common::common.xjs"); /*include "common::common.xjs"*/;
        this.memberId="";
        this.Form_memberCouponDetail_onload = function(obj,e)
        {

        	// 부모 Frame에서 arguments 꺼내오기
        	var ownerFrame = this.getOwnerFrame();
        	var memberId = ownerFrame.arguments["MEMBER_ID"];

        	this.ds_search.setColumn(0, "MEMBER_ID", memberId);
        	this.fn_selectPointDetailList();
        };


        //회원 포인트 상세 리스트 조회
        this.fn_selectPointDetailList= function(){

        	var strSvcID = "selectCouponDetail"
        	var setURL = "svc::/selectCouponDetailListByAdmin.do";
        	var strInDatasets = "ds_search=ds_search";
        	var strOutDatasets = "ds_list=ds_list";
        	var strArg = ""
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
        	case "selectCouponDetail" :
        		console.log(this.ds_list.saveXML());
        		break;

        	}

        }

        //뒤로가기
        this.back_btn_onclick = function(obj,e)
        {
        	this.getOwnerFrame().set_formurl("member::Form_MemberPointAndCoupon.xfdl");
        };

        //검색하기
        this.Button00_onclick = function(obj,e)
        {
        	this.fn_selectPointDetailList();
        };

        //초기화
        this.Button01_onclick = function(obj,e)
        {
        	this.reload();
        };


        //쿠폰 지급 눌렀을 때 팝업창 띄우기
        this.Button02_onclick = function(obj,e)
        {

        	var memberId = this.ds_search.getColumn(0, "MEMBER_ID");

            var surl = "member::Form_MemberCouponInsert.xfdl";
            var param = { MEMBER_ID: memberId };

            // 디버깅용 로그 추가
            trace("팝업 호출 시 전달할 MEMBER_ID: " + memberId);

            var popup = new nexacro.ChildFrame();
            popup.init("updatePop", 0, 0, 800, 700, null, null, surl);
            popup.set_dragmovetype("all");
            popup.set_showtitlebar(true);
            popup.set_titletext("쿠폰 지급");

            // 두 번째 인자로 param을 전달
            popup.showModal(this.getOwnerFrame(), param, this, "fn_popCallback");
        };


        //팝업 콜백
        this.fn_popCallback = function(svcID, strVal){
        	switch(svcID){
        	case "updatePop":
        		this.fn_selectPointDetailList();
        		break;
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_memberCouponDetail_onload,this);
            this.coupon.addEventHandler("oncellclick",this.pointAndCoupon_oncellclick,this);
            this.Calendar00.addEventHandler("onchanged",this.Calendar00_onchanged,this);
            this.back_btn.addEventHandler("onclick",this.back_btn_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
        };
        this.loadIncludeScript("Form_memberCouponDetail.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
