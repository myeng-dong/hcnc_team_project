package admin.mapper;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("StatMapper")
public interface StatMapper {

	//통계 조회(일별, 월별, 카테고리별)
	List<Map<String, Object>> selectStatByAdmin(Map<String, Object> dsSearch);

	//통계상세조회
	List<Map<String, Object>> selectStatDetailByAdmin(Map<String, Object> dsDetailSearch); 
	

}
