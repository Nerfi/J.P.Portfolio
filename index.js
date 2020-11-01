const cards = document.querySelectorAll(".cards__single");

//creating the flip function

function flipCard() {
  this.classList.toggle("flip");
}

//listening to the click event
cards.forEach(card => card.addEventListener('click', flipCard));



//adding my name into and H1
const bg = document.querySelector('.name');
const title = document.createElement('H1');
title.innerText = 'Juan Fco Paredes';
bg.appendChild(title);

//setInterval function

const techStack = ['React', 'Git', 'Boostrap', 'React Hooks', 'firebase', 'HTML', 'CSS', 'JS'];
let text = "";

function iteration() {

  setTimeout(function (){

    for(let i = 0; i < techStack.length; i++) {
      text += techStack[i] + "<br>";
    };
      const stack = document.querySelector('.techStack');
      stack.innerHTML =  text;

  },2000)



}
iteration();

