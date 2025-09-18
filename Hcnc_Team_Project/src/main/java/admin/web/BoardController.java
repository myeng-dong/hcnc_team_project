package admin.web;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

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
	
	
	

}
