//selectors
const stack = document.querySelector('.techStack');
const cards = document.querySelectorAll(".cards__single");
const projectSection = document.querySelector(".projects_title > h1");
const navbarElement = document.querySelector(".topnav");
const slideUpSection = document.getElementById('cardsSection');


//converting the h1 into an uppercase word, just for fun
const inner = projectSection.innerText;
projectSection.innerHTML = inner.toUpperCase();

//creating the flip function

function flipCard() {
  this.classList.toggle("flip");
}

//listening to the click event
cards.forEach(card => card.addEventListener('click', flipCard));



//setInterval function
const techStack = ['React', 'Git', 'Boostrap', 'React Hooks', 'firebase', 'HTML', 'CSS', 'JS'];
let text = "";
let i = 0;

function iterateOverTechStack() {

   if( i >= techStack.length){
      i = 0;
      text = "";
    }

    text += techStack[i] + ", ";
    stack.innerHTML =  text;
   i++;
}

setInterval(iterateOverTechStack,2000);


//on scroll navbar function
function navbarScroll() {

  if( document.documentElement.scrollTop >= 60) {

    navbarElement.classList.add('scroll')

  }else {
    navbarElement.classList.remove('scroll')
  }
}

//new onScrolll event
function slideinOnScroll() {
  if( document.documentElement.scrollTop > 248)  slideUpSection.className = 'slideUp';
}


//calling the funciton when the windows object reachs the target
window.addEventListener('scroll', slideinOnScroll);
//calling function when navbar reach target.
window.addEventListener('scroll', navbarScroll);

