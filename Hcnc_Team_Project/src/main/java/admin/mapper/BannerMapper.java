package admin.mapper;

import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("BannerMapper")
public interface BannerMapper {

	List<Map<String, Object>> selectBannerListByAdmin();


	Object insertBannerByAdmin();

	void updateBannerByAdmin();

}
