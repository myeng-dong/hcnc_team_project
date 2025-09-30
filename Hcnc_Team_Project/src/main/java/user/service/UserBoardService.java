package user.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import user.mapper.UserBoardMapper;
import user.web.map;


@Service
public class UserBoardService {
	
	@Autowired
    private UserBoardMapper userBoardMapper;

    public List<Map<String, Object>> getBoardPosts(String boardCode) {
        return userBoardMapper.selectBoardListByUser(boardCode);
    }

	public List<Map<String, Object>> selectPostListByUser(Map<String, Object> params) {
		return userBoardMapper.selectPostListByUser(params);
	}

	public int selectPostTotalCountByUser(Map<String, Object> params) {
		return userBoardMapper.selectPostTotalCountByUser(params);
	}
    
    




}
