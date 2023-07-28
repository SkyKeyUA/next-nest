/** @format */

import React from 'react';
import { Pause, PlayArrow } from '@mui/icons-material';
import { Grid, IconButton } from '@mui/material';
import styles from './Player.module.scss';
import { ITrack } from '@/types/track';
import { TrackProgress } from '@/components/Track/TrackProgress';
import VolumeUp from '@mui/icons-material/VolumeUp';

export const Player = () => {
  const track: ITrack = {
    _id: '1',
    name: 'Track 1',
    artist: '123',
    text: '123',
    listens: 3,
    picture: '/next.svg',
    audio: '123',
    comments: [],
  };
  const active = false;
  return (
    <div className={styles.root}>
      <IconButton onClick={(e) => e.stopPropagation()}>
        {active ? <Pause /> : <PlayArrow />}
      </IconButton>
      <Grid container direction="column" style={{ width: 200, margin: '0 20px' }}>
        <div>{track.name}</div>
        <div style={{ fontSize: 12, color: 'gray' }}>{track.artist}</div>
      </Grid>
      <TrackProgress left={0} right={100} onChange={() => ({})} />
      <VolumeUp style={{ marginLeft: 'auto' }} />
      <TrackProgress left={0} right={100} onChange={() => ({})} />
    </div>
  );
};
