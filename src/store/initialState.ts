export type AuthInitialState = {
    user: string;
    email: string;
    access_token: string;
    avatar: string;
    isLoading: boolean;
     error: string; 
     isLoggedIn: boolean; 
     isRefreshing: boolean; 
     access: boolean;
}

export type CreateAdsInitialState = {
    title: string;
    price: number | null;
    description: string;
}

export type AdCard = {
    active: boolean;
    description: string;
    fotoAds: string[] | null;
    owner: string;
    price: number;
    title: string;
    updatedAt: string;
    views: number;
    _id: string;
  }

export type FavoriteListInitialState = {
    favoriteList: AdCard[]
}

export type StateInitial = {
    auth: AuthInitialState;
    createAds: CreateAdsInitialState;
    favorite: FavoriteListInitialState;
}

export const initialState: StateInitial = {
    auth: { user: "", email: "", access_token: "", avatar: "", isLoading: false, error: "", isLoggedIn: false, isRefreshing: false, access: false},
    createAds: { title: "", price: null, description: ""},
    favorite: { favoriteList: [] },
}