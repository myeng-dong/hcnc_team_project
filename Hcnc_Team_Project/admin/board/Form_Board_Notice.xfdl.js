(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Board_Notice");
            this.set_titletext("New Form");
            this.set_color("blue");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_radio", this);
            obj._setContents("<ColumnInfo><Column id=\"BOARD_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_radio_option", this);
            obj._setContents("<ColumnInfo><Column id=\"BOARD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"SORT_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"POST_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"MEMBER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","86","98","656","135",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_border("1px solid blue");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","141","125","280","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Radio00_innerdataset = new nexacro.NormalDataset("Radio00_innerdataset", obj);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"datacolumn\">공지사항</Col></Row><Row><Col id=\"datacolumn\">일반</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","82","263","679","384",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"128\"/><Column size=\"128\"/><Column size=\"128\"/><Column size=\"128\"/><Column size=\"128\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"분류\"/><Cell col=\"2\" text=\"제목\"/><Cell col=\"3\" text=\"작성자\"/><Cell col=\"4\" text=\"작성일\"/></Band><Band id=\"body\"><Cell text=\"bind:SORT_NUMBER\"/><Cell col=\"1\" text=\"bind:BOARD_NAME\"/><Cell col=\"2\" text=\"bind:POST_TITLE\"/><Cell col=\"3\" text=\"bind:MEMBER_ID\"/><Cell col=\"4\" text=\"bind:INPUT_DT\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Radio00","value","ds_radio","BOARD_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Board_Notice.xfdl", function() {
        this.fn_selectBoardCodeByAdmin = function(){
        		var strSvcID = "selectBoardCodeByAdmin";        //트랜잭션 아이디
        		var strURL = "svc::/selectBoardCodeByAdmin.do";  // url controller에서 받을 주소
        		var strInDatasets = "";//프론트에서 서버로 보내는데이터
        		var strOutDatasets = "ds_radio=ds_radio";//서버에서 프론트로 보내는 데이터
        		var strArg = "";
        		var callBack = "fn_callBack";
        		var inAsync = true;

        		this.transaction(strSvcID,strURL,strInDatasets,strOutDatasets,strArg,callBack,inAsync)

        	}

        	this.fn_selectBoardByAdmin = function(){
        		var strSvcID = "selectBoardByAdmin";        //트랜잭션 아이디
        		var strURL = "svc::/selectBoardByAdmin.do";  // url controller에서 받을 주소
        		var strInDatasets = "";//프론트에서 서버로 보내는데이터
        		var strOutDatasets = "ds_list=ds_list";//서버에서 프론트로 보내는 데이터
        		var strArg = "";
        		var callBack = "fn_callBack";
        		var inAsync = true;

        		this.transaction(strSvcID,strURL,strInDatasets,strOutDatasets,strArg,callBack,inAsync)

        	}


        	this.fn_callBack = function(svcID,errorCode, errorMsg){
        	if (errorCode == -1)
        	{
        		this.alert(errorMsg)
        	}
        	switch(svcID){
        	case "selectBoardCodeByAdmin":

        	break;

        	case "selectBoardByAdmin":
        	trace(this.ds_list.saveXML());
        	break;
        		}
        	}
        this.Form_Board_Notice_onload = function(obj,e)
        {
        	this.fn_selectBoardByAdmin();
        };

        this.Static01_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Board_Notice_onload,this);
            this.Static01.addEventHandler("onclick",this.Static01_onclick,this);
            this.Radio00.addEventHandler("onitemchanged",this.Radio00_onitemchanged,this);
        };
        this.loadIncludeScript("Form_Board_Notice.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
