function e(e,t,r,a){Object.defineProperty(e,t,{get:r,set:a,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},s={},o=r.parcelRequiref3ff;null==o&&((o=function(e){if(e in a)return a[e].exports;if(e in s){var t=s[e];delete s[e];var r={id:e,exports:{}};return a[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){s[e]=t},r.parcelRequiref3ff=o),o.register("dRo73",(function(t,r){var a,s;e(t.exports,"register",(()=>a),(e=>a=e)),e(t.exports,"resolve",(()=>s),(e=>s=e));var o={};a=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)o[t[r]]=e[t[r]]},s=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o.register("5lKFX",(function(r,a){e(r.exports,"addedToFavourites",(()=>d)),e(r.exports,"favouriteItemsMarkup",(()=>f)),e(r.exports,"renderFavouriteItems",(()=>p)),e(r.exports,"renderEmptyMessage",(()=>h)),e(r.exports,"favouritesAmount",(()=>g));var s=o("aPn72"),i=o("susCi"),n=o("kDCnT"),c=o("g3n0O"),l=o("9aPLM");const u=[i.favourites,i.searchResults,i.allFruits,i.calculatorItems],d=JSON.parse(localStorage.getItem("addedToFavourites"))||[],f=JSON.parse(localStorage.getItem("favouriteItemsMarkup"))||[],m=e=>`\n    <div class="search__result item favourites" data-favourites-fruit-id="${e}">\n    <div class="search__result-image" style="background-image: url(${s.fruits[e].image})"></div>\n    <div class="search__result-text">\n        <p class="search__result-name">${s.fruits[e].name}</p>\n        <p class="search__result-kcal bright">${s.fruits[e].nutritions.calories} kcal per 100g</p>\n    </div>\n    <div class="search__result-icons">\n        <i class="fa-solid fa-plus fa-lg" data-fruit-id="${e}" ${(0,n.setIconColorOnRender)(c.addedToCalculator,e)}></i>\n        <i class="fa-solid fa-xmark fa-lg" data-fruit-id="${e}"></i>\n    </div>\n    </div>\n    `,v=setInterval((()=>{const e=i.favourites.querySelector(".loader");!(0,s.isDataAssigned)()&&d.length>1&&!e?(0,n.renderSpinner)(i.favourites):(0,s.isDataAssigned)()&&d.length>1&&(clearInterval(v),p(),e&&i.favourites.removeChild(e))}),500),p=()=>{(0,s.isDataAssigned)()&&(0!==d.length?(f.forEach((e=>{const t=e[0],r=m(t);e[1]=r})),f.forEach((e=>{const t=e[1];i.favourites.insertAdjacentHTML("beforeend",t)}))):h())},g=()=>i.favourites.querySelectorAll(".item").length,h=()=>{const e=`\n    <div class="favourites__empty">\n        <img\n            class="favourites__empty-image"\n            src="${t(l)}"\n            alt="sad apple"\n        />\n        <p class="favourites__empty-message bright">\n            You haven't added any fruits yet 🥺\n        </p>\n    </div>\n    `;i.favourites.insertAdjacentHTML("afterbegin",e)};u.forEach((e=>{e.addEventListener("click",(e=>{const t=e.target.closest(".fa-heart");if(!t)return;const r=t.dataset.fruitId,a=s.fruits[r].nutritions,o=d.includes(r),i=m(r);if(o)return(0,n.removeItemMarkup)(f,r),(0,n.removeIdFromAdded)(d,r),(0,n.setIconColor)(t,!1),(0,c.renderCalculatorItems)(),(0,n.saveFavouritesToLocalStorage)(),void(0===g()&&h());f.push([r,i,a]),d.push(r),(0,n.saveFavouritesToLocalStorage)(),(0,n.setIconColor)(t,!0),(0,c.renderCalculatorItems)()}))}))})),o.register("aPn72",(function(t,r){e(t.exports,"fruits",(()=>a)),e(t.exports,"isDataAssigned",(()=>s));let a=[];const s=()=>0!==a.length,o=async e=>{try{const t=await fetch(e);return await t.json()}catch(e){throw e}};(async()=>{try{const e=await(async()=>{try{return await o("https://corsus.herokuapp.com/https://www.fruityvice.com/api/fruit/all")}catch(e){throw e}})(),t=await(async()=>{try{return await o("https://corsus.herokuapp.com/https://fruitappi.herokuapp.com/fruits")}catch(e){throw e}})(),r=await e.map((e=>({...e,image:t[e.name.toLowerCase()]})));a=r}catch(e){alert(e.message)}})()})),o.register("susCi",(function(t,r){e(t.exports,"favourites",(()=>a)),e(t.exports,"searchResults",(()=>s)),e(t.exports,"allFruits",(()=>o)),e(t.exports,"calculatorItems",(()=>i));const a=document.querySelector(".favourites__list"),s=document.querySelector(".search__results"),o=document.querySelector(".all-fruits__list"),i=document.querySelector(".calculator__list")})),o.register("kDCnT",(function(t,r){e(t.exports,"removeIdFromAdded",(()=>s)),e(t.exports,"clearList",(()=>i)),e(t.exports,"removeItemMarkup",(()=>n)),e(t.exports,"setIconColor",(()=>c)),e(t.exports,"setIconColorOnRender",(()=>l)),e(t.exports,"renderSpinner",(()=>u)),e(t.exports,"saveFavouritesToLocalStorage",(()=>d));var a=o("5lKFX");const s=(e,t)=>e.splice(e.indexOf(t),1),i=e=>e.innerHTML="",n=(e,t)=>{const r=e.findIndex((e=>e[0]===t));e.splice(r,1)},c=(e,t)=>e.style.color=t?"#ec7676":"#b0b0b0",l=(e,t)=>e.includes(t.toString())?'style="color: #ec7676"':"",u=(e,t)=>{const r=`<span class="loader ${t?"search-loader":""}"></span>`;e.insertAdjacentHTML("afterbegin",r)},d=()=>{localStorage.addedToFavourites=JSON.stringify(a.addedToFavourites),localStorage.favouriteItemsMarkup=JSON.stringify(a.favouriteItemsMarkup)}})),o.register("g3n0O",(function(t,r){e(t.exports,"addedToCalculator",(()=>u)),e(t.exports,"calculatorItemsMarkup",(()=>d)),e(t.exports,"renderCalculatorItems",(()=>m));var a=o("aPn72"),s=o("susCi"),i=o("htKuZ"),n=o("kDCnT"),c=o("5lKFX");const l=[s.favourites,s.searchResults,s.allFruits],u=[],d=[],f=e=>`\n    <div class="calculator__item item" data-calculator-fruit-id="${e}">\n    <div class="calculator__item-image" style="background-image: url(${a.fruits[e].image})"></div>\n    <div class="calculator__item-text">\n        <p class="calculator__item-name">${a.fruits[e].name}</p>\n        <p class="calculator__item-kcal bright">${a.fruits[e].nutritions.calories} kcal per 100g</p>\n        <p class="calculator__item-macronutrients bright">\n            P: ${a.fruits[e].nutritions.protein}g | F: ${a.fruits[e].nutritions.fat}g | C: ${a.fruits[e].nutritions.carbohydrates}g\n        </p>\n    </div>\n    <div class="calculator__item-action">\n        <div class="calculator__item-icons">\n            <i class="fa-regular fa-heart fa-lg" data-fruit-id="${e}" ${(0,n.setIconColorOnRender)(c.addedToFavourites,e)}></i>\n            <i class="fa-solid fa-xmark fa-lg" data-fruit-id="${e}"></i>\n        </div>\n        <input\n            class="calculator-item-input"\n            type="number"\n            placeholder="g"\n            data-fruit-id="${e}"\n        />\n    </div>\n    </div>\n    `,m=()=>{(0,n.clearList)(s.calculatorItems),d.forEach((e=>{const t=e[0],r=f(t);e[1]=r})),d.forEach((e=>{const t=e[1];s.calculatorItems.insertAdjacentHTML("beforeend",t)}))};l.forEach((e=>{e.addEventListener("click",(e=>{const t=e.target.closest(".fa-plus");if(!t)return;const r=t.dataset.fruitId,a=f(r),o=u.includes(r),c=document.querySelector(`[data-calculator-fruit-id="${r}"]`);if(o)return(0,n.removeItemMarkup)(d,r),(0,i.removeItemFromList)(s.calculatorItems,c),(0,n.removeIdFromAdded)(u,r),void(0,n.setIconColor)(t,!1);d.push([r,a]),u.push(r),(0,n.setIconColor)(t,!0),m()}))}))})),o.register("htKuZ",(function(t,r){e(t.exports,"removeItemFromList",(()=>l));var a=o("susCi"),s=o("kDCnT"),i=o("g3n0O"),n=o("5lKFX");const c=[a.favourites,a.calculatorItems],l=(e,t)=>e.removeChild(t);c.forEach((e=>{e.addEventListener("click",(e=>{const t=e.target.closest(".fa-xmark");if(!t)return;const r=t.closest(".item"),a=e.target.closest("[class$='__list']"),o=r.classList.contains("calculator__item"),c=1===(0,n.favouritesAmount)();o?(e=>{const t=e.dataset.calculatorFruitId;(0,s.removeIdFromAdded)(i.addedToCalculator,t),(0,s.removeItemMarkup)(i.calculatorItemsMarkup,t)})(r):(e=>{const t=e.dataset.favouritesFruitId;(0,s.removeIdFromAdded)(n.addedToFavourites,t),(0,s.removeItemMarkup)(n.favouriteItemsMarkup,t),(0,i.renderCalculatorItems)(),(0,s.saveFavouritesToLocalStorage)()})(r),c&&(0,n.renderEmptyMessage)(),l(a,r)}))}))})),o.register("9aPLM",(function(e,t){e.exports=new URL(o("dRo73").resolve("2CzX2"),import.meta.url).toString()})),o("dRo73").register(JSON.parse('{"i3ubF":"index.aa056f6f.js","2CzX2":"empty.4132e22c.png"}'));var i=o("5lKFX"),n=o("kDCnT"),c=o("susCi");const l=document.querySelector(".all-fruits"),u=document.querySelector(".search__show-all"),d=document.querySelector(".all-fruits__close"),f=document.querySelector(".favourites"),m=document.querySelector(".calculator__btns-favourites"),v=document.querySelector(".favourites__close");u.addEventListener("click",(()=>l.showModal())),d.addEventListener("click",(()=>{l.close(),(0,n.clearList)(c.allFruits)})),window.addEventListener("keydown",(e=>{"Escape"===e.key&&(l.close(),(0,n.clearList)(c.allFruits))})),m.addEventListener("click",(()=>{f.showModal(),(0,n.clearList)(c.favourites),(0,i.renderFavouriteItems)()})),v.addEventListener("click",(()=>{f.close(),(0,n.clearList)(c.favourites)})),window.addEventListener("keydown",(e=>{"Escape"===e.key&&(f.close(),(0,n.clearList)(c.favourites))}));