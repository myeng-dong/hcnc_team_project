package admin.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import admin.mapper.BannerMapper;



@Service
public class BannerService {
	@Autowired
	private BannerMapper bannerMapper;

	public List<Map<String, Object>> selectBannerListByAdmin() {
		return bannerMapper.selectBannerListByAdmin();
	}
	
	public int insertBannerByAdmin(Map<String, Object> dsBWrite) {
        return bannerMapper.insertBannerByAdmin(dsBWrite);
    }

    public int updateBannerByAdmin(Map<String, Object> dsBUpdate) {
        return bannerMapper.updateBannerByAdmin(dsBUpdate);
    }

}
