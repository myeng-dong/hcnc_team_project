(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Product");
            this.set_titletext("상품관리");
            this.set_background("#eff7ff");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_searchCond", this);
            obj._setContents("<ColumnInfo><Column id=\"SEARCH_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_TEXT\" type=\"STRING\" size=\"256\"/><Column id=\"IS_VISIBLE\" type=\"STRING\" size=\"256\"/><Column id=\"QUANTITY_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"START_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"END_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"MAIN_CATE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_CATE_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_out_proList", this);
            obj._setContents("<ColumnInfo><Column id=\"PRODUCT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_CONTENT\" type=\"STRING\" size=\"1000\"/><Column id=\"COST_PRICE\" type=\"INT\" size=\"256\"/><Column id=\"PRODUCT_PRICE\" type=\"INT\" size=\"256\"/><Column id=\"ADDITIONAL_PRICE\" type=\"INT\" size=\"256\"/><Column id=\"TOTAL_PRICE\" type=\"INT\" size=\"256\"/><Column id=\"MAIN_CATE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_CATE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPTION_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"OPTION_VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"IS_VISIBLE\" type=\"STRING\" size=\"256\"/><Column id=\"QUANTITY\" type=\"INT\" size=\"256\"/><Column id=\"SOLD_OUT\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_DT\" type=\"DATETIME\" size=\"256\"/><Column id=\"UPDATE_DT\" type=\"DATETIME\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mainCate", this);
            obj._setContents("<ColumnInfo><Column id=\"MAIN_CATE_ID\" type=\"INT\" size=\"256\"/><Column id=\"MAIN_CATE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_subCate", this);
            obj._setContents("<ColumnInfo><Column id=\"SUB_CATE_ID\" type=\"INT\" size=\"256\"/><Column id=\"SUB_CATE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","40","20",null,"50","40",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("");
            obj.set_background("#ffffff");
            obj.set_borderRadius("10px 0px 0px 10px");
            this.addChild(obj.name, obj);

            obj = new Static("stc_total","59","15","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_font("bold 14px/normal \"Gulim\",\"Arial Black\"");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_00","40","99",null,"40","40",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("");
            obj.set_background("#ffffff");
            obj.set_borderRadius("0px 10px 10px 0px");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_search","400","2","226","35",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("0");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Div("Div00_00_00","40","156",null,"40","40",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("#ffffff");
            obj.set_borderRadius("0px 10px 10px 0px");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_00_00_00","40","213",null,"40","40",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_background("#ffffff");
            obj.set_borderRadius("0px 10px 10px 0px");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_00_00_00_00","40","270",null,"40","40",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("");
            obj.set_background("#ffffff");
            obj.set_borderRadius("0px 10px 10px 0px");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","140","5","246","35",null,null,null,null,null,null,this.Div00_00_00_00_00.form);
            obj.set_taborder("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_font("normal 800 10pt/normal \"Arial\"");
            var Div00_00_00_00_00_form_Radio00_innerdataset = new nexacro.NormalDataset("Div00_00_00_00_00_form_Radio00_innerdataset", obj);
            Div00_00_00_00_00_form_Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">all</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">진열함</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">진열안함</Col></Row></Rows>");
            obj.set_innerdataset(Div00_00_00_00_00_form_Radio00_innerdataset);
            obj.set_text("전체");
            obj.set_value("all");
            obj.set_index("0");
            this.Div00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("sta_sale","537","0",null,"40","577",null,null,null,null,null,this.Div00_00_00_00_00.form);
            obj.set_text("판매상태");
            obj.set_taborder("1");
            obj.set_font("normal 700 13px/normal \"Gulim\"");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_background("#ffffff");
            obj.set_borderRadius("10px 0px 0px 10px");
            obj.set_color("#333333");
            this.Div00_00_00_00_00.addChild(obj.name, obj);

            obj = new Radio("Radio00_00","634","5","246","35",null,null,null,null,null,null,this.Div00_00_00_00_00.form);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_font("normal 800 10pt/normal \"Arial\"");
            var Div00_00_00_00_00_form_Radio00_00_innerdataset = new nexacro.NormalDataset("Div00_00_00_00_00_form_Radio00_00_innerdataset", obj);
            Div00_00_00_00_00_form_Radio00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">allS</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">sale</Col><Col id=\"datacolumn\">판매함</Col></Row><Row><Col id=\"codecolumn\">nosale</Col><Col id=\"datacolumn\">판매안함</Col></Row></Rows>");
            obj.set_innerdataset(Div00_00_00_00_00_form_Radio00_00_innerdataset);
            obj.set_text("전체");
            obj.set_value("allS");
            obj.set_index("0");
            this.Div00_00_00_00_00.addChild(obj.name, obj);

            obj = new Grid("grid_list","24","349",null,"416","26",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_background("#FFFFFF");
            obj.set_border("0px none");
            obj.set_borderRadius("10px");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_out_proList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"26\"/><Column size=\"32\"/><Column size=\"71\"/><Column size=\"92\"/><Column size=\"158\"/><Column size=\"63\"/><Column size=\"63\"/><Column size=\"63\"/><Column size=\"70\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"41\"/><Column size=\"41\"/><Column size=\"67\"/></Columns><Rows><Row size=\"80\" band=\"head\"/><Row size=\"48\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell colspan=\"16\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell row=\"1\" rowspan=\"2\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\" displaytype=\"checkboxcontrol\"/><Cell row=\"1\" col=\"1\" rowspan=\"2\" text=\"NO\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell row=\"1\" col=\"2\" rowspan=\"2\" text=\"상품코드\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell row=\"1\" col=\"3\" rowspan=\"2\" text=\"상품명\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell row=\"1\" col=\"4\" rowspan=\"2\" text=\"설명\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell row=\"1\" col=\"5\" rowspan=\"2\" text=\"원가\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell row=\"1\" col=\"6\" rowspan=\"2\" text=\"상품가\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell row=\"1\" col=\"7\" rowspan=\"2\" text=\"옵션가\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell row=\"1\" col=\"8\" rowspan=\"2\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\" text=\"최종판매가\"/><Cell row=\"1\" col=\"9\" colspan=\"2\" text=\"상품분류\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell row=\"1\" col=\"11\" colspan=\"2\" text=\"옵션\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell row=\"1\" col=\"13\" rowspan=\"2\" text=\"진열\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell row=\"1\" col=\"14\" rowspan=\"2\" text=\"재고\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell row=\"1\" col=\"15\" rowspan=\"2\" text=\"관리\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell row=\"2\" col=\"9\" text=\"대분류\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell row=\"2\" col=\"10\" text=\"중분류\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell row=\"2\" col=\"11\" text=\"옵션\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell row=\"2\" col=\"12\" text=\"세부사항\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" background=\"#ffffff\" textAlign=\"center\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"expr:currow + 1\" background=\"#ffffff\" font=\"12px/normal &quot;Gulim&quot;\" textAlign=\"center\" edittype=\"none\"/><Cell col=\"2\" background=\"#ffffff\" text=\"bind:PRODUCT_CODE\" font=\"12px/normal &quot;Gulim&quot;\" textAlign=\"center\" edittype=\"none\"/><Cell col=\"3\" background=\"#ffffff\" text=\"bind:PRODUCT_NAME\" font=\"12px/normal &quot;Gulim&quot;\" textAlign=\"center\" edittype=\"none\"/><Cell col=\"4\" edittype=\"none\" background=\"#ffffff\" text=\"bind:PRODUCT_CONTENT\" font=\"12px/normal &quot;Gulim&quot;\" textAlign=\"center\"/><Cell col=\"5\" background=\"#ffffff\" text=\"bind:COST_PRICE\" font=\"12px/normal &quot;Gulim&quot;\" edittype=\"none\"/><Cell col=\"6\" edittype=\"none\" background=\"#ffffff\" text=\"bind:PRODUCT_PRICE\" font=\"12px/normal &quot;Gulim&quot;\"/><Cell col=\"7\" edittype=\"none\" background=\"#ffffff\" text=\"bind:ADDITIONAL_PRICE\" font=\"12px/normal &quot;Gulim&quot;\"/><Cell col=\"8\" edittype=\"none\" background=\"#ffffff\" text=\"bind:TOTAL_PRICE\" font=\"12px/normal &quot;Gulim&quot;\"/><Cell col=\"9\" edittype=\"none\" background=\"#ffffff\" text=\"bind:MAIN_CATE_NM\" font=\"12px/normal &quot;Gulim&quot;\" textAlign=\"center\"/><Cell col=\"10\" edittype=\"none\" background=\"#ffffff\" text=\"bind:SUB_CATE_NM\" font=\"12px/normal &quot;Gulim&quot;\" textAlign=\"center\"/><Cell col=\"11\" background=\"#ffffff\" text=\"bind:OPTION_NAME\" font=\"12px/normal &quot;Gulim&quot;\" textAlign=\"center\" edittype=\"none\"/><Cell col=\"12\" edittype=\"none\" background=\"#ffffff\" text=\"bind:OPTION_VALUE\" font=\"12px/normal &quot;Gulim&quot;\" textAlign=\"center\"/><Cell col=\"13\" edittype=\"none\" background=\"#ffffff\" text=\"bind:IS_VISIBLE\" font=\"12px/normal &quot;Gulim&quot;\" textAlign=\"center\"/><Cell col=\"14\" edittype=\"none\" background=\"#ffffff\" text=\"bind:QUANTITY\" font=\"12px/normal &quot;Gulim&quot;\"/><Cell col=\"15\" edittype=\"none\" background=\"#ffffff\" font=\"12px/normal &quot;Gulim&quot;\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_reg","935","370","100","40",null,null,null,null,null,null,this);
            obj.set_text("상품등록");
            obj.set_color("#FFFFFF");
            obj.set_background("#344ad9");
            obj.set_borderRadius("6px");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_border("1px solid #CCCCCC");
            obj.set_taborder("1");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel","1065","370","150","40",null,null,null,null,null,null,this);
            obj.set_text("엑셀다운로드");
            obj.set_color("#2E7D32");
            obj.set_background("url(\'imagerc::excel_logo.png\') no-repeat left center /38px #ffffff");
            obj.set_border("1px solid #CCCCCC");
            obj.set_borderRadius("6px");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_padding("0px 0px 0px 25px");
            obj.set_taborder("3");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("sta_listTitle","50","360","80","61",null,null,null,null,null,null,this);
            obj.set_text("목록");
            obj.set_font("bold 13pt/normal \"Arial\"");
            obj.set_taborder("6");
            obj.set_color("#232323");
            this.addChild(obj.name, obj);

            obj = new Static("sta_prodType","40","99","140","40",null,null,null,null,null,null,this);
            obj.set_text("검색분류");
            obj.set_font("normal 700 13px/normal \"Gulim\"");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_taborder("10");
            obj.set_background("#ffffff");
            obj.set_borderRadius("10px 0px 0px 10px");
            obj.set_color("#333333");
            this.addChild(obj.name, obj);

            obj = new Static("sta_category","40","156","140","40",null,null,null,null,null,null,this);
            obj.set_text("상품분류");
            obj.set_font("normal 700 13px/normal \"Gulim\"");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_taborder("11");
            obj.set_background("#ffffff");
            obj.set_borderRadius("10px 0px 0px 10px");
            obj.set_color("#333333");
            this.addChild(obj.name, obj);

            obj = new Static("sta_regDate","40","213","140","40",null,null,null,null,null,null,this);
            obj.set_text("상품등록일");
            obj.set_font("normal 700 13px/normal \"Gulim\"");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_taborder("12");
            obj.set_background("#ffffff");
            obj.set_borderRadius("10px 0px 0px 10px");
            obj.set_color("#333333");
            this.addChild(obj.name, obj);

            obj = new Static("sta_sale","40","270","140","40",null,null,null,null,null,null,this);
            obj.set_text("진열상태");
            obj.set_font("normal 700 13px/normal \"Gulim\"");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_taborder("13");
            obj.set_background("#ffffff");
            obj.set_borderRadius("10px 0px 0px 10px");
            obj.set_color("#333333");
            this.addChild(obj.name, obj);

            obj = new Button("btn_view","698","102","72","34",null,null,null,null,null,null,this);
            obj.set_text("조회");
            obj.set_color("#FFFFFF");
            obj.set_background("#344ad9");
            obj.set_borderRadius("6px");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_border("1px solid #CCCCCC");
            obj.set_taborder("14");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_searchType","179","101","150","35",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_font("normal 800 10pt/normal \"Arial\"");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var cmb_searchType_innerdataset = new nexacro.NormalDataset("cmb_searchType_innerdataset", obj);
            cmb_searchType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">PRODUCT_CODE</Col><Col id=\"datacolumn\">상품코드</Col></Row><Row><Col id=\"codecolumn\">PRODUCT_NAME</Col><Col id=\"datacolumn\">상품명</Col></Row></Rows>");
            obj.set_innerdataset(cmb_searchType_innerdataset);
            obj.set_text("상품명");
            obj.set_value("PRODUCT_NAME");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_cate1","179","158","150","35",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_font("normal 800 10pt/normal \"Arial\"");
            obj.set_innerdataset("ds_mainCate");
            obj.set_codecolumn("MAIN_CATE_ID");
            obj.set_datacolumn("MAIN_CATE_NM");
            obj.set_displayrowcount("20");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_start","179","215","149","35",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_font("normal 800 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_cate2","349","158","150","35",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_font("normal 800 10pt/normal \"Arial\"");
            obj.set_innerdataset("ds_subCate");
            obj.set_codecolumn("SUB_CATE_ID");
            obj.set_datacolumn("SUB_CATE_NM");
            obj.set_displayrowcount("20");
            obj.set_text("- 중분류 선택 -");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_end","349","215","150","35",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_font("normal 800 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_dash","334","216","20","35",null,null,null,null,null,null,this);
            obj.set_text("~");
            obj.set_taborder("20");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
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
        this.registerScript("Form_Product.xfdl", function() {
        this.Form_Product_onload = function(obj,e)
        {
        	this.setTimer(1, 10); //10ms 후 실행
        };

        this.Form_Product_ontimer = function(obj,e){
            if (e.timerid == 1) {
                this.killTimer(1);

                // 라디오 기본값 세팅
                this.Div00_00_00_00_00.form.Radio00.set_value("all");
                this.Div00_00_00_00_00.form.Radio00_00.set_value("allS");

                if (this.cal_start) this.cal_start.set_dateformat("yyyy-MM-dd");
                if (this.cal_end)   this.cal_end.set_dateformat("yyyy-MM-dd");

                // 대분류 콤보 데이터 조회
                this.transaction(
                    "selectMainCategoryComboByAdmin",
                    "svc::selectMainCategoryComboByAdmin.do",
                    "",
                    "ds_mainCate=ds_mainCate",
                    "",
                    "fn_callback",
                    true
                );

                //  전체조회 실행 (조건 없음)
                this.fn_search();
            }
        };



        // Calendar 값 → 'yyyy-MM-dd' 또는 빈 문자열
        this._dateOrEmpty = function(cal) {
            if (!cal) return "";
            var v = cal.value;                 // 값이 없으면 null/"" 임
            if (v === undefined || v === null || v === "") return "";
            v = v.toString();
            if (v.length !== 8) return "";     // yyyymmdd 형식만 허용
            return v.substr(0,4) + "-" + v.substr(4,2) + "-" + v.substr(6,2);
        };


        /***** (유틸) Dataset 컬럼 세팅 공통 함수 *****/
        this._setCond = function(ds, col, val) {
            // null/undefined만 제외하고 값 세팅
            if (val !== undefined && val !== null) {
                ds.setColumn(0, col, val);
            }
        };



        /***** 조회조건 Dataset 구성 *****/
        this.fn_makeSearchCond = function() {
            // 1) 초기화 및 한 줄 추가
            this.ds_searchCond.clearData();
            this.ds_searchCond.addRow();

            // 2) 콤보/에딧/라디오/달력 값을 ds_searchCond에 넣기
            this._setCond(this.ds_searchCond, "SEARCH_TYPE",     this.cmb_searchType.value);                   // 검색분류 (PRODUCT_CODE/PRODUCT_NAME)
            this._setCond(this.ds_searchCond, "SEARCH_TEXT",     this.Div00_00.form.edt_search.text);          // 검색어
            this._setCond(this.ds_searchCond, "IS_VISIBLE",      this.Div00_00_00_00_00.form.Radio00.value);   // 진열상태(all,Y,N)
            // 컬럼 통일: QUANTITY_STATUS 로 보냄 (mapper와 일치)
            this._setCond(this.ds_searchCond, "QUANTITY_STATUS", this.Div00_00_00_00_00.form.Radio00_00.value);// 판매상태(allS,sale,nosale)
            this._setCond(this.ds_searchCond, "START_DATE",      this._dateOrEmpty(this.cal_start));           // 시작일
            this._setCond(this.ds_searchCond, "END_DATE",        this._dateOrEmpty(this.cal_end));             // 종료일
            this._setCond(this.ds_searchCond, "MAIN_CATE_ID",    this.cmb_cate1.value);                        // 대분류
            this._setCond(this.ds_searchCond, "SUB_CATE_ID",     this.cmb_cate2.value);                        // 중분류

            // 3) 프론트에서 '전체' 값을 서버로 보낼지 말지 선택
            //    - 여기서는 'all', 'allS'를 그대로 보내고, 서버/쿼리에서 무시 처리(WHERE 동적조건) → 유지보수 유리
        };





         //조회버튼
        this.btn_view_onclick = function(obj,e)
        {
        	this.fn_search();
        };



        //상품 목록 조회 (조건포함)
        this.fn_search = function() {
            // 1) 조회조건 Dataset 구성
            this.fn_makeSearchCond();

            // 2) 트랜잭션 호출 (검색조건 Dataset 하나로 전달)
            this.transaction(
                "selectProductListByAdmin",            // 서비스 ID (콜백 분기용)
                "svc::selectProductListByAdmin.do",    // 컨트롤러 URL
                "ds_searchCond=ds_searchCond",         // inDatasets: 조건 묶음
                "ds_out_proList=ds_out_proList",       // outDatasets: 결과 그리드 바인딩
                "",                                    // args는 사용하지 않음 (전부 Dataset으로 처리)
                "fn_callback",                         // 콜백 함수명
                true                                   // 비동기
            );
        };





          //콜백
        this.fn_callback = function(strSvcID, nErrorCode, strErrorMag){
            if (nErrorCode < 0) {
                this.alert("오류: "+strErrorMag);
        		return;
            }

            switch(strSvcID){
                case "selectProductListByAdmin":
                    var ea = this.ds_out_proList.getRowCount();
                    this.stc_total.set_text("총 "+ea+"건");

                    break;
                case "selectMainCategoryComboByAdmin":
                    this.ds_mainCate.insertRow(0);
                    this.ds_mainCate.setColumn(0,"MAIN_CATE_ID","");
                    this.ds_mainCate.setColumn(0,"MAIN_CATE_NM","- 전체 -");
                    break;
                case "selectSubCategoryComboByAdmin":
                    this.ds_subCate.insertRow(0);
                    this.ds_subCate.setColumn(0,"SUB_CATE_ID","");
                    this.ds_subCate.setColumn(0,"SUB_CATE_NM","- 전체 -");
                    break;
            }
        };



        // 콤보 연동 (대분류 선택 시 중분류)
        this.cmb_cate1_onitemchanged = function(obj,e)
        {
            var mainCateId = obj.value;  // 선택한 값
            if (!mainCateId) {
                this.ds_subCate.clearData();
                return;
            }

            this.transaction(
                "selectSubCategoryComboByAdmin",
                "svc::selectSubCategoryComboByAdmin.do",
                "",
                "ds_subCate=ds_subCate",
                "MAIN_CATE_ID=" + mainCateId,
                "fn_callback",
                true
            );
        };

        //상품등록(페이지이동)
        this.btn_reg_onclick = function(obj,e)
        {

        	this.go("product::Form_ProductReg.xfdl");
        };




         // 엑셀버튼
          /*
          this.btn_excel_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
         {
              var xmlStr = "<Rows>";

             var grid = this.grid_list;
             var ds = this.ds_out_proList;
             var rowCount = ds.getRowCount();
             var colCount = grid.getCellCount("body");
             var headCellCount = grid.getCellCount("head");

             // [1] Header 정보
             xmlStr += "<Header>";
             for (var hc = 0; hc < headCellCount; hc++) {
                 var row     = grid.getCellProperty("head", hc, "row");
                 var col     = grid.getCellProperty("head", hc, "col");
                 var rowspan = grid.getCellProperty("head", hc, "rowspan");
                 var colspan = grid.getCellProperty("head", hc, "colspan");
                 var text    = grid.getCellProperty("head", hc, "text");
                 if (text == null || text == "undefined") text = "";

                 xmlStr += "<Cell row='" + row + "' col='" + col +
         		"' rowspan='" + rowspan + "' colspan='" + colspan +
         		"'><![CDATA[" + text + "]]></Cell>";
             }
             xmlStr += "</Header>";

              //[2] Body 데이터
             xmlStr += "<Body>";
             for (var i = 0; i < rowCount; i++) {
                 xmlStr += "<Row>";
                 for (var j = 0; j < colCount; j++) {
                     var cellValue = grid.getCellText(i, j);
                     if (cellValue == null || cellValue == "undefined") cellValue = "";
                     xmlStr += "<C" + j + "><![CDATA[" + cellValue + "]]></C" + j + ">";
                 }
                 xmlStr += "</Row>";
             }
             xmlStr += "</Body>";

             xmlStr += "</Rows>";

             // [3] POST 방식으로 JSP 호출
             var svcUrl = "http://localhost:8080/admin/excelExport.jsp";
            var xmlhttp = new XMLHttpRequest();

            xmlhttp.open("POST", svcUrl, true);
            xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState === 4) {
                    if (xmlhttp.status === 200) {
                        alert("엑셀 내보내기 완료!");
                    } else {
                        alert("엑셀 내보내기 실패! 상태코드: " + xmlhttp.status);
                    }
                }
            };

            xmlhttp.send("xmlData=" + encodeURIComponent(xmlStr));
        }
        */






        /****************************************************
         * [상수] 엑셀 JSP URL
         *  - 서버 주소/포트/컨텍스트 맞춰 주세요.
         *  - 예) http://localhost:8080/admin/excelExport.jsp
         ****************************************************/
        this.EXCEL_JSP_URL = "http://localhost:8080/admin/excelExport.jsp";


        /****************************************************
         * ① FileDownload 컴포넌트를 준비하는 함수
         *  - 없으면 생성해서 화면에 붙입니다.
         ****************************************************/
        this._ensureFileDownload = function () {
            // 이미 만들어둔 적 있으면 재사용
            if (this.filedown && this.filedown instanceof nexacro.FileDownload) return;

            // 동적으로 FileDownload 생성
            var fd = new nexacro.FileDownload("filedown", 0, 0, 0, 0, null, null, this);
            this.addChild("filedown", fd);

            // 성공/실패 로그 및 안내
            fd.addEventHandler("onsuccess", function (obj, e) {
                trace("[Excel] 다운로드 성공");
            }, this);

            fd.addEventHandler("onerror", function (obj, e) {
                // e.errormsg 에러메시지 확인
                this.alert("엑셀 다운로드 실패: " + e.errormsg);
            }, this);

            this.filedown = fd;
        };


        /****************************************************
         * ② Grid + Dataset → XML 문자열 생성 함수
         *  - 너가 이전에 쓰던 헤더/바디 XML 포맷을 그대로 생성.
         *  - Grid 멀티헤더(행/열 병합) 정보를 모두 수집해서 <Header> 구성
         *  - Body는 화면에 보이는 값(grid.getCellText) 기준으로 <Body> 구성
         ****************************************************/
        this._buildGridXmlForExcel = function () {
            // 내 화면의 그리드/데이터셋 참조
            var grid = this.grid_list;                 // 그리드 객체
            var ds   = this.ds_out_proList;            // 데이터셋 객체

            if (!grid || !ds) {
                this.alert("그리드나 데이터셋을 찾을 수 없습니다.");
                return "";
            }

            // XML 시작 태그
            var xmlStr = "<Rows>";

            // --- [1] Header 생성 ---
            xmlStr += "<Header>";

            // 그리드 head 밴드 셀 개수(멀티헤더 포함)
            var headCellCount = grid.getCellCount("head");

            for (var hc = 0; hc < headCellCount; hc++) {
                // 각 헤더셀의 행/열 좌표 + 병합(rowspan/colspan) + 텍스트 추출
                var row     = grid.getCellProperty("head", hc, "row");       // 헤더행 인덱스
                var col     = grid.getCellProperty("head", hc, "col");       // 헤더열 인덱스
                var rowspan = grid.getCellProperty("head", hc, "rowspan");   // 세로병합 크기
                var colspan = grid.getCellProperty("head", hc, "colspan");   // 가로병합 크기
                var text    = grid.getCellProperty("head", hc, "text");      // 셀 표시 텍스트

                if (text == null || text == "undefined") text = "";

                // CDATA로 감싸 특수문자 안전하게
                xmlStr += "<Cell row='" + row + "' col='" + col +
                          "' rowspan='" + rowspan + "' colspan='" + colspan +
                          "'><![CDATA[" + text + "]]></Cell>";
            }
            xmlStr += "</Header>";

            // --- [2] Body 생성 ---
            xmlStr += "<Body>";

            // 본문(body) 셀 개수
            var bodyCellCount = grid.getCellCount("body");

            // 데이터셋 row 수만큼 반복
            var rowCount = ds.getRowCount();
            for (var r = 0; r < rowCount; r++) {
                xmlStr += "<Row>";

                // body 셀 인덱스대로 화면 표시값을 추출
                for (var c = 0; c < bodyCellCount; c++) {
                    // getCellText(row, col) → 실제 그리드에 보이는 문자열
                    var cellValue = grid.getCellText(r, c);
                    if (cellValue == null || cellValue == "undefined") cellValue = "";

                    // <C0>... </C0>, <C1>...</C1> 형식으로 채움
                    xmlStr += "<C" + c + "><![CDATA[" + cellValue + "]]></C" + c + ">";
                }
                xmlStr += "</Row>";
            }
            xmlStr += "</Body>";

            // XML 종료 태그
            xmlStr += "</Rows>";

            return xmlStr;
        };


        /****************************************************
         * ③ 엑셀 버튼 클릭 → (권장) 토큰 방식 다운로드
         *  - 1) xmlData를 서버 세션에 저장(prepare)
         *  - 2) token 받으면 FileDownload로 GET 다운로드
         *  - 이렇게 해야 “다운로드 폴더”로 떨어집니다.
         ****************************************************/
        this.btn_excel_onclick = function (obj, e) {
            // 0) FileDownload 준비
            this._ensureFileDownload();

            // 1) 그리드 → XML 문자열 생성
            var xmlStr = this._buildGridXmlForExcel();
            if (!xmlStr) return;

            // (선택) 데이터 없으면 확인
            if (this.ds_out_proList.getRowCount() === 0) {
                if (!this.confirm("조회된 데이터가 없습니다. 헤더만 다운로드할까요?")) return;
            }

            // 2) 토큰 준비 요청(prepare) – XHR POST
            var prepareUrl = this.EXCEL_JSP_URL + "?mode=prepare";
            var xhr = new XMLHttpRequest();                               // 브라우저/런타임 공통 XHR
            xhr.open("POST", prepareUrl, true);                           // 비동기 POST
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");

            // 3) 응답 처리
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {                               // 통신 완료
                    if (xhr.status === 200) {                             // OK
                        var res = null;
                        try {
                            res = JSON.parse(xhr.responseText);          // {"ok":true,"token":"..."}
                        } catch (ex) {
                            this.alert("서버 응답 파싱 실패: " + xhr.responseText);
                            return;
                        }

                        if (res && res.ok && res.token) {
                            // 4) FileDownload로 GET 다운로드(다운로드 폴더로 저장)
                            var downUrl = this.EXCEL_JSP_URL + "?mode=download&token=" + encodeURIComponent(res.token);
                            this.filedown.set_downloadurl(downUrl);
                            this.filedown.download();
        					this.alert("목록 엑셀파일 다운로드 완료");
                        } else {
                            this.alert("엑셀 준비 실패: " + (res && res.message ? res.message : "unknown error"));
                        }
                    } else {
                        this.alert("서버 통신 실패: HTTP " + xhr.status);
                    }
                }
            }.bind(this);

            xhr.onerror = function () {                                    // 네트워크 에러
                this.alert("네트워크 오류로 엑셀 준비에 실패했습니다.");
            }.bind(this);

            // 5) xmlData를 x-www-form-urlencoded 본문으로 전송
            xhr.send("xmlData=" + encodeURIComponent(xmlStr));
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Product_onload,this);
            this.addEventHandler("ontimer",this.Form_Product_ontimer,this);
            this.Div00_00_00_00_00.form.Radio00_00.addEventHandler("onitemchanged",this.Div00_00_00_00_00_Radio00_00_onitemchanged,this);
            this.btn_reg.addEventHandler("onclick",this.btn_reg_onclick,this);
            this.btn_excel.addEventHandler("onclick",this.btn_excel_onclick,this);
            this.sta_listTitle.addEventHandler("onclick",this.sta_listTitle_onclick,this);
            this.sta_prodType.addEventHandler("onclick",this.sta_prodType_onclick,this);
            this.btn_view.addEventHandler("onclick",this.btn_view_onclick,this);
            this.cmb_cate1.addEventHandler("onitemchanged",this.cmb_cate1_onitemchanged,this);
        };
        this.loadIncludeScript("Form_Product.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
