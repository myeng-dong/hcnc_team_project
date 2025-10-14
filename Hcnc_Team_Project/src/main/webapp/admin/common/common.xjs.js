//XJS=common.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        // ==============================
        // 공통 트랜잭션 함수
        // ==============================
        this.gfn_transction = function(rtnId, url, inDs, outDs, strVal){
        	this.transaction(
                rtnId,
        		"svc::/"+url+"?time="+new Date().getTime(),
                inDs,
                outDs,
                strVal,
                "fn_callback",
                true
            );
        };

        // ==============================
        // 커스텀 알럿창 (alertCustom)
        // ==============================
        function alertCustom(form, msg, type)
        {
            // 이미 떠 있는 알럿이 있으면 닫기
            if (form.div_alertBg) form.removeChild("div_alertBg");

            // 배경 (모달 블러)
            var bg = new Div("div_alertBg", 0, 0, null, null, 0, 0, null, null, null, null, form);
            bg.set_background("rgba(0,0,0,0.45)");
            bg.set_cssclass("alert_bg");
            form.addChild("div_alertBg", bg);
            bg.show();

            // 실제 알럿창
            var div = new Div("div_alertBox", null, null, 400, 200, 0, 0, null, null, null, null, bg);
            div.set_background("#ffffff");
            div.set_borderRadius("12px");
            div.set_border("2px solid #056e70");
            div.set_opacity(0.98);
            bg.addChild("div_alertBox", div);

            // 아이콘 표시
        //     var iconColor = "#056e70";
        //     if (type == "warn") iconColor = "#e6a800";
        //     if (type == "error") iconColor = "#c0392b";
        //
        //     var stIcon = new Static("st_icon", 35, 45, 40, 40, null, null, null, null, null, null, div);
        //     stIcon.set_text("●");
        //     stIcon.set_font("bold 36px 'Gulim'");
        //     stIcon.set_color(iconColor);
        //     div.addChild("st_icon", stIcon);

            // 메시지
            var stMsg = new Static("st_msg", 90, 45, 250, 60, null, null, null, null, null, null, div);
            stMsg.set_text(msg);
            stMsg.set_font("bold 12px 'Gulim'");
            stMsg.set_color("#333333");
            stMsg.set_wordWrap("char");
        	stMsg.set_textAlign("center");
            div.addChild("st_msg", stMsg);

            // 확인 버튼
            var btnOk = new Button("btn_ok", 130, 120, 100, 35, null, null, null, null, null, null, div);
            btnOk.set_text("확인");
            btnOk.set_background("#056e70");
            btnOk.set_color("#ffffff");
            btnOk.set_font("bold 11px 'Gulim'");
            btnOk.set_borderRadius("8px");
            btnOk.set_cursor("pointer");
            div.addChild("btn_ok", btnOk);

            btnOk.addEventHandler("onclick", function(){
                form.removeChild("div_alertBg");
            }, form);

            var app = nexacro.getApplication();
            var cx = (app.mainframe.width - div.width) / 2;
            var cy = (app.mainframe.height - div.height) / 2;
            div.move(cx, cy);
            div.show();
        }




        // 일부 폼 전용 confirm 함수
        // 폼 전용 커스텀 컨펌 (Promise/async 미사용, 콜백 사용)
        this.fn_confirmCustom = function (msg, callback)
        {
            var form = this;

            // 이미 떠 있으면 제거
            if (form.div_confirmBg && form.div_confirmBg.destroy) {
                form.div_confirmBg.destroy();
            }

            // 1.배경
            var bg = new Div("div_confirmBg", 0, 0, null, null, 0, 0, null, null, null, null, form);
            bg.set_background("rgba(0,0,0,0.45)");
            bg.set_tabstop(true);
            bg.set_enableevent(true);
            form.addChild("div_confirmBg", bg);
            bg.show();

            // 2.컨펌창 본체
            var div = new Div("div_confirmBox", null, null, 360, 190, 0, 0, null, null, null, null, bg);
            div.set_background("#ffffff");
            div.set_border("2px solid #056e70");
            div.set_borderRadius("12px");
            div.set_opacity(0.98);
            div.set_enableevent(true);
            bg.addChild("div_confirmBox", div);
            div.show();

            // 🔹 중앙정렬 보정
            var cx = (form.getOffsetWidth()  - div.getOffsetWidth())  / 2;
            var cy = (form.getOffsetHeight() - div.getOffsetHeight()) / 2;
            div.move(cx, cy);

            // 3.메시지 Static
            var stMsg = new Static("st_msg", 30, 40, 300, 60, null, null, null, null, null, null, div);
            stMsg.set_text(msg);
            stMsg.set_font("bold 12px 'Gulim'");
            stMsg.set_color("#333333");
            stMsg.set_textAlign("center");
            stMsg.set_wordWrap("char");
            stMsg.set_verticalAlign("middle");
            stMsg.set_background("transparent");
            div.addChild("st_msg", stMsg);
            stMsg.show();  // ✅ 중요: 반드시 show() 호출!

            // 4.버튼 2개
            var btnOk = new Button("btn_ok", 65, 120, 100, 35, null, null, null, null, null, null, div);
            btnOk.set_text("확인");
            btnOk.set_background("#056e70");
            btnOk.set_color("#ffffff");
            btnOk.set_font("bold 11px 'Gulim'");
            btnOk.set_borderRadius("8px");
            div.addChild("btn_ok", btnOk);
            btnOk.show();

            var btnCancel = new Button("btn_cancel", 195, 120, 100, 35, null, null, null, null, null, null, div);
            btnCancel.set_text("취소");
            btnCancel.set_background("#dddddd");
            btnCancel.set_color("#000000");
            btnCancel.set_font("bold 11px 'Gulim'");
            btnCancel.set_borderRadius("8px");
            div.addChild("btn_cancel", btnCancel);
            btnCancel.show();

            // 5.닫기 함수
            function closeConfirm(ok) {
                try { if (form.div_confirmBg && form.div_confirmBg.destroy) form.div_confirmBg.destroy(); } catch(e){}
                if (typeof callback === "function") callback(ok);
            }

            // 6.이벤트 연결
            btnOk.addEventHandler("onclick", function(){ closeConfirm(true); }, form);
            btnCancel.addEventHandler("onclick", function(){ closeConfirm(false); }, form);

            bg.addEventHandler("onkeydown", function(obj, e){
                if (e.keycode == 13) closeConfirm(true);   // Enter
                if (e.keycode == 27) closeConfirm(false);  // ESC
            }, form);

            // 7.포커스 및 z-index
            bg.setFocus();
            bg.bringToFront();
        }




        	/*폼에서 컨펌창 테마 사용하기위해서


            this.fn_confirmCustom(
                "정보를 수정하시겠습니까?",
                function (ok) {
                    if (!ok) return;

                    // bind(this)로 Form 컨텍스트 유지
                    this.fn_openOptionForm("UPDATE", {
                        "OPTION_ID": optionId,
                        "OPTION_NAME": optionName,
                        "OPTION_VALUE": optionVal,
                        "ADDITIONAL_PRICE": addPrice
                    });
                }.bind(this)
            );


        	이런식으로 컨펌창 호출해서 띄우세요. */




        //공통 알럿창
        nexacro.Form.prototype.alert = function(msg){ alertCustom(this, msg); };

        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
