(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Main");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","50","30","295","120",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("MAIN");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Main.xfdl", function() {
        this.Form_Main_onload = function(obj,e)
        {
        	this.selectGradeListByUser();
        };

        this.selectGradeListByUser = function(){
        	var strSvcID      = "selectGradeListByAdmin";
        	var strURL        = "svc::selectGradeListByAdmin.do";
        	var strInDatasets = "";
        	var strOutDatasets = "ds_list = ds_list";
        	var strArg = "";
        	var callBack = "fn_callBack";
        	var inAsync = true;

        	this.transaction(strSvcID,strURL,strInDatasets,strOutDatasets,strArg,callBack,inAsync);
        }

        this.fn_callBack = function(strSvcID, errorCode, errorMsg){

        	if(errorCode == -1){
        		this.alert(errorMsg)
        	};

        	switch(strSvcID){
        		case "selectGradeListByAdmin" :
        			console.log(this.ds_list.saveXML());
        		break;
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Main_onload,this);
        };
        this.loadIncludeScript("Form_Main.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
