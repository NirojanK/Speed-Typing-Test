const quotes = [
            "Go to the gym in the morning.",
            "Improve yourself everyday.",
            "The true warrior brings everything at the ready.",
            "Practice makes perfect.",
            "Actions speak louder than words."
        ];

        let timerInterval;
        let startTime;
        let isTestActive = false;

function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

function startTest() {
    const quoteDisplay = document.getElementById('quote');
    const inputField = document.getElementById('input');
    const timer = document.getElementById('timer');
    const wpmDisplay = document.getElementById('wpm');

        if (isTestActive) return;

        // Reset everything
        inputField.value = '';
        wpmDisplay.textContent = 'WPM: 0';
        timer.textContent = 'Time: 0s';
            
        // Set new quote and enable input
        quoteDisplay.textContent = getRandomQuote();
        inputField.disabled = false;
        inputField.focus();

        // Start timer
        startTime = new Date().getTime();
        isTestActive = true;

        timerInterval = setInterval(() => {
                const currentTime = Math.floor((new Date().getTime() - startTime) / 1000);
                timer.textContent = `Time: ${currentTime}s`;
        }, 1000);

            // Add input event listener
            inputField.addEventListener('input', checkInput);
        }

function checkInput(e) {
    const inputField = e.target;
    const quoteDisplay = document.getElementById('quote');
    const wpmDisplay = document.getElementById('wpm');

    const currentInput = inputField.value;
    const quote = quoteDisplay.textContent;

        if (currentInput === quote) {
                endTest();
        } else {
                // Calculate WPM
                const timeElapsed = (new Date().getTime() - startTime) / 1000 / 60; // in minutes
                const wordsTyped = currentInput.trim().split(/\s+/).length;
                const wpm = Math.round(wordsTyped / timeElapsed);
                wpmDisplay.textContent = `WPM: ${wpm}`;
            }
}
function endTest() {
            clearInterval(timerInterval);
            isTestActive = false;
            document.getElementById('input').disabled = true;

            const timeElapsed = (new Date().getTime() - startTime) / 1000 / 60; // in minutes
            const quote = document.getElementById('quote').textContent;
            const words = quote.trim().split(/\s+/).length;
            const finalWpm = Math.round(words / timeElapsed);

            document.getElementById('wpm').textContent = `Final WPM: ${finalWpm}`;
        }

//Dark Mode Toggle
const toggleButton = document.getElementById('dark-mode-toggle');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});