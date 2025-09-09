(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Code");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_SearchType", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">ALL</Col><Col id=\"CODE_NM\">전체</Col></Row><Row><Col id=\"CODE\">CODE</Col><Col id=\"CODE_NM\">코드</Col></Row><Row><Col id=\"CODE\">CODE_NM</Col><Col id=\"CODE_NM\">코드명</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Search", this);
            obj._setContents("<ColumnInfo><Column id=\"SEARCH_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_WORD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CodeMstList", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CodeMst", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_SearchDtl", this);
            obj._setContents("<ColumnInfo><Column id=\"SEARCH_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_WORD\" type=\"STRING\" size=\"256\"/><Column id=\"PT_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CodeDtlList", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CodeDtl", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PT_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_TITLE1","10","10","160","60",null,null,null,null,null,null,this);
            obj.set_text("마스터 코드");
            obj.set_font("28px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Search","170","80","150","30",null,null,null,null,null,null,this);
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_Search","10","80","150","30",null,null,null,null,null,null,this);
            obj.set_innerdataset("ds_SearchType");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("코드명");
            obj.set_value("CODE_NM");
            obj.set_index("2");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Search","330","80","50","30",null,null,null,null,null,null,this);
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Add","385","80","50","30",null,null,null,null,null,null,this);
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_CodeMst","15","120","370","330",null,null,null,null,null,null,this);
            obj.set_binddataset("ds_CodeMstList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"코드\"/><Cell col=\"1\" text=\"코드명\"/></Band><Band id=\"body\"><Cell text=\"bind:CODE\"/><Cell col=\"1\" text=\"bind:CODE_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_Code","15","470","30","30",null,null,null,null,null,null,this);
            obj.set_text("코드");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Code","45","470","110","30",null,null,null,null,null,null,this);
            this.addChild(obj.name, obj);

            obj = new Static("stc_CodeNm","182","470","40","30",null,null,null,null,null,null,this);
            obj.set_text("코드명");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_CodeNm","222","470","140","30",null,null,null,null,null,null,this);
            this.addChild(obj.name, obj);

            obj = new Button("btn_Save","365","470","50","30",null,null,null,null,null,null,this);
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Delete","420","470","50","30",null,null,null,null,null,null,this);
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Static("stc_TITLE2","565","10","120","60",null,null,null,null,null,null,this);
            obj.set_text("세부 코드");
            obj.set_font("28px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_SearchDtl","560","80","150","30",null,null,null,null,null,null,this);
            obj.set_innerdataset("ds_SearchType");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("코드명");
            obj.set_value("CODE_NM");
            obj.set_index("2");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_SearchDtl","720","80","150","30",null,null,null,null,null,null,this);
            this.addChild(obj.name, obj);

            obj = new Button("btn_SearchDtl","880","80","50","30",null,null,null,null,null,null,this);
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btn_AddDtl","935","80","50","30",null,null,null,null,null,null,this);
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_CodeDtl","565","120","370","330",null,null,null,null,null,null,this);
            obj.set_binddataset("ds_CodeDtlList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"코드\"/><Cell col=\"1\" text=\"코드명\"/></Band><Band id=\"body\"><Cell text=\"bind:CODE\"/><Cell col=\"1\" text=\"bind:CODE_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_CodeDtl","565","470","30","30",null,null,null,null,null,null,this);
            obj.set_text("코드");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_CodeDtl","595","470","110","30",null,null,null,null,null,null,this);
            this.addChild(obj.name, obj);

            obj = new Static("stc_CodeNmDtl","731","470","40","30",null,null,null,null,null,null,this);
            obj.set_text("코드명");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_CodeNmDtl","771","470","140","30",null,null,null,null,null,null,this);
            this.addChild(obj.name, obj);

            obj = new Button("btn_SaveDtl","915","470","50","30",null,null,null,null,null,null,this);
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_DeleteDtl","970","470","50","30",null,null,null,null,null,null,this);
            obj.set_text("삭제");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("bind_mst_01","cmb_Search","value","ds_Search","SEARCH_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("bind_mst_02","edt_Search","value","ds_Search","SEARCH_WORD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("bind_mst_03","edt_Code","value","ds_CodeMst","CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("bind_mst_04","edt_CodeNm","value","ds_CodeMst","CODE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("bind_dtl_01","cmb_SearchDtl","value","ds_SearchDtl","SEARCH_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("bind_dtl_02","edt_SearchDtl","value","ds_SearchDtl","SEARCH_WORD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("bind_dtl_03","edt_CodeDtl","value","ds_CodeDtl","CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("bind_dtl_04","edt_CodeNmDtl","value","ds_CodeDtl","CODE_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Code.xfdl", function() {
        // Form이 로드 된 후 실행되는 이벤트
        // JQuery의 document.ready
        // Javascript의 window.onload
        // 위 2개의 이벤트와 유사한 이벤트
        this.Form_Code_onload = function(obj,e)
        {
        	// 검색조건 콤보박스값 임의 부여
        	this.ds_Search.setColumn(0,"SEARCH_TYPE","ALL");
        	this.ds_SearchDtl.setColumn(0,"SEARCH_TYPE","ALL");

        	// 검색조건 콤보박스값을 콤보박스에 연결된 Dataset의 N번째 항목 부여
        	// this.ds_Search.setColumn(0,"SEARCH_TYPE",this.ds_SearchType.getColumn(0,"CODE"));
        	// this.ds_SearchDtl.setColumn(0,"SEARCH_TYPE",this.ds_SearchType.getColumn(0,"CODE"));

        	// 컴포넌트 속성 초기화
        	this.fnInitMst();
        	this.fnInitDtl();
        };

        this.fnInitMst = function(){
        	this.edt_Code.set_readonly(true);
        	this.edt_CodeNm.set_readonly(true);
        	this.btn_Save.set_enable(false);
        	this.btn_Delete.set_enable(false);
        	this.ds_CodeMst.setColumn(0,"CODE","");
        	this.ds_CodeMst.setColumn(0,"CODE_NM","");
        }

        this.fnInitDtl = function(){
        	this.edt_CodeDtl.set_readonly(true);
        	this.edt_CodeNmDtl.set_readonly(true);
        	this.btn_SaveDtl.set_enable(false);
        	this.btn_DeleteDtl.set_enable(false);
        	this.ds_CodeDtl.setColumn(0,"CODE","");
        	this.ds_CodeDtl.setColumn(0,"CODE_NM","");
        }

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
        		case "selectCodeMst":
        			// 조회 시 콜백 처리
        			break;
        		case "saveCodeMst":
        			// 저장 시 콜백 처리
        			alert("마스터-저장되었습니다.");
        			this.fnSearch();
        			break;
        		case "deleteCodeMst":
        			// 삭제 시 콜백처리
        			alert("마스터-삭제되었습니다.");
        			this.fnSearch();
        			break;
        		case "selectCodeMst":
        			// 조회 시 콜백 처리
        			break;
        		case "saveCodeDtl":
        			// 저장 시 콜백 처리
        			alert("세부-저장되었습니다.");
        			this.fnSearchDtl();
        			break;
        		case "deleteCodeDtl":
        			// 삭제 시 콜백처리
        			alert("세부-삭제되었습니다.");
        			this.fnSearchDtl();
        			break;
        		default :
        			// 위 서비스 ID에 해당하지 않을경우
        			break;
        	}
        };

        // 조회 함수
        this.fnSearch = function(){
        	alert("빨리반영63");

        	// 바인딩 된 값 콘솔로그로 찍어서 조회
        	console.log("cmb_Search = " + this.ds_Search.getColumn(0,"SEARCH_TYPE"));
        	console.log("edt_Search = " + this.ds_Search.getColumn(0,"SEARCH_WORD"));

        	this.fnInitMst();

        	// 컨트롤러 호출
        	var strSvcId    = "selectCodeMst";                     // 콜백 서비스명
        	var strSvcUrl   = "svc::selectCodeMst.do";             // 호출 URL
        	var inData      = "ds_Search=ds_Search";               // Request Dataset 파라미터 (AAA=BBB) AAA = 컨트롤러에서 받을 파라미터명, BBB = 보낼 데이터셋명
        	var outData     = "ds_CodeMstList=ds_CodeMstList";     // Response Dataset 파라미터 (AAA=BBB) AAA = 데이터를 저장할 데이터셋명, BBB = 응답받은 데이터
        	var strArg      = ""                                   // Request 문자 파라미터
        	var callBackFnc = "fnCallback";                        // 콜백 후 실행 할 함수
        	var isAsync     = true;                                // 동기/비동기

        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        }

        // 조회 함수
        this.fnSearchDtl = function(){
        	// 바인딩 된 값 콘솔로그로 찍어서 조회
        	console.log("cmb_Search = " + this.ds_SearchDtl.getColumn(0,"SEARCH_TYPE"));
        	console.log("edt_Search = " + this.ds_SearchDtl.getColumn(0,"SEARCH_WORD"));

        	this.fnInitDtl();

        	// 마스터 코드 체크
        	if(this.ds_SearchDtl.getColumn(0,"PT_CODE") == ''
        	 || this.ds_SearchDtl.getColumn(0,"PT_CODE") == 'undefined'
        	 || this.ds_SearchDtl.getColumn(0,"PT_CODE") == null){
        		alert("마스터 코드를 선택해주세요.");
        		return;
        	}

        	// 컨트롤러 호출
        	var strSvcId    = "selectCodeDtl";                     // 콜백 서비스명
        	var strSvcUrl   = "svc::selectCodeDtl.do";             // 호출 URL
        	var inData      = "ds_SearchDtl=ds_SearchDtl";         // Request Dataset 파라미터 (AAA=BBB) AAA = 컨트롤러에서 받을 파라미터명, BBB = 보낼 데이터셋명
        	var outData     = "ds_CodeDtlList=ds_CodeDtlList";     // Response Dataset 파라미터 (AAA=BBB) AAA = 데이터를 저장할 데이터셋명, BBB = 응답받은 데이터
        	var strArg      = ""                                   // Request 문자 파라미터
        	var callBackFnc = "fnCallback";                        // 콜백 후 실행 할 함수
        	var isAsync     = true;                                // 동기/비동기

        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        }










        /****************************************************************/
        /*                   컴포넌트 이벤트                          */
        /****************************************************************/

        /******************************/
        /* 마스터 코드 버튼 이벤트   */
        /******************************/
        // 조회버튼을 클릭 할 시 실행되는 이벤트
        this.btn_Search_onclick = function(obj,e)
        {
        	this.fnSearch();
        };

        // 추가 버튼을 클릭 할 시 실행되는 이벤트
        this.btn_Add_onclick = function(obj,e)
        {
        	// 입력값 초기화
        	this.ds_CodeMst.setColumn(0,"CODE","");
        	this.ds_CodeMst.setColumn(0,"CODE_NM","");

        	this.edt_Code.set_readonly(false);
        	this.edt_CodeNm.set_readonly(false);
        	this.btn_Save.set_enable(true);
        	this.btn_Delete.set_enable(false);
        };

        // 저장 버튼을 클릭 할 실행되는 이벤트
        this.btn_Save_onclick = function(obj,e)
        {
        	// 코드 입력값 체크
        	if(this.ds_CodeMst.getColumn(0,"CODE") == ''
        	 || this.ds_CodeMst.getColumn(0,"CODE") == 'undefined'
        	 || this.ds_CodeMst.getColumn(0,"CODE") == null){
        		alert("코드를 입력해주세요.");
        		return;
        	}

        	// 코드명 입력값 체크
        	if(this.ds_CodeMst.getColumn(0,"CODE_NM") == ''
        	 || this.ds_CodeMst.getColumn(0,"CODE_NM") == 'undefined'
        	 || this.ds_CodeMst.getColumn(0,"CODE_NM") == null){
        		alert("코드명를 입력해주세요.");
        		return;
        	}

        	var strSvcId    = "saveCodeMst";
        	var strSvcUrl   = "svc::saveCodeMst.do";
        	var inData      = "ds_CodeMst=ds_CodeMst";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync     = true;

        	if(confirm("마스터코드 - 저장하시겠습니까?")){
        		this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        	}

        };

        this.btn_Delete_onclick = function(obj,e)
        {
        	var strSvcId    = "deleteCodeMst";
        	var strSvcUrl   = "svc::deleteCodeMst.do";
        	var inData      = "ds_CodeMst=ds_CodeMst";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync     = true;

        	if(confirm("마스터코드 - 삭제하시겠습니까?")){
        		this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        	}
        };











        /******************************/
        /*   세부 코드 버튼 이벤트   */
        /******************************/
        this.btn_SearchDtl_onclick = function(obj,e)
        {
        	this.fnSearchDtl();
        };

        this.btn_AddDtl_onclick = function(obj,e)
        {
        	// 입력값 초기화
        	this.ds_CodeDtl.setColumn(0,"CODE","");
        	this.ds_CodeDtl.setColumn(0,"CODE_NM","");

        	this.edt_CodeDtl.set_readonly(false);
        	this.edt_CodeNmDtl.set_readonly(false);
        	this.btn_SaveDtl.set_enable(true);
        	this.btn_DeleteDtl.set_enable(false);
        };

        this.btn_SaveDtl_onclick = function(obj,e)
        {
        	// 코드 입력값 체크
        	if(this.ds_CodeDtl.getColumn(0,"CODE") == ''
        	 || this.ds_CodeDtl.getColumn(0,"CODE") == 'undefined'
        	 || this.ds_CodeDtl.getColumn(0,"CODE") == null){
        		alert("코드를 입력해주세요.");
        		return;
        	}

        	// 코드명 입력값 체크
        	if(this.ds_CodeDtl.getColumn(0,"CODE_NM") == ''
        	 || this.ds_CodeDtl.getColumn(0,"CODE_NM") == 'undefined'
        	 || this.ds_CodeDtl.getColumn(0,"CODE_NM") == null){
        		alert("코드명를 입력해주세요.");
        		return;
        	}

        	var strSvcId    = "saveCodeDtl";
        	var strSvcUrl   = "svc::saveCodeDtl.do";
        	var inData      = "ds_CodeDtl=ds_CodeDtl";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync     = true;

        	if(confirm("세부코드 - 저장하시겠습니까?")){
        		this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        	}
        };

        this.btn_DeleteDtl_onclick = function(obj,e)
        {
        	var strSvcId    = "deleteCodeDtl";
        	var strSvcUrl   = "svc::deleteCodeDtl.do";
        	var inData      = "ds_CodeDtl=ds_CodeDtl";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync     = true;

        	if(confirm("세부코드 - 삭제하시겠습니까?")){
        		this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        	}
        };










        /****************************************************************/
        /*                      Dataset 이벤트                          */
        /****************************************************************/
        this.ds_CodeMstList_onrowposchanged = function(obj,e)
        {
        	this.edt_Code.set_readonly(true);
        	this.edt_CodeNm.set_readonly(false);
        	this.btn_Save.set_enable(true);
        	this.btn_Delete.set_enable(true);

        	this.ds_CodeMst.setColumn(0,"CODE",obj.getColumn(obj.rowposition,"CODE"));
        	this.ds_CodeMst.setColumn(0,"CODE_NM",obj.getColumn(obj.rowposition,"CODE_NM"));

        	this.ds_SearchDtl.setColumn(0,"PT_CODE",obj.getColumn(obj.rowposition,"CODE"));
        	this.ds_CodeDtl.setColumn(0,"PT_CODE",obj.getColumn(obj.rowposition,"CODE"));

        	this.fnSearchDtl();
        };

        this.ds_CodeDtlList_onrowposchanged = function(obj,e)
        {
        	this.edt_CodeDtl.set_readonly(true);
        	this.edt_CodeNmDtl.set_readonly(false);
        	this.btn_SaveDtl.set_enable(true);
        	this.btn_DeleteDtl.set_enable(true);

        	this.ds_CodeDtl.setColumn(0,"CODE",obj.getColumn(obj.rowposition,"CODE"));
        	this.ds_CodeDtl.setColumn(0,"CODE_NM",obj.getColumn(obj.rowposition,"CODE_NM"));
        };



















        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Code_onload,this);
            this.btn_Search.addEventHandler("onclick",this.btn_Search_onclick,this);
            this.btn_Add.addEventHandler("onclick",this.btn_Add_onclick,this);
            this.btn_Save.addEventHandler("onclick",this.btn_Save_onclick,this);
            this.btn_Delete.addEventHandler("onclick",this.btn_Delete_onclick,this);
            this.btn_SearchDtl.addEventHandler("onclick",this.btn_SearchDtl_onclick,this);
            this.btn_AddDtl.addEventHandler("onclick",this.btn_AddDtl_onclick,this);
            this.btn_SaveDtl.addEventHandler("onclick",this.btn_SaveDtl_onclick,this);
            this.btn_DeleteDtl.addEventHandler("onclick",this.btn_DeleteDtl_onclick,this);
            this.ds_CodeMstList.addEventHandler("onrowposchanged",this.ds_CodeMstList_onrowposchanged,this);
            this.ds_CodeDtlList.addEventHandler("onrowposchanged",this.ds_CodeDtlList_onrowposchanged,this);
        };
        this.loadIncludeScript("Form_Code.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
