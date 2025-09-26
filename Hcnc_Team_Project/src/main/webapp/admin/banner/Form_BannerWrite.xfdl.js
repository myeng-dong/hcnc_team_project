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
            radio_banner_type_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">main</Col><Col id=\"datacolumn\">메인배너</Col></Row><Row><Col id=\"codecolumn\">top</Col><Col id=\"datacolumn\">탑배너</Col></Row><Row><Col id=\"codecolumn\">popup</Col><Col id=\"datacolumn\">팝업배너</Col></Row></Rows>");
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
            obj = new BindItem("item0","txt_inputid","text","ds_bwrite","INPUT_ID");
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
        this.registerScript("Form_BannerWrite.xfdl", function() {
        this.memberId="";
        // 오늘 날짜 계산
        var objDate = new nexacro.Date();
        var mm = (objDate.getMonth() + 1).toString().padLeft(2, "0");
        var dd = objDate.getDate().toString().padLeft(2, "0");
        var TODAY = objDate.getFullYear() + "." + mm + "." + dd;
        var TODAYNUM = objDate.getFullYear() + mm + dd;

        // 업로드 상태 관리 변수 추가
        this.isUploading = false;
        this.uploadCompleted = false;
        this.currentMode = ""; // 모드를 별도 변수로 관리

        this.Form_BannerWrite_onload = function(obj, e) {
            trace("배너 추가페이지 >>>");

            var memberId = "";
            if (nexacro.getApplication().gds_adminInfo && nexacro.getApplication().gds_adminInfo.rowcount > 0) {
                memberId = nexacro.getApplication().gds_adminInfo.getColumn(0, "MEMBER_ID");
                trace("전역에서 MEMBER_ID 가져옴: " + memberId);
            } else if (this.gds_adminInfo && this.gds_adminInfo.rowcount > 0) {
                memberId = this.gds_adminInfo.getColumn(0, "MEMBER_ID");
                trace("로컬 gds_member에서 MEMBER_ID 가져옴: " + memberId);
            } else {
                // 대안으로 arguments에서 가져오기
                memberId = this.getOwnerFrame.arguments["MEMBER_ID"];
                trace("arguments에서 MEMBER_ID 가져옴: " + memberId);
            }

        	this.memberId = memberId;
            trace("최종 설정된 memberId: " + this.memberId);

            var hasBannerId = false;
            if (this.ds_bwrite.rowcount > 0) {
                var bannerId = this.getOwnerFrame.arguments["BANNER_ID"];
                if (bannerId && bannerId != "" && bannerId != null) {
                    hasBannerId = true;
                }
            }

            // 모드 설정
            this.currentMode = hasBannerId ? "update" : "insert";
            this.mode = this.currentMode; // 기존 변수도 유지

            trace("Dataset rowcount: " + this.ds_bwrite.rowcount);
            trace("BANNER_ID 존재여부: " + hasBannerId);
            trace("설정된 모드: " + this.currentMode);

            if (this.currentMode === "update") {
                trace("Update 모드 - BANNER_ID: " + this.ds_bwrite.getColumn(0, "BANNER_ID"));

                // 수정 시 기존 값 폼에 세팅
                this.input_title.set_text(this.ds_bwrite.getColumn(0, "BANNER_TITLE"));
                this.radio_banner_type.set_value(this.ds_bwrite.getColumn(0, "BANNER_TYPE"));
                this.radio_view_type.set_value(this.ds_bwrite.getColumn(0, "IS_VISIBLE"));
                this.edit_link.set_text(this.ds_bwrite.getColumn(0, "LINKED_URL"));
        		this.input_dt.set_text(this.ds_bwrite.getColumn(0, "INPUT_DT"));
        		this.input_id.set_text(this.ds_bwrite.getColumn(0, "INPUT_ID"));
                this.uploadCompleted = true;
                this.file_name.set_value(this.ds_bwrite.getColumn(0, "IMG_ORIGIN_NAME"));
                this.txt_date_td.set_text(this.ds_bwrite.getColumn(0, "INPUT_DT"));

            } else {
                trace("Insert 모드");
                if (this.ds_bwrite.rowcount === 0) {
                    this.ds_bwrite.addRow();
                }
                this.txt_date_td.set_text(TODAY);
                this.uploadCompleted = false;
            }

            trace("현재 모드 최종 확인: " + this.currentMode);
        };

        // 취소 버튼 클릭
        this.btn_cancel_onclick = function(obj,e) {
            this.getOwnerFrame().set_formurl("banner::Form_BannerList.xfdl");
        };

        // 파일 선택 버튼 클릭
        this.btn_selectFile_onclick = function(obj, e) {
            // 업로드 중이면 파일 선택 금지
            if (this.isUploading) {
                alert("파일 업로드 중입니다. 잠시 후 다시 시도해주세요.");
                return;
            }

            this.FileDialog.open('nexacro17', FileDialog.MULTILOAD);
        };

        // 파일 선택 후 처리
        this.FileDialog_onclose = function(obj, e) {
            var files = e.virtualfiles;
            if (files && files.length > 0) {
                var nexafile = files[files.length - 1];
                trace("선택파일: " + nexafile.filename);

                // 이미지 파일 확장자 검증
                var ext = nexafile.filename.split('.').pop().toLowerCase();
                var allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];
                if (allowedExtensions.indexOf(ext) === -1) {
                    alert("이미지 파일만 업로드 가능합니다. (jpg, jpeg, png, gif)");
                    return;
                }

                // 업로드 상태 설정
                this.isUploading = true;
                this.uploadCompleted = false;

                // Dataset 처리 - 모드 재확인
                var currentMode = this.currentMode || this.mode; // 안전하게 모드 확인
                if (!currentMode) {
                    // 모드가 없으면 Dataset에서 다시 판별
                    var bannerId = this.ds_bwrite.getColumn(0, "BANNER_ID");
                    currentMode = (bannerId && bannerId != "" && bannerId != null) ? "update" : "insert";
                    trace("모드 재설정: " + currentMode);
                }

                // 기존 데이터 백업
                var backupData = {};
                if (currentMode === "update" && this.ds_bwrite.rowcount > 0) {
                    // 수정 모드일 때 기존 데이터 백업
                    backupData.BANNER_ID = this.ds_bwrite.getColumn(0, "BANNER_ID");
                    backupData.INPUT_DT = this.ds_bwrite.getColumn(0, "INPUT_DT");
                    backupData.INPUT_ID = this.ds_bwrite.getColumn(0, "INPUT_ID");
                    backupData.SORT_NUMBER = this.ds_bwrite.getColumn(0, "SORT_NUMBER");
                    backupData.BANNER_TYPE = this.ds_bwrite.getColumn(0, "BANNER_TYPE");
                    backupData.BANNER_TITLE = this.ds_bwrite.getColumn(0, "BANNER_TITLE");
                    backupData.IS_VISIBLE = this.ds_bwrite.getColumn(0, "IS_VISIBLE");
                    backupData.LINKED_URL = this.ds_bwrite.getColumn(0, "LINKED_URL");
                    trace("Update 모드 - 기존 데이터 백업 완료");
                }

                var currentRow = 0;
                if (currentMode === "insert") {
                    // 신규 등록: 기존 Dataset 초기화 후 새 행 추가
                    for (var i = this.ds_bwrite.rowcount - 1; i >= 0; i--) {
                        this.ds_bwrite.deleteRow(i);
                    }
                    currentRow = this.ds_bwrite.addRow();
                } else {
                    // 수정: 기존 행 유지, 이미지 정보만 업데이트
                    currentRow = 0;
                    trace("Update 모드 - 기존 데이터 유지");
                }

                // 파일 정보 설정
                this.ds_bwrite.setColumn(currentRow, "IMG_ORIGIN_NAME", nexafile.filename);

                var attachedName = this.radio_banner_type.value + "_" + nexafile.name + "_" + TODAYNUM + "." + ext;
                this.ds_bwrite.setColumn(currentRow, "IMG_ATTACHED_NAME", attachedName);

                // 수정 모드일 때 백업된 데이터 복원
                if (currentMode === "update" && backupData.BANNER_ID) {
                    this.ds_bwrite.setColumn(currentRow, "BANNER_ID", backupData.BANNER_ID);
                    this.ds_bwrite.setColumn(currentRow, "INPUT_DT", backupData.INPUT_DT);
                    this.ds_bwrite.setColumn(currentRow, "INPUT_ID", backupData.INPUT_ID);
                    this.ds_bwrite.setColumn(currentRow, "SORT_NUMBER", backupData.SORT_NUMBER);
                    this.ds_bwrite.setColumn(currentRow, "BANNER_TYPE", backupData.BANNER_TYPE);
                    this.ds_bwrite.setColumn(currentRow, "BANNER_TITLE", backupData.BANNER_TITLE);
                    this.ds_bwrite.setColumn(currentRow, "IS_VISIBLE", backupData.IS_VISIBLE);
                    this.ds_bwrite.setColumn(currentRow, "LINKED_URL", backupData.LINKED_URL);
                    trace("Update 모드 - 기존 데이터 복원 완료");
                }

                // 모드 재설정
                this.currentMode = currentMode;
                this.mode = currentMode;

                this.file_name.set_value(nexafile.filename);

                // FileUpTransfer 설정
                this.FileUpTransfer.clearFileList();
                this.FileUpTransfer.addFile("bFile", nexafile);
                this.FileUpTransfer.setPostData("attachedName", attachedName);

                this.FileUpTransfer.url = "svc::uploadBannerFile.do";

                trace("파일 업로드 시작 - URL: " + this.FileUpTransfer.url);
                trace("attachedName: " + attachedName);
                trace("현재 모드: " + (this.currentMode || this.mode));  // 안전하게 모드 확인

                this.FileUpTransfer.upload();

            } else {
                this.file_name.set_value("선택된 파일이 없습니다.");
                trace("선택된 파일이 없습니다.");
            }

            trace("ds_bwrite rowcount: " + this.ds_bwrite.rowcount);
        };

        // 완료 버튼 클릭 시 파일 업로드
        this.btn_done_onclick = function(obj, e) {
            trace("=== 완료 버튼 클릭 시작 ===");

            // 업로드 중이면 완료 버튼 비활성화
            if (this.isUploading) {
                alert("파일 업로드 중입니다. 잠시 후 다시 시도해주세요.");
                return;
            }

            // Dataset에 버튼 클릭 시 필요한 컬럼 세팅
            var sortNumber = this.check_top.value ? 1 : 0;
            this.ds_bwrite.setColumn(0, "SORT_NUMBER", sortNumber);
            this.ds_bwrite.setColumn(0, "BANNER_TYPE", this.radio_banner_type.value);
            this.ds_bwrite.setColumn(0, "BANNER_TITLE", this.input_title.text);
            this.ds_bwrite.setColumn(0, "IS_VISIBLE", this.radio_view_type.value);
            this.ds_bwrite.setColumn(0, "LINKED_URL", this.edit_link.text);

            // 현재 상태 확인
            trace("this.currentMode: " + this.currentMode);
            trace("this.mode: " + this.mode);

            // IMG_PATH 확인 및 모드 재확인
            var finalMode = this.currentMode || this.mode;
            if (!finalMode) {
                // 모드가 없으면 Dataset에서 판별
                var bannerId = this.ds_bwrite.getColumn(0, "BANNER_ID");
                trace("BANNER_ID 확인: " + bannerId + " (타입: " + typeof bannerId + ")");
                finalMode = (bannerId && bannerId != "" && bannerId != null && bannerId != "undefined") ? "update" : "insert";
                trace("완료 버튼에서 모드 재설정: " + finalMode);

                // 재설정된 모드 저장
                this.currentMode = finalMode;
                this.mode = finalMode;
            }

            trace("최종 결정된 모드: " + finalMode);

            if (finalMode === "insert" || (finalMode === "update" && !this.uploadCompleted)) {
                var imgPath = this.ds_bwrite.getColumn(0, "IMG_PATH");
                if (!imgPath || !this.uploadCompleted) {
                    alert("이미지 업로드가 완료되지 않았습니다. 잠시 후 다시 시도해주세요.");
                    trace("IMG_PATH가 설정되지 않음 또는 업로드 미완료 - Mode: " + finalMode);
                    return;
                }
            }

            // 입력값 검증
            if (!this.radio_view_type.value || !this.radio_banner_type.value ||
                !this.input_title.text || this.ds_bwrite.rowcount < 1 || !this.edit_link.text) {
                alert("모든 항목을 입력해 주세요.");
                return;
            }

            if(finalMode === "insert"){
                this.ds_bwrite.setColumn(0, "INPUT_ID", this.memberId);
                this.ds_bwrite.setColumn(0, "INPUT_DT", TODAY);
            } else if(finalMode === "update") {
                this.ds_bwrite.setColumn(0, "UPDATE_ID", this.memberId);
                this.ds_bwrite.setColumn(0, "UPDATE_DT", TODAY);
            }

            // 디버그 출력
            trace("=== 완료 버튼 클릭 시 Dataset 값 확인 ===");
            trace("SORT_NUMBER: " + this.ds_bwrite.getColumn(0, "SORT_NUMBER"));
            trace("BANNER_TYPE: " + this.ds_bwrite.getColumn(0, "BANNER_TYPE"));
            trace("BANNER_TITLE: " + this.ds_bwrite.getColumn(0, "BANNER_TITLE"));
            trace("IS_VISIBLE: " + this.ds_bwrite.getColumn(0, "IS_VISIBLE"));
            trace("IMG_ORIGIN_NAME: " + this.ds_bwrite.getColumn(0, "IMG_ORIGIN_NAME"));
            trace("IMG_ATTACHED_NAME: " + this.ds_bwrite.getColumn(0, "IMG_ATTACHED_NAME"));
            trace("IMG_PATH: " + this.ds_bwrite.getColumn(0, "IMG_PATH"));
            trace("LINKED_URL: " + this.ds_bwrite.getColumn(0, "LINKED_URL"));
            trace("BANNER_ID: " + this.ds_bwrite.getColumn(0, "BANNER_ID"));
            trace("INPUT_DT: " + this.ds_bwrite.getColumn(0, "INPUT_DT"));
            trace("INPUT_ID: " + this.ds_bwrite.getColumn(0, "INPUT_ID"));
            trace("UPDATE_DT: " + this.ds_bwrite.getColumn(0, "UPDATE_DT"));
            trace("UPDATE_ID: " + this.ds_bwrite.getColumn(0, "UPDATE_ID"));
            trace("Mode: " + finalMode);

            if(finalMode === "insert"){
                this.fnInsertBanner();
            } else {
                this.fnUpdateBanner();
            }
        };

        // FileUpTransfer 콜백 (진행 중)
        this.FileUpTransfer_onprogress = function(obj, e) {
            trace("업로드 진행: " + e.loaded + "/" + e.total);
        };

        // FileUpTransfer 업로드 성공 시 서버 전송
        this.FileUpTransfer_onsuccess = function(obj, e) {
            trace("FileUpTransfer 업로드 성공 콜백 시작");

            // 중복 호출 방지
            if (this.uploadCompleted) {
                trace("이미 업로드 완료됨, 중복 콜백 무시");
                return;
            }

            // 기본적인 속성만 확인
            trace("e.datasets 존재: " + (e.datasets ? "YES" : "NO"));
            trace("e.variables 존재: " + (e.variables ? "YES" : "NO"));

            var imgPath = null;

            // Dataset 방식으로 시도
            if (e.datasets) {
                // 가능한 Dataset 이름들 확인
                for (var dsName in e.datasets) {
                    trace("Dataset 발견: " + dsName);
                    var ds = e.datasets[dsName];
                    if (ds && ds.getRowCount && ds.getRowCount() > 0) {
                        // IMG_PATH 컬럼 찾기
                        for (var colIdx = 0; colIdx < ds.getColCount(); colIdx++) {
                            var colName = ds.getColID(colIdx);
                            if (colName === "IMG_PATH") {
                                imgPath = ds.getColumn(0, "IMG_PATH");
                                trace("Dataset(" + dsName + ")에서 IMG_PATH: " + imgPath);
                                break;
                            }
                        }
                        if (imgPath) break;
                    }
                }
            }

            // Variable 방식으로 시도
            if (!imgPath && e.variables && e.variables["IMG_PATH"]) {
                imgPath = e.variables["IMG_PATH"];
                trace("Variable에서 IMG_PATH: " + imgPath);
            }

            // 둘 다 안되면 직접 구성
            if (!imgPath && this.ds_bwrite.rowcount > 0) {
                var attachedName = this.ds_bwrite.getColumn(0, "IMG_ATTACHED_NAME");
                if (attachedName) {
                    imgPath = "/upload/banner/" + attachedName;
                    trace("직접 구성한 IMG_PATH: " + imgPath);
                }
            }

            // IMG_PATH 설정
            if (imgPath && this.ds_bwrite.rowcount > 0) {
                this.ds_bwrite.setColumn(0, "IMG_PATH", imgPath);
                trace("ds_bwrite에 IMG_PATH 설정 완료: " + imgPath);

                // 업로드 완료 상태 설정
                this.uploadCompleted = true;
                this.isUploading = false;

            } else {
                trace("IMG_PATH 설정 실패");
                this.isUploading = false;
            }

            trace("FileUpTransfer_onsuccess 완료");
        };

        // 업로드 실패 시 처리
        this.FileUpTransfer_onerror = function(obj, e) {
            trace("업로드 실패: msg=" + e.errormsg + ", status=" + e.statuscode);

            // 업로드 실패 시 상태 초기화
            this.isUploading = false;
            this.uploadCompleted = false;

            alert("파일 업로드에 실패했습니다: " + e.errormsg);
        };

        // 서버 전송 - insert
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

        // 서버 전송 - update (수정된 함수명과 파라미터)
        this.fnUpdateBanner = function() {
            var strSvcID = "updateBanner";
            var strURL = "svc::updateBannerByAdmin.do";
            var strInDatasets = "ds_bwrite=ds_bwrite";
            var strOutDatasets = ""; // update는 보통 결과 데이터를 받아올 필요 없음
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
                    this.getOwnerFrame().set_formurl("banner::Form_BannerList.xfdl");
                    break;
                case "updateBanner":
                    alert("배너 수정 완료");
                    this.getOwnerFrame().set_formurl("banner::Form_BannerList.xfdl");
                    break;
            }
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_BannerWrite_onload,this);
            this.btn_done.addEventHandler("onclick",this.btn_done_onclick,this);
            this.btn_cancle.addEventHandler("onclick",this.btn_cancle_onclick,this);
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
            this.FileUpTransfer.addEventHandler("onerror",this.FileUpTransfer_onerror,this);
            this.FileUpTransfer.addEventHandler("onprogress",this.FileUpTransfer_onprogress,this);
            this.FileUpTransfer.addEventHandler("onsuccess",this.FileUpTransfer_onsuccess,this);
        };
        this.loadIncludeScript("Form_BannerWrite.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
