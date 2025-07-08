document.addEventListener("DOMContentLoaded", function () {
    const burger = document.getElementById("burger");
    const navMenu = document.querySelector(".nav-menu");
  
    burger.addEventListener("click", function () {
      navMenu.classList.toggle("active");
    });
  
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptCookies = document.getElementById("accept-cookies");
  
    if (!localStorage.getItem("cookiesAccepted")) {
      cookieBanner.style.display = "flex";
    }
  
    acceptCookies.addEventListener("click", function () {
      localStorage.setItem("cookiesAccepted", "true");
      cookieBanner.style.display = "none";
    });
  
    const togglePassword = document.getElementById("togglePassword");
    const passwordInput = document.getElementById("password");
  
    togglePassword.addEventListener("click", function () {
      const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
      passwordInput.setAttribute("type", type);
      togglePassword.classList.toggle("visible");
    });
  
    const loginForm = document.getElementById("loginForm");
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
  
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
  
      emailError.textContent = "";
      passwordError.textContent = "";
  
      let valid = true;
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
  
      if (!email) {
        emailError.textContent = "Email is required.";
        valid = false;
      } else if (!emailRegex.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        valid = false;
      } else if (!gmailRegex.test(email)) {
        emailError.textContent = "Only Gmail addresses are allowed.";
        valid = false;
      }
  
      if (!password) {
        passwordError.textContent = "Password is required.";
        valid = false;
      } else if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters long.";
        valid = false;
      }
  
      if (valid) {
        console.log("Form submitted successfully.");
        loginForm.submit();
      }
    });
  
    const testimonialsGrid = document.getElementById("testimonials-grid");
 
 
 
 
 
    //API CALL
    fetch("https://randomuser.me/api/?results=3&nat=us,gb,ng,za")
      .then((response) => response.json())
      .then((data) => {
        testimonialsGrid.innerHTML = "";
        data.results.forEach((user) => {
          const testimonialCard = document.createElement("div");
          testimonialCard.className = "testimonial-card";
  
          testimonialCard.innerHTML = `
            <div class="testimonial-content">
              <div class="user-info">
                <img src="${user.picture.medium}" alt="${user.name.first}" class="user-avatar" />
                <div>
                  <strong>${user.name.first} ${user.name.last}</strong>
                  <div class="user-location">${user.location.country}</div>
                </div>
              </div>
              <p class="testimonial-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et.
              </p>
            </div>
          `;
          testimonialsGrid.appendChild(testimonialCard);
        });
      })
      .catch((error) => {
        console.error("Error fetching testimonials:", error);
        testimonialsGrid.innerHTML = "<p>Failed to load testimonials. Please try again later.</p>";
      });
  



      
    const header = document.querySelector("header");
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  });
  