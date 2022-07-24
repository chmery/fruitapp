export const removeIdFromAdded = (array, id) => array.splice(array.indexOf(id), 1);

export const clearList = (list) => (list.innerHTML = "");

export const removeItemMarkup = (array, id) => {
    const indexOfGivenId = array.findIndex((element) => element[0] === id);
    array.splice(indexOfGivenId, 1);
};

export const setIconColor = (icon, hex) => (icon.style.color = `${hex}`);

export const setIconColorOnRender = (array, id) => {
    const isItemInArray = array.includes(id.toString());
    return isItemInArray ? `style="color: #ec7676"` : ``;
};
