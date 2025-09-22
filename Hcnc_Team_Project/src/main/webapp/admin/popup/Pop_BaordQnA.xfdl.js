(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Pop_BoardQnA");
            this.set_titletext("답변 작성");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(500,350);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_comment", this);
            obj._setContents("<ColumnInfo><Column id=\"POST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MEMBER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"COMMENT_CONTENT\" type=\"STRING\" size=\"1000\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"POST_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_board", this);
            obj._setContents("<ColumnInfo><Column id=\"BOARD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MEMBER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"POST_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"POST_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"POST_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"POST_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_title","20","15","397","25",null,null,null,null,null,null,this);
            obj.set_text("게시글 제목");
            obj.set_font("bold 12pt \'Noto Sans KR\'");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_content","20","50",null,"100","20",null,null,null,null,null,this);
            obj.set_value("게시글 내용이 여기에 표시됩니다.");
            obj.set_readonly("true");
            obj.set_font("normal 10pt \'Noto Sans KR\'");
            obj.set_border("0px none");
            obj.set_borderRadius("5px");
            obj.getSetter("multiline").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_reply","20","160","120","20",null,null,null,null,null,null,this);
            obj.set_text("관리자 답변");
            obj.set_font("normal 10pt \'Noto Sans KR\'");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_reply","20","185",null,"120","20",null,null,null,null,null,this);
            obj.set_wordWrap("char");
            obj.set_scrollbartype("auto vert");
            obj.set_font("normal 10pt \'Noto Sans KR\'");
            obj.set_border("1px solid #555555");
            obj.set_borderRadius("5px");
            this.addChild(obj.name, obj);

            obj = new Button("btn_reply",null,"267","80","30","28",null,null,null,null,null,this);
            obj.set_text("등록");
            obj.set_font("bold 11pt \'Noto Sans KR\'");
            obj.set_background("#135dae");
            obj.set_color("#ffffff");
            obj.set_borderRadius("5px");
            obj.set_cursor("pointer");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Static("stc_user","427","18","50","25",null,null,null,null,null,null,this);
            obj.set_text("게시자");
            obj.set_font("normal 300 9pt/normal \"Noto Sans KR\"");
            obj.set_taborder("5");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",500,350,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","txt_reply","value","ds_comment","COMMENT_CONTENT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Pop_BaordQnA.xfdl", function() {
        // 온로드시
        this.Pop_BoardQnA_onload = function(obj,e)
        {
        	var glbAd = nexacro.getApplication(); // 전역변수 받아오기 위한 로컬 변수
        	var postId = this.parent["POST_ID"];  // 포스트ID를 부모에게 받아옴
        	var memberId = glbAd.gds_adminInfo.getColumn(0, "MEMBER_ID"); // 멤버id를 전역변수에서 받아옴


        	this.ds_comment.setColumn(0,"POST_ID",postId); //포스트아이디 셋
        	this.ds_comment.setColumn(0,"MEMBER_ID",memberId); //멤버 아이디 셋
        	trace(this.ds_comment.getColumn(0,"POST_ID"));

        	this.ds_search.setColumn(0,"POST_ID",postId); //포스트아이디 셋
        	this.fnselectOneOnOneByAdmin();
        	this.txt_content.set_wordWrap("char");

        };



        //1대1 게시판 조회 트랜젝션
        this.fnselectOneOnOneByAdmin = function(){
        	var strSvcID       = "fnselectOneOnOneByAdmin";
            var strURL         = "svc::selectOneOnOneByAdmin.do?time=" + new Date().getTime();
            var strInDatasets  = "ds_search=ds_search";
            var strOutDatasets = "ds_board=ds_board";
            var strArg         = "";
            var strCallback    = "fnCallback";

            this.transaction(strSvcID, strURL, strInDatasets, strOutDatasets, strArg, strCallback);
        }


        //1대1 게시판 댓글 추가 트랜젝션
        this.fninsertCommentByAdmin = function(){
        	var strSvcID       = "fninsertCommentByAdmin";
            var strURL         = "svc::insertCommentByAdmin.do?time=" + new Date().getTime();
            var strInDatasets  = "ds_comment=ds_comment";
            var strOutDatasets = "";
            var strArg         = "";
            var strCallback    = "fnCallback";

            this.transaction(strSvcID, strURL, strInDatasets, strOutDatasets, strArg, strCallback);
        }

        // 공통 콜백
        this.fnCallback = function(svcID, errCode, errMsg) {
            if (errCode < 0) {
                this.alert("에러: " + errMsg);
                return;
            }

            switch(svcID) {
                case "fninsertCommentByAdmin":
                    trace("댓글 추가 완료");
                    break;

        		case "fnselectOneOnOneByAdmin":
        			trace("게시글 조회 완료");
        			if (this.ds_board.getRowCount() > 0) {
        				var postTitle = this.ds_board.getColumn(0,"POST_TITLE");
        				var postContent = this.ds_board.getColumn(0,"POST_CONTENT");
        				var postUser = this.ds_board.getColumn(0,"USER_NAME");

        				this.stc_title.set_text(postTitle);

        				this.txt_content.set_value(postContent);
        				this.stc_user.set_text(postUser);

        			}
        			break;

            }
        };



        this.btn_reply_onclick = function(obj,e)
        {
        	    var replyText = this.txt_reply.value;
        		this.ds_comment.setColumn(0,"COMMENT_CONTENT", replyText);
        		trace(this.ds_comment.getColumn(0,"COMMENT_CONTENT"));
        		trace(this.ds_comment.getColumn(0,"POST_ID"));
        		trace(this.ds_comment.getColumn(0,"MEMBER_ID"));
        		this.fninsertCommentByAdmin();


        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Pop_BoardQnA_onload,this);
            this.txt_reply.addEventHandler("onkeyup",this.txt_reply_onkeyup,this);
            this.btn_reply.addEventHandler("onclick",this.btn_reply_onclick,this);
        };
        this.loadIncludeScript("Pop_BaordQnA.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
