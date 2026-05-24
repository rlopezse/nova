import { jwtDecode } from 'jwt-decode';

const isLoggedIn = (): boolean => {
  const token = localStorage.getItem('token');

  if (!token) return false;

  try {
    const { exp } = jwtDecode<{ exp: number }>(token);
    return Date.now() < exp * 1000;
  } catch {
    return false;
  }
}

export default isLoggedIn;
