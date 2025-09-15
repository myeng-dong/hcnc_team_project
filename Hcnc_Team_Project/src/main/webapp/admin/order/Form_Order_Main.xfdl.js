(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Order_Main");
            this.set_titletext("New Form");
            this.set_background("#F4F7FE");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_order", this);
            obj._setContents("<ColumnInfo><Column id=\"ORDER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ORDER_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DISCOUNT_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"FINAL_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PAYMENT_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"SHIPMENT_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"COUPON_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROMOTION_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"POINT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"START_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"END_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SHIPMENT_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"PAYMENT_STATUS\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_payStat", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">전체</Col><Col id=\"NAME\">전체</Col></Row><Row><Col id=\"CODE\">입금대기</Col><Col id=\"NAME\">입금대기</Col></Row><Row><Col id=\"CODE\">입금완료</Col><Col id=\"NAME\">입금완료</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_orderStat", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">전체</Col><Col id=\"NAME\">전체</Col></Row><Row><Col id=\"CODE\">발송대기</Col><Col id=\"NAME\">발송대기</Col></Row><Row><Col id=\"CODE\">발송완료</Col><Col id=\"NAME\">발송완료</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("search_area","40","40",null,"210","40",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#ffffff");
            obj.set_borderRadius("10px");
            obj.set_text("");
            this.addChild(obj.name, obj);


            obj = new Button("btn_select","510","161","100","30",null,null,null,null,null,null,this.search_area.form);


            obj = new Grid("grid_list","40","130",null,"390","40",null,null,null,null,null,this);

            obj = new Button("btn_select","964","50",null,"40","80",null,null,null,null,null,this.search_area.form);

            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_borderRadius("5px");
            obj.set_background("#135dae");
            obj.set_color("white");
            obj.set_font("normal 11pt/normal \"Noto Sans KR Medium\"");
            obj.set_textAlign("center");
            obj.set_cursor("pointer");
            this.search_area.addChild(obj.name, obj);


            obj = new Static("txt_th","34","59","80","36",null,null,null,null,null,null,this.search_area.form);
            obj.set_taborder("1");
            obj.set_text("주문자");
            obj.set_font("normal 10pt/normal \"Noto Sans KR\"");
            obj.set_letterSpacing("8px");
            this.search_area.addChild(obj.name, obj);

            obj = new Static("txt_th00","628","103","80","36",null,null,null,null,null,null,this.search_area.form);
            obj.set_taborder("2");
            obj.set_text("배송 상태");
            obj.set_font("normal 10pt/normal \"Noto Sans KR\"");
            this.search_area.addChild(obj.name, obj);

            obj = new Static("txt_th02","628","60","80","36",null,null,null,null,null,null,this.search_area.form);
            obj.set_taborder("3");
            obj.set_text("결제 상태");
            obj.set_font("normal 10pt/normal \"Noto Sans KR\"");
            this.search_area.addChild(obj.name, obj);

            obj = new Static("txt_th00_01","34","102","80","36",null,null,null,null,null,null,this.search_area.form);
            obj.set_taborder("4");
            obj.set_text("주문 날자");
            obj.set_font("normal 10pt/normal \"Noto Sans KR\"");
            this.search_area.addChild(obj.name, obj);

            obj = new Static("txt_th00_00_00","246","102","80","36",null,null,null,null,null,null,this.search_area.form);
            obj.set_taborder("5");
            obj.set_text("-");
            obj.set_font("normal 11pt/normal \"Noto Sans KR\"");
            this.search_area.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00_00","269","106","120","30",null,null,null,null,null,null,this.search_area.form);
            obj.set_taborder("6");
            this.search_area.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_01","101","106","120","30",null,null,null,null,null,null,this.search_area.form);
            obj.set_taborder("7");
            this.search_area.addChild(obj.name, obj);

            obj = new Radio("rad_pay","723","56","357","45",null,null,null,null,null,null,this.search_area.form);
            obj.set_taborder("8");
            obj.set_innerdataset("ds_payStat");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_direction("vertical");
            obj.set_font("normal 9pt/normal \"Noto Sans KR\"");
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.search_area.addChild(obj.name, obj);

            obj = new Edit("Edit00","101","65","289","30",null,null,null,null,null,null,this.search_area.form);
            obj.set_taborder("9");
            this.search_area.addChild(obj.name, obj);

            obj = new Button("btn_reset","629","161","100","30",null,null,null,null,null,null,this.search_area.form);
            obj.set_taborder("10");
            obj.set_text("초기화");
            obj.set_borderRadius("5px");
            obj.set_background("#8e8e8e");
            obj.set_color("white");
            obj.set_font("normal 11pt/normal \"Noto Sans KR Medium\"");
            obj.set_textAlign("center");
            obj.set_cursor("pointer");
            this.search_area.addChild(obj.name, obj);

            obj = new Radio("rad_ship","722","98","357","45",null,null,null,null,null,null,this.search_area.form);
            obj.set_taborder("11");
            obj.set_innerdataset("ds_orderStat");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_direction("vertical");
            obj.set_font("normal 9pt/normal \"Noto Sans KR\"");
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.search_area.addChild(obj.name, obj);

            obj = new Grid("grid_list","40","280",null,null,"40","40",null,null,null,null,this);

            obj = new Grid("grid_list","40","220",null,null,"40","40",null,null,null,null,this);

            obj.set_taborder("0");
            obj.set_background("#FFFFFF");
            obj.set_border("0px none");
            obj.set_borderRadius("10px");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_order");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"107\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"33\"/></Rows><Band id=\"head\"><Cell text=\"주문번호\" background=\"white\" font=\"normal 11pt/normal &quot;Noto Sans KR Medium&quot;\" border=\"0px,0px,1px solid #eeeeee\" color=\"black\"/><Cell col=\"1\" text=\"ID\" background=\"white\" font=\"normal 11pt/normal &quot;Noto Sans KR Medium&quot;\" border=\"0px,0px,1px solid #eeeeee\" color=\"black\"/><Cell col=\"2\" text=\"총금액\" background=\"white\" font=\"normal 11pt/normal &quot;Noto Sans KR Medium&quot;\" border=\"0px,0px,1px solid #eeeeee\" color=\"black\"/><Cell col=\"3\" text=\"할인금액\" background=\"white\" font=\"normal 11pt/normal &quot;Noto Sans KR Medium&quot;\" border=\"0px,0px,1px solid #eeeeee\" color=\"black\"/><Cell col=\"4\" text=\"최종금액\" background=\"white\" font=\"normal 11pt/normal &quot;Noto Sans KR Medium&quot;\" border=\"0px,0px,1px solid #eeeeee\" color=\"black\"/><Cell col=\"5\" text=\"결제상태\" background=\"white\" font=\"normal 11pt/normal &quot;Noto Sans KR Medium&quot;\" border=\"0px,0px,1px solid #eeeeee\" color=\"black\"/><Cell col=\"6\" text=\"배송상태\" background=\"white\" font=\"normal 11pt/normal &quot;Noto Sans KR Medium&quot;\" border=\"0px,0px,1px solid #eeeeee\" color=\"black\"/><Cell col=\"7\" text=\"쿠폰\" background=\"white\" font=\"normal 11pt/normal &quot;Noto Sans KR Medium&quot;\" border=\"0px,0px,1px solid #eeeeee\" color=\"black\"/><Cell col=\"8\" text=\"프로모션\" background=\"white\" font=\"normal 11pt/normal &quot;Noto Sans KR Medium&quot;\" border=\"0px,0px,1px solid #eeeeee\" color=\"black\"/><Cell col=\"9\" text=\"포인트\" background=\"white\" font=\"normal 11pt/normal &quot;Noto Sans KR Medium&quot;\" border=\"0px,0px,1px solid #eeeeee\" color=\"black\"/></Band><Band id=\"body\"><Cell text=\"bind:ORDER_NUMBER\" textAlign=\"center\" border=\"0px\" font=\"normal 10pt/normal &quot;Noto Sans KR Light&quot;\"/><Cell col=\"1\" text=\"bind:USER_ID\" textAlign=\"center\" border=\"0px\" font=\"normal 10pt/normal &quot;Noto Sans KR Light&quot;\"/><Cell col=\"2\" text=\"bind:TOTAL_AMOUNT\" textAlign=\"right\" border=\"0px\" font=\"normal 10pt/normal &quot;Noto Sans KR Light&quot;\"/><Cell col=\"3\" text=\"bind:DISCOUNT_AMOUNT\" textAlign=\"right\" border=\"0px\" font=\"normal 10pt/normal &quot;Noto Sans KR Light&quot;\"/><Cell col=\"4\" text=\"bind:FINAL_AMOUNT\" textAlign=\"right\" border=\"0px\" font=\"normal 10pt/normal &quot;Noto Sans KR Light&quot;\"/><Cell col=\"5\" text=\"bind:PAYMENT_STATUS\" textAlign=\"center\" border=\"0px\" font=\"normal 10pt/normal &quot;Noto Sans KR Light&quot;\"/><Cell col=\"6\" text=\"bind:SHIPMENT_STATUS\" textAlign=\"center\" border=\"0px\" font=\"normal 10pt/normal &quot;Noto Sans KR Light&quot;\"/><Cell col=\"7\" text=\"bind:COUPON_TYPE\" textAlign=\"center\" border=\"0px\" font=\"normal 10pt/normal &quot;Noto Sans KR Light&quot;\"/><Cell col=\"8\" text=\"bind:PROMOTION_NAME\" textAlign=\"center\" border=\"0px\" font=\"normal 10pt/normal &quot;Noto Sans KR Light&quot;\"/><Cell col=\"9\" text=\"bind:POINT\" textAlign=\"center\" border=\"0px\" font=\"normal 10pt/normal &quot;Noto Sans KR Light&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("txt_th","69","57","80","36",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("검색 조건");
            obj.set_font("normal 13pt/normal \"Noto Sans KR Black\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","grid_list","binddataset","ds_user","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","search_area.form.Edit00","value","ds_search","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Order_Main.xfdl", function() {
        // 온로드시
        this.Form_Order_Main_onload = function(obj, e)
        {
            // 초기 조회
            this.fnSearchOrders();

        };

        // 주문 내역 조회
        this.fnSearchOrders = function() {
            var strSvcID       = "selectOrders";
            var strURL         = "svc::selectOrderDetailListByAdmin.do";  // Spring Controller 매핑
            var strInDatasets  = "ds_search=ds_search";                   // 검색조건 dataset 전달
            var strOutDatasets = "ds_order=ds_order";
            var strArg         = "";
            var strCallback    = "fnCallback";

            this.transaction(strSvcID, strURL, strInDatasets, strOutDatasets, strArg, strCallback);
        };

        // 공통 콜백
        this.fnCallback = function(svc, err, errMsg) {
            if (err < 0) {
                this.alert("에러 발생: " + errMsg);
                return;
            }
            switch(svc){
                case "selectOrders"  :
                    trace("주문 목록 조회 완료, 건수=" + this.ds_order.rowcount);
                    break;
            }
        };

        // 조회 버튼 (조건 적용 후 조회 실행)
        this.search_area_btn_select_onclick = function(obj, e)
        {
            this.fnSearchOrders();
        };

        // 초기화 버튼
        this.search_area_btn_reset_onclick = function(obj, e)
        {

        	this.reload();   // 폼 전체 리로드
        };

        // 배송 상태 라디오 onitemchanged
        this.search_area_rad_ship_onitemchanged = function(obj, e)
        {
            // ds_search에 반영
            this.ds_search.setColumn(0, "SHIPMENT_STATUS", e.postvalue);
            this.fnSearchOrders();
        };

        // 결제 상태 라디오 onitemchanged (추가)
        this.search_area_rad_pay_onitemchanged = function(obj, e)
        {
            this.ds_search.setColumn(0, "PAYMENT_STATUS", e.postvalue);
            this.fnSearchOrders();
        };

        this.search_area_Edit00_onkeyup = function(obj, e)
        {
            if (e.keycode == 13) {  // 13 = Enter 키
                // 조회 버튼 클릭 이벤트와 동일 동작 실행
                this.fnSearchOrders();
            }
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Order_Main_onload,this);
            this.search_area.form.btn_select.addEventHandler("onclick",this.search_area_btn_select_onclick,this);
            this.search_area.form.txt_th.addEventHandler("onclick",this.search_area_txt_th_onclick,this);
            this.search_area.form.txt_th00.addEventHandler("onclick",this.search_area_txt_th_onclick,this);
            this.search_area.form.txt_th02.addEventHandler("onclick",this.search_area_txt_th_onclick,this);
            this.search_area.form.txt_th00_01.addEventHandler("onclick",this.search_area_txt_th_onclick,this);
            this.search_area.form.txt_th00_00_00.addEventHandler("onclick",this.search_area_txt_th_onclick,this);
            this.search_area.form.rad_pay.addEventHandler("onitemchanged",this.search_area_rad_pay_onitemchanged,this);
            this.search_area.form.Edit00.addEventHandler("onkeyup",this.search_area_Edit00_onkeyup,this);
            this.search_area.form.btn_reset.addEventHandler("onclick",this.search_area_btn_reset_onclick,this);
            this.search_area.form.rad_ship.addEventHandler("onitemchanged",this.search_area_rad_ship_onitemchanged,this);
            this.txt_th.addEventHandler("onclick",this.txt_th_onclick,this);
        };
        this.loadIncludeScript("Form_Order_Main.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
