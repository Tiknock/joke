app = document.querySelector('.app')

function getJoke() {
fetch("https://api.blablagues.net/?rub=blagues")
    .then((res) => res.json()
    ).then((data) => {
        const joke = data.data.content;

        header.textContent = joke.text_head
        if(joke.text_hidden) {
        content.textContent= joke.text_hidden
        } else {
        content.textContent= joke.text
        content.style.opacity = 1
        }
    })
}

getJoke()
app.addEventListener("click", () => {
    content.style.opacity = 1
})
next.addEventListener("click", () => {
    content.style.opacity = 0
    getJoke();  
})