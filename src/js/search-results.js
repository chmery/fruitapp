import { fruits, isDataAssigned } from "./fruits-data";
import { setIconColorOnRender, renderSpinner } from "./helpers";
import { addedToFavourites } from "./add-to-favourites";
import { addedToCalculator } from "./add-to-calculator";
import * as lists from "./lists";

const searchResults = document.querySelector(".search__results");
const searchInput = document.querySelector(".search__input");
let numResults;

const controlSpinner = () => {
    const inputValue = searchInput.value;
    const spinner = lists.searchResults.querySelector(".loader");

    showResultsContainer();
    if (!inputValue) removeResultsContainer();
    if (!spinner) renderSpinner(lists.searchResults, true);
};

const removeResultsContainer = () => {
    searchResults.innerHTML = "";
    searchResults.style.opacity = "0";
};

const setInitialValues = () => {
    searchResults.innerHTML = "";
    numResults = 0;
};

const showResultsContainer = () => (searchResults.style.opacity = "1");

const generateMarkup = (fruit, fruitId) => {
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

    return markup;
};

const renderResult = (markup) => {
    searchResults.style.opacity = "1";
    searchResults.insertAdjacentHTML("beforeend", markup);
    numResults++;
};

const renderResults = () => {
    const inputValue = searchInput.value.toLowerCase().trim();
    const MAX_SEARCH_RES = 5;

    fruits.forEach((fruit, i) => {
        if (numResults === MAX_SEARCH_RES) return;

        const fruitId = i;
        const markup = generateMarkup(fruit, fruitId);

        const fruitName = fruit.name.toLowerCase();
        const isInputValueInName = fruitName.includes(inputValue);

        if (isInputValueInName) renderResult(markup);
    });
};

const removeSpinnerAndRenderResults = setInterval(() => {
    const spinner = lists.searchResults.querySelector(".loader");

    if (isDataAssigned() && spinner) {
        lists.searchResults.removeChild(spinner);
        renderResults();
        clearInterval(removeSpinnerAndRenderResults);
    }
}, 500);

searchInput.addEventListener("input", () => {
    const inputValue = searchInput.value.toLowerCase().trim();

    if (!isDataAssigned()) {
        controlSpinner();
        return;
    }

    setInitialValues();
    renderResults();

    if (!inputValue || (inputValue && !searchResults.innerHTML)) removeResultsContainer();
});

window.addEventListener("click", (e) => {
    const areSearchResultsTarget =
        e.target.closest(".search__results") === searchResults ? true : false;

    if (!areSearchResultsTarget) {
        setInitialValues();
        removeResultsContainer();
        searchInput.value = "";
    }
});
