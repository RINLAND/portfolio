'use strict';

// Make navbar transparent when it is on the top

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll' , ()=> {
    // console.log(window.scrollY);
    // console.log(navbarHeight);
    if(window.scrollY > navbarHeight ){
        navbar.classList.add('navbar--dark');
    } else{
        navbar.classList.remove('navbar--dark');
    }
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) =>{
    // console.log('dsf');
    const target = event.target;
    const link = target.dataset.link;
    if( link == null){
        return;
    }
        // console.log(event.target.dataset.link);
        // const scrollTo = document.querySelector(link);
        // scrollTo.scrollIntoView({ behavior: 'smooth'});
        scrollIntoView(link);

    
});

// // click "contact me" button then move to contact
// // 내가 만든 이동하는 js
// const contactBtn = document.querySelector('.home__contact');
// contactBtn.addEventListener('click', (event)=>{
//     // console.log('12345');
//     const target = event.target;
//     const link = target.dataset.link;
//     console.log(event.target.dataset.link);
//     const scrollTo = document.querySelector(link);
//     scrollTo.scrollIntoView({ behavior: 'smooth'});
// })

//Handle Click on 'contact me' button on home
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click',()=> {
    scrollIntoView('#contact');
});

// Make home slowyly fade to trasparent as the window scrolls down.home__contact
const home = document.querySelector('.home__container');
const homeheight = home.getBoundingClientRect().height;
document.addEventListener('scroll', ()=>{
    // console.log(homeheight);
    // console.log(1 - window.scrollY/ homeheight);
    home.style.opacity = 1 - window.scrollY/ homeheight;
})

// Show "arrow up" button when scrolling down
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', ()=>{
    if(window.scrollY> homeheight /2){
        arrowUp.classList.add('visible');
    }else{
        arrowUp.classList.remove('visible');
    }
});

//hanle click on the "arrow up" button
arrowUp.addEventListener('click',()=>{
    scrollIntoView('#home');
})


// Remove selection from the previous item and select the new one
const active = document.querySelector('.category__btn.selected');
active.classList.remove('selected');
e.target.classList.add('selected');
// 앞으로 자주 쓰일 가능성이 있어서 하나 만들어두기
function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: 'smooth'});
};

