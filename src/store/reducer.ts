import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./authorization/authSlice";
import createAdsReducer from "./createAds/createAdsReducer";
import favoriteReducer from "./favorite/favoriteReducer";

export const reducer = combineReducers({
    auth: authReducer,
    createAds: createAdsReducer,
    favorite: favoriteReducer,
})