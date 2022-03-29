let before = document.querySelector(".before-feedback");
let after = document.querySelector(".after-feedback");
let button = document.querySelector("#submit-rat");
let rating = document.querySelectorAll(".radio-opt");
let result = document.querySelector("#result-rating");

after.classList.add("none");

for(let i=0;i < rating.length; i++) {

    rating[i].addEventListener("click", () => {

        result.textContent = event.target.value;
        button.disabled = false;
    });
}

button.addEventListener("click", e => {

    e.preventDefault();

    after.classList.remove("none");
    before.classList.add("none");
})