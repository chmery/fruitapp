const sortBtns = document.querySelectorAll("p[class$='sort']");

const renderDropdownList = (parentEl) => {
    const markup = `
    <div class="dropdown">
        <p class="dropdown-item">
            Calories <i class="fa-solid fa-angle-up"></i>
        </p>
        <p class="dropdown-item">
            Calories <i class="fa-solid fa-angle-down"></i>
        </p>
        <p class="dropdown-item">
            Proteins <i class="fa-solid fa-angle-up"></i>
        </p>
        <p class="dropdown-item">
            Proteins <i class="fa-solid fa-angle-down"></i>
        </p>
        <p class="dropdown-item">
            Fats <i class="fa-solid fa-angle-up"></i>
        </p>
        <p class="dropdown-item">
            Fats <i class="fa-solid fa-angle-down"></i>
        </p>
        <p class="dropdown-item">
            Carbs <i class="fa-solid fa-angle-up"></i>
        </p>
        <p class="dropdown-item">
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

    if ((!isDropdownItemTarget() && !isSortBtnTarget()) || isDropdownItemTarget()) {
        removeDropdownList(parentEl);
    }
});
