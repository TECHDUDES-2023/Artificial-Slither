document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("start-button");
    const startPage = document.querySelector(".start-page");
    const optionsPage = document.querySelector(".options-page");
    const userSide = document.querySelector(".user-side");
    const aiSide = document.querySelector(".ai-side");
    const startGameButton = document.getElementById("start-game-button");

    startButton.addEventListener("click", () => {
        // Hide the start page
        startPage.style.display = "none";

        // Show the AI difficulty options
        optionsPage.style.display = "block";
    });

    startGameButton.addEventListener("click", () => {
        const aiDifficulty = document.getElementById("ai-difficulty").value;

        // Hide the options page
        optionsPage.style.display = "none";

        // Show the user and AI sides
        userSide.style.display = "block";
        aiSide.style.display = "block";

        // You can now start the game with the selected AI difficulty
        startGame(aiDifficulty);
    });
});
