import { fruits } from "./fruits-data";
import { addedToCalculator } from "./add-to-calculator";

const calculateBtn = document.querySelector(".calculator__btns-calculate");

const renderCalculationResults = (calories, proteins, fats, carbs) => {
    const caloriesOutput = document.querySelector(".calculator__kcal-amount");
    const proteinsOutput = document.querySelector(".calculator__proteins-amount");
    const fatsOutput = document.querySelector(".calculator__fats-amount");
    const carbsOutput = document.querySelector(".calculator__carbs-amount");

    caloriesOutput.textContent = calories;
    proteinsOutput.textContent = `${proteins}g`;
    fatsOutput.textContent = `${fats}g`;
    carbsOutput.textContent = `${carbs}g`;
};

calculateBtn.addEventListener("click", () => {
    if (!addedToCalculator) return;
    const allCalories = [];
    const allProteins = [];
    const allFats = [];
    const allCarbs = [];

    addedToCalculator.forEach((fruitId) => {
        const weightInput = document.querySelector(`input[data-fruit-id="${fruitId}"]`);
        const weight = weightInput.value;

        const calcValue = (nutrient) => {
            const macronutrient = fruits[fruitId].nutritions[nutrient];
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

    renderCalculationResults(totalCalories, totalProteins, totalFats, totalCarbs);
});
