const btn = document.getElementById("theme-btn");

btn.onclick = function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        btn.innerHTML = "☀️";
    } else {
        btn.innerHTML = "🌙";
    }
};
const text = [
    "💻 Web Developer",
    "☕ Java Programmer",
    "🐍 Python Learner",
    "🚀 Future Software Engineer"
];

let index = 0;
const typing = document.getElementById("typing-text");

function changeText() {
    typing.textContent = text[index];
    index = (index + 1) % text.length;
}

changeText();
setInterval(changeText, 2000);
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    sections.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if(top < window.innerHeight - 120){

            section.classList.add("show");

        }

    });

});