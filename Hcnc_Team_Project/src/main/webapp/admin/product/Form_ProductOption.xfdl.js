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
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"INT\" size=\"1\"/><Column id=\"OPTION_ID\" type=\"INT\" size=\"256\"/><Column id=\"PRODUCT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ADDITIONAL_PRICE\" type=\"INT\" size=\"256\"/><Column id=\"OPTION_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"OPTION_VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_DT\" type=\"DATETIME\" size=\"256\"/><Column id=\"IS_VISIBLE\" type=\"STRING\" size=\"1\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_in", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"OPTION_ID\" type=\"INT\" size=\"256\"/><Column id=\"IS_VISIBLE\" type=\"STRING\" size=\"1\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00_00","24","84",null,"76","26",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("#ffffff");
            obj.set_borderRadius("10px 10px 10px 10px");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_search","315","21","331","35",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("0");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Grid("grid_list","24","200",null,"570","26",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#FFFFFF");
            obj.set_border("0px none");
            obj.set_borderRadius("10px");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_out_opList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"78\"/><Column size=\"49\"/><Column size=\"100\"/><Column size=\"151\"/><Column size=\"151\"/><Column size=\"151\"/><Column size=\"151\"/><Column size=\"69\"/><Column size=\"223\"/></Columns><Rows><Row size=\"62\" band=\"head\"/><Row size=\"48\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"36\"/></Rows><Band id=\"head\"><Cell colspan=\"9\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell row=\"1\" rowspan=\"2\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"전체\" verticalAlign=\"bottom\"/><Cell row=\"1\" col=\"1\" rowspan=\"2\" text=\"NO\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell row=\"1\" col=\"2\" rowspan=\"2\" text=\"옵션코드\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell row=\"1\" col=\"3\" rowspan=\"2\" text=\"옵션명\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell row=\"1\" col=\"4\" rowspan=\"2\" text=\"옵션 세부사항\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell row=\"1\" col=\"5\" rowspan=\"2\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\" text=\"관련 상품명\"/><Cell row=\"1\" col=\"6\" rowspan=\"2\" text=\"옵션가\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell row=\"1\" col=\"7\" rowspan=\"2\" text=\"진열상태\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell row=\"1\" col=\"8\" rowspan=\"2\" text=\"등록일\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" background=\"#ffffff\" textAlign=\"center\" edittype=\"checkbox\" text=\"bind:chk\"/><Cell col=\"1\" text=\"expr:currow + 1\" background=\"#ffffff\" font=\"12px/normal &quot;Gulim&quot;\" textAlign=\"center\" edittype=\"none\"/><Cell col=\"2\" background=\"#ffffff\" text=\"bind:OPTION_ID\" font=\"12px/normal &quot;Gulim&quot;\" textAlign=\"center\" edittype=\"none\"/><Cell col=\"3\" background=\"#ffffff\" text=\"bind:OPTION_NAME\" font=\"12px/normal &quot;Gulim&quot;\" textAlign=\"center\" edittype=\"none\"/><Cell col=\"4\" edittype=\"none\" background=\"#ffffff\" text=\"bind:OPTION_VALUE\" font=\"12px/normal &quot;Gulim&quot;\" textAlign=\"center\"/><Cell col=\"5\" edittype=\"none\" background=\"#ffffff\" text=\"bind:PRODUCT_NAME\" font=\"12px/normal &quot;Gulim&quot;\" textAlign=\"center\"/><Cell col=\"6\" edittype=\"none\" background=\"#ffffff\" text=\"bind:ADDITIONAL_PRICE\" font=\"12px/normal &quot;Gulim&quot;\"/><Cell col=\"7\" edittype=\"none\" background=\"#ffffff\" text=\"bind:IS_VISIBLE\" font=\"12px/normal &quot;Gulim&quot;\" textAlign=\"center\"/><Cell col=\"8\" edittype=\"none\" background=\"#ffffff\" text=\"bind:INPUT_DT\" font=\"12px/normal &quot;Gulim&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_total_prefix","168","221","20","20",null,null,null,null,null,null,this);
            obj.set_text("총 [ ");
            this.addChild(obj.name, obj);

            obj = new Static("stc_total_value","200","221","20","20",null,null,null,null,null,null,this);
            obj.set_text("");
            obj.set_textDecoration("underline");
            this.addChild(obj.name, obj);

            obj = new Static("stc_total_suffix","222","221","20","20",null,null,null,null,null,null,this);
            obj.set_text(" ]건");
            this.addChild(obj.name, obj);

            obj = new Button("btn_show","630","221","92","35",null,null,null,null,null,null,this);
            obj.set_text("선택 진열");
            obj.set_color("#FFFFFF");
            obj.set_background("#f09d37");
            obj.set_borderRadius("6px");
            obj.set_font("bold 11pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_hide","740","221","92","35",null,null,null,null,null,null,this);
            obj.set_text("진열 취소");
            obj.set_color("#FFFFFF");
            obj.set_background("#18b391");
            obj.set_borderRadius("6px");
            obj.set_font("bold 11pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_reg","1060","221","120","35",null,null,null,null,null,null,this);
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
            var oArgs = this.getOwnerFrame().arguments;
            if (oArgs && oArgs.REFRESH == "Y") {
                this.fn_search();
            }
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



        //조회버튼(검색)
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
        this.fn_callback = function(strSvcID, nErrorCode, strErrorMsg){
            if (nErrorCode < 0) {
                this.alert("오류: "+strErrorMsg);
        		return;
            }

            switch(strSvcID){
        	case "selectOptionByAdmin":
        		var ea = this.ds_out_opList.getRowCount();

        		this.stc_total_value.set_text(ea);
        		this.stc_total_value.set_textDecoration("underline");
        		break;


        	case "updateOptionVisibleByAdmin":
        		this.alert("진열상태 변경 완료되었습니다.");
                this.fn_search();
        		break;

            }
        };




        //옵션등록(페이지이동)
        // 옵션등록 버튼 클릭 시 (무조건 신규 등록)
        this.btn_reg_onclick = function(obj,e)
        {
        	this.fn_openOptionForm("INSERT"); // 등록 모드
        };


        //체크박스 chk 로 선택된 옵션(진열상태 요청 ,선택된 값만 반전 토글버튼 )
        this.btn_toggle_onclick = function(obj, e)
        {
            var selRows = [];

            for (var i=0; i<this.ds_out_opList.getRowCount(); i++) {
                if (this.ds_out_opList.getColumn(i, "chk") == 1) {
                    var optionId   = this.ds_out_opList.getColumn(i, "OPTION_ID");
                    var isVisible  = this.ds_out_opList.getColumn(i, "IS_VISIBLE");
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

            // 기존 ds_in Dataset 초기화
            this.ds_in.clearData();

            // 선택된 행만 채우기
            for (var j=0; j<selRows.length; j++) {
                var row = this.ds_in.addRow();
                this.ds_in.setColumn(row, "OPTION_ID", selRows[j].OPTION_ID);

                // 상태 반전 (Y → N, N → Y)
                var newState = (selRows[j].IS_VISIBLE == "Y" ? "N" : "Y");
                this.ds_in.setColumn(row, "IS_VISIBLE", newState);
            }

            //  transaction 호출 (이제 ds_in은 Form에 있으므로 정상 동작)
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



        // 선택된 행들을 모아오는 공통 함수
        this._getSelectedOptionIds = function() {
            var ids = [];
            for (var i=0; i<this.ds_out_opList.getRowCount(); i++) {
                if (this.ds_out_opList.getColumn(i, "chk") == 1) {
                    ids.push(this.ds_out_opList.getColumn(i, "OPTION_ID"));
                }
            }
            return ids;
        };




        /**
         * 옵션 진열상태 변경 공통 함수
         * @param {string} newState - "Y" = 진열, "N" = 숨김
         */
        this.fn_updateVisible = function(newState)
        {
            var selRows = [];

            // 1) 체크박스 선택된 행 수집
            for (var i=0; i<this.ds_out_opList.getRowCount(); i++) {
                if (this.ds_out_opList.getColumn(i, "chk") == 1) {
                    selRows.push(this.ds_out_opList.getColumn(i, "OPTION_ID"));
                }
            }

            // 2) 유효성 검사
            if (selRows.length == 0) {
                this.alert((newState == "Y" ? "진열" : "숨김") + "할 옵션을 선택하세요.");
                return;
            }

            if (!this.confirm("총 " + selRows.length + "건을 " + (newState == "Y" ? "진열" : "숨김") + " 상태로 변경하시겠습니까?")) {
                return;
            }

            // 3) ds_in Dataset 채우기
            this.ds_in.clearData();

            for (var j=0; j<selRows.length; j++) {
                var row = this.ds_in.addRow();
                this.ds_in.setColumn(row, "OPTION_ID", selRows[j]);
                this.ds_in.setColumn(row, "IS_VISIBLE", newState);
            }

            // 4) 트랜잭션 호출
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



        // 선택 진열 버튼
        this.btn_show_onclick = function(obj, e) {
            this.fn_updateVisible("Y"); // 무조건 진열
        };

        // 선택 숨김 버튼
        this.btn_hide_onclick = function(obj, e) {
            this.fn_updateVisible("N"); // 무조건 숨김
        };




        // Grid 헤더 클릭 시 이벤트 (전체선택)
        this.grid_list_onheadclick = function(obj, e)
        {
            // "선택" 컬럼(체크박스) 헤더일 때만 동작
            if (e.col == 0) {
                var allChecked = true;

                // 전체가 이미 체크 상태인지 확인
                for (var i=0; i<this.ds_out_opList.getRowCount(); i++) {
                    if (this.ds_out_opList.getColumn(i, "chk") != 1) {
                        allChecked = false;
                        break;
                    }
                }

                // 전체가 체크되어 있으면 → 전체 해제
                // 일부라도 체크 안 된 게 있으면 → 전체 체크
                var newVal = allChecked ? 0 : 1;

                for (var j=0; j<this.ds_out_opList.getRowCount(); j++) {
                    this.ds_out_opList.setColumn(j, "chk", newVal);
                }
            }
        };


        // this.ds_out_opList_oncolumnchanged = function(obj:nexacro.NormalDataset,e:nexacro.DSColChangeEventInfo)
        // {
        // 	trace("row=" + e.row + ", colid=" + e.columnid + ", newval=" + e.newvalue);
        // };



        /***************************************************
         * 옵션목록 더블클릭 → 등록/수정 폼으로 이동
         ***************************************************/
        this.grid_list_oncelldblclick = function(obj,e)
        {
            // 선택된 행 데이터 가져오기
            var nRow = e.row;
            if (nRow < 0) return;

            var optionId   = this.ds_out_opList.getColumn(nRow, "OPTION_ID");
            var optionName = this.ds_out_opList.getColumn(nRow, "OPTION_NAME");
            var optionVal  = this.ds_out_opList.getColumn(nRow, "OPTION_VALUE");
            var addPrice   = this.ds_out_opList.getColumn(nRow, "ADDITIONAL_PRICE");

            // 확인 메시지
            if (this.confirm("해당 옵션 정보를 수정하시겠습니까?")) {
               this.fn_openOptionForm("UPDATE", {
        			"OPTION_ID"        : optionId,
                    "OPTION_NAME"      : optionName,
                    "OPTION_VALUE"     : optionVal,
                    "ADDITIONAL_PRICE" : addPrice

        			});
        		}
        };



        /**
         * 옵션 등록/수정 폼 열기
         * @param {string} mode - "INSERT" or "UPDATE"
         * @param {object} args - 옵션 데이터 (수정일 경우)
         */
        this.fn_openOptionForm = function(mode, args)
        {
            var app = nexacro.getApplication();
            var workFrame = app.mainframe.VFrameSet00.HFrameSet00.VFrameSet01.WorkFrame;

            // 전달값 만들기 // Object Merge 동작 args객체에 들어있는 모든 key-value 쌍 하나씩 꺼내서 oArgs에 복사
            var oArgs = { MODE: mode };
            if (args) {
                for (var k in args) {
                    oArgs[k] = args[k];
                }
            }

            trace("fn_openOptionForm 전달 >>> " + JSON.stringify(oArgs));

            // arguments 세팅
            workFrame.arguments = oArgs;

            // 등록/수정 화면 열기
            workFrame.set_formurl("product::Form_ProductOptionReg.xfdl");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_ProductOption_onload,this);
            this.grid_list.addEventHandler("onheadclick",this.grid_list_onheadclick,this);
            this.grid_list.addEventHandler("oncelldblclick",this.grid_list_oncelldblclick,this);
            this.btn_show.addEventHandler("onclick",this.btn_show_onclick,this);
            this.btn_hide.addEventHandler("onclick",this.btn_hide_onclick,this);
            this.btn_reg.addEventHandler("onclick",this.btn_reg_onclick,this);
            this.sta_listTitle.addEventHandler("onclick",this.sta_listTitle_onclick,this);
            this.sta_prodType.addEventHandler("onclick",this.sta_prodType_onclick,this);
            this.btn_view.addEventHandler("onclick",this.btn_view_onclick,this);
            this.ds_out_opList.addEventHandler("oncolumnchanged",this.ds_out_opList_oncolumnchanged,this);
            this.ds_in.addEventHandler("oncolumnchanged",this.ds_out_opList_oncolumnchanged,this);
        };
        this.loadIncludeScript("Form_ProductOption.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
