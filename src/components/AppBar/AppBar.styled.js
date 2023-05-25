import styled from 'styled-components';

export const AppBarStyled = styled.header`
  width: 100%;
  height: 100%;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    width: 800px;
  }
`;
