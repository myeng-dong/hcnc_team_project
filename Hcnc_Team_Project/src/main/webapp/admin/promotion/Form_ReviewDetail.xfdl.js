(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_ReviewDetail");
            this.set_titletext("New Form");
            this.set_background("#F4F7FE");
            if (Form == this.constructor)
            {
                this._setFormPosition(560,630);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_review_info", this);
            obj._setContents("<ColumnInfo><Column id=\"REVIEW_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MEMBER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REVIEW_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"REVIEW_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"STAR_POINT\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REVIEW_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"POINT_ISSUED\" type=\"STRING\" size=\"256\"/><Column id=\"ORDER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ISSUED_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_addpoint", this);
            obj._setContents("<ColumnInfo><Column id=\"MEMBER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHANGE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"POINT\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"ORDER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_h4","30","20","492","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("리뷰 상세내역");
            obj.set_font("normal 16pt/normal \"Noto Sans KR Black\"");
            obj.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Static("stc_bg","30","70",null,null,"30","30",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_txt","55","122",null,"40","415",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("리뷰번호");
            obj.set_font("normal 12pt/normal \"Noto Sans KR Black\"");
            obj.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Static("sta_txt00","135","122",null,"40","85",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("리뷰정보");
            obj.set_font("normal 10pt/normal \"Noto Sans KR Medium\"");
            obj.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Static("sta_txt01","55","164",null,"40","415",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("상품코드");
            obj.set_font("normal 12pt/normal \"Noto Sans KR Black\"");
            obj.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Static("sta_txt00_00","135","164",null,"40","85",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("리뷰정보");
            obj.set_font("normal 10pt/normal \"Noto Sans KR Medium\"");
            obj.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Static("sta_txt01_00","55","206",null,"40","415",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("상품명");
            obj.set_font("normal 12pt/normal \"Noto Sans KR Black\"");
            obj.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Static("sta_txt00_00_00","135","206",null,"40","85",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("리뷰정보");
            obj.set_font("normal 10pt/normal \"Noto Sans KR Medium\"");
            obj.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Static("sta_txt01_01","55","248",null,"40","415",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("회원ID");
            obj.set_font("normal 12pt/normal \"Noto Sans KR Black\"");
            obj.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Static("sta_txt00_00_01","135","248",null,"40","320",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("리뷰정보");
            obj.set_font("normal 10pt/normal \"Noto Sans KR Medium\"");
            obj.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Static("sta_txt01_01_00","275","246",null,"40","195",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("별점");
            obj.set_font("normal 12pt/normal \"Noto Sans KR Black\"");
            obj.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Static("sta_txt00_00_01_00","355","246",null,"40","80",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("리뷰정보");
            obj.set_font("normal 10pt/normal \"Noto Sans KR Medium\"");
            obj.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Static("sta_txt00_00_01_00_00","135","80",null,"40","330",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("리뷰정보");
            obj.set_font("normal 10pt/normal \"Noto Sans KR Medium\"");
            obj.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Static("sta_txt01_01_00_00","55","80",null,"40","415",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("지급상태");
            obj.set_font("normal 12pt/normal \"Noto Sans KR Black\"");
            obj.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Static("sta_txt01_01_00_00_00","275","82",null,"40","195",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("지급일");
            obj.set_font("normal 12pt/normal \"Noto Sans KR Black\"");
            obj.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Static("sta_txt00_00_01_00_00_00","355","82",null,"40","40",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("리뷰정보");
            obj.set_font("normal 10pt/normal \"Noto Sans KR Medium\"");
            obj.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Static("sta_txt01_01_00_00_01","55","290",null,"40","415",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("리뷰제목");
            obj.set_font("normal 12pt/normal \"Noto Sans KR Black\"");
            obj.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Static("sta_txt00_00_01_00_00_01","135","290",null,"40","85",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("리뷰정보");
            obj.set_font("normal 10pt/normal \"Noto Sans KR Medium\"");
            obj.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Static("sta_txt01_01_00_00_01_00","55","332",null,"40","415",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("리뷰내용");
            obj.set_font("normal 12pt/normal \"Noto Sans KR Black\"");
            obj.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addpoint","165","545","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("포인트 지급");
            obj.set_borderRadius("5px");
            obj.set_background("#135dae");
            obj.set_color("white");
            obj.set_font("normal 11pt/normal \"Noto Sans KR Medium\"");
            obj.set_textAlign("center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","284","545","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("닫기");
            obj.set_borderRadius("5px");
            obj.set_background("#f87171");
            obj.set_color("white");
            obj.set_font("normal 11pt/normal \"Noto Sans KR Medium\"");
            obj.set_textAlign("center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtarea_content","60","375","446","155",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",560,630,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","sta_h4","text","gds_menu","MENU_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","sta_txt00","text","ds_review_list","REVIEW_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","sta_txt00_00","text","ds_review_list","PRODUCT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","sta_txt00_00_00","text","ds_review_list","PRODUCT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","sta_txt00_00_01","text","ds_review_list","MEMBER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","sta_txt00_00_01_00","text","ds_review_list","STAR_POINT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","sta_txt00_00_01_00_00","text","ds_review_list","COUPON_ISSUED");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","sta_txt00_00_01_00_00_00","text","ds_review_list","ISSUED_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","sta_txt00_00_01_00_00_01","text","ds_review_list","REVIEW_TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","txtarea_content","value","ds_review_info","REVIEW_CONTENT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_ReviewDetail.xfdl", function() {
        this.Form_ReviewDetail_onload = function(obj,e)
        {
        	trace("팝업 Form onload, arguments: " + JSON.stringify(this.parent.arguments));

            // 부모에서 전달한 리뷰 정보를 _selectedReview로 초기화
            if(this.parent.arguments){
                this._selectedReview = this.parent.arguments;
                trace("초기 선택 리뷰: " + JSON.stringify(this._selectedReview));

                // BindItem 등으로 UI 초기화 가능
                this.sta_txt00.set_text(this._selectedReview.REVIEW_ID);
                this.sta_txt00_00.set_text(this._selectedReview.PRODUCT_NAME);
                this.sta_txt00_00_01.set_text(this._selectedReview.MEMBER_ID);
                this.sta_txt00_00_01_00.set_text(this._selectedReview.REVIEW_TITLE);
                this.txtarea_content.set_value(this._selectedReview.REVIEW_CONTENT);
            }
        };


        // 상세 Form 열기
        this.fn_openReviewDetail = function() {
            var sId = "ReviewDetailFrame";
            var sFormUrl = "Form_ReviewDetail.xfdl";
            var oChild = new ChildFrame(sId, 0, 0, 560, 630, null, null, this);

            oChild.set_formurl(sFormUrl);
            oChild.set_dragmovetype("all");
            oChild.showModal(this.getOwnerFrame(), function(obj, e){
                // 상세 Form 종료 시 선택 리뷰 전달 받음
                if(e.returnvalue){
                    this._selectedReview = e.returnvalue;
                    trace("선택 리뷰 전달받음: " + JSON.stringify(this._selectedReview));
                }
            }, this);
        };

        // 닫기 버튼
        this.btn_close_onclick = function(obj, e) {
            trace("btn_close_onclick 호출");
            this.close();
        };

        // 포인트 지급 버튼 클릭
        this.btn_addpoint_onclick = function(obj, e) {
            trace("btn_addpoint_onclick 호출");
            trace("현재 _selectedReview 상태: " + JSON.stringify(this._selectedReview));

            if(!this._selectedReview){
                this.alert("리뷰를 선택하세요.");
                trace("선택 리뷰 없음, 포인트 지급 중지");
                return;
            }

            // 다이얼로그
            var dTitle = "포인트 지급 확인";
            var dMsg = "선택한 리뷰에 포인트를 지급하시겠습니까?";
            var dType = "YESNO";
            this.confirm(dMsg, dTitle, dType, "fn_pointConfirmCallback");
        };

        // 다이얼로그 콜백
        this.fn_pointConfirmCallback = function(returnValue) {
            trace("fn_pointConfirmCallback 호출, returnValue: " + returnValue);

            if(returnValue == "YES"){
                this.fn_prepareAddPointDataset();
                this.fn_callAddPointTransaction();
            } else {
                this.alert("포인트 지급 중지");
            }
        };

        // Dataset에 선택 리뷰 담기
        this.fn_prepareAddPointDataset = function() {
            trace("fn_prepareAddPointDataset 호출");

            this.ds_addpoint.clearData();
            trace("Dataset 초기화 완료");

            if(!this._selectedReview){
                this.alert("리뷰를 선택하세요.");
                trace("선택 리뷰 없음, Dataset에 데이터 추가 중지");
                return;
            }

            var row = this.ds_addpoint.addRow();
            this.ds_addpoint.setColumn(row, "MEMBER_ID", this._selectedReview.MEMBER_ID);
            this.ds_addpoint.setColumn(row, "CHANGE_TYPE", "적립");
            this.ds_addpoint.setColumn(row, "POINT", 500);
            this.ds_addpoint.setColumn(row, "DESCRIPTION", "[리뷰 이벤트 수동 지급]" + this._selectedReview.REVIEW_ID + this._selectedReview.MEMBER_ID);
            this.ds_addpoint.setColumn(row, "ORDER_ID", this._selectedReview.ORDER_ID);

            trace("Dataset에 데이터 담김: " +
                  this.ds_addpoint.getColumn(row, "MEMBER_ID") + ", " +
                  this.ds_addpoint.getColumn(row, "ORDER_ID"));
        };

        // 서버 전송
        this.fn_callAddPointTransaction = function() {
            trace("fn_callAddPointTransaction 호출");

            if(this.ds_addpoint.getRowCount() <= 0){
                this.alert("Dataset에 포인트 정보가 없습니다.");
                trace("Dataset empty, transaction 중지");
                return;
            }

            var strSvcID = "insertReviewRewardPointsByAdmin";
            var setURL = "svc::/insertReviewRewardPointsByAdmin.do";
            var strInDatasets = "ds_addpoint=ds_addpoint";
            var strOutDatasets = "ds_addpoint=ds_addpoint";
            var strArg = "";
            var callBack = "fn_callBack";
            var inAsync = true;

            trace("transaction 호출: " + setURL + ", Dataset row count: " + this.ds_addpoint.getRowCount());
            this.transaction(strSvcID, setURL, strInDatasets, strOutDatasets, strArg, callBack, inAsync);
        };

        // 공통 콜백
        this.fn_callBack = function(svcID, errorCode, errorMSG) {
            trace("fn_callBack 호출, svcID: " + svcID + ", errorCode: " + errorCode + ", errorMSG: " + errorMSG);

            if(errorCode == -1){
                this.alert("포인트 지급 실패: " + errorMSG);
                return;
            }

            switch(svcID){
                case "insertReviewRewardPointsByAdmin":
                    this.alert("포인트 지급 완료");
                    break;
            }
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_ReviewDetail_onload,this);
            this.sta_h4.addEventHandler("onclick",this.static_board_onclick,this);
            this.sta_txt.addEventHandler("onclick",this.static_board_onclick,this);
            this.sta_txt01.addEventHandler("onclick",this.static_board_onclick,this);
            this.sta_txt01_00.addEventHandler("onclick",this.static_board_onclick,this);
            this.sta_txt01_01.addEventHandler("onclick",this.static_board_onclick,this);
            this.sta_txt01_01_00.addEventHandler("onclick",this.static_board_onclick,this);
            this.sta_txt01_01_00_00.addEventHandler("onclick",this.static_board_onclick,this);
            this.sta_txt01_01_00_00_00.addEventHandler("onclick",this.static_board_onclick,this);
            this.sta_txt01_01_00_00_01.addEventHandler("onclick",this.static_board_onclick,this);
            this.sta_txt01_01_00_00_01_00.addEventHandler("onclick",this.static_board_onclick,this);
            this.btn_addpoint.addEventHandler("onclick",this.btn_addpoint_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("Form_ReviewDetail.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
