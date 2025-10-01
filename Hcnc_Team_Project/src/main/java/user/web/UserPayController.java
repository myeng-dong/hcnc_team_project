package user.web;


import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.Base64;

import org.json.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class UserPayController {
	
	@RequestMapping(value="/getPayInfo.do")
	public ModelAndView getPayInfo(
			@RequestParam("paymentKey") String paymentKey,
			@RequestParam("orderId") String orderId,
			@RequestParam("amount") String amount
		) {
			ModelAndView mav = new ModelAndView();
		
			try {
				// 토스페이먼츠 승인 API 호출
				JSONObject paymentData = confirmPayment(paymentKey, orderId, amount);
				
				// 결제 수단 추출
				String method = paymentData.getString("method");
				String paymentMethod = paymentData.has("easyPay")
						? paymentData.getString("easyPay") // 카카오페이, 토스페이 등
						: method; // 카드, 계좌이체 등
						

	            mav.addObject("orderId", orderId);
	            mav.addObject("paymentMethod", paymentMethod);
	            mav.addObject("amount", amount);
	            
	            mav.setViewName("order/payments/paySuccess");
	            
			} catch (Exception e) {
				e.printStackTrace();
	            mav.addObject("message", "결제 실패: " + e.getMessage());
	            
	            mav.setViewName("order/payments/payFail");
			}
		
		return mav;
	}
	
	
	// 토스페이먼츠 승인 API 호출
	private JSONObject confirmPayment(String paymentKey, String orderId, String amount) throws Exception {
		String secretKey = "test_sk_zXLkKEypNArWmo50nX3lmeaxYG5R";  // 실제 키로 변경
        String apiUrl = "https://api.tosspayments.com/v1/payments/confirm";
        
        URL url = new URL(apiUrl);
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        conn.setRequestMethod("POST");
        conn.setRequestProperty("Authorization", "Basic " + 
            Base64.getEncoder().encodeToString((secretKey + ":").getBytes()));
        conn.setRequestProperty("Content-Type", "application/json");
        conn.setDoOutput(true);
        
        // 요청 전송
        JSONObject params = new JSONObject();
        params.put("paymentKey", paymentKey);
        params.put("orderId", orderId);
        params.put("amount", amount);
        
        OutputStream os = conn.getOutputStream();
        os.write(params.toString().getBytes("UTF-8"));
        os.close();
        
        // 응답 받기
        int code = conn.getResponseCode();
        InputStream is = (code == 200) ? conn.getInputStream() : conn.getErrorStream();
        
        BufferedReader br = new BufferedReader(new InputStreamReader(is, "UTF-8"));
        StringBuilder response = new StringBuilder();
        String line;
        while ((line = br.readLine()) != null) {
            response.append(line);
        }
        br.close();
        
        if(code != 200) {
            throw new Exception("결제 승인 실패: " + response.toString());
        }
        
        return new JSONObject(response.toString());

	}
}
