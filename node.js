const menubtn = document.getElementById("menu-btn");
const navlink = document.getElementById("nav-link");
const menubtnicon = menubtn.querySelectorAll("i");

menubtn.addEventListener("click",(e)=>{
    navlink.classList.toggle("open");

    const isopen = navlink.classList.contains("open");
    menubtnicon.setAttribute("class",isopen ?"ri-close-line" : "ri-menu-line")
})
    navlink.addEventListener("clik",(e) =>{
        navlink.classList.remove("open");
         menubtnicon.setAttribute("class","ri-close-line" )

})
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".order__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".event__content", {
  duration: 1000,
});

