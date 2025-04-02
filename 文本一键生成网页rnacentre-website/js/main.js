// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
        });
    });
});

// 滚动时导航栏变色
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(44, 62, 80, 0.95)';
        header.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.backgroundColor = 'var(--primary-color)';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
    }
});

// 为卡片添加淡入效果 - 简化版本
document.addEventListener('DOMContentLoaded', () => {
    // 为所有卡片设置初始状态
    const allCards = document.querySelectorAll('.vision-card, .role-card, .resource-card, .meeting-card, .lab-info-card');
    
    // 确保所有卡片在页面加载时可见
    allCards.forEach(card => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    });
    
    // 使用IntersectionObserver优雅地处理滚动时的动画
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // 当元素进入视口
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                // 一旦元素显示，停止观察它
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1, // 当10%的元素可见时触发
        rootMargin: '0px 0px -50px 0px' // 稍微提前触发动画
    });
    
    // 开始观察所有卡片
    allCards.forEach(card => {
        observer.observe(card);
    });
}); 