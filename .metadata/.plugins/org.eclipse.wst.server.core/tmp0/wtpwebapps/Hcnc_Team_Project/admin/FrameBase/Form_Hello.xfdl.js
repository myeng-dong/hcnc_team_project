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
            this.set_borderRadius("6px");
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


            obj = new Dataset("ds_user", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"pw\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_login", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"pw\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_login","395","100","120","70",null,null,null,null,null,null,this);
            obj.set_text("로그인");
            obj.set_background("#008ace");
            obj.set_color("#fff");
            obj.set_borderRadius("6px");
            obj.set_font("20px bold");
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_sign","540","100","120","70",null,null,null,null,null,null,this);
            obj.set_text("회원가입");
            obj.set_background("#008ace");
            obj.set_color("#fff");
            obj.set_borderRadius("6px");
            obj.set_font("20px bold");
            obj.set_taborder("1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Hello.xfdl", function() {
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
        	alert("확실히되나");

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

        // 로그인 버튼을 클릭 할 실행되는 이벤트
        this.btn_login_onclick = function(obj,e)
        {
        	// 아이디 입력값 체크
        	if(this.ds_user.getColumn(0,"id") == ''
        	 || this.ds_user.getColumn(0,"id") == 'undefined'
        	 || this.ds_user.getColumn(0,"id") == null){
        		alert("아이디를 입력해주세요.");
        		return;
        	}

        	// 비밀번호 입력값 체크
        	if(this.ds_user.getColumn(0,"pw") == ''
        	 || this.ds_user.getColumn(0,"pw") == 'undefined'
        	 || this.ds_user.getColumn(0,"pw") == null){
        		alert("비밀번호를 입력해주세요.");
        		return;
        	}
        	var strSvcId    = "selectUser";
        	var strSvcUrl   = "svc::selectUser.do";
        	var inData      = "ds_user=ds_user";
        	var outData     = "ds_login=ds_login";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync     = true;

        	//if(confirm("마스터코드 - 저장하시겠습니까?")){
        		this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        	//}
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
            this.btn_login.addEventHandler("onclick",this.btn_login_onclick,this);
            this.btn_sign.addEventHandler("onclick",this.btn_Delete_onclick,this);
            this.ds_CodeMstList.addEventHandler("onrowposchanged",this.ds_CodeMstList_onrowposchanged,this);
            this.ds_CodeDtlList.addEventHandler("onrowposchanged",this.ds_CodeDtlList_onrowposchanged,this);
        };
        this.loadIncludeScript("Form_Hello.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
