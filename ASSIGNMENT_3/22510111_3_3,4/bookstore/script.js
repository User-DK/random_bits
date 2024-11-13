let cartCount = 0;

function addToCart(bookTitle) {
  cartCount++;
  document.getElementById('cart-count').innerText = cartCount;
  alert(`${bookTitle} has been added to your cart.`);
}

function toggleMenu() {
  const navMenu = document.getElementById('nav-menu');
  if (navMenu.style.display === 'block') {
    navMenu.style.display = 'none';
  } else {
    navMenu.style.display = 'block';
  }
}
