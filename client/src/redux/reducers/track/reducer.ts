/** @format */

import { createSlice } from '@reduxjs/toolkit';
import { Status, TrackSliceState } from './type';
import { fetchTracks } from './asyncActions';

const initialState: TrackSliceState = {
  tracks: [],
  statusTracks: Status.LOADING,
};

const tracksReducer = createSlice({
  name: 'tracks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTracks.pending, (state) => {
      state.tracks = [];
      state.statusTracks = Status.LOADING;
    });
    builder.addCase(fetchTracks.fulfilled, (state, action) => {
      state.tracks = action.payload.tracks;
      state.statusTracks = Status.SUCCESS;
    });
    builder.addCase(fetchTracks.rejected, (state) => {
      state.tracks = [];
      state.statusTracks = Status.ERROR;
    });
  },
});

export const {} = tracksReducer.actions;

export default tracksReducer.reducer;
