(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Login");
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

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Login.xfdl", function() {

        this.Form_Login_onload = function(obj,e)
        {
        	this.fn_select_order();
        };
        this.fn_select_order = function(){
        	var strSvcID      = "selectGradeListByAdmin";
        	var strURL        = "svc::selectGradeListByAdmin.do";
        	var strInDatasets = "";
        	var strOutDatasets = "ds_list = ds_list"; //이버튼을 눌렀을때
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
            this.addEventHandler("onload",this.Form_Login_onload,this);
        };
        this.loadIncludeScript("Form_Login.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
