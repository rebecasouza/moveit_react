import React, { useContext } from 'react';

import { Container, Overlay } from './styles';
import CloseIcon from '../../assets/icons/close.svg';
import { ChallengesContext } from '../../contexts/ChallengesContext';

const LevelUpModal: React.FC = () => {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);
  return (
    <Overlay>
      <Container>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <button onClick={closeLevelUpModal}>
          <CloseIcon />
        </button>
      </Container>
    </Overlay>
  );
};

export default LevelUpModal;
