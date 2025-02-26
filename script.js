document.addEventListener("DOMContentLoaded", function () {
    const screens = document.querySelectorAll(".screen");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = "translateY(0)";
                }
            });
        },
        { threshold: 0.3 }
    );

    screens.forEach((screen) => observer.observe(screen));
});
