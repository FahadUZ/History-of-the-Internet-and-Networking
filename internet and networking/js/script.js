document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');

    // Set initial styles or behaviors if needed
    // For example, you could highlight the first link or set a default state
    navLinks[0].classList.add('active'); // Example of adding an 'active' class to the first link

    // Add click event listeners to all links if needed
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove 'active' class from all links
            navLinks.forEach(link => link.classList.remove('active'));
            // Add 'active' class to the clicked link
            this.classList.add('active');
        });
    });
});