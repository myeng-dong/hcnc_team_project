(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_AdminTitle");
            this.set_titletext("New Form");
            this.set_background("#F4F7FE");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,70);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta_h3","41","35","940","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("h3 title area");
            obj.set_font("normal 700 20pt/normal \"normal/normal\",\"LG Smart UI Bold\",\"Pretendard Black\"");
            obj.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Static("sta_location","40","0","990","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("⌂>회원>회원관리");
            obj.set_font("normal 10pt/normal \"normal/normal\",\"LG Smart UI Bold\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,70,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","sta_h3","text","gds_menu","MENU_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_AdminTitle.xfdl", function() {
        // 메뉴명을 받아서 타이틀 Static에 반영
        this.fn_setTitle = function(sMenuNm)
        {
            if (!sMenuNm) sMenuNm = "";
            this.sta_h3.set_text(sMenuNm);   // 상단 타이틀
            this.sta_location.set_text("⌂ ▸ " + sMenuNm); // 간단한 breadcrumb
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_AdminTitle_onload,this);
            this.sta_h3.addEventHandler("onclick",this.static_board_onclick,this);
            this.sta_location.addEventHandler("onclick",this.static_board_onclick,this);
        };
        this.loadIncludeScript("Form_AdminTitle.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
