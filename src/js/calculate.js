import { fruits } from "./fruits-data";
import { addedToCalculator } from "./add-to-calculator";

const calculateBtn = document.querySelector(".calculator__btns-calculate");

calculateBtn.addEventListener("click", () => {
    if (!addedToCalculator) return;
    const allCalories = [];
    const allProteins = [];
    const allFats = [];
    const allCarbs = [];

    addedToCalculator.forEach((fruitId) => {
        const weightInput = document.querySelector(`input[data-fruit-id="${fruitId}"]`);
        const weight = weightInput.value;

        const { nutritions } = fruits[fruitId];

        const calcValue = (nutrient) => {
            const macronutrient = nutritions[nutrient];
            const macronutrientValue = macronutrient * (weight / 100);
            return macronutrientValue;
        };

        allCalories.push(calcValue("calories"));
        allProteins.push(calcValue("protein"));
        allFats.push(calcValue("fat"));
        allCarbs.push(calcValue("carbohydrates"));
    });

    const calcTotalValue = (array) => Number(array.reduce((sum, item) => sum + item, 0)).toFixed(1);

    const totalCalories = calcTotalValue(allCalories);
    const totalProteins = calcTotalValue(allProteins);
    const totalFats = calcTotalValue(allFats);
    const totalCarbs = calcTotalValue(allCarbs);
});
