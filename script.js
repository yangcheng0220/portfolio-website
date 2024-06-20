const navLinks = document.querySelectorAll('.nav-link');

// fixed-bottom-nav
navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    navLinks.forEach(link => link.classList.remove('active'));  // Remove active from all links
    this.classList.add('active');  // Add active to the clicked link
  });
});

let timeoutId = null;
const myName = document.querySelector('.myName');

myName.addEventListener('mouseover', function (e) {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  timeoutId = setTimeout(function () {
    myName.innerText = 'Odie :0';
  }, 500);
})

myName.addEventListener('mouseout', function (e) {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  timeoutId = setTimeout(function () {
    myName.innerText = 'yang-cheng, ';
  }, 500);
})

const resumeLink = document.querySelector('.resume-link');

resumeLink.addEventListener('mouseover', function (e) {
  resumeLink.querySelector('.arrow').classList.remove('animated');
});

resumeLink.addEventListener('mouseout', function (e) {
  resumeLink.querySelector('.arrow').classList.add('animated');
});

const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach((item) => {
  const collapseElement = item.querySelector('.accordion-collapse');

  const collapse = new bootstrap.Collapse(collapseElement, {
    toggle: false
  });

  item.querySelector('.accordion-button').addEventListener('click', () => {
    if (collapseElement.classList.contains('show')) {
      collapse.hide();
    } else {
      collapse.show();
    }
  });
});

const footerEmail = document.querySelector('.footer-email');

footerEmail.addEventListener('mouseover', function (e) {
  footerEmail.querySelector('.arrow-email').classList.remove('animated');
});

footerEmail.addEventListener('mouseout', function (e) {
  footerEmail.querySelector('.arrow-email').classList.add('animated');
});

const footerLinkedin = document.querySelector('.footer-linkedin');

footerLinkedin.addEventListener('mouseover', function (e) {
  footerLinkedin.querySelector('.arrow-linkedin').classList.remove('animated');
});

footerLinkedin.addEventListener('mouseout', function (e) {
  footerLinkedin.querySelector('.arrow-linkedin').classList.add('animated');
});