import React from 'react';

import { Container } from './styles';

import LevelUpIcon from '../../assets/icons/level-up.svg';

const ChallengeBox: React.FC = () => {
  return (
    <Container>
      <div className="inactiveChallenge">
        <strong>Finalize um ciclo para receber um desafio</strong>
        <p>
          <LevelUpIcon />
          Avance levels completando desafios.
        </p>
      </div>
    </Container>
  );
};

export default ChallengeBox;
