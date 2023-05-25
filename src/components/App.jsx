import { useLocalStorage } from '../hooks/useLocalStorage';
import { chatsData } from '../services/fakeAPI';

import Chat from 'pages/Chat/Chat';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import Layout from './Layout/Layout';
import { useMedia } from 'react-use';
import loadGrain from 'task';

const LS_KEY = 'contacts';

export const App = () => {
  const [chats, setChats] = useLocalStorage(LS_KEY, chatsData);
  const isMobile = useMedia('(max-width: 768px)');

  if (isMobile) {
    return (
      <>
        <Routes>
          <Route path="/" element={<Layout chats={chats} />} />
          <Route
            path="/:id"
            element={<Chat chats={chats} setChats={setChats} />}
          />
          <Route path="*" element={<div>NotFound</div>} />
        </Routes>
        <GlobalStyle />
      </>
    );
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout chats={chats} />}>
          <Route
            path="/:id"
            element={<Chat chats={chats} setChats={setChats} />}
          />
        </Route>
        <Route path="*" element={<div>NotFound</div>} />
      </Routes>
      <GlobalStyle />
    </>
  );
};






// loadGrain([4, 1, 3]) // 2
// // loadGrain([2, 1, 5, 2, 7, 4, 10]) // 7
// // loadGrain([2, 0, 1, 5, 2, 7]) // 6
// // loadGrain([2, 4, 2]) // 0
// // loadGrain([7, 4]) // 0
// // loadGrain([]) // 0
