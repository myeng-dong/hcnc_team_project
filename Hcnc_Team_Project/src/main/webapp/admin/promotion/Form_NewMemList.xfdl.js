(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_ReviewList");
            this.set_titletext("New Form");
            this.set_background("#F4F7FE");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,630);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search_combo", this);
            obj._setContents("<ColumnInfo><Column id=\"SEARCH_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SEARCH_TYPE\">상품코드</Col></Row><Row><Col id=\"SEARCH_TYPE\">상품명</Col></Row><Row><Col id=\"SEARCH_TYPE\">아이디</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_issued", this);
            obj._setContents("<ColumnInfo><Column id=\"ISSUED_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ISSUED_STATUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ISSUED_CODE\">지급</Col><Col id=\"ISSUED_STATUE\">Y</Col></Row><Row><Col id=\"ISSUED_STATUE\">N</Col><Col id=\"ISSUED_CODE\">미지급</Col></Row><Row><Col id=\"ISSUED_CODE\">전체</Col><Col id=\"ISSUED_STATUE\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("search_area","40","20",null,"130","40",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#ffffff");
            obj.set_borderRadius("10px");
            this.addChild(obj.name, obj);

            obj = new Static("search_tit","20","3","60","41",null,null,null,null,null,null,this.search_area.form);
            obj.set_taborder("0");
            obj.set_text("검색분류");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR Bold\"");
            obj.set_color("#2b3674");
            this.search_area.addChild(obj.name, obj);

            obj = new Static("Static00","82","15","2","20",null,null,null,null,null,null,this.search_area.form);
            obj.set_taborder("1");
            obj.set_background("#cccccc");
            obj.set_text("");
            this.search_area.addChild(obj.name, obj);

            obj = new Radio("radio_issued","96","49","304","30",null,null,null,null,null,null,this.search_area.form);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_issued");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_font("normal 10pt/normal \"Noto Sans KR Medium\"");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.search_area.addChild(obj.name, obj);

            obj = new Static("Static00_00","83","54","2","20",null,null,null,null,null,null,this.search_area.form);
            obj.set_taborder("3");
            obj.set_background("#cccccc");
            obj.set_text("");
            this.search_area.addChild(obj.name, obj);

            obj = new Static("search_tit00","21","42","60","41",null,null,null,null,null,null,this.search_area.form);
            obj.set_taborder("4");
            obj.set_text("지급유무");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR Bold\"");
            obj.set_color("#2b3674");
            this.search_area.addChild(obj.name, obj);

            obj = new Combo("review_info","96","14","114","25",null,null,null,null,null,null,this.search_area.form);
            obj.set_taborder("5");
            obj.set_innerdataset("ds_search_combo");
            obj.set_codecolumn("SEARCH_TYPE");
            obj.set_datacolumn("SEARCH_TYPE");
            obj.set_text("상품코드");
            obj.set_value("상품코드");
            obj.set_index("0");
            this.search_area.addChild(obj.name, obj);

            obj = new Edit("edit_search","220","14","161","25",null,null,null,null,null,null,this.search_area.form);
            obj.set_taborder("6");
            this.search_area.addChild(obj.name, obj);

            obj = new Button("btn_reset","559","105","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("초기화");
            obj.set_borderRadius("5px");
            obj.set_background("#8e8e8e");
            obj.set_color("white");
            obj.set_font("normal 11pt/normal \"Noto Sans KR Medium\"");
            obj.set_textAlign("center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Button("btn_select","440","105","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_borderRadius("5px");
            obj.set_background("#135dae");
            obj.set_color("white");
            obj.set_font("normal 11pt/normal \"Noto Sans KR Medium\"");
            obj.set_textAlign("center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Grid("pointAndCoupon","35","200",null,null,"30","30",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("#FFFFFF");
            obj.set_border("0px none");
            obj.set_borderRadius("10px");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"52\"/><Column size=\"126\"/><Column size=\"100\"/><Column size=\"83\"/><Column size=\"91\"/><Column size=\"107\"/><Column size=\"152\"/><Column size=\"146\"/><Column size=\"73\"/><Column size=\"152\"/><Column size=\"132\"/></Columns><Rows><Row size=\"48\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"NO\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"1\" text=\"쿠폰코드\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"2\" text=\"쿠폰종류\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"3\" text=\"할인방식\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"4\" text=\"할인값\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"5\" text=\"최소주문금액\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"6\" text=\"발급일\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"7\" text=\"만료일\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"8\" text=\"사용여부\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"9\" text=\"사용일자\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"10\" text=\"주문번호\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\" font=\"12px/normal &quot;LG Smart UI Bold&quot;\"/><Cell col=\"1\" text=\"bind:COUPON_CODE\" textAlign=\"center\" font=\"12px/normal &quot;LG Smart UI Bold&quot;\"/><Cell col=\"2\" text=\"bind:COUPON_TYPE\" textAlign=\"center\" font=\"12px/normal &quot;LG Smart UI Bold&quot;\"/><Cell col=\"3\" text=\"bind:DISCOUNT_UNIT\" textAlign=\"center\" font=\"12px/normal &quot;LG Smart UI Bold&quot;\"/><Cell col=\"4\" edittype=\"normal\" text=\"bind:DISCOUNT_VALUE\" textAlign=\"center\" font=\"12px/normal &quot;LG Smart UI Bold&quot;\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"none\" font=\"12px/normal &quot;LG Smart UI Bold&quot;\" text=\"bind:MIN_ORDER_PRICE\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:ISSUED_DT\" font=\"12px/normal &quot;LG Smart UI Bold&quot;\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:EXPIRY_DT\" font=\"12px/normal &quot;LG Smart UI Bold&quot;\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:IS_USED\" font=\"12px/normal &quot;LG Smart UI Bold&quot;\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:USED_DT\" font=\"12px/normal &quot;LG Smart UI Bold&quot;\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:ORDER_NUMBER\" font=\"12px/normal &quot;LG Smart UI Bold&quot;\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1080,630,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","search_area.form.edit_search","value","ds_search","SEARCH_TEXT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","pointAndCoupon","binddataset","ds_user","");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_NewMemList.xfdl", function() {
        this.Form_ReviewList_onload = function(obj,e)
        {
        	this.fnSearchReview();
        	trace("리뷰이벤트 출력여부 확인용>>>");
        };

        this.grid_list_oncellclick = function(obj, e) {
            if(e.cell == 8){ // 리뷰 열 클릭
                var row = e.row;
                var popup = new nexacro.ChildFrame();
                var surl = "promotion::Form_ReviewDetail.xfdl";
                popup.init("openPop", 300, 100, 800, 700, null, null, surl);
                popup.set_dragmovetype("all");
                popup.set_showtitlebar(true);

                // 선택 리뷰 정보 전달 - REVIEW_ID를 문자열로 변환
                popup.arguments = {
                    REVIEW_ID: String(this.ds_review_list.getColumn(row,"REVIEW_ID")),
                    MEMBER_ID: this.ds_review_list.getColumn(row,"MEMBER_ID"),
                    ORDER_ID: String(this.ds_review_list.getColumn(row,"ORDER_ID")),
                    PRODUCT_NAME: this.ds_review_list.getColumn(row,"PRODUCT_NAME"),
                    REVIEW_TITLE: this.ds_review_list.getColumn(row,"REVIEW_TITLE"),
                    REVIEW_CONTENT: this.ds_review_list.getColumn(row,"REVIEW_CONTENT")
                };
                popup.showModal(this.getOwnerFrame(), null, this, "fn_popCallback", true);
            }
        };

        // 리뷰리스트
        this.fnSearchReview = function() {
            var strSvcID       = "selectReview";
            var strURL         = "svc::selectProductReviewListByAdmin.do";
            var strInDatasets  = "";
            var strOutDatasets = "ds_review_list=ds_review_list";
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
        		case "selectReview"  :

        		return;

        	}
        };

        // 팝업공통 콜백
        this.fn_popCallback = function(svcID, strVal){
        	switch(svcID){
        		case "openReviewPop":
        			if(strVal){
        				this._selectedReview = strVal;
        				trace("팝업에서 선택된 리뷰: " + JSON.stringify(this._selectedReview));
        				// Dataset 준비
        				this.fn_prepareAddPointDataset();
        				// 서버 전송
        				this.fn_callAddPointTransaction();
        			}
        		break;
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_ReviewList_onload,this);
            this.search_area.form.search_tit.addEventHandler("onclick",this.search_area_search_txt01_onclick,this);
            this.search_area.form.search_tit00.addEventHandler("onclick",this.search_area_search_txt01_onclick,this);
            this.btn_reset.addEventHandler("onclick",this.search_area_btn_reset_onclick,this);
            this.btn_select.addEventHandler("onclick",this.search_area_btn_select_onclick,this);
            this.pointAndCoupon.addEventHandler("oncellclick",this.pointAndCoupon_oncellclick,this);
        };
        this.loadIncludeScript("Form_NewMemList.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
