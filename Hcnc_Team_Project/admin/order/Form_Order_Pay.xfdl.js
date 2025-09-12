(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Order_Pay");
            this.set_titletext("결제 내역");
            this.set_background("#F4F7FE");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_pay", this);
            obj._setContents("<ColumnInfo><Column id=\"PAYMENT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ORDER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PAYMENT_METHOD\" type=\"STRING\" size=\"256\"/><Column id=\"PAYMENT_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PAYMENT_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"PAYMENT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"START_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"END_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ORDER_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"PAYMENT_STATUS\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("search_area","40","50",null,"140","40",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#ffffff");
            obj.set_borderRadius("10px");
            this.addChild(obj.name, obj);

            obj = new Grid("grid_list","40","130",null,"390","40",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#FFFFFF");
            obj.set_border("0px none");
            obj.set_borderRadius("10px");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_pay");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"96\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"120\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"33\"/></Rows><Band id=\"head\"><Cell text=\"주문번호\" background=\"white\" font=\"normal 11pt &apos;Noto Sans KR Medium&apos;\" border=\"0px,0px,1px solid #eeeeee\"/><Cell col=\"1\" text=\"결제수단\" background=\"white\" font=\"normal 11pt &apos;Noto Sans KR Medium&apos;\" border=\"0px,0px,1px solid #eeeeee\"/><Cell col=\"2\" text=\"결제금액\" background=\"white\" font=\"normal 11pt &apos;Noto Sans KR Medium&apos;\" border=\"0px,0px,1px solid #eeeeee\"/><Cell col=\"3\" text=\"결제처리\" background=\"white\" font=\"normal 11pt &apos;Noto Sans KR Medium&apos;\" border=\"0px,0px,1px solid #eeeeee\"/><Cell col=\"4\" text=\"결제일\" background=\"white\" font=\"normal 11pt &apos;Noto Sans KR Medium&apos;\" border=\"0px,0px,1px solid #eeeeee\"/></Band><Band id=\"body\"><Cell text=\"bind:ORDER_ID\" textAlign=\"center\" border=\"0px\" font=\"normal 10pt &apos;Noto Sans KR Light&apos;\"/><Cell col=\"1\" text=\"bind:PAYMENT_METHOD\" textAlign=\"center\" border=\"0px\" font=\"normal 10pt &apos;Noto Sans KR Light&apos;\"/><Cell col=\"2\" text=\"bind:PAYMENT_AMOUNT\" textAlign=\"center\" border=\"0px\" font=\"normal 10pt &apos;Noto Sans KR Light&apos;\"/><Cell col=\"3\" text=\"bind:PAYMENT_STATUS\" textAlign=\"center\" border=\"0px\" font=\"normal 10pt &apos;Noto Sans KR Light&apos;\" color=\"expr:(text==&apos;결제 대기&apos; ? &apos;yellow&apos; : (text==&apos;결제 완료&apos; ? &apos;green&apos; : &apos;red&apos;))\"/><Cell col=\"4\" text=\"bind:PAYMENT_DT\" textAlign=\"center\" border=\"0px\" font=\"normal 10pt &apos;Noto Sans KR Light&apos;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","grid_list","binddataset","ds_pay","");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Order_Pay.xfdl", function() {
        // 온로드 시
        this.Form_Order_Pay_onload = function(obj, e)
        {
            this.fnSearchPay();
        };

        // 주문 내역 조회
        this.fnSearchPay = function() {
            var strSvcID       = "selectPayment";
            var strURL         = "svc::selectPaymentListByAdmin.do";  // Spring Controller 매핑
            var strInDatasets  = "";
            var strOutDatasets = "ds_pay=ds_pay";
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
                case "selectPayment":
                    trace("결제 내역 조회 완료");
                    break;
            }
        };




        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Order_Pay_onload,this);
        };
        this.loadIncludeScript("Form_Order_Pay.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
