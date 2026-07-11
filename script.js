const nav=document.querySelector("#navbar");


window.addEventListener("scroll",()=>{

if(window.scrollY>40){

nav.classList.add("scrolled");

}

else{

nav.classList.remove("scrolled");

}

});





const observer=new IntersectionObserver(

entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("visible");

}

});

},

{
threshold:.15
}

);



document.querySelectorAll(".reveal")
.forEach(el=>observer.observe(el));







document.querySelectorAll(".expand")
.forEach(button=>{


button.addEventListener("click",()=>{


let detail=button.nextElementSibling;


detail.classList.toggle("show");


button.textContent=
detail.classList.contains("show")
?
"Hide Details"
:
"Explore Project";


});


});