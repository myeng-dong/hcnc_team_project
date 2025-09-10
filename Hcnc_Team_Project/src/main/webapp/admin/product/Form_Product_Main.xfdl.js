(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_ProductAdmin");
            this.set_titletext("상품관리");
            this.set_background("#ebf3fe");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta_prodType","20","165",null,"35","1120",null,null,null,null,null,this);
            obj.set_text("검색분류");
            obj.set_background("#c8d3de");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_category","20","207",null,"35","1120",null,null,null,null,null,this);
            obj.set_text("상품분류");
            obj.set_background("#c8d3de");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_regDate","20","249",null,"35","1120",null,null,null,null,null,this);
            obj.set_text("상품등록일");
            obj.set_background("#c8d3de");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_sale","20","291",null,"35","1120",null,null,null,null,null,this);
            obj.set_text("진열상태");
            obj.set_background("#c8d3de");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","20","400","1230","360",null,null,null,null,null,null,this);
            obj.set_borderRadius("5px");
            obj.set_border("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/><Column size=\"101\"/><Column size=\"147\"/><Column size=\"107\"/><Column size=\"107\"/><Column size=\"198\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"75\"/><Column size=\"70\"/><Column size=\"94\"/><Column size=\"94\"/></Columns><Rows><Row size=\"52\" band=\"head\"/><Row size=\"33\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"13\" background=\"transparent\" border=\"0px none\"/><Cell row=\"1\" text=\"□\" background=\"#e5f3ff\" border=\"0px none #ffffff,0px none #ffffff,0px none\"/><Cell row=\"1\" col=\"1\" text=\"No\" background=\"#e5f3ff\" border=\"0px none #ffffff,0px none #ffffff,0px none\"/><Cell row=\"1\" col=\"2\" text=\"상품코드\" background=\"#e5f3ff\" border=\"0px none #ffffff,0px none #ffffff,0px none\"/><Cell row=\"1\" col=\"3\" text=\"상품명\" background=\"#e5f3ff\" border=\"0px none #ffffff,0px none #ffffff,0px none\"/><Cell row=\"1\" col=\"4\" text=\"판매가\" background=\"#e5f3ff\" border=\"0px none #ffffff,0px none #ffffff,0px none\"/><Cell row=\"1\" col=\"5\" text=\"할인가\" background=\"#e5f3ff\" border=\"0px none #ffffff,0px none #ffffff,0px none\"/><Cell row=\"1\" col=\"6\" text=\"상품분류\" background=\"#e5f3ff\" border=\"0px none #ffffff,0px none #ffffff,0px none\"/><Cell row=\"1\" col=\"7\" text=\"진열상태\" background=\"#e5f3ff\" border=\"0px none #ffffff,0px none #ffffff,0px none\"/><Cell row=\"1\" col=\"8\" text=\"판매상태\" background=\"#e5f3ff\" border=\"0px none #ffffff,0px none #ffffff,0px none\"/><Cell row=\"1\" col=\"9\" text=\"재고\" background=\"#e5f3ff\" border=\"0px none #ffffff,0px none #ffffff,0px none\"/><Cell row=\"1\" col=\"10\" text=\"품절상태\" background=\"#e5f3ff\" border=\"0px none #ffffff,0px none #ffffff,0px none\"/><Cell row=\"1\" col=\"11\" text=\"구매링크\" background=\"#e5f3ff\" border=\"0px none #ffffff,0px none #ffffff,0px none\"/><Cell row=\"1\" col=\"12\" text=\"관리\" background=\"#e5f3ff\" border=\"0px none #ffffff,0px none #ffffff,0px none\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\"/><Cell col=\"1\" text=\"bind:No\"/><Cell col=\"2\" text=\"bind:상품구분\"/><Cell col=\"3\" text=\"bind:상품코드\"/><Cell col=\"4\" text=\"bind:상품명\"/><Cell col=\"5\" text=\"bind:판매가\"/><Cell col=\"6\" text=\"bind:할인\"/><Cell col=\"7\" text=\"bind:상품분류\"/><Cell col=\"8\" text=\"bind:진열상태\"/><Cell col=\"9\" text=\"bind:판매상태\"/><Cell col=\"10\" text=\"bind:재고\"/><Cell col=\"11\" text=\"bind:품절상태\"/><Cell col=\"12\" text=\"bind:구매링크\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle","20","50","107","33",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("상품관리");
            obj.set_font("normal 800 26px/normal \"맑은 고딕\"");
            obj.set_color("#12298b");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitleSub","20","17","150","33",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("Page/ProductDashboard");
            obj.set_color("#575a74");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","20","100","1230","40",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","35","90","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("전체 10건 10000test");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_00","160","164","1090","36",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_search","174","3","266","29",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("0");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Combo("cmb_searchType","175","167","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_font("normal 800 10pt/normal \"Arial\"");
            obj.set_text("상품명");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_00_00","160","206","1090","36",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_cate1","175","209","135","30",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_font("normal 800 10pt/normal \"Arial\"");
            obj.set_text("- 대분류 선택 -");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_cate2","334","209","135","30",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_font("normal 800 10pt/normal \"Arial\"");
            obj.set_text("- 중분류 선택 -");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_cate3","493","209","135","30",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_font("normal 800 10pt/normal \"Arial\"");
            obj.set_text("- 소분류 선택 -");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_00_00_00","160","248","1090","36",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_start","175","251","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_font("normal 800 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_dash","305","252","20","30",null,null,null,null,null,null,this);
            obj.set_text("~");
            obj.set_taborder("20");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_end","325","251","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_font("normal 800 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_00_00_00_00","160","291","1090","36",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","24","9","246","20",null,null,null,null,null,null,this.Div00_00_00_00_00.form);
            obj.set_taborder("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_font("normal 800 10pt/normal \"Arial\"");
            var Div00_00_00_00_00_form_Radio00_innerdataset = new nexacro.NormalDataset("Div00_00_00_00_00_form_Radio00_innerdataset", obj);
            Div00_00_00_00_00_form_Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">all</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">display</Col><Col id=\"datacolumn\">진열함</Col></Row><Row><Col id=\"codecolumn\">displayN</Col><Col id=\"datacolumn\">진열안함</Col></Row></Rows>");
            obj.set_innerdataset(Div00_00_00_00_00_form_Radio00_innerdataset);
            this.Div00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("sta_sale","468","0",null,"35","482",null,null,null,null,null,this.Div00_00_00_00_00.form);
            obj.set_text("판매상태");
            obj.set_background("#c8d3de");
            obj.set_taborder("1");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.Div00_00_00_00_00.addChild(obj.name, obj);

            obj = new Radio("Radio00_00","634","9","246","20",null,null,null,null,null,null,this.Div00_00_00_00_00.form);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_font("normal 800 10pt/normal \"Arial\"");
            var Div00_00_00_00_00_form_Radio00_00_innerdataset = new nexacro.NormalDataset("Div00_00_00_00_00_form_Radio00_00_innerdataset", obj);
            Div00_00_00_00_00_form_Radio00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">allS</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">displayS</Col><Col id=\"datacolumn\">판매함</Col></Row><Row><Col id=\"codecolumn\">displayNS</Col><Col id=\"datacolumn\">판매안함</Col></Row></Rows>");
            obj.set_innerdataset(Div00_00_00_00_00_form_Radio00_00_innerdataset);
            this.Div00_00_00_00_00.addChild(obj.name, obj);

            obj = new Button("btn_reg","930","351","100","35",null,null,null,null,null,null,this);
            obj.set_text("상품등록");
            obj.set_color("#FFFFFF");
            obj.set_background("#4A4A4A");
            obj.set_borderRadius("6px");
            obj.set_font("bold 11pt \'Arial\'");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel","1080","351","150","35",null,null,null,null,null,null,this);
            obj.set_text("엑셀다운로드");
            obj.set_color("#2E7D32");
            obj.set_background("#FFFFFF");
            obj.set_border("1px solid #CCCCCC");
            obj.set_borderRadius("6px");
            obj.set_font("normal 11pt \'Arial\'");
            this.addChild(obj.name, obj);

            obj = new Static("sta_listTitle","46","410","80","36",null,null,null,null,null,null,this);
            obj.set_text("목록");
            obj.set_font("bold 13pt/normal \"Arial\"");
            obj.set_taborder("22");
            this.addChild(obj.name, obj);

            obj = new Static("sta_listTitle2","110","410","179","36",null,null,null,null,null,null,this);
            obj.set_text("[총 회원수 0명  검색결과 0건]");
            obj.set_font("normal 700 10pt/normal \"Arial\"");
            obj.set_taborder("23");
            obj.set_textDecoration("underline");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.sta_prodType.addEventHandler("onclick",this.sta_prodType_onclick,this);
            this.stcTitleSub.addEventHandler("onclick",this.stcTitleSub_onclick,this);
            this.Div00_00_00_00_00.form.Radio00_00.addEventHandler("onitemchanged",this.Div00_00_00_00_00_Radio00_00_onitemchanged,this);
            this.sta_listTitle.addEventHandler("onclick",this.sta_listTitle_onclick,this);
            this.sta_listTitle2.addEventHandler("onclick",this.sta_listTitle_onclick,this);
        };
        this.loadIncludeScript("Form_Product_Main.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
