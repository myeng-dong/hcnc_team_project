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
            obj._setContents("<ColumnInfo><Column id=\"BANNER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BANNER_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"BANNER_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"IMG_ORIGIN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"IMG_ATTACHED_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"IMG_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"IS_VISIBLE\" type=\"STRING\" size=\"256\"/><Column id=\"LINKED_URL\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_DT\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_radio_view_type", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_view_top", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_banner_type", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_file", this);
            obj._setContents("<ColumnInfo><Column id=\"IMG_ORIGIN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"IMG_ATTACHED_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"IMG_PATH\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stat_bg","40","40",null,"520","40",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#ffffff");
            obj.set_borderRadius("10px");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_done",null,"582","140","48","40",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("저장");
            obj.set_background("#135dae");
            obj.set_color("#ffffff");
            obj.set_borderRadius("5px");
            obj.set_border("0px none");
            obj.set_font("normal bold 10pt/normal \"Noto Sans KR Medium\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancle","40","580","140","48",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("취소");
            obj.set_background("#ffffff");
            obj.set_color("#ff3d3d");
            obj.set_borderRadius("5px");
            obj.set_border("1px solid #ff3d3d");
            obj.set_font("normal bold 10pt/normal \"Noto Sans KR Medium\"");
            this.addChild(obj.name, obj);

            obj = new Static("txt_th","80","116","100","36",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("노출여부");
            obj.set_font("normal 12pt/normal \"Noto Sans KR Black\"");
            obj.set_color("#a3aed0");
            this.addChild(obj.name, obj);

            obj = new Static("txt_thbanner","80","278","100","36",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("배너타입");
            obj.set_font("normal 12pt/normal \"Noto Sans KR Black\"");
            obj.set_color("#a3aed0");
            this.addChild(obj.name, obj);

            obj = new Static("txt_thtitle","80","330","100","36",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("배너 제목");
            obj.set_font("normal 12pt/normal \"Noto Sans KR Black\"");
            obj.set_color("#a3aed0");
            this.addChild(obj.name, obj);

            obj = new Static("txt_th_file","80","446","100","36",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("첨부파일");
            obj.set_font("normal 12pt/normal \"Noto Sans KR Black\"");
            obj.set_color("#a3aed0");
            this.addChild(obj.name, obj);

            obj = new Static("txt_date","80","224","100","36",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("등록일");
            obj.set_font("normal 12pt/normal \"Noto Sans KR Black\"");
            obj.set_color("#a3aed0");
            this.addChild(obj.name, obj);

            obj = new Static("txt_th_link","80","388","100","36",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("링크");
            obj.set_font("normal 12pt/normal \"Noto Sans KR Black\"");
            obj.set_color("#a3aed0");
            this.addChild(obj.name, obj);

            obj = new Edit("input_title","200","332",null,"44","100",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_border("1px solid #cccccc");
            obj.set_borderRadius("5px");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_link","200","386",null,"44","100",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_borderRadius("5px");
            obj.set_border("1px solid #cccccc");
            this.addChild(obj.name, obj);

            obj = new Static("txt_date_td","200","224","120","36",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("YYYY.mm.dd");
            obj.set_font("normal 14pt/normal \"Noto Sans KR\"");
            this.addChild(obj.name, obj);

            obj = new Static("txt_date00","80","62","100","36",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("상위노출");
            obj.set_font("normal 12pt/normal \"Noto Sans KR Black\"");
            obj.set_color("#a3aed0");
            this.addChild(obj.name, obj);

            obj = new Static("txt_update_dt","630","224","120","36",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("수정일");
            obj.set_font("normal 12pt/normal \"Noto Sans KR Black\"");
            obj.set_color("#a3aed0");
            this.addChild(obj.name, obj);

            obj = new Static("txt_date_td00","750","224","372","36",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("-");
            obj.set_font("normal 14pt/normal \"Noto Sans KR\"");
            this.addChild(obj.name, obj);

            obj = new Static("txt_date02","80","171","100","36",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("작성자");
            obj.set_font("normal 12pt/normal \"Noto Sans KR Black\"");
            obj.set_color("#a3aed0");
            this.addChild(obj.name, obj);

            obj = new Static("txt_inputid","200","171","250","36",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("inputid는 로그인한거");
            obj.set_font("normal 14pt/normal \"Noto Sans KR\"");
            this.addChild(obj.name, obj);

            obj = new Static("txt_date01_00","628","171","120","36",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("최종작성자");
            obj.set_font("normal 12pt/normal \"Noto Sans KR Black\"");
            obj.set_color("#a3aed0");
            this.addChild(obj.name, obj);

            obj = new Static("txt_updateid","748","171","372","36",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("-");
            obj.set_font("normal 14pt/normal \"Noto Sans KR\"");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","80","160",null,"1","80",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("Div00");
            obj.set_background("#f5f5f5");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","80","105",null,"1","80",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("Div01");
            obj.set_background("#f5f5f5");
            this.addChild(obj.name, obj);

            obj = new Div("Div02","80","215",null,"1","80",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("Div02");
            obj.set_background("#f5f5f5");
            this.addChild(obj.name, obj);

            obj = new Div("Div03","80","270",null,"1","80",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("Div03");
            obj.set_background("#f5f5f5");
            this.addChild(obj.name, obj);

            obj = new Div("Div04","80","325",null,"1","80",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("Div04");
            obj.set_background("#f5f5f5");
            this.addChild(obj.name, obj);

            obj = new Div("Div05","80","380",null,"1","80",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("Div05");
            obj.set_background("#f5f5f5");
            this.addChild(obj.name, obj);

            obj = new Div("Div06","80","435",null,"1","80",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("Div06");
            obj.set_background("#f5f5f5");
            this.addChild(obj.name, obj);

            obj = new Radio("radio_view_type","200","120","200","31",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_font("normal 12pt/normal \"Noto Sans KR Medium\"");
            var radio_view_type_innerdataset = new nexacro.NormalDataset("radio_view_type_innerdataset", obj);
            radio_view_type_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">출력</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">미출력</Col></Row></Rows>");
            obj.set_innerdataset(radio_view_type_innerdataset);
            obj.set_text("출력");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new CheckBox("check_top","200","62","190","38",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("체크시 우선 노출");
            obj.set_font("normal 12pt/normal \"Noto Sans KR Medium\"");
            this.addChild(obj.name, obj);

            obj = new Radio("radio_banner_type","200","281","560","31",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_direction("vertical");
            obj.set_font("normal 12pt/normal \"Noto Sans KR Medium\"");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var radio_banner_type_innerdataset = new nexacro.NormalDataset("radio_banner_type_innerdataset", obj);
            radio_banner_type_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">popup</Col><Col id=\"datacolumn\">팝업배너</Col></Row></Rows>");
            obj.set_innerdataset(radio_banner_type_innerdataset);
            obj.set_text("메인배너");
            obj.set_value("main");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_selectFile",null,"443","140","44","100",null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("파일찾기");
            obj.set_background("#135dae");
            obj.set_border("0px none");
            obj.set_borderRadius("5px");
            obj.set_color("#ffffff");
            obj.set_font("normal 10pt/normal \"Noto Sans KR Black\"");
            this.addChild(obj.name, obj);

            obj = new TextArea("file_name","200","444",null,"43","250",null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_borderRadius("5px");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","txt_inputid","text","gds_menu","MEMBER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","file_name","value","ds_file","IMG_ORIGIN_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","check_top","enable","ds_view_top","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","check_top","truevalue","ds_view_top","1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","check_top","falsevalue","ds_view_top","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","check_top","text","ds_view_top","");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_PopupWrite.xfdl", function() {
        // 오늘 날짜 계산
        var objDate = new nexacro.Date();
        var mm = (objDate.getMonth() + 1).toString().padLeft(2, "0");
        var dd = objDate.getDate().toString().padLeft(2, "0");
        var TODAY = objDate.getFullYear() + "." + mm + "." + dd;

        this.Form_BannerWrite_onload = function(obj, e) {
            trace("배너 추가페이지 >>>");
            this.txt_date_td.set_text(TODAY);

        };

        // 취소 버튼 클릭
        this.btn_cancel_onclick = function(obj, e) {
            nexacro.WorkFrame.set_formurl("banner::Form_BannerList.xfdl");
        };

        // 파일 선택 버튼 클릭
        this.btn_selectFile_onclick = function(obj, e) {
            this.FileDialog.open('nexacro17', FileDialog.MULTILOAD);
        };

        // 파일 선택 후 처리
        this.FileDialog_onclose = function(obj, e) {
            var files = e.virtualfiles;
            if (files && files.length > 0) {
                var nexafile = files[files.length - 1];
                trace("선택파일: " + nexafile.filename + " / " + nexafile.size);

                for (var i = this.ds_bwrite.rowcount - 1; i >= 0; i--) {
                    this.ds_bwrite.deleteRow(i);
                }

                var row = this.ds_bwrite.addRow();
                this.ds_bwrite.setColumn(row, "IMG_ORIGIN_NAME", nexafile.filename);
                this.ds_bwrite.setColumn(row, "IMG_ATTACHED_NAME", nexafile.name); // 업로드 시 서버명으로 변경 가능
                this.ds_bwrite.setColumn(row, "IMG_PATH", "");

                this.file_name.set_value(nexafile.filename);

                this.FileUpTransfer.clearFileList();
                this.FileUpTransfer.addFile("file", nexafile);
            } else {
                this.file_name.set_value("선택된 파일이 없습니다.");
                trace("선택된 파일이 없습니다.");
            }
            trace("ds_bwrite rowcount: " + this.ds_bwrite.rowcount);
        };

        // 확정 버튼 클릭
        this.btn_done_onclick = function(obj, e) {
        	var sortNumber = this.check_top.value ? 1 : 0;
        	this.ds_bwrite.setColumn(0, "SORT_NUMBER", sortNumber);
            this.ds_bwrite.setColumn(0, "BANNER_TYPE", this.radio_banner_type.value);
            this.ds_bwrite.setColumn(0, "BANNER_TITLE", this.input_title.text);
            this.ds_bwrite.setColumn(0, "IS_VISIBLE", this.radio_view_type.value);
            this.ds_bwrite.setColumn(0, "LINKED_URL", this.edit_link.text);
        /*	this.ds_bwrite.setColumn(0,"INPUT_ID", this.gds_adminInfo.getColumn(0, "MEMBER_ID"));*/
        	this.ds_bwrite.setColumn(0,"INPUT_DT", TODAY);
        // 	if (this.gds_adminInfo && this.gds_adminInfo.rowcount > 0) {
        // 		let MEMBER_ID = this.gds_adminInfo.getColumn(0, "MEMBER_ID");
        //
        // 		this.ds_bwrite.setColumn(0, BANNER_ID ? "UPDATE_ID" : "INPUT_ID", MEMBER_ID);
        //         this.ds_bwrite.setColumn(0, BANNER_ID ? "UPDATE_DT" : "INPUT_DT", TODAY);
        // 	} else {
        // 		alert("관리자 정보가 없습니다.");
        // 		return;
        // 	}

            trace("radio_view_type: " + this.radio_view_type.value);
            trace("radio_banner_type: " + this.radio_banner_type.value);
            trace("input_title: " + this.input_title.text);
            trace("edit_link: " + this.edit_link.text);
            trace("파일 개수: " + this.ds_bwrite.rowcount);

            if (!this.radio_view_type.value || !this.radio_banner_type.value ||
                !this.input_title.text || this.ds_bwrite.rowcount < 1 || !this.edit_link.text) {
                alert("모든 항목을 입력해 주세요.");
                return;
            }

            this.FileUpTransfer.upload();
        	this.fnInsertBanner();
        //
        //     BANNER_ID ? this.fnUpdateBanner() : this.fnInsertBanner();
        };

        // FileUpTransfer 콜백
        this.FileUpTransfer_onprogress = function(obj, e) {
            trace("업로드 진행: " + e.loaded + "/" + e.total);
        };

        this.FileUpTransfer_onsuccess = function(obj, e) {
            trace("업로드 성공: code=" + e.code + ", msg=" + e.message);
        };

        this.FileUpTransfer_onerror = function(obj, e) {
            trace("업로드 실패: msg=" + e.errormsg + ", status=" + e.statuscode);
        };

        // 서버 전송 - 하나만쓸때용
        this.fnInsertBanner = function() {
            var strSvcID = "insertBanner";
            var strURL = "svc::insertBannerByAdmin.do";
            var strInDatasets = "ds_bwrite=ds_bwrite";
            var strOutDatasets = "";
            var strArg = "";
            var strCallback = "fnCallback";

            this.transaction(strSvcID, strURL, strInDatasets, strOutDatasets, strArg, strCallback);
            trace(strSvcID + " : 배너 insert 요청 >>>");
        };

         this.fnUpdateBanner = function() {
             var strSvcID = "updateBanner";
             var strURL = "svc::updateBannerByAdmin.do";
             var strInDatasets = "ds_bwrite=ds_bwrite";
             var strOutDatasets = "ds_bwrite=ds_bwrite";
             var strArg = "";
             var strCallback = "fnCallback";

             this.transaction(strSvcID, strURL, strInDatasets, strOutDatasets, strArg, strCallback);
             trace(strSvcID + " : 배너 update 요청 >>>");
         };


        // 서버 콜백
        this.fnCallback = function(svc, err, errMsg) {
            if (err < 0) {
                alert("에러 발생: " + errMsg);
                return;
            }
            switch(svc) {
                case "insertBanner":
                    alert("배너 등록 완료");
                    nexacro.WorkFrame.set_formurl("banner::Form_BannerList.xfdl");
                    break;
         		case "updateBanner":
                     alert("배너 수정 완료");
                     nexacro.WorkFrame.set_formurl("banner::Form_BannerList.xfdl");
                     break;
            }
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_BannerWrite_onload,this);
            this.btn_done.addEventHandler("onclick",this.btn_done_onclick,this);
            this.txt_thbanner.addEventHandler("onclick",this.txt_th00_onclick,this);
            this.txt_thtitle.addEventHandler("onclick",this.txt_th00_onclick,this);
            this.txt_th_file.addEventHandler("onclick",this.txt_th00_onclick,this);
            this.txt_date.addEventHandler("onclick",this.txt_th00_onclick,this);
            this.txt_th_link.addEventHandler("onclick",this.txt_th00_onclick,this);
            this.txt_date_td.addEventHandler("onclick",this.txt_th00_onclick,this);
            this.txt_date00.addEventHandler("onclick",this.txt_th00_onclick,this);
            this.txt_update_dt.addEventHandler("onclick",this.txt_th00_onclick,this);
            this.txt_date_td00.addEventHandler("onclick",this.txt_th00_onclick,this);
            this.txt_date02.addEventHandler("onclick",this.txt_th00_onclick,this);
            this.txt_inputid.addEventHandler("onclick",this.txt_th00_onclick,this);
            this.txt_date01_00.addEventHandler("onclick",this.txt_th00_onclick,this);
            this.txt_updateid.addEventHandler("onclick",this.txt_th00_onclick,this);
            this.radio_banner_type.addEventHandler("onitemchanged",this.radio_banner_type_onitemchanged,this);
            this.btn_selectFile.addEventHandler("onclick",this.btn_selectFile_onclick,this);
            this.FileDialog.addEventHandler("onclose",this.FileDialog_onclose,this);
            this.FileUpTransfer.addEventHandler("onprogress",this.FileUpTransfer_onprogress,this);
            this.FileUpTransfer.addEventHandler("onsuccess",this.FileUpTransfer_onsuccess,this);
            this.FileUpTransfer.addEventHandler("onerror",this.FileUpTransfer_onerror,this);
        };
        this.loadIncludeScript("Form_PopupWrite.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
