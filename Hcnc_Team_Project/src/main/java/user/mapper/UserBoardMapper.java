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

	//게시글 상세 조회
	Map<String, Object> selectUserPostDetailByUser(int postId);

	//게시글에 달린 댓글 조회
	List<Map<String, Object>> selectUserCommentByUser(int postId);

	//게시글 조회수 업데이트
	void updateUserPostCntByUser(int postId);

}
