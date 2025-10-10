(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_ReviewList");
            this.set_titletext("New Form");
            this.set_background("#F4F7FE");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,630);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search_combo", this);
            obj._setContents("<ColumnInfo><Column id=\"SEARCH_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SEARCH_TYPE\">회원ID</Col></Row><Row><Col id=\"SEARCH_TYPE\">쿠폰코드</Col></Row><Row><Col id=\"SEARCH_TYPE\">쿠폰종류</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_issued", this);
            obj._setContents("<ColumnInfo><Column id=\"datacolumn\" type=\"STRING\" size=\"256\"/><Column id=\"codecolumn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">지급</Col><Col id=\"codecolumn\">Y</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미지급</Col></Row><Row><Col id=\"datacolumn\">전체</Col><Col id=\"codecolumn\">all</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_newmem_list", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"MEMBER_ID\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"COUPON_CODE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"COUPON_TYPE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"ISSUED_DT\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"EXPIRY_DT\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"ISSUED_STATUS\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"USE_STATE\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("search_area","40","30",null,"130","40",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#ffffff");
            obj.set_borderRadius("10px");
            this.addChild(obj.name, obj);

            obj = new Static("search_tit","20","3","60","41",null,null,null,null,null,null,this.search_area.form);
            obj.set_taborder("0");
            obj.set_text("검색분류");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR Bold\"");
            obj.set_color("#2b3674");
            this.search_area.addChild(obj.name, obj);

            obj = new Static("Static00","82","15","2","20",null,null,null,null,null,null,this.search_area.form);
            obj.set_taborder("1");
            obj.set_background("#cccccc");
            obj.set_text("");
            this.search_area.addChild(obj.name, obj);

            obj = new Radio("radio_issued","96","49","304","30",null,null,null,null,null,null,this.search_area.form);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_issued");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_font("normal 10pt/normal \"Noto Sans KR Medium\"");
            obj.set_text("지급");
            obj.set_value("Y");
            obj.set_index("0");
            this.search_area.addChild(obj.name, obj);

            obj = new Static("Static00_00","83","54","2","20",null,null,null,null,null,null,this.search_area.form);
            obj.set_taborder("3");
            obj.set_background("#cccccc");
            obj.set_text("");
            this.search_area.addChild(obj.name, obj);

            obj = new Static("search_tit00","21","42","60","41",null,null,null,null,null,null,this.search_area.form);
            obj.set_taborder("4");
            obj.set_text("지급유무");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR Bold\"");
            obj.set_color("#2b3674");
            this.search_area.addChild(obj.name, obj);

            obj = new Combo("review_info","96","14","114","25",null,null,null,null,null,null,this.search_area.form);
            obj.set_taborder("5");
            obj.set_innerdataset("ds_search_combo");
            obj.set_codecolumn("SEARCH_TYPE");
            obj.set_datacolumn("SEARCH_TYPE");
            obj.set_text("상품코드");
            obj.set_value("상품코드");
            obj.set_index("0");
            this.search_area.addChild(obj.name, obj);

            obj = new Edit("edit_search","220","14","161","25",null,null,null,null,null,null,this.search_area.form);
            obj.set_taborder("6");
            this.search_area.addChild(obj.name, obj);

            obj = new Button("btn_reset","559","105","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("초기화");
            obj.set_borderRadius("5px");
            obj.set_background("#8e8e8e");
            obj.set_color("white");
            obj.set_font("normal 11pt/normal \"Noto Sans KR Medium\"");
            obj.set_textAlign("center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Button("btn_select","440","105","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_borderRadius("5px");
            obj.set_background("#135dae");
            obj.set_color("white");
            obj.set_font("normal 11pt/normal \"Noto Sans KR Medium\"");
            obj.set_textAlign("center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Grid("pointAndCoupon","35","200",null,null,"30","30",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("#FFFFFF");
            obj.set_border("0px none");
            obj.set_borderRadius("10px");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_newmem_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"52\"/><Column size=\"119\"/><Column size=\"256\"/><Column size=\"130\"/><Column size=\"150\"/><Column size=\"139\"/><Column size=\"88\"/><Column size=\"81\"/></Columns><Rows><Row size=\"48\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"NO\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"1\" text=\"회원ID\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"2\" text=\"쿠폰코드\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"3\" text=\"쿠폰종류\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"4\" text=\"발급일\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"5\" text=\"만료일\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"6\" text=\"지급여부\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"7\" text=\"사용여부\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\" font=\"12px/normal &quot;LG Smart UI Bold&quot;\"/><Cell col=\"1\" text=\"bind:MEMBER_ID\" font=\"12px/normal &quot;LG Smart UI Bold&quot;\"/><Cell col=\"2\" text=\"bind:COUPON_CODE\" textAlign=\"center\" font=\"12px/normal &quot;LG Smart UI Bold&quot;\"/><Cell col=\"3\" text=\"bind:COUPON_TYPE\" textAlign=\"center\" font=\"12px/normal &quot;LG Smart UI Bold&quot;\"/><Cell col=\"4\" text=\"bind:ISSUED_DT\" font=\"12px/normal &quot;LG Smart UI Bold&quot;\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:EXPIRY_DT\" font=\"12px/normal &quot;LG Smart UI Bold&quot;\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:ISSUED_STATUS\" font=\"12px/normal &quot;LG Smart UI Bold&quot;\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:IS_USED\" font=\"12px/normal &quot;LG Smart UI Bold&quot;\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1080,630,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","search_area.form.edit_search","value","ds_search","SEARCH_TEXT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","pointAndCoupon","binddataset","ds_user","");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_NewMemList.xfdl", function() {
        this.Form_ReviewList_onload = function(obj,e)
        {
        	this.fnSearchNewMem();
        	trace("신규회원 쿠폰 출력여부 확인용>>>");
        };

        // 신규회원쿠폰발행리스트
        this.fnSearchNewMem = function() {
            var strSvcID       = "selectNewMem";
            var strURL         = "svc::selectNewMemListByAdmin.do";
            var strInDatasets  = "";
            var strOutDatasets = "ds_newmem_list=ds_newmem_list";
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
        		case "selectNewMem"  :

        		return;

        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_ReviewList_onload,this);
            this.search_area.form.search_tit.addEventHandler("onclick",this.search_area_search_txt01_onclick,this);
            this.search_area.form.search_tit00.addEventHandler("onclick",this.search_area_search_txt01_onclick,this);
            this.btn_reset.addEventHandler("onclick",this.search_area_btn_reset_onclick,this);
            this.btn_select.addEventHandler("onclick",this.search_area_btn_select_onclick,this);
            this.pointAndCoupon.addEventHandler("oncellclick",this.pointAndCoupon_oncellclick,this);
        };
        this.loadIncludeScript("Form_NewMemList.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
