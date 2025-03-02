document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 100;
            if (scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });
});




// smooth scrolling

document.addEventListener("wheel", (event) => {
    event.preventDefault();
    window.scrollBy({
      top: event.deltaY * 1.5, // 1.5x multiplier for extra smoothness
      behavior: "smooth",
    });
  }, { passive: false });



  window.addEventListener("scroll", function () {
    let header = document.querySelector(".sp-header");
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  
         // Toggle Mobile Menu
         document.getElementById('menu-toggle').addEventListener('click', function() {
            document.getElementById('mobile-menu').classList.toggle('active');
        });
        
        // Toggle Call Dropdown
        document.getElementById('callBtn').addEventListener('click', function() {
            document.getElementById('callOptions').classList.toggle('active');
        });






      
        document.addEventListener("DOMContentLoaded", function () {
            const slider = document.querySelector(".slider");
            let scrollAmount = 0;
            let scrollSpeed = 2;
            let isDragging = false;
            let startX;
            let scrollLeft;
        
            function autoScroll() {
              if (!isDragging) {
                scrollAmount += scrollSpeed;
                if (scrollAmount >= slider.scrollWidth / 2) {
                  scrollAmount = 0;
                }
                slider.style.transform = `translateX(-${scrollAmount}px)`;
              }
            }
        
            setInterval(autoScroll, 20);
        
            // Drag to Slide
            slider.addEventListener("mousedown", (e) => {
              isDragging = true;
              startX = e.pageX - slider.offsetLeft;
              scrollLeft = scrollAmount;
            });
        
            slider.addEventListener("mouseleave", () => {
              isDragging = false;
            });
        
            slider.addEventListener("mouseup", () => {
              isDragging = false;
            });
        
            slider.addEventListener("mousemove", (e) => {
              if (!isDragging) return;
              e.preventDefault();
              const x = e.pageX - slider.offsetLeft;
              const walk = (x - startX) * 2;
              scrollAmount = scrollLeft - walk;
              slider.style.transform = `translateX(-${scrollAmount}px)`;
            });
          });
          

 // 3D Parallax Effect
 const layer2 = document.querySelector('.layer-2');
 document.addEventListener('mousemove', (e) => {
   const x = (window.innerWidth - e.pageX) / 50;
   const y = (window.innerHeight - e.pageY) / 50;
   layer2.style.transform = `translate(${x}px, ${y}px) translateZ(0)`;
 });

 // Particle Explosion Effect
 const buttons = document.querySelectorAll('.custom-btn');
 buttons.forEach(button => {
   button.addEventListener('click', (e) => {
     for (let i = 0; i < 50; i++) {
       const particle = document.createElement('div');
       particle.classList.add('particle');
       particle.style.left = `${e.pageX}px`;
       particle.style.top = `${e.pageY}px`;
       document.body.appendChild(particle);
       setTimeout(() => particle.remove(), 1000);
     }
   });
 });



 const pricingCards = document.querySelectorAll('.pricing-card');

 const checkVisibility = () => {
   pricingCards.forEach(card => {
     const cardTop = card.getBoundingClientRect().top;
     const cardBottom = card.getBoundingClientRect().bottom;
     if (cardTop < window.innerHeight && cardBottom > 0) {
       card.classList.add('visible');
     }
   });
 };

 window.addEventListener('scroll', checkVisibility);
 window.addEventListener('load', checkVisibility);






     function openNav() {
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
      document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }
    
    function closeNav() {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("main").style.marginLeft= "0";
      document.body.style.backgroundColor = "white";
    }










    document.addEventListener("DOMContentLoaded", function () {
      // Check if the user has already visited
      if (!localStorage.getItem("popupShown")) {
          document.getElementById("popup").style.visibility = "visible";
          document.getElementById("popup").style.opacity = "1";
      }
  
      // When user clicks "Agree", close popup and save in local storage
      document.getElementById("agreeBtn").addEventListener("click", function () {
          document.getElementById("popup").style.visibility = "hidden";
          document.getElementById("popup").style.opacity = "0";
          localStorage.setItem("popupShown", "true"); // Save to local storage
      });
  });
  