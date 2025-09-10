(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Login");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_admin", this);
            obj._setContents("<ColumnInfo><Column id=\"MEMBER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PASSWORD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_loginChk", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","545","226","56","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("아이디*");
            obj.set_textAlign("center");
            obj.set_font("bold 12px/normal \"HY중고딕\"");
            this.addChild(obj.name, obj);

            obj = new Edit("admin_id","545","256","310","44",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_borderRadius("15px");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","545","310","56","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("비밀번호*");
            obj.set_textAlign("center");
            obj.set_font("bold 12px/normal \"HY엽서M\"");
            this.addChild(obj.name, obj);

            obj = new Edit("admin_pw","545","340","310","44",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_borderRadius("15px");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","630","144","140","29",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("관리자 로그인");
            obj.set_textAlign("center");
            obj.set_font("bold 20px/normal \"HY중고딕\"");
            this.addChild(obj.name, obj);

            obj = new Button("admin_login","564","426","272","49",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("로그인");
            obj.set_borderRadius("15px");
            obj.set_background("black");
            obj.set_color("white");
            obj.set_font("12px/normal \"HY중고딕\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Login.xfdl", function() {

        this.admin_login_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.admin_login.addEventHandler("onclick",this.admin_login_onclick,this);
        };
        this.loadIncludeScript("Form_Login.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
