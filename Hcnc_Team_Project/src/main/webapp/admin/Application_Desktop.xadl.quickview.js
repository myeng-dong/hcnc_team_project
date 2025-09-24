(function()
{
    return function()
    {
        this.on_loadAppVariables = function()
        {		
            var obj = null;
            
			// global dataobject
		
            // global dataset
            obj = new Dataset("gds_menu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"CSSCLASS\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_ID\">00</Col><Col id=\"MENU_NM\">메인대쉬보드</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_PATH\"/></Row><Row><Col id=\"MENU_ID\">01</Col><Col id=\"MENU_NM\">회원관리</Col><Col id=\"MENU_LEVEL\">0</Col></Row><Row><Col id=\"MENU_ID\">0101</Col><Col id=\"MENU_NM\">회원목록</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_PATH\">member::Form_MemberList.xfdl</Col></Row><Row><Col id=\"MENU_ID\">0102</Col><Col id=\"MENU_NM\">회원 등급 관리</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_PATH\">member::Form_MemberGrade.xfdl</Col></Row><Row><Col id=\"MENU_ID\">0103</Col><Col id=\"MENU_NM\">탈퇴 및 휴면 회원 관리</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_PATH\">member::Form_Member_withdrawAndDormant.xfdl</Col></Row><Row><Col id=\"MENU_ID\">0104</Col><Col id=\"MENU_NM\">포인트/쿠폰 지급관리</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_PATH\">member::Form_MemberPointAndCoupon.xfdl</Col></Row><Row><Col id=\"MENU_ID\">0105</Col><Col id=\"MENU_NM\">블랙리스트 관리</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_PATH\">member::Form_MemberBlacklist.xfdl</Col></Row><Row><Col id=\"MENU_ID\">0106</Col><Col id=\"MENU_NM\">회원 가입</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">0107</Col><Col id=\"MENU_NM\">탈퇴 이력관리</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">02</Col><Col id=\"MENU_NM\">상품관리</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_PATH\"/></Row><Row><Col id=\"MENU_ID\">0201</Col><Col id=\"MENU_NM\">상품 관리</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_PATH\">product::Form_Product.xfdl</Col></Row><Row><Col id=\"MENU_ID\">0202</Col><Col id=\"MENU_NM\">재고 관리</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">0203</Col><Col id=\"MENU_NM\">카테고리 관리</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_PATH\">product::Form_ProductCate.xfdl</Col></Row><Row><Col id=\"MENU_ID\">0204</Col><Col id=\"MENU_NM\">옵션 관리</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_PATH\">product::Form_ProductOption.xfdl</Col></Row><Row><Col id=\"MENU_ID\">0205</Col><Col id=\"MENU_NM\">추천 상품 진열 관리</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">0206</Col><Col id=\"MENU_NM\">상품 상태 변경</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">03</Col><Col id=\"MENU_NM\">주문 및 배송관리</Col><Col id=\"MENU_LEVEL\">0</Col></Row><Row><Col id=\"MENU_ID\">0301</Col><Col id=\"MENU_NM\">주문내역 확인</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_PATH\">order::Form_Order_Main.xfdl</Col></Row><Row><Col id=\"MENU_ID\">0302</Col><Col id=\"MENU_NM\">결제처리</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_PATH\">order::Form_Order_Pay.xfdl</Col></Row><Row><Col id=\"MENU_ID\">0303</Col><Col id=\"MENU_NM\">주문상태 관리</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_PATH\">order::Form_Order_Status.xfdl</Col></Row><Row><Col id=\"MENU_ID\">0304</Col><Col id=\"MENU_NM\">송장 관리</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_PATH\">order::Form_Order_Ship.xfdl</Col></Row><Row><Col id=\"MENU_ID\">0305</Col><Col id=\"MENU_NM\">배송비 정책 관리</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_PATH\">order::Form_Order_PostPrice.xfdl</Col></Row><Row><Col id=\"MENU_ID\">04</Col><Col id=\"MENU_NM\">프로모션관리</Col><Col id=\"MENU_LEVEL\">0</Col></Row><Row><Col id=\"MENU_ID\">0401</Col><Col id=\"MENU_NM\">프로모션 세팅</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_PATH\">promo::Form_PromoList.xfdl</Col></Row><Row><Col id=\"MENU_ID\">0402</Col><Col id=\"MENU_NM\">배너 관리</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_PATH\">banner::Form_BannerList.xfdl</Col></Row><Row><Col id=\"MENU_ID\">0403</Col><Col id=\"MENU_NM\">팝업 관리</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_PATH\">banner::Form_PopupList.xfdl</Col></Row><Row><Col id=\"MENU_ID\">0404</Col><Col id=\"MENU_NM\">신규가입 이벤트 설정</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">0405</Col><Col id=\"MENU_NM\">리뷰 이벤트 관리</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">05</Col><Col id=\"MENU_NM\">게시판관리</Col><Col id=\"MENU_LEVEL\">0</Col></Row><Row><Col id=\"MENU_ID\">0501</Col><Col id=\"MENU_NM\">공지사항 / FAQ</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_PATH\">board::Form_Board_Notice.xfdl</Col></Row><Row><Col id=\"MENU_ID\">0504</Col><Col id=\"MENU_NM\">리뷰/댓글 신고 관리</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_PATH\">board::Form_Board_Report.xfdl</Col></Row><Row><Col id=\"MENU_ID\">0505</Col><Col id=\"MENU_NM\">1:1 문의 관리</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_PATH\">board::Form_Board_Qna.xfdl</Col></Row><Row><Col id=\"MENU_ID\">06</Col><Col id=\"MENU_NM\">통계</Col><Col id=\"MENU_LEVEL\">0</Col></Row><Row><Col id=\"MENU_ID\">07</Col><Col id=\"MENU_NM\">시스템관리</Col><Col id=\"MENU_LEVEL\">0</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_adminInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"MEMBER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this._addDataset(obj.name, obj);
            
            // global variable

            
            obj = null;
        };
        
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("Application_Desktop");
            this.set_screenid("Desktop_screen");

            if (this._is_attach_childframe)
            	return;
            
            // frame
            var mainframe = this.createMainFrame("mainframe","0","0","1280","720",null,null,this);
            mainframe.set_showtitlebar("true");
            mainframe.set_showstatusbar("true");
            mainframe.set_titletext("TopLeftFrame");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;
            // tray

        };
        
        this.loadPreloadList = function()
        {

        };
        
        this.mainframe_createBodyFrame = function()
        {
            var obj = new ChildFrame("QuickViewFrame", null, null, null, null, null, null, "", this);
            
            obj.set_showtitlebar("false");
            obj.set_showstatusbar("false");
            obj.set_border("0px none");
			
            this.addChild(obj.name, obj);
            obj.set_formurl(nexacro._quickview_formurl);
            this.frame = obj;
            
            obj = null;
        };
        
        this.on_initEvent = function()
        {
        };
		// script Compiler
        this.registerScript("Application_Desktop.xadl", function() {
        this.Application_onload = function(obj, e)
        {
            // 메인프레임 안에 첫 번째 VFrameSet
            nexacro.VFrameSet00 = this.mainframe.VFrameSet00;

            // VFrameSet00 안에 TopFrame
            nexacro.TopFrame = this.mainframe.VFrameSet00.TopFrame;

            // VFrameSet00 안에 HFrameSet00
            nexacro.HFrameSet00 = this.mainframe.VFrameSet00.HFrameSet00;

            // HFrameSet00 안에 LeftFrame
            nexacro.LeftFrame = this.mainframe.VFrameSet00.HFrameSet00.LeftFrame;

            // HFrameSet00 안에 VFrameSet01 → 그 안에 TitleFrame, WorkFrame
            nexacro.InnerVFrameSet = this.mainframe.VFrameSet00.HFrameSet00.VFrameSet01;

            // InnerVFrameSet 안의 TitleFrame (Form_AdminTitle)
            nexacro.TitleFrame = this.mainframe.VFrameSet00.HFrameSet00.VFrameSet01.TitleFrame;

            // InnerVFrameSet 안의 WorkFrame (업무화면 영역)
            nexacro.WorkFrame = this.mainframe.VFrameSet00.HFrameSet00.VFrameSet01.WorkFrame;

            // 로그인 전: Top/Left/Title 프레임 숨김 (영역 제거) - feat. 09.11 'GJ'
            nexacro.VFrameSet00.set_separatesize("0,*");   // TopFrame 높이 0
            nexacro.HFrameSet00.set_separatesize("0,*");   // LeftFrame 너비 0
            nexacro.InnerVFrameSet = this.mainframe.VFrameSet00.HFrameSet00.VFrameSet01;
            nexacro.InnerVFrameSet.set_separatesize("0,*"); // TitleFrame 높이 0

            //최초 화면 = 로그인 - feat. 09.11 'GJ'
        	nexacro.WorkFrame.arguments = { "isLogout": false};
            nexacro.WorkFrame.set_formurl("member::Form_Login.xfdl");

        };

        });
		this.checkLicense("");
        
        this.loadPreloadList();
        this.loadCss("xcssrc::common.xcss");
        this.loadCss("xcssrc::layout.xcss");
        this.loadCss("xcssrc::leftgrid.xcss");
    };
}
)();
