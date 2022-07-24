import * as lists from "./lists";
import { removeIdFromAdded, removeItemMarkup } from "./helpers";
import {
    addedToCalculator,
    calculatorItemsMarkup,
    renderCalculatorItems as updateCalculatorHeartIcons,
} from "./add-to-calculator";
import {
    renderEmptyMessage,
    favouritesAmount,
    addedToFavourites,
    favouriteItemsMarkup,
} from "./add-to-favourites";

const listsWithRemoveIcon = [lists.favourites, lists.calculatorItems];

export const removeItemFromList = (itemContainer, itemToRemove) =>
    itemContainer.removeChild(itemToRemove);

listsWithRemoveIcon.forEach((list) => {
    list.addEventListener("click", (e) => {
        const removeIcon = e.target.closest(".fa-xmark");
        if (!removeIcon) return;

        const itemToRemove = removeIcon.closest(".item");
        const itemContainer = e.target.closest("[class$='__list']");

        const isCalculatorItemBeingRemoved = itemToRemove.classList.contains("calculator__item");

        const isFavouriteBeingRemoved = itemToRemove.classList.contains("favourites");
        const isLastFavouriteBeingRemoved = favouritesAmount() === 1 ? true : false;

        if (isCalculatorItemBeingRemoved) {
            const fruitId = itemToRemove.dataset.calculatorFruitId;
            removeIdFromAdded(addedToCalculator, fruitId);
            removeItemMarkup(calculatorItemsMarkup, fruitId);
        }

        if (isFavouriteBeingRemoved) {
            const fruitId = itemToRemove.dataset.favouritesFruitId;
            removeIdFromAdded(addedToFavourites, fruitId);
            removeItemMarkup(favouriteItemsMarkup, fruitId);
            updateCalculatorHeartIcons();
        }

        if (isLastFavouriteBeingRemoved) {
            renderEmptyMessage();
        }

        removeItemFromList(itemContainer, itemToRemove);
    });
});
