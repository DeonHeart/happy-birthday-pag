document.getElementById("celebrate-button").addEventListener("click", function() {
    const message = document.getElementById("birthday-message");
    const funnyMessage = document.getElementById("funny-message");
    const heartfeltMessage = document.getElementById("heartfelt-message");

    message.style.transform = "scale(1.2)";
    message.style.color = "#FFD700"; // Change to gold

    funnyMessage.textContent = "Age is merely the number of years the world has been enjoying you! 😜";
    funnyMessage.style.opacity = 1; // Show the funny message

    heartfeltMessage.textContent = "Though we're apart, my heart is always with you. Happy Birthday! ❤️";
    heartfeltMessage.classList.remove("hidden");
    setTimeout(() => {
        heartfeltMessage.style.opacity = 1; // Show heartfelt message
    }, 2000);

    setTimeout(() => {
        message.style.transform = "scale(1)";
        message.style.color = "#ff6b6b"; // Change back to original color
        funnyMessage.style.opacity = 0; // Hide the funny message
        heartfeltMessage.style.opacity = 0; // Hide heartfelt message
    }, 6000);
});
