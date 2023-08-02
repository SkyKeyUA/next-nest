/** @format */

import MainLayout from '@/layouts/MainLayout';
import React from 'react';
import { Grid, Button } from '@mui/material';
import { TrackForm } from '@/components/Track/TrackForm';
import { useInput } from '@/hooks/useInput';
import axios from '@/api';
import { useRouter } from 'next/router';

const Create = () => {
  const router = useRouter();
  const [activeStep, setActiveStep] = React.useState(0);
  const [picture, setPicture] = React.useState<File | null>(null);
  const [audio, setAudio] = React.useState<File | null>(null);
  const name = useInput('');
  const artist = useInput('');
  const text = useInput('');
  const next = () => {
    if (activeStep !== 2) {
      setActiveStep((prev) => prev + 1);
    } else {
      const formData = new FormData();
      formData.append('name', name.value);
      formData.append('text', text.value);
      formData.append('artist', artist.value);
      if (picture) {
        formData.append('picture', picture);
      }
      if (audio) {
        formData.append('audio', audio);
      }
      axios
        .post(`${process.env.REACT_APP_API_URL}/tracks`, formData)
        .then((res) => router.push('/tracks'))
        .catch((e) => console.log(e));
    }
  };
  const back = () => {
    setActiveStep((prev) => prev - 1);
  };
  return (
    <MainLayout>
      <TrackForm
        text={text}
        artist={artist}
        name={name}
        setAudio={setAudio}
        setPicture={setPicture}
        activeStep={activeStep}
      />
      <Grid container justifyContent="space-between">
        <Button disabled={activeStep === 0} onClick={back}>
          Back
        </Button>
        <Button onClick={next}>Next</Button>
      </Grid>
    </MainLayout>
  );
};

export default Create;
