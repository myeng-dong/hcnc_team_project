(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_PromoList");
            this.set_titletext("New Form");
            this.set_background("#F4F7FE");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,640);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_promo_list", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"PROMOTION_ID\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"PROMOTION_NAME\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"PROMOTION_TYPE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"DESCRIPTION\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"START_DT\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"END_DT\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"IS_ACTIVE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"INPUT_DT\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"UPDATE_DT\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"INPUT_ID\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"AUTO_ISSUED\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"P_COUPON_CODE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"ISSUED_DT\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"EXPIRY_DT\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"IS_USED\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"DISCOUNT_ID\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"DISCOUNT_TYPE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"DISCOUNT_VALUE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"MIN_ORDER_PRICE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"TARGET_ID\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"TARGET_TYPE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"TARGET_VALUE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"TARGET_AMOUNT\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grid_list","40","213",null,null,"40","90",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#FFFFFF");
            obj.set_border("0px none");
            obj.set_borderRadius("10px");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_promo_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/><Column size=\"201\"/><Column size=\"99\"/><Column size=\"117\"/><Column size=\"144\"/><Column size=\"138\"/><Column size=\"91\"/><Column size=\"92\"/><Column size=\"84\"/><Column size=\"84\"/><Column size=\"55\"/></Columns><Rows><Row size=\"48\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"NO\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"2\" text=\"프로모션 이름\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"3\" text=\"타겟\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"4\" text=\"타입\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"5\" text=\"시작일\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"6\" text=\"종료일\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"7\" text=\"지급방식\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"8\" text=\"활성화여부\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"9\" text=\"작성일\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"10\" text=\"최근수정일\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"11\" text=\"설정\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/></Band><Band id=\"body\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"expr:currow + 1\"/><Cell col=\"2\" text=\"bind:PROMOTION_NAME\"/><Cell col=\"3\" text=\"bind:TARGET_VALUE\"/><Cell col=\"4\" text=\"bind:PROMOTION_TYPE\"/><Cell col=\"5\" edittype=\"normal\" text=\"bind:ISSUED_DT\"/><Cell col=\"6\" text=\"bind:EXPIRY_DT\"/><Cell col=\"7\" text=\"bind:AUTO_ISSUED\"/><Cell col=\"8\" edittype=\"normal\" text=\"bind:IS_ACTIVE\"/><Cell col=\"9\" text=\"bind:INPUT_DT\"/><Cell col=\"10\" edittype=\"normal\" text=\"bind:UPDATE_DT\"/><Cell col=\"11\" edittype=\"button\" displaytype=\"buttoncontrol\" text=\"관리\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("search_area","40","30",null,"170","40",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#ffffff");
            obj.set_borderRadius("10px");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("search_tit","20","3","60","41",null,null,null,null,null,null,this.search_area.form);
            obj.set_taborder("0");
            obj.set_text("프로모션명");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR Bold\"");
            obj.set_color("#2b3674");
            this.search_area.addChild(obj.name, obj);

            obj = new Static("Static00","93","15","2","20",null,null,null,null,null,null,this.search_area.form);
            obj.set_taborder("1");
            obj.set_background("#cccccc");
            obj.set_text("");
            this.search_area.addChild(obj.name, obj);

            obj = new Static("Static00_00","93","52","2","20",null,null,null,null,null,null,this.search_area.form);
            obj.set_taborder("2");
            obj.set_background("#cccccc");
            obj.set_text("");
            this.search_area.addChild(obj.name, obj);

            obj = new Static("search_tit00","20","42","60","41",null,null,null,null,null,null,this.search_area.form);
            obj.set_taborder("3");
            obj.set_text("타입");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR Bold\"");
            obj.set_color("#2b3674");
            this.search_area.addChild(obj.name, obj);

            obj = new Edit("edit_search","110","14","260","25",null,null,null,null,null,null,this.search_area.form);
            obj.set_taborder("4");
            this.search_area.addChild(obj.name, obj);

            obj = new Combo("Combo00","110","52","260","25",null,null,null,null,null,null,this.search_area.form);
            obj.set_taborder("5");
            obj.set_text("Combo00");
            this.search_area.addChild(obj.name, obj);

            obj = new Static("search_tit00_00","20","81","60","41",null,null,null,null,null,null,this.search_area.form);
            obj.set_taborder("6");
            obj.set_text("진행상태");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR Bold\"");
            obj.set_color("#2b3674");
            this.search_area.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","93","89","2","20",null,null,null,null,null,null,this.search_area.form);
            obj.set_taborder("7");
            obj.set_background("#cccccc");
            obj.set_text("");
            this.search_area.addChild(obj.name, obj);

            obj = new Radio("Radio00","110","90","380","20",null,null,null,null,null,null,this.search_area.form);
            obj.set_taborder("8");
            this.search_area.addChild(obj.name, obj);

            obj = new Button("btn_reset","639","155","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("초기화");
            obj.set_borderRadius("5px");
            obj.set_background("#8e8e8e");
            obj.set_color("white");
            obj.set_font("normal 11pt/normal \"Noto Sans KR Medium\"");
            obj.set_textAlign("center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Button("btn_select","520","155","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("조회");
            obj.set_borderRadius("5px");
            obj.set_background("#135dae");
            obj.set_color("white");
            obj.set_font("normal 11pt/normal \"Noto Sans KR Medium\"");
            obj.set_textAlign("center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Button("btn_write",null,null,"100","30","40","40",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("등록");
            obj.set_borderRadius("5px");
            obj.set_background("#135dae");
            obj.set_color("white");
            obj.set_font("normal 11pt/normal \"Noto Sans KR Medium\"");
            obj.set_textAlign("center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,640,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","grid_list","binddataset","ds_user","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","search_area.form.edit_search","value","ds_search","SEARCH_TEXT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_PromotionList.xfdl", function() {
        this.Form_PromoList_onload = function(obj,e)
        {
        	trace("진행중인 프로모션 리스트 확인용>>>>");
        };

        this.btn_write_onclick = function(obj,e)
        {
        	this.getOwnerFrame().set_formurl("promotion::Form_PromotionWrite.xfdl");
        };

        this.grid_list_oncellclick = function(obj, e) {
            if(e.cell == 11){ // 리뷰 열 클릭
                var promotionId = this.ds_promo_list.getColumn(e.row,"PROMOTION_ID")
        		this.getOwnerFrame().arguments = {"PROMOTION_ID" : promotionId}
        		this.getOwnerFrame().set_formurl("promotion::Form_PromotionView.xfdl");
            }
        };

        // 프로모션리스트
        this.fnSearchReview = function() {
            var strSvcID       = "selectPromoListByAdmin";
            var strURL         = "svc::selectPromoListByAdmin.do";
            var strInDatasets  = "";
            var strOutDatasets = "ds_list=ds_list";
            var strArg         = ""; // 필요 시 조건 전달 (예: USER_ID=xxx)
            var strCallback    = "fnCallback";

            this.transaction(strSvcID, strURL, strInDatasets, strOutDatasets, strArg, strCallback);
        };

        // 공통 콜백
        this.fnCallback = function(svc, err, errMsg) {
            if (err < 0) {
                this.alert("에러 발생: " + errMsg);

                return;
            }
            switch(svc){
        		case "selectPromoListByAdmin"  :

        		return;

        	}
        };



        // 조회용 하단에 잠시 넣어
        this.fnInitCommonCode = function()
        {
            // 할인유형 콤보박스 설정
            this.cboDiscountType.set_codecolumn("CODE");
            this.cboDiscountType.set_datacolumn("CODE_NAME");
            this.cboDiscountType.set_innerdataset(this.dsDiscountType);

            this.dsDiscountType.addRow();
            this.dsDiscountType.setColumn(0, "CODE", "R");
            this.dsDiscountType.setColumn(0, "CODE_NAME", "할인율(%)");
            this.dsDiscountType.addRow();
            this.dsDiscountType.setColumn(1, "CODE", "A");
            this.dsDiscountType.setColumn(1, "CODE_NAME", "할인금액(원)");

            // 적용대상유형 콤보박스 설정
            this.cboTargetType.set_codecolumn("CODE");
            this.cboTargetType.set_datacolumn("CODE_NAME");
            this.cboTargetType.set_innerdataset(this.dsTargetType);

            this.dsTargetType.addRow();
            this.dsTargetType.setColumn(0, "CODE", "PRODUCT");
            this.dsTargetType.setColumn(0, "CODE_NAME", "상품");
            this.dsTargetType.addRow();
            this.dsTargetType.setColumn(1, "CODE", "CATEGORY");
            this.dsTargetType.setColumn(1, "CODE_NAME", "카테고리");
            this.dsTargetType.addRow();
            this.dsTargetType.setColumn(2, "CODE", "MEMBER_GRADE");
            this.dsTargetType.setColumn(2, "CODE_NAME", "회원등급");

            // 활성화여부 콤보박스 설정
            this.cboIsActive.set_codecolumn("CODE");
            this.cboIsActive.set_datacolumn("CODE_NAME");
            this.cboIsActive.set_innerdataset(this.dsActiveYN);

            this.dsActiveYN.addRow();
            this.dsActiveYN.setColumn(0, "CODE", "Y");
            this.dsActiveYN.setColumn(0, "CODE_NAME", "활성");
            this.dsActiveYN.addRow();
            this.dsActiveYN.setColumn(1, "CODE", "N");
            this.dsActiveYN.setColumn(1, "CODE_NAME", "비활성");
        };

        this.fn_gradeSearch = function(){

        	var strSvcID = "selectMemberGradeList"
        	var setURL = "svc::selectMemberGradeListByAdmin.do";
        	var strInDatasets = "";
        	var strOutDatasets = "ds_grade=ds_grade";
        	var strArg = "";
        	var callBack = "fn_callBack";
        	var inAsync = true;

        	this.transaction(strSvcID,setURL,strInDatasets,strOutDatasets,strArg,callBack,inAsync);
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_PromoList_onload,this);
            this.search_area.form.search_tit.addEventHandler("onclick",this.search_area_search_txt01_onclick,this);
            this.search_area.form.search_tit00.addEventHandler("onclick",this.search_area_search_txt01_onclick,this);
            this.search_area.form.search_tit00_00.addEventHandler("onclick",this.search_area_search_txt01_onclick,this);
            this.btn_reset.addEventHandler("onclick",this.search_area_btn_reset_onclick,this);
            this.btn_select.addEventHandler("onclick",this.search_area_btn_select_onclick,this);
            this.btn_write.addEventHandler("onclick",this.btn_write_onclick,this);
        };
        this.loadIncludeScript("Form_PromotionList.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
