import { Box } from '../Box/Box';
import { ChatsListStyled, ItemLinkStyled } from './ChatsList.styled';
import { useScrollBar } from 'hooks/useScrollBar';
import { useRef } from 'react';

export default function ChatsList({ chats }) {
  const chatWrapper = useRef(null);

  useScrollBar(chatWrapper);

  return (
    <ChatsListStyled ref={chatWrapper}>
      <Box as="ul" display="flex" flexDirection="column">
        {chats.map(({ id, name, message, photoUrl }) => {
          const { text, date } = message[message.length - 1];

          return (
            <ItemLinkStyled to={id} key={id}>
              <Box display="flex">
                <img src={photoUrl} alt={name} width="40px" />
                <Box width="150px">
                  <h2>{name}</h2>
                  <p>{text}</p>
                </Box>
              </Box>

              <Box as="p" width="120px">
                {date.dateChat}
              </Box>
            </ItemLinkStyled>
          );
        })}
      </Box>
    </ChatsListStyled>
  );
}
