// Function to toggle dark mode and save preference
function toggleDarkMode() {
    // Toggle dark mode class on the body
    let isDarkMode = document.body.classList.toggle('dark-mode');
    
    // Save the preference to localStorage
    localStorage.setItem('darkMode', isDarkMode);
}

// Function to apply the saved dark mode preference on page load
function applySavedModePreference() {
    // Check if a dark mode preference is saved in localStorage
    let darkMode = localStorage.getItem('darkMode');

    if (darkMode === null) {
        // If no preference is saved, set dark mode as the default
        document.body.classList.add('dark-mode');
        document.getElementById('flexSwitchCheckChecked').checked = true;
        localStorage.setItem('darkMode', true);
    } else {
        // Apply the saved preference
        darkMode = darkMode === 'true';
        if (darkMode) {
            document.body.classList.add('dark-mode');
            document.getElementById('flexSwitchCheckChecked').checked = true;
        } else {
            document.body.classList.remove('dark-mode');
            document.getElementById('flexSwitchCheckChecked').checked = false;
        }
    }
}

// Apply the saved preference on page load
window.onload = applySavedModePreference;
