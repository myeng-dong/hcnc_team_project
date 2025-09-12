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
            obj = new Dataset("ds_banner", this);
            obj._setContents("<ColumnInfo><Column id=\"BANNER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BANNER_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"BANNER_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"IMG_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"IS_VISIBLE\" type=\"STRING\" size=\"256\"/><Column id=\"LINKED_URL\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grid_list","40","53",null,"320","40",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#FFFFFF");
            obj.set_border("0px none");
            obj.set_borderRadius("10px");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_banner");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/><Column size=\"76\"/><Column size=\"92\"/><Column size=\"229\"/><Column size=\"189\"/><Column size=\"129\"/><Column size=\"189\"/><Column size=\"148\"/></Columns><Rows><Row size=\"48\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"NO\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"2\" text=\"출력순서\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"3\" text=\"타입\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"4\" text=\"제목\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"5\" text=\"링크\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"6\" text=\"작성자\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"7\" text=\"등록일\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"8\" text=\"출력여부\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" text=\"bind:BANNER_ID\"/><Cell col=\"1\" text=\"expr:currow + 1\"/><Cell col=\"2\" text=\"bind:SORT_NUMBER\"/><Cell col=\"3\" text=\"bind:BANNER_TYPE\"/><Cell col=\"4\" text=\"bind:BANNER_TITLE\"/><Cell col=\"5\" edittype=\"normal\" text=\"bind:LINKED_URL\"/><Cell col=\"6\" text=\"bind:INPUT_ID\"/><Cell col=\"7\" edittype=\"normal\" text=\"bind:INPUT_DT\"/><Cell col=\"8\" edittype=\"normal\" text=\"bind:IS_VISIBLE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("txt_h4_00","40","30","153","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("총       개 | 활성화       개");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR Medium\"");
            obj.set_color("#333333");
            this.addChild(obj.name, obj);

            obj = new Static("txt_bannertotal","0","30","70","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("0");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR Medium\"");
            obj.set_color("#1017ac");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("txt_bannertotal00","75","30","70","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("0");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR Medium\"");
            obj.set_color("#1017ac");
            obj.set_cursor("copy");
            obj.set_textAlign("right");
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
        this.registerScript("Form_BannerList.xfdl", function() {

        this.Div00_00_00_00_00_Radio00_onitemchanged = function(obj,e)
        {

<<<<<<< HEAD
=======
        this.btn_write_onclick = function(obj,e)
        {
        	nexacro.WorkFrame.set_formurl("banner::Form_BannerWrite.xfdl");
        };


        // 배너조회
        this.fnSearchBanner = function() {
            var strSvcID       = "selectBanner";
            var strURL         = "svc::selectBannerListByAdmin.do";  // Spring Controller 매핑
            var strInDatasets  = "";
            var strOutDatasets = "ds_banner=ds_banner";
            var strArg         = ""; // 필요 시 조건 전달 (예: USER_ID=xxx)
            var strCallback    = "fnCallback";

            this.transaction(strSvcID, strURL, strInDatasets, strOutDatasets, strArg, strCallback);
        };

        // 공통 콜백
        this.fnCallback = function(svc, err, errMsg) {
            if (err < 0) {
                this.alert("에러 발생: " + errMsg);

                return;
            }
            switch(svc){
        		case "selectBanner"  :
        		return;

        	}
>>>>>>> ec2c8b3bda2e844b83e076e7ec27329b76186173
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
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
