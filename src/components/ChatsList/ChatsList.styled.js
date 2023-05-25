import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ChatsListStyled = styled.div`
  height: 100%;
  padding: 16px;
`;

export const ItemLinkStyled = styled(NavLink)`
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  border-bottom: 1px solid ${p => p.theme.colors.primary};
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 10px;
  color: ${p => p.theme.colors.black};
  :visited {
    text-decoration: none;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
  }
  p {
    word-wrap: break-word;
  }

  &.active {
    background-color: ${p => p.theme.colors.primary};
  }
  &:hover,
  &:focus {
    color: blue;
  }
`;
