import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../initialState";

interface AdCard {
    active: boolean;
    description: string;
    fotoAds: string[] | null;
    owner: string;
    price: number;
    title: string;
    updatedAt: string;
    views: number;
    _id: string
  }

  interface State {
    favoriteList: AdCard[]
  }
  
  interface Action {
    type: string;
    payload: AdCard;
  }

const favoriteReducer = createSlice({
    name: "favorite",
    initialState: initialState.favorite,
    reducers: {
        createFavorite: (state: State, action: Action) => {
            state.favoriteList.push(action.payload)
        },

        deleteFavorit: (state, action) => {
            return {
              ...state,
              favoriteList: state.favoriteList.filter(
                (ads: AdCard) => ads._id !== action.payload),
              }
            },
}})

export const {createFavorite, deleteFavorit} = favoriteReducer.actions
export default favoriteReducer.reducer