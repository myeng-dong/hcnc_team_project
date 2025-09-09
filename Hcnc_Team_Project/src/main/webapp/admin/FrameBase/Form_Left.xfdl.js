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
            this.set_name("Form_Left");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(200,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsLeft", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_PATH\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsLeft");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell treelevel=\"bind:MENU_LEVEL\" treestartlevel=\"1\" text=\"bind:MENU_NM\" displaytype=\"normal\" edittype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",200,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Left.xfdl", function() {

        this.Form_Left_onload = function(obj,e)
        {

        };

        this.fnGetLeftMenu = function(sMenuId){
        	var objApp = nexacro.getApplication();
        	var objDsMenu = objApp.gds_headerInfo;

        	objDsMenu.filter("MENU_ID.indexOf('"+ sMenuId +"') == 0 && MENU_LEVEL > 0");
        	this.dsLeft.copyData(objDsMenu, true);
        	objDsMenu.filter("");
        }


        this.Grid00_oncellclick = function(obj,e)
        {
        	var objApp = nexacro.getApplication();
        	var objOpenMenu = objApp.gds_open;
        	var objMenu = obj.getBindDataset();
        	var sMenuId = objMenu.getColumn(e.row, "MENU_ID");


        	if(sMenuId.length == 4){

        		var RowTree = this.Grid00.getTreeRow(e.row);
        		var Status  = this.Grid00.getTreeStatus(RowTree);

        		Status = (Status == 0 ? 1 : 0);
        		this.Grid00.setTreeStatus(RowTree, 0);

        	} else if(sMenuId.length == 6){
        		this.fnOpenMenu(sMenuId);
        	} else {
        		this.alert('오류가 발생하였습니다');
        	}
        };

        this.fnOpenMenu = function(sMenuId){
        	var objApp = nexacro.getApplication();
        	var objDsMenu = this.dsLeft;

        	var objDsOpenMenu = objApp.gds_headerInfo;

        	var nFRow = objDsMenu.findRow("MENU_ID", sMenuId);
        	var sMenuPath = objDsMenu.getColumn(nFRow,"MENU_PATH");

        	nexacro.setPrivateProfile("originPath",sMenuPath);
        	objApp.mainframe.VFrameSet00.HFrameSet00.MainFrame.set_formurl(sMenuPath)
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Left_onload,this);
            this.Grid00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
        };
        this.loadIncludeScript("Form_Left.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
