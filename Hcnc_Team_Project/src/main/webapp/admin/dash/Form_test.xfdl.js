(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_test");
            this.set_titletext("New Form");
            this.set_background("#F4F7FE");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("newOrder","3.13%","20","29.30%","130",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_borderRadius("5px");
            obj.set_boxShadow("0px 0px 2px 2px rgba(229,229,229,0.15)");
            obj.set_cursor("pointer");
            obj.getSetter("onmouseout").set("Div_onmouseout");
            obj.set_background("white");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","22","15","167","23",null,null,null,null,null,null,this.newOrder.form);
            obj.set_taborder("0");
            obj.set_text("신규 주문");
            obj.set_font("normal 12pt/0 \"Noto Sans KR Black\"");
            obj.set_color("black");
            this.newOrder.addChild(obj.name, obj);

            obj = new Div("payStatus","35.16%","20","29.30%","130",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_borderRadius("5px");
            obj.set_boxShadow("0px 0px 2px 2px rgba(229,229,229,0.15)");
            obj.set_cursor("pointer");
            obj.getSetter("onmouseout").set("Div_onmouseout");
            obj.set_background("white");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","22","15","167","23",null,null,null,null,null,null,this.payStatus.form);
            obj.set_taborder("0");
            obj.set_text("결제 대기");
            obj.set_font("normal 12pt/0 \"Noto Sans KR Black\"");
            obj.set_color("black");
            this.payStatus.addChild(obj.name, obj);

            obj = new Div("shipStatus",null,"20","29.30%","130","3.13%",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_borderRadius("5px");
            obj.set_boxShadow("0px 0px 2px 2px rgba(229,229,229,0.15)");
            obj.set_cursor("pointer");
            obj.getSetter("onmouseout").set("Div_onmouseout");
            obj.set_background("white");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","22","15","167","23",null,null,null,null,null,null,this.shipStatus.form);
            obj.set_taborder("0");
            obj.set_text("발송 대기");
            obj.set_font("normal 12pt/0 \"Noto Sans KR Black\"");
            obj.set_color("black");
            this.shipStatus.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_test.xfdl", function() {
        // Form 로드
        this.Form_test_onload = function(obj,e)
        {

        };

        this.Div_onmousemove = function(obj,e)
        {
            obj.set_boxShadow("0px 0px 5px 5px rgba(200,200,200,0.30)");
        };

        this.Div_onmouseleave = function(obj,e)
        {
            obj.set_boxShadow("0px 0px 2px 2px rgba(229,229,229,0.15)");
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_test_onload,this);
            this.newOrder.addEventHandler("onmousemove",this.Div_onmousemove,this);
            this.newOrder.addEventHandler("onmouseleave",this.Div_onmouseleave,this);
            this.payStatus.addEventHandler("onmousemove",this.Div_onmousemove,this);
            this.payStatus.addEventHandler("onmouseleave",this.Div_onmouseleave,this);
            this.shipStatus.addEventHandler("onmousemove",this.Div_onmousemove,this);
            this.shipStatus.addEventHandler("onmouseleave",this.Div_onmouseleave,this);
        };
        this.loadIncludeScript("Form_test.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
