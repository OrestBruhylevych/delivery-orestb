import { Box } from 'components/Box/Box';
import {
  MassegeItemStyledFromUser,
  MassegeItemStyledNotFromUser,
  MessageListStyled,
} from './MassegeList.styled';
import { useScrollBar } from 'hooks/useScrollBar';
import { useRef } from 'react';

export default function MassegeList({ message }) {
  const messageWrapper = useRef(null);

  useScrollBar(messageWrapper);

  return (
    <MessageListStyled ref={messageWrapper}>
      <Box as="ul" p={4}>
        {message.map(({ text, date, id, fromUser }) => {
          if (fromUser === true) {
            return (
              <MassegeItemStyledFromUser key={id}>
                <p className="message">{text}</p>
                <p className="date">{date.dateMessage}</p>
              </MassegeItemStyledFromUser>
            );
          }

          return (
            <MassegeItemStyledNotFromUser key={id}>
              <p className="message">{text}</p>
              <p className="date">{date.dateMessage}</p>
            </MassegeItemStyledNotFromUser>
          );
        })}
      </Box>
    </MessageListStyled>
  );
}
