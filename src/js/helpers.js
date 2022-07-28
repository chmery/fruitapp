import { addedToFavourites, favouriteItemsMarkup } from "./add-to-favourites";

export const removeIdFromAdded = (array, id) => array.splice(array.indexOf(id), 1);

export const clearList = (list) => (list.innerHTML = "");

export const removeItemMarkup = (array, id) => {
    const indexOfGivenId = array.findIndex((element) => element[0] === id);
    array.splice(indexOfGivenId, 1);
};

export const setIconColor = (icon, isAdded) =>
    isAdded ? (icon.style.color = "#ec7676") : (icon.style.color = "#b0b0b0");

export const setIconColorOnRender = (array, id) => {
    const isItemInArray = array.includes(id.toString());
    return isItemInArray ? `style="color: #ec7676"` : ``;
};

export const renderSpinner = (list, searchLoader) => {
    const searchLoaderClass = searchLoader ? "search-loader" : "";
    const markup = `<span class="loader ${searchLoaderClass}"></span>`;
    list.insertAdjacentHTML("afterbegin", markup);
};

export const saveFavouritesToLocalStorage = () => {
    localStorage.addedToFavourites = JSON.stringify(addedToFavourites);
    localStorage.favouriteItemsMarkup = JSON.stringify(favouriteItemsMarkup);
};
