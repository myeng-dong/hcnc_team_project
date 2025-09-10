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
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,110);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta_h3","40","40","940","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("h3 title area");
            obj.set_font("normal 700 20pt/normal \"normal/normal\",\"LG Smart UI Bold\",\"Pretendard Black\"");
            obj.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Static("sta_location","40","10","990","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("⌂>회원>회원관리");
            obj.set_font("normal 10pt/normal \"normal/normal\",\"LG Smart UI Bold\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,110,this,function(p){});
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
        this.Form_AdminTitle_onload = function(obj,e)
        {
        	this.fn_setLocationBreadcrumb();
            this.Form_AdminTitle._url = obj.form._url;
            this.Form_AdminTitle.fn_setLocationBreadcrumb();
        	trace("타이틀불러오는 함수 실행여부체크용 >>>");
        };

        this.fn_setLocationBreadcrumb = function()
        {
            var sUrl = this._url;  // 현재 페이지 URL
            var ds = application.gds_Menu;

            var nRow = ds.findRow("MENU_PATH", sUrl);
            if (nRow < 0) {
                this.sta_location.set_text("⌂");
                this.sta_h3.set_text("");
                return;
            }

            var breadcrumb = [];
            var currMenuId = ds.getColumn(nRow, "MENU_ID");

            while (currMenuId.length >= 2)
            {
                var idx = ds.findRow("MENU_ID", currMenuId);
                if (idx < 0) break;

                var menuNm = ds.getColumn(idx, "MENU_NM");
                breadcrumb.unshift(menuNm);

                currMenuId = currMenuId.substr(0, currMenuId.length - 2);
            }

            var sDisplay = "⌂";
            if (breadcrumb.length >= 1) {
                sDisplay += " ▸ " + breadcrumb.join(" ▸ ");
            }

            // 최종 메뉴명은 breadcrumb 마지막 값
            var lastMenuName = breadcrumb.length > 0 ? breadcrumb[breadcrumb.length - 1] : "";

            this.sta_location.set_text(sDisplay);
            this.sta_h3.set_text(lastMenuName);
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
