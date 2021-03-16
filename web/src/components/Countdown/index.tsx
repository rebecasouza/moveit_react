import React, { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import { Button, Container, Content } from './styles';

let timerTimeout: NodeJS.Timeout;

const Countdown: React.FC = () => {
  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minutesFirstDigit, minutesSecondDigit] = String(minutes)
    .padStart(2, '0')
    .split('');

  const [secondsFirstDigit, secondsSecondDigit] = String(seconds)
    .padStart(2, '0')
    .split('');

  function startTimer() {
    setIsActive(true);
  }

  function resetTimer() {
    clearTimeout(timerTimeout);
    setIsActive(false);
    setTime(0.05 * 60);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      timerTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);

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
