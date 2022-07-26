export const getSortedFruits = (arrayBeingSorted, macronutrient, order) => {
    const sortedFruits = [...arrayBeingSorted].sort((a, b) => {
        return order === "ascending"
            ? a[2][macronutrient] - b[2][macronutrient]
            : b[2][macronutrient] - a[2][macronutrient];
    });

    return sortedFruits;
};

export const renderSortedFruits = (list, sortedFruits) => {
    sortedFruits.forEach((fruit) => {
        const markup = fruit[1];
        list.insertAdjacentHTML("beforeend", markup);
    });
};
