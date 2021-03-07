import React from 'react';
import { Container, Content } from './styles';

import LevelIcon from '../../assets/icons/level.svg';
const Profile: React.FC = () => {
  return (
    <Container>
      <img src="https://github.com/diego3g.png" alt="Diego Fernandes " />

      <Content>
        <strong>Diego Fernandes</strong>
        <p>
          <LevelIcon />
          Level 1
        </p>
      </Content>
    </Container>
  );
};

export default Profile;
