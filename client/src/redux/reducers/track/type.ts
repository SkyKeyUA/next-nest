/** @format */

import { ITrack } from '@/types/track';

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface Tracks {
  tracks: ITrack[];
}
export interface TrackSliceState {
  tracks: ITrack[];
  statusTracks: Status;
}
