import { FiUser } from 'react-icons/fi';
import { UserStyled } from './User.styled';

export default function User({ photoUrl, name }) {
  return (
    <>
      {photoUrl ? (
        <UserStyled>
          <img src={photoUrl} alt="user" width="50px" height="50px" />
          {name && <h2>{name}</h2>}
        </UserStyled>
      ) : (
        <FiUser />
      )}
    </>
  );
}
