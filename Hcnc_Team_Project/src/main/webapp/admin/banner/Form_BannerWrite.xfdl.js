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
            obj._setContents("<ColumnInfo><Column id=\"BANNER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BANNER_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"BANNER_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"IMG_ORIGIN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"IMG_ATTACHED_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"IMG_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"IS_VISIBLE\" type=\"STRING\" size=\"256\"/><Column id=\"LINKED_URL\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_DT\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Static("txt_thbanner","90","150","120","36",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("배너타입");
            obj.set_font("normal 14pt/normal \"Noto Sans KR Black\"");
            this.addChild(obj.name, obj);

            obj = new Static("txt_thtitle","90","230","120","36",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("배너 제목");
            obj.set_font("normal 14pt/normal \"Noto Sans KR Black\"");
            this.addChild(obj.name, obj);

            obj = new Static("txt_th_file","100","316","120","36",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("첨부파일");
            obj.set_font("normal 14pt/normal \"Noto Sans KR Black\"");
            this.addChild(obj.name, obj);

            obj = new Static("txt_date","660","154","120","36",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("등록일");
            obj.set_font("normal 14pt/normal \"Noto Sans KR Black\"");
            this.addChild(obj.name, obj);

            obj = new Static("txt_th_link","100","442","120","36",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("링크");
            obj.set_font("normal 14pt/normal \"Noto Sans KR Black\"");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_visible_type","220","62","180","48",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("노출");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Edit("f","215","225","950","48",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_link","220","432","950","48",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new FileUpload("fileup_img","210","306","955","34",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Radio("radio_banner_type","215","141","55","55",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Button("btn_done",null,"532","140","48","40",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("저장");
            obj.set_background("#1017ac");
            obj.set_color("#ffffff");
            obj.set_borderRadius("5px");
            obj.set_border("0px none");
            obj.set_font("normal bold 10pt/normal \"Noto Sans KR Medium\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancle",null,"530","140","48","1100",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("취소");
            obj.set_background("#ffffff");
            obj.set_color("#ff3d3d");
            obj.set_borderRadius("5px");
            obj.set_border("1px solid #ff3d3d");
            obj.set_font("normal bold 10pt/normal \"Noto Sans KR Medium\"");
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

        this.Form_BannerWrite_onload = function(obj,e)
        {

        };

        // 파일 선택 버튼 따로 없음 → fileup_img 자체를 클릭해서 선택 가능
        // 만약 별도 버튼으로 파일 선택을 하고 싶다면 btn_cancle 자리에 onClick 이벤트 연결 가능

        // FileDialog 추가 필요 (FDL에 없음 → New > FileDialog 삽입 후 ID를 FileDialog_img로 설정해야 함)
        this.FileDialog_img_onclose = function(obj, e)
        {
            this.addFileList(e.virtualfiles);
        };

        // 선택한 파일 목록 추가
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

        // 파일 상세정보
        this.FileList_onsuccess = function(obj, e)
        {
            switch (e.reason)
            {
                case 1:
                    obj.getFileSize();
                    break;
                case 9:
                    var nRowIdx = this.ds_bwrite.addRow();
                    this.ds_bwrite.setColumn(nRowIdx, "filename", obj.filename);
                    this.ds_bwrite.setColumn(nRowIdx, "filesize", this.cutFileSize(e.filesize));
                    this.fileup_img.addFile(obj.filename, obj);
                    break;
            }
        }

        this.FileList_onerror = function(obj, e)
        {
            trace("errortype: "+e.errortype);
            trace("errormsg: "+e.errormsg);
            trace("statuscode: "+e.statuscode);
        }

        // 파일 사이즈 단위 변환
        this.cutFileSize = function(filesize)
        {
            var sOutput = filesize + " bytes";
            for (var aMultiples = ["KB", "MB", "GB", "TB"], nMultiple = 0, nApprox = filesize / 1024; nApprox > 1; nApprox /= 1024, nMultiple++)
            {
                sOutput = nApprox.toFixed(3) + " " + aMultiples[nMultiple];
            }
            return sOutput;
        }

        // 저장 버튼 눌렀을 때 업로드 실행
        this.btn_done_onclick = function(obj, e)
        {
            this.fileup_img.upload('http://demo.nexacro.com/developer_guide/17/Service/fileupload.jsp');
        };

        // 업로드 진행상황
        this.fileup_img_onprogress = function(obj, e)
        {
            trace(e.loaded+"/"+e.total);
        };

        // 업로드 성공
        this.fileup_img_onsuccess = function(obj, e)
        {
            trace(e.code);
            trace(e.message);
        };

        // 업로드 실패
        this.fileup_img_onerror = function(obj, e)
        {
            trace(e.errormsg);
            trace(e.statuscode);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_BannerWrite_onload,this);
            this.txt_thbanner.addEventHandler("onclick",this.txt_th00_onclick,this);
            this.txt_thtitle.addEventHandler("onclick",this.txt_th00_onclick,this);
            this.txt_th_file.addEventHandler("onclick",this.txt_th00_onclick,this);
            this.txt_date.addEventHandler("onclick",this.txt_th00_onclick,this);
            this.txt_th_link.addEventHandler("onclick",this.txt_th00_onclick,this);
            this.fileup_img.addEventHandler("onitemchanged",this.FileUpload00_onitemchanged,this);
            this.btn_done.addEventHandler("onclick",this.btn_write_onclick,this);
            this.btn_cancle.addEventHandler("onclick",this.btn_write_onclick,this);
        };
        this.loadIncludeScript("Form_BannerWrite.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
