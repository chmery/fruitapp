import * as list from "./lists";

const listsWithRemoveIcon = [list.favourites, list.calculatorItems];

export const removeItemFromList = (itemContainer, itemToRemove) =>
    itemContainer.removeChild(itemToRemove);

listsWithRemoveIcon.forEach((list) => {
    list.addEventListener("click", (e) => {
        const itemRemoveIcon = e.target.closest(".fa-xmark");
        if (!itemRemoveIcon) return;

        const itemToRemove = itemRemoveIcon.closest(".item");
        const itemContainer = e.target.closest("[class$='__list']");

        removeItemFromList(itemContainer, itemToRemove);
    });
});
