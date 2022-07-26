export const getSortedFruits = (arrayBeingSorted, macronutrient, order) => {
    const sortedFruits = [...arrayBeingSorted].sort((a, b) => {
        return order === "ascending"
            ? a[1][macronutrient] - b[1][macronutrient]
            : b[1][macronutrient] - a[1][macronutrient];
    });

    return sortedFruits;
};

export const renderSortedFruits = (list, sortedFruits) => {
    sortedFruits.forEach((fruit) => {
        const markup = fruit[0];
        list.insertAdjacentHTML("beforeend", markup);
    });
};
