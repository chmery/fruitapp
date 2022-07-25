import { getSortedFruits } from "./sorting";

const sortBtns = document.querySelectorAll("p[class$='sort']");

const renderDropdownList = (parentEl) => {
    const markup = `
    <div class="dropdown">
        <p class="dropdown-item" data-macronutrient="calories" data-order="ascending">
            Calories <i class="fa-solid fa-angle-up"></i>
        </p>
        <p class="dropdown-item" data-macronutrient="calories" data-order="descending">
            Calories <i class="fa-solid fa-angle-down"></i>
        </p>
        <p class="dropdown-item" data-macronutrient="protein" data-order="ascending">
            Proteins <i class="fa-solid fa-angle-up"></i>
        </p>
        <p class="dropdown-item" data-macronutrient="protein" data-order="descending">
            Proteins <i class="fa-solid fa-angle-down"></i>
        </p>
        <p class="dropdown-item" data-macronutrient="fat" data-order="ascending">
            Fats <i class="fa-solid fa-angle-up"></i>
        </p>
        <p class="dropdown-item" data-macronutrient="fat" data-order="descending">
            Fats <i class="fa-solid fa-angle-down" ></i>
        </p>
        <p class="dropdown-item" data-macronutrient="carbohydrates" data-order="ascending">
            Carbs <i class="fa-solid fa-angle-up"></i>
        </p>
        <p class="dropdown-item" data-macronutrient="carbohydrates" data-order="descending">
            Carbs <i class="fa-solid fa-angle-down"></i>
        </p>
    </div> 
    `;
    parentEl.insertAdjacentHTML("beforeend", markup);
};

const removeDropdownList = (parentEl) => parentEl.removeChild(parentEl.querySelector(".dropdown"));

sortBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const dropdownList = document.querySelector(".dropdown");
        const parentEl = btn.closest("header");
        const sortBtn = e.target.closest("p[class$='sort']");

        sortBtn === btn && dropdownList
            ? removeDropdownList(parentEl)
            : renderDropdownList(parentEl);
    });
});

window.addEventListener("click", (e) => {
    const dropdownList = document.querySelector(".dropdown");
    if (!dropdownList) return;

    const parentEl = dropdownList.closest("header");
    const dropdownItems = Array.from(document.querySelectorAll("[class*='dropdown']"));

    const isDropdownItemTarget = () => dropdownItems.some((item) => item === e.target);

    const isSortBtnTarget = () =>
        Array.from(sortBtns).some((btn) => btn === e.target.closest("p[class$='sort']"));

    if (isDropdownItemTarget) {
        const item = e.target.closest(".dropdown-item");

        const macronutrient = item?.dataset.macronutrient;
        const order = item?.dataset.order;

        if (!macronutrient || !order) return;
        const sortedFruits = getSortedFruits(macronutrient, order);
    }

    if ((!isDropdownItemTarget() && !isSortBtnTarget()) || isDropdownItemTarget()) {
        removeDropdownList(parentEl);
    }
});
