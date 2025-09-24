(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_ProductSearch");
            this.set_titletext("상품 검색");
            this.set_border("0px none");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_searchCond", this);
            obj._setContents("<ColumnInfo><Column id=\"SEARCH_TEXT\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_prod", this);
            obj._setContents("<ColumnInfo><Column id=\"PRODUCT_ID\" type=\"INT\"/><Column id=\"PRODUCT_NAME\" type=\"STRING\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_search","465","20","80","30",null,null,null,null,null,null,this);
            obj.set_text("검색");
            obj.set_background("#0a1d4b");
            obj.set_color("#ffffff");
            obj.set_borderRadius("6px");
            obj.set_font("bold 10pt \'Arial\'");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_prod","55","70","490","300",null,null,null,null,null,null,this);
            obj.set_binddataset("ds_prod");
            obj.set_border("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"103\"/><Column size=\"351\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"상품ID\" background=\"#ffffff\"/><Cell col=\"1\" text=\"상품명\" background=\"#ffffff\"/></Band><Band id=\"body\"><Cell text=\"bind:PRODUCT_ID\" cursor=\"pointer\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:PRODUCT_NAME\" cursor=\"pointer\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_search","55","20","400","30",null,null,null,null,null,null,this);
            obj.set_visible("true");
            obj.set_displaynulltext("\"상품명을 입력하세요\"");
            obj.set_taborder("2");
            obj.set_text("상품명을 입력하세요.");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",600,400,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("Form_ProductSearch.xfdl","common::common.xjs");
        this.registerScript("Form_ProductSearch.xfdl", function() {
        this.executeIncludeScript("common::common.xjs"); /*include "common::common.xjs"*/;

        // onload 이벤트
        this.Form_ProductSearch_onload = function(obj,e)
        {
            this.ds_searchCond.clearData();

        	var nRow = this.ds_searchCond.addRow();
            this.ds_searchCond.setColumn(nRow, "SEARCH_TEXT", ""); // 빈 문자열 → 전체검색

            // 전체 상품 조회 transaction 실행
            this.transaction(
                "selectProductListOptionByAdmin",
                "svc::selectProductListOptionByAdmin.do",
                "ds_searchCond=ds_searchCond",   // inDataset
                "ds_prod=ds_prod",               // outDataset
                "",
                "fn_callback",
                true
            );

        };

        this.btn_search_onclick = function(obj,e)
        {
            this.ds_searchCond.clearData();
            var nRow = this.ds_searchCond.addRow();
            this.ds_searchCond.setColumn(nRow, "SEARCH_TEXT", this.edt_search.value);

            this.transaction(
                "selectProductListOptionByAdmin",
                "svc::selectProductListOptionByAdmin.do",
                "ds_searchCond=ds_searchCond",
                "ds_prod=ds_prod",
                "",
                "fn_callback",
                true
            );
        };



        this.fn_callback = function(svcID, errCode, errMsg)
        {
            if (errCode < 0) {
                this.alert("에러: " + errMsg);
            }
        };

        this.grd_prod_oncellclick = function(obj,e)
        {
        	    var nRow = e.row;
            if (nRow < 0) return;

            var prodId   = this.ds_prod.getColumn(nRow, "PRODUCT_ID");
            var prodName = this.ds_prod.getColumn(nRow, "PRODUCT_NAME");

            var rtn = JSON.stringify({PRODUCT_ID: prodId, PRODUCT_NAME: prodName});
            this.close(rtn);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_ProductSearch_onload,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.grd_prod.addEventHandler("oncellclick",this.grd_prod_oncellclick,this);
        };
        this.loadIncludeScript("Form_ProductSearch.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
