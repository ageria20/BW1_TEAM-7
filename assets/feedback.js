const stars = document.querySelectorAll(".star");
// console.log(stars);

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

const feedback = document.querySelector("button");
// console.log(feedback);
feedback.addEventListener("click", () => {
  if (selectedStar === true) {
    alert("Grazie per aver completato il test!");
    const welcome = document.querySelector("#welcome");
    welcome.setAttribute("href", "./welcome.html");
  } else {
    alert("Per favore, seleziona almeno una stella!");
  }
});
