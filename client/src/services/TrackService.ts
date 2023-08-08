/** @format */

import $api from '@/api';
import { ITrack } from '@/types/track';

class TrackService {
  static async fetchTracks(): Promise<ITrack[]> {
    return $api.get('tracks');
  }
}

export { TrackService };
