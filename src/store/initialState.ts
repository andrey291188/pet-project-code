export const initialState = {
    auth: { user: "", email: "", access_token: "", avatar: "", isLoadingAuth: false, error: "", isLoggedIn: false, isRefreshing: false, access: false},
    createAds: { title: "", price: null, description: ""},
    favorite: { favoriteList: [] },
}