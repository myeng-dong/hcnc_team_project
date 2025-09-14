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
            obj._setContents("<ColumnInfo><Column id=\"MAIN_CATE_ID\" type=\"BIGDECIMAL\"/><Column id=\"MAIN_CATE_NM\" type=\"STRING\"/><Column id=\"SORT_NUMBER\" type=\"INT\"/><Column id=\"IS_ACTIVE\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cate_sub", this);
            obj._setContents("<ColumnInfo><Column id=\"SUB_CATE_ID\" type=\"BIGDECIMAL\"/><Column id=\"MAIN_CATE_ID\" type=\"BIGDECIMAL\"/><Column id=\"SUB_CATE_NM\" type=\"STRING\"/><Column id=\"SORT_NUMBER\" type=\"INT\"/><Column id=\"IS_ACTIVE\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_product", this);
            obj._setContents("<ColumnInfo><Column id=\"PRODUCT_ID\" type=\"BIGDECIMAL\"/><Column id=\"SUB_CATE_ID\" type=\"BIGDECIMAL\"/><Column id=\"PRODUCT_NAME\" type=\"STRING\"/><Column id=\"PRODUCT_CODE\" type=\"STRING\"/><Column id=\"PRODUCT_DESC\" type=\"STRING\"/><Column id=\"PRODUCT_PRICE\" type=\"INT\"/><Column id=\"COST_PRICE\" type=\"INT\"/><Column id=\"IS_VISIBLE\" type=\"STRING\"/><Column id=\"KEYWORD\" type=\"STRING\"/><Column id=\"MEMO\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_option", this);
            obj._setContents("<ColumnInfo><Column id=\"OPTION_ID\" type=\"BIGDECIMAL\"/><Column id=\"PRODUCT_ID\" type=\"BIGDECIMAL\"/><Column id=\"OPTION_NAME\" type=\"STRING\"/><Column id=\"OPTION_VALUE\" type=\"STRING\"/><Column id=\"ADDITIONAL_PRICE\" type=\"INT\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inventory", this);
            obj._setContents("<ColumnInfo><Column id=\"INVENTORY_ID\" type=\"BIGDECIMAL\"/><Column id=\"PRODUCT_ID\" type=\"BIGDECIMAL\"/><Column id=\"OPTION_ID\" type=\"BIGDECIMAL\"/><Column id=\"QUANTITY\" type=\"INT\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_product_img", this);
            obj._setContents("<ColumnInfo><Column id=\"IMAGE_ID\" type=\"BIGDECIMAL\"/><Column id=\"PRODUCT_ID\" type=\"BIGDECIMAL\"/><Column id=\"IMAGE_URL\" type=\"STRING\"/><Column id=\"ALT_TEXT\" type=\"STRING\"/><Column id=\"SORT_NUMBER\" type=\"INT\"/><Column id=\"IS_MAIN\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_title","20","10","400","40",null,null,null,null,null,null,this);
            obj.set_text("상품관리 || 상품등록");
            obj.set_font("bold 16pt \'Gulim\'");
            obj.set_color("#111111");
            this.addChild(obj.name, obj);

            obj = new Static("box_display","20","60","1240","80",null,null,null,null,null,null,this);
            obj.set_background("#ffffff");
            obj.set_border("1px solid #e0e0e0");
            obj.set_borderRadius("10px");
            obj.getSetter("shadow").set("1px 1px 6px #cccccc");
            this.addChild(obj.name, obj);

            obj = new Static("sta_display","40","88","80","32",null,null,null,null,null,null,this);
            obj.set_text("표시 설정");
            obj.set_font("bold 12pt \'Gulim\'");
            obj.set_color("#222222");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_display","140","66","190","64",null,null,null,null,null,null,this);
            obj.set_innerdataset("ds_display");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_font("normal 11pt \'Gulim\'");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_sale","470","66","160","64",null,null,null,null,null,null,this);
            obj.set_innerdataset("ds_sale");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_font("normal 11pt \'Gulim\'");
            this.addChild(obj.name, obj);

            obj = new Static("box_category","20","150","1240","70",null,null,null,null,null,null,this);
            obj.set_background("#ffffff");
            obj.set_border("1px solid #e0e0e0");
            obj.set_borderRadius("10px");
            obj.getSetter("shadow").set("1px 1px 6px #cccccc");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_category","40","173","80","32",null,null,null,null,null,null,this);
            obj.set_text("상품분류");
            obj.set_font("bold 12pt \'Gulim\'");
            obj.set_color("#222222");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_maincate","140","170","200","30",null,null,null,null,null,null,this);
            obj.set_innerdataset("ds_cate_main");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_font("normal 11pt \'Gulim\'");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_subcate","360","170","200","30",null,null,null,null,null,null,this);
            obj.set_innerdataset("ds_cate_sub");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_font("normal 11pt \'Gulim\'");
            this.addChild(obj.name, obj);

            obj = new Static("box_basic","20","240","1240","280",null,null,null,null,null,null,this);
            obj.set_background("#ffffff");
            obj.set_border("1px solid #e0e0e0");
            obj.set_borderRadius("10px");
            obj.getSetter("shadow").set("1px 1px 6px #cccccc");
            this.addChild(obj.name, obj);

            obj = new Static("sta_basic","40","260","80","32",null,null,null,null,null,null,this);
            obj.set_text("기본 정보");
            obj.set_font("bold 12pt \'Gulim\'");
            obj.set_color("#222222");
            this.addChild(obj.name, obj);

            obj = new Static("sta_name","60","300","80","32",null,null,null,null,null,null,this);
            obj.set_text("상품명");
            obj.set_font("normal 11pt \'Gulim\'");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name","140","295","400","30",null,null,null,null,null,null,this);
            obj.set_displaynulltext("상품명 입력");
            obj.set_borderRadius("6px");
            obj.set_font("normal 11pt \'Gulim\'");
            this.addChild(obj.name, obj);

            obj = new Static("sta_code","60","340","80","32",null,null,null,null,null,null,this);
            obj.set_text("상품코드");
            obj.set_font("normal 11pt \'Gulim\'");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_code","140","335","400","30",null,null,null,null,null,null,this);
            obj.set_enable("false");
            obj.set_borderRadius("6px");
            obj.set_font("normal 11pt \'Gulim\'");
            obj.set_text("자동생성");
            this.addChild(obj.name, obj);

            obj = new Static("sta_desc","60","380","80","32",null,null,null,null,null,null,this);
            obj.set_text("상세설명");
            obj.set_font("normal 11pt \'Gulim\'");
            this.addChild(obj.name, obj);

            obj = new Static("sta_keyword","60","470","80","32",null,null,null,null,null,null,this);
            obj.set_text("검색어");
            obj.set_font("normal 11pt \'Gulim\'");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_keyword","140","465","800","30",null,null,null,null,null,null,this);
            obj.set_displaynulltext("검색어 입력(, 로 구분)");
            obj.set_borderRadius("6px");
            obj.set_font("normal 11pt \'Gulim\'");
            this.addChild(obj.name, obj);

            obj = new Static("box_saleinfo","20","540","1240","100",null,null,null,null,null,null,this);
            obj.set_background("#ffffff");
            obj.set_border("1px solid #e0e0e0");
            obj.set_borderRadius("10px");
            obj.getSetter("shadow").set("1px 1px 6px #cccccc");
            this.addChild(obj.name, obj);

            obj = new Static("sta_saleinfo","40","560","80","32",null,null,null,null,null,null,this);
            obj.set_text("판매 정보");
            obj.set_font("bold 12pt \'Gulim\'");
            obj.set_color("#222222");
            this.addChild(obj.name, obj);

            obj = new Static("sta_price","60","588","80","32",null,null,null,null,null,null,this);
            obj.set_text("판매가");
            obj.set_font("normal 11pt \'Gulim\'");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_price","140","595","200","30",null,null,null,null,null,null,this);
            obj.set_borderRadius("6px");
            obj.set_font("normal 11pt \'Gulim\'");
            this.addChild(obj.name, obj);

            obj = new Static("sta_supply","360","598","50","24",null,null,null,null,null,null,this);
            obj.set_text("공급가");
            obj.set_font("normal 11pt \'Gulim\'");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_supply","420","595","200","30",null,null,null,null,null,null,this);
            obj.set_borderRadius("6px");
            obj.set_font("normal 11pt \'Gulim\'");
            this.addChild(obj.name, obj);

            obj = new Static("box_option","20","660","1240","180",null,null,null,null,null,null,this);
            obj.set_background("#ffffff");
            obj.set_border("1px solid #e0e0e0");
            obj.set_borderRadius("10px");
            obj.getSetter("shadow").set("1px 1px 6px #cccccc");
            this.addChild(obj.name, obj);

            obj = new Static("sta_option","40","680","80","32",null,null,null,null,null,null,this);
            obj.set_text("옵션/재고");
            obj.set_font("bold 12pt \'Gulim\'");
            obj.set_color("#222222");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_option","40","710","1180","110",null,null,null,null,null,null,this);
            obj.set_binddataset("ds_option");
            obj.set_autofittype("col");
            obj.set_borderRadius("6px");
            obj.set_border("1px solid #dddddd");
            obj.set_font("normal 11pt \'Gulim\'");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Static("box_imgmemo","20","860","1240","200",null,null,null,null,null,null,this);
            obj.set_background("#ffffff");
            obj.set_border("1px solid #e0e0e0");
            obj.set_borderRadius("10px");
            obj.getSetter("shadow").set("1px 1px 6px #cccccc");
            this.addChild(obj.name, obj);

            obj = new Static("sta_memo","40","930","80","32",null,null,null,null,null,null,this);
            obj.set_text("메모");
            obj.set_font("bold 12pt \'Gulim\'");
            obj.set_color("#222222");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_memo","140","925","800","80",null,null,null,null,null,null,this);
            obj.set_borderRadius("6px");
            obj.set_font("normal 11pt \'Gulim\'");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","900","1100","150","40",null,null,null,null,null,null,this);
            obj.set_text("저장");
            obj.set_background("#000000");
            obj.set_color("#ffffff");
            obj.set_borderRadius("8px");
            obj.set_font("bold 12pt \'Gulim\'");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel","1070","1100","150","40",null,null,null,null,null,null,this);
            obj.set_text("취소");
            obj.set_background("#444444");
            obj.set_color("#ffffff");
            obj.set_borderRadius("8px");
            obj.set_font("bold 12pt \'Gulim\'");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("wb_detailDesc","139","370","801","81",null,null,null,null,null,null,this);
            obj.set_taborder("35");
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
        this.Form_ProductReg_onload = function(obj,e)
        {
            var html = "<!DOCTYPE html>" +
                       "<html><head>" +
                       "<script src='https://cdn.ckeditor.com/4.22.1/full/ckeditor.js'></script>" +
                       "</head><body>" +
                       "<textarea id='editor1'></textarea>" +
                       "<script>" +
                       " CKEDITOR.replace('editor1', {" +
                       "     height: 350," +
                       "     filebrowserUploadUrl: '/uploadImageProductByAdmin.do'," +
                       "     filebrowserUploadMethod: 'form'" +
                       " });" +
                       "</script>" +
                       "</body></html>";

            this.wb_detailDesc.set_html(html);

            this.fn_loadCategory();
            this.ds_option.addRow();
        };

        // CKEditor 본문 내용 가져오기
        this.fn_getEditorContent = function()
        {
            var doc = this.wb_detailDesc.getProperty("document");
            var content = doc.parentWindow.CKEDITOR.instances['editor1'].getData();
            return content;
        };

        // 카테고리 조회
        this.fn_loadCategory = function()
        {
            var strSvcId = "selectCategory";
            var strUrl = "svc::selectCategory.do";
            var strIn = "";
            var strOut = "ds_cate_main=ds_cate_main ds_cate_sub=ds_cate_sub";
            var strArg = "";
            var callBack = "fn_callback";
            var bAsync = true;
            this.transaction(strSvcId, strUrl, strIn, strOut, strArg, callBack, bAsync);
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

            var desc = this.fn_getEditorContent();

            var strSvcId = "insertProduct";
            var strUrl = "svc::insertProduct.do";
            var strIn = "ds_option=ds_option";
            var strOut = "ds_out_product=ds_out_product";
            var strArg = "";
            strArg += "PRODUCT_NAME=" + this.edt_name.value;
            strArg += " PRODUCT_DESC=" + desc;
            strArg += " PRODUCT_PRICE=" + this.edt_price.value;
            strArg += " COST_PRICE=" + this.edt_supply.value;
            strArg += " KEYWORD=" + this.edt_keyword.value;
            strArg += " DISP_YN=" + this.rdo_display.value;
            strArg += " SALE_YN=" + this.rdo_sale.value;
            strArg += " MAIN_CATE=" + this.cmb_maincate.value;
            strArg += " SUB_CATE=" + this.cmb_subcate.value;
            strArg += " MEMO=" + this.txt_memo.value;

            var callBack = "fn_callback";
            var bAsync = true;
            this.transaction(strSvcId, strUrl, strIn, strOut, strArg, callBack, bAsync);
        };

        // 취소 버튼
        this.btn_cancel_onclick = function(obj,e)
        {
            this.go("product::Form_Product.xfdl");
        };

        // 공통 콜백
        this.fn_callback = function(strSvcId, nErrorCode, strErrorMag)
        {
            if (nErrorCode < 0) {
                this.alert("오류: " + strErrorMag);
                return;
            }

            switch(strSvcId){
                case "insertProduct":
                    var newProductId = this.ds_out_product.getColumn(0, "PRODUCT_ID");
                    this.alert("상품등록이 완료되었습니다. 상품번호: " + newProductId);

                    // 이미지 매핑 및 대표이미지 지정
                    this.fn_updateImageMapping(newProductId);

                    this.go("product::Form_Product.xfdl");
                    break;

                case "selectCategory":
                    break;

                case "updateProductImageMapping":
                    trace("이미지 매핑 및 대표 지정 완료");
                    break;
            }
        };

        // 업로드된 이미지 PRODUCT_ID 매핑 및 대표 지정
        this.fn_updateImageMapping = function(productId)
        {
            var strSvcId = "updateProductImageMapping";
            var strUrl = "svc::updateProductImageMapping.do";
            var strIn = "";
            var strOut = "";
            var strArg = "";
            strArg += "PRODUCT_ID=" + productId;
            strArg += " UPDATE_ID=admin";

            var callBack = "fn_callback";
            var bAsync = true;
            this.transaction(strSvcId, strUrl, strIn, strOut, strArg, callBack, bAsync);
        };

        // 이미지 버튼
        this.btn_imgUpload_onclick = function(obj,e)
        {
            this.alert("이미지는 상세설명 CKEditor에서 업로드하세요.");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_ProductReg_onload,this);
            this.rdo_display.addEventHandler("onitemchanged",this.rdo_display_onitemchanged,this);
            this.wb_detailDesc.addEventHandler("onusernotify",this.wb_detailDesc_onusernotify,this);
        };
        this.loadIncludeScript("Form_ProductReg.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
