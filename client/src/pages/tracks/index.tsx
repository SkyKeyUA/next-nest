/** @format */

import MainLayout from '@/layouts/MainLayout';
import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router';
import { TrackList } from '@/components/Track/TrackList';
import { useAppDispatch } from '@/hooks/redux';
import { fetchTracks } from '@/redux/reducers/track/asyncActions';
import { useTrackSelector } from '@/redux/reducers/track/selectors';

const Index = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { tracks, statusTracks } = useTrackSelector();
  React.useEffect(() => {
    dispatch(fetchTracks());
  }, []);

  if (statusTracks === 'loading') {
    return <div>Loading...</div>;
  }
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
