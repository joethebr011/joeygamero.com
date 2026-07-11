const nav = document.querySelector("#navbar");


window.addEventListener("scroll",()=>{

if(window.scrollY > 40){

nav.classList.add("scrolled");

}

else{

nav.classList.remove("scrolled");

}

});





const reveals=document.querySelectorAll(".reveal");


const observer=new IntersectionObserver(entries=>{


entries.forEach(entry=>{


if(entry.isIntersecting){

entry.target.classList.add("visible");

}


});


});


reveals.forEach(el=>observer.observe(el));






const buttons=document.querySelectorAll(".expand");


buttons.forEach(button=>{


button.addEventListener("click",()=>{


const detail =
button.nextElementSibling;


detail.classList.toggle("show");


button.innerHTML =
detail.classList.contains("show")
?
"Hide Details ↑"
:
"View Details ↓";


});


});