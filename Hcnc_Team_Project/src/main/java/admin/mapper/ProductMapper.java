package admin.mapper;


import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;


@Mapper("ProductMapper")
public interface ProductMapper {
	
	
	
	//상품목록리스트조회
	List<Map<String, Object>> selectProductListByAdmin(Map<String, Object> p);

	

	

}
