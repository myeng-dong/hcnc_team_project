package user.mapper;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("UserReviewMapper")
public interface UserReviewMapper {

	List<HashMap<String, Object>> selectReviewListByUser(Map<String, Object> param);

	HashMap<String, Object> selectReviewCntByUser(Map<String, Object> param);

	List<HashMap<String, Object>> selectReviewListPagedByUser(Map<String, Object> queryParam);

}
