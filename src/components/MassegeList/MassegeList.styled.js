import styled from 'styled-components';

export const MessageListStyled = styled.div`
  height: 100%;
`;

export const MassegeItemStyledFromUser = styled.li`
  margin-bottom: 10px;
  p.message {
    margin-left: auto;
    border-radius: 10px;
    padding: 10px;
    background-color: ${p => p.theme.colors.primary};
    margin-left: auto;
    max-width: 240px;
    word-wrap: break-word;
  }

  p.date {
    max-width: 130px;
    margin-left: auto;
  }
`;

export const MassegeItemStyledNotFromUser = styled.li`
  margin-bottom: 10px;
  p.message {
    word-wrap: break-word;
    border-radius: 10px;
    padding: 10px;
    max-width: 240px;

    margin-right: auto;
    background-color: ${p => p.theme.colors.accent};
  }

  p.date {
    margin-right: auto;
  }
`;
