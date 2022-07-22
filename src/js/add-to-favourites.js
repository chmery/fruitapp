import { fruits } from "./fruits-data";
import * as list from "./lists";

const listsWithHeartIcon = [
    list.favourites,
    list.searchResults,
    list.allFruits,
    list.calculatorItems,
];

const addToFavourites = (markup) => list.favourites.insertAdjacentHTML("beforeend", markup);

listsWithHeartIcon.forEach((list) => {
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
