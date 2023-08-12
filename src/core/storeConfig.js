import { configureStore } from "@reduxjs/toolkit";

import selectProductReducer from "../store/selectedProduct";
import userLoginReducer from "../store/userLogin";

export default configureStore({
    reducer : {
        userLogin : userLoginReducer,
        selectedProduct : selectProductReducer
    }
});