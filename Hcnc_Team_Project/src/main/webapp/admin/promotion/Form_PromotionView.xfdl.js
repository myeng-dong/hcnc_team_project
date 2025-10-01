(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_PromotionView");
            this.set_titletext("New Form");
            this.set_background("#F4F7FE");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,1430);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_promo", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"PROMOTION_ID\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"PROMOTION_NAME\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"PROMOTION_TYPE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"DESCRIPTION\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"START_DT\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"END_DT\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"IS_ACTIVE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"INPUT_DT\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"UPDATE_DT\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"INPUT_ID\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"AUTO_ISSUED\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"P_COUPON_CODE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"ISSUED_DT\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"EXPIRY_DT\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"PERIOD_SETTING\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"DISCOUNT_ID\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"DISCOUNT_TYPE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"DISCOUNT_VALUE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"MIN_ORDER_PRICE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"TARGET_ID\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"TARGET_TYPE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"TARGET_VALUE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"TARGET_AMOUNT\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_promo_target", this);
            obj._setContents("<ColumnInfo><Column id=\"datacolumn\" type=\"STRING\" size=\"256\"/><Column id=\"codecolumn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체회원</Col><Col id=\"codecolumn\">all</Col></Row><Row><Col id=\"datacolumn\">신규회원</Col><Col id=\"codecolumn\">new</Col></Row><Row><Col id=\"datacolumn\">등급별</Col><Col id=\"codecolumn\">grade</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_promo_discount_type", this);
            obj._setContents("<ColumnInfo><Column id=\"datacolumn\" type=\"STRING\" size=\"256\"/><Column id=\"codecolumn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">할인%</Col><Col id=\"codecolumn\">R</Col></Row><Row><Col id=\"datacolumn\">할인금액</Col><Col id=\"codecolumn\">A</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_promo_auto", this);
            obj._setContents("<ColumnInfo><Column id=\"datacolumn\" type=\"STRING\" size=\"256\"/><Column id=\"codecolumn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">수동발급</Col><Col id=\"codecolumn\">N</Col></Row><Row><Col id=\"datacolumn\">자동발급</Col><Col id=\"codecolumn\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_promo_active", this);
            obj._setContents("<ColumnInfo><Column id=\"datacolumn\" type=\"STRING\" size=\"256\"/><Column id=\"codecolumn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">활성화</Col><Col id=\"codecolumn\">Y</Col></Row><Row><Col id=\"datacolumn\">비활성화</Col><Col id=\"codecolumn\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_promo_type", this);
            obj._setContents("<ColumnInfo><Column id=\"datacolumn\" type=\"STRING\" size=\"256\"/><Column id=\"codecolumn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">프로모션이벤트</Col><Col id=\"codecolumn\">PROMOTION</Col></Row><Row><Col id=\"datacolumn\">신규회원이벤트</Col><Col id=\"codecolumn\">WELCOME</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_promo_target_type", this);
            obj._setContents("<ColumnInfo><Column id=\"datacolumn\" type=\"STRING\" size=\"256\"/><Column id=\"codecolumn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">회원분류</Col><Col id=\"codecolumn\">member</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grade", this);
            obj._setContents("<ColumnInfo><Column id=\"GRADE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_promo_pnum_auto", this);
            obj._setContents("<ColumnInfo><Column id=\"datacolumn\" type=\"STRING\" size=\"256\"/><Column id=\"codecolumn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">자동발급</Col><Col id=\"codecolumn\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_promo_dt", this);
            obj._setContents("<ColumnInfo><Column id=\"datacolumn\" type=\"STRING\" size=\"256\"/><Column id=\"codecolumn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">고정기간</Col><Col id=\"codecolumn\">fixed</Col></Row><Row><Col id=\"datacolumn\">발급일기준</Col><Col id=\"codecolumn\">relative</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_promo_dt_option", this);
            obj._setContents("<ColumnInfo><Column id=\"datacolumn\" type=\"STRING\" size=\"256\"/><Column id=\"codecolumn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">3</Col><Col id=\"codecolumn\">3</Col></Row><Row><Col id=\"datacolumn\">5</Col><Col id=\"codecolumn\">5</Col></Row><Row><Col id=\"datacolumn\">7</Col><Col id=\"codecolumn\">7</Col></Row><Row><Col id=\"datacolumn\">15</Col><Col id=\"codecolumn\">15</Col></Row><Row><Col id=\"datacolumn\">30</Col><Col id=\"codecolumn\">30</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_modify",null,"1340","140","44","40",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("수정");
            obj.set_background("#135dae");
            obj.set_color("#ffffff");
            obj.set_borderRadius("5px");
            obj.set_border("0px none");
            obj.set_font("normal bold 10pt/normal \"Noto Sans KR Medium\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancle","40","1338","140","44",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("목록으로");
            obj.set_background("#ffffff");
            obj.set_color("#135dae");
            obj.set_borderRadius("5px");
            obj.set_border("1px solid #135dae");
            obj.set_font("normal bold 10pt/normal \"Noto Sans KR Medium\"");
            this.addChild(obj.name, obj);

            obj = new Static("stat_bg","40","70",null,"520","40",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("#ffffff");
            obj.set_borderRadius("10px");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("txt_th","80","146","100","36",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("프로모션타입");
            obj.set_font("normal 12pt/normal \"Noto Sans KR Black\"");
            obj.set_color("#a3aed0");
            this.addChild(obj.name, obj);

            obj = new Static("txt_thbanner","80","308","100","36",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("프로모션명");
            obj.set_font("normal 12pt/normal \"Noto Sans KR Black\"");
            obj.set_color("#a3aed0");
            this.addChild(obj.name, obj);

            obj = new Static("txt_thtitle","80","418","100","36",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("설명");
            obj.set_font("normal 12pt/normal \"Noto Sans KR Black\"");
            obj.set_color("#a3aed0");
            this.addChild(obj.name, obj);

            obj = new Static("txt_date","80","254","100","36",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("등록일");
            obj.set_font("normal 12pt/normal \"Noto Sans KR Black\"");
            obj.set_color("#a3aed0");
            this.addChild(obj.name, obj);

            obj = new Static("txt_date_td","190","254","120","36",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("-");
            obj.set_font("normal 14pt/normal \"Noto Sans KR\"");
            this.addChild(obj.name, obj);

            obj = new Static("txt_date00","80","92","100","36",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("발급유무");
            obj.set_font("normal 12pt/normal \"Noto Sans KR Black\"");
            obj.set_color("#a3aed0");
            this.addChild(obj.name, obj);

            obj = new Static("txt_update_dt","628","254","120","36",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("수정일");
            obj.set_font("normal 12pt/normal \"Noto Sans KR Black\"");
            obj.set_color("#a3aed0");
            this.addChild(obj.name, obj);

            obj = new Static("txt_update_td","750","254","372","36",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("-");
            obj.set_font("normal 14pt/normal \"Noto Sans KR\"");
            this.addChild(obj.name, obj);

            obj = new Static("txt_date02","80","201","100","36",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("작성자");
            obj.set_font("normal 12pt/normal \"Noto Sans KR Black\"");
            obj.set_color("#a3aed0");
            this.addChild(obj.name, obj);

            obj = new Static("txt_inputid","190","201","250","36",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("-");
            obj.set_font("normal 14pt/normal \"Noto Sans KR\"");
            this.addChild(obj.name, obj);

            obj = new Static("txt_date01_00","628","201","120","36",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("최종작성자");
            obj.set_font("normal 12pt/normal \"Noto Sans KR Black\"");
            obj.set_color("#a3aed0");
            this.addChild(obj.name, obj);

            obj = new Static("txt_updateid","748","201","372","36",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("-");
            obj.set_font("normal 14pt/normal \"Noto Sans KR\"");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","80","190",null,"1","80",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("Div00");
            obj.set_background("#f5f5f5");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","80","135",null,"1","80",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("Div01");
            obj.set_background("#f5f5f5");
            this.addChild(obj.name, obj);

            obj = new Div("Div02","80","245",null,"1","80",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("Div02");
            obj.set_background("#f5f5f5");
            this.addChild(obj.name, obj);

            obj = new Div("Div03","80","300",null,"1","80",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("Div03");
            obj.set_background("#f5f5f5");
            this.addChild(obj.name, obj);

            obj = new Div("Div04","80","355",null,"1","80",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("Div04");
            obj.set_background("#f5f5f5");
            this.addChild(obj.name, obj);

            obj = new Div("Div05","80","410",null,"1","80",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("Div05");
            obj.set_background("#f5f5f5");
            this.addChild(obj.name, obj);

            obj = new Radio("radio_auto_type","190","92","200","31",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_innerdataset("ds_promo_auto");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_font("normal 12pt/normal \"Noto Sans KR Medium\"");
            obj.set_text("수동발급");
            obj.set_value("P");
            obj.set_index("0");
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
            obj.set_background("#FFFFFF");
            obj.set_color("#666666");
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

            obj = new Div("Div01_01","80","775",null,"1","80",null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("Div01");
            obj.set_background("#f5f5f5");
            this.addChild(obj.name, obj);

            obj = new Static("txt_date00_00_00_00","80","786","100","36",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("최소주문금액");
            obj.set_font("normal 12pt/normal \"Noto Sans KR Black\"");
            obj.set_color("#a3aed0");
            this.addChild(obj.name, obj);

            obj = new Static("txt_date00_01","45","32","170","36",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("프로모션 기본정보");
            obj.set_font("normal 14pt/normal \"Noto Sans KR Black\"");
            obj.set_color("#0a0e79");
            this.addChild(obj.name, obj);

            obj = new Static("txt_date00_01_00","40","612","170","36",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("프로모션 할인율");
            obj.set_font("normal 14pt/normal \"Noto Sans KR Black\"");
            obj.set_color("#0a0e79");
            this.addChild(obj.name, obj);

            obj = new Radio("radio_view_type","748","94","200","31",null,null,null,null,null,null,this);
            obj.set_taborder("36");
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
            obj.set_taborder("37");
            obj.set_text("활성화여부");
            obj.set_font("normal 12pt/normal \"Noto Sans KR Black\"");
            obj.set_color("#a3aed0");
            this.addChild(obj.name, obj);

            obj = new Static("combo_promo_type","190","146","250","36",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("-");
            obj.set_font("normal 14pt/normal \"Noto Sans KR\"");
            this.addChild(obj.name, obj);

            obj = new Static("promo_title","191","312","999","36",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("-");
            obj.set_font("normal 14pt/normal \"Noto Sans KR\"");
            this.addChild(obj.name, obj);

            obj = new Static("input_min_order_price","201","786","999","36",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("-");
            obj.set_font("normal 14pt/normal \"Noto Sans KR\"");
            this.addChild(obj.name, obj);

            obj = new Static("input_discount_value","200","730","120","36",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("-");
            obj.set_font("normal 14pt/normal \"Noto Sans KR\"");
            this.addChild(obj.name, obj);

            obj = new Static("stat_bg00_00","40","916",null,"124","40",null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_background("#ffffff");
            obj.set_borderRadius("10px");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("txt_date00_00_01","90","988","100","36",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("회원선택");
            obj.set_font("normal 12pt/normal \"Noto Sans KR Black\"");
            obj.set_color("#a3aed0");
            this.addChild(obj.name, obj);

            obj = new Static("txt_date00_01_00_00","40","876","170","36",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("프로모션 대상");
            obj.set_font("normal 14pt/normal \"Noto Sans KR Black\"");
            obj.set_color("#0a0e79");
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

            obj = new Static("txt_date00_00_01_00","90","939","100","36",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("대상타입");
            obj.set_font("normal 12pt/normal \"Noto Sans KR Black\"");
            obj.set_color("#a3aed0");
            this.addChild(obj.name, obj);

            obj = new Radio("radio_promo_target_type","190","936","450","35",null,null,null,null,null,null,this);
            obj.set_taborder("47");
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
            obj.set_taborder("48");
            obj.set_text("Div01");
            obj.set_background("#f5f5f5");
            this.addChild(obj.name, obj);

            obj = new Combo("grade_combo","586","992","134","37",null,null,null,null,null,null,this);
            obj.set_readonly("true");
            obj.set_taborder("49");
            obj.set_innerdataset("ds_grade");
            obj.set_codecolumn("GRADE_CODE");
            obj.set_datacolumn("GRADE_NAME");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("stat_bg00_01","40","1100",null,"198","40",null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_background("#ffffff");
            obj.set_borderRadius("10px");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("txt_date00_00_02","80","1122","100","36",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("쿠폰코드");
            obj.set_font("normal 12pt/normal \"Noto Sans KR Black\"");
            obj.set_color("#a3aed0");
            this.addChild(obj.name, obj);

            obj = new Div("Div01_00_01","80","1165",null,"1","80",null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("Div01");
            obj.set_background("#f5f5f5");
            this.addChild(obj.name, obj);

            obj = new Radio("radio_pcoupon_code","190","1118","438","35",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_innerdataset("ds_promo_pnum_auto00");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_font("normal 12pt/normal \"Noto Sans KR Medium\"");
            obj.set_text("자동발급");
            obj.set_value("P");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("txt_date00_00_00_01","80","1176","100","36",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("쿠폰사용기간");
            obj.set_font("normal 12pt/normal \"Noto Sans KR Black\"");
            obj.set_color("#a3aed0");
            this.addChild(obj.name, obj);

            obj = new Div("Div01_01_00","80","1223",null,"1","80",null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("Div01");
            obj.set_background("#f5f5f5");
            this.addChild(obj.name, obj);

            obj = new Static("txt_date00_01_00_01","40","1060","170","36",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("프로모션 쿠폰설정");
            obj.set_font("normal 14pt/normal \"Noto Sans KR Black\"");
            obj.set_color("#0a0e79");
            this.addChild(obj.name, obj);

            obj = new Static("txt_date01","80","1234","110","36",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("쿠폰사용가능일");
            obj.set_font("normal 12pt/normal \"Noto Sans KR Black\"");
            obj.set_color("#a3aed0");
            this.addChild(obj.name, obj);

            obj = new Static("txt_update_dt00","638","1234","120","36",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("쿠폰만료일");
            obj.set_font("normal 12pt/normal \"Noto Sans KR Black\"");
            obj.set_color("#a3aed0");
            this.addChild(obj.name, obj);

            obj = new Radio("radio_coupon_dt_set","190","1177","438","35",null,null,null,null,null,null,this);
            obj.set_taborder("59");
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
            obj.set_taborder("60");
            obj.set_borderRadius("5px");
            obj.set_font("normal 10pt/normal \"Noto Sans KR Medium\"");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_start_coupon_dt","190","1234","302","39",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_borderRadius("5px");
            obj.set_font("normal 10pt/normal \"Noto Sans KR Medium\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","670","1165","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("일");
            obj.set_font("normal 12pt/normal \"Noto Sans KR Medium\"");
            this.addChild(obj.name, obj);

            obj = new Combo("combo_promo_dt_option","523","1176","137","38",null,null,null,null,null,null,this);
            obj.set_taborder("63");
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

            obj = new BindItem("item1","combo_promo_type","text","ds_bwrite","INPUT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","grade_combo","value","ds_memberDt","GRADE_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_PromotionView.xfdl", function() {
        this.Form_PromotionView_onload = function(obj,e)
        {
            trace("프로모션상세");
            var ownerFrame = this.getOwnerFrame();
            var promotionId;

            if(ownerFrame.arguments && ownerFrame.arguments["PROMOTION_ID"]) {
                promotionId = ownerFrame.arguments["PROMOTION_ID"];
            }

            trace("사용할 promotionId: " + promotionId);
            this.fn_disableAllComponents();

            this.ds_promo.addRow();
            this.fn_promotionView(promotionId);
        };

        this.btn_cancle_onclick = function(obj,e)
        {
        	this.getOwnerFrame().set_formurl("promotion::Form_PromotionList.xfdl");
        };

        this.btn_modify_onclick = function(obj,e)
        {
        	var ownerFrame = this.getOwnerFrame();
            var promotionId;

            promotionId = this.ds_promo.getColumn(0,"PROMOTION_ID")

        	this.getOwnerFrame().arguments = {"PROMOTION_ID" : promotionId}
            this.getOwnerFrame().set_formurl("promotion::Form_PromotionWrite.xfdl");
        };

        //함수
        this.fn_promotionView = function(promotionId){
            var strSvcID = "selectPromoViewByAdmin"
            var strURL = "svc::selectPromoViewByAdmin.do";
            var strInDatasets = "";
            var strOutDatasets = "ds_promo=ds_promo";
            var strArg = "promotionId="+promotionId;
            var callBack = "fn_callBack";
            var inAsync = true;

            this.transaction(strSvcID,strURL,strInDatasets,strOutDatasets,strArg,callBack,inAsync);
        }

        //쇼잉용 값입력
        this.fn_setPromotionData = function() {
            if(this.ds_promo.getRowCount() > 0) {
                var row = 0;

                // 기본 정보
                this.promo_title.set_text(this.ds_promo.getColumn(row, "PROMOTION_NAME"));
                this.combo_promo_type.set_text(this.ds_promo.getColumn(row, "PROMOTION_TYPE"));
                this.txtarea_promo_description.set_value(this.ds_promo.getColumn(row, "DESCRIPTION"));
                this.cal_start_day.set_value(this.ds_promo.getColumn(row, "START_DT"));
                this.cal_end_day.set_value(this.ds_promo.getColumn(row, "END_DT"));

                // 라디오 버튼들 - 값 매칭 확인 필요
                var autoIssued = this.ds_promo.getColumn(row, "AUTO_ISSUED");
                var isActive = this.ds_promo.getColumn(row, "IS_ACTIVE");
                this.radio_discout_type.set_value(this.ds_promo.getColumn(row, "DISCOUNT_TYPE"));

                // 할인 정보 - 숫자 포맷팅
                var discountValue = this.ds_promo.getColumn(row, "DISCOUNT_VALUE");
                var minOrderPrice = this.ds_promo.getColumn(row, "MIN_ORDER_PRICE");

                // 소수점 제거하고 천단위 콤마
                discountValue = this.gfn_numberWithCommas(parseInt(discountValue));
                minOrderPrice = this.gfn_numberWithCommas(parseInt(minOrderPrice));

                // 할인 타입에 따라 표시
                var discountType = this.ds_promo.getColumn(row, "DISCOUNT_TYPE");
                if(discountType == "R") {
                    this.input_discount_value.set_text(discountValue + "%");
                } else {
                    this.input_discount_value.set_text(discountValue + "원");
                }
                this.input_min_order_price.set_text(minOrderPrice + "원");

                // 대상 정보 - TARGET_TYPE이 아니라 실제 값 확인
                var targetType = this.ds_promo.getColumn(row, "TARGET_TYPE");
                var targetValue = this.ds_promo.getColumn(row, "TARGET_VALUE");

                this.radio_promo_target_type.set_value(targetType || "member");

                // TARGET_VALUE 설정
                if(targetValue == "6" || targetValue == "5" || targetValue == "4" ||
                   targetValue == "3" || targetValue == "2" || targetValue == "1") {
                    this.radio_promo_type.set_value("grade");
                    this.grade_combo.set_value(targetValue);
                } else {
                    this.radio_promo_type.set_value(targetValue); // all, new 등
                }

                // 쿠폰 기간 설정
                var periodSetting = this.ds_promo.getColumn(row, "PERIOD_SETTING");
                trace("PERIOD_SETTING: [" + periodSetting + "]");

                if(periodSetting == "fixed") {
                    this.radio_coupon_dt_set.set_value("fixed");
                } else if(periodSetting && periodSetting.indexOf("relative_") == 0) {
                    this.radio_coupon_dt_set.set_value("relative");
                    var days = periodSetting.replace("relative_", "");
                    this.combo_promo_dt_option.set_value(days);
                }

                // 날짜 포맷팅 (YYYY-MM-DD)
                var issuedDt = this.ds_promo.getColumn(row, "ISSUED_DT");
                var expiryDt = this.ds_promo.getColumn(row, "EXPIRY_DT");
                var inputDt = this.ds_promo.getColumn(row, "INPUT_DT");
                var updateDt = this.ds_promo.getColumn(row, "UPDATE_DT");

                this.cal_start_coupon_dt.set_value(this.gfn_formatDate(issuedDt));
                this.cal_end_coupon_dt.set_value(this.gfn_formatDate(expiryDt));

                // 작성자 정보 - 날짜만 표시
                this.txt_inputid.set_text(this.ds_promo.getColumn(row, "INPUT_ID"));
                this.txt_updateid.set_text(this.ds_promo.getColumn(row, "UPDATE_ID"));
                this.txt_date_td.set_text(this.gfn_formatDate(inputDt));
                this.txt_update_td.set_text(this.gfn_formatDate(updateDt));

                trace("데이터 설정 완료");
            }
        };


        //전부disable처리
        this.fn_disableAllComponents = function() {
            this.txtarea_promo_description.set_enable(false);
            this.cal_start_day.set_enable(false);
            this.cal_end_day.set_enable(false);
            this.cal_start_coupon_dt.set_enable(false);
            this.cal_end_coupon_dt.set_enable(false);

            this.radio_auto_type.set_enable(false);
            this.radio_view_type.set_enable(false);
            this.radio_discout_type.set_enable(false);
            this.radio_promo_type.set_enable(false);
            this.radio_promo_target_type.set_enable(false);
            this.radio_coupon_dt_set.set_enable(false);

            this.grade_combo.set_enable(false);
            this.combo_promo_dt_option.set_enable(false);
        };

        this.fn_callBack = function(svc, err, errMsg) { // 함수명 수정
            if (err < 0) {
                alert("에러 발생: " + errMsg);
                return;
            }
            switch(svc) {
                case "selectPromoViewByAdmin":
                    trace("데이터 불러오기 시작>>>>");
                    this.fn_setPromotionData();
                    break;
            }
        };

        this.gfn_formatDate = function(dateStr) {
            if(!dateStr) return "";

            dateStr = dateStr.toString();
            if(dateStr.length >= 10) {
                return dateStr.substring(0, 10);
            }
            if(dateStr.length == 8) {
                return dateStr.substring(0, 4) + "-" + dateStr.substring(4, 6) + "-" + dateStr.substring(6, 8);
            }

            return dateStr;
        };

        this.gfn_numberWithCommas = function(num) {
            if(!num) return "0";
            return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_PromotionView_onload,this);
            this.btn_modify.addEventHandler("onclick",this.btn_modify_onclick,this);
            this.btn_cancle.addEventHandler("onclick",this.btn_cancle_onclick,this);
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
            this.txt_date00_02.addEventHandler("onclick",this.txt_th00_onclick,this);
            this.combo_promo_type.addEventHandler("onclick",this.txt_th00_onclick,this);
            this.promo_title.addEventHandler("onclick",this.txt_th00_onclick,this);
            this.input_min_order_price.addEventHandler("onclick",this.txt_th00_onclick,this);
            this.input_discount_value.addEventHandler("onclick",this.txt_th00_onclick,this);
            this.txt_date00_00_01.addEventHandler("onclick",this.txt_th00_onclick,this);
            this.txt_date00_01_00_00.addEventHandler("onclick",this.txt_th00_onclick,this);
            this.radio_promo_type.addEventHandler("onitemchanged",this.radio_promo_type_onitemchanged,this);
            this.txt_date00_00_01_00.addEventHandler("onclick",this.txt_th00_onclick,this);
            this.txt_date00_00_02.addEventHandler("onclick",this.txt_th00_onclick,this);
            this.txt_date00_00_00_01.addEventHandler("onclick",this.txt_th00_onclick,this);
            this.txt_date00_01_00_01.addEventHandler("onclick",this.txt_th00_onclick,this);
            this.txt_date01.addEventHandler("onclick",this.txt_th00_onclick,this);
            this.txt_update_dt00.addEventHandler("onclick",this.txt_th00_onclick,this);
            this.radio_coupon_dt_set.addEventHandler("onitemchanged",this.radio_coupon_dt_set_onitemchanged,this);
            this.cal_end_coupon_dt.addEventHandler("onchanged",this.cal_end_coupon_dt_onchanged,this);
        };
        this.loadIncludeScript("Form_PromotionView.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
