(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_ProductCate");
            this.set_titletext("카테고리관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_mainCate", this);
            obj._setContents("<ColumnInfo><Column id=\"MAIN_CATE_ID\" type=\"INT\"/><Column id=\"MAIN_CATE_NM\" type=\"STRING\"/><Column id=\"SORT_NUMBER\" type=\"INT\"/><Column id=\"IS_ACTIVE\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_subCate", this);
            obj._setContents("<ColumnInfo><Column id=\"SUB_CATE_ID\" type=\"INT\"/><Column id=\"MAIN_CATE_ID\" type=\"INT\"/><Column id=\"SUB_CATE_NM\" type=\"STRING\"/><Column id=\"SORT_NUMBER\" type=\"INT\"/><Column id=\"IS_ACTIVE\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_in", this);
            obj._setContents("<ColumnInfo><Column id=\"TYPE\" type=\"STRING\"/><Column id=\"MAIN_CATE_ID\" type=\"INT\"/><Column id=\"SUB_CATE_ID\" type=\"INT\"/><Column id=\"MAIN_CATE_NM\" type=\"STRING\"/><Column id=\"SUB_CATE_NM\" type=\"STRING\"/><Column id=\"SORT_NUMBER\" type=\"INT\"/><Column id=\"IS_ACTIVE\" type=\"STRING\"/><Column id=\"INPUT_ID\" type=\"STRING\"/><Column id=\"UPDATE_ID\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_category", this);
            obj._setContents("<ColumnInfo><Column id=\"cate_id\" type=\"string\"/><Column id=\"parent_id\" type=\"string\"/><Column id=\"cate_name\" type=\"string\"/><Column id=\"level\" type=\"int\"/><Column id=\"expanded\" type=\"string\"/><Column id=\"type\" type=\"string\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_goProduct","10","10","100","35",null,null,null,null,null,null,this);
            obj.set_text("상품목록");
            obj.set_background("#b3e5ff");
            obj.set_color("#000000");
            obj.set_font("bold 10pt \'Gulim\'");
            obj.set_borderRadius("8px");
            obj.set_border("1px solid #90caf9");
            this.addChild(obj.name, obj);

            obj = new Button("btn_goDisplay","120","10","100","35",null,null,null,null,null,null,this);
            obj.set_text("상품진열");
            obj.set_background("#b3e5ff");
            obj.set_color("#000000");
            obj.set_font("bold 10pt \'Gulim\'");
            obj.set_borderRadius("8px");
            obj.set_border("1px solid #90caf9");
            this.addChild(obj.name, obj);

            obj = new Button("btn_goProductReg","230","10","100","35",null,null,null,null,null,null,this);
            obj.set_text("상품등록");
            obj.set_background("#b3e5ff");
            obj.set_color("#000000");
            obj.set_font("bold 10pt \'Gulim\'");
            obj.set_borderRadius("8px");
            obj.set_border("1px solid #90caf9");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_category","10","60","500","650",null,null,null,null,null,null,this);
            obj.set_binddataset("ds_category");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"370\"/></Columns><Rows><Row size=\"28\"/></Rows><Band id=\"body\"><Cell col=\"0\" text=\"expr:(type==&apos;main&apos; ? (expanded==&apos;Y&apos; ? &apos;-&apos; : &apos;+&apos;) : &apos;&apos;)\" textAlign=\"center\"/><Cell col=\"1\" text=\"expr:(level==0 ? cate_name : &apos;   &apos; + cate_name)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_detail","530","60","730","650",null,null,null,null,null,null,this);
            obj.set_background("#ffffff");
            obj.set_border("1px solid #90caf9");
            obj.set_borderRadius("12px");
            obj.getSetter("padding").set("15px");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","20","20",null,null,null,null,null,null,null,null,this.div_detail.form);
            obj.set_text("상세정보");
            obj.set_font("bold 14pt \'Gulim\'");
            obj.set_color("#000000");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("sta_current","20","60","100","25",null,null,null,null,null,null,this.div_detail.form);
            obj.set_text("ID");
            obj.set_font("10pt \'Gulim\'");
            obj.set_color("#000000");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("sta_idValue","140","60","200","25",null,null,null,null,null,null,this.div_detail.form);
            obj.set_text("자동생성");
            obj.set_font("10pt \'Gulim\'");
            obj.set_color("#666666");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("sta_name","20","100","100","25",null,null,null,null,null,null,this.div_detail.form);
            obj.set_text("분류명");
            obj.set_font("10pt \'Gulim\'");
            obj.set_color("#000000");
            this.div_detail.addChild(obj.name, obj);

            obj = new Edit("edt_cateName","140","100","400","25",null,null,null,null,null,null,this.div_detail.form);
            obj.set_border("1px solid #90caf9");
            obj.set_borderRadius("6px");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("sta_sort","20","140","100","25",null,null,null,null,null,null,this.div_detail.form);
            obj.set_text("정렬순번");
            obj.set_font("10pt \'Gulim\'");
            obj.set_color("#000000");
            this.div_detail.addChild(obj.name, obj);

            obj = new Edit("edt_sort","140","140","100","25",null,null,null,null,null,null,this.div_detail.form);
            obj.set_border("1px solid #90caf9");
            obj.set_borderRadius("6px");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("sta_display","20","180","100","25",null,null,null,null,null,null,this.div_detail.form);
            obj.set_text("진열상태");
            obj.set_font("10pt \'Gulim\'");
            obj.set_color("#000000");
            this.div_detail.addChild(obj.name, obj);

            obj = new Radio("rdo_display","140","175","359","35",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("10");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_font("10pt \'Gulim\'");
            obj.set_color("#000000");
            var div_detail_form_rdo_display_innerdataset = new nexacro.NormalDataset("div_detail_form_rdo_display_innerdataset", obj);
            div_detail_form_rdo_display_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">진열함</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">진열안함</Col></Row></Rows>");
            obj.set_innerdataset(div_detail_form_rdo_display_innerdataset);
            obj.set_text("진열함");
            obj.set_value("Y");
            obj.set_index("0");
            this.div_detail.addChild(obj.name, obj);

            obj = new Button("btn_saveDetail","140","230","100","30",null,null,null,null,null,null,this.div_detail.form);
            obj.set_text("저장");
            obj.set_background("#90caf9");
            obj.set_color("#ffffff");
            obj.set_font("bold 10pt \'Gulim\'");
            obj.set_borderRadius("8px");
            obj.set_border("0px");
            this.div_detail.addChild(obj.name, obj);

            obj = new Button("btn_addMain","10","730","100","35",null,null,null,null,null,null,this);
            obj.set_text("대분류추가");
            obj.set_background("#b3e5ff");
            obj.set_color("#000000");
            obj.set_font("bold 10pt \'Gulim\'");
            obj.set_borderRadius("8px");
            obj.set_border("1px solid #90caf9");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addSub","120","730","100","35",null,null,null,null,null,null,this);
            obj.set_text("하위추가");
            obj.set_background("#b3e5ff");
            obj.set_color("#000000");
            obj.set_font("bold 10pt \'Gulim\'");
            obj.set_borderRadius("8px");
            obj.set_border("1px solid #90caf9");
            this.addChild(obj.name, obj);

            obj = new Button("btn_edit","230","730","100","35",null,null,null,null,null,null,this);
            obj.set_text("수정");
            obj.set_background("#90caf9");
            obj.set_color("#ffffff");
            obj.set_font("bold 10pt \'Gulim\'");
            obj.set_borderRadius("8px");
            obj.set_border("0px");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete","340","730","100","35",null,null,null,null,null,null,this);
            obj.set_text("삭제");
            obj.set_background("#f44336");
            obj.set_color("#ffffff");
            obj.set_font("bold 10pt \'Gulim\'");
            obj.set_borderRadius("8px");
            obj.set_border("0px");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_ProductCate.xfdl", function() {
        /***************************************************
        * onload : 메인/서브 카테고리 조회
        ***************************************************/
        this.Form_ProductCate_onload = function(obj,e)
        {
            this.transaction("selectMainCategoryByAdmin", "svc::selectMainCategoryByAdmin.do",
                "", "ds_mainCate=ds_mainCate", "", "fn_callback", true);

            this.transaction("selectSubCategoryByAdmin", "svc::selectSubCategoryByAdmin.do",
                "", "ds_subCate=ds_subCate", "", "fn_callback", true);
        };

        /***************************************************
        * 공통 콜백
        ***************************************************/
        this.fn_callback = function(svcID,errCode,errMsg)
        {
            if (errCode < 0) {
                alert("에러: " + errMsg);
                return;
            }

            if (svcID=="selectMainCategoryByAdmin" || svcID=="selectSubCategoryByAdmin") {
                if (this.ds_mainCate.getRowCount() > 0 && this.ds_subCate.getRowCount() > 0) {
                    this.fn_makeTree();
                }
            } else {
                alert("처리 완료");
                this.Form_ProductCate_onload();
            }
        };

        /***************************************************
        * 트리 데이터 구성 (처음에는 대분류만)
        ***************************************************/
        this.fn_makeTree = function()
        {
            var dsTree = this.ds_category;
            dsTree.clearData();

            for (var i=0; i<this.ds_mainCate.getRowCount(); i++) {
                var mid = String(this.ds_mainCate.getColumn(i,"MAIN_CATE_ID"));
                var r = dsTree.addRow();
                dsTree.setColumn(r,"cate_id","M"+mid);
                dsTree.setColumn(r,"parent_id","");
                dsTree.setColumn(r,"cate_name",this.ds_mainCate.getColumn(i,"MAIN_CATE_NM"));
                dsTree.setColumn(r,"level",0);
                dsTree.setColumn(r,"type","main");
                dsTree.setColumn(r,"expanded","N");
            }
        };

        /***************************************************
        * 그리드 클릭 (대분류: sub 삽입 / 중분류: 상세표시)
        ***************************************************/
        this.grd_category_oncellclick = function(obj,e)
        {
            var row = e.row;
            if (row < 0) return;

            var type   = this.ds_category.getColumn(row,"type");
            var cateId = this.ds_category.getColumn(row,"cate_id");

            // 대분류 클릭
            if (type=="main") {
                var expanded = this.ds_category.getColumn(row,"expanded");

                if (expanded=="Y") {
                    // 닫기 → 자식 삭제
                    this.ds_category.setColumn(row,"expanded","N");
                    for (var i=this.ds_category.getRowCount()-1; i>=0; i--) {
                        if (this.ds_category.getColumn(i,"parent_id")==cateId) {
                            this.ds_category.deleteRow(i);
                        }
                    }
                }
                else {
                    // 다른 대분류의 sub 전부 삭제
                    for (var j=this.ds_category.getRowCount()-1; j>=0; j--) {
                        if (this.ds_category.getColumn(j,"type")=="sub") {
                            this.ds_category.deleteRow(j);
                        } else {
                            this.ds_category.setColumn(j,"expanded","N");
                        }
                    }

                    // 클릭한 대분류 펼치기
                    this.ds_category.setColumn(row,"expanded","Y");

                    // 클릭한 row 바로 밑에 sub 삽입
                    var mainId = cateId.replace("M","");
                    var insertPos = row;
                    for (var k=0; k<this.ds_subCate.getRowCount(); k++) {
                        if (String(this.ds_subCate.getColumn(k,"MAIN_CATE_ID"))==mainId) {
                            insertPos++;
                            var r2 = this.ds_category.insertRow(insertPos);
                            this.ds_category.setColumn(r2,"cate_id","S"+this.ds_subCate.getColumn(k,"SUB_CATE_ID"));
                            this.ds_category.setColumn(r2,"parent_id",cateId);
                            this.ds_category.setColumn(r2,"cate_name","   "+this.ds_subCate.getColumn(k,"SUB_CATE_NM"));
                            this.ds_category.setColumn(r2,"level",1);
                            this.ds_category.setColumn(r2,"type","sub");
                            this.ds_category.setColumn(r2,"expanded","N");
                        }
                    }

                    // ✅ 클릭한 대분류 선택 유지
                    this.ds_category.set_rowposition(row);
                }

                this.fn_showDetail(row);

            }
            else {
                // 중분류 클릭 → 상세표시
                this.fn_showDetail(row);
            }
        };

        /***************************************************
        * 상세정보 표시
        ***************************************************/
        this.fn_showDetail = function(row)
        {
            var id   = this.ds_category.getColumn(row,"cate_id");
            var name = this.ds_category.getColumn(row,"cate_name").trim();
            var type = this.ds_category.getColumn(row,"type");

            var active = "Y";
            var sort   = "";

            if (type=="main") {
                var mainId = id.replace("M","");
                var mainRow = this.ds_mainCate.findRow("MAIN_CATE_ID", mainId);
                if (mainRow >= 0) {
                    active = this.ds_mainCate.getColumn(mainRow,"IS_ACTIVE");
                    sort   = this.ds_mainCate.getColumn(mainRow,"SORT_NUMBER");
                }
            } else {
                var subId = id.replace("S","");
                var subRow = this.ds_subCate.findRow("SUB_CATE_ID", subId);
                if (subRow >= 0) {
                    active = this.ds_subCate.getColumn(subRow,"IS_ACTIVE");
                    sort   = this.ds_subCate.getColumn(subRow,"SORT_NUMBER");
                }
            }

            this.div_detail.form.sta_idValue.set_text(id ? id : "자동생성");
            this.div_detail.form.edt_cateName.set_value(name);
            this.div_detail.form.edt_sort.set_value(sort);
            this.div_detail.form.rdo_display.set_value(active);

            this._insertMode = null;
        };

        /***************************************************
        * 정렬순번 자동 계산 함수
        ***************************************************/
        this.fn_getNextSortNumber = function(type, mainId)
        {
            var maxSort = 0;

            if (type=="main") {
                for (var i=0; i<this.ds_mainCate.getRowCount(); i++) {
                    var v = this.ds_mainCate.getColumn(i,"SORT_NUMBER");
                    if (v && v > maxSort) maxSort = v;
                }
            } else if (type=="sub") {
                for (var j=0; j<this.ds_subCate.getRowCount(); j++) {
                    if (String(this.ds_subCate.getColumn(j,"MAIN_CATE_ID")) == String(mainId)) {
                        var v2 = this.ds_subCate.getColumn(j,"SORT_NUMBER");
                        if (v2 && v2 > maxSort) maxSort = v2;
                    }
                }
            }
            return maxSort + 1;
        };

        /***************************************************
        * 대분류 추가 버튼
        ***************************************************/
        this.btn_addMain_onclick = function(obj,e)
        {
            this._insertMode = { type:"main" };
            this.div_detail.form.sta_idValue.set_text("자동생성");
            this.div_detail.form.edt_cateName.set_value("");
            this.div_detail.form.edt_sort.set_value(this.fn_getNextSortNumber("main"));
            this.div_detail.form.rdo_display.set_value("Y");

            alert("신규 대분류 정보를 입력 후 [저장]을 누르세요.");
        };

        /***************************************************
        * 하위 분류 추가 버튼
        ***************************************************/
        this.btn_addSub_onclick = function(obj,e)
        {
            var row = this.grd_category.currentrow;
            if (row < 0) {
                alert("하위 분류를 추가할 대분류를 선택하세요.");
                return;
            }
            var type = this.ds_category.getColumn(row,"type");
            if (type!="main") {
                alert("대분류를 선택해야 하위 분류를 추가할 수 있습니다.");
                return;
            }

            var mainId = this.ds_category.getColumn(row,"cate_id").replace("M","");

            this._insertMode = { type:"sub", mainId:mainId };
            this.div_detail.form.sta_idValue.set_text("자동생성");
            this.div_detail.form.edt_cateName.set_value("");
            this.div_detail.form.edt_sort.set_value(this.fn_getNextSortNumber("sub", mainId));
            this.div_detail.form.rdo_display.set_value("Y");

            alert("신규 중분류 정보를 입력 후 [저장]을 누르세요.");
        };

        /***************************************************
        * 수정 버튼
        ***************************************************/
        this.btn_edit_onclick = function(obj,e)
        {
            var row = this.grd_category.currentrow;
            if (row < 0) {
                alert("수정할 항목을 선택하세요.");
                return;
            }
            this.fn_showDetail(row);
            this._insertMode = null;
            alert("선택한 항목 정보를 수정 후 [저장] 버튼을 누르세요.");
        };

        /***************************************************
        * 삭제 버튼
        ***************************************************/
        this.btn_delete_onclick = function(obj,e)
        {
            var row = this.grd_category.currentrow;
            if (row < 0) {
                alert("삭제할 항목을 선택하세요.");
                return;
            }
            if (!confirm("정말 삭제하시겠습니까?")) return;

            var type = this.ds_category.getColumn(row,"type");
            var cateId = this.ds_category.getColumn(row,"cate_id").substring(1);

            this.ds_in.clearData();
            var nRow = this.ds_in.addRow();
            this.ds_in.setColumn(nRow,"TYPE", type);
            if (type=="main") this.ds_in.setColumn(nRow,"MAIN_CATE_ID",cateId);
            else this.ds_in.setColumn(nRow,"SUB_CATE_ID",cateId);

            this.transaction("deleteCategoryByAdmin","svc::deleteCategoryByAdmin.do",
                "ds_in=ds_in","","","fn_callback",true);
        };

        /***************************************************
        * 저장 버튼 (신규/수정 통합)
        ***************************************************/
        this.btn_saveDetail_onclick = function(obj,e)
        {
            var name    = this.div_detail.form.edt_cateName.value;
            var sort    = this.div_detail.form.edt_sort.value;
            var display = this.div_detail.form.rdo_display.value;

            if (!name) {
                alert("분류명을 입력하세요.");
                return;
            }
            if (!sort) sort = 0;
            if (isNaN(Number(sort))) {
                alert("정렬순번은 숫자만 입력하세요.");
                return;
            }
            sort = parseInt(sort);

            this.ds_in.clearData();
            var nRow = this.ds_in.addRow();

            // 신규 모드
            if (this._insertMode) {
                if (this._insertMode.type=="main") {
                    this.ds_in.setColumn(nRow,"TYPE","main");
                    this.ds_in.setColumn(nRow,"MAIN_CATE_NM", name);
                } else {
                    this.ds_in.setColumn(nRow,"TYPE","sub");
                    this.ds_in.setColumn(nRow,"MAIN_CATE_ID", this._insertMode.mainId);
                    this.ds_in.setColumn(nRow,"SUB_CATE_NM", name);
                }
                this.ds_in.setColumn(nRow,"SORT_NUMBER", sort);
                this.ds_in.setColumn(nRow,"IS_ACTIVE", display);
                this.ds_in.setColumn(nRow,"INPUT_ID","admin");

                this.transaction("insertCategoryByAdmin","svc::insertCategoryByAdmin.do",
                    "ds_in=ds_in","","","fn_callback",true);
            }
            // 수정 모드
            else {
                var row = this.grd_category.currentrow;
                if (row < 0) {
                    alert("수정할 항목을 선택하세요.");
                    return;
                }
                var id   = this.ds_category.getColumn(row,"cate_id");
                var type = this.ds_category.getColumn(row,"type");
                var cateId = id.substring(1);

                this.ds_in.setColumn(nRow,"TYPE", type);
                if (type=="main") {
                    this.ds_in.setColumn(nRow,"MAIN_CATE_ID", cateId);
                    this.ds_in.setColumn(nRow,"MAIN_CATE_NM", name);
                } else {
                    this.ds_in.setColumn(nRow,"SUB_CATE_ID", cateId);
                    this.ds_in.setColumn(nRow,"SUB_CATE_NM", name);
                }
                this.ds_in.setColumn(nRow,"SORT_NUMBER", sort);
                this.ds_in.setColumn(nRow,"IS_ACTIVE", display);
                this.ds_in.setColumn(nRow,"UPDATE_ID","admin");

                this.transaction("updateCategoryByAdmin","svc::updateCategoryByAdmin.do",
                    "ds_in=ds_in","","","fn_callback",true);
            }

            this._insertMode = null;
        };


        /***************************************************
        * 상단 메뉴 버튼 이벤트
        ***************************************************/
        this.btn_goProduct_onclick = function(obj,e)
        {
            this.go("product::Form_Product.xfdl");   // 상품목록
        };

        this.btn_goDisplay_onclick = function(obj,e)
        {
            alert("상품진열 페이지는 준비중입니다.");  // 아직 없음
        };

        this.btn_goProductReg_onclick = function(obj,e)
        {
            this.go("product::Form_ProductReg.xfdl");   // 상품등록
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_ProductCate_onload,this);
            this.btn_goProduct.addEventHandler("onclick",this.btn_goProduct_onclick,this);
            this.btn_goDisplay.addEventHandler("onclick",this.btn_goDisplay_onclick,this);
            this.btn_goProductReg.addEventHandler("onclick",this.btn_goProductReg_onclick,this);
            this.grd_category.addEventHandler("oncellclick",this.grd_category_oncellclick,this);
            this.div_detail.form.btn_saveDetail.addEventHandler("onclick",this.btn_saveDetail_onclick,this);
            this.btn_addMain.addEventHandler("onclick",this.btn_addMain_onclick,this);
            this.btn_addSub.addEventHandler("onclick",this.btn_addSub_onclick,this);
            this.btn_edit.addEventHandler("onclick",this.btn_edit_onclick,this);
            this.btn_delete.addEventHandler("onclick",this.btn_delete_onclick,this);
        };
        this.loadIncludeScript("Form_ProductCate.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
