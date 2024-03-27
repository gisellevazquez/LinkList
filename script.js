// Define an array to store drawn trails
const drawnTrails = [];

// Define an array of custom colors
const customColors = ['#cdb4db', '#ffc8dd', '#ffafcc', '#bde0fe', '#a2d2ff'];

document.addEventListener('mousemove', function(e) {
    // Create a new trail object and add it to the drawn trails array
    const trail = {
        startX: e.clientX,
        startY: e.clientY,
        elements: []
    };
    drawnTrails.push(trail);

    // Draw trail
    const colorTrail = document.createElement('div');
    colorTrail.classList.add('color-trail');
    colorTrail.style.backgroundColor = customColors[Math.floor(Math.random() * customColors.length)];
    colorTrail.style.left = e.clientX - 5 + 'px';
    colorTrail.style.top = e.clientY - 5 + 'px';
    document.body.appendChild(colorTrail);
    
    // Add the element to the current trail's elements array
    trail.elements.push(colorTrail);
});

// Function to update the position of drawn trails
function updateTrailPositions() {
    drawnTrails.forEach(trail => {
        trail.elements.forEach(element => {
            // Update the position of each trail element
            element.style.left = parseFloat(element.style.left) + 1 + 'px'; // Adjust the speed as needed
        });
    });
}

// Update the position of drawn trails continuously
setInterval(updateTrailPositions, 50); // Adjust the interval for smoother or faster movement
