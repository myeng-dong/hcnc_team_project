package user.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import user.mapper.UserReviewMapper;

@Service
public class UserReviewService {

	@Autowired
	private UserReviewMapper userReviewMapper;

	public List<HashMap<String, Object>> selectReviewListByUser(Map<String, Object> param) {
		// TODO Auto-generated method stub
		return userReviewMapper.selectReviewListByUser(param);
	}

	public HashMap<String, Object> selectReviewCntByUser(Map<String, Object> param) {
		// TODO Auto-generated method stub
		return userReviewMapper.selectReviewCntByUser(param);
	}

	public List<HashMap<String, Object>> selectReviewListPagedByUser(Map<String, Object> queryParam) {
		// TODO Auto-generated method stub
		return userReviewMapper.selectReviewListPagedByUser(queryParam);
	} 
}
