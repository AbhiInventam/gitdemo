import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAlbumData = createAsyncThunk("album/getAlbumData", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/albums"
  );

  console.log("response", response);
  console.log("response Data", response.data);

  return response.data;
});

const initialState = {
  entities: [],
  loading: false,
};

export const albumSlice = createSlice({
  name: "album",
  initialState,
  reducers: {
    albumdata: (state) => {},
  },
  extraReducers: {
    [getAlbumData.pending]: (state) => {
      state.loading = true;
    },
    // [getAlbumData.fulfilled]: (state, action) => {
    [getAlbumData.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.entities = payload;
      // console.log("action:-", action);
      // console.log("action", action.payload);
      // state.entities = action.payload;
    },
    [getAlbumData.rejected]: (state) => {
      state.loading = false;
    },
  },
});

// export const { albumdata } = albumSlice.actions;

export const selectAlbumData = (state) => state.albumData;

export default albumSlice.reducer;
