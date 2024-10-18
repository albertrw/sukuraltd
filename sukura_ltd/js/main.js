
window.addEventListener("load", () => {
  const preloader = document.querySelector(".js-preloader");
  preloader.classList.add("fade-out");

  setTimeout(() => {
    preloader.style.display = "none";
    /* animate on scroll */  
   AOS.init();
  }, 600);
});

/* header bg reveal */ 

const headerBg = () => {
  const header = document.querySelector(".js-header");
  
  window.addEventListener("scroll", function() {
   if(this.scrollY > 0){
     header.classList.add("bg-reveal");
   }
   else{
    header.classList.remove("bg-reveal");
   }
  });
}
headerBg();


/* nav */ 

const navigation = () => {
    const navToggler = document.querySelector(".js-nav-toggler");
    const nav = document.querySelector(".js-nav");
    const navItems = nav.querySelectorAll("li");
    
    const navToggle = () => {
       nav.classList.toggle("open");
       navToggler.classList.toggle("active");
    }

    navToggler.addEventListener("click", navToggle);

    navItems.forEach((li) => {
      li.querySelector("a").addEventListener("click", () => {
         if(window.innerWidth <= 767){
           navToggle();
         }
      });
    });
}
navigation();

const items = document.querySelectorAll('.accordion button');

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));



