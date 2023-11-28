const cartBtn = document.querySelector('.button-cart');
const modalCart = document.getElementById('modal-cart');
const closeModalCard = modalCart.querySelector('.modal-close')

cartBtn.addEventListener('click', function (){
  modalCart.style.display = "flex"
});

closeModalCard.addEventListener('click', function (){
  modalCart.style.display = ""
})



