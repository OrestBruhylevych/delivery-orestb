import styled from 'styled-components';

export const LoyoutStyled = styled.div`
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin: auto;
  height: 100vh;

  @media screen and (min-width: 480px) {
    width: 480px;
  }
  @media screen and (min-width: 768px) {
    display: flex;

    width: 768px;
  }
  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;

export const StartMessageStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid black;

  div {
    height: 100px;

    background-color: ${p => p.theme.colors.primary};
  }
  h2 {
    width: 350px;
    text-align: center;
  }
`;
