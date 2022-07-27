import { fruits, isDataAssigned } from "./fruits-data";
import * as lists from "./lists";
import { addedToFavourites } from "./add-to-favourites";
import { setIconColorOnRender } from "./helpers";
import { addedToCalculator } from "./add-to-calculator";

const showAllBtn = document.querySelector(".search__show-all");

export const allFruitsMarkup = [];

const stopChecking = () => clearInterval(renderSpinnerIfDataNotAssigned);

const renderSpinner = () => {
    if (isDataAssigned()) {
        stopChecking();
        generateMarkup();
        renderAllFruits();
        const spinner = document.querySelector(".loader");
        if (!spinner) return;
        lists.allFruits.removeChild(spinner);
    }

    if (!isDataAssigned()) {
        const isSpinnerRendered = document.querySelector(".loader");
        if (isSpinnerRendered) return;
        const markup = `<span class="loader"></span>`;
        lists.allFruits.insertAdjacentHTML("afterbegin", markup);
    }
};

const renderSpinnerIfDataNotAssigned = setInterval(renderSpinner, 500);

const renderAllFruits = () => {
    allFruitsMarkup.forEach((fruit) => {
        const markup = fruit[1];
        lists.allFruits.insertAdjacentHTML("beforeend", markup);
    });
};

const generateMarkup = () => {
    fruits.forEach((fruit, i) => {
        const sortingData = fruit.nutritions;
        const fruitId = i;

        const markup = `
        <div class="search__result item">
            <div class="search__result-image" style="background-image: url(${fruit.image})"></div>
            <div class="search__result-text">
                <p class="search__result-name">${fruit.name}</p>
                <p class="search__result-kcal bright">${fruit.nutritions.calories} kcal per 100g</p>
            </div>
            <div class="search__result-icons">
                <i class="fa-solid fa-plus fa-lg" data-fruit-id="${fruitId}" ${setIconColorOnRender(
            addedToCalculator,
            fruitId
        )}></i>
                <i class="fa-regular fa-heart fa-lg" data-fruit-id="${fruitId}" ${setIconColorOnRender(
            addedToFavourites,
            fruitId
        )}></i>
            </div>
        </div>
        `;

        allFruitsMarkup.push([fruitId, markup, sortingData]);
    });
};

showAllBtn.addEventListener("click", () => renderAllFruits());
