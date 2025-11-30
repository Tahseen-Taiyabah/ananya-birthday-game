const startBtn = document.getElementById("startBtn");
const intro = document.getElementById("intro-screen");
const menu = document.getElementById("menu");

startBtn.addEventListener("click", () => {
    // Fire fireworks
    fireConfetti();
    
    // Fade intro out, show menu
    intro.style.opacity = "0";
    setTimeout(() => {
        intro.classList.add("hidden");
        menu.classList.remove("hidden");
    }, 800);
});

function fireConfetti() {
    var duration = 3 * 1000;
    var end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });

        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
}
