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
                this._setFormPosition(1080,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_banner", this);
            obj._setContents("<ColumnInfo><Column id=\"BANNER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BANNER_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"BANNER_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"IMG_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"IS_VISIBLE\" type=\"STRING\" size=\"256\"/><Column id=\"LINKED_URL\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grid_list","40","160",null,null,"40","100",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#FFFFFF");
            obj.set_border("0px none");
            obj.set_borderRadius("10px");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_banner");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/><Column size=\"76\"/><Column size=\"127\"/><Column size=\"83\"/><Column size=\"168\"/><Column size=\"189\"/><Column size=\"129\"/><Column size=\"163\"/><Column size=\"80\"/><Column size=\"84\"/></Columns><Rows><Row size=\"48\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"NO\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"2\" text=\"출력순서\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"3\" text=\"타입\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"4\" colspan=\"2\" text=\"제목\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\"/><Cell col=\"6\" text=\"링크\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"7\" text=\"작성자\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"8\" text=\"등록일\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"9\" text=\"출력여부\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"10\" text=\"관리\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" text=\"bind:BANNER_ID\"/><Cell col=\"1\" text=\"expr:currow + 1\"/><Cell col=\"2\" text=\"bind:SORT_NUMBER\"/><Cell col=\"3\" text=\"bind:BANNER_TYPE\"/><Cell col=\"4\" text=\"bind:IMG_PATH\" displaytype=\"imagecontrol\" imagestretch=\"bind:IMG_PATH\"/><Cell col=\"5\" text=\"bind:BANNER_TITLE\"/><Cell col=\"6\" edittype=\"none\" text=\"bind:LINKED_URL\"/><Cell col=\"7\" text=\"bind:INPUT_ID\"/><Cell col=\"8\" edittype=\"none\" text=\"bind:INPUT_DT\"/><Cell col=\"9\" edittype=\"none\" text=\"bind:IS_VISIBLE\"/><Cell col=\"10\" displaytype=\"buttoncontrol\" text=\"관리\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("txt_h4_00","50","130","153","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("총       개 | 활성화       개");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR Medium\"");
            obj.set_color("#333333");
            this.addChild(obj.name, obj);

            obj = new Static("txt_bannertotal","10","130","70","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("0");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR Medium\"");
            obj.set_color("#1017ac");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("txt_bannertotal00","85","130","70","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("0");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR Medium\"");
            obj.set_color("#1017ac");
            obj.set_cursor("copy");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Button("btn_write",null,null,"140","40","40","40",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("글쓰기");
            obj.set_background("#1017ac");
            obj.set_color("#ffffff");
            obj.set_borderRadius("5px");
            obj.set_border("0px none");
            obj.set_font("normal bold 10pt/normal \"Noto Sans KR Medium\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,"640","140",null,"1100","40",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("선택지우기");
            obj.set_background("#d92d06");
            obj.set_color("#ffffff");
            obj.set_borderRadius("5px");
            obj.set_border("0px none");
            obj.set_font("normal bold 10pt/normal \"Noto Sans KR Medium\"");
            this.addChild(obj.name, obj);

            obj = new Div("search_area","40","20",null,"90","40",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_background("#ffffff");
            obj.set_borderRadius("10px");
            this.addChild(obj.name, obj);

            obj = new Static("search_tit","20","3","60","41",null,null,null,null,null,null,this.search_area.form);
            obj.set_taborder("0");
            obj.set_text("배너종류");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR Bold\"");
            obj.set_color("#2b3674");
            this.search_area.addChild(obj.name, obj);

            obj = new Radio("Radio00","95","10","410","30",null,null,null,null,null,null,this.search_area.form);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_font("normal 10pt/normal \"Noto Sans KR Medium\"");
            var search_area_form_Radio00_innerdataset = new nexacro.NormalDataset("search_area_form_Radio00_innerdataset", obj);
            search_area_form_Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">all</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">main</Col><Col id=\"datacolumn\">메인배너</Col></Row><Row><Col id=\"codecolumn\">top</Col><Col id=\"datacolumn\">탑배너</Col></Row><Row><Col id=\"codecolumn\">popup</Col><Col id=\"datacolumn\">팝업배너</Col></Row></Rows>");
            obj.set_innerdataset(search_area_form_Radio00_innerdataset);
            obj.set_text("전체");
            obj.set_value("all");
            obj.set_index("0");
            this.search_area.addChild(obj.name, obj);

            obj = new Static("Static00","82","15","2","20",null,null,null,null,null,null,this.search_area.form);
            obj.set_taborder("2");
            obj.set_background("#cccccc");
            obj.set_text("");
            this.search_area.addChild(obj.name, obj);

            obj = new Radio("Radio00_00","96","49","304","30",null,null,null,null,null,null,this.search_area.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_font("normal 10pt/normal \"Noto Sans KR Medium\"");
            var search_area_form_Radio00_00_innerdataset = new nexacro.NormalDataset("search_area_form_Radio00_00_innerdataset", obj);
            search_area_form_Radio00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">all</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">출력</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">미출력</Col></Row></Rows>");
            obj.set_innerdataset(search_area_form_Radio00_00_innerdataset);
            obj.set_text("전체");
            obj.set_value("all");
            obj.set_index("0");
            this.search_area.addChild(obj.name, obj);

            obj = new Static("Static00_00","83","54","2","20",null,null,null,null,null,null,this.search_area.form);
            obj.set_taborder("4");
            obj.set_background("#cccccc");
            obj.set_text("");
            this.search_area.addChild(obj.name, obj);

            obj = new Static("search_tit00","21","42","60","41",null,null,null,null,null,null,this.search_area.form);
            obj.set_taborder("5");
            obj.set_text("출력여부");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR Bold\"");
            obj.set_color("#2b3674");
            this.search_area.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1080,720,this,function(p){});
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

        this.Form_BannerList_onload = function(obj,e)
        {
        	this.fnSearchBanner();
        	trace("배너 리스트 출력여부 확인용>>>");
        };

        this.btn_write_onclick = function(obj,e)
        {
        	this.getOwnerFrame().set_formurl("banner::Form_BannerWrite.xfdl");
        };

        //cell클릭시 argument기억
        this.grid_list_oncellclick = function(obj,e)
        {
        	if(e.cell == 10){
        		var BannerId = this.ds_banner.getColumn(e.row,"BANNER_ID")

        		//부모페이지 자식페이지 값 전달하기 arguments
        		this.getOwnerFrame().arguments = {"BANNER_ID" : BannerId}

        		this.getOwnerFrame().set_formurl("banner::Form_BannerWrite.xfdl");
        	}
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
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_BannerList_onload,this);
            this.grid_list.addEventHandler("oncellclick",this.grid_list_oncellclick,this);
            this.txt_h4_00.addEventHandler("onclick",this.search_area_search_txt01_onclick,this);
            this.txt_bannertotal.addEventHandler("onclick",this.search_area_search_txt01_onclick,this);
            this.txt_bannertotal00.addEventHandler("onclick",this.search_area_search_txt01_onclick,this);
            this.btn_write.addEventHandler("onclick",this.btn_write_onclick,this);
            this.btn_delete.addEventHandler("onclick",this.btn_write_onclick,this);
            this.search_area.form.search_tit.addEventHandler("onclick",this.search_area_search_txt01_onclick,this);
            this.search_area.form.search_tit00.addEventHandler("onclick",this.search_area_search_txt01_onclick,this);
        };
        this.loadIncludeScript("Form_BannerList.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
