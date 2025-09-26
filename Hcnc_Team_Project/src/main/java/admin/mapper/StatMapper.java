package admin.mapper;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("StatMapper")
public interface StatMapper {

	List<Map<String, Object>> selectStatByAdmin(Map<String, Object> dsSearch); 
	

}
