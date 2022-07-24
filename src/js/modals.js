import { clearAllFruitsList } from "./all-fruits";

const allFruitsModal = document.querySelector(".all-fruits");
const openAllFruitsModal = document.querySelector(".search__show-all");
const closeAllFruitsModal = document.querySelector(".all-fruits__close");

const favouritesModal = document.querySelector(".favourites");
const openFavouritesModal = document.querySelector(".calculator__btns-favourites");
const closeFavouritesModal = document.querySelector(".favourites__close");

openAllFruitsModal.addEventListener("click", () => allFruitsModal.showModal());

closeAllFruitsModal.addEventListener("click", (e) => {
    allFruitsModal.close();
    clearAllFruitsList();
});

window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        allFruitsModal.close();
        clearAllFruitsList();
    }
});

openFavouritesModal.addEventListener("click", () => favouritesModal.showModal());
closeFavouritesModal.addEventListener("click", () => favouritesModal.close());
