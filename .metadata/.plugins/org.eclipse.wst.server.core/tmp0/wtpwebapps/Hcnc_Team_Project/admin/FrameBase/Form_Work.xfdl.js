(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Work");
            this.set_titletext("Form_Work");
            if (Form == this.constructor)
            {
                this._setFormPosition(1360,630);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_mst", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"TXT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"TXT\" type=\"STRING\" size=\"256\"/><Column id=\"ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dtl", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"INT\" size=\"256\"/><Column id=\"COL_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"COL_CHK\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NUM\" type=\"FLOAT\" size=\"256\"/><Column id=\"COL_DTE\" type=\"STRING\" size=\"256\"/><Column id=\"COL_CBO\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTE\" type=\"DATE\" size=\"256\"/><Column id=\"UPD_USR\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTE\" type=\"DATE\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_combo", this);
            obj._setContents("<ColumnInfo><Column id=\"COD\" type=\"STRING\" size=\"256\"/><Column id=\"TXT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dtl_selected", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"INT\" size=\"256\"/><Column id=\"COL_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"COL_CHK\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NUM\" type=\"FLOAT\" size=\"256\"/><Column id=\"COL_DTE\" type=\"STRING\" size=\"256\"/><Column id=\"COL_CBO\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTE\" type=\"DATE\" size=\"256\"/><Column id=\"UPD_USR\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTE\" type=\"DATE\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","30","15","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("TEXT");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","Static00:-10","15","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"15","80","30","490",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","15","Static00:15","240",null,null,"20",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_mst");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"ID\" displaytype=\"normal\"/><Cell col=\"1\" text=\"TEXT\"/></Band><Band id=\"body\"><Cell text=\"bind:ID\" edittype=\"none\" combodataset=\"ds_combo\" combocodecol=\"COD\" combodatacol=\"TXT\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/><Cell col=\"1\" text=\"bind:TXT\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"15","80","30","110",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("단건저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"15","80","30","400",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("신규");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,"15","80","30","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("단건삭제");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","Grid00:15","61",null,null,"20","100",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("ds_dtl");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"88\" band=\"left\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/><Cell col=\"1\" text=\"ID\"/><Cell col=\"2\" text=\"Seq.\"/><Cell col=\"3\" text=\"Text\"/><Cell col=\"4\" text=\"Check\"/><Cell col=\"5\" text=\"Number\"/><Cell col=\"6\" text=\"Date\"/><Cell col=\"7\" text=\"Combo\"/><Cell col=\"8\" text=\"Insert User\"/><Cell col=\"9\" text=\"Insert Date\"/><Cell col=\"10\" text=\"Update User\"/><Cell col=\"11\" text=\"Update Date\"/></Band><Band id=\"body\"><Cell checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:ID\"/><Cell col=\"2\" text=\"bind:SEQ\"/><Cell col=\"3\" text=\"bind:COL_TXT\"/><Cell col=\"4\" text=\"bind:COL_CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/><Cell col=\"5\" text=\"bind:COL_NUM\" displaytype=\"number\"/><Cell col=\"6\" text=\"bind:COL_DTE\" displaytype=\"date\" edittype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"7\" text=\"bind:COL_CBO\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"ds_combo\" combocodecol=\"COD\" combodatacol=\"TXT\"/><Cell col=\"8\" text=\"bind:REG_USR\"/><Cell col=\"9\" text=\"bind:REG_DTE\"/><Cell col=\"10\" text=\"bind:UPD_USR\"/><Cell col=\"11\" text=\"bind:UPD_DTE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox00","Grid00:15",null,"1005","70",null,"20",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("상세정보");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","Grid00:35",null,"30","30",null,"37",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("TEXT");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_COL_TXT","Static00_00:15",null,"161","35",null,"34",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_maxlength("50");
            obj.set_displaynulltext("입력하세요!");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","edt_COL_TXT:40",null,"49","30",null,"37",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Check");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_COL_CHK","Static00_00_00:15",null,"60","30",null,"37",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","chk_COL_CHK:0",null,"50","30",null,"37",null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Number");
            this.addChild(obj.name, obj);

            obj = new Spin("spe_COL_NUM","Static00_00_00_00:15",null,"115","30",null,"37",null,null,null,null,this);
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","spe_COL_NUM:40",null,"30","30",null,"37",null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("Date");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_COL_DTE","Static00_00_00_00_00:15",null,"105","30",null,"37",null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_dateformat("yyyy.MM.dd");
            obj.set_editformat("yyyy.MM.dd");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00","cal_COL_DTE:40",null,"30","30",null,"37",null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("Date");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_COL_CBO","Static00_00_00_00_00_00:15",null,"135","30",null,"37",null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_innerdataset("ds_combo");
            obj.set_codecolumn("COD");
            obj.set_datacolumn("TXT");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search00",null,"15","80","30","590",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("전체 조회");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save_selected",null,"15","80","30","300",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("선택저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete_selected",null,"15","80","30","210",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("선택삭제");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1360,630,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Edit00","value","ds_search","TXT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_COL_TXT","value","ds_dtl","COL_TXT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","chk_COL_CHK","value","ds_dtl","COL_CHK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","spe_COL_NUM","value","ds_dtl","COL_NUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","cal_COL_DTE","value","ds_dtl","COL_DTE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","cbo_COL_CBO","value","ds_dtl","COL_CBO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Work.xfdl", function() {
        /* 화면 초기화 */
        this.Form_Work_oninit = function(obj,e)
        {
        	this.fnSearchCombo();
        };


        /* 버튼 이벤트 */

        // 조회버튼 클릭
        this.btn_search_onclick = function(obj,e)
        {
        	this.fnSearchMst();
        };

        // 전체조회버튼 클릭
        this.btn_search00_onclick = function(obj,e)
        {
        	this.ds_search.setColumn(0, "ID", "");
        	this.fnSearchDtl();
        };

        // 신규버튼 클릭
        this.btn_add_onclick = function(obj,e)
        {
        	var pos = this.ds_dtl.addRow();
        	var id = this.ds_mst.getColumn(this.ds_mst.rowposition, "ID");
        	this.ds_dtl.setColumn(pos, "ID", id);
        	this.ds_dtl.setColumn(pos, "SEQ", 0);

        	var today = new Date().toISOString().substring(0,10).replace(/-/g,'');
        	this.ds_dtl.setColumn(pos, "COL_DTE", today);
        };

        // 저장버튼 클릭
        this.btn_save_onclick = function(obj,e)
        {
        	if (!this.confirm("저장하시겠습니까?", ""))
        		return;

        	this.ds_dtl_selected.clearData();
        	var id = this.ds_dtl_selected.addRow();
        	this.ds_dtl_selected.copyRow(id, this.ds_dtl, this.ds_dtl.rowposition);

        	// this.alert(this.ds_dtl_selected.saveXML());

        	this.fnSaveDtl();
        };

        // 삭제버튼 클릭
        this.btn_delete_onclick = function(obj,e)
        {
        	if (!this.confirm("삭제하시겠습니까?", ""))
        		return;

        	this.ds_dtl_selected.clearData();
        	this.ds_dtl_selected.copyRow(this.ds_dtl_selected.addRow(), this.ds_dtl, this.ds_dtl.rowposition);

        	// this.alert(this.ds_dtl_selected.saveXML());

        	this.fnDeleteDtl();
        };

        // 선택저장버튼 클릭
        this.btn_save_selected_onclick = function(obj,e)
        {
        	if (!this.confirm("선택된 데이터를 저장하시겠습니까?", ""))
        		return;

        	this.fnSaveDtlSelected();
        };

        // 선택삭제버튼 클릭
        this.btn_delete_selected_onclick = function(obj,e)
        {
        	if (!this.confirm("선택된 데이터를 삭제하시겠습니까?", ""))
        		return;

        	this.fnDeleteDtlSelected();
        };

        /* 이벤트 */

        // mst 선택행 변경시 dtl 조회
        this.ds_mst_onrowposchanged = function(obj,e)
        {
        	this.ds_dtl.set_enableevent(false);
        	this.ds_search.setColumn(0, "ID", this.ds_mst.getColumn(e.newrow, "ID"));
        	this.fnSearchDtl();
        	this.ds_dtl.set_enableevent(true);
        };


        // 데이터 더블클릭시 팝업호출
        this.Grid00_00_oncelldblclick = function(obj,e)
        {
        	var objParam = {COL_TXT:this.ds_dtl.getColumn(this.ds_dtl.rowposition, "COL_TXT")
                          , COL_CHK:this.ds_dtl.getColumn(this.ds_dtl.rowposition, "COL_CHK")
                          , COL_NUM:this.ds_dtl.getColumn(this.ds_dtl.rowposition, "COL_NUM")
        				  , COL_DTE:this.ds_dtl.getColumn(this.ds_dtl.rowposition, "COL_DTE")
        				  , COL_CBO:this.ds_dtl.getColumn(this.ds_dtl.rowposition, "COL_CBO")};

        	this.showPopup(objParam);
        };

        /* 콜백 함수 */

        //처리콜백 함수
        this.fnCallback = function(svcID,errorCode,errorMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errorCode == -1)
        	{
        		this.alert(errorMsg);
        		return;
        	}

        	switch(svcID)
        	{
        		case "selectMst":
        			if(this.ds_mst.rowcount < 1)
        				this.alert("조회된 결과가 없습니다.");
        			break;
        		case "saveDtl":
        		case "saveDtlSelected":
        			this.alert("저장되었습니다.");
        			this.fnSearchDtl();
        			break;
        		case "deleteDtl":
        		case "deleteDtlSelected":
        			this.alert("삭제되었습니다.");
        			this.fnSearchDtl();
        			break;
        	}
        };

        // 팝업콜백 함수
        this.fn_popupCallback = function(strPopupID, strReturn)
        {
            if(strPopupID == undefined){
                return;
            }

            if(strPopupID == "popupWork"){
        		this.ds_dtl.setColumn(this.ds_dtl.rowposition, "COL_TXT", this.ds_dtl_selected.getColumn(0, "COL_TXT"));
        		this.ds_dtl.setColumn(this.ds_dtl.rowposition, "COL_CHK", this.ds_dtl_selected.getColumn(0, "COL_CHK"));
        		this.ds_dtl.setColumn(this.ds_dtl.rowposition, "COL_NUM", this.ds_dtl_selected.getColumn(0, "COL_NUM"));
        		this.ds_dtl.setColumn(this.ds_dtl.rowposition, "COL_DTE", this.ds_dtl_selected.getColumn(0, "COL_DTE"));
        		this.ds_dtl.setColumn(this.ds_dtl.rowposition, "COL_CBO", this.ds_dtl_selected.getColumn(0, "COL_CBO"));

                this.alert("Return Value: " + strReturn);
            }
        };



        /* 함수 */

        // Master 조회
        this.fnSearchMst = function ()
        {
          var strSvcId    = "selectMst";
          var strSvcUrl   = "svc::selectMst.do";
          var inData      = "ds_search=ds_search";
          var outData     = "ds_mst=ds_mst";
          var strArg      = "";
          var callBackFnc = "fnCallback";
          var isAsync     = true;

          this.transaction(strSvcId, 	// transaction을 구분하기 위한 svc id값
        				   strSvcUrl,   // trabsaction을 요청할 주소
        				   inData,     	// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        				   outData,     // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        				   strArg,     	// 입력값으로 보낼 arguments, a=b
        				   callBackFnc, // transaction의 결과를 받을 Function 이름
        				   isAsync);    // 비동기통신 여부 [생략가능]
        };

        // Detail 조회
        this.fnSearchDtl = function ()
        {
          var strSvcId    = "selectDtl";
          var strSvcUrl   = "svc::selectDtl.do";
          var inData      = "ds_search=ds_search";
          var outData     = "ds_dtl=ds_dtl";
          var strArg      = "";
          var callBackFnc = "fnCallback";
          var isAsync     = true;

          this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // 콤보 조회
        this.fnSearchCombo = function ()
        {
          var strSvcId    = "selectCombo";
          var strSvcUrl   = "svc::selectCombo.do";
          var inData      = "";
          var outData     = "ds_combo=ds_combo";
          var strArg      = "";
          var callBackFnc = "fnCallback";
          var isAsync     = true;

          this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // Detail 저장
        this.fnSaveDtl = function ()
        {
          var strSvcId    = "saveDtl";
          var strSvcUrl   = "svc::saveDtl.do";
          var inData      = "ds_dtl=ds_dtl_selected";
          var outData     = "";
          var strArg      = "";
          var callBackFnc = "fnCallback";
          var isAsync     = true;

          this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // Detail 삭제
        this.fnDeleteDtl = function ()
        {
          var strSvcId    = "deleteDtl";
          var strSvcUrl   = "svc::deleteDtl.do";
          var inData      = "ds_dtl=ds_dtl_selected";
          var outData     = "";
          var strArg      = "";
          var callBackFnc = "fnCallback";
          var isAsync     = true;

          this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };


        // Detail 선택 저장
        this.fnSaveDtlSelected = function ()
        {
        	this.alert(this.ds_dtl.saveXML());

        	this.ds_dtl.sav

          var strSvcId    = "saveDtlSelected";
          var strSvcUrl   = "svc::saveDtlSelected.do";
          var inData      = "ds_dtl=ds_dtl:U";
          var outData     = "";
          var strArg      = "";
          var callBackFnc = "fnCallback";
          var isAsync     = true;

          this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // Detail 선택 삭제
        this.fnDeleteDtlSelected = function ()
        {
          var strSvcId    = "deleteDtlSelected";
          var strSvcUrl   = "svc::deleteDtlSelected.do";
          var inData      = "ds_dtl=ds_dtl:U";
          var outData     = "";
          var strArg      = "";
          var callBackFnc = "fnCallback";
          var isAsync     = true;

          this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // 팝업호출
        this.showPopup = function (objParam)
        {
        	popup = new nexacro.ChildFrame;
        	popup.init("popupWork", 0, 0, 800, 700, null, null, "FrameBase::Popup_Work.xfdl");
        	popup.set_dragmovetype("all");
        	popup.set_layered("true");
        	popup.set_autosize(true);
        	popup.set_showtitlebar("Popup Title");
        	popup.set_showstatusbar(false);
        	popup.set_resizable(true);
        	popup.set_openalign("center middle");
        	popup.showModal(this.getOwnerFrame(), objParam, this, "fn_popupCallback", true);
        	popup.style.set_overlaycolor("#6666664C");
        	popup.form.style.set_border("1 solid #4c5a6f");
        }

        this.fn_parent = function(pObj)
        {
            this.ds_dtl_selected.copyData(pObj);
        };


        // 전체 체크/체크해제
        this.Grid00_00_onheadclick = function(obj,e)
        {
        	if (e.cell != obj.getBindCellIndex("BODY", "CHK") || this.ds_dtl.rowcount < 1)
        		return;

        	var yn = this.ds_dtl.getColumn(0, "CHK") == 'Y' ? "N" : "Y";

        	obj.set_enableevent(false);
        	for (var i = 0; i < this.ds_dtl.getRowCount(); i++)
        		this.ds_dtl.setColumn(i, "CHK", yn);
        	obj.set_enableevent(true);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Left_onload,this);
            this.addEventHandler("oninit",this.Form_Work_oninit,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.btn_delete.addEventHandler("onclick",this.btn_delete_onclick,this);
            this.Grid00_00.addEventHandler("oncelldblclick",this.Grid00_00_oncelldblclick,this);
            this.Grid00_00.addEventHandler("onheadclick",this.Grid00_00_onheadclick,this);
            this.Static00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00_00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00_00_00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.btn_search00.addEventHandler("onclick",this.btn_search00_onclick,this);
            this.btn_save_selected.addEventHandler("onclick",this.btn_save_selected_onclick,this);
            this.btn_delete_selected.addEventHandler("onclick",this.btn_delete_selected_onclick,this);
            this.ds_mst.addEventHandler("onrowposchanged",this.ds_mst_onrowposchanged,this);
        };
        this.loadIncludeScript("Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
