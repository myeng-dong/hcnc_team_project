package user.mapper;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("UserProductMapper")
public interface UserProductMapper {

	HashMap<String, Object> selectProductByUser(Map<String, Object> param);

}
