
const countdownSeconds = parseInt(prompt("Enter the countdown time in seconds:"), 10);

if (isNaN(countdownSeconds) || countdownSeconds <= 0) {
    console.log("Please enter a valid number greater than 0.");
} else {
    let remainingTime = countdownSeconds;
    let countdownInterval;

    function startCountdown() {
        countdownInterval = setInterval(() => {
            if (remainingTime > 0) {
                console.log(`Time remaining: ${remainingTime} seconds`);
                remainingTime--;
            } else {
                clearInterval(countdownInterval);
                console.log("Countdown Complete!");
            }
        }, 1000);
    }

   
    function stopCountdown() {
        clearInterval(countdownInterval);
        console.log("Countdown Stopped by User!");
    }

    function detectKeyPress() {
        setTimeout(() => {
            document.addEventListener("keydown", (event) => {
                if (event.key.toLowerCase() === "s") {
                    stopCountdown();
                }
            });
        }, 0);
    }

    startCountdown();
    detectKeyPress();
}
