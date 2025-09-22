package user.web;

import java.io.File;
import java.util.HashMap;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;


@Controller
public class UserCkEditerController {

	
	@RequestMapping("/ckedit.do")
	public ModelAndView userMain() { 
		ModelAndView mv = new ModelAndView();
		System.out.println("===================================");
		System.out.println("            컨텐츠 에디터 실행");
		System.out.println("===================================");
		mv.setViewName("ckediter/ckEditer");
	    return mv;
	}
	

	@RequestMapping("/contentViewer.do")
    public ModelAndView uploadFile() {
    	ModelAndView mv = new ModelAndView();
		System.out.println("===================================");
		System.out.println("            컨텐츠 뷰어 실행");
		System.out.println("===================================");
		mv.setViewName("ckediter/selectPost");
	    return mv;
        
    }
}

