import { heart } from "./heart.js";

export function addHeartTimeout(productId){
    const heartFill = document.querySelector(`.heart-fill-${productId}`);
    setTimeout(() => {
        if (heartFill.getAttribute('fill') === 'lightgray') {
            heartFill.setAttribute('fill', 'black');
        } else {
            heartFill.setAttribute('fill', 'lightgray');
        }
    }, 1000);
};

export function addWishlist() {
    const bubble = document.querySelector('.lv-notification-bubble');
    setTimeout(() => {
        if (heart && heart.length > 0) {
            let foundMatchingItem = false;
            heart.forEach((cartItem) => {
                if (cartItem) {
                    foundMatchingItem = true;
                    bubble.classList.add('js-notification-bubble');
                }
            });
            
            if (!foundMatchingItem) {
                bubble.classList.remove('js-notification-bubble');
            }
        } else {
            bubble.classList.remove('js-notification-bubble');
        };
    }, 1000);
};
addWishlist();

export function updateHeart(){
    heart.forEach(productId => {
        const id = typeof productId === 'object' ? productId.id : productId;
        const heartFill = document.querySelector(`.heart-fill-${id}`);
        const bubble = document.querySelector('.lv-notification-bubble');
        if (heartFill) {
            heartFill.setAttribute('fill', 'black'); 
            bubble.classList.add('js-notification-bubble');
        };
    });
 };
updateHeart();
