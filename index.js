//selectors
const stack = document.querySelector('.techStack');
const cards = document.querySelectorAll(".cards__single");
const projectSection = document.querySelector(".projects_title > h1");
const navbarElement = document.querySelector(".topnav");

//converting the h1 into an uppercase word, just for fun
const inner = projectSection.innerText;
projectSection.innerHTML = inner.toUpperCase();

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

let i = 0;
setInterval(function() {

    if( i >= techStack.length){
      i = 0;
      text = "";
    }

    text += techStack[i] + ", ";
    stack.innerHTML =  text;
    i++;
  },2000)




// scrool event on topnav class name
window.addEventListener('scroll', function() {
  if(document.documentElement.scrollTop >= 60) {

    navbarElement.classList.add('scroll')

  } else {
    navbarElement.classList.remove('scroll')
  }
})


//adding scroll effect in order to load section when the user gets there
//window.addEventListener('scroll', function() {
  //parece que hemos conseguido saber en que posicion estan las card
  //if ((window.innerHeight + window.scrollY) == 1000  ) {
    //  alert("you're at the bottom of the page");
    //}
//})



window.onscroll = function(ev) {

    console.log(window.pageYOffset); //692
    if(window.pageYOffset == 692) alert("youre"); //acabamos de coger a que distancia tenemos que cargar los documentos.
};
