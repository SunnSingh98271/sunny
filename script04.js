const open_menu = document.querySelector("#open_menu")
const menu_close = document.querySelector("#close_sidebar_menu")
const sidebar_menu = document.querySelector(".sidebar_menu")

menu_open.addEventListener("click",function(){
    sidebar_menu.classList.add("show")
})
menu_close.addEventListener("click",function(){
    sidebar_menu.classList.remove("show")
})

var splide = new Splide('.hero_splide',{
    type: 'loop',
    loop:true,
    autplay:true,
});
splide.mount();