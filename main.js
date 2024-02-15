//<Smooth Scroll>//
let header = document.querySelector('.head-up');
let scrollYPos = 0;

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
  wrapper: '',
  content: '',
	smooth: .75,
	effects: true,
  onUpdate: (e) => {
    //console.log(e.scrollTop());
    scrollYPos = e.scrollTop();

    if(scrollYPos > 90) {
      header.style.animation = "fhead-up .25s ease-out";
      header.style.top = (scrollYPos) + "px";
    } else {
      header.style.animation = "none";
      header.style.cssText = "box-shadow: 0px 0px 12px rgba(0, 0, 0, .0);";
      header.style.top = "0";
    }

    //!Устранение бага
    /*!
     * Суть бага: При загрузке старницы, блок <<.foot-date-company>>,
     * появлялся не на своем месте. Переходил на свое место, только при скролле.
     * 
     * Устранил баг тем, что в начале загрузки страницы я проверяю позицию скрола,
     * и если позиция < 1px, то мы делаем этот блок прозрачным, тем самым пользователь просто не увидит баг.
     */ 
    if(scrollYPos < 1) {
      dataCompany.style.opacity = "0";
    } else {
      dataCompany.style.opacity = "1";
    }

  }
})

let dataCompany = document.querySelector('.foot-date-company');
let data = new Date();

dataCompany.innerHTML = "&copy; 2021-" + data.getFullYear() + " «TECH»";

//<Header Animation>//


/*window.addEventListener('scroll', function scroll(e){
  let scrollY = window.scrollY;
  
  if(scrollYPos > 90) {
    header.style.animation = "fhead-up .25s ease-out";
    //header.style.position = "fixed";
    //header.style.cssText = "box-shadow: 0px 0px 12px rgba(0, 0, 0, .1);";
    header.style.top = (scrollYPos) + "px";
  } else {
    header.style.animation = "none";
    header.style.cssText = "box-shadow: 0px 0px 12px rgba(0, 0, 0, .0);";
    header.style.top = "0";
  }

});*/