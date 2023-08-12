import { createSlice } from "@reduxjs/toolkit";

let selectedProduct = createSlice({
    name : "selectedProduct",
    initialState : {
        productId : "",
        data : {}
    },
    reducers : {
        selectProduct : (state, action) => {
            state.productId = action.payload.id;
            state.data = action.payload.data;
        },
        returnProduct : (state, action) => {
            return state.data;
        }
    }
});

export const { selectProduct, returnProduct } = selectedProduct.actions;
export default selectedProduct.reducer;