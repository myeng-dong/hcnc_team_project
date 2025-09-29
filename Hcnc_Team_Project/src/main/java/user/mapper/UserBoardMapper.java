package user.mapper;

import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;
import user.service.map;

@Mapper("UserBoardMapper")
public interface UserBoardMapper {

	List<Map<String, Object>> selectBoardListByUser(String boardCode);

	//게시글 조회
	List<Map<String, Object>> selectPostListByUser(Map<String, Object> params);

	//게시글 개수 조회
	int selectPostTotalCountByUser(Map<String, Object> params);

}
