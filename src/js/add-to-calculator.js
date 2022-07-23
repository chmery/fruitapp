import { fruits } from "./fruits-data";
import * as lists from "./lists";
import { removeItemFromList } from "./remove-item";

export const addedToCalculator = [];
export const removeIdFromAdded = (id) => addedToCalculator.splice(addedToCalculator.indexOf(id), 1);

const listsWithPlusIcon = [lists.favourites, lists.searchResults, lists.allFruits];

const renderCalculatorItem = (markup) =>
    lists.calculatorItems.insertAdjacentHTML("beforeend", markup);

listsWithPlusIcon.forEach((list) => {
    list.addEventListener("click", (e) => {
        const fruitId = e.target.closest(".fa-plus")?.dataset.fruitId;
        if (!fruitId) return;

        const isFruitAdded = addedToCalculator.includes(fruitId);
        const calculatorItem = document.querySelector(`[data-calculator-fruit-id="${fruitId}"]`);

        if (isFruitAdded) {
            removeItemFromList(lists.calculatorItems, calculatorItem);
            removeIdFromAdded(fruitId);
            return;
        }

        const markup = `
        <div class="calculator__item item" data-calculator-fruit-id="${fruitId}">
            <div class="calculator__item-image" style="background-image: url(${fruits[fruitId].image})"></div>
            <div class="calculator__item-text">
                <p class="calculator__item-name">${fruits[fruitId].name}</p>
                <p class="calculator__item-kcal bright">${fruits[fruitId].nutritions.calories} kcal per 100g</p>
                <p class="calculator__item-macronutrients bright">
                    P: ${fruits[fruitId].nutritions.protein}g | F: ${fruits[fruitId].nutritions.fat}g | C: ${fruits[fruitId].nutritions.carbohydrates}g
                </p>
            </div>
            <div class="calculator__item-action">
                <div class="calculator__item-icons">
                    <i class="fa-regular fa-heart fa-lg" data-fruit-id="${fruitId}"></i>
                    <i class="fa-solid fa-xmark fa-lg" data-fruit-id="${fruitId}"></i>
                </div>
                <input
                    class="calculator-item-input"
                    type="number"
                    placeholder="g"
                    data-fruit-id="${fruitId}"
                />
            </div>
        </div>
        `;

        renderCalculatorItem(markup);
        addedToCalculator.push(fruitId);
    });
});
