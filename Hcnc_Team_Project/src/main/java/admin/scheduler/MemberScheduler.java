package admin.scheduler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import admin.service.MemberService;

@Component
public class MemberScheduler {

	@Autowired
	private MemberService memberService;

	// 자동 휴면 변경
	// By. 09. 19 Pj
	// 매일 새벽 3시 휴면 처리 : cron = "0 0 3 * * *"
	// 테스트용 : fixedRate = 10000
	@Scheduled(cron = "0 0 3 * * *")
	public void autoDormantJob() {
		int updated = memberService.updateDormantMembers();
		System.out.println("[스케줄러] 휴면 전환된 회원 수: " + updated);
	}

	// 자동으로 테이블에 완전 삭제(상태가 N인)
	// 매달 1일 새벽 4시 탈퇴회원 완전 삭제(자동 삭제 -> 1년이상 보관하다) : cron = "0 0 4 1 * *"
	// 테스트용: cron = "0 * * * * *"
	@Scheduled(cron = "0 0 4 1 * *")
	public void autoDeleteWithdrawnJob() {
		int deleted = memberService.deleteOldWithdrawnMembers();
		System.out.println("[스케줄러] 완전 삭제된 탈퇴 회원 수: " + deleted);
	}
}
