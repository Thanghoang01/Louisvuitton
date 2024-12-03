export function getProduct(productId){
    let matchingItem;
    products.forEach((product) => {
        if(productId === product.id) {
            matchingItem = product;
        };
    });
    return matchingItem;
};

export const products = [{
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image: "lv-asset-products/louis-vuitton-workwear-cotton-canvas-blouson--HSB43WLPJ035_PM2_Front view.avif",
    name: "Workwear Cotton Canvas Blouson"
}, 
{
    id: "b7f9c60c-7d67-4e60-b11b-d3545c19b4aa",
    image: "lv-asset-products/louis-vuitton-cotton-silk-blend-trench--HSK02EQCW140_PM2_Front view.avif",
    name: "Bone Key Pouch"
},
{
    id: "c2c2a8d5-e9ec-4c6d-b054-bdf405d37dfd",
    image: "lv-asset-products/louis-vuitton-dandy-monogram-bandeau--M94842_PM2_Front view.avif",
    name: "Dandy Monogram Bandeau"
},
{
    id: "a3e33f85-1f84-4ec8-b7ab-8dcde7b2a2d6",
    image: "lv-asset-products/louis-vuitton-dog-collar-pm--GI1215_PM2_Front view.avif",
    name: "Dog Collar PM"
},
{
    id: "e75a7b4e-d1ea-4c4c-8d0b-32f67dfecc0d",
    image: "lv-asset-products/louis-vuitton-dog-leash-mm--GI1217_PM2_Front view.avif",
    name: "Dog Leash MM"
},
{
    id: "b6a9a45a-4584-4c6c-a0cb-99317a99fc3a",
    image: "lv-asset-products/louis-vuitton-embossed-cashmere-turtle-neck--HMN41WJZE544_PM2_Front view.avif",
    name: "Embossed Cashmere Turtle Neck"
},
{
    id: "d54b4cbb-5a79-44cf-94ef-66a89d5e2c88",
    image: "lv-asset-products/louis-vuitton-embroidered-calfskin-varsity-jacket--HSL12WBQV546_PM2_Front view.avif",
    name: "Embroidered Calfskin Varsity Jacket"
},
{
    id: "c3f5d3a5-cf58-44b1-bf59-ecf156d7b7f9",
    image: "lv-asset-products/louis-vuitton-hobo-cargo--M12697_PM2_Front view.avif",
    name: "Hobo Cargo"
},
{
    id: "b26f34f7-0a3a-4692-9b6e-fc4a8826c5d0",
    image: "lv-asset-products/louis-vuitton-keepall-bandoulière-25--M12627_PM2_Front view.avif",
    name: "Keepall Bandoulière 25"
},
{
    id: "f1b2d25e-2f82-4f5a-a1b4-e77cdef4e2c4",
    image: "lv-asset-products/louis-vuitton-long-sleeved-cotton-shirt--HSS02WRBK001_PM2_Front view.avif",
    name: "Long-Sleeved Cotton Shirt"
},
{
    id: "f8f8c4a1-19e3-4b38-87f6-fc95e1a0e75f",
    image: "lv-asset-products/louis-vuitton-lv-crush-damier-argyle-beanie--M7893A_PM2_Front view.avif",
    name: "LV Crush Damier Argyle Beanie"
},
{
    id: "c64f45c0-b1ee-4f23-b503-25d5b3c4ee6a",
    image: "lv-asset-products/louis-vuitton-lv-must-40mm-reversible-belt--M8888V_PM2_Front view.avif",
    name: "LV Must 40mm Reversible Belt"
},
{
    id: "d7b72859-0c2d-41b6-9158-1f38baf557af",
    image: "lv-asset-products/louis-vuitton-lv-paw-key-holder-and-bag-charm--M02292_PM2_Front view.avif",
    name: "LV Paw Key Holder and Bag Charm"
},
{
    id: "e2b54c02-7d52-4e79-949c-5c48b6aa0d29",
    image: "lv-asset-products/louis-vuitton-lv-runner-tatic-sneaker--BSIU1PMI01_PM2_Front view.avif",
    name: "LV Runner Tatic Sneaker"
},
{
    id: "b08f8bb3-b1f1-42cb-9b85-7b610299d409",
    image: "lv-asset-products/louis-vuitton-lv-trainer-sneaker--BS9U1PWA78_PM2_Front view.avif",
    name: "LV Trainer Sneaker"
},
{
    id: "f3d4a66c-6313-4c1f-b0eb-8f1d161c8e5c",
    image: "lv-asset-products/louis-vuitton-outdoor-backpack--M12624_PM2_Front view.avif",
    name: "Outdoor Backpack"
},
{
    id: "a8a037d2-d597-42f0-96f6-2047ae1e6479",
    image: "lv-asset-products/louis-vuitton-pooch-bag--M12617_PM2_Front view.avif",
    name: "Pooch Bag"
},
{
    id: "f4b1f0e4-f72e-4f1a-9aa8-e85c75c4d4b1",
    image: "lv-asset-products/louis-vuitton-quilted-denim-jacket--HSA17EPNA650_PM2_Front view.avif",
    name: "Quilted Denim Jacket"
},
{
    id: "c9b1e3e3-8e77-4930-93b5-cd12b7c5a1b7",
    image: "lv-asset-products/louis-vuitton-reversible-hooded-shearling-blouson--HSL14EFVG805_PM2_Front view.avif",
    name: "Reversible Hooded Shearling Blouson"
},
{
    id: "d98f3f89-1655-4c87-97c4-3d62f8c47448",
    image: "lv-asset-products/louis-vuitton-bone-key-pouch--M12616_PM2_Front view.avif",
    name: "Bone Key Pouch"
}];
