const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstpageanim(){
    var tl = gsap.timeline();
    tl.from(".nav",{
        y : '-10',
        opacity: 0,
        duration : 1.5,
        ease: Expo.easeinOut
    })
    .to(".animateelm",{
       y: 0,
       ease: Expo.easeinOut,
       duration: 2,
       delay: -1,
    //    trigger: .2
    })
    .from(".herofooter",{
      y: '-10',
      opacity: 0,
      duration: 1.5,
      delay: -1,
      ease: Expo.easeinOut
})
}
function circlemousefollower(){
    window.addEventListener("mousemove", function(details){
    document.querySelector(".circlemini").style.transform = `translate (${details.clientX}px, ${details.clientY}px)`;
    })
}
circlemousefollower();

document.querySelectorAll(".element1")
    .forEach(function(element1){
        var rotate = 0;
        var diffe = 0;
element1.addEventListener("mousemove", function(details){
  var diff = details.clenitY - element1.getBoundingClientRect().top;
  diffe = details.clientX - rotate;
  rotate = details.clientX;
    gsap.to(element1.querySelector("img"),{
    opacity: 1,
    ease: Power4,
    top: diff,
    left: details.clientX,
    rotate: gsap.utils.clamp(-20,20, diffe* .2),
   })
})
element1.addEventListener("mouseleave", function(details){
  
    gsap.to(element1.querySelector("img"),{
    opacity: 0,
    ease: Power3,
   duration: .5,
   })
})
    }
        
    );



firstpageanim();