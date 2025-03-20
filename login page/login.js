function showTab(tabName) {
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Find the tab that was clicked
    const clickedTab = document.querySelector(`.tab:nth-child(${tabName === 'admin' ? 1 : 2})`);
    clickedTab.classList.add('active');
    document.getElementById(tabName).classList.add('active');
}

// Add eye covering animation
document.querySelectorAll('input[type="password"]').forEach(passwordInput => {
    passwordInput.addEventListener('focus', function() {
        const eyes = this.closest('.login-box').querySelector('.eyes');
        eyes.classList.add('cover');
        const eyebrows = this.closest('.login-box').querySelector('.eyebrows');
        eyebrows.classList.add('cover');
    });

    passwordInput.addEventListener('blur', function() {
        const eyes = this.closest('.login-box').querySelector('.eyes');
        eyes.classList.remove('cover');
        const eyesbrows = this.closest('.login-box').querySelector('.eyebrows');
        eyebrows.classList.remove('cover');
    });
});