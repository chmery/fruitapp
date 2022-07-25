import { fruits } from "./fruits-data";

const getSortedFruits = (macronutrient, order) => {
    const sortedFruits = [...fruits].sort((a, b) => {
        return order === "ascending"
            ? a.nutritions[macronutrient] - b.nutritions[macronutrient]
            : b.nutritions[macronutrient] - a.nutritions[macronutrient];
    });

    return sortedFruits;
};
