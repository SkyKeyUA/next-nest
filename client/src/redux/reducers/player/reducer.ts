/** @format */

import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { PlayerActionTypes, PlayerSliceState } from './type';
import { ITrack } from '@/types/track';

const initialState: PlayerSliceState = {
  active: null,
  volume: 50,
  duration: 0,
  currentTime: 0,
  pause: true,
  statusPlayer: PlayerActionTypes.PAUSE,
};

const playerReducer = createSlice({
  name: 'player',
  initialState,
  reducers: {
    playTrack(state) {
      state.pause = false;
      state.statusPlayer = PlayerActionTypes.PLAY;
    },
    pauseTrack(state) {
      state.pause = true;
      state.statusPlayer = PlayerActionTypes.PAUSE;
    },
    setActive(state, action: PayloadAction<null | ITrack>) {
      state.active = action.payload;
      state.duration = 0;
      state.currentTime = 0;
      state.statusPlayer = PlayerActionTypes.SET_ACTIVE;
    },
    setDuration(state, action: PayloadAction<number>) {
      state.duration = action.payload;
      state.statusPlayer = PlayerActionTypes.SET_DURATION;
    },
    setCurrentTime(state, action: PayloadAction<number>) {
      state.currentTime = action.payload;
      state.statusPlayer = PlayerActionTypes.SET_CURRENT_TIME;
    },
    setVolume(state, action: PayloadAction<number>) {
      state.volume = action.payload;
      state.statusPlayer = PlayerActionTypes.SET_VOLUME;
    },
  },
});

export const { playTrack, pauseTrack, setActive, setDuration, setCurrentTime, setVolume } =
  playerReducer.actions;

export default playerReducer.reducer;
