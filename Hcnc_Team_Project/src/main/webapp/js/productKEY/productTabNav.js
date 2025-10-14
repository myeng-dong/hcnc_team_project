// 부트스트랩 네비 메뉴 버튼
const triggerTabList = document.querySelectorAll('#nav-tab button')
triggerTabList.forEach(triggerEl => {
  const tabTrigger = new bootstrap.Tab(triggerEl)
  
  triggerEl.addEventListener('click', event => {
    event.preventDefault();
    tabTrigger.show();
    
    scrollToTabNavigation();
  })
})

// 탭 네비게이션으로 스크롤하는 함수
function scrollToTabNavigation() {
  const tabNavigationSection = document.querySelector('.tab-navigation-section');
  if (!tabNavigationSection) return;
  
  // 1. sticky 일시 해제
  tabNavigationSection.style.position = 'static';
  
  // 2. 레이아웃 재계산을 위한 짧은 지연
  setTimeout(function() {
    // 3. 탭 위치로 스크롤
    tabNavigationSection.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start' 
    });
    
    // 4. 스크롤 완료 후 sticky 복원
    setTimeout(function() {
      tabNavigationSection.style.position = '';
    }, 500);
  }, 10);
}