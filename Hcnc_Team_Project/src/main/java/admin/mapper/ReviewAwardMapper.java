package admin.mapper;

import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("reviewAwardMapper")
public interface ReviewAwardMapper {

    List<Map<String, Object>> selectProductReviewListByAdmin();

    int insertAutoReviewRewardPointsByAdmin();

    int insertReviewRewardPointsByAdmin(Map<String, Object> param);
}
