import styled from 'styled-components';

export const ChatStyledWrap = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border: 1px solid black;
  @media screen and (min-width: 768px) {
    border: none;
    border-right: 1px solid black;
    border-bottom: 1px solid black;
  }
`;
