(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_ProductOptionReg");
            this.set_titletext("옵션 등록/수정");
            this.set_background("#eff7ff");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_optionReg", this);
            obj._setContents("<ColumnInfo><Column id=\"OPTION_ID\" type=\"INT\"/><Column id=\"PRODUCT_ID\" type=\"INT\"/><Column id=\"OPTION_NAME\" type=\"STRING\"/><Column id=\"OPTION_VALUE\" type=\"STRING\"/><Column id=\"ADDITIONAL_PRICE\" type=\"INT\"/><Column id=\"INPUT_ID\" type=\"STRING\"/><Column id=\"UPDATE_ID\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_selectedProd", this);
            obj._setContents("<ColumnInfo><Column id=\"PRODUCT_ID\" type=\"INT\"/><Column id=\"PRODUCT_NAME\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_title","30","0","400","40",null,null,null,null,null,null,this);
            obj.set_text("옵션 등록/수정");
            obj.set_font("bold 16pt/normal \"맑은 고딕\"");
            obj.set_color("#232323");
            this.addChild(obj.name, obj);

            obj = new Static("sta_prodLabel","30","60","100","35",null,null,null,null,null,null,this);
            obj.set_text("선택된 상품 :  ");
            obj.set_font("bold 10pt/normal \"맑은 고딕\"");
            obj.set_color("#222222");
            obj.set_textAlign("right");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #102b6e");
            obj.set_borderRadius("6px");
            this.addChild(obj.name, obj);

            obj = new Static("sta_selectedProd","140","60","500","35",null,null,null,null,null,null,this);
            obj.set_text("상품을 검색하여 선택하세요.");
            obj.set_font("bold 11pt \'Arial\'");
            obj.set_color("#888888");
            obj.set_background("#f5f5f5");
            obj.set_border("1px solid #cccccc");
            obj.set_padding("0px 10px");
            obj.set_borderRadius("6px");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Button("btn_searchProd","660","60","120","35",null,null,null,null,null,null,this);
            obj.set_text("상품검색 🔍");
            obj.set_background("#ffffff");
            obj.set_color("#102b6e");
            obj.set_font("bold 10pt \'Arial\'");
            obj.set_borderRadius("6px");
            obj.set_border("1px solid #102b6e");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_option","30","130","1220","480",null,null,null,null,null,null,this);
            obj.set_binddataset("ds_optionReg");
            obj.set_autofittype("col");
            obj.set_border("1px solid #ffffff");
            obj.set_borderRadius("8px");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"150\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"36\"/></Rows><Band id=\"head\"><Cell text=\"No\" background=\"#ffffff\" font=\"bold 10pt/normal &quot;맑은 고딕&quot;\" border=\"1px solid #ffffff\"/><Cell col=\"1\" text=\"옵션명\" background=\"#ffffff\" font=\"bold 10pt/normal &quot;맑은 고딕&quot;\" border=\"1px solid #ffffff\"/><Cell col=\"2\" text=\"옵션값\" background=\"#ffffff\" font=\"bold 10pt/normal &quot;맑은 고딕&quot;\" border=\"1px solid #ffffff\"/><Cell col=\"3\" text=\"추가금액\" background=\"#ffffff\" font=\"bold 10pt/normal &quot;맑은 고딕&quot;\" border=\"1px solid #ffffff\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:OPTION_NAME\" edittype=\"text\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:OPTION_VALUE\" edittype=\"text\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:ADDITIONAL_PRICE\" edittype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addRow","30","660","100","36",null,null,null,null,null,null,this);
            obj.set_text("행추가");
            obj.set_background("#053a5b");
            obj.set_color("#ffffff");
            obj.set_font("bold 10pt/normal \"맑은 고딕\"");
            obj.set_borderRadius("6px");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delRow","140","660","100","36",null,null,null,null,null,null,this);
            obj.set_text("행삭제");
            obj.set_background("#7f0e0e");
            obj.set_color("#ffffff");
            obj.set_font("bold 10pt/normal \"맑은 고딕\"");
            obj.set_borderRadius("6px");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","1040","660","100","40",null,null,null,null,null,null,this);
            obj.set_text("저장");
            obj.set_background("#102b6e");
            obj.set_color("#ffffff");
            obj.set_font("bold 10pt/normal \"맑은 고딕\"");
            obj.set_borderRadius("6px");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel","1150","660","100","40",null,null,null,null,null,null,this);
            obj.set_text("취소");
            obj.set_background("#bbbbbb");
            obj.set_color("#ffffff");
            obj.set_font("bold 10pt/normal \"맑은 고딕\"");
            obj.set_borderRadius("6px");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("Form_ProductOptionReg.xfdl","common::common.xjs");
        this.registerScript("Form_ProductOptionReg.xfdl", function() {
        this.executeIncludeScript("common::common.xjs"); /*include "common::common.xjs"*/;

        this.Form_ProductOptionReg_onload = function(obj,e)
        {
            this.ds_optionReg.clearData();
            this.ds_selectedProd.clearData();

            var oArgs = this.getOwnerFrame().arguments;
            if (oArgs && oArgs.MODE == "UPDATE") {
                // 수정 모드
                this.transaction(
                    "selectOptionOneByAdmin",
                    "svc::selectOptionOneByAdmin.do?time=" + new Date().getTime(),
                    "",
                    "ds_optionReg=ds_optionReg",
                    "OPTION_ID=" + oArgs.OPTION_ID,
                    "fn_callback",
                    true
                );
                this.btn_addRow.set_visible(false);
                this.btn_delRow.set_visible(false);
        		this.sta_prodLabel.set_visible(false);
        		this.sta_selectedProd.set_visible(false);
        		this.btn_searchProd.set_visible(false);
                this.sta_title.set_text("옵션 [ 수정 ] 모드");
            }
            else {
                // 신규 등록 모드 → 기본 한 줄
                var nRow = this.ds_optionReg.addRow();
                this.ds_optionReg.setColumn(nRow, "ADDITIONAL_PRICE", 0);
                this.sta_title.set_text("옵션 [ 등록 ] 모드");
            }
        };


        // 상품검색 버튼 클릭 → 팝업 열기
        this.btn_searchProd_onclick = function(obj, e)
        {
        	var childFrame = new ChildFrame();
        	childFrame.init("ProductSearch",
        		(this.width / 2) - 300,
        		(this.height / 2) - 200,
        		600,400,
        		null, null, "product::Form_ProductSearch.xfdl");

        	childFrame.set_showtitlebar(true);
        	childFrame.set_showstatusbar(false);
        	childFrame.set_resizable(false);

        	childFrame.showModal(
        		this.getOwnerFrame(), // 부모 Frame
        		null, 				//argument 전달
        		this,	 			//콜백 받을 대상
        		"popupCallback"		//콜백 함수명
        	);
        };


        // 팝업 Callback (상품 선택 결과 반영)
        this.popupCallback = function(sPopupId, rtn)
        {
            if (sPopupId == "ProductSearch" && rtn) {
                var obj = JSON.parse(rtn);

                this.ds_selectedProd.clearData();
                var nRow = this.ds_selectedProd.addRow();
                this.ds_selectedProd.setColumn(nRow, "PRODUCT_ID", obj.PRODUCT_ID.hi);
                this.ds_selectedProd.setColumn(nRow, "PRODUCT_NAME", obj.PRODUCT_NAME);


                // 옵션 Dataset에도 바로 PRODUCT_ID 세팅
                for (var i=0; i<this.ds_optionReg.getRowCount(); i++) {
                    this.ds_optionReg.setColumn(i, "PRODUCT_ID", obj.PRODUCT_ID);
                }


        		// ★ 기존 옵션행 모두 PRODUCT_ID 세팅
                for (var i=0; i<this.ds_optionReg.getRowCount(); i++) {
                    this.ds_optionReg.setColumn(i, "PRODUCT_ID", obj.PRODUCT_ID);
                }


                this.sta_selectedProd.set_text(obj.PRODUCT_NAME);
                this.sta_selectedProd.set_color("#0d47a1");
                this.sta_selectedProd.set_font("bold 11pt 'Arial'");
            }
        };





        // 행추가
        this.btn_addRow_onclick = function()
        {
            var nRow = this.ds_optionReg.addRow();
            this.ds_optionReg.setColumn(nRow, "ADDITIONAL_PRICE", 0);


        	// ★ 상품이 이미 선택되어 있다면 PRODUCT_ID 바로 세팅
            if (this.ds_selectedProd.getRowCount() > 0) {
                var prodId = this.ds_selectedProd.getColumn(0, "PRODUCT_ID");
                this.ds_optionReg.setColumn(nRow, "PRODUCT_ID", prodId);
            }


        };

        // 행삭제
        this.btn_delRow_onclick = function()
        {
            var nRow = this.ds_optionReg.rowposition;
            if (nRow < 0) {
                this.alert("삭제할 행을 선택하세요.");
                return;
            }
            this.ds_optionReg.deleteRow(nRow);
        };


        // 저장
        this.btn_save_onclick = function()
        {
        	var oArgs = this.getOwnerFrame().arguments;
            if ( (oArgs && oArgs.MODE) !== "UPDATE" && this.ds_selectedProd.getRowCount() == 0) {
                this.alert("상품을 먼저 선택하세요.");
                return;
            }
            var prodId = this.ds_selectedProd.getRowCount() > 0
        			   ? this.ds_selectedProd.getColumn(0, "PRODUCT_ID")
        			   : this.ds_optionReg.getColumn(0, "PRODUCT_ID"); //수정모드 대비


            var app = nexacro.getApplication();

            for (var i=0; i<this.ds_optionReg.getRowCount(); i++) {
                // ★ PRODUCT_ID 강제 세팅
                this.ds_optionReg.setColumn(i, "PRODUCT_ID", prodId);

                // Validation
                var name  = this.ds_optionReg.getColumn(i, "OPTION_NAME");
                var val   = this.ds_optionReg.getColumn(i, "OPTION_VALUE");
                if (!name || name.trim() == "") {
                    this.alert("옵션명을 입력하세요. (행 " + (i+1) + ")");
                    return;
                }
                if (!val || val.trim() == "") {
                    this.alert("옵션값을 입력하세요. (행 " + (i+1) + ")");
                    return;
                }

                var price = this.ds_optionReg.getColumn(i, "ADDITIONAL_PRICE");
                if (price == null || price.toString().trim() == "" || isNaN(price)) {
                    this.ds_optionReg.setColumn(i, "ADDITIONAL_PRICE", 0);
                }

                // 등록/수정자 세팅
                if (this.ds_optionReg.getColumn(i, "OPTION_ID")) {
                    this.ds_optionReg.setColumn(i, "UPDATE_ID", app.loginUserId);
                } else {
                    this.ds_optionReg.setColumn(i, "INPUT_ID", app.loginUserId);
                }
            }

            if (!this.confirm("저장하시겠습니까?")) return;

            this.transaction(
                "saveOptionByAdmin",
                "svc::saveOptionByAdmin.do?time=" + new Date().getTime(),
                "ds_optionReg=ds_optionReg:U",
                "",
                "",
                "fn_callback",
                true
            );
        };



        // 취소
        this.btn_cancel_onclick = function()
        {
            var app = nexacro.getApplication();
            var workFrame = app.mainframe.VFrameSet00.HFrameSet00.VFrameSet01.WorkFrame;
            workFrame.arguments = { REFRESH: "Y"};
            workFrame.set_formurl("product::Form_ProductOption.xfdl");
        };


        // 콜백
        this.fn_callback = function(svcID, errCode, errMsg)
        {
            trace("=== fn_callback ===");
            trace("ServiceID=" + svcID + ", ErrorCode=" + errCode + ", ErrorMsg=" + errMsg);

            if (errCode < 0) {
                this.alert("에러: " + errMsg);
                return;
            }

            if (svcID == "saveOptionByAdmin") {
                this.alert("저장이 완료되었습니다.");
                this.btn_cancel_onclick();
            }
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_ProductOptionReg_onload,this);
            this.btn_searchProd.addEventHandler("onclick",this.btn_searchProd_onclick,this);
            this.btn_addRow.addEventHandler("onclick",this.btn_addRow_onclick,this);
            this.btn_delRow.addEventHandler("onclick",this.btn_delRow_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
        };
        this.loadIncludeScript("Form_ProductOptionReg.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
