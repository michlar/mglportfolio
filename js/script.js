const word = document.querySelector(".tiny");

if (word) {
  word.addEventListener("click", () => {
    word.classList.toggle("is-small");
  });

  word.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      word.classList.toggle("is-small");
    }
  });
}

const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
  const open = navMenu.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', open);
});


navToggle.addEventListener('click', () => {
  console.log("clicked");
});

const bee = document.querySelector(".bee-wrap");

function restartBee() {

  bee.classList.remove("bee-animate");
  
  bee.style.transform = "translate(105vw, 110vh) rotate(0deg)";
  
  void bee.offsetWidth;

  bee.classList.add("bee-animate");
}

bee.addEventListener("animationend", (e) => {
  if (e.animationName === "beeFly") {
    setTimeout(restartBee, 4000); 
  }
});
