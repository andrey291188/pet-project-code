import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  avatarsReplace,
  clearAuthHeader,
  currentUser,
  logOutUser,
  loginUser,
  setAuthHeader,
} from "../../service/authRequest";
import { toast } from "react-toastify";

interface MyErrorType {
  message: string;
}

interface RootState {
  auth: {
    access_token: string;
    user: string;
    isLoadingAuth: boolean;
    error: string;
    isLoggedIn: boolean;
    isRefreshing: boolean;
  };
}

type RegisterUser = {
  name: string;
  phone: number;
  email: string;
  password: string;
};

type LogoutUser = {
  token: null;
};

type LoginUser = Pick<RegisterUser, "email" | "password">;


export const logInThunk = createAsyncThunk(
  "auth/login",
  async (body: LoginUser, { rejectWithValue }) => {
    try {
      const data = await loginUser(body);
      toast.success("You have seccessfully logged in!");
      return data;
    } catch (error) {
      const errorData = error as MyErrorType;
      toast.error(errorData.message);
      return rejectWithValue(errorData.message);
    }
  }
);

export const logOutThunk = createAsyncThunk(
  "auth/logout",
  async (body: LogoutUser, { rejectWithValue }) => {
    try {
      await logOutUser(body);
      clearAuthHeader();
      toast.warn("You seccessfully logged out!");
    } catch (error) {
      const errorData = error as MyErrorType;
      toast.error(errorData.message);
      return rejectWithValue(errorData.message);
    }
  }
);

export const currentUserThunk = createAsyncThunk(
  "auth/currentuser",
  async (body, { rejectWithValue, getState }) => {
    const authState = getState() as RootState;
    const { access_token } = authState.auth;

    if (access_token === "") {
      return;
    }
    setAuthHeader(access_token);
    try {
      const data = await currentUser();
      toast.success("You have seccessfully logged in!");
      return data;
    } catch (error) {
      const errorData = error as MyErrorType;
      toast.error(errorData.message);
      return rejectWithValue(errorData.message);
    }
  }
);

export const updateAvatarThunk = createAsyncThunk(
  "auth/updateAvatar",
  async (formData: FormData) => {
    try {
      const { avatarURL } = await avatarsReplace(formData);
      toast.success("Seccessfully added");
      return avatarURL;
    } catch (error: any) {
      toast.warning(error.message);
    }
  }
);
