const sortBtns = document.querySelectorAll("p[class$='sort']");

const renderDropdownList = (parentEl) => {
    const markup = `
    <div class="dropdown">
        <p class="dropdown-element">
            Calories <i class="fa-solid fa-angle-up"></i>
        </p>
        <p class="dropdown-element">
            Calories <i class="fa-solid fa-angle-down"></i>
        </p>
        <p class="dropdown-element">
            Proteins <i class="fa-solid fa-angle-up"></i>
        </p>
        <p class="dropdown-element">
            Proteins <i class="fa-solid fa-angle-down"></i>
        </p>
        <p class="dropdown-element">
            Fats <i class="fa-solid fa-angle-up"></i>
        </p>
        <p class="dropdown-element">
            Fats <i class="fa-solid fa-angle-down"></i>
        </p>
        <p class="dropdown-element">
            Carbs <i class="fa-solid fa-angle-up"></i>
        </p>
        <p class="dropdown-element">
            Carbs <i class="fa-solid fa-angle-down"></i>
        </p>
    </div> 
    `;
    parentEl.insertAdjacentHTML("beforeend", markup);
    setRemovingListener(parentEl);
};

const removeDropdownList = (parentEl) => parentEl.removeChild(parentEl.querySelector(".dropdown"));

const setRemovingListener = (parentEl) => {
    const dropdownList = document.querySelector(".dropdown");

    dropdownList.addEventListener("click", (e) => {
        const isListElementTarget = () => dropdownList.childNodes.some((node) => node === e.target);

        if (isListElementTarget) {
            removeDropdownList(parentEl);
        }
    });
};

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
    const dropdownElements = Array.from(document.querySelectorAll("[class*='dropdown']"));

    const dropdownElementsNotTarget = () =>
        dropdownElements.every((element) => element !== e.target);

    const sortBtnsNotTarget = () =>
        Array.from(sortBtns).every((btn) => btn !== e.target.closest("p[class$='sort']"));

    if (dropdownElementsNotTarget() && sortBtnsNotTarget()) {
        removeDropdownList(parentEl);
    }
});
