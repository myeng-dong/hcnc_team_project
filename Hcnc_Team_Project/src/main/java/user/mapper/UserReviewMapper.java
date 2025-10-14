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

  List<HashMap<String, Object>> selectOrderProductListByUser(Map<String, Object> param);

  List<HashMap<String, Object>> selectReviewStatusListByUser(Map<String, Object> param);

	HashMap<String, Object> selectProductInfoForReviewByUser(Map<String, Object> param);

  int insertReviewByUser(Map<String, Object> param);

	int insertReviewImage(Map<String, Object> param);

  List<HashMap<String, Object>> selectReviewForReadByUser(Map<String, Object> param);

  int deleteReviewImagesByUser(Map<String, Object> param);

	int updateReviewByUser(Map<String, Object> param);

	int deleteReviewByUser(Map<String, Object> param);

}
