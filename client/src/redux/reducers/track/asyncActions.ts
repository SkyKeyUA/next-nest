/** @format */

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '@/api';
import { AxiosError } from 'axios';
import { setTracks } from './reducer';
import { ITrack } from '@/types/track';

export const fetchTracks = createAsyncThunk<ITrack[]>(
  'tracks/fetchTracks',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await axios.get<ITrack[]>(`${process.env.REACT_APP_API_URL}/tracks`);
      dispatch(setTracks(data));
      return data;
    } catch (e) {
      const err = e as AxiosError;
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  },
);
