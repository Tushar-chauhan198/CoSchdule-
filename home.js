var lastScrollTop = 0;
navbar = document.getElementById("header");
window.addEventListener("scroll", function(){
var scrollTop = window.pageYOffset || document
.documentElement.scrollTop;
if (scrollTop > lastScrollTop){
    navbar.style.top="-50px;"
}else {
    navbar.style.top="0";
}
})