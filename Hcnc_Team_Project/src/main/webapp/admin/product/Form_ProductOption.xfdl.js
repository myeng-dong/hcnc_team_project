(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_ProductOption");
            this.set_titletext("상품관리");
            this.set_background("#eff7ff");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_searchCond", this);
            obj._setContents("<ColumnInfo><Column id=\"SEARCH_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_TEXT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_out_opList", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"INT\" size=\"256\"/><Column id=\"OPTION_ID\" type=\"INT\" size=\"256\"/><Column id=\"PRODUCT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ADDITIONAL_PRICE\" type=\"INT\" size=\"256\"/><Column id=\"OPTION_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"OPTION_VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_DT\" type=\"DATETIME\" size=\"256\"/><Column id=\"IS_VISIBLE\" type=\"STRING\" size=\"1\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00_00","24","84",null,"76","26",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_background("#ffffff");
            obj.set_borderRadius("10px 10px 10px 10px");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_search","315","21","331","35",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("0");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Grid("grid_list","24","200",null,"570","26",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("#FFFFFF");
            obj.set_border("0px none");
            obj.set_borderRadius("10px");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_out_opList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"53\"/><Column size=\"39\"/><Column size=\"100\"/><Column size=\"151\"/><Column size=\"151\"/><Column size=\"151\"/><Column size=\"151\"/><Column size=\"69\"/><Column size=\"223\"/></Columns><Rows><Row size=\"62\" band=\"head\"/><Row size=\"48\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"36\"/></Rows><Band id=\"head\"><Cell colspan=\"9\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell row=\"1\" rowspan=\"2\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell row=\"1\" col=\"1\" rowspan=\"2\" text=\"NO\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell row=\"1\" col=\"2\" rowspan=\"2\" text=\"옵션코드\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell row=\"1\" col=\"3\" rowspan=\"2\" text=\"옵션명\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell row=\"1\" col=\"4\" rowspan=\"2\" text=\"옵션 세부사항\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell row=\"1\" col=\"5\" rowspan=\"2\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\" text=\"관련 상품명\"/><Cell row=\"1\" col=\"6\" rowspan=\"2\" text=\"옵션가\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell row=\"1\" col=\"7\" rowspan=\"2\" text=\"진열상태\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell row=\"1\" col=\"8\" rowspan=\"2\" text=\"등록일\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" background=\"#ffffff\" textAlign=\"center\" edittype=\"checkbox\" text=\"bind:chk\"/><Cell col=\"1\" text=\"expr:currow + 1\" background=\"#ffffff\" font=\"12px/normal &quot;Gulim&quot;\" textAlign=\"center\" edittype=\"none\"/><Cell col=\"2\" background=\"#ffffff\" text=\"bind:OPTION_ID\" font=\"12px/normal &quot;Gulim&quot;\" textAlign=\"center\" edittype=\"none\"/><Cell col=\"3\" background=\"#ffffff\" text=\"bind:OPTION_NAME\" font=\"12px/normal &quot;Gulim&quot;\" textAlign=\"center\" edittype=\"none\"/><Cell col=\"4\" edittype=\"none\" background=\"#ffffff\" text=\"bind:OPTION_VALUE\" font=\"12px/normal &quot;Gulim&quot;\" textAlign=\"center\"/><Cell col=\"5\" edittype=\"none\" background=\"#ffffff\" text=\"bind:PRODUCT_NAME\" font=\"12px/normal &quot;Gulim&quot;\" textAlign=\"center\"/><Cell col=\"6\" edittype=\"none\" background=\"#ffffff\" text=\"bind:ADDITIONAL_PRICE\" font=\"12px/normal &quot;Gulim&quot;\"/><Cell col=\"7\" edittype=\"none\" background=\"#ffffff\" text=\"bind:IS_VISIBLE\" font=\"12px/normal &quot;Gulim&quot;\"/><Cell col=\"8\" edittype=\"none\" background=\"#ffffff\" text=\"bind:INPUT_DT\" font=\"12px/normal &quot;Gulim&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_toggle","900","211","120","40",null,null,null,null,null,null,this);
            obj.set_text("진열상태 변경");
            obj.set_color("#FFFFFF");
            obj.set_background("#f0ad4e");
            obj.set_borderRadius("6px");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_border("1px solid #CCCCCC");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Button("btn_reg","1060","211","120","40",null,null,null,null,null,null,this);
            obj.set_text("옵션등록");
            obj.set_color("#FFFFFF");
            obj.set_background("#102b6e");
            obj.set_borderRadius("6px");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_border("1px solid #CCCCCC");
            obj.set_taborder("0");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("sta_listTitle","50","201","80","61",null,null,null,null,null,null,this);
            obj.set_text("옵션 목록");
            obj.set_font("bold 13pt/normal \"Arial\"");
            obj.set_taborder("1");
            obj.set_color("#232323");
            this.addChild(obj.name, obj);

            obj = new Static("sta_prodType","40","102","140","40",null,null,null,null,null,null,this);
            obj.set_text("옵션검색");
            obj.set_font("normal 700 13px/normal \"Gulim\"");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_taborder("4");
            obj.set_background("transparent");
            obj.set_borderRadius("10px 0px 0px 10px");
            obj.set_color("#333333");
            this.addChild(obj.name, obj);

            obj = new Button("btn_view","690","105","72","34",null,null,null,null,null,null,this);
            obj.set_text("조회");
            obj.set_color("#ffffff");
            obj.set_background("#102b6e");
            obj.set_borderRadius("6px");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_border("1px solid #CCCCCC");
            obj.set_taborder("5");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_searchType","179","105","150","35",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_font("normal 800 10pt/normal \"Arial\"");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var cmb_searchType_innerdataset = new nexacro.NormalDataset("cmb_searchType_innerdataset", obj);
            cmb_searchType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">OPTION_ID</Col><Col id=\"datacolumn\">옵션코드</Col></Row><Row><Col id=\"codecolumn\">OPTION_NAME</Col><Col id=\"datacolumn\">옵션명</Col></Row><Row><Col id=\"codecolumn\">OPTION_VALUE</Col><Col id=\"datacolumn\">옵션 세부사항</Col></Row><Row><Col id=\"codecolumn\">PRODUCT_NAME</Col><Col id=\"datacolumn\">상품명</Col></Row></Rows>");
            obj.set_innerdataset(cmb_searchType_innerdataset);
            obj.set_text("상품명");
            obj.set_value("PRODUCT_NAME");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new Static("stc_total","175","201","70","60",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("");
            obj.set_font("12px/normal \"Gulim\",\"Arial Black\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,800,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_ProductOption.xfdl", function() {
        this.Form_ProductOption_onload = function(obj,e)
        {
        	this.fn_search();
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

            // 2) 콤보/에딧 값을 ds_searchCond에 넣기
            this._setCond(this.ds_searchCond, "SEARCH_TYPE",     this.cmb_searchType.value);                   // 검색분류
            this._setCond(this.ds_searchCond, "SEARCH_TEXT",     this.Div00_00.form.edt_search.text);          // 검색어

        };



        //조회버튼
        this.btn_view_onclick = function(obj,e)
        {
        	this.fn_search();
        };



        //옵션 목록 조회 (조건포함)
        this.fn_search = function() {
            // 1) 조회조건 Dataset 구성
            this.fn_makeSearchCond();

            // 2) 트랜잭션 호출 (검색조건 Dataset 하나로 전달)
            this.transaction(
                "selectOptionByAdmin",            // 서비스 ID (콜백 분기용)
                "svc::selectOptionByAdmin.do",    // 컨트롤러 URL
                "ds_searchCond=ds_searchCond",         // inDatasets: 조건 묶음
                "ds_out_opList=ds_out_opList",       // outDatasets: 결과 그리드 바인딩
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
        	case "selectOptionByAdmin":
        		var ea = this.ds_out_opList.getRowCount();
        		this.stc_total.set_text("총 ["+ea+"]건");

        		break;

        	case "deleteOptionByAdmin":
        		this.alert("삭제가 완료되었습니다.");
                this.fn_search();  // 삭제 후 목록 재조회

        		break;

            }
        };




        //옵션등록(페이지이동)
        this.btn_reg_onclick = function(obj,e)
        {

        	this.go("product::Form_ProductOptionReg.xfdl");
        };



        //삭제버튼
        this.btn_del_onclick = function(obj,e)
        {
            var delRows = [];

            // 1) 체크박스 선택된 행 OPTION_ID 수집
            for (var i = 0; i < this.ds_out_opList.getRowCount(); i++) {
                if (this.ds_out_opList.getColumn(i, "chk") == 1) {
                    delRows.push(this.ds_out_opList.getColumn(i, "OPTION_ID"));
                }
            }

            // 2) 유효성 검사
            if (delRows.length == 0) {
                this.alert("삭제할 옵션을 선택하세요.");
                return;
            }

            // 3) 사용자 확인
            if (!this.confirm("총 " + delRows.length + "건의 옵션을 삭제하시겠습니까?")) {
                return;
            }

            // 4) 삭제용 Dataset 구성
            var ds_in = new Dataset();
            ds_in.addColumn("OPTION_ID", "int");

            for (var j=0; j<delRows.length; j++) {
                var row = ds_in.addRow();
                ds_in.setColumn(row, "OPTION_ID", delRows[j]);
            }

            // 5) 트랜잭션 호출
            this.transaction(
                "deleteOptionByAdmin",
                "svc::deleteOptionByAdmin.do",
                "ds_in=ds_in",     // 선택된 ID만 전달
                "",
                "",
                "fn_callback",
                true
            );
        };

        this.btn_toggle_onclick = function(obj, e)
        {
            var selRows = [];

            // 1) 체크박스 선택된 행 수집
            for (var i=0; i<this.ds_out_opList.getRowCount(); i++) {
                if (this.ds_out_opList.getColumn(i, "chk") == 1) {
                    var optionId = this.ds_out_opList.getColumn(i, "OPTION_ID");
                    var isVisible = this.ds_out_opList.getColumn(i, "IS_VISIBLE");
                    selRows.push({ OPTION_ID: optionId, IS_VISIBLE: isVisible });
                }
            }

            if (selRows.length == 0) {
                this.alert("변경할 옵션을 선택하세요.");
                return;
            }

            if (!this.confirm("총 " + selRows.length + "건의 옵션 진열상태를 변경하시겠습니까?")) {
                return;
            }

            // 2) 변경할 Dataset 구성
            var ds_in = new Dataset();
            ds_in.addColumn("OPTION_ID", "int");
            ds_in.addColumn("IS_VISIBLE", "string");

            for (var j=0; j<selRows.length; j++) {
                var row = ds_in.addRow();
                ds_in.setColumn(row, "OPTION_ID", selRows[j].OPTION_ID);

                // 상태 반전 (Y → N, N → Y)
                var newState = (selRows[j].IS_VISIBLE == "Y" ? "N" : "Y");
                ds_in.setColumn(row, "IS_VISIBLE", newState);
            }

            // 3) 트랜잭션 호출
            this.transaction(
                "updateOptionVisibleByAdmin",
                "svc::updateOptionVisibleByAdmin.do",
                "ds_in=ds_in",
                "",
                "",
                "fn_callback",
                true
            );
        };

















        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_ProductOption_onload,this);
            this.btn_toggle.addEventHandler("onclick",this.btn_toggle_onclick,this);
            this.btn_reg.addEventHandler("onclick",this.btn_reg_onclick,this);
            this.sta_listTitle.addEventHandler("onclick",this.sta_listTitle_onclick,this);
            this.sta_prodType.addEventHandler("onclick",this.sta_prodType_onclick,this);
            this.btn_view.addEventHandler("onclick",this.btn_view_onclick,this);
        };
        this.loadIncludeScript("Form_ProductOption.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
