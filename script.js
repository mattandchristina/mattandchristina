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

// Detecting scroll and triggering the visibility transition
window.addEventListener('scroll', function () {
    let panels = document.querySelectorAll('.panel');
    let scrollPosition = window.scrollY + window.innerHeight;

    panels.forEach(function (panel) {
        if (scrollPosition >= panel.offsetTop) {
            panel.classList.add('visible');
        } else {
            panel.classList.remove('visible');
        }
    });
});
