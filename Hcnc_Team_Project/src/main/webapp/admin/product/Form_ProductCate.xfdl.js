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
            obj._setContents("<ColumnInfo><Column id=\"MAIN_CATE_ID\" type=\"INT\" size=\"256\"/><Column id=\"MAIN_CATE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_NUMBER\" type=\"INT\" size=\"256\"/><Column id=\"IS_ACTIVE\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_DT\" type=\"DATETIME\" size=\"256\"/><Column id=\"UPDATE_DT\" type=\"DATETIME\" size=\"256\"/><Column id=\"INPUT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_subCate", this);
            obj._setContents("<ColumnInfo><Column id=\"SUB_CATE_ID\" type=\"INT\" size=\"256\"/><Column id=\"MAIN_CATE_ID\" type=\"INT\" size=\"256\"/><Column id=\"SUB_CATE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_NUMBER\" type=\"INT\" size=\"256\"/><Column id=\"IS_ACTIVE\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_DT\" type=\"DATETIME\" size=\"256\"/><Column id=\"UPDATE_DT\" type=\"DATETIME\" size=\"256\"/><Column id=\"INPUT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_product", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_in", this);
            obj._setContents("<ColumnInfo><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"MAIN_CATE_ID\" type=\"INT\" size=\"256\"/><Column id=\"SUB_CATE_ID\" type=\"INT\" size=\"256\"/><Column id=\"MAIN_CATE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_CATE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IS_ACTIVE\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_category", this);
            obj._setContents("<ColumnInfo><Column id=\"cate_id\" type=\"string\" size=\"32\"/><Column id=\"parent_id\" type=\"string\" size=\"32\"/><Column id=\"cate_name\" type=\"string\" size=\"255\"/><Column id=\"level\" type=\"int\" size=\"3\"/><Column id=\"expanded\" type=\"string\" size=\"1\"/><Column id=\"visible\" type=\"string\" size=\"1\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cate_id\">C1</Col><Col id=\"parent_id\"/><Col id=\"cate_name\">문구</Col><Col id=\"level\">0</Col><Col id=\"expanded\">N</Col><Col id=\"visible\">Y</Col><Col id=\"type\">main</Col></Row><Row><Col id=\"cate_id\">C2</Col><Col id=\"parent_id\">C1</Col><Col id=\"cate_name\">필기류</Col><Col id=\"level\">1</Col><Col id=\"expanded\">N</Col><Col id=\"visible\">N</Col><Col id=\"type\">sub</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_addCommon","20","730","100","30",null,null,null,null,null,null,this);
            obj.set_text("분류추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete","130","730","60","30",null,null,null,null,null,null,this);
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn_saveMove","200","730","100","30",null,null,null,null,null,null,this);
            obj.set_text("분류이동저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_productList","1010","20","80","30",null,null,null,null,null,null,this);
            obj.set_text("상품목록");
            this.addChild(obj.name, obj);

            obj = new Button("btn_productDisplay","1100","20","80","30",null,null,null,null,null,null,this);
            obj.set_text("상품진열");
            this.addChild(obj.name, obj);

            obj = new Button("btn_productReg","1190","20","80","30",null,null,null,null,null,null,this);
            obj.set_text("상품등록");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_category","20","60","300","500",null,null,null,null,null,null,this);
            obj.set_binddataset("ds_category");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"162\"/><Column size=\"86\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"expr:(expanded==&apos;Y&apos; ? &apos;-&apos; : &apos;+&apos;)\"/><Cell col=\"1\" text=\"expr:( (level==0 ? &apos;&apos; : (level==1 ? &apos;   &apos; : &apos;      &apos;)) + cate_name )\"/><Cell col=\"2\" displaytype=\"buttoncontrol\" text=\"추가/수정/삭제\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_detail","360","60","850","700",null,null,null,null,null,null,this);
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.addChild(obj.name, obj);

            obj = new Static("sta_current","20","20","80","25",null,null,null,null,null,null,this.div_detail.form);
            obj.set_text("현재분류");
            this.div_detail.addChild(obj.name, obj);

            obj = new Edit("edt_current","120","20","300","25",null,null,null,null,null,null,this.div_detail.form);
            obj.set_readonly("true");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("sta_name","20","60","80","25",null,null,null,null,null,null,this.div_detail.form);
            obj.set_text("분류명");
            this.div_detail.addChild(obj.name, obj);

            obj = new Edit("edt_cateName","120","60","300","25",null,null,null,null,null,null,this.div_detail.form);
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("sta_desc","20","100","80","25",null,null,null,null,null,null,this.div_detail.form);
            obj.set_text("분류설명");
            this.div_detail.addChild(obj.name, obj);

            obj = new Edit("edt_cateDesc","120","100","600","25",null,null,null,null,null,null,this.div_detail.form);
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("sta_display","20","140","80","25",null,null,null,null,null,null,this.div_detail.form);
            obj.set_text("진열상태");
            this.div_detail.addChild(obj.name, obj);

            obj = new Radio("rdo_display","120","140","200","25",null,null,null,null,null,null,this.div_detail.form);
            this.div_detail.addChild(obj.name, obj);

            obj = new Button("btn_saveDetail","120","180","80","30",null,null,null,null,null,null,this.div_detail.form);
            obj.set_text("저장");
            this.div_detail.addChild(obj.name, obj);
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
        this.Form_ProductCate_onload = function(obj,e)
        {
            this._loadedMain = false;
            this._loadedSub  = false;

            this.transaction("selectMainCategoryByAdmin",
                "svc::selectMainCategoryByAdmin.do",
                "",
                "ds_mainCate=ds_mainCate",
                "",
                "fn_callback", true);

            this.transaction("selectSubCategoryByAdmin",
                "svc::selectSubCategoryByAdmin.do",
                "",
                "ds_subCate=ds_subCate",
                "",
                "fn_callback", true);
        };

        this.fn_callback = function(svcID,errCode,errMsg)
        {
            if (errCode < 0) {
                alert("에러: " + errMsg);
                return;
            }

            if (svcID == "selectMainCategoryByAdmin") {
                this._loadedMain = true;
                if (this._loadedMain && this._loadedSub) this.fn_makeTree();
            }
            else if (svcID == "selectSubCategoryByAdmin") {
                this._loadedSub = true;
                if (this._loadedMain && this._loadedSub) this.fn_makeTree();
            }
            else if (svcID.indexOf("CategoryByAdmin") > -1) {
                alert("처리 성공");
                this.Form_ProductCate_onload();
            }
        };

        this.fn_makeTree = function()
        {
            var dsTree = this.ds_category;
            dsTree.clearData();

            for (var i=0; i<this.ds_mainCate.getRowCount(); i++) {
                var r = dsTree.addRow();
                dsTree.setColumn(r,"cate_id","M"+this.ds_mainCate.getColumn(i,"MAIN_CATE_ID"));
                dsTree.setColumn(r,"parent_id","");
                dsTree.setColumn(r,"cate_name",this.ds_mainCate.getColumn(i,"MAIN_CATE_NM"));
                dsTree.setColumn(r,"level",0);
                dsTree.setColumn(r,"expanded","N");
                dsTree.setColumn(r,"visible","Y");
                dsTree.setColumn(r,"type","main");
            }
            for (var j=0; j<this.ds_subCate.getRowCount(); j++) {
                var r2 = dsTree.addRow();
                dsTree.setColumn(r2,"cate_id","S"+this.ds_subCate.getColumn(j,"SUB_CATE_ID"));
                dsTree.setColumn(r2,"parent_id","M"+this.ds_subCate.getColumn(j,"MAIN_CATE_ID"));
                dsTree.setColumn(r2,"cate_name",this.ds_subCate.getColumn(j,"SUB_CATE_NM"));
                dsTree.setColumn(r2,"level",1);
                dsTree.setColumn(r2,"expanded","N");
                dsTree.setColumn(r2,"visible","N");
                dsTree.setColumn(r2,"type","sub");
            }

            this.ds_category.filter("visible=='Y'");
        };

        this.fn_hideChildren = function(parentId)
        {
            var ds = this.ds_category;
            ds.set_enableevent(false);
            for (var i=0; i<ds.getRowCount(); i++) {
                if (ds.getColumn(i,"parent_id") == parentId) {
                    ds.setColumn(i,"visible","N");
                    ds.setColumn(i,"expanded","N");
                    this.fn_hideChildren(ds.getColumn(i,"cate_id"));
                }
            }
            ds.set_enableevent(true);
        };

        this.fn_showChildren = function(parentId)
        {
            var ds = this.ds_category;
            ds.set_enableevent(false);
            for (var i=0; i<ds.getRowCount(); i++) {
                if (ds.getColumn(i,"parent_id") == parentId) {
                    ds.setColumn(i,"visible","Y");
                }
            }
            ds.set_enableevent(true);
            this.ds_category.filter("visible=='Y'");
        };

        this.grd_category_oncellclick = function(obj,e)
        {
            var row = e.row, col = e.col;
            if (row < 0) return;

            if (col == 0) {
                var cateId = this.ds_category.getColumn(row,"cate_id");
                var expanded = this.ds_category.getColumn(row,"expanded");
                if (expanded=="Y") {
                    this.ds_category.setColumn(row,"expanded","N");
                    this.fn_hideChildren(cateId);
                } else {
                    this.ds_category.setColumn(row,"expanded","Y");
                    this.fn_showChildren(cateId);
                }
                this.ds_category.filter("visible=='Y'");
            }
            else if (col == 2) {
                var posX = e.canvasx - obj.getCellRect(row,col).left;
                var cellWidth = obj.getCellRect(row,col).width;
                var partWidth = cellWidth/3;

                if (posX < partWidth) this.fn_addCategory(row);
                else if (posX < partWidth*2) this.fn_editCategory(row);
                else this.fn_deleteCategory(row);
            }
            else {
                this.fn_showDetail(row);
            }
        };

        this.fn_showDetail = function(row)
        {
            this.div_detail.form.edt_current.set_value(this.ds_category.getColumn(row,"cate_id"));
            this.div_detail.form.edt_cateName.set_value(this.ds_category.getColumn(row,"cate_name"));
            this.div_detail.form.rdo_display.set_value("Y");
        };

        this.fn_addCategory = function(row)
        {
            var type = this.ds_category.getColumn(row,"type");
            this.ds_in.clearData();
            var nRow = this.ds_in.addRow();

            if (type=="main") {
                var mainId = this.ds_category.getColumn(row,"cate_id").replace("M","");
                this.ds_in.setColumn(nRow,"TYPE","sub");
                this.ds_in.setColumn(nRow,"MAIN_CATE_ID", mainId);
                this.ds_in.setColumn(nRow,"SUB_CATE_NM","신규중분류");
            } else {
                this.ds_in.setColumn(nRow,"TYPE","main");
                this.ds_in.setColumn(nRow,"MAIN_CATE_NM","신규대분류");
            }
            this.ds_in.setColumn(nRow,"IS_ACTIVE","Y");
            this.ds_in.setColumn(nRow,"INPUT_ID","admin");

            this.transaction("insertCategoryByAdmin","svc::insertCategoryByAdmin.do",
                             "ds_in=ds_in","","","fn_callback",true);
        };

        this.fn_editCategory = function(row)
        {
            var type = this.ds_category.getColumn(row,"type");
            var cateId = this.ds_category.getColumn(row,"cate_id").substring(1);
            var newName = prompt("새 분류명 입력:", this.ds_category.getColumn(row,"cate_name"));
            if (!newName) return;

            this.ds_in.clearData();
            var nRow = this.ds_in.addRow();
            this.ds_in.setColumn(nRow,"TYPE", type);

            if (type=="main") {
                this.ds_in.setColumn(nRow,"MAIN_CATE_ID", cateId);
                this.ds_in.setColumn(nRow,"MAIN_CATE_NM", newName);
            } else {
                this.ds_in.setColumn(nRow,"SUB_CATE_ID", cateId);
                this.ds_in.setColumn(nRow,"SUB_CATE_NM", newName);
            }
            this.ds_in.setColumn(nRow,"UPDATE_ID","admin");

            this.transaction("updateCategoryByAdmin","svc::updateCategoryByAdmin.do",
                             "ds_in=ds_in","","","fn_callback",true);
        };

        this.fn_deleteCategory = function(row)
        {
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

        this.btn_saveDetail_onclick = function(obj,e)
        {
            alert("저장 버튼 클릭됨");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_ProductCate_onload,this);
            this.btn_addCommon.addEventHandler("onclick",this.btn_addCommon_onclick,this);
            this.btn_delete.addEventHandler("onclick",this.btn_delete_onclick,this);
            this.btn_saveMove.addEventHandler("onclick",this.btn_saveMove_onclick,this);
            this.grd_category.addEventHandler("oncellclick",this.grd_category_oncellclick,this);
            this.div_detail.form.btn_saveDetail.addEventHandler("onclick",this.btn_saveDetail_onclick,this);
        };
        this.loadIncludeScript("Form_ProductCate.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
