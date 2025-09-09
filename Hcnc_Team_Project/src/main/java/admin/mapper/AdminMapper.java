package admin.mapper;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("AdminMapper")
public interface AdminMapper {

	public List<Map<String, Object>> selectGradeListByAdmin();

}
