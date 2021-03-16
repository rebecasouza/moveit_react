import React from 'react';

import {
  Container,
  ActiveChallenge,
  InactiveChallenge,
  Button,
} from './styles';

import LevelUpIcon from '../../assets/icons/level-up.svg';
import BodyIcon from '../../assets/icons/body.svg';

const ChallengeBox: React.FC = () => {
  const hasActiveChallenge = true;
  return (
    <Container>
      {hasActiveChallenge ? (
        <ActiveChallenge>
          <header>Ganhe 400 xp</header>

          <main>
            <BodyIcon />
            <strong>Novo desafio</strong>
            <p>Levante e faça uma caminhada de 3 minutos.</p>
          </main>

          <footer>
            <Button className="fail">Falhei</Button>
            <Button className="success">Completei</Button>
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
