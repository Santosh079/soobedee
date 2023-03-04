












   // Function to show the answer box when the question heading is clicked
   const headings = document.querySelectorAll('h2');
   const answers = document.querySelectorAll('.answer');
 
   headings.forEach((heading, index) => {
     heading.addEventListener('click', () => {
       answers[index].classList.toggle('show');
     });
   });
 
   // Function to show the modal box when the contact link is clicked
   const contactLink = document.querySelector('#contact');
   const overlay = document.querySelector('.overlay');
   const modal = document.querySelector('.modal');
   const closeBtn = document.querySelector('.close');
 
   contactLink.addEventListener('click', () => {
     overlay.style.display = 'block';
     modal.style.display = 'block';
   });closeBtn.addEventListener('click', () => {
     overlay.style.display = 'none';
     modal.style.display = 'none';
   });


  //  form-----------------------------------------


  const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const subjectInput = document.querySelector('#subject');
const messageInput = document.querySelector('#message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // validate form inputs
  if (!validateName(nameInput.value.trim())) {
    nameInput.classList.add('error');
    return;
  } else {
    nameInput.classList.remove('error');
  }
  
  if (!validateEmail(emailInput.value.trim())) {
    emailInput.classList.add('error');
    return;
  } else {
    emailInput.classList.remove('error');
  }
  
  if (!validateSubject(subjectInput.value.trim())) {
    subjectInput.classList.add('error');
    return;
  } else {
    subjectInput.classList.remove('error');
  }
  
  if (!validateMessage(messageInput.value.trim())) {
    messageInput.classList.add('error');
    return;
  } else {
    messageInput.classList.remove('error');
  }
  
  // submit form
  form.submit();
});

function validateName(name) {
  return name !== '';
}

function validateEmail(email) {
  const regex = /^\S+@\S+\.\S+$/;
  return regex.test(email);
}

function validateSubject(subject) {
  return subject !== '';
}

function validateMessage(message) {
  return message !== '';
}




// animation


const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  // Toggle nav
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    // Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
      }
    });

    // Burger animation
    burger.classList.toggle('toggle');
  });

  // Animate links when screen is large
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      navLinks.forEach((link, index) => {
        link.style.animation = '';
      });
    } else {
      navLinks.forEach((link, index) => {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
      });
    }
  });
}

navSlide();
