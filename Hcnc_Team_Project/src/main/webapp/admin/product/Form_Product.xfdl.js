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
            obj._setContents("<ColumnInfo><Column id=\"PRODUCT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_CONTENT\" type=\"STRING\" size=\"1000\"/><Column id=\"COST_PRICE\" type=\"INT\" size=\"256\"/><Column id=\"PRODUCT_PRICE\" type=\"INT\" size=\"256\"/><Column id=\"ADDITIONAL_PRICE\" type=\"INT\" size=\"256\"/><Column id=\"MAIN_CATE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_CATE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPTION_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"IS_VISIBLE\" type=\"STRING\" size=\"256\"/><Column id=\"QUANTITY\" type=\"INT\" size=\"256\"/><Column id=\"SOLD_OUT\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_DT\" type=\"DATETIME\" size=\"256\"/><Column id=\"UPDATE_DT\" type=\"DATETIME\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_in_search_combo", this);
            obj._setContents("<ColumnInfo><Column id=\"MAIN_CATE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_CATE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_out_search_combo00", this);
            obj._setContents("<ColumnInfo><Column id=\"MAIN_CATE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_CATE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","24","20","1230","50",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("");
            obj.set_background("#ffffff");
            obj.set_borderRadius("10px 0px 0px 10px");
            this.addChild(obj.name, obj);

            obj = new Static("stc_total","39","10","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_00","164","99","1090","40",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("");
            obj.set_background("#ffffff");
            obj.set_borderRadius("0px 10px 10px 0px");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_search","185","2","226","35",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("0");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Combo("cmb_searchType","179","101","150","35",null,null,null,null,null,null,this);
            obj.set_taborder("11");
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

            obj = new Div("Div00_00_00","164","156","1090","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("#ffffff");
            obj.set_borderRadius("0px 10px 10px 0px");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_cate1","179","158","150","35",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_font("normal 800 10pt/normal \"Arial\"");
            obj.set_innerdataset("ds_search_combo");
            obj.set_codecolumn("MAIN_CATE_NM");
            obj.set_datacolumn("대분류 선택");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_cate2","349","158","150","35",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_font("normal 800 10pt/normal \"Arial\"");
            obj.set_innerdataset("ds_search_combo");
            obj.set_codecolumn("SUB_CATE_NM");
            obj.set_datacolumn("중분류 선택");
            obj.set_text("- 중분류 선택 -");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_00_00_00","164","213","1090","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_background("#ffffff");
            obj.set_borderRadius("0px 10px 10px 0px");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_start","179","215","149","35",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_font("normal 800 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_dash","334","216","20","35",null,null,null,null,null,null,this);
            obj.set_text("~");
            obj.set_taborder("12");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_end","349","215","150","35",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_font("normal 800 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_00_00_00_00","164","270","1090","40",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("");
            obj.set_background("#ffffff");
            obj.set_borderRadius("0px 10px 10px 0px");
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
            Div00_00_00_00_00_form_Radio00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">allS</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">displayS</Col><Col id=\"datacolumn\">판매함</Col></Row><Row><Col id=\"codecolumn\">displayNS</Col><Col id=\"datacolumn\">판매안함</Col></Row></Rows>");
            obj.set_innerdataset(Div00_00_00_00_00_form_Radio00_00_innerdataset);
            this.Div00_00_00_00_00.addChild(obj.name, obj);

            obj = new Grid("grid_list","24","349",null,"416","26",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_background("#FFFFFF");
            obj.set_border("0px none");
            obj.set_borderRadius("10px");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_out_proList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"26\"/><Column size=\"32\"/><Column size=\"55\"/><Column size=\"96\"/><Column size=\"148\"/><Column size=\"66\"/><Column size=\"66\"/><Column size=\"66\"/><Column size=\"76\"/><Column size=\"76\"/><Column size=\"76\"/><Column size=\"32\"/><Column size=\"49\"/><Column size=\"32\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"55\"/><Column size=\"40\"/></Columns><Rows><Row size=\"80\" band=\"head\"/><Row size=\"48\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell colspan=\"18\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell row=\"1\" rowspan=\"2\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\" displaytype=\"checkboxcontrol\"/><Cell row=\"1\" col=\"1\" rowspan=\"2\" text=\"NO\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell row=\"1\" col=\"2\" rowspan=\"2\" text=\"상품코드\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell row=\"1\" col=\"3\" rowspan=\"2\" text=\"상품명\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell row=\"1\" col=\"4\" rowspan=\"2\" text=\"설명\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell row=\"1\" col=\"5\" rowspan=\"2\" text=\"원가\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell row=\"1\" col=\"6\" rowspan=\"2\" text=\"판매가\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell row=\"1\" col=\"7\" rowspan=\"2\" text=\"옵션가\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell row=\"1\" col=\"8\" colspan=\"2\" text=\"상품분류\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell row=\"1\" col=\"10\" rowspan=\"2\" text=\"옵션\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell row=\"1\" col=\"11\" rowspan=\"2\" text=\"진열\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell row=\"1\" col=\"12\" rowspan=\"2\" text=\"재고\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell row=\"1\" col=\"13\" rowspan=\"2\" text=\"품절\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell row=\"1\" col=\"14\" rowspan=\"2\" text=\"등록일\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell row=\"1\" col=\"15\" rowspan=\"2\" text=\"수정일\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell row=\"1\" col=\"16\" rowspan=\"2\" text=\"구매링크\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell row=\"1\" col=\"17\" rowspan=\"2\" text=\"관리\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell row=\"2\" col=\"8\" text=\"대분류\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell row=\"2\" col=\"9\" text=\"중분류\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" background=\"#ffffff\" textAlign=\"center\"/><Cell col=\"1\" text=\"expr:currow + 1\" background=\"#ffffff\" font=\"12px/normal &quot;Gulim&quot;\" textAlign=\"center\"/><Cell col=\"2\" background=\"#ffffff\" text=\"bind:PRODUCT_CODE\" font=\"12px/normal &quot;Gulim&quot;\"/><Cell col=\"3\" background=\"#ffffff\" text=\"bind:PRODUCT_NAME\" font=\"12px/normal &quot;Gulim&quot;\"/><Cell col=\"4\" edittype=\"normal\" background=\"#ffffff\" text=\"bind:PRODUCT_CONTENT\" font=\"12px/normal &quot;Gulim&quot;\"/><Cell col=\"5\" background=\"#ffffff\" text=\"bind:COST_PRICE\" font=\"12px/normal &quot;Gulim&quot;\"/><Cell col=\"6\" edittype=\"normal\" background=\"#ffffff\" text=\"bind:PRODUCT_PRICE\" font=\"12px/normal &quot;Gulim&quot;\"/><Cell col=\"7\" edittype=\"normal\" background=\"#ffffff\" text=\"bind:ADDITIONAL_PRICE\" font=\"12px/normal &quot;Gulim&quot;\"/><Cell col=\"8\" edittype=\"normal\" background=\"#ffffff\" text=\"bind:MAIN_CATE_NM\" font=\"12px/normal &quot;Gulim&quot;\"/><Cell col=\"9\" edittype=\"normal\" background=\"#ffffff\" text=\"bind:SUB_CATE_NM\" font=\"12px/normal &quot;Gulim&quot;\"/><Cell col=\"10\" background=\"#ffffff\" text=\"bind:OPTION_NAME\" font=\"12px/normal &quot;Gulim&quot;\"/><Cell col=\"11\" edittype=\"normal\" background=\"#ffffff\" text=\"bind:IS_VISIBLE\" font=\"12px/normal &quot;Gulim&quot;\"/><Cell col=\"12\" edittype=\"normal\" background=\"#ffffff\" text=\"bind:QUANTITY\" font=\"12px/normal &quot;Gulim&quot;\"/><Cell col=\"13\" edittype=\"normal\" background=\"#ffffff\" text=\"bind:SOLD_OUT\" font=\"12px/normal &quot;Gulim&quot;\"/><Cell col=\"14\" edittype=\"normal\" background=\"#ffffff\" text=\"bind:INPUT_DT\" font=\"12px/normal &quot;Gulim&quot;\"/><Cell col=\"15\" edittype=\"normal\" background=\"#ffffff\" text=\"bind:UPDATE_DT\" font=\"12px/normal &quot;Gulim&quot;\"/><Cell col=\"16\" edittype=\"normal\" background=\"#ffffff\" font=\"12px/normal &quot;Gulim&quot;\" textAlign=\"center\"/><Cell col=\"17\" edittype=\"normal\" background=\"#ffffff\" font=\"12px/normal &quot;Gulim&quot;\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_reg","935","370","100","40",null,null,null,null,null,null,this);
            obj.set_text("상품등록");
            obj.set_color("#FFFFFF");
            obj.set_background("#89a7ff");
            obj.set_borderRadius("6px");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_border("1px solid #CCCCCC");
            obj.set_taborder("1");
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
            this.addChild(obj.name, obj);

            obj = new Static("sta_listTitle","50","360","80","61",null,null,null,null,null,null,this);
            obj.set_text("목록");
            obj.set_font("bold 13pt/normal \"Arial\"");
            obj.set_taborder("8");
            obj.set_color("#232323");
            this.addChild(obj.name, obj);

            obj = new Static("sta_prodType","24","99",null,"40","1116",null,null,null,null,null,this);
            obj.set_text("검색분류");
            obj.set_font("normal 700 13px/normal \"Gulim\"");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_taborder("16");
            obj.set_background("#ffffff");
            obj.set_borderRadius("10px 0px 0px 10px");
            obj.set_color("#333333");
            this.addChild(obj.name, obj);

            obj = new Static("sta_category","24","156",null,"40","1116",null,null,null,null,null,this);
            obj.set_text("상품분류");
            obj.set_font("normal 700 13px/normal \"Gulim\"");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_taborder("17");
            obj.set_background("#ffffff");
            obj.set_borderRadius("10px 0px 0px 10px");
            obj.set_color("#333333");
            this.addChild(obj.name, obj);

            obj = new Static("sta_regDate","24","213",null,"40","1116",null,null,null,null,null,this);
            obj.set_text("상품등록일");
            obj.set_font("normal 700 13px/normal \"Gulim\"");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_taborder("18");
            obj.set_background("#ffffff");
            obj.set_borderRadius("10px 0px 0px 10px");
            obj.set_color("#333333");
            this.addChild(obj.name, obj);

            obj = new Static("sta_sale","24","270",null,"40","1116",null,null,null,null,null,this);
            obj.set_text("진열상태");
            obj.set_font("normal 700 13px/normal \"Gulim\"");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_taborder("19");
            obj.set_background("#ffffff");
            obj.set_borderRadius("10px 0px 0px 10px");
            obj.set_color("#333333");
            this.addChild(obj.name, obj);

            obj = new Button("btn_view","698","102","72","34",null,null,null,null,null,null,this);
            obj.set_text("조회");
            obj.set_color("#FFFFFF");
            obj.set_background("#89a7ff");
            obj.set_borderRadius("6px");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_border("1px solid #CCCCCC");
            obj.set_taborder("20");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,800,this,function(p){});
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
        this.registerScript("Form_Product.xfdl", function() {
         this.Form_ProductAdmin_onload = function(obj,e)
         {
         	this.fn_search();
         };


         this.fn_callback = function(strSvcID, nErrorCode, strErrorMag){
         	if (nErrorCode < 0) { this.alert("오류: "+strErrorMag); return; }

         	switch(strSvcID){
         	case "selectProductListByAdmin":
         		var ea = this.ds_out_proList.getRowCount();
         		this.stc_total.set_text("총"+ea+"건");
         		break;
         	}
         }

         this.fn_search = function(){
         	var strSvcId 		= "selectProductListByAdmin";
         	var strUrl 			= "svc::selectProductListByAdmin.do";
         	var strInDatasets 	= "ds_in_proList=ds_in_proList";
         	var strOutDatasets 	= "ds_out_proList=ds_out_proList";
         	var strArg 			= "";
         	var callBack 		= "fn_callback";
         	var inAsync 		= true;

         	this.transaction(strSvcId, strUrl, strInDatasets, strOutDatasets, strArg,callBack,inAsync);
         }



         // 엑셀버튼
         this.btn_excel_onclick = function(obj,e)
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

        //상품등록
        this.btn_reg_onclick = function(obj,e)
        {
        	this.go("product::Form_ProductReg.xfdl");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_ProductAdmin_onload,this);
            this.Div00_00_00_00_00.form.Radio00_00.addEventHandler("onitemchanged",this.Div00_00_00_00_00_Radio00_00_onitemchanged,this);
            this.btn_reg.addEventHandler("onclick",this.btn_reg_onclick,this);
            this.btn_excel.addEventHandler("onclick",this.btn_excel_onclick,this);
            this.sta_listTitle.addEventHandler("onclick",this.sta_listTitle_onclick,this);
            this.sta_prodType.addEventHandler("onclick",this.sta_prodType_onclick,this);
        };
        this.loadIncludeScript("Form_Product.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
