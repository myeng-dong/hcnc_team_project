(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Product");
            this.set_titletext("상품관리");
            this.set_background("#f4f7fe");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_out_proList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"INT\" size=\"256\"/><Column id=\"PRODUCT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_CONTENT\" type=\"STRING\" size=\"1000\"/><Column id=\"COST_PRICE\" type=\"INT\" size=\"256\"/><Column id=\"PRODUCT_PRICE\" type=\"INT\" size=\"256\"/><Column id=\"ADDITIONAL_PRICE\" type=\"INT\" size=\"256\"/><Column id=\"TOTAL_PRICE\" type=\"INT\" size=\"256\"/><Column id=\"MAIN_CATE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_CATE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPTION_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"OPTION_VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"IS_VISIBLE\" type=\"STRING\" size=\"256\"/><Column id=\"QUANTITY\" type=\"INT\" size=\"256\"/><Column id=\"INV_OPTION_ID\" type=\"INT\" size=\"256\"/><Column id=\"INPUT_DT\" type=\"DATETIME\" size=\"256\"/><Column id=\"UPDATE_DT\" type=\"DATETIME\" size=\"256\"/><Column id=\"PRODUCT_ID\" type=\"INT\" size=\"256\"/><Column id=\"OPTION_ID\" type=\"INT\" size=\"256\"/><Column id=\"INPUT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("Tab00","30","48",null,"712","30",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("Tabpage1");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("Tabpage2");
            this.Tab00.addChild(obj.name, obj);

            obj = new Grid("grid_list","25","125",null,"465","25",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#FFFFFF");
            obj.set_border("0px none");
            obj.set_borderRadius("10px");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_out_proList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"26\"/><Column size=\"24\"/><Column size=\"61\"/><Column size=\"107\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"37\"/></Columns><Rows><Row size=\"48\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"전체\"/><Cell col=\"1\" rowspan=\"2\" text=\"NO\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"2\" rowspan=\"2\" text=\"상품코드\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"3\" rowspan=\"2\" text=\"상품명\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"4\" colspan=\"2\" text=\"상품분류\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"6\" colspan=\"2\" text=\"옵션\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"8\" rowspan=\"2\" text=\"프로젝트 타입관리\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell row=\"1\" col=\"4\" text=\"대분류\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell row=\"1\" col=\"5\" text=\"중분류\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell row=\"1\" col=\"6\" text=\"옵션\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell row=\"1\" col=\"7\" text=\"세부사항\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" background=\"#ffffff\" textAlign=\"center\" edittype=\"checkbox\" text=\"bind:chk\"/><Cell col=\"1\" text=\"expr:currow + 1\" background=\"#ffffff\" font=\"12px/normal &quot;Gulim&quot;\" textAlign=\"center\" edittype=\"none\"/><Cell col=\"2\" background=\"#ffffff\" text=\"bind:PRODUCT_CODE\" font=\"12px/normal &quot;Gulim&quot;\" textAlign=\"center\" edittype=\"none\"/><Cell col=\"3\" background=\"#ffffff\" text=\"bind:PRODUCT_NAME\" font=\"12px/normal &quot;Gulim&quot;\" textAlign=\"center\" edittype=\"none\"/><Cell col=\"4\" edittype=\"none\" background=\"#ffffff\" text=\"bind:MAIN_CATE_NM\" font=\"12px/normal &quot;Gulim&quot;\" textAlign=\"center\"/><Cell col=\"5\" edittype=\"none\" background=\"#ffffff\" text=\"bind:SUB_CATE_NM\" font=\"12px/normal &quot;Gulim&quot;\" textAlign=\"center\"/><Cell col=\"6\" background=\"#ffffff\" text=\"bind:OPTION_NAME\" font=\"12px/normal &quot;Gulim&quot;\" textAlign=\"center\" edittype=\"none\"/><Cell col=\"7\" edittype=\"none\" background=\"#ffffff\" text=\"bind:OPTION_VALUE\" font=\"12px/normal &quot;Gulim&quot;\" textAlign=\"center\"/><Cell col=\"8\" edittype=\"none\" background=\"#ffffff\" font=\"12px/normal &quot;Gulim&quot;\" textAlign=\"center\"/></Band></Format></Formats>");
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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Product_onload,this);
            this.addEventHandler("ontimer",this.Form_Product_ontimer,this);
            this.grid_list.addEventHandler("onkeydown",this.grid_list_onkeydown,this);
            this.grid_list.addEventHandler("onkillfocus",this.grid_list_onkillfocus,this);
            this.grid_list.addEventHandler("oncellclick",this.grid_list_oncellclick,this);
            this.ds_out_proList.addEventHandler("oncolumnchanged",this.ds_out_proList_oncolumnchanged,this);
        };
        this.loadIncludeScript("Form_ProductType.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
