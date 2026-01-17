// 사이드바 토글 로직
const sidebar = document.getElementById('dbSidebar');
const toggleBtn = document.getElementById('sidebarToggle');
const overlay = document.getElementById('dbOverlay');

if (toggleBtn && sidebar && overlay) {
    toggleBtn.addEventListener('click', () => {
        if (window.innerWidth > 1024) {
            document.body.classList.toggle('db-collapsed');
        } else {
            sidebar.classList.toggle('mobile-open');
            overlay.classList.toggle('active');
        }
    });

    overlay.addEventListener('click', () => {
        sidebar.classList.remove('mobile-open');
        overlay.classList.remove('active');
    });
}

// MY 메뉴 레이어 토글
const myBtn = document.getElementById('myMenuBtn');
const myLayer = document.getElementById('myMenuLayer');

if (myBtn && myLayer) {
    myBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        myLayer.classList.toggle('active');
    });
    document.addEventListener('click', () => myLayer.classList.remove('active'));
}
