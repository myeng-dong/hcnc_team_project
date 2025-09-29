(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Stat_Main");
            this.set_titletext("New Form");
            this.set_background("#F4F7FE");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_stat", this);
            obj._setContents("<ColumnInfo><Column id=\"CHART_LABEL\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"ORDER_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CHART_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SEARCH_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_payStat", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">전체</Col><Col id=\"NAME\">전체</Col></Row><Row><Col id=\"CODE\">입금대기</Col><Col id=\"NAME\">입금대기</Col></Row><Row><Col id=\"CODE\">입금완료</Col><Col id=\"NAME\">입금완료</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_statname", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">일별</Col><Col id=\"NAME\">일별</Col></Row><Row><Col id=\"CODE\">월별</Col><Col id=\"NAME\">월별</Col></Row><Row><Col id=\"CODE\">결제수단별</Col><Col id=\"NAME\">결제수단별</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("search_area",null,"25","1200",null,"40","560",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#ffffff");
            obj.set_borderRadius("10px");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("txt_cnt","110","18","80","36",null,null,null,null,null,null,this.search_area.form);
            obj.set_taborder("0");
            obj.set_font("normal 10pt/normal \"Noto Sans KR\"");
            this.search_area.addChild(obj.name, obj);

            obj = new Static("txt_th01","29","17","80","36",null,null,null,null,null,null,this.search_area.form);
            obj.set_taborder("1");
            obj.set_text("주문 내역");
            obj.set_font("normal 13pt/normal \"Noto Sans KR Black\"");
            this.search_area.addChild(obj.name, obj);

            obj = new Combo("Combo00","1060","17","120","36",null,null,null,null,null,null,this.search_area.form);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_statname");
            obj.set_codecolumn("NAME");
            obj.set_datacolumn("NAME");
            obj.set_text("일별");
            obj.set_value("일별");
            obj.set_index("0");
            this.search_area.addChild(obj.name, obj);

            obj = new Grid("grid_list",null,"190","590",null,"40","40",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#FFFFFF");
            obj.set_border("0px none");
            obj.set_borderRadius("10px");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_order");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"107\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"33\"/></Rows><Band id=\"head\"><Cell text=\"주문번호\" background=\"white\" font=\"normal 11pt/normal &quot;Noto Sans KR Medium&quot;\" border=\"0px,0px,1px solid #eeeeee\" color=\"black\"/><Cell col=\"1\" text=\"주문자\" background=\"white\" font=\"normal 11pt/normal &quot;Noto Sans KR Medium&quot;\" border=\"0px,0px,1px solid #eeeeee\" color=\"black\"/><Cell col=\"2\" text=\"총금액\" background=\"white\" font=\"normal 11pt/normal &quot;Noto Sans KR Medium&quot;\" border=\"0px,0px,1px solid #eeeeee\" color=\"black\"/><Cell col=\"3\" text=\"할인금액\" background=\"white\" font=\"normal 11pt/normal &quot;Noto Sans KR Medium&quot;\" border=\"0px,0px,1px solid #eeeeee\" color=\"black\"/><Cell col=\"4\" text=\"최종금액\" background=\"white\" font=\"normal 11pt/normal &quot;Noto Sans KR Medium&quot;\" border=\"0px,0px,1px solid #eeeeee\" color=\"black\"/><Cell col=\"5\" text=\"결제상태\" background=\"white\" font=\"normal 11pt/normal &quot;Noto Sans KR Medium&quot;\" border=\"0px,0px,1px solid #eeeeee\" color=\"black\"/><Cell col=\"6\" text=\"배송상태\" background=\"white\" font=\"normal 11pt/normal &quot;Noto Sans KR Medium&quot;\" border=\"0px,0px,1px solid #eeeeee\" color=\"black\"/><Cell col=\"7\" text=\"쿠폰\" background=\"white\" font=\"normal 11pt/normal &quot;Noto Sans KR Medium&quot;\" border=\"0px,0px,1px solid #eeeeee\" color=\"black\"/><Cell col=\"8\" text=\"포인트\" background=\"white\" font=\"normal 11pt/normal &quot;Noto Sans KR Medium&quot;\" border=\"0px,0px,1px solid #eeeeee\" color=\"black\"/><Cell col=\"9\" text=\"주문일\" background=\"white\" font=\"normal 11pt/normal &quot;Noto Sans KR Medium&quot;\" border=\"0px,0px,1px solid #eeeeee\" color=\"black\"/></Band><Band id=\"body\"><Cell text=\"bind:ORDER_NUMBER\" textAlign=\"center\" border=\"0px\" font=\"normal 10pt/normal &quot;Noto Sans KR Light&quot;\"/><Cell col=\"1\" text=\"bind:USER_NAME\" textAlign=\"center\" border=\"0px\" font=\"normal 10pt/normal &quot;Noto Sans KR Light&quot;\"/><Cell col=\"2\" text=\"bind:TOTAL_AMOUNT\" textAlign=\"right\" border=\"0px\" font=\"normal 10pt/normal &quot;Noto Sans KR Light&quot;\"/><Cell col=\"3\" text=\"bind:DISCOUNT_AMOUNT\" textAlign=\"right\" border=\"0px\" font=\"normal 10pt/normal &quot;Noto Sans KR Light&quot;\"/><Cell col=\"4\" text=\"bind:FINAL_AMOUNT\" textAlign=\"right\" border=\"0px\" font=\"normal 10pt/normal &quot;Noto Sans KR Light&quot;\"/><Cell col=\"5\" text=\"bind:PAYMENT_STATUS\" textAlign=\"center\" border=\"0px\" font=\"normal 10pt/normal &quot;Noto Sans KR Light&quot;\"/><Cell col=\"6\" text=\"bind:SHIPMENT_STATUS\" textAlign=\"center\" border=\"0px\" font=\"normal 10pt/normal &quot;Noto Sans KR Light&quot;\"/><Cell col=\"7\" text=\"bind:COUPON_TYPE\" textAlign=\"center\" border=\"0px\" font=\"normal 10pt/normal &quot;Noto Sans KR Light&quot;\"/><Cell col=\"8\" text=\"bind:POINT\" textAlign=\"center\" border=\"0px\" font=\"normal 10pt/normal &quot;Noto Sans KR Light&quot;\"/><Cell col=\"9\" text=\"bind:ORDER_DT\" textAlign=\"center\" border=\"0px\" font=\"normal 10pt/normal &quot;Noto Sans KR Light&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","40","190","564",null,null,"40",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_background("white");
            obj.set_borderRadius("10px");
            this.addChild(obj.name, obj);

            obj = new BasicChart("BasicChart00","11","80","509",null,null,"27",null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_background("white");
            obj.set_borderRadius("10px");
            obj.set_binddataset("ds_stat");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"text": "Bar Chart",
            		"textfont": "20pt/normal '맑은 고딕'",
            		"padding": "0px 0px 5px"
            	},
            	"legend": {
            		"id": "legend",
            		"padding": "3px 10px 3px 10px",
            		"itemtextfont": "9pt '맑은 고딕'",
            		"itemtextcolor": "#4c4c4c"
            	},
            	"hrangebar": {
            		"id": "hrangebar",
            		"trackbarpadding": "1px",
            		"background": "#eaeaea",
            		"linestyle": "1px solid #d5d5d5",
            		"trackbarlinestyle": "0px none",
            		"trackbarfillstyle": "#c9c9c9",
            		"size": "12",
            		"visible": false
            	},
            	"vrangebar": {
            		"id": "vrangebar",
            		"trackbarpadding": "1px",
            		"background": "#eaeaea",
            		"linestyle": "1px solid #d5d5d5",
            		"trackbarlinestyle": "0px none",
            		"trackbarfillstyle": "#c9c9c9",
            		"size": "12",
            		"visible": false
            	},
            	"tooltip": {
            		"id": "tooltip",
            		"background": "#4b4b4b",
            		"linestyle": "0px none",
            		"textcolor": "white",
            		"textfont": "10pt/normal '맑은 고딕'",
            		"padding": "5px",
            		"visible": true
            	},
            	"board": {
            		"id": "board",
            		"visible": true
            	},
            	"categoryaxis": {
            		"id": "categoryaxis",
            		"titletext": "categoryaxis",
            		"titletextcolor": "#4c4c4c",
            		"titletextfont": "bold 12pt '맑은 고딕'",
            		"labeltextcolor": "#6f6f6f",
            		"labeltextfont": "11pt '맑은 고딕'",
            		"axislinestyle": "1px solid #525252",
            		"ticklinestyle": "1px solid #525252",
            		"boardlinestyle": "1px solid #d0d0d0"
            	},
            	"valueaxes": [
            		{
            			"id": "valueaxis0",
            			"titletext": "총액 ",
            			"boardlinevisible": true,
            			"labeltextcolor": "#00a98f",
            			"labeltextfont": "10pt/normal '맑은 고딕'",
            			"titletextcolor": "#00a98f",
            			"titletextfont": "normal 800 11/normal \"Noto Sans KR\"",
            			"ticklinestyle": "2px solid #00a98f",
            			"axislinestyle": "2px solid #00a98f",
            			"visible": "true",
            			"titletextalign": "low",
            			"ticks": "4",
            			"autotickscale": "20",
            			"ticklineopacity": "1",
            			"boardlineopacity": "0"
            		},
            		{
            			"id": "valueaxis1",
            			"titletext": "판매수량",
            			"boardlinevisible": true,
            			"labeltextcolor": "#6f6f6f",
            			"labeltextfont": "normal 8/normal \"Noto Sans KR\"",
            			"titletextcolor": "#4c4c4c",
            			"titletextfont": "normal 800 11/normal \"Noto Sans KR\"",
            			"ticklinestyle": "1px solid #525252",
            			"boardlinestyle": "1px solid #d0d0d0",
            			"axislinestyle": "1px solid #525252",
            			"opposite": "true",
            			"autotickscale": "50",
            			"ticks": "4"
            		}
            	],
            	"seriesset": [
            		{
            			"id": "series0",
            			"titletext": "총액",
            			"barvisible": true,
            			"barsize": "50",
            			"itemtextvisible": true,
            			"itemtextfont": "normal 800 12pt/normal \"Noto Sans KR\"",
            			"valuecolumn": "bind:TOTAL_AMOUNT",
            			"barlinestyle": "1px solid #1abd9c",
            			"barfillstyle": "#1abd9c",
            			"itemtextcolor": "white",
            			"selectcolumn": "bind:TOTAL_AMOUNT"
            		},
            		{
            			"id": "series1",
            			"titletext": "판매수량",
            			"valuecolumn": "bind:ORDER_COUNT",
            			"valueaxis": "valueaxis1",
            			"barlinestyle": "1px solid #1a85be",
            			"barfillstyle": "#1a85be",
            			"barvisible": "false",
            			"lineareavisible": "false",
            			"linevisible": "true",
            			"pointvisible": "true",
            			"itemtextvisible": "true",
            			"itemtextcolor": "black",
            			"itemtextfont": "10pt \"Arial\"",
            			"pointsize": "5"
            		}
            	]
            });
            obj.set_categorycolumn("bind:CHART_LABEL");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","grid_list","binddataset","ds_user","");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_stat_main.xfdl", function() {
        // 온로드시
        this.Form_Stat_Main_onload = function(obj,e)
        {
        	this.fn_setChartRange();
        };

        // 주문 내역 조회
        this.fnSelectStatByAdmin = function() {
            var strSvcID       = "selectStatByAdmin";
            var strURL         = "svc::selectStatByAdmin.do?time=" + new Date().getTime();
            var strInDatasets  = "ds_search=ds_search";
            var strOutDatasets = "ds_stat=ds_stat";
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
                case "selectStatByAdmin" :
                    break;
            }
        };

        this.search_area_Combo00_onitemchanged = function(obj,e)
        {
        	this.ds_search.setColumn(0, "SEARCH_TYPE", e.postvalue);
            this.fnSelectStatByAdmin();  // 조회 트랜젝션
        };

        this.fn_setChartRange = function()
        {
            var maxValue = 0;
            var minValue = 999999999;

            // 데이터에서 최대/최소값 찾기
            for(var i = 0; i < this.ds_stat.getRowCount(); i++) {
                var value = parseInt(this.ds_stat.getColumn(i, "TOTAL_AMOUNT"));
                if(value > maxValue) maxValue = value;
                if(value < minValue) minValue = value;
            }

            // 여유분을 둬서 범위 설정
            var range = maxValue - minValue;
            var newMin = Math.max(0, minValue - (range * 0.1));
            var newMax = maxValue + (range * 0.1);

            // 차트 범위 동적 설정
            var chartContents = this.BasicChart00.contents;
            var contentsObj = JSON.parse(chartContents);
            contentsObj.valueaxes[0].min = newMin;
            contentsObj.valueaxes[0].max = newMax;

            this.BasicChart00.set_contents(JSON.stringify(contentsObj));
            this.BasicChart00.redraw();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Stat_Main_onload,this);
            this.search_area.form.txt_th01.addEventHandler("onclick",this.txt_th_onclick,this);
            this.search_area.form.Combo00.addEventHandler("onitemchanged",this.search_area_Combo00_onitemchanged,this);
        };
        this.loadIncludeScript("Form_stat_main.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
