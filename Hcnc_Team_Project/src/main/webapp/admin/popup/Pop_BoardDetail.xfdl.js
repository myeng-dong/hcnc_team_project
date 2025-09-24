(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Pop_BoardDetail");
            this.set_titletext("게시글 상세보기");
            this.set_background("#F8F9FA");
            this.set_border("1px solid #E0E0E0");
            this.set_borderRadius("10px");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_detail", this);
            obj._setContents("<ColumnInfo><Column id=\"POST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"POST_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"POST_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_postId", this);
            obj._setContents("<ColumnInfo><Column id=\"POST_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_update", this);
            obj._setContents("<ColumnInfo><Column id=\"POST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"POST_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"POST_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_title","30","30",null,"40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("게시글 상세보기");
            obj.set_font("normal 18pt/normal \"Noto Sans KR Medium\"");
            obj.set_color("#333333");
            this.addChild(obj.name, obj);

            obj = new Static("sta_info_bg","30","80",null,"120","30",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#F5F5F5");
            obj.set_border("1px solid #E0E0E0");
            obj.set_borderRadius("5px");
            this.addChild(obj.name, obj);

            obj = new Static("sta_board_label","50","95","80","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("게시판");
            obj.set_font("normal 11pt/normal \"Noto Sans KR Medium\"");
            obj.set_color("#555555");
            this.addChild(obj.name, obj);

            obj = new Static("sta_board_value","130","95","150","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("공지사항");
            obj.set_font("normal 11pt/normal \"Noto Sans KR\"");
            obj.set_color("#333333");
            this.addChild(obj.name, obj);

            obj = new Static("sta_post_title_label","50","125","80","25",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("제목");
            obj.set_font("normal 11pt/normal \"Noto Sans KR Medium\"");
            obj.set_color("#555555");
            this.addChild(obj.name, obj);

            obj = new Static("sta_post_title_value","130","125",null,"25","50",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("");
            obj.set_font("normal 11pt/normal \"Noto Sans KR\"");
            obj.set_color("#333333");
            this.addChild(obj.name, obj);

            obj = new Static("sta_author_label","50","155","80","25",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("작성자");
            obj.set_font("normal 11pt/normal \"Noto Sans KR Medium\"");
            obj.set_color("#555555");
            this.addChild(obj.name, obj);

            obj = new Static("sta_author_value","130","155","150","25",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("");
            obj.set_font("normal 11pt/normal \"Noto Sans KR\"");
            obj.set_color("#333333");
            this.addChild(obj.name, obj);

            obj = new Static("sta_date_label","350","155","80","25",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("작성일");
            obj.set_font("normal 11pt/normal \"Noto Sans KR Medium\"");
            obj.set_color("#555555");
            this.addChild(obj.name, obj);

            obj = new Static("sta_date_value","430","155",null,"25","50",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("");
            obj.set_font("normal 11pt/normal \"Noto Sans KR\"");
            obj.set_color("#333333");
            this.addChild(obj.name, obj);

            obj = new Static("sta_content_label","30","220","80","25",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("내용");
            obj.set_font("normal 11pt/normal \"Noto Sans KR Medium\"");
            obj.set_color("#555555");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("web_content","30","250",null,"350","30",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_border("1px solid #E0E0E0");
            obj.getSetter("borderRadius").set("5px");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,null,"100","40","140","20",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("닫기");
            obj.set_background("#E5E7EB");
            obj.set_color("#555555");
            obj.set_border("0px none");
            obj.set_borderRadius("5px");
            obj.set_cursor("pointer");
            obj.set_font("normal 11pt/normal \"Noto Sans KR Medium\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_modify",null,null,"100","40","30","20",null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("수정");
            obj.set_background("#5C6BC0");
            obj.set_color("white");
            obj.set_border("0px none");
            obj.set_borderRadius("5px");
            obj.set_cursor("pointer");
            obj.set_font("normal 11pt/normal \"Noto Sans KR Medium\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_post_title","126","125","167","23",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_font("normal 11pt/normal \"Noto Sans KR\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,700,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_post_title","value","ds_detail","POST_TITLE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Pop_BoardDetail.xfdl", function() {
        //온로드시
        this.Pop_BoardDetail_onload = function(obj,e)
        {
            // 부모에서 전달받은 POST_ID로 상세 데이터 조회
           var postId = this.parent.paramPostId;

           this.ds_postId.setColumn(0,"POST_ID",postId)

            if(postId) {
                this.selectPostDetailByAdmin(postId);
            } else {
                alert("게시글 정보가 없습니다.");
                this.close();
            }
        	this.edt_post_title.set_visible(false);
        	this.currentMode = "view";
        };

        // 게시글 상세 데이터 조회
        this.selectPostDetailByAdmin = function(postId)
        {
        	// 캐시 방지용 타임스탬프 추가
            var sSvcID      = "selectPostDetailByAdmin";
            var sURL        =  "svc::selectPostDetailByAdmin.do?time=" + new Date().getTime();
            var sInDs       = "ds_postId=ds_postId";
            var sOutDs      = "ds_detail=ds_detail";
            var sParam      = "";
            var sCallBack   = "fnCallback";

            this.transaction(sSvcID, sURL, sInDs, sOutDs, sParam, sCallBack);
        };

        // Transaction 콜백 함수
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
            if(errorCode < 0) {
                alert("오류가 발생했습니다: " + errorMsg);
                this.close();
                return;
            }

            switch(svcID) {
                case "selectPostDetailByAdmin":
                    this.displayPostDetail();
                    break;

        		case "updatePost":
        			this.selectPostDetailByAdmin();
        			break;
            }
        };


        // 게시글 상세 정보 화면에 표시
        this.displayPostDetail = function()
        {
            if(this.ds_detail.getRowCount() == 0) {
                alert("게시글 데이터가 없습니다.");
                this.close();
                return;
            }

            // 화면에 기본 정보 표시
            var postTitle = this.ds_detail.getColumn(0, "POST_TITLE");
            var userName = this.ds_detail.getColumn(0, "USER_NAME");
            var boardId = this.ds_detail.getColumn(0, "BOARD_ID");
            var inputDt = this.ds_detail.getColumn(0, "INPUT_DT");
            var postContent = this.ds_detail.getColumn(0, "POST_CONTENT");

        	// 각 스태틱에 텍스트를 지정해줌
            this.sta_post_title_value.set_text(postTitle);

        	//게시판 번호에 따른 이름 설정
        	var boardName;
        	if(boardId==1){
        	  boardName='공지사항'
        	}else if(boardId==3){
        	  boardName='FAQ'
        	}
            this.sta_board_value.set_text(boardName);
            this.sta_author_value.set_text(userName);
            this.sta_date_value.set_text(this.formatDate(inputDt));

        	if(this.currentMode =="edit"){
        		var sUrl = "http://localhost:8080/ckedit.do";
                this.web_content.set_url(sUrl);

        		this.sta_post_title_value.set_visible(false);
                this.edt_post_title.set_visible(true);

                // 편집 모드에서는 수정/취소 버튼 표시
                this.btn_modify.set_text("저장");
                this.btn_close.set_text("취소");

                var nTimerID = this.setTimer(2, 500); // 편집 모드용 타이머
        	} else{
        		var sUrl = "http://localhost:8080/contentViewer.do";
        		this.web_content.set_url(sUrl);

        		this.sta_post_title_value.set_visible(true);
                this.edt_post_title.set_visible(false);

        		this.btn_modify.set_text("수정");
        		this.btn_close.set_text("닫기");

        		var nTimerId = this.setTimer(1,300);
        	}

            this.contentToShow = postContent;
        };

        this.Pop_BoardDetail_ontimer = function(obj,e) //http://localhost:8080/contentViewer.do"
        {
            if(e.timerid == 1) {
                this.killTimer(1);
                this.web_content.callMethod("setContent",this.contentToShow);
            }else if(e.timerid == 2){
        		this.killTimer(2);
        		this.web_content.callMethod("setEditorContent",this.contentToShow); //http://localhost:8080/ckeditor.do
        	}
        };

        // 수정 버튼 클릭
        this.btn_modify_onclick = function(obj,e)
        {
        	var postId = this.ds_detail.getColumn(0, "POST_ID");

            if(!postId) {
                alert("게시글 정보가 없습니다.");
                return;
            }
        	if(this.currentMode=="view"){
        		this.currentMode = "edit";
                this.displayPostDetail(); // 화면 다시 그리기
        	} else{
        	this.savePost();
        	}
        };

        this.savePost = function()
        {
            try {
                // 에디터에서 내용 가져오기
                var editedContent = this.web_content.callMethod("getEditorContent","");

        		//컨텐츠 영역 빈값인지 체크
                if(!editedContent) {
                    alert("내용을 입력해주세요.");
                    return;
                }


                // 업데이트용 데이터셋 설정 (기존 데이터 복사 후 내용만 변경)
                this.ds_update.clearData();
                this.ds_update.addRow();
                this.ds_update.copyRow(0, this.ds_detail, 0);
                this.ds_update.setColumn(0, "POST_CONTENT", editedContent);

                // 캐시 방지용 타임스탬프 추가
        		var timestamp = new Date().getTime();

                // 서버로 업데이트 요청
                var sSvcID = "updatePost";
                var sURL = "svc::updatePostByAdmin.do?time=" + new Date().getTime();
                var sInDs = "ds_update=ds_update";
                var sOutDs = "";
                var sParam = "";
                var sCallBack = "fnCallback";

                this.transaction(sSvcID, sURL, sInDs, sOutDs, sParam, sCallBack);

            } catch(e) {
                alert("저장 중 오류가 발생했습니다: " + e.message);
            }

        	//저장후 에디트모드 변경
        	this.currentMode="view"
        };




        // 닫기 버튼 클릭
        this.btn_close_onclick = function(obj,e)
        {
            this.close();
        };

        /************************************************
         * 유틸리티 함수들
         ************************************************/



        // 날짜 포맷팅
        this.formatDate = function(dateStr)
        {
            if(!dateStr) return "";

            try {
                // "YYYY-MM-DD HH:mm:ss" 형식을 "YYYY.MM.DD HH:mm" 형식으로 변환
                var date = dateStr.substring(0, 10).replace(/-/g, '.');
                var time = dateStr.substring(11, 16);
                return date + " " + time;
            } catch(e) {
                return dateStr;
            }
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Pop_BoardDetail_onload,this);
            this.addEventHandler("ontimer",this.Pop_BoardDetail_ontimer,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_modify.addEventHandler("onclick",this.btn_modify_onclick,this);
        };
        this.loadIncludeScript("Pop_BoardDetail.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
