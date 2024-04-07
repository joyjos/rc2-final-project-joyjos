import { createContext, useState, useEffect } from 'react';
import { UserService } from '../../services/UserService';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [userRoles, setUserRoles] = useState({});

    const userService = new UserService();
  
    useEffect(() => {
      const fetchUsers = async () => {
        try {
          const usersData = await userService.showUsers();
          setUsers(usersData);
        } catch (error) {
          console.error("Error fetching users:", error);
        }
      };
      fetchUsers();
    }, []);

    const getUserRoles = async (id) => {
        try {
          const userRolesData = await userService.getUserRoles(id);
          setUserRoles(userRolesData);
        } catch (error) {
          console.error("Error fetching user roles:", error);
        }
      };

    return (
        <UserContext.Provider value={{ users, getUserRoles, userRoles }}>
          {children}
        </UserContext.Provider>
      );
    };