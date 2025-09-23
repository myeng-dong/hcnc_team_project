//XJS=common.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        this.gfn_transction = function(rtnId, url, inDs, outDs, strVal){

        	this.transaction(
                rtnId,            // 서비스 ID (콜백 분기용)
        		"svc::/"+url+"?time="+new Date().getTime(),    // 컨트롤러 URL
                inDs,         // inDatasets: 조건 묶음
                outDs,       // outDatasets: 결과 그리드 바인딩
                strVal,                                    // args는 사용하지 않음 (전부 Dataset으로 처리)
                "fn_callback",                         // 콜백 함수명
                true                                   // 비동기
            );


        }


        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
