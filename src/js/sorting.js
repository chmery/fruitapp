export const getSortedFruits = (arrayBeingSorted, macronutrient, order) => {
    const sortedFruits = [...arrayBeingSorted].sort((a, b) => {
        return order === "ascending"
            ? a[1][macronutrient] - b[1][macronutrient]
            : b[1][macronutrient] - a[1][macronutrient];
    });

    return sortedFruits;
};
