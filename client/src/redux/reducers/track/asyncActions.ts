/** @format */

import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { setTracks } from './reducer';
import { ITrack } from '@/types/track';
import { TrackService } from '@/services/TrackService';

export const fetchTracks = createAsyncThunk<ITrack[]>(
  'tracks/fetchTracks',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await TrackService.fetchTracks();
      dispatch(setTracks(response));
      return response;
    } catch (e) {
      const err = e as AxiosError;
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  },
);
