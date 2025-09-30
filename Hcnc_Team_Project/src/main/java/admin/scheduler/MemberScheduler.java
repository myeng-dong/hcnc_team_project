package admin.scheduler;
import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import admin.service.MemberService;

@Component
public class MemberScheduler {
	
	/*
	 * // 즉시 확인용 
	 * 
	 * @Scheduled(fixedRate = 10000) // 10초마다
	 * 
	 * // 조금 여유있게
	 * 
	 * @Scheduled(fixedRate = 60000) // 1분마다
	 * 
	 * // 적당한 간격
	 * 
	 * @Scheduled(fixedRate = 300000) // 5분마다
	 */
	
	@Autowired
	private MemberService memberService;

	// 자동 휴면 변경
	// By. 09. 19 Pj
	//오전 10시로 설정
	@Scheduled(cron = "0 0 10 * * *") 
	public void autoDormantJob() {
		int updated = memberService.updateDormantMembers();
		System.out.println("[스케줄러] 휴면 전환된 회원 수: " + updated);
	}

	// 자동으로 테이블에 완전 삭제(상태가 N인)
	// 오후 2시로 설정 
	@Scheduled(cron = "0 0 14 * * *")
	public void autoDeleteWithdrawnJob() {
		int deleted = memberService.deleteOldWithdrawnMembers();
		System.out.println("[스케줄러] 완전 삭제된 탈퇴 회원 수: " + deleted);
	}
	
	//서버시작시 바로 등급변경 실행
	@PostConstruct
    public void initMemberGrades() {
		updateAllMemberGradeAutoByAdmin();
    }
    
	//등급 자동변경
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
