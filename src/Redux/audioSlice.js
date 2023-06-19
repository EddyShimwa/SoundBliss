import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRides = createAsyncThunk(
  "rides/fetchRides",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });


      if (response.status !== 200) {
        throw new Error(response.data.error);
      }

      return { rides: response.data };
    } catch (error) {
      return rejectWithValue({ error: error.response.error });
    }
  }
);

const initialState = {
  loading: false,
  error: null,
  rides: [],
};

const ridesSlice = createSlice({
  name: "rides",
  initialState: initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchRides.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRides.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.rides = payload.rides;
      })
      .addCase(fetchRides.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload.error;
      });
  },
});

export default ridesSlice.reducer;

export const selectRidesLoading = (state) => state.rides.loading;
export const selectRidesError = (state) => state.rides.error;
export const selectRides = (state) => state.rides.rides;