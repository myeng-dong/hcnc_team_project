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
            obj._setContents("<ColumnInfo><Column id=\"OPTION_ID\" type=\"INT\" size=\"256\"/><Column id=\"OPTION_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"OPTION_VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"ADDITIONAL_PRICE\" type=\"INT\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"150\"/><Column size=\"250\"/><Column size=\"250\"/><Column size=\"150\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"36\"/></Rows><Band id=\"head\"><Cell text=\"No\" textAlign=\"center\" font=\"bold 11pt &apos;Arial&apos;\" background=\"#f5f7fa\" border=\"1px solid #e0e0e0\"/><Cell col=\"1\" text=\"옵션코드\" textAlign=\"center\" font=\"bold 11pt &apos;Arial&apos;\" background=\"#f5f7fa\" border=\"1px solid #e0e0e0\"/><Cell col=\"2\" text=\"옵션명\" textAlign=\"center\" font=\"bold 11pt &apos;Arial&apos;\" background=\"#f5f7fa\" border=\"1px solid #e0e0e0\"/><Cell col=\"3\" text=\"옵션값\" textAlign=\"center\" font=\"bold 11pt &apos;Arial&apos;\" background=\"#f5f7fa\" border=\"1px solid #e0e0e0\"/><Cell col=\"4\" text=\"추가금액\" textAlign=\"center\" font=\"bold 11pt &apos;Arial&apos;\" background=\"#f5f7fa\" border=\"1px solid #e0e0e0\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\" background=\"#ffffff\" border=\"1px solid #e0e0e0\"/><Cell col=\"1\" text=\"bind:OPTION_ID\" edittype=\"none\" background=\"#eeeeee\" textAlign=\"center\" border=\"1px solid #e0e0e0\"/><Cell col=\"2\" text=\"bind:OPTION_NAME\" edittype=\"text\" background=\"#ffffff\" border=\"1px solid #e0e0e0\"/><Cell col=\"3\" text=\"bind:OPTION_VALUE\" edittype=\"text\" background=\"#ffffff\" border=\"1px solid #e0e0e0\"/><Cell col=\"4\" text=\"bind:ADDITIONAL_PRICE\" edittype=\"text\" background=\"#ffffff\" border=\"1px solid #e0e0e0\"/></Band></Format></Formats>");
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
            obj.set_background("#d9534f");
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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("Form_ProductOptionReg.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
