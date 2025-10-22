document.getElementById('generateBtn').addEventListener('click', async () => {
    const promptInput = document.getElementById('prompt');
    const resultDiv = document.getElementById('result');
    const prompt = promptInput.value.trim();

    if (!prompt) {
        alert("Please type something!");
        return;
    }

    // Show loading state
    resultDiv.innerHTML = `<p>Generating... ⏳</p>`;

    try {
        const response = await fetch("http://127.0.0.1:5000/generate_emoji", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ prompt })
        });

        const data = await response.json();

        // Display message + emoji
        resultDiv.innerHTML = `
            <p>${data.message}</p>
            <h2 class="emoji">${data.emoji}</h2>
        `;

        // Clear input
        promptInput.value = "";

    } catch (error) {
        resultDiv.innerHTML = `<p>Something went wrong! ❌</p>`;
        console.error(error);
    }
});
