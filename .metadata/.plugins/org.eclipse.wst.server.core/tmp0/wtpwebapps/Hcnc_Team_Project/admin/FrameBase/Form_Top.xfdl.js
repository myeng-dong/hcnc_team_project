(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_scrollbartype("none");
            this.set_scrolltype("none");
            this.set_name("Form_Top");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTop", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("count", this);
            obj._setContents("<ColumnInfo><Column id=\"count\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"count\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize

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
        this.registerScript("Form_Top.xfdl", function() {

        this.Form_Top_onload = function(obj,e)
        {
        	this.fnGetTopMenu();
        	this.fnCreateTopMenu();


        };

        this.fnGetTopMenu = function(){
        	// Global_Dataset.gds_headerInfo.get
        	var objApp = nexacro.getApplication();
        	var objDsMenu = objApp.gds_headerInfo;

        	objDsMenu.filter("MENU_LEVEL == 0");
        	this.dsTop.copyData(objDsMenu, true);

        	objDsMenu.filter("");
        }

        this.fnCreateTopMenu = function(){
        	var sMenuId;
        	var sMenuNm;
        	var btnCss = "btn_top_menu";
        	var nLeft   = 0;
        	var nTop    = 13;
        	var nWidth  = 230;
        	var nHeight = 30;

        	var nGap    = 0;

        	var nRowCnt = this.dsTop.rowcount;

        	for(var i = 0; i < nRowCnt; i++){
        		sMenuId = this.dsTop.getColumn(i,"MENU_ID");
        		sMenuNm = this.dsTop.getColumn(i,"MENU_NM");
        		if(i != 0 ){
        			nLeft = 230 * i;
        		}
        		var objBtn = new Button();
        		objBtn.init("btn_" + sMenuId, nLeft, nTop, nWidth, nHeight, null, null);
        		objBtn.set_text(sMenuNm);
        		objBtn.set_cssclass("btn_top_menu");

        		this.addChild(objBtn.id, objBtn);

        		objBtn.addEventHandler("onclick",this.btnTopMenu_onclick, this);
        		objBtn.show();

        		nLeft = objBtn.id+ ":" + nGap+"px";
        	}
        	var logoutBtn = new Button();
        	logoutBtn.init("btn_logout");
        	logoutBtn.set_text("로그아웃");

        	logoutBtn.addEventHandler("onclick",this.logout, this);
        	logoutBtn.show();

        	this.resetScroll();

        }

        this.btnTopMenu_onclick = function(obj,e){
        	var objApp = nexacro.getApplication();
        	var originCount = this.count.getColumn(0,"count");

        	objApp.mainframe.VFrameSet00.HFrameSet00.LeftFrame.set_visible(true);
        	this.count.setColumn(0,"count",originCount + 1);


        	var arrResId = obj.id.split('_');
        	var sResId = arrResId[1];

        	objApp.mainframe.VFrameSet00.HFrameSet00.LeftFrame.form.fnGetLeftMenu(sResId);

        }

        this.logout = function(){
        	nexacro.setPrivateProfile("loginId","");
        	nexacro.setPrivateProfile("originPath","");
        	objApp.mainframe.VFrameSet00.HFrameSet00.MainFrame.set_formurl("FrameBase::Form_Main.xfdl");
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Top_onload,this);
        };
        this.loadIncludeScript("Form_Top.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
