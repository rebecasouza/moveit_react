import React from 'react';
import Head from 'next/head';

import ExperienceBar from '../components/ExperienceBar';
import Profile from '../components/Profile';
import CompletedChallenges from '../components/CompletedChallenges';

import { Container, Section } from '../styles/Pages/Home';
const Home: React.FC = () => {
  return (
    <Container>
      <ExperienceBar />
      <Section>
        <div>
          <Profile />
          <CompletedChallenges />
        </div>
        <div></div>
      </Section>
    </Container>
  );
};

export default Home;
