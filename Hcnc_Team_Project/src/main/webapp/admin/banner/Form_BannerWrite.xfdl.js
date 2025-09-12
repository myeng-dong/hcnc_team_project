(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_BannerWrite");
            this.set_titletext("New Form");
            this.set_background("#F4F7FE");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_bwrite", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stat_bg","40","40",null,"470","40",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#ffffff");
            obj.set_borderRadius("10px");
            this.addChild(obj.name, obj);

            obj = new Static("txt_th","90","74","120","36",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("노출여부");
            obj.set_font("normal 14pt/normal \"Noto Sans KR Black\"");
            this.addChild(obj.name, obj);

            obj = new Static("txt_th00","90","150","120","36",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("배너타입");
            obj.set_font("normal 14pt/normal \"Noto Sans KR Black\"");
            this.addChild(obj.name, obj);

            obj = new Static("txt_th00_00","90","230","120","36",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("배너 제목");
            obj.set_font("normal 14pt/normal \"Noto Sans KR Black\"");
            this.addChild(obj.name, obj);

            obj = new Static("txt_th00_00_00","100","316","120","36",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("첨부파일");
            obj.set_font("normal 14pt/normal \"Noto Sans KR Black\"");
            this.addChild(obj.name, obj);

            obj = new Static("txt_th00_00_00_00","660","154","120","36",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("등록일");
            obj.set_font("normal 14pt/normal \"Noto Sans KR Black\"");
            this.addChild(obj.name, obj);

            obj = new Static("txt_th00_00_00_00_00","100","442","120","36",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("링크");
            obj.set_font("normal 14pt/normal \"Noto Sans KR Black\"");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","220","62","180","48",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","215","225","950","48",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","220","320","950","48",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","220","146","180","48",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_BannerWrite.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	this.FileDialog00.open('nexacro17', FileDialog.MULTILOAD);
        };

        this.FileDialog00_onclose = function(obj,e)
        {
        	this.addFileList(e.virtualfiles);
        };

        this.addFileList = function(filelist)
        {
        	for (var i = 0, len = filelist.length, vFile; i < len; i++)
        	{
        		vFile = filelist[i];
        		vFile.addEventHandler("onsuccess", this.FileList_onsuccess, this);
        		vFile.addEventHandler("onerror", this.FileList_onerror , this);

        		vFile.open(null, 1);
        	}
        }

        this.FileList_onsuccess = function(obj, e)
        {
        	switch (e.reason)
        	{
        		case 1:
        			obj.getFileSize();
        			break;
        		case 9:
        			var nRowIdx = this.Dataset00.addRow();
        			this.Dataset00.setColumn(nRowIdx, 0, obj.filename);
        			this.Dataset00.setColumn(nRowIdx, 1, this.cutFileSize(e.filesize));
        			this.FileUpTransfer00.addFile(obj.filename, obj);
        			break;
        	}
        }

        this.FileList_onerror = function(obj, e)
        {
        	trace("errortype: "+e.errortype);
        	trace("errormsg: "+e.errormsg);
        	trace("statuscode: "+e.statuscode);
        }

        // https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications#Example_Showing_file(s)_size
        this.cutFileSize = function(filesize)
        {
        	var sOutput = filesize + " bytes";
        	for (var aMultiples = ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], nMultiple = 0, nApprox = filesize / 1024; nApprox > 1; nApprox /= 1024, nMultiple++)
        	{
        		sOutput = nApprox.toFixed(3) + " " + aMultiples[nMultiple];
        	}
        	return sOutput;
        };
        this.Grid00_ondragenter = function(obj,e)
        {
        	if(e.datatype == "file")
        	{
        		this.Grid00.set_opacity(0.5);
        	}
        };

        this.Grid00_ondragleave = function(obj,e)
        {
        	this.Grid00.set_opacity(1);
        };

        this.Grid00_ondrop = function(obj,e)
        {
        	this.Grid00.set_opacity(1);
        	if(e.datatype == "file")
        	{
        		this.addFileList(e.filelist);
        	}
        };

        this.Button01_onclick = function(obj,e)
        {
        	this.TextArea00.set_value("");
        	this.FileUpTransfer00.upload('http://demo.nexacro.com/developer_guide/17/Service/fileupload.jsp');
        };

        this.FileUpTransfer00_onprogress = function(obj,e)
        {
        	this.fn_addlog(e.loaded+"/"+e.total);
        };

        this.FileUpTransfer00_onsuccess = function(obj,e)
        {
        	this.fn_addlog(e.code);
        	this.fn_addlog(e.message);
        };

        this.FileUpTransfer00_onerror = function(obj,e)
        {
        	this.fn_addlog(e.errormsg);
        	this.fn_addlog(e.statuscode);
        };

        this.fn_addlog = function(strMessage)
        {
        	this.TextArea00.insertText(strMessage + '\n');

        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.txt_th00.addEventHandler("onclick",this.txt_th00_onclick,this);
            this.txt_th00_00.addEventHandler("onclick",this.txt_th00_onclick,this);
            this.txt_th00_00_00.addEventHandler("onclick",this.txt_th00_onclick,this);
            this.txt_th00_00_00_00.addEventHandler("onclick",this.txt_th00_onclick,this);
            this.txt_th00_00_00_00_00.addEventHandler("onclick",this.txt_th00_onclick,this);
        };
        this.loadIncludeScript("Form_BannerWrite.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
