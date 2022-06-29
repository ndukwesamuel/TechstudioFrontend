import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import userinfoService from "./userinfoService";

const initialState = {
  userinfo: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getUser = createAsyncThunk(
  "user/getUser",
  async (id, thunkAPI) => {
    try {
      return await userinfoService.getuser(id);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const userinfoSlice = createSlice({
  name: "userinfo",
  initialState,
  reducers: {
    reset: (state) => initialState, /// we did not do it for user auth becuse we dont want it to reste the user  but in this case we want the user to be reste
  },

  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.userinfo = action.payload;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = userinfoSlice.actions;
export default userinfoSlice.reducer;
