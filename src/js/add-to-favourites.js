import { fruits } from "./fruits-data";
import * as lists from "./lists";
import { removeItemFromList } from "./remove-item";
import { removeIdFromAdded } from "./helpers";

export const addedToFavourites = [];

const listsWithHeartIcon = [
    lists.favourites,
    lists.searchResults,
    lists.allFruits,
    lists.calculatorItems,
];

const addToFavourites = (markup) => lists.favourites.insertAdjacentHTML("beforeend", markup);

export const favouritesAmount = () => lists.favourites.querySelectorAll(".item").length;

export const renderEmptyMessage = () => {
    const markup = `<p class="favourites__empty bright">You haven't added any fruits yet 🥺</p>`;
    lists.favourites.insertAdjacentHTML("afterbegin", markup);
};

const removeEmptyMessage = () => {
    const emptyMessage = document.querySelector(".favourites__empty");
    lists.favourites.removeChild(emptyMessage);
};

listsWithHeartIcon.forEach((list) => {
    list.addEventListener("click", (e) => {
        const fruitId = e.target.closest(".fa-heart")?.dataset.fruitId;
        if (!fruitId) return;

        const isFruitInFavourites = addedToFavourites.includes(fruitId);
        const favouritesItem = document.querySelector(`[data-favourites-fruit-id="${fruitId}"]`);

        if (isFruitInFavourites) {
            removeItemFromList(lists.favourites, favouritesItem);
            removeIdFromAdded(addedToFavourites, fruitId);

            if (favouritesAmount() === 0) {
                renderEmptyMessage();
            }
            return;
        }

        // Favourites class temporarily added

        const markup = `
        <div class="search__result item favourites" data-favourites-fruit-id="${fruitId}">
            <div class="search__result-image" style="background-image: url(${fruits[fruitId].image})"></div>
            <div class="search__result-text">
                <p class="search__result-name">${fruits[fruitId].name}</p>
                <p class="search__result-kcal bright">${fruits[fruitId].nutritions.calories} kcal per 100g</p>
            </div>
            <div class="search__result-icons">
                <i class="fa-solid fa-plus fa-lg" data-fruit-id="${fruitId}"></i>
                <i class="fa-solid fa-xmark fa-lg" data-fruit-id="${fruitId}"></i>
            </div>
        </div>
        `;

        addToFavourites(markup);
        addedToFavourites.push(fruitId);

        if (favouritesAmount() === 1) removeEmptyMessage();
    });
});
