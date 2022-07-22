import { fruits } from "./fruits-data";

const favouritesList = document.querySelector(".favourites__list");
const searchResultsList = document.querySelector(".search__results");
const allFruitsList = document.querySelector(".all-fruits__list");
const calculatorItemsList = document.querySelector(".calculator__list");

const allLists = [favouritesList, searchResultsList, allFruitsList, calculatorItemsList];

const addToFavourites = (markup) => favouritesList.insertAdjacentHTML("beforeend", markup);

allLists.forEach((list) => {
    list.addEventListener("click", (e) => {
        const fruitId = e.target.closest(".fa-heart")?.dataset.fruitId;
        if (!fruitId) return;

        const markup = `
        <div class="search__result item">
            <div class="search__result-image" style="background-image: url(${fruits[fruitId].image})"></div>
            <div class="search__result-text">
                <p class="search__result-name">${fruits[fruitId].name}</p>
                <p class="search__result-kcal bright">${fruits[fruitId].nutritions.calories} kcal per 100g</p>
            </div>
            <div class="search__result-icons">
                <i class="fa-solid fa-plus fa-lg" data-fruit-id="${fruitId}"></i>
                <i class="fa-solid fa-xmark fa-lg" data-fruit-id="${fruitId}"></i>
            </div>
        </div>
        `;

        addToFavourites(markup);
    });
});
