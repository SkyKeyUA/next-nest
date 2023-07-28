/** @format */

import React from 'react';
import { StepWrapper } from '@/components/StepWrapper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { FileUpload } from '../FileUpload';
import Button from '@mui/material/Button';

interface TrackFromProps {
  activeStep: number;
}

export const TrackForm: React.FC<TrackFromProps> = ({ activeStep }) => {
  const [picture, setPicture] = React.useState(null);
  const [audio, setAudio] = React.useState(null);

  return (
    <StepWrapper activeStep={activeStep}>
      {activeStep === 0 && (
        <Grid container direction={'column'} style={{ padding: 20 }}>
          <TextField style={{ marginTop: 10 }} label={'Track name'} />
          <TextField style={{ marginTop: 10 }} label={'Avtor name'} />
          <TextField style={{ marginTop: 10 }} label={'Text song'} multiline rows={3} />
        </Grid>
      )}
      {activeStep === 1 && (
        <FileUpload setFile={setPicture} accept="image/*">
          <Button>Upload Image</Button>
        </FileUpload>
      )}
      {activeStep === 2 && (
        <FileUpload setFile={setAudio} accept="audio/*">
          <Button>Upload Audio</Button>
        </FileUpload>
      )}
      {activeStep === 3 && <h1>Done</h1>}
    </StepWrapper>
  );
};
