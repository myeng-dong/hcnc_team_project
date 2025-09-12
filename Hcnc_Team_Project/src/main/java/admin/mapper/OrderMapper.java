package admin.mapper;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("OrderMapper")
public interface OrderMapper {

	// 주문내역 상세조회
	List<Map<String, Object>> selectOrderDetailListByAdmin(Map<String, Object> dsSearch);

	// 결제내역 전체 +검색 조회
	List<Map<String, Object>> selectPaymentListByAdmin(Map<String, Object> dsSearch);

	// 결제 업데이트 처리
	void updatePaymentListByAdmin(Map<String, Object> row);

	// 배송내역 조회
	List<Map<String, Object>> selectShipListByAdmin(Map<String, Object> dsSearch);

	// 배송 업데이트
	void updateShipListByAdmin(Map<String, Object> row); 

	

}
