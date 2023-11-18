import {
  handleFulfilled,
  handleFulfilledLogIn,
  handleFulfilledLogOut,
  handleFulfilledCurrentLogin,
  handlePending,
  handleRejected,
  handleFulfilledsetAvatar,
} from "./funkSupportSliceAuth";
import {
  currentUserThunk,
  logInThunk,
  logOutThunk,
  updateAvatarThunk,
} from "./thunkAuth";

const { createSlice, isAnyOf } = require("@reduxjs/toolkit");
const { initialState } = require("../initialState");

const authSlice = createSlice({
  name: "auth",
  initialState: initialState.auth,

  extraReducers: (builder: any) => {
    builder
      .addCase(logInThunk.fulfilled, handleFulfilledLogIn)
      .addCase(logOutThunk.fulfilled, handleFulfilledLogOut)
      .addCase(currentUserThunk.fulfilled, handleFulfilledCurrentLogin)
      .addCase(updateAvatarThunk.fulfilled, handleFulfilledsetAvatar)
      .addMatcher(
        isAnyOf(
          logInThunk.pending,
          logOutThunk.pending,
          currentUserThunk.pending,
          updateAvatarThunk.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          logInThunk.rejected,
          logOutThunk.rejected,
          currentUserThunk.rejected,
          updateAvatarThunk.rejected
        ),
        handleRejected
      )
      .addMatcher(
        isAnyOf(
          logInThunk.fulfilled,
          logOutThunk.fulfilled,
          currentUserThunk.fulfilled,
          updateAvatarThunk.fulfilled
        ),
        handleFulfilled
      );
  },
});

export const authReducer = authSlice.reducer;
