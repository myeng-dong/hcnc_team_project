package user.mapper;

import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

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

	//게시글 타입 조회
	List<Map<String, Object>> selectUserPostTypeByUser();

	//게시글 작성
	void insertUserPostByUser(Map<String, Object> params);

	//댓글 작성
	void insertUserCommentByUser(Map<String, Object> params);

	//댓글 삭제
	void deleteUserCommentByUser(Map<String, Object> params);

	//게시글 삭제
	void deleteUserPostByUser(Map<String, Object> params);

	//댓글 수정
	void updateUserCommentByUse(Map<String, Object> params);

	//게시글 수정
	void updatetUserPostByUser(Map<String, Object> params);

}
