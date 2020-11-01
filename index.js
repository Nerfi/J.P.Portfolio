const cards = document.querySelectorAll(".cards__single");

//creating the flip function

function flipCard() {
  this.classList.toggle("flip");
}

//listening to the click event
cards.forEach(card => card.addEventListener('click', flipCard));
