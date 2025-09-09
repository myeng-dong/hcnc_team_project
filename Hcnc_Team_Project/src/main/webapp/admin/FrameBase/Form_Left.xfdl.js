(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Left");
            this.set_titletext("Form_Left");
            if (Form == this.constructor)
            {
                this._setFormPosition(200,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_left", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"INT\" size=\"10\"/><Column id=\"MENU_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"_expanded\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","-2","-6","204","576",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_left");
            obj.set_cssclass("leftMenuGrid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"208\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"MENU_NM\"/></Band><Band id=\"body\"><Cell text=\"bind:MENU_NM\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:MENU_LEVEL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",200,570,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Left.xfdl", function() {
        this.Form_Left_onload = function(obj, e)
        {
        	trace("Form_Left_onload 실행됨");
            this.fnGetLeftMenu();   // 좌측 메뉴 초기 로드


        };

        // 좌측 메뉴 데이터 로드 (2자리 부모만)
        this.fnGetLeftMenu = function()
        {

            var objApp    = nexacro.getApplication();
            var objDsMenu = objApp.gds_menu;


            // 2자리 메뉴만 추출
            objDsMenu.filter("MENU_ID.length == 2");
            this.ds_left.copyData(objDsMenu, true);
            objDsMenu.filter("");

            // 트리 바인딩용 LEVEL 설정
            for (var i = 0; i < this.ds_left.getRowCount(); i++) {
                this.ds_left.setColumn(i, "MENU_LEVEL", 0);
            }
        };

        // 그리드 셀 클릭 이벤트
        // 그리드 셀 클릭 이벤트
        this.Grid00_oncellclick = function(obj, e)
        {
            var objApp    = nexacro.getApplication();
            var objDsMenu = objApp.gds_menu;
            var sMenuId   = this.ds_left.getColumn(e.row, "MENU_ID");

            // 2자리 메뉴 클릭 → 자식(4자리) 토글
            if (sMenuId.length == 2) {
                var bExpanded = this.ds_left.getColumn(e.row, "_expanded");

                if (bExpanded == true) {
                    // 닫기 → 자식 삭제
                    for (var i = this.ds_left.getRowCount() - 1; i > e.row; i--) {
                        var childId = this.ds_left.getColumn(i, "MENU_ID");
                        if (childId.indexOf(sMenuId) == 0 && childId.length == 4) {
                            this.ds_left.deleteRow(i);
                        }
                    }
                    this.ds_left.setColumn(e.row, "_expanded", false);

                } else {
                    // 열기 → 자식 추가하기 전에 "이미 있는지" 체크
                    var hasChild = false;
                    for (var k = 0; k < this.ds_left.getRowCount(); k++) {
                        var checkId = this.ds_left.getColumn(k, "MENU_ID");
                        if (checkId.indexOf(sMenuId) == 0 && checkId.length == 4) {
                            hasChild = true;
                            break;
                        }
                    }

                    if (!hasChild) {
                        objDsMenu.filter("MENU_ID.indexOf('" + sMenuId + "') == 0 && MENU_ID.length == 4");
                        for (var j = 0; j < objDsMenu.getRowCount(); j++) {
                            var nRow = this.ds_left.insertRow(e.row + 1 + j);
                            this.ds_left.copyRow(nRow, objDsMenu, j);
                            this.ds_left.setColumn(nRow, "MENU_LEVEL", 1); // 자식은 LEVEL=1
                        }
                        objDsMenu.filter("");
                    }
                    this.ds_left.setColumn(e.row, "_expanded", true);
                }
            }
            // 4자리 메뉴 클릭 → 화면 오픈
            else if (sMenuId.length == 4) {
                this.fnOpenMenu(sMenuId);
            }
        };


        // 메뉴 실행
        this.fnOpenMenu = function(sMenuId)
        {
            var objApp    = nexacro.getApplication();
            var nFRow     = this.ds_left.findRow("MENU_ID", sMenuId);
            if (nFRow < 0) return;

            var sMenuPath = this.ds_left.getColumn(nFRow, "MENU_PATH");
            if (!sMenuPath || sMenuPath == "[Undefined]") {
                trace("메뉴 경로가 정의되지 않음: " + sMenuId);
                return;
            }

            objApp.mainframe.VFrameSet00.HFrameSet00.WorkFrame.set_formurl(sMenuPath);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Left_onload,this);
            this.Grid00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
        };
        this.loadIncludeScript("Form_Left.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
