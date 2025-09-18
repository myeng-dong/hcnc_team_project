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

            obj = new RichEditor("richeditor_postContent","30","185",null,"450","30",null,null,null,null,null,this);
            obj.getSetter("taborder").set("4");
            obj.getSetter("borderRadius").set("5px");
            obj.getSetter("border").set("1px solid #CCCCCC");
            obj.getSetter("fileurl").set("svc::admin/richeditor/jsp/upload.jsp");
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

            obj = new BindItem("item1","richeditor_postContent","value","ds_post","postContent");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Pop_BaordInsert.xfdl", function() {
        /**
         * '작성 완료' 버튼 클릭 이벤트
         */
        this.btn_save_onclick = function(obj, e)
        {
            // 게시글 제목, 내용 유효성 검사
            var sTitle = this.edt_postTitle.value;
            if (this.gfn_isNull(sTitle)) {
                alert("제목을 입력해주세요.");
                this.edt_postTitle.setFocus();
                return;
            }

            // Rich Editor의 내용을 데이터셋에 설정
            var sContent = this.richeditor_postContent.getContents();
            this.ds_post.setColumn(0, "postContent", sContent);

            // 게시글 정보 저장 트랜잭션 호출
            this.gfn_savePost();
        };

        /**
         * 게시글 정보 저장 트랜잭션 함수
         */
        this.gfn_savePost = function() {
            var sSvcId = "savePost";
            var sUrl = "svcUrl::board/savePost.do"; // 실제 서버 URL로 변경
            var sInDs = "ds_post=ds_post:U";
            var sOutDs = "";
            var sArg = "";
            var sCallback = "fn_callback";

            this.transaction(sSvcId, sUrl, sInDs, sOutDs, sArg, sCallback, false);
        };

        /**
         * 서버 통신 콜백 함수
         */
        this.fn_callback = function(sSvcId, nErrorCode, sErrorMsg)
        {
            if (nErrorCode < 0) {
                alert("게시글 작성 실패: " + sErrorMsg);
            } else {
                alert("게시글이 성공적으로 작성되었습니다.");
                this.close("reload");
            }
        };

        /**
         * '취소' 버튼 클릭 이벤트
         */
        this.btn_cancel_onclick = function(obj, e)
        {
            this.close();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
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
