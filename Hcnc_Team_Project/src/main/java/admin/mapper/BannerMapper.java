package admin.mapper;

import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("BannerMapper")
public interface BannerMapper {
	//공용 리스트 출력 페이지마다 BANNER POPUP설정
	List<Map<String, Object>> selectBannerListByAdmin();
	//공용 작성
	int insertBannerByAdmin(Map<String, Object> bannerData);
	//공용 업데이트
	int updateBannerByAdmin(Map<String, Object> bannerData);

}
