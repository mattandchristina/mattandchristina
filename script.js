document.addEventListener("DOMContentLoaded", function() {
    const panels = document.querySelectorAll(".panel");

    document.addEventListener("scroll", () => {
        let scrollPosition = window.scrollY + window.innerHeight / 2;

        panels.forEach(panel => {
            if (panel.offsetTop <= scrollPosition && panel.offsetTop + panel.offsetHeight > scrollPosition) {
                panel.classList.add("active");
            } else {
                panel.classList.remove("active");
            }
        });
    });
});
