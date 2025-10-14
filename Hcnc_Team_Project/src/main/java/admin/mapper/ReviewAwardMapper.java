package admin.mapper;

import java.util.List;
import java.util.Map;
import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("reviewAwardMapper")
public interface ReviewAwardMapper {
    
    List<Map<String, Object>> selectProductReviewListByAdmin(Map<String, Object> params);
    
    int insertAutoReviewRewardPointsByAdmin(Map<String, Object> params);
    
    int insertReviewRewardPointsByAdmin(Map<String, Object> param);
}