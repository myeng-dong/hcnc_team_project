(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Popup_Work");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,160);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dtl", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"INT\" size=\"256\"/><Column id=\"COL_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"COL_CHK\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NUM\" type=\"FLOAT\" size=\"256\"/><Column id=\"COL_DTE\" type=\"STRING\" size=\"256\"/><Column id=\"COL_CBO\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTE\" type=\"DATE\" size=\"256\"/><Column id=\"UPD_USR\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTE\" type=\"DATE\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_combo", this);
            obj._setContents("<ColumnInfo><Column id=\"COD\" type=\"STRING\" size=\"256\"/><Column id=\"TXT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new GroupBox("GroupBox00","20",null,"1005","70",null,"29",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("상세정보");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","40",null,"30","30",null,"46",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("TEXT");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_COL_TXT","85",null,"161","35",null,"43",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_maxlength("50");
            obj.set_displaynulltext("입력하세요!");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","286",null,"49","30",null,"46",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Check");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_COL_CHK","350",null,"60","30",null,"46",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","410",null,"50","30",null,"46",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Number");
            this.addChild(obj.name, obj);

            obj = new Spin("spe_COL_NUM","475",null,"115","30",null,"46",null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","630",null,"30","30",null,"46",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Date");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_COL_DTE","675",null,"105","30",null,"46",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy.MM.dd");
            obj.set_editformat("yyyy.MM.dd");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00","820",null,"30","30",null,"46",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Date");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_COL_CBO","865",null,"135","30",null,"46",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_innerdataset("ds_combo");
            obj.set_codecolumn("COD");
            obj.set_datacolumn("TXT");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"20","80","30","28",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1050,160,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_COL_TXT","value","ds_dtl","COL_TXT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","chk_COL_CHK","value","ds_dtl","COL_CHK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","spe_COL_NUM","value","ds_dtl","COL_NUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","cal_COL_DTE","value","ds_dtl","COL_DTE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","cbo_COL_CBO","value","ds_dtl","COL_CBO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Popup_Work.xfdl", function() {
        this.Popup_Work_onload = function(obj,e)
        {
        	this.fnSearchCombo();

        	this.ds_dtl.clearData();
        	this.ds_dtl.addRow();
        	this.ds_dtl.setColumn(0, "COL_TXT", this.parent.COL_TXT);
        	this.ds_dtl.setColumn(0, "COL_CHK", this.parent.COL_CHK);
        	this.ds_dtl.setColumn(0, "COL_NUM", this.parent.COL_NUM);
        	this.ds_dtl.setColumn(0, "COL_DTE", this.parent.COL_DTE);
        	this.ds_dtl.setColumn(0, "COL_CBO", this.parent.COL_CBO);
        };

        this.btn_close_onclick = function(obj,e)
        {
        	this.close('Close Popup');
        };

        // 콤보 조회
        this.fnSearchCombo = function ()
        {
          var strSvcId    = "selectCombo";
          var strSvcUrl   = "svc::selectCombo.do";
          var inData      = "";
          var outData     = "ds_combo=ds_combo";
          var strArg      = "";
          var callBackFnc = "fnCallback";
          var isAsync     = true;

          this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        this.Popup_Work_onbeforeclose = function(obj,e)
        {
        	this.opener.fn_parent(this.ds_dtl);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Popup_Work_onload,this);
            this.addEventHandler("onbeforeclose",this.Popup_Work_onbeforeclose,this);
            this.Static00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00_00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00_00_00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("Popup_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
