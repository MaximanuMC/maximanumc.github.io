document.addEventListener("DOMContentLoaded", function() {
    const mobileMenu = document.getElementById("mobile-menu");
    const navList = document.querySelector(".nav-list");
    const modal = document.getElementById("modal");
    const closeButton = document.querySelector(".close-button");
    const openModalButton = document.getElementById("open-modal");

    // Menü öffnen und schließen
    mobileMenu.addEventListener("click", () => {
        navList.classList.toggle("active");
        mobileMenu.classList.toggle("active"); // Optionale Animation für das Menü
    });

    // Modal öffnen
    openModalButton.addEventListener("click", () => {
        modal.style.display = "block";
    });

    // Modal schließen
    closeButton.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Schließen, wenn außerhalb des Modals geklickt wird
    window.addEventListener("click", (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});
