package user.mapper;

import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("UserCouponMapper")
public interface UserCouponMapper {

	int insertSignUpCoupon(Map<String, Object> params);

}
