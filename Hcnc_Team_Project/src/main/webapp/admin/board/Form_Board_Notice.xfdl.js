(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Board_Notice");
            this.set_titletext("New Form");
            this.set_color("blue");
            this.set_background("#F4F7FE");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_boardType", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">전체</Col><Col id=\"NAME\">전체</Col></Row><Row><Col id=\"CODE\">공지사항</Col><Col id=\"NAME\">공지사항</Col></Row><Row><Col id=\"CODE\">FAQ</Col><Col id=\"NAME\">FAQ</Col></Row><Row><Col id=\"CODE\">QnA</Col><Col id=\"NAME\">QnA</Col></Row><Row><Col id=\"CODE\">이벤트</Col><Col id=\"NAME\">이벤트</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_board", this);
            obj._setContents("<ColumnInfo><Column id=\"BOARD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MEMBER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"POST_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"POST_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"POST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"START_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"END_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_selected", this);
            obj._setContents("<ColumnInfo><Column id=\"BOARD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MEMBER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"POST_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"POST_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("search_area","40","0",null,"60","40",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("#ffffff");
            obj.set_borderRadius("10px");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_name","717","14","50","36",null,null,null,null,null,null,this.search_area.form);
            obj.set_taborder("2");
            obj.set_text("작성자");
            obj.set_font("normal 11pt/normal \"Noto Sans KR Medium\"");
            this.search_area.addChild(obj.name, obj);

            obj = new Edit("Edit00","768","17","105","30",null,null,null,null,null,null,this.search_area.form);
            obj.set_taborder("3");
            obj.set_borderRadius("5px");
            this.search_area.addChild(obj.name, obj);

            obj = new Button("Button00","855","17","30","30",null,null,null,null,null,null,this.search_area.form);
            obj.set_taborder("4");
            obj.set_text("⌕");
            obj.set_background("#135dae");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            obj.set_cursor("pointer");
            obj.set_border("0px none,0px,0px");
            this.search_area.addChild(obj.name, obj);

            obj = new Static("stc_ship","30","14","80","36",null,null,null,null,null,null,this.search_area.form);
            obj.set_taborder("0");
            obj.set_text("게시글 유형");
            obj.set_font("normal 11pt/normal \"Noto Sans KR Medium\"");
            this.search_area.addChild(obj.name, obj);

            obj = new Radio("rad_type","117","15","350","36",null,null,null,null,null,null,this.search_area.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_boardType");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_direction("vertical");
            obj.set_font("normal 9pt/normal \"Noto Sans KR\"");
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.search_area.addChild(obj.name, obj);

            obj = new Grid("grid_list","40","85",null,null,"40","40",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_board");
            obj.set_autofittype("col");
            obj.set_background("#FFFFFF");
            obj.set_border("0px none");
            obj.set_borderRadius("10px");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"26\"/><Column size=\"38\"/><Column size=\"36\"/><Column size=\"152\"/><Column size=\"36\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell text=\"chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" font=\"normal 11pt/normal &quot;Noto Sans KR Medium&quot;\" background=\"white\" border=\"0px none,0px none,1px solid #eeeeee\"/><Cell col=\"1\" text=\"NO.\" font=\"normal 11pt/normal &quot;Noto Sans KR Medium&quot;\" background=\"white\" border=\"0px none,0px none,1px solid #eeeeee\"/><Cell col=\"2\" text=\"게시분류\" font=\"normal 11pt/normal &quot;Noto Sans KR Medium&quot;\" background=\"white\" border=\"0px none,0px none,1px solid #eeeeee\"/><Cell col=\"3\" text=\"제목\" font=\"normal 11pt/normal &quot;Noto Sans KR Medium&quot;\" background=\"white\" border=\"0px none,0px none,1px solid #eeeeee\"/><Cell col=\"4\" text=\"작성자\" font=\"normal 11pt/normal &quot;Noto Sans KR Medium&quot;\" background=\"white\" border=\"0px none,0px none,1px solid #eeeeee\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\" textAlign=\"center\" border=\"0px none,0px none,0.5px solid #eeeeee\" font=\"normal 10pt/normal &quot;Noto Sans KR DemiLight&quot;\"/><Cell col=\"1\" text=\"expr:currow+1\" textAlign=\"center\" border=\"0px none,0px none,0.5px solid #eeeeee\" font=\"normal 10pt/normal &quot;Noto Sans KR DemiLight&quot;\"/><Cell col=\"2\" text=\"bind:BOARD_NAME\" textAlign=\"center\" border=\"0px none,0px none,0.5px solid #eeeeee\" font=\"normal 10pt/normal &quot;Noto Sans KR DemiLight&quot;\"/><Cell col=\"3\" text=\"bind:POST_TITLE\" textAlign=\"center\" border=\"0px none,0px none,0.5px solid #eeeeee\" font=\"normal 10pt/normal &quot;Noto Sans KR DemiLight&quot;\" edittype=\"none\"/><Cell col=\"4\" text=\"bind:USER_NAME\" textAlign=\"center\" border=\"0px none,0px none,0.5px solid #eeeeee\" font=\"normal 10pt/normal &quot;Noto Sans KR DemiLight&quot;\" edittype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_new",null,"16","100","30","65",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("등록");
            obj.set_borderRadius("5px");
            obj.set_background("#135dae");
            obj.set_color("white");
            obj.set_font("normal 11pt/normal \"Noto Sans KR Medium\"");
            obj.set_textAlign("center");
            obj.set_cursor("pointer");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","search_area.form.Edit00","value","ds_search","USER_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Board_Notice.xfdl", function() {
        //페이지 온로드시
        this.Form_Board_Notice_onload = function(obj,e)
        {
        	this.fnselectPostListByAdmin();
        };


        //등록 버튼
        this.btn_new_onclick = function(obj,e)
        {
        	this.fnInsertPost();
        };

        //포스트 조회 트랜젝션
        this.fnselectPostListByAdmin = function(){
        	var timestamp   = new Date().getTime();

        	var strSvcID       = "fnselectPostListByAdmin";
            var strURL         = "svc::selectPostListByAdmin.do?time=" + new Date().getTime();
            var strInDatasets  = "ds_search=ds_search";
            var strOutDatasets = "ds_board=ds_board";
            var strArg         = "timestamp=timestamp";
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
                case "fnselectPostListByAdmin":
                    trace("조회 완료");
                    break;
            }
        };

        // 라디오 박스 눌렀을때 조회되게
        this.search_area_rad_ship_onitemchanged = function(obj,e)
        {
        	var val = e.postvalue;  // 라디오에서 선택된 값

            if(val == "전체"){
                this.ds_search.setColumn(0, "BOARD_ID", "ALL");  // 전체는 ALL 같은 값으로 보냄 (쿼리에선 1,3,4로 조회함)
            } else if(val == "공지사항"){
                this.ds_search.setColumn(0, "BOARD_ID", "1");    // 공지사항
            } else if(val == "FAQ"){
                this.ds_search.setColumn(0, "BOARD_ID", "3");    // FAQ
            } else if(val == "QnA"){
                this.ds_search.setColumn(0, "BOARD_ID", "4");    // QnA
            } else if(val == "이벤트"){
                this.ds_search.setColumn(0, "BOARD_ID", "6");    // QnA
            }

            this.fnselectPostListByAdmin();
        };

        this.fnInsertPost = function(obj,e)
        {
        		 // 팝업 크기
                var popW = 500;
                var popH = 350;

                var objChildFrame = new ChildFrame(); // 하나의 새 폼 만들고
        		objChildFrame.init("itemPop", 200, 200, popW, popH, null, null, "popup::Pop_BaordInsert.xfdl"); // init
        		objChildFrame.showModal(this.getOwnerFrame(),'', this, "fn_popupCallback"); // 모달 띄어주기

        };

        //엔터 눌렀을때 조회되게
        this.search_area_Edit00_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.fnselectPostListByAdmin();
        	}
        };



        this.grid_list_oncelldblclick = function(obj,e)
        {
        	 if(e.row < 0) return; // 헤더 클릭 무시

            var nRow = e.row;
            var paramPostId = this.ds_board.getColumn(nRow, "POST_ID"); // 실제 컬럼명에 맞게 수정

            if(paramPostId) {
                // 상세보기 팝업 열기

        		var popW = 800;
                var popH = 700;
                var objChildFrame = new ChildFrame(); // 하나의 새 폼 만들고
        		objChildFrame.init("detailPop", 0, 0, popW, popH, null, null, "popup::Pop_BoardDetail.xfdl"); // init
        		objChildFrame.paramPostId = paramPostId;
        		objChildFrame.showModal(this.getOwnerFrame(),'', this, "fn_popupCallback"); // 모달 띄어주기
            }
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Board_Notice_onload,this);
            this.search_area.form.stc_name.addEventHandler("onclick",this.search_area_txt_th_onclick,this);
            this.search_area.form.Edit00.addEventHandler("onkeyup",this.search_area_Edit00_onkeyup,this);
            this.search_area.form.Button00.addEventHandler("onclick",this.search_area_Button00_onclick,this);
            this.search_area.form.stc_ship.addEventHandler("onclick",this.search_area_txt_th_onclick,this);
            this.search_area.form.rad_type.addEventHandler("onitemchanged",this.search_area_rad_ship_onitemchanged,this);
            this.grid_list.addEventHandler("onheadclick",this.grid_list_onheadclick,this);
            this.grid_list.addEventHandler("oncelldblclick",this.grid_list_oncelldblclick,this);
            this.btn_new.addEventHandler("onclick",this.btn_new_onclick,this);
        };
        this.loadIncludeScript("Form_Board_Notice.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
