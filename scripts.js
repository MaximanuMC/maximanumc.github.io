document.addEventListener("DOMContentLoaded", function() {
    const mobileMenu = document.getElementById("mobile-menu");
    const navList = document.querySelector(".nav-list");
    const modal = document.getElementById("modal");
    const closeButton = document.querySelector(".close-button");
    const animatedButton = document.querySelector(".animated-button");

    mobileMenu.addEventListener("click", () => {
        navList.classList.toggle("active");
    });

    animatedButton.addEventListener("click", () => {
        modal.style.display = "block";
    });

    closeButton.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});
