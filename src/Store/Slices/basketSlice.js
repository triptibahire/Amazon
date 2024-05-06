import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    // name: "",
    // price:0
}
const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToBasket(state, action) {
            // logic for adding item to basket
            state.items = [...state.items, action.payload]


        },
        removeFromBasket(state, action) {
            // logic for removing item from basket
            var newState = state.items

            const index = newState.indexOf(action.payload.productID)
            newState.splice(index, 1)

            state.items = newState
        }
    }
})

export const { addToBasket, removeFromBasket } = basketSlice.actions

export default basketSlice.reducer