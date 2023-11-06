interface User {
  name: string;
  email: string;
  phone: number;
  avatar: string;
}

interface State {
  isLoading?: boolean;
  isRefreshing?: boolean;
  error?: string;
  user?: User | null;
  email?: string;
  avatar?: string;
  access_token?: string | null;
  isLoggedIn?: boolean;
  access?: boolean
}

interface Action {
  type: string;
  payload?: any;
}

export const handlePending = (state: State): void => {
  state.isLoading = true;
  state.isRefreshing = true;
};

export const handleFulfilled = (state: State): void => {
  state.isRefreshing = false;
  state.isLoading = false;
  state.error = "";
};


export const handleFulfilledLogIn = (state: State, action: Action): void => {
  state.user = action.payload.data.name;
  state.avatar = action.payload.data.avatar;
  state.email = action.payload.data.email;
  state.access_token = action.payload.token;
  state.access = action.payload.data.access;
  state.isLoggedIn = true;
};

export const handleFulfilledLogOut = (state: State): void => {
  state.user = null;
  state.access_token = "";
  state.avatar = "";
  state.isLoggedIn = false;
};

export const handleFulfilledCurrentLogin = (state: State): void => {
  state.isRefreshing = true;
};

export const handleFulfilledsetAvatar = (state: State, action: Action): void => {
  state.avatar = action.payload
}

export const handleRejected = (state: State, action: Action): void => {
  state.isRefreshing = false;
  state.isLoading = false;
  state.error = action.payload;
  
  if (action.payload === "Request failed with status code 401") {
    state.user = null;
    state.access_token = "";
    state.avatar = "";
    state.email = "";
    state.isLoggedIn = false;
  }
};

