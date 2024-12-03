import { heart, removeFromHeart } from "./heart.js";
import { getProduct } from "../../data/producs.js";

let heartSummaryHTML = '';
heart.forEach((heartItem) => {
    const productId = heartItem;
    const matchingProduct = getProduct(productId);

    heartSummaryHTML += `
        <div class="lv-product-card-medias js-product-card-medias-${matchingProduct.id}">
            <div class="lv-product-cart-picture">
                <img src="${matchingProduct.image}">
            </div>
            <span class="lv-product-cart-name">
                ${matchingProduct.name}
            </span>
            <p class="lv-wish-cart">Unavailable</p>
            <button class="btn-icons js-delete-btn" data-product-id="${matchingProduct.id}">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8"><path d="M256-213.85 213.85-256l224-224-224-224L256-746.15l224 224 224-224L746.15-704l-224 224 224 224L704-213.85l-224-224-224 224Z"/></svg>
            </button>
        </div>
    `
});
document.querySelector('.lv-product-list') .innerHTML = heartSummaryHTML;

document.querySelectorAll('.js-delete-btn') .forEach((button) => {
    button.addEventListener('click', () => {
        const productId = button.dataset.productId;
        removeFromHeart(productId);
        const container = document.querySelectorAll(`.js-product-card-medias-${productId}`);
        container.forEach((item) => {
            item.remove()
        });
    });
});