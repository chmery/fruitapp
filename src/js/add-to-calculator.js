import { fruits } from "./fruits-data";

const favouritesList = document.querySelector(".favourites__list");
const searchResultsList = document.querySelector(".search__results");
const allFruitsList = document.querySelector(".all-fruits__list");

const allLists = [favouritesList, searchResultsList, allFruitsList];

const renderCalculatorItem = (markup) => {
    const calculatorItemsList = document.querySelector(".calculator__items");
    calculatorItemsList.insertAdjacentHTML("beforeend", markup);
};

allLists.forEach((list) => {
    list.addEventListener("click", (e) => {
        const fruitId = e.target.closest(".fa-plus")?.dataset.fruitId;
        if (!fruitId) return;

        const markup = `
        <div class="calculator__item">
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
                />
            </div>
        </div>
        `;

        renderCalculatorItem(markup);
    });
});
