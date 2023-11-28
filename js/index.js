const cart = () => {

const cartBtn = document.querySelector('.button-cart');
const modalCart = document.getElementById('modal-cart');
const closeModalCard = modalCart.querySelector('.modal-close')

cartBtn.addEventListener('click', function (){
  modalCart.style.display = "flex"
});

closeModalCard.addEventListener('click', function (){
  modalCart.style.display = ""
})

}

cart()

const search = () => {

  const input = document.querySelector('.search-block  > input');
  const searchBtn = document.querySelector('.search-block  > button');

  input.addEventListener('input', (e) => {
    console.log(e.target.value)
  })

}

search()