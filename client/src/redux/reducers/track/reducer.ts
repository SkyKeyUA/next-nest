/** @format */

import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Status, TrackSliceState, Tracks } from './type';
import { fetchTracks } from './asyncActions';

const initialState: TrackSliceState = {
  tracks: [],
  statusTracks: Status.LOADING,
};

const tracksReducer = createSlice({
  name: 'tracks',
  initialState,
  reducers: {
    setTracks(state, action: PayloadAction<Tracks>) {
      state.tracks = action.payload.tracks;
    },
  },
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
