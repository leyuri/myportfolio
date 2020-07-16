'use strict';

// navbar가 탑에 있을 때 투명으로 만들기
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    // console.log(window.scrollY);
    // console.log(`navbarHeight : ${navbarHeight}`);

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
    scrollIntoView(link);
});

// contact me 버튼을 눌렀을 경우 contact section으로 이동
const contactBtn = document.querySelector('.home__contact');
contactBtn.addEventListener('click', (e) => {
    scrollIntoView('#contact');
})


// 스크롤할 때 투명하게 1 -> 0.5 -> 0
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// 스크롤할 때 버튼이 나타나게

const arrowUp = document.querySelector('.arrow-up')
document.addEventListener('scroll', () => {
    if(window.scrollY > homeHeight/2 ) {
        arrowUp.classList.add('visible');
    } else {
        arrowUp.classList.remove('visible');
    }
})

// arrow-up 버튼 클릭시 위로 이동
arrowUp.addEventListener('click', () => {
    scrollIntoView('#home');
})

// projects
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');

workBtnContainer.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if(filter == null) {
        return;
    } 

    projectContainer.classList.add('anim-out');


    // opacity 가 계속 0으로 남아있기 때문에 제거해준다
    setTimeout(() => {
        projects.forEach((project) => {
            console.log(project.dataset.type);
    
            if(filter ==='*' || filter === project.dataset.type){
                project.classList.remove('invisible');
            } else {
                project.classList.add('invisible')
            }
        });
        projectContainer.classList.remove('anim-out');
    }, 300);
})

function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: "smooth", block: "end"});
}