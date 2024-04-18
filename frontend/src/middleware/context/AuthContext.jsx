import { createContext, useState, useEffect } from 'react';
import { AuthService } from '../../services/AuthService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const authService = new AuthService();

  useEffect(() => {
    const token = localStorage.getItem('refreshToken');
    if (token) {
      authService.refreshToken(token).then(response => {
        setUser(response.data.email);
        setIsAuthenticated(true);
        setIsLoading(false);
      }).catch(() => {
        localStorage.removeItem('refreshToken');
        setIsAuthenticated(false);
        setIsLoading(false);
      });
    } else {
      setIsLoading(false);
    }
  }, []);

  const login = async (email, password) => {
    try {
      const response = await authService.login(email, password);
      const token = response.data.token;
      localStorage.setItem('refreshToken', token);
      setUser(email);
      setIsAuthenticated(true);
    } catch (error) {
      console.error(error);
    }
  };

  // const logout = async () => {
  //   try {
  //     await authService.logout(localStorage.getItem('refreshToken'));
  //     localStorage.removeItem('refreshToken');
  //     setUser(null);
  //     setIsAuthenticated(false);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const logout = async () => {
    localStorage.removeItem('refreshToken');
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
