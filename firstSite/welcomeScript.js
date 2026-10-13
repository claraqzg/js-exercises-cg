const capybara = document.getElementById("capybara");
let imagemAtual = 1;

capybara.addEventListener("click", function () {

    if (imagemAtual === 1) {
        capybara.src = "capybara2.png";
        imagemAtual = 2;
    } else {
        capybara.src = "capybara1.png";
        imagemAtual = 1;
    }

    confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
    });
});