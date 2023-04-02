console.log('connecté !');

const mobileNav = document.querySelector('.modal');
console.log(mobileNav);

const menuBtn = document.querySelector('.fa-bars');
console.log(menuBtn);

const close = document.querySelector('#close-modal');
console.log(close);

menuBtn.addEventListener('click',() => {
    console.log("hamburger cliqué")
    mobileNav.classList.add('show-menu');
});

close.addEventListener('click', () => {
    console.log("close cliqué");
    mobileNav.classList.remove('show-menu');
})



