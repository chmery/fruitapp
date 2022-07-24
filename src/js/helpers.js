export const removeIdFromAdded = (array, id) => array.splice(array.indexOf(id), 1);

export const clearList = (list) => (list.innerHTML = "");
