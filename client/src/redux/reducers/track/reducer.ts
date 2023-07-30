/** @format */

import { createSlice } from '@reduxjs/toolkit';
import { TrackSliceState } from './type';

const initialState: TrackSliceState = {
  tracks: [],
};

const tracksReducer = createSlice({
  name: 'tracks',
  initialState,
  reducers: {
    extraReducers: (builder) => {},
  },
});

export const {} = tracksReducer.actions;

export default tracksReducer.reducer;
