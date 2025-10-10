(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Top");
            this.set_titletext("Form_Top");
            this.set_background("white");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,50);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00",null,"5","100","43","90",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("님 환영합니다");
            obj.set_font("normal 12pt/normal \"Pretendard SemiBold\"");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("h1_logo","5","3","190","45",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_image("url(\'imagerc::h1_logo.png\')");
            this.addChild(obj.name, obj);

            obj = new Button("btn_logout",null,"11","80","31","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("로그아웃");
            obj.set_font("normal 10pt/normal \"Pretendard SemiBold\"");
            obj.set_background("transition");
            obj.set_border("0px none");
            obj.set_color("firebrick");
            this.addChild(obj.name, obj);

            obj = new Div("div_grayline","0",null,null,"1","0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("#cccccc");
            this.addChild(obj.name, obj);

            obj = new Static("admin_id",null,"14","70","23","200",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("#f5f5f5");
            obj.set_textAlign("center");
            obj.set_color("black");
            obj.set_font("bold 14px/normal \"Noto Sans KR Black\"");
            obj.set_borderRadius("12px");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,50,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","admin_id","text","gds_adminInfo","MEMBER_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Top.xfdl", function() {
        this.isWait = false; // 전역변수 선언!
        //로그아웃 버튼 클릭시 세션 끊고 로그아웃

        //로그인 완료시 실행되게
        this.fn_initWebSocket = function()
        {
            trace("로그인 완료 - 웹소켓 연결 시작");
            this.connectWebSocket();
        };


        this.btn_logout_onclick = function(obj,e){

            if(this.isWait) return;
            this.isWait = true;
            this.logout();
        };

        this.fn_callBack = function(svcID, errorCode, errorMSG)
        {
            if(errorCode == -1) {
                this.alert(errorMSG);
                this.isWait = false;
                return;
            }

            switch(svcID) {
        	case "adminLogout":
        		var glbAd = nexacro.getApplication();


        		// 전역 데이터 초기화
        		if(glbAd.gds_adminInfo) {
        			glbAd.gds_adminInfo.clearData();
        		}

        		// 프레임 닫기
        		nexacro.VFrameSet00.set_separatesize("0,*");
        		nexacro.HFrameSet00.set_separatesize("0,*");
        		nexacro.InnerVFrameSet.set_separatesize("0,*");

        		// 로그인 화면으로
        		this.isWait = false;
        		glbAd.mainframe.VFrameSet00.HFrameSet00.VFrameSet01.WorkFrame.arguments = { "isLogout": true };
        		glbAd.mainframe.VFrameSet00.HFrameSet00.VFrameSet01.WorkFrame.set_formurl("member::Form_Login.xfdl");

                break;
            }
        };

        this.logout = function()
        {
            var strSvcID = "adminLogout";
            var setURL = "svc::/adminLogoutByAdmin.do?time=" + new Date().getTime();
            var strInDatasets = "";
            var strOutDatasets = "";
            var strArg = "";
            var callBack = "fn_callBack";
            var inAsync = true;

            this.transaction(strSvcID, setURL, strInDatasets, strOutDatasets, strArg, callBack, inAsync);
        };


        //웹소켓 연결 함수
        this.connectWebSocket = function()
        {
            var glbAd = nexacro.getApplication();
            var userId = glbAd.gds_adminInfo.getColumn(0, "MEMBER_ID");

            if (!userId) {
                trace("❌ 사용자 ID 없음 - 웹소켓 연결 불가");
                return;
            }

            var wsUrl = 'ws://localhost:8080/notification/' + userId;

            trace("🔌 웹소켓 연결 시도: " + wsUrl);

            try {
                // ⭐ 브라우저 기본 WebSocket 사용
                this.websocket = new WebSocket(wsUrl);

                var objThis = this;

                // onopen 이벤트
                this.websocket.onopen = function(e) {
                    trace("✅ 웹소켓 연결 성공");
                };

                // onmessage 이벤트
                this.websocket.onmessage = function(e) {
                    trace("📩 알림 수신: " + e.data);

                    try {
                        var data = JSON.parse(e.data);

                        if (data.type == "ORDER_STATUS_CHANGE") {
                            alert("[알림] " + data.message);
                        }
                        else if (data.type == "NEW_ORDER") {
                            alert("[신규 주문] " + data.message);
                        }
                        else if (data.type == "NEW_INQUIRY") {
                            alert("[신규 문의] " + data.message);
                        }
                        else if (data.type == "INQUIRY_REPLY") {
                            alert("[답변 알림] " + data.message);
                        }

                    } catch(err) {
                        trace("❌ 메시지 파싱 에러: " + err.message);
                    }
                };

                // onerror 이벤트
                this.websocket.onerror = function(e) {
                    trace("❌ 웹소켓 에러");
                };

                // onclose 이벤트
                this.websocket.onclose = function(e) {
                    trace("⚠️ 웹소켓 연결 종료 - 3초 후 재연결");

                    // 3초 후 자동 재연결
                    setTimeout(function() {
                        objThis.connectWebSocket();
                    }, 3000);
                };

            } catch(err) {
                trace("❌ 웹소켓 생성 실패: " + err.message);
            }
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Top_onload,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.h1_logo.addEventHandler("onclick",this.h1_logo_onclick,this);
            this.btn_logout.addEventHandler("onclick",this.btn_logout_onclick,this);
        };
        this.loadIncludeScript("Form_Top.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
