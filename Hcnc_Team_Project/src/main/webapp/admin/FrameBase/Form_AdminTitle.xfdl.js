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
        this.Form_AdminTitle_onload = function(obj, e)
        {
            // 현재 열려 있는 Form URL 가져오기
            var sCurrUrl = objApp.mainframe.VFrameSet00.HFrameSet00.WorkFrame.get_formurl();

            trace("현재 열려 있는 Form URL >>> " + sCurrUrl);

            this.fn_setTitleByPath(sCurrUrl);
        };

        // gds_menu의 MENU_PATH 기준으로 타이틀/위치 세팅
        this.fn_setTitleByPath = function(sPath)
        {
            var ds = application.gds_menu;

            // 현재 Form URL과 일치하는 Row 찾기
            var nRow = ds.findRow("MENU_PATH", sPath);
            if (nRow < 0)
            {
                this.sta_location.set_text("⌂");
                this.sta_h3.set_text("");
                return;
            }

            // 현재 메뉴명
            var menuNm = ds.getColumn(nRow, "MENU_NM");

            // Breadcrumb (상위 메뉴 추적)
            var breadcrumb = [];
            var currMenuId = ds.getColumn(nRow, "MENU_ID");

            while (currMenuId.length >= 2)
            {
                var idx = ds.findRow("MENU_ID", currMenuId);
                if (idx < 0) break;

                breadcrumb.unshift(ds.getColumn(idx, "MENU_NM"));
                currMenuId = currMenuId.substr(0, currMenuId.length - 2);
            }

            // 표시 문자열 만들기
            var sDisplay = "⌂";
            if (breadcrumb.length > 0) {
                sDisplay += " ▸ " + breadcrumb.join(" ▸ ");
            }

            // Static에 반영
            this.sta_location.set_text(sDisplay);
            this.sta_h3.set_text(menuNm);

            trace("Breadcrumb >>> " + sDisplay);
            trace("Title >>> " + menuNm);
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
