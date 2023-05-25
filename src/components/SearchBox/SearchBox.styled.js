import styled from 'styled-components';
import { ImSearch } from 'react-icons/im';

export const SearchIcon = styled(ImSearch)`
  padding: 5px;
  display: inline-block;
  width: 18px;
  height: 18px;
  border: 0;

  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;
`;

export const SearchBoxStyled = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 20px;
  padding: 4px;
  margin-top: 10px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;

  input {
    display: inline-block;

    width: 100%;
    font: inherit;
    font-size: 20px;
    border: none;
    outline: none;

    ::placeholder {
      font: inherit;
      font-size: 18px;
    }
  }
`;
