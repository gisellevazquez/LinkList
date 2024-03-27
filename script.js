// Define an array of custom colors
const customColors = ['#cdb4db', '#ffc8dd', '#ffafcc', '#bde0fe', '#a2d2ff'];

document.addEventListener('mousemove', function(e) {
    // Create a new colored element
    const colorTrail = document.createElement('div');
    colorTrail.classList.add('color-trail');
    
    // Set a custom color for the element
    colorTrail.style.backgroundColor = customColors[Math.floor(Math.random() * customColors.length)];
    
    // Set the position of the element to match the mouse coordinates
    colorTrail.style.left = e.clientX - 5 + 'px'; // Adjust for element width
    colorTrail.style.top = e.clientY - 5 + 'px'; // Adjust for element height
    
    // Append the element to the document body
    document.body.appendChild(colorTrail);
    
    // Remove the element after a short delay
    setTimeout(function() {
      colorTrail.remove();
    }, 1000); // Adjust duration as needed
});

