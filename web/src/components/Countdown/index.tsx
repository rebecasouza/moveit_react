import React from 'react';

import { Button, Container, Content } from './styles';

const Countdown: React.FC = () => {
  return (
    <Container>
      <Content>
        <div>
          <span>2</span>
          <span>5</span>
        </div>
        <span>:</span>
        <div>
          <span>0</span>
          <span>0</span>
        </div>
      </Content>

      <Button>Iniciar um ciclo</Button>
    </Container>
  );
};

export default Countdown;
