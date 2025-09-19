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
            obj._setContents("<ColumnInfo><Column id=\"OPTION_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"OPTION_VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"ADDITIONAL_PRICE\" type=\"INT\" size=\"256\"/><Column id=\"COLOR\" type=\"STRING\" size=\"50\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_color", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"50\"/><Column id=\"NAME\" type=\"STRING\" size=\"100\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">black</Col><Col id=\"NAME\">블랙</Col></Row><Row><Col id=\"CODE\">white</Col><Col id=\"NAME\">화이트</Col></Row><Row><Col id=\"CODE\">red</Col><Col id=\"NAME\">레드</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_title","30","20","400","40",null,null,null,null,null,null,this);
            obj.set_text("옵션관리 | 등록/수정");
            obj.set_font("bold 16pt/normal \'Arial\'");
            obj.set_color("#232323");
            this.addChild(obj.name, obj);

            obj = new Static("sta_notice","30","80","600","30",null,null,null,null,null,null,this);
            obj.set_text("옵션 입력 (옵션명/옵션값, 추가금액)");
            obj.set_font("11pt \'Gulim\'");
            obj.set_color("#666666");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_option","30","120","1220","550",null,null,null,null,null,null,this);
            obj.set_binddataset("ds_optionReg");
            obj.set_autofittype("col");
            obj.set_border("1px solid #cccccc");
            obj.set_borderRadius("8px");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"200\"/><Column size=\"250\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"36\"/></Rows><Band id=\"head\"><Cell text=\"No\" textAlign=\"center\" font=\"bold 11pt &apos;Arial&apos;\" background=\"#f5f7fa\" border=\"1px solid #e0e0e0\"/><Cell col=\"1\" text=\"옵션명\" textAlign=\"center\" font=\"bold 11pt &apos;Arial&apos;\" background=\"#f5f7fa\" border=\"1px solid #e0e0e0\"/><Cell col=\"2\" text=\"옵션값\" textAlign=\"center\" font=\"bold 11pt &apos;Arial&apos;\" background=\"#f5f7fa\" border=\"1px solid #e0e0e0\"/><Cell col=\"3\" text=\"추가금액\" textAlign=\"center\" font=\"bold 11pt &apos;Arial&apos;\" background=\"#f5f7fa\" border=\"1px solid #e0e0e0\"/><Cell col=\"4\" text=\"색상\" textAlign=\"center\" font=\"bold 11pt &apos;Arial&apos;\" background=\"#f5f7fa\" border=\"1px solid #e0e0e0\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\" background=\"#ffffff\" border=\"1px solid #e0e0e0\"/><Cell col=\"1\" text=\"bind:OPTION_NAME\" edittype=\"text\" background=\"#ffffff\" border=\"1px solid #e0e0e0\"/><Cell col=\"2\" text=\"bind:OPTION_VALUE\" edittype=\"text\" background=\"#ffffff\" border=\"1px solid #e0e0e0\"/><Cell col=\"3\" text=\"bind:ADDITIONAL_PRICE\" edittype=\"text\" background=\"#ffffff\" border=\"1px solid #e0e0e0\"/><Cell col=\"4\" text=\"bind:COLOR\" displaytype=\"combocontrol\" edittype=\"combo\" background=\"#ffffff\" border=\"1px solid #e0e0e0\" combodataset=\"ds_color\" combocodecol=\"CODE\" combodatacol=\"NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addRow","30","690","100","36",null,null,null,null,null,null,this);
            obj.set_text("행추가");
            obj.set_background("#1f4a5b");
            obj.set_color("#ffffff");
            obj.set_font("bold 11pt/normal \'Arial\'");
            obj.set_borderRadius("6px");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delRow","140","690","100","36",null,null,null,null,null,null,this);
            obj.set_text("행삭제");
            obj.set_background("#bf4a3f");
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
        this.registerScript("Form_ProductOptionReg.xfdl", function() {

        this.div_input_edt_optName_onchanged = function(obj,e)
        {

        };

        });
        
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
