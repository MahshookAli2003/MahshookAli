// ----------------------navbar hamberger-----------

        const navbarToggle=document.querySelector('.navbar-toggle')
const navbarMenu=document.querySelector(".navbar-menu")
navbarToggle.addEventListener('click',()=>{
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');


})




// -----------email js-------------------------
function sendEmail(event) {
    event.preventDefault(); // This stops the form from submitting automatically

    // Get the values from the form fields
    const name = document.getElementById('names').value;
    const email = document.getElementById('emails').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Check if all fields are filled
    if (name && email && phone && message) {
        // All fields are filled, now you can proceed to send the email
        let params = {
            name: name,
            email: email,
            phone: phone,
            message: message,
        };

        const serviceID = "service_i2agdpl";
        const templateID = "template_v4ar0zt";

        emailjs.send(serviceID, templateID, params)
            .then(
                res => {
                    // Success: clear the form and show a success message
                    document.getElementById('names').value = '';
                    document.getElementById('emails').value = '';
                    document.getElementById('message').value = '';
                    document.getElementById('phone').value = '';
                    console.log(res);
                    alert("Your message has been sent successfully!");
                }
            )
            .catch(err => {
                // Error: log the error
                console.log(err);
                alert("An error occurred. Please try again later.");
            });
    } else {
        // At least one field is empty, show an alert
        alert("Please fill out all the required fields.");
    }
}



// ---------------email js end-------------------



    

  




/* ----- TYPING EFFECT ----- */
   var typingEffect = new Typed(".typedText",{
      strings : ["Software Developer","VJ (Visual Jockey)"],
      loop : true,
      typeSpeed : 100,
      backSpeed : 80,
      backDelay : 2000
   })


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
   const sr = ScrollReveal({
          origin: 'top',
          distance: '80px',
          duration: 2000,
          reset: true
   })

  /* -- HOME -- */
  sr.reveal('.featured-text-card',{})
  sr.reveal('.featured-name',{delay: 100})
  sr.reveal('.featured-text-info',{delay: 200})
  sr.reveal('.featured-text-btn',{delay: 200})
  sr.reveal('.social_icons',{delay: 200})
  sr.reveal('.featured-image',{delay: 300})
 
 sr.reveal('.project-box',{delay: 300})

  /* -- PROJECT BOX -- */
  sr.reveal('.card-project',{interval: 200})

  /* -- HEADINGS -- */
  sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

  /* -- ABOUT INFO & CONTACT INFO -- */
  const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
  })

  srLeft.reveal('.about-info',{delay: 100})
  srLeft.reveal('.contact-info',{delay: 100})

  /* -- ABOUT SKILLS & FORM BOX -- */
  const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
  })

  srRight.reveal('.skills-box',{delay: 100})
  srRight.reveal('.form-control',{delay: 100})
  srRight.reveal('.fm-bom',{delay: 100})
   srLeft.reveal('.form-box',{delay: 100})
   srLeft.reveal('.about',{delay: 100})
   srLeft.reveal('.conttainer',{delay: 100})
   srRight.reveal('.skill',{delay: 100})
   srRight.reveal('.skill-head',{delay: 100})
 



/* ----- CHANGE ACTIVE LINK ----- */

  const sections = document.querySelectorAll('section[id]')

  function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current =>{
      const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute('id')

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {

          document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

      }  else {

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

      }
    })
  }

  window.addEventListener('scroll', scrollActive)



// --------------------skill animated----------------
 // Animate progress bars when visible
function animateProgressBars() {
  document.querySelectorAll('.progress-bar').forEach(bar => {
    let percent = bar.getAttribute('data-percent');
    if (!bar.classList.contains('animated')) {
      bar.style.width = percent + "%";
      bar.classList.add('animated');
    }
  });
}

// Run animation on scroll
window.addEventListener('scroll', () => {
  let section = document.querySelector('.skills');
  let sectionPos = section.getBoundingClientRect().top;
  let screenPos = window.innerHeight / 1.3;

  if (sectionPos < screenPos) {
    animateProgressBars();
  }
});

// Also trigger if already in view on load
window.addEventListener('load', animateProgressBars);













// --------------new-------------------



