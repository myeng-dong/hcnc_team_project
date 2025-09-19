(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Pop_BoardInsert");
            this.set_titletext("게시글 작성");
            this.set_background("#F8F9FA");
            this.set_border("1px solid #E0E0E0");
            this.set_borderRadius("10px");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_post", this);
            obj._setContents("<ColumnInfo><Column id=\"postTitle\" type=\"STRING\" size=\"256\"/><Column id=\"postContent\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_title","30","30",null,"40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("게시글 작성");
            obj.set_font("normal 18pt/normal \"Noto Sans KR Medium\"");
            obj.set_color("#333333");
            this.addChild(obj.name, obj);

            obj = new Static("sta_postTitle","30","90","80","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("제목");
            obj.set_font("normal 11pt/normal \"Noto Sans KR Medium\"");
            obj.set_color("#555555");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_postTitle","110","95",null,"30","30",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_borderRadius("5px");
            obj.set_border("1px solid #CCCCCC");
            this.addChild(obj.name, obj);

            obj = new Static("sta_postContent","30","140","80","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("내용");
            obj.set_font("normal 11pt/normal \"Noto Sans KR Medium\"");
            obj.set_color("#555555");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("web_postContent","30","185",null,"450","30",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.getSetter("borderRadius").set("5px");
            obj.set_border("1px solid #CCCCCC");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel",null,null,"100","40","140","20",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("취소");
            obj.set_background("#E5E7EB");
            obj.set_color("#555555");
            obj.set_border("0px none");
            obj.set_borderRadius("5px");
            obj.set_cursor("pointer");
            obj.set_font("normal 11pt/normal \"Noto Sans KR Medium\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,null,"100","40","30","20",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("작성 완료");
            obj.set_background("#5C6BC0");
            obj.set_color("white");
            obj.set_border("0px none");
            obj.set_borderRadius("5px");
            obj.set_cursor("pointer");
            obj.set_font("normal 11pt/normal \"Noto Sans KR Medium\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,700,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_postTitle","value","ds_post","postTitle");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Pop_BaordInsert.xfdl", function() {
        // 넥사크로 Pop_BoardInsert Form 스크립트

        /************************************************
         * Form Event Functions
         ************************************************/

        // Form 로드시 실행
        this.Pop_BoardInsert_onload = function(obj,e)
        {
            // 데이터셋 초기화
            this.ds_post.clearData();
            this.ds_post.addRow();

            // 웹브라우저에 CKEditor JSP 로드
            var sUrl = "http://localhost:8080/ckedit.do"; // JSP 경로
            this.web_postContent.set_url(sUrl);
        };

        // 웹브라우저 로드 완료 후 실행
        this.web_postContent_onloadcompleted = function(obj,e)
        {
            trace("웹브라우저 로드 완료");

            // 웹브라우저가 완전히 로드된 후 잠시 대기
            var nTimerID = this.setTimer(1, 1000);
        };

        // 타이머 이벤트 (에디터 초기화 대기용)
        this.Pop_BoardInsert_ontimer = function(obj,e)
        {
            if(e.timerid == 1) {
                this.killTimer(1);
                trace("에디터 준비 완료");

                // 초기 데이터 설정
                this.setEditorInitialData();
            }
        };

        /************************************************
         * 에디터 제어 함수들
         ************************************************/

        // 에디터에 초기 데이터 설정
        this.setEditorInitialData = function()
        {
            var sInitialContent = "<p>게시글 내용을 작성해주세요.</p>";
            this.setEditorContent(sInitialContent);
        };

        // 에디터 내용 설정
        this.setEditorContent = function(sContent)
        {
            try {
                var sScript = "setEditorContent('" + sContent + "');";
                this.web_postContent.callMethod(sScript);
                trace("에디터 내용 설정 완료");
            } catch(e) {
                trace("에디터 내용 설정 실패: " + e.message);
            }
        };

        // 에디터 내용 가져오기
        this.getEditorContent = function()
        {
            try {
                var sScript = "getEditorContent();";
                var sContent = this.web_postContent.callMethod(sScript);
                trace("에디터 내용: " + sContent);
                return sContent;
            } catch(e) {
                trace("에디터 내용 가져오기 실패: " + e.message);
                return "";
            }
        };

        /************************************************
         * Button Event Functions
         ************************************************/

        // 작성 완료 버튼 클릭
        this.btn_save_onclick = function(obj,e)
        {
            // 유효성 검사
            if(!this.validateFormData()) {
                return;
            }

            // 에디터 내용을 데이터셋에 저장
            var sContent = this.getEditorContent();
            this.ds_post.setColumn(0, "postContent", sContent);

            // 서버로 데이터 전송
            this.savePostToServer();
        };

        // 취소 버튼 클릭
        this.btn_cancel_onclick = function(obj,e)
        {
            // 작성 중인 내용이 있는지 확인
            var sTitle = this.edt_postTitle.value;
            var sContent = this.getEditorContent();

            if((sTitle && sTitle.trim() != "") || (sContent && sContent.trim() != "" && sContent != "<p></p>" && sContent != "<p>게시글 내용을 작성해주세요.</p>")) {
                if(!this.confirm("작성 중인 내용이 있습니다. 정말 취소하시겠습니까?")) {
                    return;
                }
            }

            // 팝업 닫기
            this.close();
        };

        /************************************************
         * 서버 통신 및 유효성 검사 함수들
         ************************************************/

        // 폼 데이터 유효성 검사
        this.validateFormData = function()
        {
            // 제목 검사
            var sTitle = this.edt_postTitle.value;
            if(!sTitle || sTitle.trim() == "") {
                this.alert("제목을 입력해주세요.");
                this.edt_postTitle.setFocus();
                return false;
            }

            if(sTitle.trim().length < 2) {
                this.alert("제목은 2글자 이상 입력해주세요.");
                this.edt_postTitle.setFocus();
                return false;
            }

            if(sTitle.trim().length > 100) {
                this.alert("제목은 100글자 이하로 입력해주세요.");
                this.edt_postTitle.setFocus();
                return false;
            }

            // 내용 검사
            var sContent = this.getEditorContent();
            if(!sContent || sContent.trim() == "" || sContent == "<p></p>" || sContent == "<p>게시글 내용을 작성해주세요.</p>") {
                this.alert("내용을 입력해주세요.");
                return false;
            }

            // HTML 태그 제거 후 텍스트 길이 검사
            var sTextContent = sContent.replace(/<[^>]*>/g, "").trim();
            if(sTextContent.length < 10) {
                this.alert("내용은 10글자 이상 입력해주세요.");
                return false;
            }

            return true;
        };

        // 서버에 게시글 저장
        this.savePostToServer = function()
        {
            // Transaction 설정
            var sSvcID    = "savePost";
            var sURL      = "svc::savePost.do";
            var sInDs     = "ds_post=ds_post:U"; // Updated 행만 전송
            var sOutDs    = "";
            var sParam    = "";
            var sCallBack = "fnCallback";

            // 로딩 메시지 표시 (선택사항)
            this.alert("저장 중입니다...");

            this.transaction(sSvcID, sURL, sInDs, sOutDs, sParam, sCallBack);
        };

        // Transaction 콜백 함수
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
            if(errorCode < 0) {
                this.alert("오류가 발생했습니다: " + errorMsg);
                return;
            }

            switch(svcID) {
                case "savePost":
                    this.alert("게시글이 성공적으로 작성되었습니다.");

                    // 부모 창에 결과 전달 (선택사항)
                    if(this.opener && this.opener.fnRefreshList) {
                        this.opener.fnRefreshList(); // 부모 창의 목록 새로고침
                    }

                    // 팝업 닫기
                    this.close("success");
                    break;
            }
        };

        /************************************************
         * 폼 닫기 이벤트
         ************************************************/

        // 폼 닫기 전 확인
        this.Pop_BoardInsert_onbeforeclose = function(obj,e)
        {
            // 이미 저장 완료된 경우는 바로 닫기
            if(e.reason == "success") {
                return;
            }

            // 작성 중인 내용 확인
            var sTitle = this.edt_postTitle.value;
            var sContent = this.getEditorContent();

            if((sTitle && sTitle.trim() != "") || (sContent && sContent.trim() != "" && sContent != "<p></p>" && sContent != "<p>게시글 내용을 작성해주세요.</p>")) {
                if(!this.confirm("작성 중인 내용이 있습니다. 정말 나가시겠습니까?")) {
                    e.set_cancel(true);
                }
            }
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Pop_BoardInsert_onload,this);
            this.addEventHandler("ontimer",this.Pop_BoardInsert_ontimer,this);
            this.addEventHandler("onbeforeclose",this.Pop_BoardInsert_onbeforeclose,this);
            this.web_postContent.addEventHandler("onloadcompleted",this.web_postContent_onloadcompleted,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
        };
        this.loadIncludeScript("Pop_BaordInsert.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
