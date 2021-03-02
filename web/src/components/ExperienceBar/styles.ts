import styled from "styled-components";
import colors from "../../assets/styles/colors";

export const Header = styled.header`
  display: flex;
  align-items: center;

  & > span {
    font-size: 1rem;
  }

  & > div {
    flex: 1;
    height: 4px;
    border-radius: 4px;
    background: ${colors.grayLine};
    margin: 0 1.5rem;
    position: relative;

    div {
      height: 4px;
      border-radius: 4px;
      background: ${colors.green};
    }

    span {
      position: absolute;
      top: 12px;
      transform: translateX(-50%);
    }
  }
`;
