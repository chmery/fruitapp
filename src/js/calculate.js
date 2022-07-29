import { fruits } from "./fruits-data";
import { addedToCalculator } from "./add-to-calculator";
import { errorModal } from "./modals";

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

    const allWeights = [];

    const checkIfWeightsCorrect = () => {
        const areWeightsCorrect = allWeights.every((weight) => weight[1] > 0 && weight[1] <= 5000);

        if (!areWeightsCorrect) {
            const incorrectWeights = allWeights.filter(
                (weight) => weight[1] <= 0 || weight[1] > 5000
            );

            incorrectWeights.forEach((weight) => {
                const fruitId = weight[0];
                const calculatorItem = document.querySelector(
                    `[data-calculator-fruit-id="${fruitId}"]`
                );

                calculatorItem.style.border = "3px solid var(--dark-pink)";
            });

            errorModal.showModal();
            return false;
        }

        if (areWeightsCorrect) return true;
    };

    const setDefaultItemBorder = (fruitId) => {
        const calculatorItem = document.querySelector(`[data-calculator-fruit-id="${fruitId}"]`);
        calculatorItem.style.border = "";
    };

    addedToCalculator.forEach((fruitId) => {
        const weightInput = document.querySelector(`input[data-fruit-id="${fruitId}"]`);
        const weight = weightInput.value;

        allWeights.push([fruitId, weight]);

        setDefaultItemBorder(fruitId);

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

    if (!checkIfWeightsCorrect()) return;

    const calcTotalValue = (array) => Number(array.reduce((sum, item) => sum + item, 0)).toFixed(1);

    const totalCalories = calcTotalValue(allCalories);
    const totalProteins = calcTotalValue(allProteins);
    const totalFats = calcTotalValue(allFats);
    const totalCarbs = calcTotalValue(allCarbs);

    renderCalculationResults(totalCalories, totalProteins, totalFats, totalCarbs);
});
