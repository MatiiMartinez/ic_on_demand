import * as type from "../types";

export function addToCart(productId) {
    return {
        type: type.ADD_TO_CART,
        payload: productId,
    };
}

export function removeFromCart(productId) {
    return {
        type: type.REMOVE_FROM_CART,
        payload: productId,
    };
}

export function clearCart() {
    return {
        type: type.CLEAN_CART,
    };
}
