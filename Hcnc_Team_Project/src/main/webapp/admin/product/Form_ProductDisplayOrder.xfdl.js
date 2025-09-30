(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_ProductDisplayOrder");
            this.set_titletext("상품관리");
            this.set_background("#f4f7fe");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_out_proList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SORT_NUMBER\" type=\"INT\" size=\"256\"/><Column id=\"PRODUCT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MAIN_CATE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_CATE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IS_VISIBLE\" type=\"STRING\" size=\"256\"/><Column id=\"OUT_OF_STOCK\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_QUANTITY\" type=\"INT\" size=\"256\"/><Column id=\"OPTION_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_DT\" type=\"DATETIME\" size=\"256\"/><Column id=\"UPDATE_DT\" type=\"DATETIME\" size=\"256\"/><Column id=\"PRODUCT_ID\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_in", this);
            obj._setContents("<ColumnInfo><Column id=\"SORT_NUMBER\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SORT_NUMBER\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grid_list","24","40",null,"700","26",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#FFFFFF");
            obj.set_border("0px none");
            obj.set_borderRadius("10px");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_out_proList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"92\"/><Column size=\"49\"/><Column size=\"61\"/><Column size=\"177\"/><Column size=\"92\"/><Column size=\"92\"/><Column size=\"334\"/><Column size=\"132\"/><Column size=\"49\"/><Column size=\"76\"/><Column size=\"60\"/></Columns><Rows><Row size=\"66\" band=\"head\"/><Row size=\"48\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell colspan=\"11\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell row=\"1\" rowspan=\"2\" text=\"상품 진열순서&#13;&#10;NUMBER\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell row=\"1\" col=\"1\" rowspan=\"2\" text=\"상품ID\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell row=\"1\" col=\"2\" rowspan=\"2\" text=\"상품코드\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell row=\"1\" col=\"3\" rowspan=\"2\" text=\"상품명\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell row=\"1\" col=\"4\" colspan=\"2\" text=\"상품분류\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell row=\"1\" col=\"6\" rowspan=\"2\" text=\"옵션종류\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell row=\"1\" col=\"7\" rowspan=\"2\" text=\"등록일\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell row=\"1\" col=\"8\" rowspan=\"2\" text=\"진열&#13;&#10;여부\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell row=\"1\" col=\"9\" rowspan=\"2\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\" text=\"품절&#13;&#10;여부\"/><Cell row=\"1\" col=\"10\" rowspan=\"2\" text=\"상품&#13;&#10;총재고\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell row=\"2\" col=\"4\" text=\"대분류\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell row=\"2\" col=\"5\" text=\"중분류\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/></Band><Band id=\"body\"><Cell text=\"bind:SORT_NUMBER\" background=\"#ffffff\" font=\"12px/normal &quot;Gulim&quot;\" textAlign=\"center\" edittype=\"none\"/><Cell col=\"1\" background=\"#ffffff\" text=\"bind:PRODUCT_ID\" font=\"12px/normal &quot;Gulim&quot;\" textAlign=\"center\" edittype=\"none\"/><Cell col=\"2\" background=\"#ffffff\" text=\"bind:PRODUCT_CODE\" font=\"12px/normal &quot;Gulim&quot;\" textAlign=\"center\" edittype=\"none\"/><Cell col=\"3\" background=\"#ffffff\" text=\"bind:PRODUCT_NAME\" font=\"12px/normal &quot;Gulim&quot;\" textAlign=\"center\" edittype=\"none\"/><Cell col=\"4\" edittype=\"none\" background=\"#ffffff\" text=\"bind:MAIN_CATE_NM\" font=\"12px/normal &quot;Gulim&quot;\" textAlign=\"center\"/><Cell col=\"5\" edittype=\"none\" background=\"#ffffff\" text=\"bind:SUB_CATE_NM\" font=\"12px/normal &quot;Gulim&quot;\" textAlign=\"center\"/><Cell col=\"6\" edittype=\"none\" background=\"#ffffff\" text=\"bind:OPTION_LIST\" font=\"12px/normal &quot;Gulim&quot;\" textAlign=\"center\"/><Cell col=\"7\" edittype=\"none\" background=\"#ffffff\" text=\"bind:INPUT_DT\" font=\"12px/normal &quot;Gulim&quot;\" textAlign=\"center\" displaytype=\"date\"/><Cell col=\"8\" edittype=\"none\" background=\"#ffffff\" text=\"bind:IS_VISIBLE\" font=\"12px/normal &quot;Gulim&quot;\" textAlign=\"center\"/><Cell col=\"9\" edittype=\"none\" background=\"#ffffff\" text=\"bind:OUT_OF_STOCK\" font=\"12px/normal &quot;Gulim&quot;\" textAlign=\"center\"/><Cell col=\"10\" edittype=\"mask\" background=\"#ffffff\" text=\"bind:TOTAL_QUANTITY\" font=\"12px/normal &quot;Gulim&quot;\" textAlign=\"center\" displaytype=\"mask\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_listTitle","50","44","80","61",null,null,null,null,null,null,this);
            obj.set_text("목록");
            obj.set_font("bold 13pt/normal \"Arial\"");
            obj.set_taborder("0");
            obj.set_color("#232323");
            this.addChild(obj.name, obj);

            obj = new Static("sta_listTitle00",null,"40","506","61","150",null,null,null,null,null,this);
            obj.set_text("마우스로 끌어서 진열순서를 정하고 변경버튼을 누르세요.");
            obj.set_font("12pt/normal \"Arial\"");
            obj.set_taborder("2");
            obj.set_color("#383838");
            obj.set_border("0px none,0px none,5px solid #000000,0px solid transparent");
            obj.set_textAlign("center");
            obj.set_verticalAlign("bottom");
            this.addChild(obj.name, obj);

            obj = new Button("btn_reg",null,"59","100","42","60",null,null,null,null,null,this);
            obj.set_text("진열순서 변경");
            obj.set_background("#000000");
            obj.set_color("#ffffff");
            obj.set_border("1px solid #000000");
            obj.set_borderRadius("6px");
            obj.set_font("bold 12px \'Arial\'");
            obj.set_cursor("pointer");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("Form_ProductDisplayOrder.xfdl","common::common.xjs");
        this.registerScript("Form_ProductDisplayOrder.xfdl", function() {
        this.executeIncludeScript("common::common.xjs"); /*include "common::common.xjs"*/;

        this.Form_ProductDisplayOrder_onload = function(obj,e)
        {
        	this.fn_search();
        };










        //상품 목록 조회 (조건포함)
        this.fn_search = function() {

            this.transaction(
                "productDisplayOrderListByAdmin",            // 서비스 ID (콜백 분기용)
                "svc::productDisplayOrderListByAdmin.do?time=" + new Date().getTime(),    // 컨트롤러 URL
                "ds_in=ds_in",         // inDatasets: 조건 묶음
                "ds_out_proList=ds_out_proList",       // outDatasets: 결과 그리드 바인딩
                "",                                    // args는 사용하지 않음 (전부 Dataset으로 처리)
                "fn_callback",                         // 콜백 함수명
                true                                   // 비동기
            );
        };












        //진열순서 변경 버튼
        this.btn_reg_onclick = function(obj,e)
        {

        };


        //콜백
        this.fn_callback = function(strSvcID, nErrorCode, strErrorMag){
            if (nErrorCode < 0) {
                this.alert("오류: "+strErrorMag);
        		return;
            }

            switch(strSvcID){


        		case "ProductDisplayOrderListByAdmin":
        			//this.fn_search();
        			break;


            }
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_ProductDisplayOrder_onload,this);
            this.grid_list.addEventHandler("onkeydown",this.grid_list_onkeydown,this);
            this.grid_list.addEventHandler("onkillfocus",this.grid_list_onkillfocus,this);
            this.grid_list.addEventHandler("oncellclick",this.grid_list_oncellclick,this);
            this.sta_listTitle.addEventHandler("onclick",this.sta_listTitle_onclick,this);
            this.sta_listTitle00.addEventHandler("onclick",this.sta_listTitle_onclick,this);
            this.btn_reg.addEventHandler("onclick",this.btn_reg_onclick,this);
            this.ds_out_proList.addEventHandler("oncolumnchanged",this.ds_out_proList_oncolumnchanged,this);
        };
        this.loadIncludeScript("Form_ProductDisplayOrder.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
