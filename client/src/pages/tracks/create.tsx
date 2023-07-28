/** @format */

import MainLayout from '@/layouts/MainLayout';
import React from 'react';
import { Grid, Button } from '@mui/material';
import { TrackForm } from '@/components/Track/TrackForm';

const Create = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const next = () => {
    if (activeStep !== 3) {
      setActiveStep((prev) => prev + 1);
    }
  };
  const back = () => {
    setActiveStep((prev) => prev - 1);
  };
  return (
    <MainLayout>
      <TrackForm activeStep={activeStep} />
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
