import { renderFavouriteItems } from "./add-to-favourites";
import { renderEmptyMessage } from "./add-to-favourites";
import { favouritesAmount } from "./add-to-favourites";
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

window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        allFruitsModal.close();
        clearList(lists.allFruits);
    }
});

openFavouritesModal.addEventListener("click", () => {
    const favouriteList = document.querySelector(".favourites__list");

    favouritesModal.showModal();
    renderFavouriteItems();

    if (favouritesAmount() < 1 && favouriteList.innerHTML === "") renderEmptyMessage();
});

closeFavouritesModal.addEventListener("click", () => {
    favouritesModal.close();
    clearList(lists.favourites);
});

window.addEventListener("keydown", () => {
    if (e.key === "Escape") {
        favouritesModal.close();
        clearList(lists.favourites);
    }
});
