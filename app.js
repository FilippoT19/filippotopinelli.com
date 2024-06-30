function toggleDarkMode() {
    // Check if dark mode is currently enabled
    let isDarkMode = document.body.classList.toggle('dark-mode');
    
    // Save the preference to localStorage
    localStorage.setItem('darkMode', isDarkMode);
}

// Function to apply the saved dark mode preference on page load
function applySavedModePreference() {
    let darkMode = localStorage.getItem('darkMode') === 'true';
    
    if (darkMode) {
        document.body.classList.add('dark-mode');
        document.getElementById('flexSwitchCheckChecked').checked = true;
    } else {
        document.body.classList.remove('dark-mode');
        document.getElementById('flexSwitchCheckChecked').checked = false;
    }
}

// Apply the saved preference on page load
window.onload = applySavedModePreference;
