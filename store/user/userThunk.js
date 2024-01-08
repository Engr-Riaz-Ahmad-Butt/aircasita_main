import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(
  "user/login",
  async (data, thunkAPI) => {
    try {
      // const response = await axiosInstance.post("/auth/login", data);
      // console.log("response: ", response);
      // if (response.data) {
      //   return response.data;
      // } else {
      //   toast.error(response.response.data.message);
      //   return thunkAPI.rejectWithValue(response);
      // }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
