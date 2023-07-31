/** @format */

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '@/api';
import { Tracks } from './type';

export const fetchTracks = createAsyncThunk<Tracks>('tracks/fetchTracks', async () => {
  const { data } = await axios.get<Tracks>(`${process.env.REACT_APP_API_URL}/tracks`);
  return data;
});
