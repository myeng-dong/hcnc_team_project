package user.mapper;

import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("UserCategoryMapper")
public interface UserCategoryMapper {

	List<Map<String, Object>> selectMainCategoryListByUser();

	List<Map<String, Object>> selectSubCategoryListByUser(int mainCateId);
	
}
