import React, { useContext } from 'react';

import {
  Container,
  ActiveChallenge,
  InactiveChallenge,
  Button,
} from './styles';

import LevelUpIcon from '../../assets/icons/level-up.svg';
import BodyIcon from '../../assets/icons/body.svg';
import EyeIcon from '../../assets/icons/eye.svg';
import { ChallengesContext } from '../../contexts/ChallengesContext';

const ChallengeBox: React.FC = () => {
  const { activeChallenge, resetChallenge, completeChalllenge } = useContext(
    ChallengesContext
  );

  return (
    <Container>
      {activeChallenge ? (
        <ActiveChallenge>
          <header>{activeChallenge.amount}</header>

          <main>
            {activeChallenge.type === 'body' ? <BodyIcon /> : <EyeIcon />}
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <Button onClick={resetChallenge} className="fail">
              Falhei
            </Button>
            <Button onClick={completeChalllenge} className="success">
              Completei
            </Button>
          </footer>
        </ActiveChallenge>
      ) : (
        <InactiveChallenge>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <LevelUpIcon />
            Avance levels completando desafios.
          </p>
        </InactiveChallenge>
      )}
    </Container>
  );
};

export default ChallengeBox;
