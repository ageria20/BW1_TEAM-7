const stars = document.querySelectorAll(".star");
// console.log(stars);
const sectionSelec = document.querySelector("section");
const feedbackBtn = document.querySelector("button");
const getMain = document.querySelector("main");

let selectedStar = false;

stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    // console.log(index);
    selectedStar = true;
    stars.forEach((star, index2) => {
      if (index >= index2) {
        star.classList.add("filled");
      } else {
        star.classList.remove("filled");
      }
    });
  });

  star.addEventListener("mouseover", () => {
    stars.forEach((star, index2) => {
      if (index >= index2) {
        star.classList.add("hovered");
      } else {
        star.classList.remove("hovered");
      }
    });
  });

  star.addEventListener("mouseout", () => {
    stars.forEach((star) => {
      star.classList.remove("hovered");
    });
  });
});

const feedbackTitle = document.createElement("h1");
const feedbackSubtitle = document.createElement("h3");

// console.log(feedback);
feedbackBtn.addEventListener("click", () => {
  if (selectedStar === true) {
    sectionSelec.style.display = "none";
    feedbackTitle.innerHTML = `Thanks for your feedback!<br><br>
    <img src="./assets/img/pedro-racoon.gif" alt=pedro racon">
    <audio controls autoplay style="display: none"><source src="./assets/sounds/pedro.mp3" type="audio/mp3"></audio>`;
    feedbackTitle.style.textAlign = "center";
    getMain.appendChild(feedbackTitle);
    const welcome = document.querySelector("#welcome");
  } else {
    sectionSelec.style.display = "none";
    feedbackTitle.innerHTML = `Where is your feedback?!<br><br>
    <img src="./assets/img/malta-malta-gifs.gif" alt=pedro racon">`;
    feedbackTitle.style.textAlign = "center";
    feedbackSubtitle.innerText = "Please reload the page and give as a feedback!";
    getMain.appendChild(feedbackTitle);
    feedbackTitle.appendChild(feedbackSubtitle);
  }
});
