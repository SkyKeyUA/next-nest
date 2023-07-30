/** @format */

import MainLayout from '@/layouts/MainLayout';
import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router';
import { ITrack } from '@/types/track';
import { TrackList } from '@/components/Track/TrackList';
import { useAppDispatch } from '@/hooks/redux';
import { usePlayerSelector } from '@/redux/reducers/player/selectors';

const Index = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const {} = usePlayerSelector();
  const tracks: ITrack[] = [
    {
      _id: '1',
      name: 'Track 1',
      artist: '123',
      text: '123',
      listens: 3,
      picture: '/next.svg',
      audio: 'http://localhost:5000/audio/8c0daf8e-28e8-4a02-af30-dacb4848517d.wav',
      comments: [],
    },
    {
      _id: '2',
      name: 'Track 2',
      artist: '2',
      text: '2',
      listens: 3,
      picture: '/next.svg',
      audio: 'http://localhost:5000/audio/8c0daf8e-28e8-4a02-af30-dacb4848517d.wav',
      comments: [],
    },
    {
      _id: '3',
      name: 'Track 3',
      artist: '3',
      text: '3',
      listens: 3,
      picture: '/next.svg',
      audio: 'http://localhost:5000/audio/8c0daf8e-28e8-4a02-af30-dacb4848517d.wav',
      comments: [],
    },
  ];
  return (
    <MainLayout>
      <Grid container justifyContent="center">
        <Card style={{ width: 900 }}>
          <Box p={3}>
            <Grid container justifyContent="space-between">
              <h1>Track List</h1>
              <Button onClick={() => router.push('/tracks/create')}>Upload</Button>
            </Grid>
          </Box>
          <TrackList tracks={tracks} />
        </Card>
      </Grid>
    </MainLayout>
  );
};

export default Index;
