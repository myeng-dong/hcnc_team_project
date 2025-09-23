package admin.web;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import admin.service.BoardService;

@Controller
public class BoardController {
	
	@Autowired
	private BoardService boardService;
	
	//1대1 문의 게시판 조회
	@RequestMapping(value="/selectOneOnOneByAdmin.do")
	public NexacroResult selectOneOnOneByAdmin(
			@ParamDataSet(name="ds_search", required = false) Map<String,Object> dsSearch) {
		NexacroResult result = new NexacroResult();
		
		List<Map<String, Object>> oneList = boardService.selectOneOnOneByAdmin(dsSearch);
		
		result.addDataSet("ds_board", oneList);

		return result;
	}
	
	//1대1 문의 게시글 답변 추가 + 원 게시물 게시상태 변경
	@RequestMapping(value="/insertCommentByAdmin.do")
	public NexacroResult insertCommentByAdmin(
			@ParamDataSet(name="ds_comment", required = false) Map<String,Object> dsComment) {
		NexacroResult result = new NexacroResult();
		
		String postId = (String) dsComment.get("POST_ID");

		boardService.insertCommentByAdmin(dsComment);    //코멘트 인서트 
		
		if(postId != null && !"".equals(postId)){
			boardService.updatePostStatusByAdmin(dsComment); //코멘트 단 원 게시물의 게시상태 변경
		}

		return result;
	}
	
	// 공지사항, FAQ, QnA 게시판 조회
	@RequestMapping(value="/selectPostListByAdmin.do")
	public NexacroResult selectPostListByAdmin(
			@ParamDataSet(name="ds_search", required = false) Map<String,Object> dsSearch) {
		NexacroResult result = new NexacroResult();
		
		List<Map<String, Object>> postList = boardService.selectPostListByAdmin(dsSearch);
		
		result.addDataSet("ds_board", postList);
		
		return result;
	}
	
	
	// 공지사항, FAQ 에디터 인서트
	@RequestMapping(value="/insertPostByAdmin.do")
	public NexacroResult insertPostByAdmin(
	        @ParamDataSet(name="ds_post", required = false) Map<String,Object> dsPost) {
	    
	    NexacroResult result = new NexacroResult();
	    
	    try {
	        // 데이터 유효성 검사
	        if (dsPost == null || dsPost.isEmpty()) {
	            throw new IllegalArgumentException("게시글 데이터가 없습니다.");
	        }
	        
	        // 필수 필드 검사
	        if (dsPost.get("POST_TITLE") == null || dsPost.get("POST_TITLE").toString().trim().isEmpty()) {
	            throw new IllegalArgumentException("제목은 필수입니다.");
	        }
	        
	        if (dsPost.get("POST_CONTENT") == null || dsPost.get("POST_CONTENT").toString().trim().isEmpty()) {
	            throw new IllegalArgumentException("내용은 필수입니다.");
	        }
	        
	        if (dsPost.get("BOARD_ID") == null || dsPost.get("BOARD_ID").toString().trim().isEmpty()) {
	            throw new IllegalArgumentException("게시판 구분은 필수입니다.");
	        }
	        
	        if (dsPost.get("MEMBER_ID") == null || dsPost.get("MEMBER_ID").toString().trim().isEmpty()) {
	            throw new IllegalArgumentException("작성자 정보가 없습니다.");
	        }
	        
	        // 서비스 호출
	        int insertedCount = boardService.insertPostByAdmin(dsPost);
	        
	        // 성공 여부 확인
	        if (insertedCount > 0) {
	            result.addDataSet("message", insertedCount);
	        } else {
	            result.setErrorCode(-1);
	            result.setErrorMsg("게시글 등록에 실패했습니다.");
	        }
	        
	    } catch (IllegalArgumentException e) {
	        result.setErrorCode(-1);
	        result.setErrorMsg(e.getMessage());
	    } catch (Exception e) {
	        result.setErrorCode(-1);
	        result.setErrorMsg("시스템 오류가 발생했습니다: " + e.getMessage());
	        // 로그 출력
	        e.printStackTrace();
	    }
	    
	    return result;
	}
	
	@RequestMapping(value="/selectPostDetailByAdmin.do")
	public NexacroResult selectPostDetailByAdmin(
			@ParamDataSet(name="ds_postId", required = false) Map<String,Object> dsPostId) {
		
		NexacroResult result = new NexacroResult();
		 try {  
			    
		        Map<String, Object> postDetail = boardService.selectPostDetailByAdmin(dsPostId);
		        result.addDataSet("ds_detail", postDetail);
		        
		 }catch (Exception e) {
		        result.setErrorCode(-1);
		        result.setErrorMsg("게시글 조회 중 오류가 발생했습니다: " + e.getMessage());
		        e.printStackTrace();
		 }
		return result;
	}

	@RequestMapping(value="/updatePostByAdmin.do")
	public NexacroResult updatePostByAdmin(
			@ParamDataSet(name="ds_update", required = false) Map<String,Object> dsUpdate) {
		
		NexacroResult result = new NexacroResult();
		 try {  
			 
			 
			 if(dsUpdate == null || dsUpdate.isEmpty()) { //무결성 체크 받아온 데이터가 있는지
				  throw new IllegalArgumentException("수정할 데이터가 없습니다.");
			 }
			 //무결성 체크 받아온 제목이 있는지
			 if(dsUpdate.get("POST_TITLE") == null || dsUpdate.get("POST_TITLE").toString().trim().isEmpty()) {
				  throw new IllegalArgumentException("제목은 필수입니다.");
			 } 
			 //무결성 체크 받아온 내용이 있는지
			 if(dsUpdate.get("POST_CONTENT") == null || dsUpdate.get("POST_CONTENT").toString().trim().isEmpty()) {
				  throw new IllegalArgumentException("내용은 필수입니다.");
			 }
			 
			 //게시글 수정 서비스
		     boardService.updatePostByAdmin(dsUpdate);
		       
		        
		 }catch (Exception e) {
		        result.setErrorCode(-1);
		        result.setErrorMsg("게시글 수정 중에 오류가 발생하였습니다.: " + e.getMessage());
		        e.printStackTrace();
		 }
		return result;
	}
	
	
	

}
