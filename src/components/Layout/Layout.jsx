import AppBar from 'components/AppBar/AppBar';
import { Outlet, useParams } from 'react-router-dom';
import { useMedia } from 'react-use';
import { LoyoutStyled, StartMessageStyled } from './Layout.styled';

export default function Layout({ chats }) {
  const { id } = useParams();
  const isMobile = useMedia('(max-width: 768px)');

  return (
    <LoyoutStyled>
      <>
        <AppBar chats={chats} />
        {!isMobile && !id && (
          <StartMessageStyled>
            <div></div>
            <h2>Select a chat to start a conversation.</h2>
            <div></div>
          </StartMessageStyled>
        )}
        <Outlet />
      </>
    </LoyoutStyled>
  );
}
