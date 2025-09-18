package user.mapper;

import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("UserBannerMapper")
public interface UserBannerMapper {

	public List<Map<String, Object>> selectBannerListByUser();

}
