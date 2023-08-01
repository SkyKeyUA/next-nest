/** @format */

import React from 'react';
import { StepWrapper } from '@/components/StepWrapper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { FileUpload } from '../FileUpload';
import Button from '@mui/material/Button';
import { useInput } from '@/hooks/useInput';

interface TrackFromProps {
  activeStep: number;
  setPicture: (file: File | null) => void;
  setAudio: (file: File | null) => void;
  name: ReturnType<typeof useInput>;
  artist: ReturnType<typeof useInput>;
  text: ReturnType<typeof useInput>;
}

export const TrackForm: React.FC<TrackFromProps> = ({
  activeStep,
  setPicture,
  setAudio,
  name,
  artist,
  text,
}) => {
  return (
    <StepWrapper activeStep={activeStep}>
      {activeStep === 0 && (
        <Grid container direction={'column'} style={{ padding: 20 }}>
          <TextField {...name} style={{ marginTop: 10 }} label={'Track name'} />
          <TextField {...artist} style={{ marginTop: 10 }} label={'Avtor name'} />
          <TextField {...text} style={{ marginTop: 10 }} label={'Text song'} multiline rows={3} />
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
    </StepWrapper>
  );
};
