import { createSlice } from "@reduxjs/toolkit";

import {

  loginUser,

} from "./userThunk";
import { setCookie } from "cookies-next";

const initialState = {
  user: null,
  occupationList: [],
  isLoading: false,
  isSidebarOpen: false,
  isProfileUpdating: false,
  insurancePolicy: {},
  isEmailUpdating: false,
  token: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    logoutUser: (state) => {
      state.user = null;
    },
  },

  extraReducers: (builder) => {
    builder
      // Handle Login Api
      .addCase(loginUser.pending, (state, action) => {
        // console.log("pending_action: ", action);
        state.isLoading = true;
      })

      .addCase(loginUser.fulfilled, (state, action) => {
        // console.log("fulfilled_action: ", action);
        if (action.payload.success) {
          state.user = action.payload.data;
          state.token = action.payload.token;
          setCookie("token", action.payload.token);
          toast.success(action?.payload?.message);
        } else {
          toast.error(action?.payload?.message);
          state.isLoading = false;
        }
        state.isLoading = false;
      })

      .addCase(loginUser.rejected, (state, action) => {
        toast.error(action.payload?.data?.message);
        state.isLoading = false;
      })


  },
});

export const { toggleSidebar, logoutUser } = userSlice.actions;

export default userSlice.reducer;
