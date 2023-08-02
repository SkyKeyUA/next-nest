/** @format */

import MainLayout from '@/layouts/MainLayout';
import { ITrack } from '@/types/track';
import React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { useRouter } from 'next/router';
import Image from 'next/image';
import TextField from '@mui/material/TextField';

const TrackPage = () => {
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
  const router = useRouter();
  return (
    <MainLayout>
      <Button variant={'outlined'} style={{ fontSize: 32 }} onClick={() => router.push('/tracks')}>
        List
      </Button>
      <Grid container style={{ margin: '20px 0' }}>
        <Image src={track.picture} width={200} height={200} alt="picture" />
        <div style={{ marginLeft: 30 }}>
          <h1>Track Name: {track.name}</h1>
          <h1>Artist: {track.artist}</h1>
          <h1>Listens: {track.listens}</h1>
        </div>
      </Grid>
      <h1>Word Track</h1>
      <p>{track.text}</p>
      <h1>Comments</h1>
      <Grid container>
        <TextField style={{ marginBottom: 20 }} label="Your Name" fullWidth />
        <TextField style={{ marginBottom: 20 }} label="Comments" fullWidth multiline rows={4} />
        <Button>Send</Button>
      </Grid>
      <div>
        {track.comments.map((comment) => (
          <div>
            <div>Avtor: {comment.username}</div>
            <div>Comment: {comment.text}</div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default TrackPage;
