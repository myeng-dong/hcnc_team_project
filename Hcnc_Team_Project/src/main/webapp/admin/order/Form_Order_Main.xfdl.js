(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Order_Main");
            this.set_titletext("New Form");
            this.set_background("#F4F7FE");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_order", this);
            obj._setContents("<ColumnInfo><Column id=\"ORDER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ORDER_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"ORDER_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"ORDER_DT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DISCOUNT_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"FINAL_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PAYMENT_METHOD\" type=\"STRING\" size=\"256\"/><Column id=\"SHIPPING_POST\" type=\"STRING\" size=\"256\"/><Column id=\"SHIPPING_ADDR_1\" type=\"STRING\" size=\"256\"/><Column id=\"SHIIPPING_ADDR_2\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"START_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"END_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ORDER_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"PAYMENT_STATUS\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("search_area","40","50",null,"140","40",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#ffffff");
            obj.set_borderRadius("10px");
            this.addChild(obj.name, obj);

            obj = new Grid("grid_list","40","120",null,"410","40",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#FFFFFF");
            obj.set_border("0px none");
            obj.set_borderRadius("10px");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_order");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"ORDER_ID\"/><Cell col=\"1\" text=\"ORDER_NUMBER\"/><Cell col=\"2\" text=\"PHONE_NUMBER\"/><Cell col=\"3\" text=\"ORDER_STATUS\"/><Cell col=\"4\" text=\"ORDER_DT\"/><Cell col=\"5\" text=\"TOTAL_AMOUNT\"/><Cell col=\"6\" text=\"DISCOUNT_AMOUNT\"/><Cell col=\"7\" text=\"FINAL_AMOUNT\"/><Cell col=\"8\" text=\"PAYMENT_METHOD\"/><Cell col=\"9\" text=\"SHIPPING_POST\"/><Cell col=\"10\" text=\"SHIPPING_ADDR_1\"/><Cell col=\"11\" text=\"SHIIPPING_ADDR_2\"/><Cell col=\"12\" text=\"UPDATE_DT\"/></Band><Band id=\"body\"><Cell text=\"bind:ORDER_ID\"/><Cell col=\"1\" text=\"bind:ORDER_NUMBER\"/><Cell col=\"2\" text=\"bind:PHONE_NUMBER\"/><Cell col=\"3\" text=\"bind:ORDER_STATUS\"/><Cell col=\"4\" text=\"bind:ORDER_DT\"/><Cell col=\"5\" text=\"bind:TOTAL_AMOUNT\"/><Cell col=\"6\" text=\"bind:DISCOUNT_AMOUNT\"/><Cell col=\"7\" text=\"bind:FINAL_AMOUNT\"/><Cell col=\"8\" text=\"bind:PAYMENT_METHOD\"/><Cell col=\"9\" text=\"bind:SHIPPING_POST\"/><Cell col=\"10\" text=\"bind:SHIPPING_ADDR_1\"/><Cell col=\"11\" text=\"bind:SHIIPPING_ADDR_2\"/><Cell col=\"12\" text=\"bind:UPDATE_DT\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","grid_list","binddataset","ds_user","");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Order_Main.xfdl", function() {
        //온로드시
        this.Form_Order_Main_onload = function(obj,e)
        {
        	this.fnSearchOrders();
        };


        // 주문 내역 조회
        this.fnSearchOrders = function() {
            var strSvcID       = "selectOrders";
            var strURL         = "svc::selectOrderListByAdmin.do";  // Spring Controller 매핑
            var strInDatasets  = "";
            var strOutDatasets = "ds_orders=ds_orders";
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
        		case selectOrders  :

        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Order_Main_onload,this);
        };
        this.loadIncludeScript("Form_Order_Main.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
