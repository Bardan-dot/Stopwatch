let output = document.getElementById("timeDisplay");
let timer = null;
let elapsedTime = 0;
let startTime = 0;
let isRunning = false;

function start() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime; 
        timer = setInterval(update, 10);
        isRunning = true;
    }
}

function stop() {
    if (isRunning) {
        clearInterval(timer); 
        isRunning = false;
    }
}

function reset() {
    stop(); 
    elapsedTime = 0; 
    output.textContent = "00:00:00:00"; 
}

function update() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    output.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}