(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_BannerList");
            this.set_titletext("New Form");
            this.set_background("#F4F7FE");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("grid_list","40","213",null,"320","40",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#FFFFFF");
            obj.set_border("0px none");
            obj.set_borderRadius("10px");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/><Column size=\"92\"/><Column size=\"157\"/><Column size=\"366\"/><Column size=\"170\"/><Column size=\"106\"/><Column size=\"205\"/></Columns><Rows><Row size=\"48\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"NO\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"2\" text=\"타입\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"3\" text=\"제목\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"4\" text=\"기간\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"5\" text=\"상태\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"6\" text=\"노출여부\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"7\" text=\"등록일\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"expr:currow + 1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\" edittype=\"normal\"/><Cell col=\"5\"/><Cell col=\"6\" edittype=\"normal\"/><Cell col=\"7\" edittype=\"normal\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("txt_h4","40","30","380","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("팝업 목록");
            obj.set_font("normal 700 12pt/normal \"Noto Sans KR Bold\"");
            obj.set_color("#2b3674");
            this.addChild(obj.name, obj);

            obj = new Static("txt_h4_00","40","60","380","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("총       개 | 활성화       개");
            obj.set_font("normal 700 8pt/normal \"Noto Sans KR Medium\"");
            obj.set_color("#333333");
            this.addChild(obj.name, obj);

            obj = new Static("txt_bannertotal","40","80","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("{총갯수}");
            obj.set_font("normal 700 8pt/normal \"Noto Sans KR Medium\"");
            obj.set_color("#1017ac");
            this.addChild(obj.name, obj);

            obj = new Static("txt_bannertotal00","100","80","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("{진행갯수}");
            obj.set_font("normal 700 8pt/normal \"Noto Sans KR Medium\"");
            obj.set_color("#1017ac");
            obj.set_cursor("copy");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","grid_list","binddataset","ds_user","");
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
            this.txt_h4.addEventHandler("onclick",this.search_area_search_txt01_onclick,this);
            this.txt_h4_00.addEventHandler("onclick",this.search_area_search_txt01_onclick,this);
            this.txt_bannertotal.addEventHandler("onclick",this.search_area_search_txt01_onclick,this);
            this.txt_bannertotal00.addEventHandler("onclick",this.search_area_search_txt01_onclick,this);
        };
        this.loadIncludeScript("Form_BannerList.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
