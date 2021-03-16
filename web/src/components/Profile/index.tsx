import React, { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import { Container, Content } from './styles';
import LevelIcon from '../../assets/icons/level.svg';

const Profile: React.FC = () => {
  const { level } = useContext(ChallengesContext);
  return (
    <Container>
      <img src="https://github.com/diego3g.png" alt="Diego Fernandes " />

      <Content>
        <strong>Diego Fernandes</strong>
        <p>
          <LevelIcon />
          {level}
        </p>
      </Content>
    </Container>
  );
};

export default Profile;
