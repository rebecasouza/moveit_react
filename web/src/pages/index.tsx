import React from 'react';

import ExperienceBar from '../components/ExperienceBar';
import Profile from '../components/Profile';
import CompletedChallenges from '../components/CompletedChallenges';
import Countdown from '../components/Countdown';

import { Container, Section } from '../styles/Pages/Home';

const Home: React.FC = () => {
  return (
    <Container>
      <ExperienceBar />
      <Section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div></div>
      </Section>
    </Container>
  );
};

export default Home;
