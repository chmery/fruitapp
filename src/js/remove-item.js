import * as lists from "./lists";
import { removeIdFromAdded } from "./add-to-calculator";
import { renderEmptyMessage } from "./add-to-favourites";
import { favouritesAmount } from "./add-to-favourites";
import { removeIdFromFavouritesAdded } from "./add-to-favourites";

const listsWithRemoveIcon = [lists.favourites, lists.calculatorItems];

export const removeItemFromList = (itemContainer, itemToRemove) =>
    itemContainer.removeChild(itemToRemove);

listsWithRemoveIcon.forEach((list) => {
    list.addEventListener("click", (e) => {
        const itemRemoveIcon = e.target.closest(".fa-xmark");
        if (!itemRemoveIcon) return;

        const itemToRemove = itemRemoveIcon.closest(".item");
        const itemContainer = e.target.closest("[class$='__list']");
        const itemInCalculator = itemToRemove.className === "calculator__item item" ? true : false;

        if (itemInCalculator) {
            const fruitId = itemToRemove.dataset.calculatorFruitId;
            removeIdFromAdded(fruitId);
        }

        const isFavouriteBeingRemoved = itemToRemove.classList.contains("favourites");
        const isLastFavouriteBeingRemoved = favouritesAmount() === 1 ? true : false;

        if (isFavouriteBeingRemoved) {
            const fruitId = itemToRemove.dataset.favouritesFruitId;
            removeIdFromFavouritesAdded(fruitId);
        }

        if (isLastFavouriteBeingRemoved) {
            renderEmptyMessage();
        }

        removeItemFromList(itemContainer, itemToRemove);
    });
});
