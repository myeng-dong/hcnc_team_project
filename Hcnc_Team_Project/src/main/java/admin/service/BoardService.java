package admin.service;


import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import admin.mapper.BoardMapper;

@Service
public class BoardService {
	
	@Autowired
	private BoardMapper boardMapper;

	public List<Map<String, Object>> selectOneOnOneByAdmin(Map<String, Object> dsSearch) {
		return boardMapper.selectOneOnOneByAdmin(dsSearch);
	}

	public void insertCommentByAdmin(Map<String, Object> dsComment) {
		boardMapper.insertCommentByAdmin(dsComment);
	}

	public void updatePostStatusByAdmin(Map<String, Object> dsComment) {
		boardMapper.updatePostStatusByAdmin(dsComment);
		
	}

	public List<Map<String, Object>> selectPostListByAdmin(Map<String, Object> dsSearch) {
		// TODO Auto-generated method stub
		return boardMapper.selectPostListByAdmin(dsSearch);
	}

	public int insertPostByAdmin(Map<String, Object> dsPost) {
		return boardMapper.insertPostByAdmin(dsPost);
		
	}

	public Map<String, Object> selectPostDetailByAdmin(Map<String, Object> dsPostId) {
		return boardMapper.selectPostDetailByAdmin(dsPostId);
	}

	public void updatePostByAdmin(Map<String, Object> dsUpdate) {
		boardMapper.updatePostByAdmin(dsUpdate);
	}
	
	
}
