/** @format */

import { combineReducers } from '@reduxjs/toolkit';
import playerReducer from './player/reducer';

export const rootReducer = combineReducers({
  player: playerReducer,
});
