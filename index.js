app = document.querySelector(".app");

function getJoke() {
  fetch("https://api.blablagues.net/?rub=blagues")
    .then((res) => res.json())
    .then((data) => {
      const joke = data.data.content;

      next.style.display = "none";
      header.textContent = joke.text_head;
      if (joke.text_hidden) {
        res.style.display = null;
        res.addEventListener("click", () => {
          content.textContent = joke.text_hidden;
          next.style.display = null;
          res.style.display = "none";
        });
      } else {
        next.style.display = null;
        res.style.display = "none";
        content.classList.remove("showRes");
        content.textContent = joke.text;
      }
    });
}

getJoke();

next.addEventListener("click", () => {
  header.textContent = "Recherche d'une blague...";
  content.textContent = "";
  getJoke();
});
