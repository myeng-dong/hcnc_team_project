(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Pop_BoardUpdate");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_detail", this);
            obj._setContents("<ColumnInfo><Column id=\"POST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"POST_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"POST_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_postId", this);
            obj._setContents("<ColumnInfo><Column id=\"POST_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_boardType", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"20\"/><Column id=\"NAME\" type=\"STRING\" size=\"50\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">NOTICE</Col><Col id=\"NAME\">공지사항</Col></Row><Row><Col id=\"CODE\">FAQ</Col><Col id=\"NAME\">FAQ</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_boardType","40","20","80","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("게시판");
            obj.set_font("normal 11pt/normal \"Noto Sans KR Medium\"");
            obj.set_color("#555555");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_boardType","100","25","210","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_borderRadius("5px");
            obj.set_border("1px solid #CCCCCC");
            obj.set_displaynulltext("게시판을 선택하세요");
            obj.set_innerdataset("ds_boardType");
            obj.set_codecolumn("NAME");
            obj.set_datacolumn("NAME");
            this.addChild(obj.name, obj);

            obj = new Static("sta_postTitle","40","70","80","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("제목");
            obj.set_font("normal 11pt/normal \"Noto Sans KR Medium\"");
            obj.set_color("#555555");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_postTitle","100","75",null,"30","31",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_borderRadius("5px");
            obj.set_border("1px solid #CCCCCC");
            this.addChild(obj.name, obj);

            obj = new Static("sta_postContent","40","120","80","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("내용");
            obj.set_font("normal 11pt/normal \"Noto Sans KR Medium\"");
            obj.set_color("#555555");
            this.addChild(obj.name, obj);

            obj = new Static("sta_user","580","20","80","40",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("작성자");
            obj.set_font("normal 11pt/normal \"Noto Sans KR Medium\"");
            obj.set_color("#555555");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_user","640","25",null,"30","31",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_borderRadius("5px");
            obj.set_border("1px solid #CCCCCC");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel",null,null,"100","40","141","30",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("취소");
            obj.set_background("#E5E7EB");
            obj.set_color("#555555");
            obj.set_border("0px none");
            obj.set_borderRadius("5px");
            obj.set_cursor("pointer");
            obj.set_font("normal 11pt/normal \"Noto Sans KR Medium\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,null,"100","40","31","30",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("작성 완료");
            obj.set_background("#5C6BC0");
            obj.set_color("white");
            obj.set_border("0px none");
            obj.set_borderRadius("5px");
            obj.set_cursor("pointer");
            obj.set_font("normal 11pt/normal \"Noto Sans KR Medium\"");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("web_postContent","40","165",null,"385","31",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.getSetter("borderRadius").set("5px");
            obj.set_border("1px solid #CCCCCC");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,650,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","cmb_boardType","value","ds_post","BOARD_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_postTitle","value","ds_post","POST_TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_user","value","ds_detail","USER_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Pop_BoardUpdate.xfdl", function() {

        this.Pop_BoardUpdate_onload = function(obj,e)
        {

        	// WebBrowser에 HTML 내용 표시
            var sUrl = "http://localhost:8080/ckedit.do";
            this.web_postContent.set_url(sUrl);

        	// 부모에서 전달받은 POST_ID로 상세 데이터 조회
        	var postId = this.parent.paramPostId;

        	this.ds_postId.setColumn(0,"POST_ID",postId)

        	if(postId) {
                this.selectPostDetailByAdmin(postId);
            } else {
                alert("게시글 정보가 없습니다.");
                this.close();
            }
        };


        // 게시글 상세 데이터 조회
        this.selectPostDetailByAdmin = function(postId)
        {
            var sSvcID = "selectPostDetailByAdmin";
            var sURL = "svc::selectPostDetailByAdmin.do";
            var sInDs = "ds_postId=ds_postId";
            var sOutDs = "ds_detail=ds_detail";
            var sParam = "";
            var sCallBack = "fnCallback";

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
            var boardName = this.ds_detail.getColumn(0, "BOARD_NAME");
            var postContent = this.ds_detail.getColumn(0, "POST_CONTENT");

        	// 각 스태틱에 텍스트를 지정해줌
            this.edt_postTitle.set_value(postTitle);
            this.cmb_boardType.set_value(boardName);
            this.sta_author_value.set_text(userName);

            var nTimerID = this.setTimer(1, 2000);
            this.contentToShow = postContent;

        };



        this.Pop_BoardUpdate_ontimer = function(obj,e)
        {

        	if(e.timerid == 1) {
                this.killTimer(1);

                // HTML 컨텐츠 설정
                this.web_postContent.callMethod("setEditorContent",this.contentToShow);
            }
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Pop_BoardUpdate_onload,this);
            this.addEventHandler("ontimer",this.Pop_BoardUpdate_ontimer,this);
            this.cmb_boardType.addEventHandler("onitemchanged",this.cmb_boardType_onitemchanged,this);
            this.sta_user.addEventHandler("onclick",this.sta_boardType00_onclick,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.web_postContent.addEventHandler("onloadcompleted",this.web_postContent_onloadcompleted,this);
        };
        this.loadIncludeScript("Pop_BoardUpdate.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
