(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Member_withdrawAndDormant");
            this.set_titletext("New Form");
            this.set_background("lightBlue");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("search_box","20","10","1240","330",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("white");
            obj.set_text("");
            obj.set_borderRadius("8px");
            this.addChild(obj.name, obj);

            obj = new Static("grade_search_box00","20","360","1240","340",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("white");
            obj.set_text("");
            obj.set_borderRadius("8px");
            this.addChild(obj.name, obj);

            obj = new Static("status","46","20","48","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("상태");
            obj.set_font("14px/normal \"Noto Sans KR Black\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("status00","46","104","48","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("이메일");
            obj.set_font("14px/normal \"Noto Sans KR Black\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("status00_00","46","154","48","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("가입일");
            obj.set_font("14px/normal \"Noto Sans KR Black\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("status00_00_00","46","201","48","40",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("휴면일");
            obj.set_font("14px/normal \"Noto Sans KR Black\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("status00_00_00_00","46","251","48","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("탈퇴일");
            obj.set_font("14px/normal \"Noto Sans KR Black\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("status01","46","58","48","40",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("이름");
            obj.set_font("14px/normal \"Noto Sans KR Black\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","130","24","580","32",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","130","60","980","32",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","130","108","980","32",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","131","155","404","35",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00","565","155","404","35",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","535","161","30","23",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("~");
            obj.set_textAlign("center");
            obj.set_font("bold 12px/normal \"Noto Sans KR Black\"");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_01","131","204","404","35",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00_00","565","205","404","35",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","535","211","25","23",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("~");
            obj.set_textAlign("center");
            obj.set_font("bold 12px/normal \"Noto Sans KR Black\"");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_01_00","130","251","404","35",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00_00_00","565","251","404","35",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","535","257","25",null,null,"440",null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("~");
            obj.set_textAlign("center");
            obj.set_font("bold 12px/normal \"Noto Sans KR Black\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","520","301","100","31",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("검색");
            obj.set_font("12px \"Noto Sans KR Black\"");
            obj.set_background("#2563eb");
            obj.set_borderRadius("4px");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","650","301",null,"31","530",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("초기화");
            obj.set_font("bold 12px \"Noto Sans KR Black\"");
            obj.set_background(" #9ca3af");
            obj.set_borderRadius("4px");
            this.addChild(obj.name, obj);

            obj = new Grid("grid_list","45","370",null,"303","45",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_background("#FFFFFF");
            obj.set_border("0px none");
            obj.set_borderRadius("10px");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_gradeList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"52\"/><Column size=\"165\"/><Column size=\"136\"/><Column size=\"164\"/><Column size=\"150\"/><Column size=\"145\"/><Column size=\"237\"/></Columns><Rows><Row size=\"48\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"NO\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"1\" text=\"아이디\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"2\" text=\"이름\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"3\" text=\"이메일\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"4\" text=\"전화번호\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"5\" text=\"구매액\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"6\" text=\"가입일\" textAlign=\"CENTER\" font=\"11pt/normal &quot;LG Smart UI Bold&quot;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:MEMBER_ID\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:USER_NAME\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:EMAIL_ADDR\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:PHONE_NUMBER\" textAlign=\"center\"/><Cell col=\"5\" edittype=\"normal\" text=\"bind:PRICE_AMOUNT\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:INPUT_DT\" textAlign=\"center\"/></Band></Format></Formats>");
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
            this.status.addEventHandler("onclick",this.Static00_onclick,this);
            this.status00.addEventHandler("onclick",this.Static00_onclick,this);
            this.status00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.status00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.status00_00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.status01.addEventHandler("onclick",this.Static00_onclick,this);
        };
        this.loadIncludeScript("Form_Member_withdrawAndDormant.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
