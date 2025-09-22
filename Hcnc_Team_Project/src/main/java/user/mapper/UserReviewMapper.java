package user.mapper;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("UserReviewMapper")
public interface UserReviewMapper {

	List<HashMap<String, Object>> selectReviewListByUser(Map<String, Object> param);

}
