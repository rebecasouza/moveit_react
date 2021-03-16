import React, { useState, useEffect, useContext } from 'react';
import { CountdownContext } from '../../contexts/CountdownContext';

import { Button, Container, Content } from './styles';

const Countdown: React.FC = () => {
  const {
    minutes,
    seconds,
    isActive,
    hasFinished,
    startTimer,
    resetTimer,
  } = useContext(CountdownContext);

  const [minutesFirstDigit, minutesSecondDigit] = String(minutes)
    .padStart(2, '0')
    .split('');

  const [secondsFirstDigit, secondsSecondDigit] = String(seconds)
    .padStart(2, '0')
    .split('');

  return (
    <Container>
      <Content>
        <div>
          <span>{minutesFirstDigit}</span>
          <span>{minutesSecondDigit}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondsFirstDigit}</span>
          <span>{secondsSecondDigit}</span>
        </div>
      </Content>
      {hasFinished ? (
        <Button disabled onClick={startTimer}>
          Ciclo encerrado
        </Button>
      ) : (
        <>
          {isActive ? (
            <Button className="active" onClick={resetTimer}>
              Abandonar ciclo
            </Button>
          ) : (
            <Button onClick={startTimer}>Iniciar um ciclo</Button>
          )}
        </>
      )}
    </Container>
  );
};

export default Countdown;
