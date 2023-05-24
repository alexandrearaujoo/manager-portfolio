import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';

interface User {
  sub: string;
  email: string;
  name: string;
}

export const getUser = () => {
  const token = Cookies.get('userToken');

  const user: User = jwtDecode(token as string);

  return user;
};
