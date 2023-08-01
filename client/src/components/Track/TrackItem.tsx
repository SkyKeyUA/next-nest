/** @format */

import { ITrack } from '@/types/track';
import React from 'react';
import Card from '@mui/material/Card';
import styles from './TrackItem.module.scss';
import { Grid, IconButton } from '@mui/material';
import { Pause, PlayArrow, Delete } from '@mui/icons-material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useAppDispatch } from '@/hooks/redux';
import { playTrack, setActive } from '@/redux/reducers/player/reducer';

interface TrackItemProps {
  track: ITrack;
  active?: boolean;
}

export const TrackItem: React.FC<TrackItemProps> = ({ track, active = false }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const play = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    dispatch(setActive(track));
    dispatch(playTrack());
  };
  return (
    <Card className={styles.root} onClick={() => router.push(`/tracks/${track._id}`)}>
      <IconButton onClick={play}>{active ? <Pause /> : <PlayArrow />}</IconButton>
      <img
        src={`${process.env.REACT_APP_API_URL}/${track.picture}`}
        width={70}
        height={70}
        alt="picture"
      />
      <Grid container direction="column" style={{ width: 200, margin: '0 20px' }}>
        <div>{track.name}</div>
        <div style={{ fontSize: 12, color: 'gray' }}>{track.artist}</div>
      </Grid>
      {active && <div>02:42 / 03:22</div>}
      <IconButton onClick={(e) => e.stopPropagation()} style={{ marginLeft: 'auto' }}>
        <Delete />
      </IconButton>
    </Card>
  );
};
