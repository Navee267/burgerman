var navbar = document.querySelector(".navbar");
var p = document.querySelector(".p");

p.addEventListener("click",function(){
    navbar.style.position = "sticky";
    navbar.style.top ="0px";
})
p.addEventListener("mouseover",function(){
        navbar.style.position = "relative";
    navbar.style.top ="-500px";
})