const stars = document.querySelectorAll(".star");
// console.log(stars);

stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    // console.log(index);
    stars.forEach((star, index2) => {
      index >= index2 ? star.classList.add("filled") : star.classList.remove("filled");
    });
  });

  star.addEventListener("mouseover", () => {
    stars.forEach((star, index2) => {
      index >= index2 ? star.classList.add("hovered") : star.classList.remove("hovered");
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
  alert("Grazie per aver completato il test!");
});
