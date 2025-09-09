(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Welcome");
            this.set_titletext("Welcome");
            if (Form == this.constructor)
            {
                this._setFormPosition(720,450);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_welcome", this);
            obj._setContents("<ColumnInfo><Column id=\"welcomeText\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_txt", this);
            obj._setContents("<ColumnInfo><Column id=\"txt\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row id=\"txt\"/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_local","140","45","190","30",null,null,null,null,null,null,this);
            obj.set_text("Welcomde To Nexacro! 백태수");
            this.addChild(obj.name, obj);

            obj = new Static("stc_db","140","90","381","30",null,null,null,null,null,null,this);
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_callDB","460","50","180","20",null,null,null,null,null,null,this);
            obj.set_text("텍스트 입력 후 눌러보세요!");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_txt","325","50","120","20",null,null,null,null,null,null,this);
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",720,450,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("bind_01","edt_txt","value","ds_txt","txt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("bind_02","stc_db","text","ds_welcome","welcomeText");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Welcome.xfdl", function() {
        this.Form_Welcome_onload = function(obj,e)
        {
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
        		case "welcome":
        			break;
        		default :
        			break;
        	}
        };

        this.btn_callDB_onclick = function(obj,e)
        {
        	/*
        	var strSvcId    = "welcome";
        	var strSvcUrl   = "svc::welcome.do";
        	var inData      = "ds_txt=ds_txt";
        	var outData     = "ds_welcome=ds_welcome";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync     = true;

        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        	*/

        	this.go("FrameBase/Form_Code.xfdl");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Welcome_onload,this);
            this.btn_callDB.addEventHandler("onclick",this.btn_callDB_onclick,this);
        };
        this.loadIncludeScript("Form_Welcome.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
