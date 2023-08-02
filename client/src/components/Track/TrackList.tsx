/** @format */

import { ITrack } from '@/types/track';
import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { TrackItem } from './TrackItem';

interface TrackListProps {
  tracks: ITrack[];
}

export const TrackList: React.FC<TrackListProps> = ({ tracks }) => {
  return (
    <Grid container direction="column">
      <Box p={2}>
        {tracks && tracks.map((track) => <TrackItem key={track._id} track={track} />)}
      </Box>
    </Grid>
  );
};
