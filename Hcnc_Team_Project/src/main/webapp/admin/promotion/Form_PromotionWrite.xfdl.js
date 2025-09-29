(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_PromotionWrite");
            this.set_titletext("New Form");
            this.set_background("#F4F7FE");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,1430);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_promo_target", this);
            obj._setContents("<ColumnInfo><Column id=\"datacolumn\" type=\"STRING\" size=\"256\"/><Column id=\"codecolumn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체회원</Col><Col id=\"codecolumn\">all</Col></Row><Row><Col id=\"datacolumn\">신규회원</Col><Col id=\"codecolumn\">new</Col></Row><Row><Col id=\"datacolumn\">등급별</Col><Col id=\"codecolumn\">grade</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_promo_write", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"PROMOTION_ID\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"PROMOTION_NAME\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"PROMOTION_TYPE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"DESCRIPTION\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"START_DT\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"END_DT\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"IS_ACTIVE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"INPUT_DT\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"UPDATE_DT\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"INPUT_ID\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"AUTO_ISSUED\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"P_COUPON_CODE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"ISSUED_DT\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"EXPIRY_DT\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"PERIOD_SETTING\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"DISCOUNT_ID\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"DISCOUNT_TYPE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"DISCOUNT_VALUE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"MIN_ORDER_PRICE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"TARGET_ID\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"TARGET_TYPE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"TARGET_VALUE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"TARGET_AMOUNT\" type=\"STRING\" size=\"30\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_promo_discount_type", this);
            obj._setContents("<ColumnInfo><Column id=\"datacolumn\" type=\"STRING\" size=\"256\"/><Column id=\"codecolumn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">할인%</Col><Col id=\"codecolumn\">R</Col></Row><Row><Col id=\"datacolumn\">할인금액</Col><Col id=\"codecolumn\">A</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_promo_auto", this);
            obj._setContents("<ColumnInfo><Column id=\"datacolumn\" type=\"STRING\" size=\"256\"/><Column id=\"codecolumn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">수동발급</Col><Col id=\"codecolumn\">0</Col></Row><Row><Col id=\"datacolumn\">자동발급</Col><Col id=\"codecolumn\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_promo_active", this);
            obj._setContents("<ColumnInfo><Column id=\"datacolumn\" type=\"STRING\" size=\"256\"/><Column id=\"codecolumn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">활성화</Col><Col id=\"codecolumn\">1</Col></Row><Row><Col id=\"datacolumn\">비활성화</Col><Col id=\"codecolumn\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_promo_type", this);
            obj._setContents("<ColumnInfo><Column id=\"datacolumn\" type=\"STRING\" size=\"256\"/><Column id=\"codecolumn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">프로모션이벤트</Col><Col id=\"codecolumn\">PROMOTION</Col></Row><Row><Col id=\"datacolumn\">신규회원이벤트</Col><Col id=\"codecolumn\">WELCOME</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_promo_target_type", this);
            obj._setContents("<ColumnInfo><Column id=\"datacolumn\" type=\"STRING\" size=\"256\"/><Column id=\"codecolumn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">회원분류</Col><Col id=\"codecolumn\">member</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_promo_target_grade", this);
            obj._setContents("<ColumnInfo><Column id=\"datacolumn\" type=\"STRING\" size=\"256\"/><Column id=\"codecolumn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체회원</Col><Col id=\"codecolumn\">all</Col></Row><Row><Col id=\"datacolumn\">신규회원</Col><Col id=\"codecolumn\">new</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grade", this);
            obj._setContents("<ColumnInfo><Column id=\"GRADE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_promo_pnum_auto", this);
            obj._setContents("<ColumnInfo><Column id=\"datacolumn\" type=\"STRING\" size=\"256\"/><Column id=\"codecolumn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">자동발급</Col><Col id=\"codecolumn\">P</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_promo_dt", this);
            obj._setContents("<ColumnInfo><Column id=\"datacolumn\" type=\"STRING\" size=\"256\"/><Column id=\"codecolumn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">고정기간</Col><Col id=\"codecolumn\">fixed</Col></Row><Row><Col id=\"datacolumn\">발급일기준</Col><Col id=\"codecolumn\">relative</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_promo_dt_option", this);
            obj._setContents("<ColumnInfo><Column id=\"datacolumn\" type=\"STRING\" size=\"256\"/><Column id=\"codecolumn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">3</Col><Col id=\"codecolumn\">3</Col></Row><Row><Col id=\"datacolumn\">5</Col><Col id=\"codecolumn\">5</Col></Row><Row><Col id=\"datacolumn\">7</Col><Col id=\"codecolumn\">7</Col></Row><Row><Col id=\"datacolumn\">15</Col><Col id=\"codecolumn\">15</Col></Row><Row><Col id=\"datacolumn\">30</Col><Col id=\"codecolumn\">30</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stat_bg","40","70",null,"520","40",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#ffffff");
            obj.set_borderRadius("10px");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("txt_th","80","146","100","36",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("프로모션타입");
            obj.set_font("normal 12pt/normal \"Noto Sans KR Black\"");
            obj.set_color("#a3aed0");
            this.addChild(obj.name, obj);

            obj = new Static("txt_thbanner","80","308","100","36",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("프로모션명");
            obj.set_font("normal 12pt/normal \"Noto Sans KR Black\"");
            obj.set_color("#a3aed0");
            this.addChild(obj.name, obj);

            obj = new Static("txt_thtitle","80","418","100","36",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("설명");
            obj.set_font("normal 12pt/normal \"Noto Sans KR Black\"");
            obj.set_color("#a3aed0");
            this.addChild(obj.name, obj);

            obj = new Static("txt_date","80","254","100","36",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("등록일");
            obj.set_font("normal 12pt/normal \"Noto Sans KR Black\"");
            obj.set_color("#a3aed0");
            this.addChild(obj.name, obj);

            obj = new Static("txt_date_td","190","254","120","36",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("-");
            obj.set_font("normal 14pt/normal \"Noto Sans KR\"");
            this.addChild(obj.name, obj);

            obj = new Static("txt_date00","80","92","100","36",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("발급유무");
            obj.set_font("normal 12pt/normal \"Noto Sans KR Black\"");
            obj.set_color("#a3aed0");
            this.addChild(obj.name, obj);

            obj = new Static("txt_update_dt","628","254","120","36",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("수정일");
            obj.set_font("normal 12pt/normal \"Noto Sans KR Black\"");
            obj.set_color("#a3aed0");
            this.addChild(obj.name, obj);

            obj = new Static("txt_update_td","750","254","372","36",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("-");
            obj.set_font("normal 14pt/normal \"Noto Sans KR\"");
            this.addChild(obj.name, obj);

            obj = new Static("txt_date02","80","201","100","36",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("작성자");
            obj.set_font("normal 12pt/normal \"Noto Sans KR Black\"");
            obj.set_color("#a3aed0");
            this.addChild(obj.name, obj);

            obj = new Static("txt_inputid","190","201","250","36",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("-");
            obj.set_font("normal 14pt/normal \"Noto Sans KR\"");
            this.addChild(obj.name, obj);

            obj = new Static("txt_date01_00","628","201","120","36",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("최종작성자");
            obj.set_font("normal 12pt/normal \"Noto Sans KR Black\"");
            obj.set_color("#a3aed0");
            this.addChild(obj.name, obj);

            obj = new Static("txt_updateid","748","201","372","36",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("-");
            obj.set_font("normal 14pt/normal \"Noto Sans KR\"");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","80","190",null,"1","80",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Div00");
            obj.set_background("#f5f5f5");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","80","135",null,"1","80",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Div01");
            obj.set_background("#f5f5f5");
            this.addChild(obj.name, obj);

            obj = new Div("Div02","80","245",null,"1","80",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("Div02");
            obj.set_background("#f5f5f5");
            this.addChild(obj.name, obj);

            obj = new Div("Div03","80","300",null,"1","80",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("Div03");
            obj.set_background("#f5f5f5");
            this.addChild(obj.name, obj);

            obj = new Div("Div04","80","355",null,"1","80",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("Div04");
            obj.set_background("#f5f5f5");
            this.addChild(obj.name, obj);

            obj = new Div("Div05","80","410",null,"1","80",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("Div05");
            obj.set_background("#f5f5f5");
            this.addChild(obj.name, obj);

            obj = new Radio("radio_auto_type","190","92","200","31",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_innerdataset("ds_promo_auto");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_font("normal 12pt/normal \"Noto Sans KR Medium\"");
            obj.set_text("수동발급");
            obj.set_value("P");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("combo_promo_type","190","143","308","40",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_innerdataset("ds_promo_type");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_borderRadius("5px");
            obj.set_font("normal 10pt/normal \"Noto Sans KR Medium\"");
            obj.set_text("전체회원");
            obj.set_value("all");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("promo_title","190","308",null,"40","110",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_border("1px solid #cccccc");
            obj.set_borderRadius("5px");
            obj.set_font("normal 10pt/normal \"Noto Sans KR Medium\"");
            this.addChild(obj.name, obj);

            obj = new Static("txt_thtitle00","80","364","100","36",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("시작일");
            obj.set_font("normal 12pt/normal \"Noto Sans KR Black\"");
            obj.set_color("#a3aed0");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_start_day","190","364","302","39",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_borderRadius("5px");
            obj.set_font("normal 10pt/normal \"Noto Sans KR Medium\"");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_end_day","742","364","302","39",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_borderRadius("5px");
            obj.set_font("normal 10pt/normal \"Noto Sans KR Medium\"");
            this.addChild(obj.name, obj);

            obj = new Static("txt_thtitle00_00","628","368","100","36",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("종료일");
            obj.set_font("normal 12pt/normal \"Noto Sans KR Black\"");
            obj.set_color("#a3aed0");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtarea_promo_description","190","418","978","141",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_borderRadius("5px");
            obj.set_font("normal 10pt/normal \"Noto Sans KR Medium\"");
            this.addChild(obj.name, obj);

            obj = new Static("stat_bg00","40","652",null,"198","40",null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_background("#ffffff");
            obj.set_borderRadius("10px");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("txt_date00_00","80","674","100","36",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("할인유형");
            obj.set_font("normal 12pt/normal \"Noto Sans KR Black\"");
            obj.set_color("#a3aed0");
            this.addChild(obj.name, obj);

            obj = new Div("Div01_00","80","717",null,"1","80",null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("Div01");
            obj.set_background("#f5f5f5");
            this.addChild(obj.name, obj);

            obj = new Radio("radio_discout_type","190","670","450","35",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_innerdataset("ds_promo_discount_type");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_font("normal 12pt/normal \"Noto Sans KR Medium\"");
            obj.set_text("출력");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("txt_date00_00_00","80","728","100","36",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("할인적용값");
            obj.set_font("normal 12pt/normal \"Noto Sans KR Black\"");
            obj.set_color("#a3aed0");
            this.addChild(obj.name, obj);

            obj = new Edit("input_discount_value","190","728",null,"40","848",null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_border("1px solid #cccccc");
            obj.set_borderRadius("5px");
            obj.set_font("normal 10pt/normal \"Noto Sans KR Medium\"");
            this.addChild(obj.name, obj);

            obj = new Div("Div01_01","80","775",null,"1","80",null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("Div01");
            obj.set_background("#f5f5f5");
            this.addChild(obj.name, obj);

            obj = new Static("txt_date00_00_00_00","80","786","100","36",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("최소주문금액");
            obj.set_font("normal 12pt/normal \"Noto Sans KR Black\"");
            obj.set_color("#a3aed0");
            this.addChild(obj.name, obj);

            obj = new Edit("input_min_order_price","190","786",null,"40","848",null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_border("1px solid #cccccc");
            obj.set_borderRadius("5px");
            obj.set_font("normal 10pt/normal \"Noto Sans KR Medium\"");
            this.addChild(obj.name, obj);

            obj = new Static("txt_date00_01","45","32","170","36",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("프로모션 기본정보");
            obj.set_font("normal 14pt/normal \"Noto Sans KR Black\"");
            obj.set_color("#0a0e79");
            this.addChild(obj.name, obj);

            obj = new Static("txt_date00_01_00","40","612","170","36",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("프로모션 할인율");
            obj.set_font("normal 14pt/normal \"Noto Sans KR Black\"");
            obj.set_color("#0a0e79");
            this.addChild(obj.name, obj);

            obj = new Static("stat_bg00_00","40","916",null,"124","40",null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_background("#ffffff");
            obj.set_borderRadius("10px");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("txt_date00_00_01","90","988","100","36",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("회원선택");
            obj.set_font("normal 12pt/normal \"Noto Sans KR Black\"");
            obj.set_color("#a3aed0");
            this.addChild(obj.name, obj);

            obj = new Static("txt_date00_01_00_00","40","876","170","36",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("프로모션 대상");
            obj.set_font("normal 14pt/normal \"Noto Sans KR Black\"");
            obj.set_color("#0a0e79");
            this.addChild(obj.name, obj);

            obj = new Button("btn_done",null,"1356","140","50","40",null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("저장");
            obj.set_background("#135dae");
            obj.set_color("#ffffff");
            obj.set_borderRadius("5px");
            obj.set_border("0px none");
            obj.set_font("normal bold 10pt/normal \"Noto Sans KR Medium\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancle","40","1354","140","52",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("취소");
            obj.set_background("#ffffff");
            obj.set_color("#ff3d3d");
            obj.set_borderRadius("5px");
            obj.set_border("1px solid #ff3d3d");
            obj.set_font("normal bold 10pt/normal \"Noto Sans KR Medium\"");
            this.addChild(obj.name, obj);

            obj = new Radio("radio_view_type","748","94","200","31",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_innerdataset("ds_promo_active");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_font("normal 12pt/normal \"Noto Sans KR Medium\"");
            obj.set_text("출력");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("txt_date00_02","628","93","100","36",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("활성화여부");
            obj.set_font("normal 12pt/normal \"Noto Sans KR Black\"");
            obj.set_color("#a3aed0");
            this.addChild(obj.name, obj);

            obj = new Radio("radio_promo_type","190","990","480","40",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_innerdataset("ds_promo_target");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_font("normal 12pt/normal \"Noto Sans KR Medium\"");
            obj.set_text("전체회원");
            obj.set_value("all");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("txt_th00","518","146","442","36",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("*관리자의 관리를 위한 타입입니다.실제 영향을 미치지 않습니다");
            obj.set_font("normal 10pt/normal \"Noto Sans KR DemiLight\"");
            obj.set_color("#4e48a1");
            this.addChild(obj.name, obj);

            obj = new Static("txt_date00_00_01_00","90","939","100","36",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("대상타입");
            obj.set_font("normal 12pt/normal \"Noto Sans KR Black\"");
            obj.set_color("#a3aed0");
            this.addChild(obj.name, obj);

            obj = new Radio("radio_promo_target_type","190","936","450","35",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_innerdataset("ds_promo_target_type");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_font("normal 12pt/normal \"Noto Sans KR Medium\"");
            obj.set_text("회원분류");
            obj.set_value("member");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Div("Div01_00_00","90","977",null,"1","70",null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("Div01");
            obj.set_background("#f5f5f5");
            this.addChild(obj.name, obj);

            obj = new Combo("grade_combo","586","992","134","37",null,null,null,null,null,null,this);
            obj.set_readonly("true");
            obj.set_taborder("50");
            obj.set_innerdataset("ds_grade");
            obj.set_codecolumn("GRADE_CODE");
            obj.set_datacolumn("GRADE_NAME");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("stat_bg00_01","40","1100",null,"198","40",null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_background("#ffffff");
            obj.set_borderRadius("10px");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("txt_date00_00_02","80","1122","100","36",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("쿠폰코드");
            obj.set_font("normal 12pt/normal \"Noto Sans KR Black\"");
            obj.set_color("#a3aed0");
            this.addChild(obj.name, obj);

            obj = new Div("Div01_00_01","80","1165",null,"1","80",null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("Div01");
            obj.set_background("#f5f5f5");
            this.addChild(obj.name, obj);

            obj = new Radio("radio_pcoupon_code","190","1118","438","35",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_innerdataset("ds_promo_pnum_auto");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_font("normal 12pt/normal \"Noto Sans KR Medium\"");
            obj.set_text("자동발급");
            obj.set_value("P");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("txt_date00_00_00_01","80","1176","100","36",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("쿠폰사용기간");
            obj.set_font("normal 12pt/normal \"Noto Sans KR Black\"");
            obj.set_color("#a3aed0");
            this.addChild(obj.name, obj);

            obj = new Div("Div01_01_00","80","1223",null,"1","80",null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("Div01");
            obj.set_background("#f5f5f5");
            this.addChild(obj.name, obj);

            obj = new Static("txt_date00_01_00_01","40","1060","170","36",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("프로모션 쿠폰설정");
            obj.set_font("normal 14pt/normal \"Noto Sans KR Black\"");
            obj.set_color("#0a0e79");
            this.addChild(obj.name, obj);

            obj = new Static("txt_date01","80","1234","110","36",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("쿠폰사용가능일");
            obj.set_font("normal 12pt/normal \"Noto Sans KR Black\"");
            obj.set_color("#a3aed0");
            this.addChild(obj.name, obj);

            obj = new Static("txt_update_dt00","638","1234","120","36",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("쿠폰만료일");
            obj.set_font("normal 12pt/normal \"Noto Sans KR Black\"");
            obj.set_color("#a3aed0");
            this.addChild(obj.name, obj);

            obj = new Radio("radio_coupon_dt_set","190","1177","438","35",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_innerdataset("ds_promo_dt");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_font("normal 12pt/normal \"Noto Sans KR Medium\"");
            obj.set_text("고정기간");
            obj.set_value("fixed");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_end_coupon_dt","752","1234","302","39",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_borderRadius("5px");
            obj.set_font("normal 10pt/normal \"Noto Sans KR Medium\"");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_start_coupon_dt","190","1234","302","39",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_borderRadius("5px");
            obj.set_font("normal 10pt/normal \"Noto Sans KR Medium\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","670","1165","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("일");
            obj.set_font("normal 12pt/normal \"Noto Sans KR Medium\"");
            this.addChild(obj.name, obj);

            obj = new Combo("combo_promo_dt_option","523","1176","137","38",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_innerdataset("ds_promo_dt_option");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_popuptype("none");
            obj.set_readonly("true");
            obj.set_text("3");
            obj.set_value("3일");
            obj.set_index("0");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,1430,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","txt_inputid","text","ds_bwrite","INPUT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","grade_combo","value","ds_memberDt","GRADE_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_PromotionWrite.xfdl", function() {
        var memberId="";

        var objDate = new nexacro.Date();
        var mm = (objDate.getMonth() + 1).toString().padLeft(2, "0");
        var dd = objDate.getDate().toString().padLeft(2, "0");
        var TODAY = objDate.getFullYear() + "." + mm + "." + dd;
        var TODAYNUM = objDate.getFullYear() + mm + dd;

        this.Form_PromotionWrite_onload = function(obj,e)
        {
            trace("작성페이지 들어왔음");

            // 데이터셋에 빈 행 추가
            this.ds_promo_write.addRow();

            // arguments
            var ownerFrame = this.getOwnerFrame();
            var promotionId = null;
            var memberId = null;

            if (ownerFrame && ownerFrame.arguments) {
                promotionId = ownerFrame.arguments["PROMOTION_ID"];
                memberId = ownerFrame.arguments["MEMBER_ID"];
            }

            if (!memberId && nexacro.getApplication().gds_adminInfo && nexacro.getApplication().gds_adminInfo.rowcount > 0) {
                memberId = nexacro.getApplication().gds_adminInfo.getColumn(0, "MEMBER_ID");
            }

            this.memberId = memberId;
            this.promotionId = promotionId;  // 수정: this.promotionId로 저장

            // 모드 설정
            this.mode = promotionId ? "update" : "insert";  // 수정: 대문자로 통일

            if (this.mode === "update") {
                trace("업데이트모드임");
                this.fnLoadPromotionData();
            } else {
                trace("Insert모드임");
                if (this.ds_promo_write.rowcount === 0) {
                    this.ds_promo_write.addRow();
                }
                this.txt_date_td.set_text(TODAY);
                this.txt_inputid.set_text(this.memberId);
                this.txt_update_td.set_text(TODAY);
                this.txt_updateid.set_text(this.memberId);

                this.ds_promo_write.setColumn(0, "INPUT_DT", TODAY);
                this.ds_promo_write.setColumn(0, "INPUT_ID", this.memberId);
                this.ds_promo_write.setColumn(0, "UPDATE_DT", TODAY);
                this.ds_promo_write.setColumn(0, "UPDATE_ID", this.memberId);

                this.uploadCompleted = false;
            }

            this.fn_gradeSearch();
        };

        // 기존 프로모션 데이터 조회 (수정 모드일 때)
        this.fnLoadPromotionData = function() {
            var strSvcID = "selectPromoViewByAdmin";
            var strURL = "svc::selectPromoViewByAdmin.do";
            var strInDatasets = "";
            var strOutDatasets = "ds_promo_view=ds_promo_view";
            var strArg = "promotionId=" + this.promotionId;
            var callBack = "fnCallback";
            var inAsync = true;

            this.transaction(strSvcID, strURL, strInDatasets, strOutDatasets, strArg, callBack, inAsync);
        };

        // 기존 데이터를 폼에 채우는 함수
        this.fnSetFormData = function() {
            if(this.ds_promo_view.getRowCount() > 0) {
                var row = 0;

                // 기본 정보
                this.promo_title.set_value(this.ds_promo_view.getColumn(row, "PROMOTION_NAME"));
                this.combo_promo_type.set_value(this.ds_promo_view.getColumn(row, "PROMOTION_TYPE"));
                this.txtarea_promo_description.set_value(this.ds_promo_view.getColumn(row, "DESCRIPTION"));
                this.cal_start_day.set_value(this.ds_promo_view.getColumn(row, "START_DT"));
                this.cal_end_day.set_value(this.ds_promo_view.getColumn(row, "END_DT"));
                this.radio_view_type.set_value(this.ds_promo_view.getColumn(row, "IS_ACTIVE"));
                this.radio_auto_type.set_value(this.ds_promo_view.getColumn(row, "AUTO_ISSUED"));

                // 할인 정보
                this.radio_discout_type.set_value(this.ds_promo_view.getColumn(row, "DISCOUNT_TYPE"));
                this.input_discount_value.set_value(this.ds_promo_view.getColumn(row, "DISCOUNT_VALUE"));
                this.input_min_order_price.set_value(this.ds_promo_view.getColumn(row, "MIN_ORDER_PRICE"));

                // 대상 정보
                this.radio_promo_type00.set_value(this.ds_promo_view.getColumn(row, "TARGET_TYPE"));
                this.radio_promo_type.set_value(this.ds_promo_view.getColumn(row, "TARGET_VALUE"));

                // 등급별인 경우 콤보박스 설정
                if(this.ds_promo_view.getColumn(row, "TARGET_VALUE") == "grade") {
                    this.grade_combo.set_readonly(false);
                    this.grade_combo.set_value(this.ds_promo_view.getColumn(row, "TARGET_VALUE"));
                }

                // 쿠폰 정보
                this.input_coupon_code.set_value(this.ds_promo_view.getColumn(row, "P_COUPON_CODE"));
                this.cal_end_coupon_dt.set_value(this.ds_promo_view.getColumn(row, "EXPIRY_DT"));

                // PERIOD_SETTING에 따른 처리
                var periodSetting = this.ds_promo_view.getColumn(row, "PERIOD_SETTING");
                if(periodSetting == "fixed") {
                    this.radio_coupon_dt_set.set_value("fixed");
                } else if(periodSetting && periodSetting.indexOf("relative_") == 0) {
                    this.radio_coupon_dt_set.set_value("relative");
                    var days = periodSetting.replace("relative_", "");
                    this.combo_promo_dt_option.set_value(days);
                    this.combo_promo_dt_option.set_readonly(false);
                }

                trace("기존 데이터가 폼에 설정되었습니다.");
            }
        };

        // 취소 버튼
        this.btn_cancle_onclick = function(obj,e)
        {
            if(this.ds_promo_write.getRowCount() > 0 && this.ds_promo_write.getRowType(0) != Dataset.ROWTYPE_NORMAL) {
                if(confirm("작성 중인 내용이 있습니다. 취소하시겠습니까?")) {
                    this.close("CANCEL");
                }
            } else {
                this.close("CANCEL");
            }
        };

        this.btn_done_onclick = function(obj,e)
        {
            // 유효성 검사
            if(!this.fnValidation()) {
                return;
            }

            // 폼 데이터 수집
            this.fnCollectFormData();

            // 수집된 데이터 trace로 확인
            this.fnTraceCollectedData();

            var strSvcID = "";
            var strURL = "";
            var sInDatasets = "ds_promo_write=ds_promo_write";
            var sOutDatasets = "";
            var sArguments = "";
            var sCallBackFnc = "fnCallback";

            if(this.mode == "update") {
                // 수정
                strSvcID = "updatePromotion";
                strURL = "svc::updatePromotionByAdmin.do";
            } else {
                // 등록
                strSvcID = "insertPromotion";
                strURL = "svc::insertPromotionByAdmin.do";
            }

            this.transaction(strSvcID, strURL, sInDatasets, sOutDatasets, sArguments, sCallBackFnc);
        };

        // 폼 데이터 수집
        this.fnCollectFormData = function()
        {
            var row = 0;

            // 수정 모드일 때 PROMOTION_ID 설정
            if(this.mode == "update") {
                this.ds_promo_write.setColumn(row, "PROMOTION_ID", this.promotionId);
            }

            // 작성자 정보
            this.ds_promo_write.setColumn(row, "INPUT_ID", this.memberId || 'admin');
            this.ds_promo_write.setColumn(row, "UPDATE_ID", this.memberId || 'admin');

            // 기본 정보
            this.ds_promo_write.setColumn(row, "PROMOTION_NAME", this.promo_title.getValue());
            this.ds_promo_write.setColumn(row, "PROMOTION_TYPE", this.combo_promo_type.getValue());
            this.ds_promo_write.setColumn(row, "DESCRIPTION", this.txtarea_promo_description.getValue());
            this.ds_promo_write.setColumn(row, "START_DT", this.cal_start_day.getValue());
            this.ds_promo_write.setColumn(row, "END_DT", this.cal_end_day.getValue());
            this.ds_promo_write.setColumn(row, "IS_ACTIVE", this.radio_view_type.getValue());
            this.ds_promo_write.setColumn(row, "AUTO_ISSUED", this.radio_auto_type.getValue());

            // 할인 정보
            this.ds_promo_write.setColumn(row, "DISCOUNT_TYPE", this.radio_discout_type.getValue());
            this.ds_promo_write.setColumn(row, "DISCOUNT_VALUE", this.input_discount_value.getValue());
            this.ds_promo_write.setColumn(row, "MIN_ORDER_PRICE", this.input_min_order_price.getValue());

            // 대상 정보
            this.ds_promo_write.setColumn(row, "TARGET_TYPE", this.radio_promo_type00.getValue());

            // 등급별 선택 처리
            var targetValue = this.radio_promo_type.getValue();
            if(targetValue == "grade") {
                targetValue = this.grade_combo.getValue();
            }
            this.ds_promo_write.setColumn(row, "TARGET_VALUE", targetValue);

            // 쿠폰 코드 (수정 모드가 아닐 때만 자동생성)
            if(this.mode != "update") {
                var today = new Date();
                var dateStr = today.getFullYear() +
                              String(today.getMonth() + 1).padStart(2, '0') +
                              String(today.getDate()).padStart(2, '0');
                var couponCode = "PROMOTION" + dateStr;
                this.ds_promo_write.setColumn(row, "P_COUPON_CODE", couponCode);
            } else {
                this.ds_promo_write.setColumn(row, "P_COUPON_CODE", this.input_coupon_code.getValue());
            }

            // 쿠폰 기간 설정
            var periodType = this.radio_coupon_dt_set.getValue();
            if(periodType == "fixed") {
                this.ds_promo_write.setColumn(row, "EXPIRY_DT", this.cal_end_coupon_dt.getValue());
                this.ds_promo_write.setColumn(row, "PERIOD_SETTING", "fixed");
            } else {
                var days = this.combo_promo_dt_option.getValue();
                this.ds_promo_write.setColumn(row, "PERIOD_SETTING", "relative_" + days);

                // 쿠폰 발행일 기준으로 만료일 자동 계산
                var startDate = this.cal_start_coupon_dt.getValue() || new Date().toString().substr(0,8);
                var startDateObj = new Date(startDate);
                var expiryDate = new Date(startDateObj.getTime() + (parseInt(days) * 24 * 60 * 60 * 1000));
                var expiryStr = expiryDate.getFullYear() +
                               String(expiryDate.getMonth() + 1).padStart(2, '0') +
                               String(expiryDate.getDate()).padStart(2, '0');
                this.ds_promo_write.setColumn(row, "EXPIRY_DT", expiryStr);
            }
        };

        // 수집된 데이터 trace 출력
        this.fnTraceCollectedData = function()
        {
            trace("=== 수집된 프로모션 데이터 ===");
            var row = 0;

            trace("MODE: " + this.mode);
            trace("PROMOTION_ID: " + this.ds_promo_write.getColumn(row, "PROMOTION_ID"));
            trace("PROMOTION_NAME: " + this.ds_promo_write.getColumn(row, "PROMOTION_NAME"));
            trace("PROMOTION_TYPE: " + this.ds_promo_write.getColumn(row, "PROMOTION_TYPE"));
            trace("DESCRIPTION: " + this.ds_promo_write.getColumn(row, "DESCRIPTION"));
            trace("START_DT: " + this.ds_promo_write.getColumn(row, "START_DT"));
            trace("END_DT: " + this.ds_promo_write.getColumn(row, "END_DT"));
            trace("IS_ACTIVE: " + this.ds_promo_write.getColumn(row, "IS_ACTIVE"));
            trace("AUTO_ISSUED: " + this.ds_promo_write.getColumn(row, "AUTO_ISSUED"));
            trace("DISCOUNT_TYPE: " + this.ds_promo_write.getColumn(row, "DISCOUNT_TYPE"));
            trace("DISCOUNT_VALUE: " + this.ds_promo_write.getColumn(row, "DISCOUNT_VALUE"));
            trace("MIN_ORDER_PRICE: " + this.ds_promo_write.getColumn(row, "MIN_ORDER_PRICE"));
            trace("TARGET_TYPE: " + this.ds_promo_write.getColumn(row, "TARGET_TYPE"));
            trace("TARGET_VALUE: " + this.ds_promo_write.getColumn(row, "TARGET_VALUE"));
            trace("P_COUPON_CODE: " + this.ds_promo_write.getColumn(row, "P_COUPON_CODE"));
            trace("EXPIRY_DT: " + this.ds_promo_write.getColumn(row, "EXPIRY_DT"));
            trace("PERIOD_SETTING: " + this.ds_promo_write.getColumn(row, "PERIOD_SETTING"));
            trace("INPUT_ID: " + this.ds_promo_write.getColumn(row, "INPUT_ID"));
            trace("UPDATE_ID: " + this.ds_promo_write.getColumn(row, "UPDATE_ID"));
            trace("===============================");
        };

        // 등급별 선택시 콤보박스 활성화
        this.radio_promo_type_onitemchanged = function(obj,e)
        {
            if(e.postvalue == "grade") {
                this.grade_combo.set_readonly(false);
            } else {
                this.grade_combo.set_readonly(true);
                this.grade_combo.set_value("");
            }
        };

        //등급 조회
        this.fn_gradeSearch = function(){

            var strSvcID = "selectMemberGradeList"
            var setURL = "svc::selectMemberGradeListByAdmin.do";
            var strInDatasets = "";
            var strOutDatasets = "ds_grade=ds_grade";
            var strArg = "";
            var callBack = "fnCallback";
            var inAsync = true;

            this.transaction(strSvcID,setURL,strInDatasets,strOutDatasets,strArg,callBack,inAsync);
        }

        // 쿠폰 기간 설정 변경시 콤보박스 활성화
        this.radio_coupon_dt_set_onitemchanged = function(obj,e)
        {
            if(e.postvalue == "relative") {
                this.combo_promo_dt_option.set_readonly(false);
                this.cal_end_coupon_dt.set_readonly(true);
            } else {
                this.combo_promo_dt_option.set_readonly(true);
                this.cal_end_coupon_dt.set_readonly(false);
            }
        };

        // 실시간 유효성 검사 이벤트들
        this.cal_end_day_onchanged = function(obj,e)
        {
            if(this.cal_start_day.getValue() && this.cal_end_day.getValue()) {
                var startDt = new Date(this.cal_start_day.getValue());
                var endDt = new Date(this.cal_end_day.getValue());

                if(startDt >= endDt) {
                    alert("종료일은 시작일보다 늦어야 합니다.");
                    this.cal_end_day.set_value("");
                    this.cal_end_day.setFocus();
                }
            }
        };

        this.cal_start_day_onchanged = function(obj,e)
        {
            if(this.cal_start_day.getValue() && this.cal_end_day.getValue()) {
                var startDt = new Date(this.cal_start_day.getValue());
                var endDt = new Date(this.cal_end_day.getValue());

                if(startDt >= endDt) {
                    alert("시작일은 종료일보다 빨라야 합니다.");
                    this.cal_start_day.set_value("");
                    this.cal_start_day.setFocus();
                }
            }
        };

        this.input_discount_value_onchanged = function(obj,e)
        {
            var value = parseFloat(e.postvalue);
            var discountType = this.radio_discout_type.getValue();

            if(isNaN(value) || value <= 0) {
                alert("할인값은 0보다 큰 숫자를 입력해주세요.");
                this.input_discount_value.set_value("");
                this.input_discount_value.setFocus();
                return;
            }

            if(discountType == "R" && value > 100) {
                alert("할인율은 100%를 초과할 수 없습니다.");
                this.input_discount_value.set_value("");
                this.input_discount_value.setFocus();
            }
        };

        this.input_min_order_price_onchanged = function(obj,e)
        {
            var value = parseFloat(e.postvalue);

            if(e.postvalue && (isNaN(value) || value < 0)) {
                alert("최소주문금액은 0 이상의 숫자를 입력해주세요.");
                this.input_min_order_price.set_value("");
                this.input_min_order_price.setFocus();
            }
        };

        // 트랜잭션 콜백
        this.fnCallback = function(svcId, errorCode, errorMsg)
        {
            if(errorCode < 0) {
                alert("오류가 발생했습니다.\n" + errorMsg);
                return;
            }

            switch(svcId) {
                case "selectMemberGradeList":
                    trace("등급 데이터 조회 완료: " + this.ds_grade.getRowCount() + "건");
                    if(this.ds_grade.getRowCount() > 0) {
                        trace("첫 번째 등급: " + this.ds_grade.getColumn(0, "GRADE_NAME"));
                    }
                    break;

                case "selectPromoViewByAdmin":
                    trace("기존 프로모션 데이터 로딩 완료");
                    this.fnSetFormData();
                    break;

                case "insertPromotion":
                    alert("프로모션이 등록되었습니다.");
                    break;

                case "updatePromotion":
                    alert("프로모션이 수정되었습니다.");
                    break;
            }
        };

        // 유효성 검사
        this.fnValidation = function()
        {
            if(!this.promo_title.getValue() || this.promo_title.getValue().trim() == "") {
                alert("프로모션명을 입력해주세요.");
                this.promo_title.setFocus();
                return false;
            }

            if(!this.cal_start_day.getValue()) {
                alert("시작일을 입력해주세요.");
                this.cal_start_day.setFocus();
                return false;
            }

            if(!this.cal_end_day.getValue()) {
                alert("종료일을 입력해주세요.");
                this.cal_end_day.setFocus();
                return false;
            }

            var startDt = new Date(this.cal_start_day.getValue());
            var endDt = new Date(this.cal_end_day.getValue());

            if(startDt >= endDt) {
                alert("종료일은 시작일보다 늦어야 합니다.");
                this.cal_end_day.setFocus();
                return false;
            }

            if(!this.input_discount_value.getValue() || this.input_discount_value.getValue().trim() == "") {
                alert("할인값을 입력해주세요.");
                this.input_discount_value.setFocus();
                return false;
            }

            var discountType = this.radio_discout_type.getValue();
            var discountValue = parseFloat(this.input_discount_value.getValue());

            if(discountValue <= 0) {
                alert("할인값은 0보다 커야 합니다.");
                this.input_discount_value.setFocus();
                return false;
            }

            if(discountType == "R" && discountValue > 100) {
                alert("할인율은 100%를 초과할 수 없습니다.");
                this.input_discount_value.setFocus();
                return false;
            }

            // 등급별 선택시 등급 콤보박스 확인
            if(this.radio_promo_type.getValue() == "grade" && !this.grade_combo.getValue()) {
                alert("등급을 선택해주세요.");
                this.grade_combo.setFocus();
                return false;
            }

            return true;
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_PromotionWrite_onload,this);
            this.txt_thbanner.addEventHandler("onclick",this.txt_th00_onclick,this);
            this.txt_thtitle.addEventHandler("onclick",this.txt_th00_onclick,this);
            this.txt_date.addEventHandler("onclick",this.txt_th00_onclick,this);
            this.txt_date_td.addEventHandler("onclick",this.txt_th00_onclick,this);
            this.txt_date00.addEventHandler("onclick",this.txt_th00_onclick,this);
            this.txt_update_dt.addEventHandler("onclick",this.txt_th00_onclick,this);
            this.txt_update_td.addEventHandler("onclick",this.txt_th00_onclick,this);
            this.txt_date02.addEventHandler("onclick",this.txt_th00_onclick,this);
            this.txt_inputid.addEventHandler("onclick",this.txt_th00_onclick,this);
            this.txt_date01_00.addEventHandler("onclick",this.txt_th00_onclick,this);
            this.txt_updateid.addEventHandler("onclick",this.txt_th00_onclick,this);
            this.txt_thtitle00.addEventHandler("onclick",this.txt_th00_onclick,this);
            this.txt_thtitle00_00.addEventHandler("onclick",this.txt_th00_onclick,this);
            this.txt_date00_00.addEventHandler("onclick",this.txt_th00_onclick,this);
            this.txt_date00_00_00.addEventHandler("onclick",this.txt_th00_onclick,this);
            this.txt_date00_00_00_00.addEventHandler("onclick",this.txt_th00_onclick,this);
            this.txt_date00_01.addEventHandler("onclick",this.txt_th00_onclick,this);
            this.txt_date00_01_00.addEventHandler("onclick",this.txt_th00_onclick,this);
            this.txt_date00_00_01.addEventHandler("onclick",this.txt_th00_onclick,this);
            this.txt_date00_01_00_00.addEventHandler("onclick",this.txt_th00_onclick,this);
            this.btn_done.addEventHandler("onclick",this.btn_done_onclick,this);
            this.btn_cancle.addEventHandler("onclick",this.btn_cancle_onclick,this);
            this.txt_date00_02.addEventHandler("onclick",this.txt_th00_onclick,this);
            this.radio_promo_type.addEventHandler("onitemchanged",this.radio_promo_type_onitemchanged,this);
            this.txt_date00_00_01_00.addEventHandler("onclick",this.txt_th00_onclick,this);
            this.txt_date00_00_02.addEventHandler("onclick",this.txt_th00_onclick,this);
            this.txt_date00_00_00_01.addEventHandler("onclick",this.txt_th00_onclick,this);
            this.txt_date00_01_00_01.addEventHandler("onclick",this.txt_th00_onclick,this);
            this.txt_date01.addEventHandler("onclick",this.txt_th00_onclick,this);
            this.txt_update_dt00.addEventHandler("onclick",this.txt_th00_onclick,this);
            this.radio_coupon_dt_set.addEventHandler("onitemchanged",this.radio_coupon_dt_set_onitemchanged,this);
        };
        this.loadIncludeScript("Form_PromotionWrite.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
