import * as list from "./lists";
import { removeIdFromAdded } from "./add-to-calculator";

const listsWithRemoveIcon = [list.favourites, list.calculatorItems];

export const removeItemFromList = (itemContainer, itemToRemove) =>
    itemContainer.removeChild(itemToRemove);

listsWithRemoveIcon.forEach((list) => {
    list.addEventListener("click", (e) => {
        const itemRemoveIcon = e.target.closest(".fa-xmark");
        if (!itemRemoveIcon) return;

        const itemToRemove = itemRemoveIcon.closest(".item");
        const itemInCalculator = itemToRemove.className === "calculator__item item" ? true : false;
        const itemContainer = e.target.closest("[class$='__list']");

        if (itemInCalculator) {
            const fruitId = itemToRemove.dataset.calculatorFruitId;
            removeIdFromAdded(fruitId);
        }

        removeItemFromList(itemContainer, itemToRemove);
    });
});
