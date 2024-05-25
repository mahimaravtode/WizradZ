gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".container"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".container" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".container", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".container").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();





function page1Animation(){
    var tl = gsap.timeline();

tl.from("nav h1,.part-2 h4",{
    y:-60,
    duration:0.9,
    opacity:0,
    stagger:0.12
});
tl.from(".center1 h1",{
    x:-300,
    duration:0.9,
    opacity:0
},'-=0.7');
tl.from(".center1 p",{
    x:-100,
    duration:0.7,
    opacity:0
});
tl.from(".center1 h3",{
    opacity:0
});
tl.from('.center2 img',{
    x:300,
    opacity:0
},'-=1');
tl.from('.section1bottom img',{
    y:20,
    opacity:0,
    stagger:0.2
})
}

function page2Animation(){
    var tl2 = gsap.timeline({
        scrollTrigger:{
            scroller:'.container',
            trigger:'.section2',
            start:'top 50%',
            end:'top -50%',
            scrub:2
        }
    })
    tl2.from(".service h3",{
        x:-100,
        opacity:0
    })
    tl2.from(".service p",{
        opacity:0
    },'-=0.3');
    tl2.from(".box.left",{
        x:-300,
        opacity:0,
        duration:0.9
    },'anime1')
    tl2.from(".box.right1.blackbg",{
        x:300,
        opacity:0,
        duration:0.9
    },'anime1')
    tl2.from(".box.left1.blackbg",{
        x:-300,
        opacity:0,
        duration:0.9
    },'anime2')
    tl2.from(".box.right",{
        x:300,
        opacity:0,
        duration:0.3
    },'anime2')
};

function page3Animation(){
    var tl3 = gsap.timeline({
        scrollTrigger:{
            trigger:".section3",
            scroller:'.container',
            start:'top 50%',
            end:'top 50%',
            scrub:2
        }
    })
    tl3.from('.section3',{
        opacity:0
    })
};
function caseAnimation(){
    var tl4 = gsap.timeline({
        scrollTrigger:{
            trigger:".case",
            scroller:'.container',
            start:'top 50%',
            end:'top 50%',
            scrub:2
        }
     });
     tl4.from(".caseStudy h3",{
        x:-100,
        opacity:0
    })
    tl4.from(".caseStudy p",{
        opacity:0
    },'-=0.3');
}
function footerAnimation()
{
    var tl5 = gsap.timeline({
        scrollTrigger:{
            trigger:".footer",
            scroller:'.container',
            start:'top 60%',
            end:'top 60%',
            scrub:2
        }
     });
    
     tl5.from(".footer",{
        opacity:0
     })
     tl5.from(".footercontent h3",{
        opacity:0,
        y:30
     })
}
 page1Animation();
 page2Animation();
 page3Animation();
 caseAnimation();
 footerAnimation();


