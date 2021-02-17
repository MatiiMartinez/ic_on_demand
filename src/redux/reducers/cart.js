import * as type from "../types";

const initialState = {
    cartItems: [],
    quantity: 0,
};

export default function cart(state = initialState, action) {
    switch (action.type) {
        case type.ADD_TO_CART:
            if (!state.cartItems.find((x) => x.id === action.payload.id)) {
                state.cartItems.push(action.payload);
            }

            return {
                ...state,
                cartItems: [...state.cartItems],
            };
        case type.REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: [
                    ...state.cartItems.filter(
                        (x) => x.id !== action.payload.id
                    ),
                ],
            };
        case type.CLEAN_CART:
            return {
                ...state,
                cartItems: [],
            };
        default:
            return state;
    }
}
