/** @format */

import { combineReducers } from '@reduxjs/toolkit';
import playerReducer from './player/reducer';
import tracksReducer from './track/reducer';

export const rootReducer = combineReducers({
  player: playerReducer,
  tracks: tracksReducer,
});
