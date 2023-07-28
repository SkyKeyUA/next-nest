/** @format */

import Navbar from '@/components/Navbar';
import React from 'react';
import Container from '@mui/material/Container';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <Container style={{ padding: '90px 0' }}>{children}</Container>
    </div>
  );
};

export default MainLayout;
