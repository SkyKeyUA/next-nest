/** @format */

import React from 'react';
import Container from '@mui/material/Container';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';

interface StepWrapperProps {
  activeStep: number;
  children: React.ReactNode;
}
const steps = ['Track information', 'Upload image', 'Upload track'];
export const StepWrapper: React.FC<StepWrapperProps> = ({ activeStep, children }) => {
  return (
    <Container>
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => (
          <Step key={index} completed={activeStep > index}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Grid container justifyContent="center" style={{ margin: '70px 0px', height: 270 }}>
        <Card style={{ width: 600 }}>{children}</Card>
      </Grid>
    </Container>
  );
};
