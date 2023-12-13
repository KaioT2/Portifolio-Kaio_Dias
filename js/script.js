document.addEventListener('DOMContentLoaded', function () {
    var menuBtn = document.getElementById('menu-btn');
    var menuBtnFechar = document.getElementById('btn-fechar');
    var mobileMenu = document.getElementById('mobile-menu');
    var content = document.querySelector('.content');

    menuBtn.addEventListener('click', function() {
        if (mobileMenu.style.right === "-250px") {
            mobileMenu.style.right = "0";
            content.style.marginRight = "250px";
        } else {
            mobileMenu.style.right = "-250px";
            content.style.marginRight = "0";
        }
    });

    menuBtnFechar.addEventListener('click', function() {
        if (mobileMenu.style.right === "-250px") {
            mobileMenu.style.right = "0";
            content.style.marginRight = "250px";
        } else {
            mobileMenu.style.right = "-250px";
            content.style.marginRight = "0";
        }
    });
});

