(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_ProductOptionSelect");
            this.set_titletext("옵션 선택");
            this.set_background("#f7f9fc");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_options", this);
            obj._setContents("<ColumnInfo><Column id=\"OPTION_ID\" type=\"BIGDECIMAL\"/><Column id=\"OPTION_NAME\" type=\"STRING\"/><Column id=\"OPTION_VALUE\" type=\"STRING\"/><Column id=\"ADDITIONAL_PRICE\" type=\"INT\"/><Column id=\"IS_VISIBLE\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_title","20","20","300","30",null,null,null,null,null,null,this);
            obj.set_text("옵션 선택");
            obj.set_font("bold 14pt \'Gulim\'");
            obj.set_color("#222222");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_option","20","60","760","440",null,null,null,null,null,null,this);
            obj.set_binddataset("ds_options");
            obj.set_autofittype("col");
            obj.set_selecttype("multirow");
            obj.set_border("1px solid #cccccc");
            obj.set_borderRadius("6px");
            obj.set_font("normal 11pt \'Gulim\'");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"ID\"/><Cell col=\"1\" text=\"옵션명\"/><Cell col=\"2\" text=\"옵션값\"/><Cell col=\"3\" text=\"추가금액\"/><Cell col=\"4\" text=\"노출여부\"/></Band><Band id=\"body\"><Cell text=\"bind:OPTION_ID\"/><Cell col=\"1\" text=\"bind:OPTION_NAME\"/><Cell col=\"2\" text=\"bind:OPTION_VALUE\"/><Cell col=\"3\" text=\"bind:ADDITIONAL_PRICE\"/><Cell col=\"4\" text=\"bind:IS_VISIBLE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ok","560","520","100","35",null,null,null,null,null,null,this);
            obj.set_text("확인");
            obj.set_background("#2d7dfa");
            obj.set_color("#ffffff");
            obj.set_borderRadius("6px");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","680","520","100","35",null,null,null,null,null,null,this);
            obj.set_text("닫기");
            obj.set_background("#555555");
            obj.set_color("#ffffff");
            obj.set_borderRadius("6px");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,600,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_ProductOptionSelect.xfdl", function() {
        // onload 시 옵션 목록 조회
        this.Form_ProductOptionSelect_onload = function(obj,e)
        {
            var strSvcId = "selectOptionByAdmin";
            var strUrl   = "svc::selectOptionByAdmin.do";
            var strIn    = "";
            var strOut   = "ds_options=ds_out_opList";
            var strArg   = "";
            var callBack = "fn_callback";
            var bAsync   = true;

            this.transaction(strSvcId, strUrl, strIn, strOut, strArg, callBack, bAsync);
        };

        // 확인 버튼 → 선택한 옵션들 부모폼으로 전달
        this.btn_ok_onclick = function(obj,e)
        {
            var arr = [];

            for (var i=0; i<this.ds_options.getRowCount(); i++) {
                if (this.grd_option.isSelectedRow(i)) {
                    arr.push({
                        OPTION_ID: this.ds_options.getColumn(i, "OPTION_ID"),
                        OPTION_NAME: this.ds_options.getColumn(i, "OPTION_NAME"),
                        OPTION_VALUE: this.ds_options.getColumn(i, "OPTION_VALUE"),
                        ADDITIONAL_PRICE: this.ds_options.getColumn(i, "ADDITIONAL_PRICE")
                    });
                }
            }

            // 부모에 JSON 문자열 전달
            this.close(JSON.stringify(arr));
        };

        // 닫기 버튼
        this.btn_close_onclick = function(obj,e)
        {
            this.close("");
        };

        // 공통 콜백
        this.fn_callback = function(svcID,errCode,errMsg)
        {
            if (errCode < 0) {
                alert("에러: " + errMsg);
                return;
            }
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_ProductOptionSelect_onload,this);
            this.btn_ok.addEventHandler("onclick",this.btn_ok_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("Form_ProductOptionSelect.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
