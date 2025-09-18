package admin.mapper;


import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("BoardMapper")
public interface BoardMapper {
	
	// 1대1 문의 게시글 조회
	List<Map<String, Object>> selectOneOnOneByAdmin(Map<String, Object> dsSearch);

	// 코멘트 인서트
	void insertCommentByAdmin(Map<String, Object> dsComment);

	// 코멘트 추가 + 코멘트 달았으면 답변대기 상태에서 답변완료로 변경
	void updatePostStatusByAdmin(Map<String, Object> dsComment);

	// 공지사항, FAQ, QnA 조회
	List<Map<String, Object>> selectPostListByAdmin(Map<String, Object> dsSearch);

	
}
