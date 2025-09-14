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
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cate_sub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_option", this);
            obj._setContents("<ColumnInfo><Column id=\"OPT_NAME\" type=\"STRING\"/><Column id=\"OPT_VALUE\" type=\"STRING\"/><Column id=\"ADD_PRICE\" type=\"INT\"/><Column id=\"STOCK\" type=\"INT\"/></ColumnInfo>");
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

            obj = new Radio("rdo_display","140","66","300","64",null,null,null,null,null,null,this);
            obj.set_innerdataset("ds_display");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_font("normal 11pt \'Gulim\'");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_sale","470","66","300","64",null,null,null,null,null,null,this);
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

            obj = new TextArea("txt_desc","140","375","800","80",null,null,null,null,null,null,this);
            obj.set_displaynulltext("상세 설명 작성");
            obj.set_borderRadius("6px");
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

            obj = new Static("sta_img","40","880","80","32",null,null,null,null,null,null,this);
            obj.set_text("이미지");
            obj.set_font("bold 12pt \'Gulim\'");
            obj.set_color("#222222");
            this.addChild(obj.name, obj);

            obj = new Button("btn_imgUpload","140","875","120","30",null,null,null,null,null,null,this);
            obj.set_text("이미지 등록");
            obj.set_background("#000000");
            obj.set_color("#ffffff");
            obj.set_borderRadius("6px");
            obj.set_font("bold 11pt \'Gulim\'");
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
            this.fn_loadCategory();
            this.ds_option.addRow();
        };

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

            var strSvcId = "insertProduct";
            var strUrl = "svc::insertProduct.do";
            var strIn = "ds_option=ds_option";
            var strOut = "";
            var strArg = "";
            strArg += "PRODUCT_NAME=" + this.edt_name.value;
            strArg += " PRODUCT_DESC=" + this.txt_desc.value;
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

        this.btn_cancel_onclick = function(obj,e)
        {
            this.go("Form_ProductAdmin.xfdl");
        };

        this.fn_callback = function(strSvcId, nErrorCode, strErrorMag)
        {
            if (nErrorCode < 0) {
                this.alert("오류: " + strErrorMag);
                return;
            }

            switch(strSvcId){
                case "insertProduct":
                    this.alert("상품등록이 완료되었습니다.");
                    this.go("Form_ProductAdmin.xfdl");
                    break;
                case "selectCategory":
                    break;
            }
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_ProductReg_onload,this);
        };
        this.loadIncludeScript("Form_ProductReg.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
