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
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"CSSCLASS\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_ID\">00</Col><Col id=\"MENU_NM\">메인대쉬보드</Col><Col id=\"MENU_LEVEL\">0</Col></Row><Row><Col id=\"MENU_ID\">01</Col><Col id=\"MENU_NM\">회원관리</Col><Col id=\"MENU_LEVEL\">0</Col></Row><Row><Col id=\"MENU_ID\">0101</Col><Col id=\"MENU_NM\">회원목록</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">0102</Col><Col id=\"MENU_NM\">회원 등급 관리</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">0103</Col><Col id=\"MENU_NM\">탈퇴 및 휴면 회원 관리</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">0104</Col><Col id=\"MENU_NM\">포인트/쿠폰 지급관리</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">0105</Col><Col id=\"MENU_NM\">블랙리스트 관리</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">0106</Col><Col id=\"MENU_NM\">회원 가입</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">0107</Col><Col id=\"MENU_NM\">탈퇴 이력관리</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">02</Col><Col id=\"MENU_NM\">상품관리</Col><Col id=\"MENU_LEVEL\">0</Col></Row><Row><Col id=\"MENU_ID\">0201</Col><Col id=\"MENU_NM\">상품 관리</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">0202</Col><Col id=\"MENU_NM\">재고 관리</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">0203</Col><Col id=\"MENU_NM\">카테고리 관리</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">0204</Col><Col id=\"MENU_NM\">옵션 관리</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">0205</Col><Col id=\"MENU_NM\">추천 상품 진열 관리</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">0206</Col><Col id=\"MENU_NM\">상품 상태 변경</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">03</Col><Col id=\"MENU_NM\">주문 및 배송관리</Col><Col id=\"MENU_LEVEL\">0</Col></Row><Row><Col id=\"MENU_ID\">0301</Col><Col id=\"MENU_NM\">주문내역 확인</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">0302</Col><Col id=\"MENU_NM\">결제처리</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">0303</Col><Col id=\"MENU_NM\">반품/교환/취소 관리</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">0304</Col><Col id=\"MENU_NM\">송장 관리</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">0305</Col><Col id=\"MENU_NM\">배송비 정책 관리</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">0306</Col><Col id=\"MENU_NM\">주문상태 관리</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">0307</Col><Col id=\"MENU_NM\">엑셀 대량 주문 관리</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">04</Col><Col id=\"MENU_NM\">프로모션관리</Col><Col id=\"MENU_LEVEL\">0</Col></Row><Row><Col id=\"MENU_ID\">0401</Col><Col id=\"MENU_NM\">프로모션 세팅</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_PATH\">promo::Form_PromoList.xfdl</Col></Row><Row><Col id=\"MENU_ID\">0402</Col><Col id=\"MENU_NM\">배너 관리</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_PATH\">banner::Form_BannerList.xfdl</Col></Row><Row><Col id=\"MENU_ID\">0403</Col><Col id=\"MENU_NM\">팝업 관리</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_PATH\">banner::Form_PopupList.xfdl</Col></Row><Row><Col id=\"MENU_ID\">0404</Col><Col id=\"MENU_NM\">신규가입 이벤트 설정</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">0405</Col><Col id=\"MENU_NM\">리뷰 이벤트 관리</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">05</Col><Col id=\"MENU_NM\">게시판관리</Col><Col id=\"MENU_LEVEL\">0</Col></Row><Row><Col id=\"MENU_ID\">0501</Col><Col id=\"MENU_NM\">공지사항</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_PATH\">board::Form_NoticeList.xfdl</Col></Row><Row><Col id=\"MENU_ID\">0502</Col><Col id=\"MENU_NM\">FAQ</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">0503</Col><Col id=\"MENU_NM\">QnA</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">0504</Col><Col id=\"MENU_NM\">리뷰/댓글 신고 관리</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">0505</Col><Col id=\"MENU_NM\">1:1 문의 관리</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">06</Col><Col id=\"MENU_NM\">통계</Col><Col id=\"MENU_LEVEL\">0</Col></Row><Row><Col id=\"MENU_ID\">07</Col><Col id=\"MENU_NM\">시스템관리</Col><Col id=\"MENU_LEVEL\">0</Col></Row></Rows>");
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
            var frame0 = new VFrameSet("VFrameSet00",null,null,null,null,null,null,this);
            frame0.set_separatesize("50,*");
            this.addChild(frame0.name, frame0);
            this.frame=frame0;

            var frame1 = new ChildFrame("TopFrame",null,null,null,null,null,null,"FrameBase::Form_Top.xfdl",frame0);
            frame1.set_showtitlebar("false");
            frame1.set_showstatusbar("false");
            frame0.addChild(frame1.name, frame1);
            frame1.set_formurl("FrameBase::Form_Top.xfdl");


            var frame2 = new HFrameSet("HFrameSet00",null,null,null,null,null,null,frame0);
            frame2.set_separatesize("200,*");
            frame0.addChild(frame2.name, frame2);

            var frame3 = new ChildFrame("LeftFrame",null,null,null,null,null,null,"FrameBase::Form_Left.xfdl",frame2);
            frame3.set_showtitlebar("false");
            frame3.set_showstatusbar("false");
            frame2.addChild(frame3.name, frame3);
            frame3.set_formurl("FrameBase::Form_Left.xfdl");


            var frame4 = new ChildFrame("WorkFrame",null,null,null,null,null,null,"FrameBase::Form_Login.xfdl",frame2);
            frame4.set_showtitlebar("false");
            frame4.set_showstatusbar("false");
            frame2.addChild(frame4.name, frame4);
            frame4.set_formurl("FrameBase::Form_Login.xfdl");
        };
        
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Application_onload,this);
        };
        
        // script Compiler
        this.registerScript("Application_Desktop.xadl", function() {
        this.Application_onload = function(obj,e)
        {
        	//공통 FrameSet/Frame에 직접접근을 위한 변수 선언

          //메인프레인 안에 첫 번째 VFrameSet
          nexacro.VFrameSet00 = this.mainframe.VFrameSet00;

          //VFrameSet00 안에 TopFrame
          nexacro.TopFrame = this.mainframe.VFrameSet00.TopFrame;

          //VFrameSet00 HFrameSet00
          nexacro.HFrameSet00 = this.mainframe.VFrameSet00.HFrameSet00;

          //HFrameSet00 안에 LeftFrame
          nexacro.LeftFrame = this.mainframe.VFrameSet00.HFrameSet00.LeftFrame;

          //VFrameSet00 안에 WorkFrame
          nexacro.WorkFrame = this.mainframe.VFrameSet00.HFrameSet00.WorkFrame;

        };

        });
        this.checkLicense("");
        
        this.loadPreloadList();
        this.loadCss("xcssrc::common.xcss");
        this.loadCss("xcssrc::layout.xcss");
        this.loadCss("xcssrc::leftgrid.xcss");
        this.loadIncludeScript("Application_Desktop.xadl");
    };
}
)();
