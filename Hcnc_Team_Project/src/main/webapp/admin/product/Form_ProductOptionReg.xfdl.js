(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_ProductOptionReg");
            this.set_titletext("옵션 등록/수정");
            this.set_background("#eff7ff");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_optionReg", this);
            obj._setContents("<ColumnInfo><Column id=\"OPTION_ID\" type=\"INT\" size=\"256\"/><Column id=\"OPTION_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"OPTION_VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"ADDITIONAL_PRICE\" type=\"INT\" size=\"256\"/><Column id=\"INPUT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_title","30","20","400","40",null,null,null,null,null,null,this);
            obj.set_text("옵션관리 | 등록/수정");
            obj.set_font("bold 16pt/normal \'Arial\'");
            obj.set_color("#232323");
            this.addChild(obj.name, obj);

            obj = new Static("sta_notice","30","80","600","30",null,null,null,null,null,null,this);
            obj.set_text("옵션 입력 (옵션코드 자동생성)");
            obj.set_font("11pt \'Gulim\'");
            obj.set_color("#666666");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_option","30","120","1220","550",null,null,null,null,null,null,this);
            obj.set_binddataset("ds_optionReg");
            obj.set_autofittype("col");
            obj.set_border("1px solid #cccccc");
            obj.set_borderRadius("8px");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"150\"/><Column size=\"250\"/><Column size=\"250\"/><Column size=\"150\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"36\"/></Rows><Band id=\"head\"><Cell text=\"No\" textAlign=\"center\" font=\"bold 11pt &apos;Arial&apos;\" background=\"#f5f7fa\" border=\"1px solid #e0e0e0\"/><Cell col=\"1\" text=\"옵션코드\" textAlign=\"center\" font=\"bold 11pt &apos;Arial&apos;\" background=\"#f5f7fa\" border=\"1px solid #e0e0e0\"/><Cell col=\"2\" text=\"옵션명\" textAlign=\"center\" font=\"bold 11pt &apos;Arial&apos;\" background=\"#f5f7fa\" border=\"1px solid #e0e0e0\"/><Cell col=\"3\" text=\"옵션값\" textAlign=\"center\" font=\"bold 11pt &apos;Arial&apos;\" background=\"#f5f7fa\" border=\"1px solid #e0e0e0\"/><Cell col=\"4\" text=\"추가금액\" textAlign=\"center\" font=\"bold 11pt &apos;Arial&apos;\" background=\"#f5f7fa\" border=\"1px solid #e0e0e0\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\" background=\"#ffffff\" border=\"1px solid #e0e0e0\"/><Cell col=\"1\" text=\"bind:OPTION_ID\" edittype=\"none\" background=\"#eeeeee\" textAlign=\"center\" border=\"1px solid #e0e0e0\"/><Cell col=\"2\" text=\"bind:OPTION_NAME\" edittype=\"text\" background=\"#ffffff\" border=\"1px solid #e0e0e0\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:OPTION_VALUE\" edittype=\"text\" background=\"#ffffff\" border=\"1px solid #e0e0e0\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:ADDITIONAL_PRICE\" edittype=\"text\" background=\"#ffffff\" border=\"1px solid #e0e0e0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addRow","30","690","100","36",null,null,null,null,null,null,this);
            obj.set_text("행추가");
            obj.set_background("#5cb85c");
            obj.set_color("#ffffff");
            obj.set_font("bold 11pt/normal \'Arial\'");
            obj.set_borderRadius("6px");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delRow","140","690","100","36",null,null,null,null,null,null,this);
            obj.set_text("행삭제");
            obj.set_background("#cc4700");
            obj.set_color("#ffffff");
            obj.set_font("bold 11pt/normal \'Arial\'");
            obj.set_borderRadius("6px");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","1040","690","100","40",null,null,null,null,null,null,this);
            obj.set_text("저장");
            obj.set_background("#102b6e");
            obj.set_color("#ffffff");
            obj.set_font("bold 11pt/normal \'Arial\'");
            obj.set_borderRadius("6px");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel","1150","690","100","40",null,null,null,null,null,null,this);
            obj.set_text("취소");
            obj.set_background("#bbbbbb");
            obj.set_color("#ffffff");
            obj.set_font("bold 11pt/normal \'Arial\'");
            obj.set_borderRadius("6px");
            obj.set_cursor("pointer");
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
        this.addIncludeScript("Form_ProductOptionReg.xfdl","common::common.xjs");
        this.registerScript("Form_ProductOptionReg.xfdl", function() {

        this.executeIncludeScript("common::common.xjs"); /*include "common::common.xjs"*/;

        this.Form_ProductOptionReg_onload = function(obj,e)
        {


            var app = nexacro.getApplication();
            var oArgs = this.getOwnerFrame().arguments;

            if (oArgs && oArgs.MODE == "UPDATE") {
                // 단건조회 호출
                this.transaction(
                    "selectOptionOneByAdmin",
                    "svc::selectOptionOneByAdmin.do?time=" + new Date().getTime(),
                    "",
                    "ds_optionReg=ds_optionReg",
                    "OPTION_ID=" + oArgs.OPTION_ID,
                    "fn_callback",
                    true
                );

                this.btn_addRow.set_visible(false);
                this.btn_delRow.set_visible(false);
                this.sta_title.set_text("옵션 [ 수정 ] 모드");
            }
            else {
                // 신규 등록 모드
        		var app = nexacro.getApplication();
                var nRow = this.ds_optionReg.addRow();
                this.ds_optionReg.setColumn(nRow, "INPUT_ID", app.loginUserId);

                this.btn_addRow.set_visible(true);
                this.btn_delRow.set_visible(true);
                this.sta_title.set_text("옵션 [ 등록 ] 모드");
            }
        };





        //취소
        this.btn_cancel_onclick = function(obj,e)
        {
        	var app = nexacro.getApplication();
        	var workFrame = app.mainframe.VFrameSet00.HFrameSet00.VFrameSet01.WorkFrame;

        	workFrame.arguments = { REFRESH: "Y"};
        	workFrame.set_formurl("product::Form_ProductOption.xfdl");
        };


        // 행추가
        this.btn_addRow_onclick = function(obj,e)
        {
        	var nRow = this.ds_optionReg.addRow();
        	this.ds_optionReg.setColumn(nRow, "ADDITIONAL_PRICE", 0); // 기본값 0
        };

        // 행삭제

        this.btn_delRow_onclick = function(obj,e)
        {
        	var nRow = this.ds_optionReg.rowposition;
        	if(nRow < 0) {
        		this.alert("삭제할 행을 선택하세요.");
        		return;
        	}
        	this.ds_optionReg.deleteRow(nRow);

        };

        // 저장 (등록/수정)
        this.btn_save_onclick = function(obj,e)
        {

            var nRow = this.ds_optionReg.currentRow;

            // ===== 필수값 체크 =====
            var optionName  = this.ds_optionReg.getColumn(nRow, "OPTION_NAME");
            var optionValue = this.ds_optionReg.getColumn(nRow, "OPTION_VALUE");

            if (!optionName || optionName.trim() == "") {
                this.alert("옵션명을 입력하세요.");
                return;
            }
            if (!optionValue || optionValue.trim() == "") {
                this.alert("옵션 세부값을 입력하세요.");
                return;
            }

            // ===== 추가금액 처리 (빈칸이면 0, 숫자가 아니어도 0) =====
            var addPrice = this.ds_optionReg.getColumn(nRow, "ADDITIONAL_PRICE");
            if (addPrice == null || addPrice.toString().trim() == "" || isNaN(addPrice)) {
                this.ds_optionReg.setColumn(nRow, "ADDITIONAL_PRICE", 0);
            }

            // ===== 등록자/수정자 세팅 =====
            var app = nexacro.getApplication();
            if (this.ds_optionReg.getColumn(nRow, "OPTION_ID")) {
                // 수정 모드
                this.ds_optionReg.setColumn(nRow, "UPDATE_ID", app.loginUserId);
            } else {
                // 등록 모드
                this.ds_optionReg.setColumn(nRow, "INPUT_ID", app.loginUserId);
            }

            if(!this.confirm("저장하시겠습니까?")) return;
            this.transaction(
                "saveOptionByAdmin",
                "svc::saveOptionByAdmin.do?time=" + new Date().getTime(),
                "ds_optionReg=ds_optionReg:U",  // 등록: Inserted(2), 수정: Updated(4)
                "",
                "",
                "fn_callback",
                true
            );
        };


        //콜백함수
        this.fn_callback = function (strSvcID, nErrorCode, strErrorMsg)
        {


        	trace("=== fn_callback ===");
            trace("ServiceID=" + strSvcID + ", ErrorCode=" + nErrorCode + ", ErrorMsg=" + strErrorMsg);


        	if (nErrorCode < 0)
        	{
        		this.alert("에러" + strErrorMsg);
        		return;
        	}

        	switch(strSvcID) {
        		case "saveOptionByAdmin" :
        			this.alert("저장이 완료되었습니다.");
        			this.btn_cancel_onclick();
        			break;



        		}
        };




        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_ProductOptionReg_onload,this);
            this.sta_title.addEventHandler("onclick",this.sta_title_onclick,this);
            this.grd_option.addEventHandler("oncellposchanged",this.grd_option_oncellposchanged,this);
            this.btn_addRow.addEventHandler("onclick",this.btn_addRow_onclick,this);
            this.btn_delRow.addEventHandler("onclick",this.btn_delRow_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
        };
        this.loadIncludeScript("Form_ProductOptionReg.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
