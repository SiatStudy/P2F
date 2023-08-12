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
            if(action.payload === state.productId) {
                return state.data;
            } else {
                alert("해당 상품은 없는 제품입니다.")
            }
        }
    }
});

export const { selectProduct, returnProduct } = selectedProduct.actions;
export default selectedProduct.reducer;