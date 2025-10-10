(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_PromoList");
            this.set_titletext("New Form");
            this.set_background("#F4F7FE");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,760);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_promo_list", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"PROMOTION_ID\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"PROMOTION_NAME\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"PROMOTION_TYPE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"DESCRIPTION\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"START_DT\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"END_DT\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"IS_ACTIVE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"INPUT_DT\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"UPDATE_DT\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"INPUT_ID\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"AUTO_ISSUED\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"P_COUPON_CODE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"ISSUED_DT\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"EXPIRY_DT\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"IS_USED\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"DISCOUNT_ID\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"DISCOUNT_TYPE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"DISCOUNT_VALUE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"MIN_ORDER_PRICE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"TARGET_ID\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"TARGET_TYPE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"TARGET_VALUE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"TARGET_AMOUNT\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"TARGET_VALUE_DISPLAY\" type=\"STRING\" size=\"30\"/><Column id=\"AUTO_ISSUED_DISPLAY\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_promo_target", this);
            obj._setContents("<ColumnInfo><Column id=\"datacolumn\" type=\"STRING\" size=\"256\"/><Column id=\"codecolumn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체회원</Col><Col id=\"codecolumn\">all</Col></Row><Row><Col id=\"datacolumn\">신규회원</Col><Col id=\"codecolumn\">new</Col></Row><Row><Col id=\"datacolumn\">등급별</Col><Col id=\"codecolumn\">grade</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grade", this);
            obj._setContents("<ColumnInfo><Column id=\"GRADE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"PROMOTION_NAME\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"TARGET_VALUE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"IS_ACTIVE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"START_DT\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"END_DT\" type=\"STRING\" size=\"30\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_promo_active", this);
            obj._setContents("<ColumnInfo><Column id=\"datacolumn\" type=\"STRING\" size=\"256\"/><Column id=\"codecolumn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체</Col><Col id=\"codecolumn\">all</Col></Row><Row><Col id=\"datacolumn\">활성화</Col><Col id=\"codecolumn\">Y</Col></Row><Row><Col id=\"datacolumn\">비활성화</Col><Col id=\"codecolumn\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grid_list","40","290",null,null,"40","90",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#FFFFFF");
            obj.set_border("0px none");
            obj.set_borderRadius("10px");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_promo_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"238\"/><Column size=\"109\"/><Column size=\"117\"/><Column size=\"144\"/><Column size=\"138\"/><Column size=\"91\"/><Column size=\"92\"/><Column size=\"84\"/><Column size=\"84\"/><Column size=\"55\"/></Columns><Rows><Row size=\"48\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"NO\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"1\" text=\"프로모션 이름\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"2\" text=\"타겟\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"3\" text=\"타입\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"4\" text=\"시작일\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"5\" text=\"종료일\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"6\" text=\"지급방식\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"7\" text=\"활성화여부\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"8\" text=\"작성일\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"9\" text=\"최근수정일\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"10\" text=\"설정\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:PROMOTION_NAME\"/><Cell col=\"2\" text=\"bind:TARGET_VALUE_DISPLAY\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:PROMOTION_TYPE\" textAlign=\"center\"/><Cell col=\"4\" edittype=\"normal\" text=\"bind:START_DT\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:END_DT\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:AUTO_ISSUED_DISPLAY\" textAlign=\"center\"/><Cell col=\"7\" edittype=\"normal\" text=\"bind:IS_ACTIVE\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:INPUT_DT\" textAlign=\"center\"/><Cell col=\"9\" edittype=\"normal\" text=\"bind:UPDATE_DT\" textAlign=\"center\"/><Cell col=\"10\" edittype=\"button\" displaytype=\"buttoncontrol\" text=\"관리\" cssclass=\"btn_manage\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("search_area","40","30",null,"240","40",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#ffffff");
            obj.set_borderRadius("10px");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("search_tit","20","12","60","41",null,null,null,null,null,null,this.search_area.form);
            obj.set_taborder("0");
            obj.set_text("프로모션명");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR Bold\"");
            obj.set_color("#2b3674");
            this.search_area.addChild(obj.name, obj);

            obj = new Static("Static00","90","24","2","20",null,null,null,null,null,null,this.search_area.form);
            obj.set_taborder("1");
            obj.set_background("#cccccc");
            obj.set_text("");
            this.search_area.addChild(obj.name, obj);

            obj = new Static("Static00_00","90","65","2","20",null,null,null,null,null,null,this.search_area.form);
            obj.set_taborder("2");
            obj.set_background("#cccccc");
            obj.set_text("");
            this.search_area.addChild(obj.name, obj);

            obj = new Static("search_tit00","20","55","60","41",null,null,null,null,null,null,this.search_area.form);
            obj.set_taborder("3");
            obj.set_text("타겟");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR Bold\"");
            obj.set_color("#2b3674");
            this.search_area.addChild(obj.name, obj);

            obj = new Edit("edit_search","110","14","260","36",null,null,null,null,null,null,this.search_area.form);
            obj.set_taborder("4");
            this.search_area.addChild(obj.name, obj);

            obj = new Static("search_tit00_00","20","98","60","35",null,null,null,null,null,null,this.search_area.form);
            obj.set_taborder("5");
            obj.set_text("활성화상태");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR Bold\"");
            obj.set_color("#2b3674");
            this.search_area.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","90","106","2","20",null,null,null,null,null,null,this.search_area.form);
            obj.set_taborder("6");
            obj.set_background("#cccccc");
            obj.set_text("");
            this.search_area.addChild(obj.name, obj);

            obj = new Radio("radio_promo_type","110","55","480","40",null,null,null,null,null,null,this.search_area.form);
            obj.set_taborder("7");
            obj.set_innerdataset("ds_promo_target");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_font("normal 12pt/normal \"Noto Sans KR Medium\"");
            obj.set_text("전체회원");
            obj.set_value("all");
            obj.set_index("0");
            this.search_area.addChild(obj.name, obj);

            obj = new Combo("grade_combo","506","57","134","37",null,null,null,null,null,null,this.search_area.form);
            obj.set_readonly("false");
            obj.set_taborder("8");
            obj.set_innerdataset("ds_grade");
            obj.set_codecolumn("GRADE_CODE");
            obj.set_datacolumn("GRADE_NAME");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.search_area.addChild(obj.name, obj);

            obj = new Static("search_tit00_00_00","20","135","60","41",null,null,null,null,null,null,this.search_area.form);
            obj.set_taborder("9");
            obj.set_text("이벤트기간");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR Bold\"");
            obj.set_color("#2b3674");
            this.search_area.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","90","147","2","20",null,null,null,null,null,null,this.search_area.form);
            obj.set_taborder("10");
            obj.set_background("#cccccc");
            obj.set_text("");
            this.search_area.addChild(obj.name, obj);

            obj = new Radio("radio_view_type","110","95","479","40",null,null,null,null,null,null,this.search_area.form);
            obj.set_taborder("11");
            obj.set_innerdataset("ds_promo_active");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_font("normal 12pt/normal \"Noto Sans KR Medium\"");
            obj.set_text("전체");
            obj.set_value("all");
            obj.set_index("0");
            this.search_area.addChild(obj.name, obj);

            obj = new Calendar("cal_end_day","375","140","230","36",null,null,null,null,null,null,this.search_area.form);
            obj.set_taborder("12");
            obj.set_borderRadius("5px");
            obj.set_font("normal 10pt/normal \"Noto Sans KR Medium\"");
            this.search_area.addChild(obj.name, obj);

            obj = new Static("txt_update_td","343","140","27","36",null,null,null,null,null,null,this.search_area.form);
            obj.set_taborder("13");
            obj.set_text("~");
            obj.set_font("normal 14pt/normal \"Noto Sans KR\"");
            this.search_area.addChild(obj.name, obj);

            obj = new Calendar("cal_start_day","110","140","230","36",null,null,null,null,null,null,this.search_area.form);
            obj.set_taborder("14");
            obj.set_borderRadius("5px");
            obj.set_font("normal 10pt/normal \"Noto Sans KR Medium\"");
            this.search_area.addChild(obj.name, obj);

            obj = new Button("btn_select","480","190","100","30",null,null,null,null,null,null,this.search_area.form);
            obj.set_taborder("15");
            obj.set_text("조회");
            obj.set_borderRadius("5px");
            obj.set_background("#135dae");
            obj.set_color("white");
            obj.set_font("normal 11pt/normal \"Noto Sans KR Medium\"");
            obj.set_textAlign("center");
            obj.set_cursor("pointer");
            this.search_area.addChild(obj.name, obj);

            obj = new Button("btn_reset","599","190","100","30",null,null,null,null,null,null,this.search_area.form);
            obj.set_taborder("16");
            obj.set_text("초기화");
            obj.set_borderRadius("5px");
            obj.set_background("#8e8e8e");
            obj.set_color("white");
            obj.set_font("normal 11pt/normal \"Noto Sans KR Medium\"");
            obj.set_textAlign("center");
            obj.set_cursor("pointer");
            this.search_area.addChild(obj.name, obj);

            obj = new Button("btn_write",null,null,"100","30","40","40",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("등록");
            obj.set_borderRadius("5px");
            obj.set_background("#135dae");
            obj.set_color("white");
            obj.set_font("normal 11pt/normal \"Noto Sans KR Medium\"");
            obj.set_textAlign("center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,760,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","grid_list","binddataset","ds_user","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","search_area.form.grade_combo","value","ds_memberDt","GRADE_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_PromotionList.xfdl", function() {
        this.Form_PromoList_onload = function(obj,e)
        {
        	trace("진행중인 프로모션 리스트 확인용>>>>");
        	this.fn_gradeSearch();
        	this.fnSearchPromo();
        };

        this.btn_write_onclick = function(obj,e)
        {
        	this.getOwnerFrame().set_formurl("promotion::Form_PromotionWrite.xfdl");
        };

        this.grid_list_oncellclick = function(obj, e) {
            if(e.cell == 10){
                var promotionId = this.ds_promo_list.getColumn(e.row,"PROMOTION_ID")
        		this.getOwnerFrame().arguments = {"PROMOTION_ID" : promotionId}
        		this.getOwnerFrame().set_formurl("promotion::Form_PromotionView.xfdl");
            }
        };

        this.search_area_btn_select_onclick = function(obj,e)
        {
        	this.fnSearchPromo();
        };

        this.search_area_btn_reset_onclick = function(obj,e)
        {
        	this.reload();
        };

        this.fnDisplayValue = function()
        {
            var rowCount = this.ds_promo_list.getRowCount();
            this.ds_promo_list.addColumn("AUTO_ISSUED_DISPLAY", "STRING");

            for(var i = 0; i < rowCount; i++) {
                var autoIssued = this.ds_promo_list.getColumn(i, "AUTO_ISSUED");
                var autoIssuedDisplay = (autoIssued == "Y") ? "자동발급" : "수동발급";
                this.ds_promo_list.setColumn(i, "AUTO_ISSUED_DISPLAY", autoIssuedDisplay);
            }
        };

        this.radio_promo_type_onitemchanged = function(obj,e)
        {
        	trace("postvalue: " + e.postvalue);

            if(e.postvalue == "grade") {
                this.search_area.form.grade_combo.set_readonly(false); // readonly 해제
                this.search_area.form.grade_combo.set_enable(true);
            } else {
                this.search_area.form.grade_combo.set_enable(false);
                this.search_area.form.grade_combo.set_readonly(true); // readonly 설정
                this.search_area.form.grade_combo.set_value("");
            }
        };

        //회원 등급 조회
        this.fn_gradeSearch = function(){

        	var strSvcID = "selectGradeExceptionAdminList"
        	var setURL = "svc::/selectGradeExceptionAdminListByAdmin.do?time=" + new Date().getTime();
        	var strInDatasets = "";
        	var strOutDatasets = "ds_grade=ds_grade";
        	var strArg = "";
        	var callBack = "fn_callBack";
        	var inAsync = true;

        	this.transaction(strSvcID,setURL,strInDatasets,strOutDatasets,strArg,callBack,inAsync);
        }

        // 프로모션리스트
        this.fnSearchPromo = function() {
            var strSvcID       = "selectPromoListByAdmin";
            var strURL         = "svc::selectPromoListByAdmin.do";
            var strInDatasets  = "ds_search=ds_search";
            var strOutDatasets = "ds_promo_list=ds_promo_list";
            var strArg         = "";
            var strCallback    = "fnCallback";

            this.ds_search.clearData();
            this.ds_search.addRow();

            // 프로모션명
            if(this.search_area.form.edit_search) {
                var promoName = this.search_area.form.edit_search.value;
                if(promoName != null && promoName.trim() != "") {
                    if(promoName.trim().length > 80) {
                        this.alert("프로모션명은 80자 이내로 입력해주세요.");
                        return;
                    }
                    this.ds_search.setColumn(0, "PROMOTION_NAME", promoName.trim());
                }
            }

            if(this.search_area.form.radio_promo_type) {
                var targetRadio = this.search_area.form.radio_promo_type.value;
                var targetValue = "";

                if(targetRadio == "all") {
                    targetValue = "all";
                } else if(targetRadio == "new") {
                    targetValue = "new";
                } else if(targetRadio == "grade" && this.search_area.form.grade_combo) {
                    targetValue = this.search_area.form.grade_combo.value;
                    if(!targetValue || targetValue == "") {
                        this.alert("등급을 선택해주세요.");
                        return;
                    }
                }

                if(targetValue != null && targetValue != "") {
                    this.ds_search.setColumn(0, "TARGET_VALUE", targetValue);
                }
            }

        	// 활성화
        	if(this.search_area.form.radio_view_type) {
        		var activeStatus = this.search_area.form.radio_view_type.value;
        		if(activeStatus != null && activeStatus != "") {
        			this.ds_search.setColumn(0, "IS_ACTIVE", activeStatus);
        		}
        	}

            if(this.search_area.form.cal_start_day && this.search_area.form.cal_end_day) {
        		var startDate = this.search_area.form.cal_start_day.value;
        		var endDate = this.search_area.form.cal_end_day.value;

        		if(startDate && endDate && startDate != "" && endDate != "") {
        			if(startDate > endDate) {
        				this.alert("시작일은 종료일보다 이전이어야 합니다.");
        				return;
        			}
        		}

        		if(startDate != null && startDate != "") {
        			this.ds_search.setColumn(0, "START_DT", startDate);
        			trace("시작일 이후 검색: " + startDate);
        		}

        		if(endDate != null && endDate != "") {
        			this.ds_search.setColumn(0, "END_DT", endDate);
        			trace("종료일 이전 검색: " + endDate);
        		}
        	}

            trace("ds_search 행 수: " + this.ds_search.getRowCount());
            for(var i = 0; i < this.ds_search.getColCount(); i++) {
                var colName = this.ds_search.getColID(i);
                var colValue = this.ds_search.getColumn(0, colName);
                trace(colName + " = " + colValue);
            }

            this.transaction(strSvcID, strURL, strInDatasets, strOutDatasets, strArg, strCallback);
        };

        // 공통 콜백
        this.fnCallback = function(svc, err, errMsg) {
            if (err < 0) {
                this.alert("에러 발생: " + errMsg);
                return;
            }
            switch(svc){
        		case "selectPromoListByAdmin":
        			var rowCount = this.ds_promo_list.getRowCount();

                    if(rowCount == 0) {
                        this.alert("검색 조건에 맞는 프로모션이 없습니다.");
                    }
        			this.fnDisplayValue();
        		return;
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_PromoList_onload,this);
            this.grid_list.addEventHandler("oncellclick",this.grid_list_oncellclick,this);
            this.search_area.form.search_tit.addEventHandler("onclick",this.search_area_search_txt01_onclick,this);
            this.search_area.form.search_tit00.addEventHandler("onclick",this.search_area_search_txt01_onclick,this);
            this.search_area.form.search_tit00_00.addEventHandler("onclick",this.search_area_search_txt01_onclick,this);
            this.search_area.form.radio_promo_type.addEventHandler("onitemchanged",this.radio_promo_type_onitemchanged,this);
            this.search_area.form.grade_combo.addEventHandler("onitemchanged",this.search_area_grade_combo_onitemchanged,this);
            this.search_area.form.search_tit00_00_00.addEventHandler("onclick",this.search_area_search_txt01_onclick,this);
            this.search_area.form.txt_update_td.addEventHandler("onclick",this.txt_th00_onclick,this);
            this.search_area.form.btn_select.addEventHandler("onclick",this.search_area_btn_select_onclick,this);
            this.search_area.form.btn_reset.addEventHandler("onclick",this.search_area_btn_reset_onclick,this);
            this.btn_write.addEventHandler("onclick",this.btn_write_onclick,this);
        };
        this.loadIncludeScript("Form_PromotionList.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
