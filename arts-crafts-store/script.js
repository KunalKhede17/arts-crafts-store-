const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
const cartCount = document.querySelector('.cart-count');
const year = document.getElementById('year');
const addButtons = document.querySelectorAll('.add-cart');

if (year) {
  year.textContent = new Date().getFullYear();
}

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

let cartTotal = 0;

addButtons.forEach((button) => {
  button.addEventListener('click', () => {
    cartTotal += 1;
    cartCount.textContent = cartTotal;

    const originalText = button.textContent;
    button.textContent = 'Added';
    button.disabled = true;

    setTimeout(() => {
      button.textContent = originalText;
      button.disabled = false;
    }, 900);
  });
});

const newsletterForm = document.querySelector('.newsletter-form');

if (newsletterForm) {
  newsletterForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const button = newsletterForm.querySelector('button');
    const input = newsletterForm.querySelector('input');

    if (button && input) {
      button.textContent = 'Subscribed';
      input.value = '';
      button.disabled = true;
    }
  });
}
