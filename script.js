const btn = document.getElementById("theme-btn");

btn.onclick = function () {
    document.body.classList.toggle("dark");
    btn.innerHTML = document.body.classList.contains("dark") ? "☀️" : "🌙";
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
