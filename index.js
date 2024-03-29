const card1Btn = document.getElementById("submit");
const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");

card1Btn.addEventListener("click", () => {
  card1.style.display = "none";
  card2.style.display = "block";
});

let rate = null;
const stars = document.querySelectorAll(".circles");
const ratingValue = document.getElementById("ratingValue");

stars.forEach((star) => {
  star.addEventListener("click", (e) => {
    const active = document.querySelector(".checked")
    if(active){
      active.classList.remove("checked")
    }
    const card = e.target;
    card.classList.add("checked");
    rate = e.target.innerText;

    let rating = parseInt(star.getAttribute('data-value'));
    console.log(rating);
    ratingValue.textContent = `${rating}`;
  });
});
