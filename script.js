// Leon Hospitality - Shared Scripts

document.addEventListener('DOMContentLoaded', function() {

  // ---- MOBILE MENU TOGGLE ----
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuOpenIcon = document.getElementById('menu-open-icon');
  const menuCloseIcon = document.getElementById('menu-close-icon');

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
      if (menuOpenIcon && menuCloseIcon) {
        menuOpenIcon.classList.toggle('hidden');
        menuCloseIcon.classList.toggle('hidden');
      }
    });
  }

  // ---- NAV SCROLL EFFECT ----
  const nav = document.getElementById('main-nav');
  if (nav) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 20) {
        nav.classList.add('scrolled');
        nav.classList.add('bg-cream/95', 'backdrop-blur-sm', 'border-b', 'border-navy/10');
      } else {
        nav.classList.remove('scrolled');
        nav.classList.remove('bg-cream/95', 'backdrop-blur-sm', 'border-b', 'border-navy/10');
      }
    });
  }

  // ---- FAQ ACCORDION ----
  const faqButtons = document.querySelectorAll('.faq-button');
  faqButtons.forEach(button => {
    button.addEventListener('click', function() {
      const content = this.nextElementSibling;
      const icon = this.querySelector('.faq-icon');

      // Close all others
      document.querySelectorAll('.faq-content').forEach(c => {
        if (c !== content) {
          c.classList.remove('open');
        }
      });
      document.querySelectorAll('.faq-icon').forEach(i => {
        if (i !== icon) {
          i.classList.remove('open');
        }
      });

      // Toggle current
      if (content) content.classList.toggle('open');
      if (icon) icon.classList.toggle('open');
    });
  });

  // Open first FAQ by default if on FAQs page
  const firstFaq = document.querySelector('.faq-content');
  const firstIcon = document.querySelector('.faq-icon');
  if (firstFaq && window.location.pathname.includes('faq')) {
    firstFaq.classList.add('open');
    if (firstIcon) firstIcon.classList.add('open');
  }

  // ---- CONTACT FORM ----
  // Note: Form submits via FormSubmit (https://formsubmit.co)
  // First submission requires email verification (Cisco confirms it once)
  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      // Allow native form submission to FormSubmit
      // Validate first
      const requiredFields = contactForm.querySelectorAll('[required]');
      let valid = true;
      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          valid = false;
          field.classList.add('border-red-500');
        } else {
          field.classList.remove('border-red-500');
        }
      });

      if (!valid) {
        e.preventDefault();
        const errorMsg = document.getElementById('form-error');
        if (errorMsg) errorMsg.classList.remove('hidden');
      }
      // If valid, native submit handles it (redirects to FormSubmit thank-you, or back to page)
    });
  }
});
