import { renderFavouriteItems } from "./add-to-favourites";
import { clearList } from "./helpers";
import * as lists from "./lists";

const allFruitsModal = document.querySelector(".all-fruits");
const openAllFruitsModal = document.querySelector(".search__show-all");
const closeAllFruitsModal = document.querySelector(".all-fruits__close");

const favouritesModal = document.querySelector(".favourites");
const openFavouritesModal = document.querySelector(".calculator__btns-favourites");
const closeFavouritesModal = document.querySelector(".favourites__close");

openAllFruitsModal.addEventListener("click", () => allFruitsModal.showModal());

closeAllFruitsModal.addEventListener("click", () => {
    allFruitsModal.close();
    clearList(lists.allFruits);
});

openFavouritesModal.addEventListener("click", () => {
    favouritesModal.showModal();
    clearList(lists.favourites);
    renderFavouriteItems();
});

closeFavouritesModal.addEventListener("click", () => {
    favouritesModal.close();
    clearList(lists.favourites);
});

window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        favouritesModal.close();
        allFruitsModal.close();
        clearList(lists.favourites);
        clearList(lists.allFruits);
    }
});

[allFruitsModal, favouritesModal].forEach((modal) =>
    modal.addEventListener("click", (e) => {
        const modalPos = modal.getBoundingClientRect();

        const horizontalPos = e.clientX;
        const verticalPos = e.clientY;

        if (
            modalPos.left > horizontalPos ||
            modalPos.right < horizontalPos ||
            modalPos.top > verticalPos ||
            modalPos.bottom < verticalPos
        ) {
            modal.close();
            modal === allFruitsModal ? clearList(lists.allFruits) : clearList(lists.favourites);
        }
    })
);
