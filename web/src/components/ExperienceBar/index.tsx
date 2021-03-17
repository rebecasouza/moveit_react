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
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />

        <span style={{ left: `${percentToNextLevel}%` }}>
          {' '}
          {currentExperience} xp
        </span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </Header>
  );
};

export default ExperienceBar;
