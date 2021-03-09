import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;

  background: ${props => props.theme.colors.white};
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  padding: 1.5rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  div.inactiveChallenge {
    display: flex;
    flex-direction: column;
    align-items: center;

    strong {
      font-size: 1.5rem;
      font-weight: 500;
      line-height: 1.4;
    }

    p {
      display: flex;
      flex-direction: column;
      align-items: center;
      line-height: 1.4;
      max-width: 70%;
      margin-top: 3rem;

      svg {
        margin-bottom: 1rem;
      }
    }
  }
`;
