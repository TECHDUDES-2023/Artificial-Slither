document.addEventListener("DOMContentLoaded", function () {
    const startGameButton = document.getElementById("start-game-button");

    startGameButton.addEventListener("click", () => {
        const aiDifficulty = document.getElementById("ai-difficulty").value;

        // Load the game page dynamically with the selected AI difficulty
        window.location.href = "game-page.html";
    });
});
