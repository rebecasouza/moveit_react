import React, { useContext } from 'react';
import { Header } from './styles';
import { ChallengesContext } from '../../contexts/ChallengesContext';

const ExperienceBar: React.FC = () => {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext
  );

  const percentToNextLevel = Math.round(
    (currentExperience * 100) / experienceToNextLevel
  );

  return (
    <Header>
      <span>{currentExperience} xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />

        <span style={{ left: `${percentToNextLevel}%` }}>300 xp</span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </Header>
  );
};

export default ExperienceBar;
