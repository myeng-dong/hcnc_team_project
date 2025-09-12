package admin.mapper;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("BoardMapper")
public interface BoardMapper {

	public List<Map<String, Object>> selectBoardCodeByAdmin();
	
	public List<Map<String, Object>> selectBoardByAdmin();

}
