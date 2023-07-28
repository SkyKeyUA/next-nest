/** @format */

import { ITrack } from '@/types/track';
import React from 'react';
import Card from '@mui/material/Card';
import styles from './TrackItem.module.scss';
import { Grid, IconButton } from '@mui/material';
import { Pause, PlayArrow, Delete } from '@mui/icons-material';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface TrackItemProps {
  track: ITrack;
  active?: boolean;
}

export const TrackItem: React.FC<TrackItemProps> = ({ track, active = false }) => {
  const router = useRouter();
  return (
    <Card className={styles.root} onClick={() => router.push(`/tracks/${track._id}`)}>
      <IconButton>{active ? <Pause /> : <PlayArrow />}</IconButton>
      <Image src={track.picture} width={70} height={70} alt="picture" />
      <Grid container direction="column" style={{ width: 200, margin: '0 20px' }}>
        <div>{track.name}</div>
        <div style={{ fontSize: 12, color: 'gray' }}>{track.artist}</div>
      </Grid>
      {active && <div>02:42 / 03:22</div>}
      <IconButton style={{ marginLeft: 'auto' }}>
        <Delete />
      </IconButton>
    </Card>
  );
};
