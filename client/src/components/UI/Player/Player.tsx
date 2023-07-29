/** @format */

import React from 'react';
import { Pause, PlayArrow } from '@mui/icons-material';
import { Grid, IconButton } from '@mui/material';
import styles from './Player.module.scss';
import { ITrack } from '@/types/track';
import { TrackProgress } from '@/components/Track/TrackProgress';
import VolumeUp from '@mui/icons-material/VolumeUp';
import { usePlayerSelector } from '@/redux/reducers/player/selectors';
import { useAppDispatch } from '@/hooks/redux';
import { pauseTrack, playTrack } from '@/redux/reducers/player/reducer';

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
  const dispatch = useAppDispatch();
  const { pause, volume, active, currentTime, duration } = usePlayerSelector();
  const onClickTrack = () => {
    if (pause) {
      dispatch(playTrack());
    } else {
      dispatch(pauseTrack());
    }
  };
  return (
    <div className={styles.root}>
      <IconButton onClick={onClickTrack}>{!pause ? <Pause /> : <PlayArrow />}</IconButton>
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
