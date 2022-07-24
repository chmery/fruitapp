import { fruits } from "./fruits-data";
import * as lists from "./lists";
import { removeItemFromList } from "./remove-item";
import { removeIdFromAdded, removeItemMarkup, clearList, setIconColorOnRender } from "./helpers";
import { addedToFavourites } from "./add-to-favourites";

const listsWithPlusIcon = [lists.favourites, lists.searchResults, lists.allFruits];

export const addedToCalculator = [];
export const calculatorItemsMarkup = [];

const updateHeartIcons = () => {
    calculatorItemsMarkup.forEach((item) => {
        const fruitId = item[0];

        const newMarkup = `
        <div class="calculator__item item" data-calculator-fruit-id="${fruitId}">
            <div class="calculator__item-image" style="background-image: url(${
                fruits[fruitId].image
            })"></div>
            <div class="calculator__item-text">
                <p class="calculator__item-name">${fruits[fruitId].name}</p>
                <p class="calculator__item-kcal bright">${
                    fruits[fruitId].nutritions.calories
                } kcal per 100g</p>
                <p class="calculator__item-macronutrients bright">
                    P: ${fruits[fruitId].nutritions.protein}g | F: ${
            fruits[fruitId].nutritions.fat
        }g | C: ${fruits[fruitId].nutritions.carbohydrates}g
                </p>
            </div>
            <div class="calculator__item-action">
                <div class="calculator__item-icons">
                    <i class="fa-regular fa-heart fa-lg" data-fruit-id="${fruitId}" ${setIconColorOnRender(
            addedToFavourites,
            fruitId
        )}></i>
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

        item[1] = newMarkup;
    });
};

export const renderCalculatorItems = () => {
    clearList(lists.calculatorItems);
    updateHeartIcons();

    calculatorItemsMarkup.forEach((item) => {
        const markup = item[1];
        lists.calculatorItems.insertAdjacentHTML("beforeend", markup);
    });
};

listsWithPlusIcon.forEach((list) => {
    list.addEventListener("click", (e) => {
        const plusIcon = e.target.closest(".fa-plus");
        if (!plusIcon) return;

        const fruitId = plusIcon.dataset.fruitId;
        const isInCalculator = addedToCalculator.includes(fruitId);
        const calculatorItem = document.querySelector(`[data-calculator-fruit-id="${fruitId}"]`);

        if (isInCalculator) {
            removeItemMarkup(calculatorItemsMarkup, fruitId);
            removeItemFromList(lists.calculatorItems, calculatorItem);
            removeIdFromAdded(addedToCalculator, fruitId);
            return;
        }

        const markup = `
        <div class="calculator__item item" data-calculator-fruit-id="${fruitId}">
            <div class="calculator__item-image" style="background-image: url(${
                fruits[fruitId].image
            })"></div>
            <div class="calculator__item-text">
                <p class="calculator__item-name">${fruits[fruitId].name}</p>
                <p class="calculator__item-kcal bright">${
                    fruits[fruitId].nutritions.calories
                } kcal per 100g</p>
                <p class="calculator__item-macronutrients bright">
                    P: ${fruits[fruitId].nutritions.protein}g | F: ${
            fruits[fruitId].nutritions.fat
        }g | C: ${fruits[fruitId].nutritions.carbohydrates}g
                </p>
            </div>
            <div class="calculator__item-action">
                <div class="calculator__item-icons">
                    <i class="fa-regular fa-heart fa-lg" data-fruit-id="${fruitId}" ${setIconColorOnRender(
            addedToFavourites,
            fruitId
        )}></i>
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

        calculatorItemsMarkup.push([fruitId, markup]);
        addedToCalculator.push(fruitId);

        clearList(lists.calculatorItems);
        renderCalculatorItems();
    });
});
