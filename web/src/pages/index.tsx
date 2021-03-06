import React from 'react';
import Head from 'next/head';

import ExperienceBar from '../components/ExperienceBar';

const Home: React.FC = () => {
  return (
    <div className="container">
      <ExperienceBar />
    </div>
  );
};

export default Home;
