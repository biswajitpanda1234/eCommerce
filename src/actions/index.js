export const cart = (newCart)=>{
    return {
        type: "CART",
        payload: {newCart}
    }
}
export const priceUpdate = (newPrice)=>{
    return {
        type: "PRICE",
        payload: {newPrice}
    }
}
export const quantityUpdate = (newQuantity)=>{
    return {
        type: "QUANTITY",
        payload: {newQuantity}
    }
}