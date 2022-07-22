import { fruits } from "./fruits-data";

const showAllBtn = document.querySelector(".search__show-all");

const renderFruit = (parentEl, markup) => parentEl.insertAdjacentHTML("beforeend", markup);

showAllBtn.addEventListener("click", () => {
    const allFruitsList = document.querySelector(".all-fruits__list");

    fruits.forEach((fruit) => {
        const markup = `
    <div class="search__result">
        <div class="search__result-image" style="background-image: url(${fruit.image})"></div>
        <div class="search__result-text">
            <p class="search__result-name">${fruit.name}</p>
            <p class="search__result-kcal bright">${fruit.nutritions.calories} kcal per 100g</p>
        </div>
        <div class="search__result-icons">
            <i class="fa-solid fa-plus fa-lg"></i>
            <i class="fa-regular fa-heart fa-lg"></i>
        </div>
    </div>
    `;

        renderFruit(allFruitsList, markup);
    });
});
