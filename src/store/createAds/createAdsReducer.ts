import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../initialState";


const createAdsReducer = createSlice({
    name: "createAds",
    initialState: initialState.createAds,
    reducers: {

        createAdsTitle: (state, action) => {
            state.title = action.payload;
        },

        createAdsPrice: (state, action) => {
            state.price = action.payload;
        },

        createAdsDescription: (state, action) => {
            state.description = action.payload
        }, 

        resetState: (state) => {
            return initialState.createAds;
          },
    }
})

export const {createAdsPrice, createAdsTitle, createAdsDescription, resetState} = createAdsReducer.actions;

export default createAdsReducer.reducer