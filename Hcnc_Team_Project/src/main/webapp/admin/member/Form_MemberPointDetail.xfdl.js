(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_MemberPointDetail");
            this.set_titletext("New Form");
            this.set_background("lightBlue");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_type", this);
            obj._setContents("<ColumnInfo><Column id=\"CHANGE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LABEL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"LABEL\">사용</Col><Col id=\"CHANGE_TYPE\"/></Row><Row><Col id=\"LABEL\">적립</Col><Col id=\"CHANGE_TYPE\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"CHANGE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"POINT\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ORDER_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"MEMBER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CHANGE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SDATE\" type=\"STRING\" size=\"256\"/><Column id=\"EDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ORDER_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"MEMBER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_insCnt", this);
            obj._setContents("<ColumnInfo><Column id=\"INSERTED\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("point_detail_box","20","17","1240","203",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("white");
            obj.set_text("");
            obj.set_borderRadius("8px");
            this.addChild(obj.name, obj);

            obj = new Static("grade_search_box00","20","250","1240","460",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("white");
            obj.set_text("");
            obj.set_borderRadius("8px");
            this.addChild(obj.name, obj);

            obj = new Radio("point_type","110","37","170","26",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_type");
            obj.set_codecolumn("CHANGE_TYPE");
            obj.set_datacolumn("LABEL");
            obj.set_direction("vertical");
            obj.set_font("12px/normal \"Noto Sans KR Black\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","44","37","66",null,null,"656",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("적립 구분");
            obj.set_font("14px/normal \"Noto Sans KR Black\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","44","83","66",null,null,"610",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("발생 일시");
            obj.set_font("14px/normal \"Noto Sans KR Black\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","44","133","66",null,null,"560",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("주문 번호");
            obj.set_font("14px/normal \"Noto Sans KR Black\"");
            this.addChild(obj.name, obj);

            obj = new Edit("member_name00","110","129","1093","35",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_border("1px solid black");
            obj.set_borderRadius("8px");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","110","80","373","33",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_border("1px solid black");
            obj.set_borderRadius("8px");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00","520","80","373","33",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_border("1px solid black");
            obj.set_borderRadius("8px");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","489","84","28","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","489","181","97","29",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("검색");
            obj.set_background("#2563eb");
            obj.set_borderRadius("4px");
            obj.set_font("12px/normal \"Noto Sans KR Black\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","608","181","88","29",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("초기화");
            obj.set_background(" #9ca3af");
            obj.set_borderRadius("4px");
            obj.set_font("12px/normal \"Noto Sans KR Black\"");
            this.addChild(obj.name, obj);

            obj = new Grid("pointAndCoupon","30","250",null,"371","30",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_background("#FFFFFF");
            obj.set_border("0px none");
            obj.set_borderRadius("10px");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"52\"/><Column size=\"99\"/><Column size=\"136\"/><Column size=\"540\"/><Column size=\"170\"/><Column size=\"225\"/></Columns><Rows><Row size=\"48\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"NO\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"1\" text=\"유형\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"2\" text=\"포인트\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"3\" text=\"설명\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"4\" text=\"발행 시기\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/><Cell col=\"5\" text=\"주문 번호\" textAlign=\"CENTER\" font=\"bold 11pt &apos;LG Smart UI Bold&apos;\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #eeeeee, 0px none\" color=\"#222222\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\" font=\"12px/normal &quot;LG Smart UI Bold&quot;\"/><Cell col=\"1\" text=\"bind:CHANGE_TYPE\" textAlign=\"center\" font=\"12px/normal &quot;LG Smart UI Bold&quot;\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"CHANGE_TYPE\" combodatacol=\"CHANGE_TYPE\" combodataset=\"ds_type\"/><Cell col=\"2\" text=\"bind:POINT\" textAlign=\"center\" font=\"12px/normal &quot;LG Smart UI Bold&quot;\" displaytype=\"number\" edittype=\"mask\"/><Cell col=\"3\" text=\"bind:DESCRIPTION\" textAlign=\"center\" font=\"12px/normal &quot;LG Smart UI Bold&quot;\" edittype=\"normal\" displaytype=\"normal\"/><Cell col=\"4\" edittype=\"none\" text=\"bind:INPUT_DT\" textAlign=\"center\" font=\"12px/normal &quot;LG Smart UI Bold&quot;\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"none\" font=\"12px/normal &quot;LG Smart UI Bold&quot;\" text=\"bind:ORDER_NUMBER\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","549","660","101","28",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("뒤로가기");
            obj.set_background("#2563eb");
            obj.set_borderRadius("4px");
            obj.set_color("white");
            obj.set_font("12px/normal \"Noto Sans KR Black\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","660","658","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("포인트 적립 및 차감");
            obj.set_borderRadius("4px");
            obj.set_font("12px/normal \"Noto Sans KR Black\"");
            this.addChild(obj.name, obj);

            obj = new Button("plus","29","224","63","22",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("+");
            obj.set_background("#2563eb");
            obj.set_borderRadius("4px");
            obj.set_color("white");
            obj.set_font("12px/normal \"Noto Sans KR Black\"");
            this.addChild(obj.name, obj);

            obj = new Button("minus","100","224","60","22",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("-");
            obj.set_background(" #9ca3af");
            obj.set_borderRadius("4px");
            obj.set_color("white");
            obj.set_font("11pt \"Noto Sans KR Black\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","point_type","value","ds_search","CHANGE_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Calendar00","value","ds_search","SDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Calendar00_00","value","ds_search","EDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","member_name00","value","ds_search","ORDER_iD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","pointAndCoupon","binddataset","ds_user","");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("Form_MemberPointDetail.xfdl","common::common.xjs");
        this.registerScript("Form_MemberPointDetail.xfdl", function() {
        this.executeIncludeScript("common::common.xjs"); /*include "common::common.xjs"*/;
        this.memberId="";
        this.Form_MemberPointDetail_onload = function(obj,e)
        {
        	this.fn_pointType();

        	// 부모 Frame에서 arguments 꺼내오기
            var ownerFrame = this.getOwnerFrame();
            var memberId = ownerFrame.arguments["MEMBER_ID"];

            // 전역 변수에 저장
            this.memberId = memberId;

            this.ds_search.setColumn(0, "MEMBER_ID", memberId);

            this.fn_selectPointDetailList();

        };


        //회원 포인트 타입 조회
        this.fn_pointType = function(){

        	var strSvcID = "selectMemberChageTypeList"
        	var setURL = "svc::/selectMemberChageTypeListByAdmin.do";
        	var strInDatasets = "ds_search=ds_search";
        	var strOutDatasets = "ds_type=ds_type";
        	var strArg = "";
        	var callBack = "fn_callBack";
        	var inAsync = true;

        	this.transaction(strSvcID,setURL,strInDatasets,strOutDatasets,strArg,callBack,inAsync);
        }

        //회원 포인트 상세 리스트 조회
        this.fn_selectPointDetailList= function(){

        	var strSvcID = "selectPointDetail"
        	var setURL = "svc::/selectPointDetailListByAdmin.do";
        	var strInDatasets = "ds_search=ds_search";
        	var strOutDatasets = "ds_list=ds_list";
        	var strArg = ""
        	var callBack = "fn_callBack";
        	var inAsync = true;

        	this.transaction(strSvcID,setURL,strInDatasets,strOutDatasets,strArg,callBack,inAsync);
        }

        //변경된 행 저장
        this.Button03_onclick = function(obj,e)
        {
        	if (!this.ds_list.getColumnInfo("rowType")) {
                this.ds_list.addColumn("rowType", "string");
            }

            // 서버로 전송
            var strSvcID       = "insertMemberPoint";
            var strURL         = "svc::/insertMemberPointByAdmin.do";
            var strInDatasets  = "ds_list=ds_list:U";   // 변경된 것만 보냄 :U가 중요함!!
            var strOutDatasets = "ds_insCnt=ds_insCnt";
            var strArg         = "";
            var callBack       = "fn_callBack";
            var inAsync        = true;

            this.transaction(strSvcID, strURL, strInDatasets, strOutDatasets, strArg, callBack, inAsync);
        };

        // 공통 콜백
        this.fn_callBack = function(svcID, errorCode, errorMSG){

        	if(errorCode == -1){
        		this.alert(errorMSG);
        		return; // 에러 시 더 이상 진행하지 않음
        	}

        	switch(svcID){
        	case "selectPointDetail" :
        		console.log(this.ds_list.saveXML());
        		break;

        	case "insertMemberPoint" :

        		if(this.ds_insCnt.getColumn(0,"INSERTED") > 0){
        			this.alert("포인트가 성공적으로 저장되었습니다.");

        			// 저장 후 다시 조회하여 최신 데이터 반영
        			this.fn_selectPointDetailList();
        		}else{
        			this.alert("포인트 저장에 실패했습니다")
        			this.fn_selectPointDetailList();
        		}

        		break;

        	case "selectMemberChageTypeList" :
        		// 포인트 타입 로드 완료
        		break;

        	}
        }

        //검색
        this.Button00_onclick = function(obj,e)
        {
        	this.fn_selectPointDetailList()
        };

        //초기화

        this.Button01_onclick = function(obj,e)
        {
        	this.reload();
        };

        //뒤로가기
        this.Button02_onclick = function(obj,e)
        {
        	this.getOwnerFrame().set_formurl("member::Form_MemberPointAndCoupon.xfdl");
        };

        //행추가
        this.plus_onclick = function(obj,e)
        {
        	var boardRow = this.ds_list.addRow();

        	// 새로 추가된 행에 MEMBER_ID 설정
        	//ds_search에 있는 MEMBER_ID 추출
            var memberId = this.ds_search.getColumn(0, "MEMBER_ID");
            this.ds_list.setColumn(boardRow, "MEMBER_ID", memberId);
        };

        //행삭제
        this.minus_onclick = function(obj,e)
        {
        	var boardRow = this.ds_list.rowposition;

        	if(boardRow >= 0){
        		this.ds_list.deleteRow(boardRow);
        	}
        };


        this.pointAndCoupon_oncellclick = function(obj,e)
        {

            //1이 유형
        	//2가 포인트
        	//3 설명
        	var rowType = this.ds_list.getRowType(e.row)

        	 if (rowType == Dataset.ROWTYPE_INSERT) {
                // 새로 추가된 행만 편집 가능
                if (e.col == 1) { // 유형
                    obj.setCellProperty("body", e.col, "edittype", "combo");
                }
                else if (e.col == 2) { // 포인트
                    obj.setCellProperty("body", e.col, "edittype", "mask");
                }
                else if (e.col == 3) { // 설명
                    obj.setCellProperty("body", e.col, "edittype", "normal");
                }
            } else {
                // 기존 행은 무조건 조회 전용
                obj.setCellProperty("body", e.col, "edittype", "none");
            }
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_MemberPointDetail_onload,this);
            this.point_detail_box.addEventHandler("onclick",this.point_detail_box_onclick,this);
            this.grade_search_box00.addEventHandler("onclick",this.grade_search_box00_onclick,this);
            this.point_type.addEventHandler("onitemchanged",this.point_type_onitemchanged,this);
            this.member_name00.addEventHandler("onchanged",this.member_name_onchanged,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.pointAndCoupon.addEventHandler("oncellclick",this.pointAndCoupon_oncellclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.Button03.addEventHandler("onclick",this.Button03_onclick,this);
            this.plus.addEventHandler("onclick",this.plus_onclick,this);
            this.minus.addEventHandler("onclick",this.minus_onclick,this);
        };
        this.loadIncludeScript("Form_MemberPointDetail.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
