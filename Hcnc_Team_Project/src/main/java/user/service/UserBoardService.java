package user.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import user.mapper.UserBoardMapper;


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

	public Map<String, Object> selectUserPostDetailByUser(int postId) {
		return userBoardMapper.selectUserPostDetailByUser(postId);
	}

	public List<Map<String, Object>> selectUserCommentByUser(int postId) {
		return userBoardMapper.selectUserCommentByUser(postId);
	}

	public void updateUserPostCntByUser(int postId) {
		userBoardMapper.updateUserPostCntByUser(postId);
		
	}

	public List<Map<String, Object>> selectUserPostTypeByUser() {
		return userBoardMapper.selectUserPostTypeByUser();
	}

	public void insertUserPostByUser(Map<String, Object> params) {
		userBoardMapper.insertUserPostByUser(params);
		
	}

	public void insertUserCommentByUser(Map<String, Object> params) {
		userBoardMapper.insertUserCommentByUser(params);
		
	}

	public void deleteUserCommentByUser(Map<String, Object> params) {
		userBoardMapper.deleteUserCommentByUser(params);
		
	}
    
    




}
