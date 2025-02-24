// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    const panels = document.querySelectorAll('.panel');

    // Function to check if a panel is in view
    function checkPanels() {
        const scrollPosition = window.scrollY + window.innerHeight;
        panels.forEach(panel => {
            if (scrollPosition > panel.offsetTop + panel.offsetHeight / 4) {
                panel.classList.add('visible');
            } else {
                panel.classList.remove('visible');
            }
        });
    }

    // Listen for scroll events
    window.addEventListener('scroll', checkPanels);
    // Run on initial page load in case some panels are already visible
    checkPanels();
});
