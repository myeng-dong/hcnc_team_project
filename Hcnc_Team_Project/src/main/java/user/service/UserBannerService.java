package user.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import user.mapper.UserBannerMapper;


@Service
public class UserBannerService {
	@Autowired
	private UserBannerMapper userBannerMapper;
	public List<Map<String, Object>> selectBannerListByUser() {
		return userBannerMapper.selectBannerListByUser();
	}

}
