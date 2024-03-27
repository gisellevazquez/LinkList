// darkMode.js

// Select the dark mode toggle button
const darkModeToggle = document.getElementById('darkModeToggle');

// Add event listener to toggle dark mode
darkModeToggle.addEventListener('click', function() {
    // Toggle dark mode class on the body
    document.body.classList.toggle('dark-mode');
    
    // Change button text and style based on dark mode status
    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = 'Eyes well rested 😌';
        darkModeToggle.style.backgroundColor = '#0b090a'; // Change to dark mode background color
        darkModeToggle.style.color = '#ffffff'; // Change to white text color
    } else {
        darkModeToggle.textContent = 'Ohhh my eyes! 😫';
        darkModeToggle.style.backgroundColor = '#ecf8f8'; // Change to light mode background color
        darkModeToggle.style.color = '#000000'; // Change to black text color
    }
});
