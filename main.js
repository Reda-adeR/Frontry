const card = document.querySelector(".card__inner");

card.addEventListener("click", function (e) {
  card.classList.toggle('is-flipped');
});

const login = document.querySelector(".login");

login.addEventListener("click", function (e) {
  card.classList.toggle('is-flipped');
  console.log("login");
});

login.addEventListener("mouseover", function (e) {
  login.classList.toggle('loginhover');
});
