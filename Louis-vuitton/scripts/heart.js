export let heart = JSON.parse(localStorage.getItem('hearts')) || [];

function saveLocalStorage() {
    localStorage.setItem('hearts', JSON.stringify(heart));
};

export function addtoheart(productId) {
    const matchingItem = heart.includes(productId);

    if (matchingItem) {
        heart = heart.filter(item => item !== productId);
    } else {
        heart.push(productId);
    };

    saveLocalStorage();
};

export function removeFromHeart(productId) {
    heart = heart.filter(heartItem => heartItem !== productId);
    saveLocalStorage();
};