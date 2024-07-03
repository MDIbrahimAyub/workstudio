const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});


var elems = document.querySelectorAll(".elem")
var page2 = document.querySelector(".page2")
elems.forEach(function(ele){
    ele.addEventListener("mouseenter",function(){
       var bg =  ele.getAttribute("data-img")
       page2.style.backgroundImage = `url(${bg})` 
    })
})

var tl = gsap.timeline()

tl.to(".yellow", {
    top: "-100%",
    delay: 0.5,
    duration: 0.7,
    ease: "expo.out"
})
tl.from(".yellow1", {
    top: "100%",
    delay: 0.6,
    duration: 0.7,
    ease: "expo.out"
},"a")
tl.to(".loader h1",{
    color:"black",
    dealy:0.4,
    duration:0.7
},"a")

tl.to(".loader",{
    display:"none"
})

document.querySelector(".footer span").addEventListener("click",function(){
    scroll.scrollTo(0);
})