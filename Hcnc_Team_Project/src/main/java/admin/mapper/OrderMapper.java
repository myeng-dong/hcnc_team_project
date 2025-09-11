package admin.mapper;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("OrderMapper")
public interface OrderMapper {

	List<Map<String, Object>> selectOrderListByAdmin(Map<String, Object> dsSearch);

	

}
