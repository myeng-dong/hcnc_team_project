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
            obj = new Dataset("ds_in_proList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_out_proList", this);
            obj._setContents("<ColumnInfo><Column id=\"PRODUCT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"COST_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"ADDITIONAL_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"MAIN_CATE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_CATE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPTION_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"IS_VISIBLE\" type=\"STRING\" size=\"256\"/><Column id=\"QUANTITY\" type=\"STRING\" size=\"256\"/><Column id=\"OUT\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_prodType","20","99",null,"40","1120",null,null,null,null,null,this);
            obj.set_text("검색분류");
            obj.set_background("#9fbae8");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_padding("0px 0px 0px 10px");
            this.addChild(obj.name, obj);

            obj = new Static("sta_category","20","156",null,"40","1120",null,null,null,null,null,this);
            obj.set_text("상품분류");
            obj.set_background("#9fbae8");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_padding("0px 0px 0px 10px");
            this.addChild(obj.name, obj);

            obj = new Static("sta_regDate","20","213",null,"40","1120",null,null,null,null,null,this);
            obj.set_text("상품등록일");
            obj.set_background("#9fbae8");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_padding("0px 0px 0px 10px");
            this.addChild(obj.name, obj);

            obj = new Static("sta_sale","20","270",null,"40","1120",null,null,null,null,null,this);
            obj.set_text("진열상태");
            obj.set_background("#9fbae8");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_padding("0px 0px 0px 10px");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","20","360","1230","410",null,null,null,null,null,null,this);
            obj.set_borderRadius("5px");
            obj.set_border("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"28\"/><Column size=\"35\"/><Column size=\"52\"/><Column size=\"61\"/><Column size=\"82\"/><Column size=\"141\"/><Column size=\"79\"/><Column size=\"79\"/><Column size=\"79\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"45\"/><Column size=\"60\"/><Column size=\"45\"/><Column size=\"91\"/><Column size=\"91\"/><Column size=\"65\"/><Column size=\"65\"/></Columns><Rows><Row size=\"52\" band=\"head\"/><Row size=\"33\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"19\" background=\"transparent\" border=\"0px none\"/><Cell row=\"1\" text=\"□\" background=\"#e5f3ff\" border=\"0px none #ffffff,0px none #ffffff,0px none\"/><Cell row=\"1\" col=\"1\" text=\"No\" background=\"#e5f3ff\" border=\"0px none #ffffff,0px none #ffffff,0px none\"/><Cell row=\"1\" col=\"2\" text=\"이미지\" background=\"#e5f3ff\" border=\"0px none #ffffff,0px none #ffffff,0px none\"/><Cell row=\"1\" col=\"3\" text=\"상품코드\" background=\"#e5f3ff\" border=\"0px none #ffffff,0px none #ffffff,0px none\"/><Cell row=\"1\" col=\"4\" text=\"상품명\" background=\"#e5f3ff\" border=\"0px none #ffffff,0px none #ffffff,0px none\"/><Cell row=\"1\" col=\"5\" text=\"설명\" background=\"#e5f3ff\" border=\"0px none #ffffff,0px none #ffffff,0px none\"/><Cell row=\"1\" col=\"6\" text=\"판매가\" background=\"#e5f3ff\" border=\"0px none #ffffff,0px none #ffffff,0px none\"/><Cell row=\"1\" col=\"7\" text=\"할인가\" background=\"#e5f3ff\" border=\"0px none #ffffff,0px none #ffffff,0px none\"/><Cell row=\"1\" col=\"8\" text=\"옵션가\" background=\"#e5f3ff\" border=\"0px none #ffffff,0px none #ffffff,0px none\"/><Cell row=\"1\" col=\"9\" colspan=\"2\" text=\"상품분류\" background=\"#e5f3ff\" border=\"0px none #ffffff,0px none #ffffff,0px none\"/><Cell row=\"1\" col=\"11\" text=\"옵션\" background=\"#e5f3ff\" border=\"0px none #ffffff,0px none #ffffff,0px none\"/><Cell row=\"1\" col=\"12\" text=\"진열\" background=\"#e5f3ff\" border=\"0px none #ffffff,0px none #ffffff,0px none\"/><Cell row=\"1\" col=\"13\" text=\"재고\" background=\"#e5f3ff\" border=\"0px none #ffffff,0px none #ffffff,0px none\"/><Cell row=\"1\" col=\"14\" text=\"품절\" background=\"#e5f3ff\" border=\"0px none #ffffff,0px none #ffffff,0px none\"/><Cell row=\"1\" col=\"15\" text=\"등록일\" background=\"#e5f3ff\" border=\"0px none #ffffff,0px none #ffffff,0px none\"/><Cell row=\"1\" col=\"16\" text=\"수정일\" background=\"#e5f3ff\" border=\"0px none #ffffff,0px none #ffffff,0px none\"/><Cell row=\"1\" col=\"17\" text=\"구매링크\" background=\"#e5f3ff\" border=\"0px none #ffffff,0px none #ffffff,0px none\"/><Cell row=\"1\" col=\"18\" text=\"관리\" background=\"#e5f3ff\" border=\"0px none #ffffff,0px none #ffffff,0px none\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\" text=\"expr:currow+1\" font=\"normal 9px/normal &quot;Arial&quot;\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","20","20","1230","40",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","35","10","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("전체 10건");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_00","160","99","1090","40",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_search","185","2","226","35",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("0");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Combo("cmb_searchType","175","101","150","35",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_font("normal 800 10pt/normal \"Arial\"");
            obj.set_text("상품명");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_00_00","160","156","1090","40",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_cate1","175","158","150","35",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_font("normal 800 10pt/normal \"Arial\"");
            obj.set_text("- 대분류 선택 -");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_cate2","345","158","150","35",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_font("normal 800 10pt/normal \"Arial\"");
            obj.set_text("- 중분류 선택 -");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_00_00_00","160","213","1090","40",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_start","175","215","149","35",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_font("normal 800 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_dash","330","216","20","35",null,null,null,null,null,null,this);
            obj.set_text("~");
            obj.set_taborder("20");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_end","345","215","150","35",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_font("normal 800 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_00_00_00_00","160","270","1090","40",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","24","5","246","35",null,null,null,null,null,null,this.Div00_00_00_00_00.form);
            obj.set_taborder("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_font("normal 800 10pt/normal \"Arial\"");
            var Div00_00_00_00_00_form_Radio00_innerdataset = new nexacro.NormalDataset("Div00_00_00_00_00_form_Radio00_innerdataset", obj);
            Div00_00_00_00_00_form_Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">all</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">display</Col><Col id=\"datacolumn\">진열함</Col></Row><Row><Col id=\"codecolumn\">displayN</Col><Col id=\"datacolumn\">진열안함</Col></Row></Rows>");
            obj.set_innerdataset(Div00_00_00_00_00_form_Radio00_innerdataset);
            this.Div00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("sta_sale","468","0",null,"40","482",null,null,null,null,null,this.Div00_00_00_00_00.form);
            obj.set_text("판매상태");
            obj.set_background("#9fbae8");
            obj.set_taborder("1");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_padding("0px 0px 0px 10px");
            this.Div00_00_00_00_00.addChild(obj.name, obj);

            obj = new Radio("Radio00_00","634","5","246","35",null,null,null,null,null,null,this.Div00_00_00_00_00.form);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_font("normal 800 10pt/normal \"Arial\"");
            var Div00_00_00_00_00_form_Radio00_00_innerdataset = new nexacro.NormalDataset("Div00_00_00_00_00_form_Radio00_00_innerdataset", obj);
            Div00_00_00_00_00_form_Radio00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">allS</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">displayS</Col><Col id=\"datacolumn\">판매함</Col></Row><Row><Col id=\"codecolumn\">displayNS</Col><Col id=\"datacolumn\">판매안함</Col></Row></Rows>");
            obj.set_innerdataset(Div00_00_00_00_00_form_Radio00_00_innerdataset);
            this.Div00_00_00_00_00.addChild(obj.name, obj);

            obj = new Button("btn_reg","950","370","100","35",null,null,null,null,null,null,this);
            obj.set_text("상품등록");
            obj.set_color("#FFFFFF");
            obj.set_background("#047aa9");
            obj.set_borderRadius("6px");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_border("1px solid #CCCCCC");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel","1080","370","150","35",null,null,null,null,null,null,this);
            obj.set_text("엑셀다운로드");
            obj.set_color("#2E7D32");
            obj.set_background("url(\'imagerc::excel_logo.png\') no-repeat left center /38px #ffffff");
            obj.set_border("1px solid #CCCCCC");
            obj.set_borderRadius("6px");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_padding("0px 0px 0px 25px");
            this.addChild(obj.name, obj);

            obj = new Static("sta_listTitle","46","369","80","36",null,null,null,null,null,null,this);
            obj.set_text("목록");
            obj.set_font("bold 13pt/normal \"Arial\"");
            obj.set_taborder("22");
            obj.set_color("#232323");
            this.addChild(obj.name, obj);

            obj = new Static("sta_listTitle2","110","369","179","36",null,null,null,null,null,null,this);
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
        this.registerScript("Form_Product_Main.xfdl", function() {

        this.Static00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.sta_prodType.addEventHandler("onclick",this.sta_prodType_onclick,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
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
