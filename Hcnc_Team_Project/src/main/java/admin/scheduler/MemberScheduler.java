package admin.scheduler;
import javax.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import admin.service.MemberService;

@Component
public class MemberScheduler {
	
	@Autowired
	private MemberService memberService;
	
	// 서버시작시 바로 실행
	@PostConstruct
	public void initMemberGrades() {
		updateAllMemberGradeAutoByAdmin();
	}
	
	//fixedRate = 10000
	
	// 자동 휴면 변경 (오전 10시)
	//cron = "0 0 10 * * *"
	@Scheduled(cron = "0 0 10 * * *") 
	public void autoDormantJob() {
		int updated = memberService.updateDormantMembers();
		System.out.println("[스케줄러] 휴면 전환된 회원 수: " + updated + "명");
	}
	
	// 자동 탈퇴 회원 삭제 (오후 2시)
	//cron = "0 0 14 * * *"
	@Scheduled(cron = "0 0 14 * * *")
	public void autoDeleteWithdrawnJob() {
		int deleted = memberService.deleteOldWithdrawnMembers();
		System.out.println("[스케줄러] 완전 삭제된 탈퇴 회원 수: " + deleted + "명");
	}
	
	// 등급 자동 변경 (오전 9시)
	//cron = "0 0 9 * * *"
	@Scheduled(cron = "0 0 9 * * *")
	public void updateAllMemberGradeAutoByAdmin() {
		try {
			int updated = memberService.updateAllMemberGradeAutoByAdmin();
			System.out.println("[스케줄러] 회원 등급 업데이트 완료: " + updated + "명");
		} catch (Exception e) {
			System.out.println("[스케줄러] 회원 등급 업데이트 실패: " + e.getMessage());
		}
	}
}