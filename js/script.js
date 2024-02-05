const wrapper = document.createElement("div");
wrapper.classList.add("wrapper");

const span = document.createElement("span");
span.innerText = "😂";

const joke = document.createElement("p");
joke.setAttribute("id", "joke");

const butn = document.createElement("button");
butn.setAttribute("id", "btn");
butn.innerText = "Get Random Joke";

wrapper.append(span, joke, butn);

document.body.append(wrapper);

const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");

const url = `https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single`;

const getJoke = () => {
  jokeContainer.classList.remove("fade");
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      jokeContainer.textContent = `${item.joke}`;
      jokeContainer.classList.add("fade");
    })
    .catch((err) => console.log(err));
};

getJoke();
btn.addEventListener("click", getJoke);
