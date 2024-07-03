document.getElementById('check-btn').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value.trim();
    const resultsDiv = document.getElementById('results-div');
    const validPatterns = [
        /^1?\s?\d{3}-\d{3}-\d{4}$/,
        /^1?\s?\(\d{3}\)\s?\d{3}-\d{4}$/,
        /^1?\s?\d{10}$/,
        /^1?\s?\(\d{3}\)\d{3}-\d{4}$/,
        /^1?\s?\d{3}\s\d{3}\s\d{4}$/
    ];

    if (userInput === '') {
        alert('Please provide a phone number');
        return;
    }

    let isValid = validPatterns.some(pattern => pattern.test(userInput));
    resultsDiv.textContent = isValid ? `Valid US number: ${userInput}` : `Invalid US number: ${userInput}`;
    resultsDiv.style.color = isValid ? 'green' : 'red';
});

document.getElementById('clear-btn').addEventListener('click', function() {
    document.getElementById('user-input').value = '';
    document.getElementById('results-div').textContent = '';
});