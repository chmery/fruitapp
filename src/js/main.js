const allFruitsModal = document.querySelector(".all-fruits");
const openAllFruitsModal = document.querySelector(".search__show-all");
const closeAllFruitsModal = document.querySelector(".all-fruits__confirm");

openAllFruitsModal.addEventListener("click", () => {
    allFruitsModal.showModal();
});

closeAllFruitsModal.addEventListener("click", () => {
    allFruitsModal.close();
});
