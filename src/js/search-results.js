import { fruits } from "./fruits-data";

document.querySelector(".search__input").addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();
    const parentEl = document.querySelector(".search__results");

    parentEl.innerHTML = "";

    fruits.forEach((element) => {
        const markup = `
        <div class="search__result">
            <div class="search__result-image"></div>
            <div class="search__result-text">
                <p class="search__result-name">${element.name}</p>
                <p class="search__result-kcal bright">${element.nutritions.calories} kcal per 100g</p>
            </div>
            <div class="search__result-icons">
                <img class="search__result-icon" src="./src/icons/plus-grey.svg" />
                <img class="search__result-icon" src="../icons/heart-grey.svg" />
            </div>
        </div>
        `;

        const isValueInName = element.name.toLowerCase().includes(value);
        if (isValueInName) {
            parentEl.style.opacity = "1";
            parentEl.insertAdjacentHTML("beforeend", markup);
        }
    });

    if (value === "") {
        parentEl.innerHTML = "";
        parentEl.style.opacity = "0";
    }

    if (value !== "" && parentEl.innerHTML === "") {
        parentEl.style.opacity = "0";
    }
});
