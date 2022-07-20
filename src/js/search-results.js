import { fruits } from "./fruits-data";
import { MAX_SEARCH_RES } from "./config";

let numResults;

const renderResult = (parentEl, markup) => {
    parentEl.style.opacity = "1";
    parentEl.insertAdjacentHTML("beforeend", markup);
    numResults++;
};

const removeResultsContainer = (parentEl) => {
    parentEl.innerHTML = "";
    parentEl.style.opacity = "0";
};

const setInitialValues = (parentEl) => {
    parentEl.innerHTML = "";
    numResults = 0;
};

document.querySelector(".search__input").addEventListener("input", (e) => {
    const inputValue = e.target.value.toLowerCase().trim();
    const parentEl = document.querySelector(".search__results");

    setInitialValues(parentEl);

    fruits.forEach((fruit) => {
        if (numResults === MAX_SEARCH_RES) return;

        const markup = `
        <div class="search__result">
            <div class="search__result-image"></div>
            <div class="search__result-text">
                <p class="search__result-name">${fruit.name}</p>
                <p class="search__result-kcal bright">${fruit.nutritions.calories} kcal per 100g</p>
            </div>
            <div class="search__result-icons">
                <img class="search__result-icon" src="./src/icons/plus-grey.svg" />
                <img class="search__result-icon" src="../icons/heart-grey.svg" />
            </div>
        </div>
        `;
        const fruitName = fruit.name.toLowerCase();
        const isInputValueInName = fruitName.includes(inputValue);

        if (isInputValueInName) renderResult(parentEl, markup);
    });

    if (!inputValue || (inputValue && !parentEl.innerHTML)) removeResultsContainer(parentEl);
});
