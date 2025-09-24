(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_ProductReg");
            this.set_titletext("상품등록");
            this.set_background("#f5f7fa");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,1490);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_display", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\"/><Column id=\"name\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"code\">Y</Col><Col id=\"name\">진열함</Col></Row><Row><Col id=\"code\">N</Col><Col id=\"name\">진열안함</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sale", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\"/><Column id=\"name\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"code\">Y</Col><Col id=\"name\">판매함</Col></Row><Row><Col id=\"code\">N</Col><Col id=\"name\">판매안함</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cate_main", this);
            obj._setContents("<ColumnInfo><Column id=\"MAIN_CATE_ID\" type=\"BIGDECIMAL\"/><Column id=\"MAIN_CATE_NM\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cate_sub", this);
            obj._setContents("<ColumnInfo><Column id=\"SUB_CATE_ID\" type=\"BIGDECIMAL\"/><Column id=\"MAIN_CATE_ID\" type=\"BIGDECIMAL\"/><Column id=\"SUB_CATE_NM\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_product", this);
            obj._setContents("<ColumnInfo><Column id=\"PRODUCT_ID\" type=\"BIGDECIMAL\"/><Column id=\"SUB_CATE_ID\" type=\"BIGDECIMAL\"/><Column id=\"PRODUCT_NAME\" type=\"STRING\"/><Column id=\"PRODUCT_CODE\" type=\"STRING\"/><Column id=\"PRODUCT_DESC\" type=\"STRING\"/><Column id=\"PRODUCT_PRICE\" type=\"INT\"/><Column id=\"COST_PRICE\" type=\"INT\"/><Column id=\"IS_VISIBLE\" type=\"STRING\"/><Column id=\"KEYWORD\" type=\"STRING\"/><Column id=\"MEMO\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_selOptions", this);
            obj._setContents("<ColumnInfo><Column id=\"OPTION_ID\" type=\"BIGDECIMAL\"/><Column id=\"PRODUCT_ID\" type=\"BIGDECIMAL\"/><Column id=\"OPTION_NAME\" type=\"STRING\"/><Column id=\"OPTION_VALUE\" type=\"STRING\"/><Column id=\"ADDITIONAL_PRICE\" type=\"INT\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_out_product", this);
            obj._setContents("<ColumnInfo><Column id=\"PRODUCT_ID\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_title","20","10","220","40",null,null,null,null,null,null,this);
            obj.set_text("상품관리 || 상품등록");
            obj.set_font("bold 16pt \'Gulim\'");
            obj.set_color("#111111");
            this.addChild(obj.name, obj);

            obj = new Static("box_display","20","60","1240","80",null,null,null,null,null,null,this);
            obj.set_background("#ffffff");
            obj.set_border("1px solid #e0e0e0");
            obj.set_borderRadius("10px");
            this.addChild(obj.name, obj);

            obj = new Static("sta_display","40","88","100","25",null,null,null,null,null,null,this);
            obj.set_text("표시 설정");
            obj.set_font("bold 12pt \'Gulim\'");
            obj.set_color("#222222");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_display","140","66","190","64",null,null,null,null,null,null,this);
            obj.set_innerdataset("ds_display");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_sale","470","66","160","64",null,null,null,null,null,null,this);
            obj.set_innerdataset("ds_sale");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            this.addChild(obj.name, obj);

            obj = new Static("box_category","20","150","1240","70",null,null,null,null,null,null,this);
            obj.set_background("#ffffff");
            obj.set_border("1px solid #e0e0e0");
            obj.set_borderRadius("10px");
            this.addChild(obj.name, obj);

            obj = new Static("sta_category","40","173","100","25",null,null,null,null,null,null,this);
            obj.set_text("상품분류");
            obj.set_font("bold 12pt \'Gulim\'");
            obj.set_color("#222222");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_maincate","140","170","200","30",null,null,null,null,null,null,this);
            obj.set_innerdataset("ds_cate_main");
            obj.set_codecolumn("MAIN_CATE_ID");
            obj.set_datacolumn("MAIN_CATE_NM");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_subcate","360","170","200","30",null,null,null,null,null,null,this);
            obj.set_innerdataset("ds_cate_sub");
            obj.set_codecolumn("SUB_CATE_ID");
            obj.set_datacolumn("SUB_CATE_NM");
            this.addChild(obj.name, obj);

            obj = new Static("box_basic","20","240","1240","280",null,null,null,null,null,null,this);
            obj.set_background("#ffffff");
            obj.set_border("1px solid #e0e0e0");
            obj.set_borderRadius("10px");
            this.addChild(obj.name, obj);

            obj = new Static("sta_basic","40","260","100","25",null,null,null,null,null,null,this);
            obj.set_text("기본 정보");
            obj.set_font("bold 12pt \'Gulim\'");
            obj.set_color("#222222");
            this.addChild(obj.name, obj);

            obj = new Static("sta_name","60","300","100","25",null,null,null,null,null,null,this);
            obj.set_text("상품명");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name","140","295","400","30",null,null,null,null,null,null,this);
            obj.set_displaynulltext("상품명 입력");
            this.addChild(obj.name, obj);

            obj = new Static("sta_code","60","340","100","25",null,null,null,null,null,null,this);
            obj.set_text("상품코드");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_code","140","335","400","30",null,null,null,null,null,null,this);
            obj.set_enable("false");
            obj.set_text("자동생성");
            this.addChild(obj.name, obj);

            obj = new Static("sta_desc","60","380","100","25",null,null,null,null,null,null,this);
            obj.set_text("상세설명");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("wb_detailDesc","140","370","800","80",null,null,null,null,null,null,this);
            this.addChild(obj.name, obj);

            obj = new Static("sta_keyword","60","470","100","25",null,null,null,null,null,null,this);
            obj.set_text("검색어");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_keyword","140","465","800","30",null,null,null,null,null,null,this);
            obj.set_displaynulltext("검색어 입력(, 로 구분)");
            this.addChild(obj.name, obj);

            obj = new Static("box_saleinfo","20","550","1240","100",null,null,null,null,null,null,this);
            obj.set_background("#ffffff");
            obj.set_border("1px solid #e0e0e0");
            obj.set_borderRadius("10px");
            this.addChild(obj.name, obj);

            obj = new Static("sta_saleinfo","40","560","100","25",null,null,null,null,null,null,this);
            obj.set_text("판매 정보");
            obj.set_font("bold 12pt \'Gulim\'");
            this.addChild(obj.name, obj);

            obj = new Static("sta_price","150","588","0","0",null,null,null,null,null,null,this);
            obj.set_text("판매가");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_price","210","595","200","30",null,null,null,null,null,null,this);
            this.addChild(obj.name, obj);

            obj = new Static("sta_supply","430","598","0","0",null,null,null,null,null,null,this);
            obj.set_text("공급가");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_supply","490","595","200","30",null,null,null,null,null,null,this);
            this.addChild(obj.name, obj);

            obj = new Static("box_option","20","660","1240","120",null,null,null,null,null,null,this);
            obj.set_background("#ffffff");
            obj.set_border("1px solid #e0e0e0");
            obj.set_borderRadius("10px");
            this.addChild(obj.name, obj);

            obj = new Static("sta_option","40","680","100","25",null,null,null,null,null,null,this);
            obj.set_text("옵션");
            obj.set_font("bold 12pt \'Gulim\'");
            this.addChild(obj.name, obj);

            obj = new Button("btn_optionSelect","150","675","100","30",null,null,null,null,null,null,this);
            obj.set_text("옵션 선택");
            this.addChild(obj.name, obj);

            obj = new Div("div_selectedOptions","270","675","950","100",null,null,null,null,null,null,this);
            obj.set_background("#ffffff");
            obj.getSetter("scrollbars").set("autoboth");
            this.addChild(obj.name, obj);

            obj = new Static("box_imgmemo","20","800","1240","200",null,null,null,null,null,null,this);
            obj.set_background("#ffffff");
            obj.set_border("1px solid #e0e0e0");
            obj.set_borderRadius("10px");
            this.addChild(obj.name, obj);

            obj = new Static("sta_memo","40","930","100","25",null,null,null,null,null,null,this);
            obj.set_text("메모");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_memo","140","925","800","80",null,null,null,null,null,null,this);
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","900","1100","150","40",null,null,null,null,null,null,this);
            obj.set_text("저장");
            obj.set_background("#000000");
            obj.set_color("#ffffff");
            obj.set_borderRadius("8px");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel","1070","1100","150","40",null,null,null,null,null,null,this);
            obj.set_text("취소");
            obj.set_background("#444444");
            obj.set_color("#ffffff");
            obj.set_borderRadius("8px");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,1490,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_ProductReg.xfdl", function() {
        // CKEditor 적용
        this.Form_ProductReg_onload = function(obj,e)
        {
            var html = "<!DOCTYPE html>" +
                       "<html><head>" +
                       "<script src='https://cdn.ckeditor.com/4.22.1/full/ckeditor.js'></script>" +
                       "</head><body>" +
                       "<textarea id='editor1'></textarea>" +
                       "<script>" +
                       " CKEDITOR.replace('editor1', { height: 350, filebrowserUploadUrl: '/uploadImageProductByAdmin.do', filebrowserUploadMethod: 'form' });" +
                       "</script>" +
                       "</body></html>";
            this.wb_detailDesc.set_html(html);
            this.fn_loadCategory();
        };

        // CKEditor 본문 가져오기
        this.fn_getEditorContent = function() {
            var doc = this.wb_detailDesc.getProperty("document");
            return doc.parentWindow.CKEDITOR.instances['editor1'].getData();
        };

        // 카테고리 조회
        this.fn_loadCategory = function() {
            this.transaction("selectCategory", "svc::selectCategory.do", "", "ds_cate_main=ds_cate_main ds_cate_sub=ds_cate_sub", "", "fn_callback", true);
        };


        // 저장 버튼 클릭
        this.btn_save_onclick = function(obj,e)
        {
            if (this.edt_name.value == null || this.edt_name.value == "") {
                this.alert("상품명을 입력하세요.");
                return;
            }
            if (this.edt_price.value == null || this.edt_price.value == "") {
                this.alert("판매가를 입력하세요.");
                return;
            }

            // CKEditor 본문 가져오기
            var desc = this.fn_getEditorContent();

            // ds_product 구성 (단일행)
            this.ds_product.clearData();
            var nRow = this.ds_product.addRow();
            this.ds_product.setColumn(nRow, "PRODUCT_NAME", this.edt_name.value);
            this.ds_product.setColumn(nRow, "PRODUCT_CONTENT", desc);
            this.ds_product.setColumn(nRow, "PRODUCT_PRICE", this.edt_price.value);
            this.ds_product.setColumn(nRow, "COST_PRICE", this.edt_supply.value);
            this.ds_product.setColumn(nRow, "KEYWORD", this.edt_keyword.value);
            this.ds_product.setColumn(nRow, "IS_VISIBLE", this.rdo_display.value);
            this.ds_product.setColumn(nRow, "SALE_YN", this.rdo_sale.value);
            this.ds_product.setColumn(nRow, "SUB_CATE_ID", this.cmb_subcate.value);
            this.ds_product.setColumn(nRow, "MEMO", this.txt_memo.value);
            this.ds_product.setColumn(nRow, "INPUT_ID", "admin"); // 추후 세션 연동 가능

            // 트랜잭션 호출
            var strSvcId = "insertProductByAdmin";
            var strUrl = "svc::insertProductByAdmin.do";

            // IN/OUT Dataset 매핑
            var strIn  = "ds_product=ds_product ds_selOptions=ds_selOptions ds_inventory=ds_inventory";
            var strOut = "ds_out_product=ds_out_product";

            var strArg = "";
            var callBack = "fn_callback";
            var bAsync = true;

            this.transaction(strSvcId, strUrl, strIn, strOut, strArg, callBack, bAsync);
        };


        // 취소 버튼
        this.btn_cancel_onclick = function(obj,e) {
            this.go("product::Form_Product.xfdl");
        };

        // 콜백
        this.fn_callback = function(svcID, errCode, errMsg) {
            if (errCode < 0) { this.alert("오류: " + errMsg); return; }

            switch(svcID){
        		case "selectCategory":

        			break;
        		case "insertProductByAdmin":
                    var newProductId = this.ds_out_product.getColumn(0, "PRODUCT_ID");
                    this.alert("상품등록이 완료되었습니다. 상품번호: " + newProductId);

                    // 이미지 매핑
                    this.fn_updateImageMapping(newProductId);

                    // 상품 목록 화면으로 이동
                    this.go("product::Form_Product.xfdl");
                    break;

                case "updateProductImageMappingByAdmin":
                    trace("이미지 매핑 및 대표 지정 완료");
                    break;
                case "insertOptionsByAdmin":
                    this.alert("옵션 등록 완료");
                    this.go("product::Form_Product.xfdl");
                    break;
            }
        };

        // 이미지 매핑
        this.fn_updateImageMapping = function(productId) {
            var strArg = "PRODUCT_ID=" + productId + " UPDATE_ID=admin";
            this.transaction("updateProductImageMappingByAdmin", "svc::updateProductImageMappingByAdmin.do", "", "", strArg, "fn_callback", true);
        };

        // 옵션 팝업 열기
        this.btn_optionSelect_onclick = function() {
            var objChild = new ChildFrame();
            objChild.init("OptionPop", 200, 100, 600, 400, null, null, "Form::Form_ProductOptionSelect.xfdl");
            objChild.set_titletext("옵션 선택");
            objChild.showModal(this.getOwnerFrame(), null, this, "fn_optionCallback");
        };

        // 팝업 콜백
        this.fn_optionCallback = function(sId, sArg) {
            if (sId == "OptionPop" && sArg) {
                var arr = JSON.parse(sArg);
                this.ds_selOptions.clearData();
                for (var i=0; i<arr.length; i++) {
                    var nRow = this.ds_selOptions.addRow();
                    this.ds_selOptions.setColumn(nRow, "OPTION_NAME", arr[i].OPTION_NAME);
                    this.ds_selOptions.setColumn(nRow, "OPTION_VALUE", arr[i].OPTION_VALUE);
                    this.ds_selOptions.setColumn(nRow, "ADDITIONAL_PRICE", arr[i].ADDITIONAL_PRICE);
                }
                this.fn_drawOptionTags();
            }
        };

        // 선택 옵션 태그 그리기
        this.fn_drawOptionTags = function() {
            var objDiv = this.div_selectedOptions.form;
            objDiv.removeAll();
            var maxWidth = this.div_selectedOptions.getOffsetWidth() - 20;
            var nLeft = 10, nTop = 8, tagWidth = 120, tagHeight = 30, gap = 10;

            for (var i=0; i<this.ds_selOptions.getRowCount(); i++) {
                var optName = this.ds_selOptions.getColumn(i, "OPTION_NAME");
                var objStatic = new Static("stc_opt_" + i, nLeft, nTop, 90, 24);
                objStatic.set_text(optName);
                objStatic.set_background("#f0f0f0");
                objStatic.set_border("1px solid #cccccc");
                objStatic.set_borderRadius("5px");
                objStatic.set_textAlign("center");
                objDiv.addChild(objStatic.name, objStatic);
                objStatic.show();

                var objBtn = new Button("btn_x_" + i, nLeft+95, nTop, 20, 24);
                objBtn.set_text("X"); objBtn.set_color("red"); objBtn.optRow = i;
                objBtn.addEventHandler("onclick", this.fn_removeOption, this);
                objDiv.addChild(objBtn.name, objBtn); objBtn.show();

                nLeft += tagWidth + gap;
                if (nLeft + tagWidth > maxWidth) { nLeft = 10; nTop += tagHeight + gap; }
            }
        };

        // 옵션 삭제
        this.fn_removeOption = function(obj,e) {
            this.ds_selOptions.deleteRow(obj.optRow);
            this.fn_drawOptionTags();
        };

        // 옵션 저장
        this.fn_insertOptions = function(productId) {
            for (var i=0; i<this.ds_selOptions.getRowCount(); i++) {
                this.ds_selOptions.setColumn(i, "PRODUCT_ID", productId);
            }
            this.transaction("insertOptionsByAdmin", "svc::insertOptionsByAdmin.do", "ds_selOptions=ds_selOptions", "", "", "fn_callback", true);
        };

        this.div_selectedOptions_onclick = function(obj,e)
        {
        	var objChild = new ChildFrame();
            objChild.init("OptionSelectPop", 200, 100, 800, 600, null, null, "product::Form_ProductOptionSelect.xfdl");
            objChild.set_titletext("옵션 선택");
            objChild.showModal(this.getOwnerFrame(), "", this, "fn_optionSelectCallback");
        };


        // 팝업 닫힌 후 콜백
        this.fn_optionSelectCallback = function(sPopupId, sRtn)
        {
            if (!sRtn) return;

            var arr = JSON.parse(sRtn);

            for (var i=0; i<arr.length; i++) {
                var row = this.ds_selOptions.addRow();
                this.ds_selOptions.setColumn(row, "OPTION_ID", arr[i].OPTION_ID);
                this.ds_selOptions.setColumn(row, "OPTION_NAME", arr[i].OPTION_NAME);
                this.ds_selOptions.setColumn(row, "OPTION_VALUE", arr[i].OPTION_VALUE);
                this.ds_selOptions.setColumn(row, "ADDITIONAL_PRICE", arr[i].ADDITIONAL_PRICE);
            }
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_ProductReg_onload,this);
            this.btn_optionSelect.addEventHandler("onclick",this.btn_optionSelect_onclick,this);
            this.div_selectedOptions.addEventHandler("onclick",this.div_selectedOptions_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
        };
        this.loadIncludeScript("Form_ProductReg.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
