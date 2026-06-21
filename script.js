document.addEventListener('DOMContentLoaded', function () {
    const menuBtn  = document.getElementById('menuBtn');
    const closeBtn = document.getElementById('closeBtn');
    const navMenu  = document.getElementById('navMenu');

    if (menuBtn && closeBtn && navMenu) {
        menuBtn.addEventListener('click', () => navMenu.classList.add('open'));
        closeBtn.addEventListener('click', () => navMenu.classList.remove('open'));
        document.addEventListener('click', function (e) {
            if (navMenu.classList.contains('open') &&
                !navMenu.contains(e.target) &&
                !menuBtn.contains(e.target)) {
                navMenu.classList.remove('open');
            }
        });
    }

});