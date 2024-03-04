const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-Links li")

    burger.addEventListener("click", () => {
        nav-classList.toggle(".nav-active");

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forward ${index / 7 + 0.5}s`;
            }
        });

        burger.classList.toggle("burger-menu");
    });
};

navSlide();

let result = document.getElementById("result");

function getResult(num) {
    result.value += num;
}

function clearResult() {
    result.value = "";
}

function calculate() {
    result.value = eval(result.value);
}