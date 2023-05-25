import { Box } from 'components/Box/Box';
import ChatsList from 'components/ChatsList/ChatsList';
import { SearchBox } from 'components/SearchBox/SearchBox';
import User from 'components/User/User';
import { useState } from 'react';
import { AppBarStyled } from './AppBar.styled';

export default function AppBar({ chats }) {
  const [filter, setFilter] = useState('');

  const getVisibleChats = () => {
    const normalizedFilter = filter.toLowerCase().trim();
    const visibleChats = chats.filter(chat =>
      chat.name.toLowerCase().includes(normalizedFilter)
    );

    return visibleChats;
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  return (
    <AppBarStyled>
      <Box bg="primary" p={4}>
        <User
          photoUrl={
            'https://messukeskus.s3.eu-central-1.amazonaws.com/wp-content/uploads/2022/06/21103322/User.png'
          }
        />
        <SearchBox value={filter} onChange={changeFilter} />
      </Box>
      <Box as="h2" color="blue" p={4}>
        Chats
      </Box>
      <ChatsList chats={getVisibleChats()} />
    </AppBarStyled>
  );
}
