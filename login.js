function disableAllLinksExceptModal() {
    const allLinks = document.querySelectorAll("a");

    allLinks.forEach((link) => {
        link.style.pointerEvents = "none";
    });

    const modalLinks = modal.querySelectorAll("a");
    modalLinks.forEach((link) => {
        link.style.pointerEvents = "auto";
    });
}

function enableAllLinks() {
    const allLinks = document.querySelectorAll("a");

    allLinks.forEach((link) => {
        link.style.pointerEvents = "auto";
    });
}

const showModalBtn = document.getElementById("showModalBtn");
const modal__login = document.getElementById("modal__login");
const closeModalBtn = document.getElementById("closeModalBtn");

showModalBtn.addEventListener("click", () => {
    modal__login.style.display = "block";

    disableAllLinksExceptModal();
});

closeModalBtn.addEventListener("click", () => {
    modal__login.style.display = "none";

    enableAllLinks();
});

window.addEventListener("click", (event) => {
    if (event.target == modal__login) {
        modal__login.style.display = "none";

        enableAllLinks();
    }
});
