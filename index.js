const card1Btn = document.getElementById("submit");
const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");

card1Btn.addEventListener("click", () => {
  card1.style.display = "none";
  card2.style.display = "block";
});


const stars = document.querySelectorAll(".circles");
const ratingValue = document.getElementById("ratingValue");

stars.forEach((star) => {
  star.addEventListener("click", () => {
    const rating = parseInt(star.getAttribute("data-value"));
    // console.log(rating);
    return rating;
});
// console.log(rating);

ratingValue.textContent = '${rating}';
});
