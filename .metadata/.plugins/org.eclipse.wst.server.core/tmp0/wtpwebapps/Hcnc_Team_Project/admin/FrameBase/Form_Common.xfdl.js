(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_User");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("Grid00","153","200","1077","351",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"182\"/><Column size=\"131\"/><Column size=\"162\"/><Column size=\"310\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"TITLE\"/><Cell col=\"2\" text=\"PUB\"/><Cell col=\"3\" text=\"REG_DATE\"/><Cell col=\"4\" text=\"CONTENT\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:BOARD_TITLE\" edittype=\"normal\"/><Cell col=\"2\" text=\"bind:BOARD_WRITER\" edittype=\"normal\"/><Cell col=\"3\" text=\"bind:REG_DATE\" edittype=\"date\"/><Cell col=\"4\" text=\"bind:BOARD_CONTENT\" edittype=\"normal\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","156","20","1044","170",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","8","93","188","57",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("회원ID");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edit_search_title","68","110","166","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00","241","93","188","57",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("이름");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edit_search_pub","295","106","180","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_save","762","100","66","44",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("저장");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edit_search_pub00","541","107","193","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","481","93","73","57",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("부서코드");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_search","997","120","66","44",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btn_create","1080","120","66","44",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("생성");
            this.addChild(obj.name, obj);

            obj = new Button("btn_create00","1157","120","66","44",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("생성");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.edit_search_title","value","ds_search","search_title");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.edit_search_pub","value","ds_search","search_pub");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.edit_search_pub00","value","ds_search","search_pub");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Grid00.addEventHandler("oncelldblclick",this.Grid00_oncellclick,this);
            this.Grid00.addEventHandler("oncellclick",this.cell_one_click,this);
            this.Div00.form.Static01.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.Div00.form.btn_save.addEventHandler("onclick",this.Div00_btn_save_onclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_create.addEventHandler("onclick",this.btn_create_onclick,this);
            this.btn_create00.addEventHandler("onclick",this.btn_create_onclick,this);
        };
        this.loadIncludeScript("Form_Common.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
