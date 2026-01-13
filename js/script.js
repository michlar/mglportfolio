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
