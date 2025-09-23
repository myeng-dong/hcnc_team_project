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

}
