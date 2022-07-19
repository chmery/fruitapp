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
    setListeners(parentEl);
};

const setListeners = (parentEl) => {
    const dropdownList = document.querySelector(".dropdown");

    dropdownList.addEventListener("click", (e) => {
        if (Array.from(dropdownList.childNodes).some((node) => node === e.target)) {
            removeDropdownList(parentEl);
        }
    });
};

const removeDropdownList = (parentEl) => parentEl.removeChild(parentEl.querySelector(".dropdown"));

sortBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const parentEl = e.target.closest("header");
        const sortBtn = e.target.closest("p[class$='sort']");

        if (sortBtn === btn && parentEl.contains(parentEl.querySelector(".dropdown"))) {
            removeDropdownList(parentEl);
            return;
        }

        if (sortBtn === btn) {
            renderDropdownList(parentEl);
            return;
        }
    });
});

window.addEventListener("click", (e) => {
    if (
        Array.from(document.querySelectorAll("[class*='dropdown']")).every(
            (element) => element !== e.target
        ) &&
        document.querySelector(".dropdown") !== null &&
        Array.from(sortBtns).every((btn) => btn !== e.target.closest("p[class$='sort']"))
    ) {
        removeDropdownList(document.querySelector(".dropdown").closest("header"));
    }
});
