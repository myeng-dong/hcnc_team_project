(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Report");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(720,450);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_report", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REQDTE\" type=\"STRING\" size=\"256\"/><Column id=\"REQCNT\" type=\"INT\" size=\"256\"/><Column id=\"RESCNT\" type=\"INT\" size=\"256\"/><Column id=\"SUBCNT\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_code", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_search",null,"15","80","30","15",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","30","15","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("성명");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","15","60",null,null,"15","15",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_report");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"성명(Combo)\"/><Cell col=\"1\" text=\"성명(Join)\" displaytype=\"normal\"/><Cell col=\"2\" text=\"요청일\"/><Cell col=\"3\" text=\"요청건수\"/><Cell col=\"4\" text=\"처리건수\"/><Cell col=\"5\" text=\"잔여건수\"/></Band><Band id=\"body\"><Cell text=\"bind:ID\" displaytype=\"combocontrol\" combodataset=\"ds_code\" combocodecol=\"ID\" combodatacol=\"NAME\" textAlign=\"center\" comboimemode=\"none\"/><Cell col=\"1\" text=\"bind:NAME\" edittype=\"none\" combodataset=\"ds_combo\" combocodecol=\"COD\" combodatacol=\"TXT\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\" textAlign=\"center\" suppress=\"1\" suppressalign=\"middle\"/><Cell col=\"2\" displaytype=\"mask\" maskeditformat=\"####-##-##\" text=\"bind:REQDTE\" maskedittype=\"string\" textAlign=\"center\" cssclass=\"expr:comp.parent.ReturnCellFontColor(SUBCNT)\"/><Cell col=\"3\" text=\"bind:REQCNT\" textAlign=\"right\" padding=\"0px 5px 0px 0px\" cssclass=\"expr:comp.parent.ReturnCellFontColor(SUBCNT)\"/><Cell col=\"4\" text=\"bind:RESCNT\" textAlign=\"right\" padding=\"0px 5px 0px 0px\" cssclass=\"expr:comp.parent.ReturnCellFontColor(SUBCNT)\"/><Cell col=\"5\" text=\"bind:SUBCNT\" textAlign=\"right\" padding=\"0px 5px 0px 0px\" expr=\"expr:SUBCNT==&apos;0&apos;?&apos;&apos;:SUBCNT\" cssclass=\"expr:comp.parent.ReturnCellFontColor(SUBCNT)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_ID","Static00:10","15","110","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_code");
            obj.set_codecolumn("ID");
            obj.set_datacolumn("NAME");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",720,450,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Report.xfdl", function() {
        this.Form_Report_onload = function(obj,e)
        {
        	// 조회조건 콤보 조회
        	this.fnSearchCode();
        };

        // 조회버튼 클릭
        this.btn_search_onclick = function(obj,e)
        {
        	this.fnSearchReport();
        };

        //처리콜백 함수
        this.fnCallback = function(svcID,errorCode,errorMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errorCode == -1)
        	{
        		this.alert(errorMsg);
        		return;
        	}

        	switch(svcID)
        	{
        		case "selectCode":
        			var row = this.ds_code.insertRow(0);
        			this.ds_code.setColumn(row, "NAME", "전체");
        			break;
        		case "selectReport":
        			if(this.ds_report.rowcount < 1)
        				this.alert("조회된 결과가 없습니다.");
        			break;
        	}
        };

        // 콤보 조회
        this.fnSearchCode = function ()
        {
        	this.ds_search.setColumn(0, "GBN", "G001");

        	var strSvcId    = "selectCode";
        	var strSvcUrl   = "svc::selectCode.do";
        	var inData      = "ds_search=ds_search";
        	var outData     = "ds_code=ds_code";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync     = true;

            this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // report 조회
        this.fnSearchReport = function ()
        {
            var strSvcId    = "selectReport";
            var strSvcUrl   = "svc::selectReport.do";
            var inData      = "ds_search=ds_search";
            var outData     = "ds_report=ds_report";
            var strArg      = "";
            var callBackFnc = "fnCallback";
            var isAsync     = true;

          this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        this.ReturnCellFontColor = function(str) {
        	return str == "0" || str == "" || str == "undefined" ? "" : "ExprRed";
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Report_onload,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
        };
        this.loadIncludeScript("Form_Report.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
