gsap.to('.layer-1',{y:"-100vh",delay:1,duration:1,});
gsap.to('.layer-2',{y:"-100vh",delay:.8,duration:1});
gsap.to('.layer-3',{y:"-100vh",delay:.5,duration:1});
gsap.to('.overlay',{y:"-100vh",delay:1,duration:1},3);
gsap.from('.slide1text',{y:"10vh",duration:3,opacity:0,delay:2});
gsap.to("#homeslide2-div",{x:"0vw",duration:2,delay:4});
gsap.to("#homeslide2-h1",{y:"-200vh",duration:2,opacity:1,delay:4});
gsap.to('.slide1text',{opacity:0,duration:2,delay:4});
gsap.to("#home",{y:"0vh",duration:2,delay:7});
gsap.fromTo("#me",{y:"0vh",opacity:0},{opacity:1,delay:10.5,duration:2});
gsap.fromTo("#heyyou",{opacity:0},{opacity:1,duration:2,delay:9,ease:"ease-in"});
gsap.fromTo("#you",{opacity:0},{opacity:1,duration:2,delay:9.3});
gsap.fromTo("#anand",{opacity:0,y:"20vh"},{opacity:1,y:"5vh",duration:1,delay:9.7});
gsap.fromTo("#artist",{opacity:0,y:"20vh"},{opacity:1,y:"5vh",duration:1,delay:10.3});
gsap.from("#hireme",{opacity:0,y:"20vh",duration:1,delay:10.9});
gsap.fromTo("#background",{y:"-100vh",opacity:0},{y:"0vh",opacity:1,delay:12.5,duration:2});
gsap.to("#navbar",{opacity:1,duration:2,delay:7});




function navslidehome(){
    document.getElementById("home-icon").style.transform="translateY(30vh)";
}
function navslideabout(){
    document.getElementById("about-icon").style.transform="translateY(30vh)";
}
function navslideworks(){
    document.getElementById("works-icon").style.transform="translateY(30vh)";
}
function navslidecontact(){
    document.getElementById("contact-icon").style.transform="translateY(30vh)";
}
function navslideback(){
    document.getElementById("home-icon").style.transform="translateY(0vh)";
    document.getElementById("about-icon").style.transform="translateY(0vh)";
    document.getElementById("contact-icon").style.transform="translateY(0vh)";
    document.getElementById("works-icon").style.transform="translateY(0vh)";
}


window.addEventListener("scroll",function (){
    var height=window.innerHeight;
    var value=height/5;

    if(window.scrollY<value){
        
       document.getElementById("A").style.animation="aboutan 2s ease-in-out";
       document.getElementById("A").style.opacity=1;
    }
    else if(window.scrollY<2*value){
        document.getElementById("B").style.animation="aboutan 2s ease-in-out";
       document.getElementById("B").style.opacity=1; 
         }
    else if(window.scrollY<3*value){
        document.getElementById("O").style.animation="aboutan 2s ease-in-out";
       document.getElementById("O").style.opacity=1;   }
    else if(window.scrollY<4*value){
        document.getElementById("U").style.animation="aboutan 2s ease-in-out";
       document.getElementById("U").style.opacity=1;   }
    else if(window.scrollY<5*value){
        document.getElementById("T").style.animation="aboutan 2s ease-in-out";
       document.getElementById("T").style.opacity=1;
        gsap.to("#about-grid-2",{opacity:1,y:0,duration:2})  ;
            }
    else{
   
      
        document.getElementById("A").style.opacity=1;
        document.getElementById("B").style.opacity=1;
        document.getElementById("O").style.opacity=1;
        document.getElementById("U").style.opacity=1;
        document.getElementById("T").style.opacity=1;
    }


    if(window.scrollY<1.5*height){
        document.getElementById("works-cover-wrap").style.display="none";
        
        
    }
    else if(window.scrollY>3.5*height){
        document.getElementById("works-cover").style.display="none";
        
    
    }
    else{
        document.getElementById("works-cover-wrap").style.display="grid";
        
       
        document.getElementById("works-cover").style.animation="worksan 2s ease-in-out";
        
       
    }
    if(window.scrollY>(1.5*height+document.getElementById("works").offsetHeight)){
        document.getElementById("priceplanshead").style.opacity=1;
       document.getElementById("priceplanshead").style.animation="priceplansheadan 2s ease-in-out";
       document.getElementById("underline").style.opacity=1;
       document.getElementById("underline").style.animation="underline 2s ease-in-out";
    }
})

function priceslide(num){

    var y=document.querySelectorAll(".grid-div img");
    y[num].style.transform="translateY(0)";
    gsap.to(".price-grid-img",{y:"-100%",delay:2});
}






var prevscrolly=window.pageYOffset;
window.addEventListener("scroll",function(){
    
    var scrolly=window.pageYOffset;
    
    if(scrolly>prevscrolly){
        document.getElementById("navbar").style.transform="translateY(100%)";
       
    }
    else{
        document.getElementById("navbar").style.transform="translateY(0%)";
       
        
    }
    prevscrolly=scrolly;
})




$(".not-slide").hide();

// Execute something when DOM is ready:
$(document).ready(function(){
// Delay the action by 10000ms
setTimeout(function(){
// Display the div containing the class "bottomdiv"
$(".not-slide").show();
}, 7000);
});




