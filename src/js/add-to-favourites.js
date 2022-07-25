import { fruits } from "./fruits-data";
import * as lists from "./lists";
import { removeIdFromAdded, removeItemMarkup, setIconColor, setIconColorOnRender } from "./helpers";
import {
    addedToCalculator,
    renderCalculatorItems as updateCalculatorHeartIcons,
} from "./add-to-calculator";

const listsWithHeartIcon = [
    lists.favourites,
    lists.searchResults,
    lists.allFruits,
    lists.calculatorItems,
];

export const addedToFavourites = [];
export const favouriteItemsMarkup = [];

const updatePlusIcons = () => {
    favouriteItemsMarkup.forEach((item) => {
        const fruitId = item[0];

        const newMarkup = `
        <div class="search__result item favourites" data-favourites-fruit-id="${fruitId}">
            <div class="search__result-image" style="background-image: url(${
                fruits[fruitId].image
            })"></div>
            <div class="search__result-text">
                <p class="search__result-name">${fruits[fruitId].name}</p>
                <p class="search__result-kcal bright">${
                    fruits[fruitId].nutritions.calories
                } kcal per 100g</p>
            </div>
            <div class="search__result-icons">
                <i class="fa-solid fa-plus fa-lg" data-fruit-id="${fruitId}" ${setIconColorOnRender(
            addedToCalculator,
            fruitId
        )}></i>
                <i class="fa-solid fa-xmark fa-lg" data-fruit-id="${fruitId}"></i>
            </div>
        </div>
        `;

        item[1] = newMarkup;
    });
};

export const renderFavouriteItems = () => {
    if (addedToFavourites.length === 0) {
        renderEmptyMessage();
        return;
    }

    updatePlusIcons();

    favouriteItemsMarkup.forEach((item) => {
        const markup = item[1];
        lists.favourites.insertAdjacentHTML("beforeend", markup);
    });
};

export const favouritesAmount = () => lists.favourites.querySelectorAll(".item").length;

export const renderEmptyMessage = () => {
    const markup = `<p class="favourites__empty bright">You haven't added any fruits yet 🥺</p>`;
    lists.favourites.insertAdjacentHTML("afterbegin", markup);
};

listsWithHeartIcon.forEach((list) => {
    list.addEventListener("click", (e) => {
        const heartIcon = e.target.closest(".fa-heart");
        if (!heartIcon) return;

        const fruitId = heartIcon.dataset.fruitId;
        const isInFavourites = addedToFavourites.includes(fruitId);

        if (isInFavourites) {
            removeItemMarkup(favouriteItemsMarkup, fruitId);
            removeIdFromAdded(addedToFavourites, fruitId);
            setIconColor(heartIcon, false);
            updateCalculatorHeartIcons();

            if (favouritesAmount() === 0) {
                renderEmptyMessage();
            }
            return;
        }

        // Favourites class temporarily added
        const markup = `
        <div class="search__result item favourites" data-favourites-fruit-id="${fruitId}">
            <div class="search__result-image" style="background-image: url(${
                fruits[fruitId].image
            })"></div>
            <div class="search__result-text">
                <p class="search__result-name">${fruits[fruitId].name}</p>
                <p class="search__result-kcal bright">${
                    fruits[fruitId].nutritions.calories
                } kcal per 100g</p>
            </div>
            <div class="search__result-icons">
                <i class="fa-solid fa-plus fa-lg" data-fruit-id="${fruitId}" ${setIconColorOnRender(
            addedToCalculator,
            fruitId
        )}></i>
                <i class="fa-solid fa-xmark fa-lg" data-fruit-id="${fruitId}"></i>
            </div>
        </div>
        `;

        setIconColor(heartIcon, true);
        favouriteItemsMarkup.push([fruitId, markup]);
        addedToFavourites.push(fruitId);
        updateCalculatorHeartIcons();
    });
});
