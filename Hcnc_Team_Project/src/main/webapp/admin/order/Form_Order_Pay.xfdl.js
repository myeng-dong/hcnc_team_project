(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Order_Pay");
            this.set_titletext("결제 내역");
            this.set_background("#F4F7FE");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_pay", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\" default=\"0\"/><Column id=\"PAYMENT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ORDER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PAYMENT_METHOD\" type=\"STRING\" size=\"256\"/><Column id=\"PAYMENT_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PAYMENT_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"PAYMENT_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_selected", this);
            obj._setContents("<ColumnInfo><Column id=\"PAYMENT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ORDER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PAYMENT_METHOD\" type=\"STRING\" size=\"256\"/><Column id=\"PAYMENT_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PAYMENT_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"PAYMENT_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_status", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"10\"/><Column id=\"NAME\" type=\"STRING\" size=\"50\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">WAIT</Col><Col id=\"NAME\">입금대기</Col></Row><Row><Col id=\"CODE\">DONE</Col><Col id=\"NAME\">입금완료</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("search_area","40","40",null,"140","40",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#ffffff");
            obj.set_borderRadius("10px");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","1034","50","128","40",null,null,null,null,null,null,this.search_area.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_borderRadius("5px");
            obj.set_background("#3F00FF");
            obj.set_color("white");
            obj.set_font("normal 11pt/normal \"Noto Sans KR Medium\"");
            obj.set_textAlign("center");
            obj.set_cursor("pointer");
            this.search_area.addChild(obj.name, obj);

            obj = new Grid("grid_list","40","220",null,null,"40","40",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_pay");
            obj.set_autofittype("col");
            obj.set_background("#FFFFFF");
            obj.set_border("0px none");
            obj.set_borderRadius("10px");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"140\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell text=\"chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" font=\"normal 11pt/normal &quot;Noto Sans KR Medium&quot;\" background=\"white\" border=\"0px none,0px none,1px solid #eeeeee\"/><Cell col=\"1\" text=\"주문번호\" font=\"normal 11pt/normal &quot;Noto Sans KR Medium&quot;\" background=\"white\" border=\"0px none,0px none,1px solid #eeeeee\"/><Cell col=\"2\" text=\"결제수단\" font=\"normal 11pt/normal &quot;Noto Sans KR Medium&quot;\" background=\"white\" border=\"0px none,0px none,1px solid #eeeeee\"/><Cell col=\"3\" text=\"결제금액\" font=\"normal 11pt/normal &quot;Noto Sans KR Medium&quot;\" background=\"white\" border=\"0px none,0px none,1px solid #eeeeee\"/><Cell col=\"4\" text=\"결제상태\" font=\"normal 11pt/normal &quot;Noto Sans KR Medium&quot;\" background=\"white\" border=\"0px none,0px none,1px solid #eeeeee\"/><Cell col=\"5\" text=\"결제일\" font=\"normal 11pt/normal &quot;Noto Sans KR Medium&quot;\" background=\"white\" border=\"0px none,0px none,1px solid #eeeeee\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\" textAlign=\"center\" border=\"0px none,0px none,0.5px solid #eeeeee\" font=\"normal 10pt/normal &quot;Noto Sans KR DemiLight&quot;\"/><Cell col=\"1\" text=\"bind:ORDER_ID\" textAlign=\"center\" border=\"0px none,0px none,0.5px solid #eeeeee\" font=\"normal 10pt/normal &quot;Noto Sans KR DemiLight&quot;\"/><Cell col=\"2\" text=\"bind:PAYMENT_METHOD\" textAlign=\"center\" border=\"0px none,0px none,0.5px solid #eeeeee\" font=\"normal 10pt/normal &quot;Noto Sans KR DemiLight&quot;\"/><Cell col=\"3\" text=\"bind:PAYMENT_AMOUNT\" textAlign=\"right\" border=\"0px none,0px none,0.5px solid #eeeeee\" font=\"normal 10pt/normal &quot;Noto Sans KR DemiLight&quot;\"/><Cell col=\"4\" text=\"bind:PAYMENT_STATUS\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"ds_status\" combocodecol=\"NAME\" combodatacol=\"NAME\" textAlign=\"center\" border=\"0px none,0px none,0.5px solid #eeeeee\" font=\"normal 10pt/normal &quot;Noto Sans KR DemiLight&quot;\"/><Cell col=\"5\" text=\"bind:PAYMENT_DT\" textAlign=\"center\" border=\"0px none,0px none,0.5px solid #eeeeee\" font=\"normal 10pt/normal &quot;Noto Sans KR DemiLight&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Order_Pay.xfdl", function() {
        // onload
        this.Form_Order_Pay_onload = function(obj, e) {
            this.grid_list.setCellProperty("head", 0, "text", "0");

            this.fnSearchPay();
        };

        // 조회
        this.fnSearchPay = function() {
            var strSvcID       = "selectPayment";
            var strURL         = "svc::selectPaymentListByAdmin.do";
            var strInDatasets  = "";
            var strOutDatasets = "ds_pay=ds_pay";
            var strArg         = "";
            var strCallback    = "fnCallback";

            this.transaction(strSvcID, strURL, strInDatasets, strOutDatasets, strArg, strCallback);
        };



        // 서버 전송
        this.fnSaveSelectedPay = function() {
            var strSvcID       = "saveSelectedPay";
            var strURL         = "svc::updatePaymentListByAdmin.do";
            var strInDatasets  = "ds_selected=ds_selected";
            var strOutDatasets = "";
            var strArg         = "";
            var strCallback    = "fnCallback";

            this.transaction(strSvcID, strURL, strInDatasets, strOutDatasets, strArg, strCallback);
        };

        // 공통 콜백
        this.fnCallback = function(svcID, errCode, errMsg) {
            if (errCode < 0) {
                this.alert("에러: " + errMsg);
                return;
            }

            switch(svcID) {
                case "selectPayment":
                    trace("조회 완료");
                    break;
                case "saveSelectedPay":
                    this.alert("저장 완료");
                    this.fnSearchPay();
                    break;
            }
        };

        this.search_area_btn_save_onclick = function(obj,e)
        {
        	this.ds_selected.clearData();

            for (var i = 0; i < this.ds_pay.getRowCount(); i++) {
                if (this.ds_pay.getColumn(i, "CHK") == "1") {
                    var nRow = this.ds_selected.addRow();
                    this.ds_selected.copyRow(nRow, this.ds_pay, i);
                }
            }

            if (this.ds_selected.getRowCount() == 0) {
                this.alert("선택된 항목이 없습니다.");
                return;
            }

            this.fnSaveSelectedPay();
        };

        this.grid_list_onheadclick = function(obj, e)
        {
            // 첫 번째 컬럼(체크박스 헤더) 클릭 시
            if (e.cell == 0) {
                var headVal = obj.getCellProperty("head", 0, "text");

                // 현재 상태 확인 (체크 → 해제 / 해제 → 체크)
                var newVal = (headVal == "1" ? "0" : "1");

                // 헤더 갱신
                obj.setCellProperty("head", 0, "text", newVal);

                // 데이터셋 전체 반영
                for (var i = 0; i < this.ds_pay.getRowCount(); i++) {
                    this.ds_pay.setColumn(i, "CHK", newVal);
                }
            }
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Order_Pay_onload,this);
            this.search_area.form.btn_save.addEventHandler("onclick",this.search_area_btn_save_onclick,this);
            this.grid_list.addEventHandler("onheadclick",this.grid_list_onheadclick,this);
        };
        this.loadIncludeScript("Form_Order_Pay.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
