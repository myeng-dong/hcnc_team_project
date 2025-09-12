(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Top");
            this.set_titletext("Form_Top");
            this.set_background("white");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,50);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00",null,"5","100","43","90",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("님 환영합니다");
            obj.set_font("normal 12pt/normal \"Pretendard SemiBold\"");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("h1_logo","5","3","190","45",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("logo");
            obj.set_image("url(\'imagerc::h1_logo.png\')");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00",null,"5","120","43","200",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("{login_id}");
            obj.set_font("normal 12pt/normal \"Pretendard SemiBold\"");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Button("btn_logout",null,"11","80","31","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("로그아웃");
            obj.set_font("normal 10pt/normal \"Pretendard SemiBold\"");
            obj.set_background("transition");
            obj.set_border("0px none");
            obj.set_color("firebrick");
            this.addChild(obj.name, obj);

            obj = new Div("div_grayline","0",null,null,"1","0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("#cccccc");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,50,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Top.xfdl", function() {

        this.h1_logo_onclick = function(obj,e)
        {

        };

        this.btn_logout_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.h1_logo.addEventHandler("onclick",this.h1_logo_onclick,this);
            this.btn_logout.addEventHandler("onclick",this.btn_logout_onclick,this);
        };
        this.loadIncludeScript("Form_Top.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
