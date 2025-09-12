package user.mapper;

import java.util.HashMap;
import java.util.List;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("CartMapper")
public interface CartMapper {
	public List<HashMap<String, Object>> selectCartListByUser(HashMap<String, Object> param);
}
