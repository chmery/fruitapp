var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},s={},t=e.parcelRequiref3ff;null==t&&((t=function(e){if(e in r)return r[e].exports;if(e in s){var t=s[e];delete s[e];var a={id:e,exports:{}};return r[e]=a,t.call(a.exports,a,a.exports),a.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,r){s[e]=r},e.parcelRequiref3ff=t);var a=t("aPn72"),n=t("kDCnT"),l=t("5lKFX"),i=t("g3n0O"),o=t("susCi");const c=document.querySelector(".search__results"),d=document.querySelector(".search__input");let u;const f=()=>{c.innerHTML="",c.style.opacity="0"},p=()=>{c.innerHTML="",u=0},v=()=>c.style.opacity="1",h=()=>{const e=d.value.toLowerCase().trim();a.fruits.forEach(((r,s)=>{if(5===u)return;const t=((e,r)=>`\n    <div class="search__result item">\n        <div class="search__result-image" style="background-image: url(${e.image})"></div>\n        <div class="search__result-text">\n            <p class="search__result-name">${e.name}</p>\n            <p class="search__result-kcal bright">${e.nutritions.calories} kcal per 100g</p>\n        </div>\n        <div class="search__result-icons">\n            <i class="fa-solid fa-plus fa-lg" data-fruit-id="${r}" ${(0,n.setIconColorOnRender)(i.addedToCalculator,r)}></i>\n            <i class="fa-regular fa-heart fa-lg" data-fruit-id="${r}" ${(0,n.setIconColorOnRender)(l.addedToFavourites,r)}></i>\n        </div>\n    </div>\n    `)(r,s);r.name.toLowerCase().includes(e)&&(e=>{c.style.opacity="1",c.insertAdjacentHTML("beforeend",e),u++})(t)}))},_=setInterval((()=>{const e=o.searchResults.querySelector(".loader");(0,a.isDataAssigned)()&&e&&(o.searchResults.removeChild(e),h(),clearInterval(_))}),500);d.addEventListener("input",(()=>{const e=d.value.toLowerCase().trim();(0,a.isDataAssigned)()?(p(),h(),(!e||e&&!c.innerHTML)&&f()):(()=>{const e=d.value,r=o.searchResults.querySelector(".loader");v(),e||f(),r||(0,n.renderSpinner)(o.searchResults,!0)})()})),window.addEventListener("click",(e=>{e.target.closest(".search__results")===c||(p(),f(),d.value="")}));