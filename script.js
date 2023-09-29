function locoAnim(){

    gsap.registerPlugin(ScrollTrigger);
    
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}
locoAnim();

function navAnim(){

    gsap.to(".nav svg",{
        transform:"translatey(-350%)",
        scrollTrigger:{
            trigger:".page1",
            scroller:".main",
            // markers:true,
            start:"top 0",
            end:"bottom 20%",
            scrub:1
        }
    })
    gsap.to(".nav .links",{
        transform:"translatey(-350%)",
        opacity:0,
        scrollTrigger:{
            trigger:".page1",
            scroller:".main",
            // markers:true,
            start:"top 0",
            end:"bottom 20%",
            scrub:1
        }
    })
    gsap.to(".nav .icons",{
    
        backgroundColor:"#000",
        color:"#fff",
        scrollTrigger:{
            trigger:".page1",
            scroller:".main",
            // markers:true,
            start:"top 0",
            end:"bottom 20%",
            scrub:1
        }
    })
    gsap.to(".lines .line1,.line2",{
    
        backgroundColor:"#fff",
        scrollTrigger:{
            trigger:".page1",
            scroller:".main",
            // markers:true,
            start:"top 0",
            end:"bottom 20%",
            scrub:1
        }
    })
}
navAnim();

function videoConAnim(){
    var videocon=document.querySelector(".video_container video");
var playbtn=document.querySelector(".play");
videocon.addEventListener("mouseenter",function(){
    gsap.to(playbtn,{
        display:"block",
        scale:1,
        opacity:1,
        
    })
})
videocon.addEventListener("mouseleave",function(){
    gsap.to(playbtn,{
        display:"none",
        scale:0,
        opacity:0,
        
    })
})
videocon.addEventListener("mousemove",function(dets){
    gsap.to(playbtn,{
        left:dets.x-25,
        top:dets.y+40,
    })
})
}
videoConAnim();

function loadingAnim(){
gsap.from(".page1 h1",{

    rotateX:"90deg",
    duration:0.5,
    stagger:0.4,
    opacity:0,
    ease:"power2.in"
})
// gsap.from(".page1 .video_container",{

//     y:100,
//     duration:0.5,
//     // stagger:0.4,
//     opacity:0,
//     // color:"firebrick",
//     ease:"power2.in"
// })
}
loadingAnim();
function cursorAnim(){

    document.addEventListener("mousemove",function(dets){
        gsap.to(".cursor",{
            left:dets.x,
            top:dets.y,
       
        })
    })
    
    document.querySelectorAll(".child").forEach(function(elm){
    
        elm.addEventListener("mouseenter",function(){
            gsap.to(".cursor",{
                translate:"-50%,-50%" ,
                scale:1
        
            })
        })
    
        elm.addEventListener("mouseleave",function(){
            gsap.to(".cursor",{
                translate:"-50%,-50%" ,
                scale:0
        
            })
        })
    })
}
cursorAnim();
