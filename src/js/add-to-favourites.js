import { fruits, isDataAssigned } from "./fruits-data";
import * as lists from "./lists";
import {
    removeIdFromAdded,
    removeItemMarkup,
    setIconColor,
    setIconColorOnRender,
    saveFavouritesToLocalStorage,
} from "./helpers";
import {
    addedToCalculator,
    renderCalculatorItems as updateCalculatorHeartIcons,
} from "./add-to-calculator";
import emptyIcon from "url:../icons/empty.png";

const listsWithHeartIcon = [
    lists.favourites,
    lists.searchResults,
    lists.allFruits,
    lists.calculatorItems,
];

export const addedToFavourites = JSON.parse(localStorage.getItem("addedToFavourites")) || [];
export const favouriteItemsMarkup = JSON.parse(localStorage.getItem("favouriteItemsMarkup")) || [];

const generateMarkup = (fruitId) => {
    const markup = `
    <div class="search__result item favourites" data-favourites-fruit-id="${fruitId}">
    <div class="search__result-image" style="background-image: url(${fruits[fruitId].image})"></div>
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

    return markup;
};

const updatePlusIconsColor = () => {
    favouriteItemsMarkup.forEach((item) => {
        const fruitId = item[0];
        const markup = generateMarkup(fruitId);

        item[1] = markup;
    });
};

export const renderFavouriteItems = () => {
    if (addedToFavourites.length === 0 || !isDataAssigned()) {
        renderEmptyMessage();
        return;
    }

    updatePlusIconsColor();

    favouriteItemsMarkup.forEach((item) => {
        const markup = item[1];
        lists.favourites.insertAdjacentHTML("beforeend", markup);
    });
};

export const favouritesAmount = () => lists.favourites.querySelectorAll(".item").length;

export const renderEmptyMessage = () => {
    const markup = `
    <div class="favourites__empty">
        <img
            class="favourites__empty-image"
            src="${emptyIcon}"
            alt="sad apple"
        />
        <p class="favourites__empty-message bright">
            You haven't added any fruits yet 🥺
        </p>
    </div>
    `;
    lists.favourites.insertAdjacentHTML("afterbegin", markup);
};

listsWithHeartIcon.forEach((list) => {
    list.addEventListener("click", (e) => {
        const heartIcon = e.target.closest(".fa-heart");
        if (!heartIcon) return;

        const fruitId = heartIcon.dataset.fruitId;
        const sortingData = fruits[fruitId].nutritions;
        const isInFavourites = addedToFavourites.includes(fruitId);

        const markup = generateMarkup(fruitId);

        if (isInFavourites) {
            removeItemMarkup(favouriteItemsMarkup, fruitId);
            removeIdFromAdded(addedToFavourites, fruitId);
            setIconColor(heartIcon, false);
            updateCalculatorHeartIcons();
            saveFavouritesToLocalStorage();

            if (favouritesAmount() === 0) {
                renderEmptyMessage();
            }
            return;
        }

        favouriteItemsMarkup.push([fruitId, markup, sortingData]);
        addedToFavourites.push(fruitId);

        saveFavouritesToLocalStorage();
        setIconColor(heartIcon, true);
        updateCalculatorHeartIcons();
    });
});
