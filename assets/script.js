document.addEventListener("DOMContentLoaded", function () {
  // **1️⃣ Active Navigation on Scroll**
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

  // **2️⃣ Smooth Scrolling (CSS-based)**
  document.documentElement.style.scrollBehavior = "smooth";

  // **3️⃣ Header Scroll Effect**
  let header = document.querySelector(".sp-header");
  window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
          header.classList.add("scrolled");
      } else {
          header.classList.remove("scrolled");
      }
  });

  // **4️⃣ Mobile Menu Toggle**
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  if (menuToggle && mobileMenu) {
      menuToggle.addEventListener("click", function () {
          mobileMenu.classList.toggle("active");
      });
  }

  // **5️⃣ Call Button Dropdown Toggle**
  const callBtn = document.getElementById("callBtn");
  const callOptions = document.getElementById("callOptions");

  if (callBtn && callOptions) {
      callBtn.addEventListener("click", function () {
          callOptions.classList.toggle("active");
      });
  }

  // **6️⃣ Pricing Cards Visibility on Scroll**
  const pricingCards = document.querySelectorAll(".pricing-card");

  const checkVisibility = () => {
      pricingCards.forEach((card) => {
          const rect = card.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
              card.classList.add("visible");
          }
      });
  };

  window.addEventListener("scroll", checkVisibility);
  setTimeout(checkVisibility, 500); // Ensure visibility on page load

  // **7️⃣ Auto-Scrolling Slider**
  const slider = document.querySelector(".slider");
  if (slider) {
      let scrollSpeed = 2;
      let isDragging = false;

      function autoScroll() {
          if (!isDragging) {
              slider.scrollLeft += scrollSpeed;
              if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
                  slider.scrollLeft = 0;
              }
          }
      }

      setInterval(autoScroll, 20);
  }

 

  // **9️⃣ One-Time Popup (Local Storage)**
  const popup = document.getElementById("popup");
  const agreeBtn = document.getElementById("agreeBtn");

  if (popup && agreeBtn) {
      if (!localStorage.getItem("popupShown")) {
          popup.style.visibility = "visible";
          popup.style.opacity = "1";
      }

      agreeBtn.addEventListener("click", function () {
          popup.style.visibility = "hidden";
          popup.style.opacity = "0";
          localStorage.setItem("popupShown", "true");
      });
  }
});


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "50px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
  }
