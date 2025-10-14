(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_NotificationPopup");
            this.set_titletext("알림");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_notification", this);
            obj._setContents("<ColumnInfo><Column id=\"NOTI_ID\" type=\"STRING\" size=\"50\"/><Column id=\"NOTI_MESSAGE\" type=\"STRING\" size=\"500\"/><Column id=\"REG_DATE\" type=\"STRING\" size=\"20\"/><Column id=\"READ_YN\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_notiId", this);
            obj._setContents("<ColumnInfo><Column id=\"notiId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_notification","10","10",null,null,"10","60",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_notification");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"220\"/><Column size=\"100\"/><Column size=\"61\"/></Columns><Rows><Row size=\"60\"/></Rows><Band id=\"body\"><Cell text=\"bind:NOTI_MESSAGE\" displaytype=\"text\" edittype=\"none\" wordWrap=\"char\"/><Cell col=\"1\" text=\"bind:REG_DATE\" displaytype=\"date\" edittype=\"none\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"2\" displaytype=\"buttoncontrol\" edittype=\"button\" calendardateformat=\"yyyy-MM-dd\" text=\"✔\" cursor=\"pointer\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","10",null,null,"35","10","10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",400,600,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Pop_Notification.xfdl", function() {
            this.Form_NotificationPopup_onload = function(obj,e)
            {
                // 알림 목록 조회
                this.loadNotificationList();
            };

            // 알림 목록 조회
            this.loadNotificationList = function()
            {
                var strSvcId    = "selectNotificationList";
                var strSvcUrl   = "svc::notification/listNexa.do?time=" + new Date().getTime();
                var inData      = "";
                var outData     = "ds_notification=ds_notification";
                var strArg      = "";
                var callBackFnc = "fn_callback_list";
                var isAsync     = true;

                this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
            };

            // 알림 목록 조회 콜백
            this.fn_callback_list = function(strSvcId, nErrorCode, strErrorMsg)
            {
                if (nErrorCode < 0) {
                    alert("알림 목록 조회 실패: " + strErrorMsg);
                    return;
                }
        		switch(strSvcId){
        			case "selectNotificationList" :
        			break;
        		}
            };

            // 그리드 셀 클릭 - 읽음 처리
            this.grd_notification_oncellclick = function(obj,e)
            {
        		// col="2" (✔ 버튼) 클릭 시에만 실행
        		if (e.col == 2) {
        			var notiId = this.ds_notification.getColumn(e.row, "NOTI_ID");
        			var readYn = this.ds_notification.getColumn(e.row, "READ_YN");

        			this.ds_notiId.setColumn(0,"notiId",notiId)

        			trace("버튼 클릭 - 알림 ID: " + notiId + ", 읽음 여부: " + readYn);

        			if (readYn == "N") {
        				this.markAsRead(notiId, e.row);
        			} else {
        				trace("이미 읽은 알림입니다");
        			}
        		}
            };

            // 읽음 처리
            this.markAsRead = function(notiId, row)
            {
                var strSvcId    = "updateReadStatus";
                var strSvcUrl   = "svc::notification/markAsReadNexa.do?time=" + new Date().getTime();
                var inData      = "ds_notiId=ds_notiId";
                var outData     = "";
                var strArg      = "";
                var callBackFnc = "fn_callback_read";
                var isAsync     = true;

                this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
            };

            // 읽음 처리 콜백
            this.fn_callback_read = function(strSvcId, nErrorCode, strErrorMsg)
            {
                if (nErrorCode < 0) {
                    alert("읽음 처리 실패");
                    return;
                }
        		switch(strSvcId){
        			case "updateReadStatus" :
        				this.loadNotificationList();
        			break;
        		}
            };

            // 닫기 버튼
            this.btn_close_onclick = function(obj,e)
            {
                this.close("refresh");
            };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_NotificationPopup_onload,this);
            this.grd_notification.addEventHandler("oncellclick",this.grd_notification_oncellclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("Pop_Notification.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
