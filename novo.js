const tema = document.getElementById("tema");

tema.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    document.querySelectorAll("section").forEach(section => {
        section.classList.toggle("dark");
    });

    if (document.body.classList.contains("dark")) {
        tema.textContent = "☀️";
    } else {
        tema.textContent = "🌙";
    }
});