'use strict';

// navbar가 탑에 있을 때 투명으로 만들기
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    // console.log(window.scrollY);
    console.log(`navbarHeight : ${navbarHeight}`);

    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});

// 메뉴를 클릭할시 해당 섹션으로 이동
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (e) => {
    // console.log(e.target.dataset.link);
    const target = e.target;
    // undefined인 경우
    const link = target.dataset.link;
    if (link == null) {
        return;
    } 
    // 링크가 있는 경우에만 수행할 수 있도록
    console.log(e.target.dataset.link);
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior: "smooth", block: "end"});

});

// contact me 버튼을 눌렀을 경우 contact section으로 이동
const contactBtn = document.querySelector('.home__contact');
contactBtn.addEventListener('click', (e) => {
    console.log(e.target.dataset.link);
    const scrollTo = document.querySelector('#contact');
    scrollTo.scrollIntoView({behavior: "smooth", block: "end"});
})