const modal = document.querySelector(".all-fruits");
const openModal = document.querySelector(".calculator__btns-calculate");
const closeModal = document.querySelector(".all-fruits__confirm");

openModal.addEventListener("click", () => {
    modal.show();
});

closeModal.addEventListener("click", () => {
    modal.close();
});
