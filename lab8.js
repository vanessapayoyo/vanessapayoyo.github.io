// Resize text
function resizeText(size) {
    if (size === 'small') {
        document.body.style.fontSize = '0.8em';
    } else if (size === 'large') {
        document.body.style.fontSize = '1.5em';
    }
}

// Toggle colorblind mode
// Track the current text size state
let currentTextSize = 'normal';

// Resize text and toggle back to normal
function resizeText(size) {
    if (size === 'small') {
        if (currentTextSize === 'small') {
            document.body.style.fontSize = '1em'; // Reset to normal
            currentTextSize = 'normal';
        } else {
            document.body.style.fontSize = '0.8em'; // Small text size
            currentTextSize = 'small';
        }
    } else if (size === 'large') {
        if (currentTextSize === 'large') {
            document.body.style.fontSize = '1em'; // Reset to normal
            currentTextSize = 'normal';
        } else {
            document.body.style.fontSize = '1.5em'; // Large text size
            currentTextSize = 'large';
        }
    }
}

// Track the current color mode state
let isColorBlindMode = false;

// Toggle colorblind mode and revert back to normal
function toggleColorBlindMode() {
    if (isColorBlindMode) {
        // Revert to normal colors
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        isColorBlindMode = false;
    } else {
        // Change to colorblind mode
        document.body.style.backgroundColor = '#F5F5DC'; // Beige background
        document.body.style.color = '#000080'; // Navy blue text
        isColorBlindMode = true;
    }
}

// Show description
function showDescription(id) {
    const description = document.getElementById(id);
    description.style.display = description.style.display === 'block' ? 'none' : 'block';
}
