import { configureStore } from "@reduxjs/toolkit";
import userLoginReducer from "../store/userLogin";

export default configureStore({
    reducer : {
        userLogin : userLoginReducer
    }
});