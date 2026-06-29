/*=========================================
    CODEASIRE INTERNSHIP PAGE
=========================================*/


// ==========================
// NAVBAR SCROLL EFFECT
// ==========================

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.style.background = "rgba(5,15,35,.95)";
        navbar.style.boxShadow = "0 15px 40px rgba(0,0,0,.35)";
        navbar.style.height = "64px";

    }

    else{

        navbar.style.background = "rgba(5,15,35,.78)";
        navbar.style.boxShadow = "0 15px 45px rgba(0,0,0,.25)";
        navbar.style.height = "68px";

    }

});


// ==========================
// SMOOTH SCROLL
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


// ==========================
// FAQ
// ==========================

const faqs=document.querySelectorAll(".faq-item");

faqs.forEach(item=>{

    const question=item.querySelector(".faq-question");

    question.addEventListener("click",()=>{

        faqs.forEach(faq=>{

            if(faq!==item){

                faq.classList.remove("active");

            }

        });

        item.classList.toggle("active");

    });

});



// ==========================
// COUNTER ANIMATION
// ==========================

const counters=document.querySelectorAll(".stat-box h3");

const speed=200;

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const targetText=counter.innerText;

let target=parseInt(targetText.replace(/\D/g,""));

let count=0;

const update=()=>{

const increment=Math.ceil(target/speed);

count+=increment;

if(count>=target){

counter.innerText=targetText;

}

else{

counter.innerText=count+"+";

requestAnimationFrame(update);

}

}

update();

observer.unobserve(counter);

}

});

});

counters.forEach(counter=>observer.observe(counter));



// ==========================
// ACTIVE NAVBAR LINK
// ==========================

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

if(scrollY>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});




// ==========================
// SCROLL REVEAL
// ==========================

const revealElements=document.querySelectorAll(

".why-card,.tool-card,.curriculum-card,.timeline-item,.project-card,.career-card,.benefit-card,.eligibility-card,.certificate-container,.cta-box"

);

const revealObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{threshold:.2});

revealElements.forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(40px)";

el.style.transition=".8s ease";

revealObserver.observe(el);

});



// ==========================
// FLOATING ICONS
// ==========================

const floating=document.querySelectorAll(".floating-icon");

window.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.pageX)/50;

const y=(window.innerHeight/2-e.pageY)/50;

floating.forEach(icon=>{

icon.style.transform=`translate(${x}px,${y}px)`;

});

});




// ==========================
// BACK TO TOP
// ==========================

const topBtn=document.createElement("button");

topBtn.innerHTML="<i class='fa-solid fa-arrow-up'></i>";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";

topBtn.style.right="30px";

topBtn.style.bottom="30px";

topBtn.style.width="55px";

topBtn.style.height="55px";

topBtn.style.borderRadius="50%";

topBtn.style.border="none";

topBtn.style.background="#10c8ff";

topBtn.style.color="#fff";

topBtn.style.fontSize="18px";

topBtn.style.cursor="pointer";

topBtn.style.display="none";

topBtn.style.zIndex="999";

topBtn.style.boxShadow="0 15px 30px rgba(16,200,255,.35)";

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};




// ==========================
// HERO IMAGE FLOAT
// ==========================

const heroImage=document.querySelector(".hero-right img");

if(heroImage){

setInterval(()=>{

heroImage.style.transform="translateY(-10px)";

setTimeout(()=>{

heroImage.style.transform="translateY(0px)";

},1500);

},3000);

}




console.log("🚀 CodeAsire Internship Loaded Successfully");