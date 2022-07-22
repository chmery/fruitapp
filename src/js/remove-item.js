const favouritesList = document.querySelector(".favourites__list");
const calculatorItemsList = document.querySelector(".calculator__list");

const allLists = [favouritesList, calculatorItemsList];

const removeItemFromList = (itemContainer, itemToRemove) => itemContainer.removeChild(itemToRemove);

allLists.forEach((list) => {
    list.addEventListener("click", (e) => {
        const itemToRemove = e.target.closest(".fa-xmark").closest(".item");
        const itemContainer = e.target.closest("[class$='__list']");

        if (!itemToRemove || !itemContainer) return;

        removeItemFromList(itemContainer, itemToRemove);
    });
});
