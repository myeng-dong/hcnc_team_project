package admin.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import admin.mapper.AdminMapper;
import admin.mapper.BoardMapper;

@Service
public class BoardService {
	
	@Autowired
	private BoardMapper boardMapper;
	
	public List<Map<String, Object>> selectBoardCodeByAdmin(){
    	return boardMapper.selectBoardCodeByAdmin();
	};
	
	public List<Map<String, Object>> selectBoardByAdmin(){
    	return boardMapper.selectBoardByAdmin();
	};
	
}
