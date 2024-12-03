import { products } from "../data/producs.js";
import { addtoheart } from "./heart.js";
import { addHeartTimeout, addWishlist, updateHeart } from "./lv-add-wishList.js";

let productHTML = '';
products.forEach((product) => {

    productHTML += 
    `
         <div class="lv-product-card-medias">
            <div class="lv-product-cart-picture">
                <img src="${product.image}">
            </div>
            <span class="lv-product-cart-name">
                ${product.name}
            </span>
            <button class="btn-icons js-added-to-heart" 
            data-product-id="${product.id}">
                <svg width="18" height="18" viewBox="0 0 24 24" id="heart">
                    <path class="heart-fill-${product.id}" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="lightgray"/>
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="transparent" stroke="black" stroke-width="1.5"/>
                </svg>
            </button>
        </div>
    `
});
document.querySelector('.js-products-grip') .innerHTML = productHTML;
updateHeart();
 
document.querySelectorAll('.js-added-to-heart') .forEach((button) => {
    button.addEventListener('click', () => {
        const productId = button.dataset.productId;
        addtoheart(productId);
        addHeartTimeout(productId);
        addWishlist();
    });
});
