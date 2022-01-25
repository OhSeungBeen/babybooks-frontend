import { Container } from '@mui/material';
import Footer from 'components/base/footer';
import Header from 'components/base/header';
import Event from 'components/home/event';
import Exhibition from 'components/home/exhibition';
import Recommand from 'components/home/recommand';
import RecommandMonth from 'components/home/recommandMonth';
import Slider from 'components/home/slider';
import HomeLayout from 'components/layout/home';
import React from 'react';

const HomePage = () => {
  return (
    <>
      <Header />
      <Slider />
      <Container fixed maxWidth="lg">
        <HomeLayout>
          <RecommandMonth />
          <RecommandMonth />
          <Recommand />
          <Exhibition />
          <Event />
        </HomeLayout>
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;
