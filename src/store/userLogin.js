import { createSlice } from "@reduxjs/toolkit";

let userLogIn = createSlice({
    name : "userLogIn",
    initialState : {
        sectionID : "",
        useLogin : false
    },
    reducers : {
        userLogin : (state, action) => {
            state.sectionID = action.payload;
            state.userLogin = true;
        },
        userLogout : (state, action) => {
            state.sectionID = "";
            state.userLogin = false;
        },
        useSectionIDReturn : (state, action) => {
            return state.sectionID;
        },
        useLoginReturn : (state, action) => {
            return state.userLogin;
        }
    }
});

export const { userLogin, userLogout, useSectionIDReturn, useLoginReturn } = userLogIn.actions;
export default userLogIn.reducer;