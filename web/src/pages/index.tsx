import React from 'react';

import ExperienceBar from '../components/ExperienceBar';
import Profile from '../components/Profile';
import CompletedChallenges from '../components/CompletedChallenges';
import Countdown from '../components/Countdown';
import ChallengeBox from '../components/ChallengeBox';

import { Container, Section } from '../styles/Pages/Home';
import { CountdownProvider } from '../contexts/CountdownContext';

const Home: React.FC = () => {
  return (
    <Container>
      <ExperienceBar />
      <Section>
        <CountdownProvider>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </CountdownProvider>
      </Section>
    </Container>
  );
};

export default Home;
