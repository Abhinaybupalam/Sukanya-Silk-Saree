// For future enhancements like carousel or button actions
console.log("Sukanya Silk Saree homepage loaded");
const productList = document.querySelector('.product-list');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

nextBtn.addEventListener('click', () => {
  productList.scrollBy({ left: 220, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
  productList.scrollBy({ left: -220, behavior: 'smooth' });
});
