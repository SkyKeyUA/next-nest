/** @format */

import { HYDRATE } from 'next-redux-wrapper';
import { AnyAction, PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Status, TrackSliceState } from './type';
import { fetchTracks } from './asyncActions';
import { ITrack } from '@/types/track';

const initialState: TrackSliceState = {
  tracks: [],
  statusTracks: Status.LOADING,
};

const tracksReducer = createSlice({
  name: 'tracks',
  initialState,
  reducers: {
    setTracks(state, action: PayloadAction<ITrack[]>) {
      state.tracks = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: AnyAction) => {
      return {
        ...state,
        ...action.payload,
      };
    });
    builder.addCase(fetchTracks.pending, (state) => {
      state.tracks = [];
      state.statusTracks = Status.LOADING;
    });
    builder.addCase(fetchTracks.fulfilled, (state, action) => {
      state.tracks = action.payload;
      state.statusTracks = Status.SUCCESS;
    });
    builder.addCase(fetchTracks.rejected, (state) => {
      state.tracks = [];
      state.statusTracks = Status.ERROR;
    });
  },
});

export const { setTracks } = tracksReducer.actions;

export default tracksReducer.reducer;
