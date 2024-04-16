import { createContext, useState, useEffect } from 'react';
import { UserService } from '../../services/UserService';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);
    const [selectedUser, setSelectedUser] = useState(null);
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

    const getUserById = async (id) => {
      try {
        const user = await userService.getUserById(id);
        setSelectedUser(user);
      } catch (error) {
        console.error("Error fetching user by id:", error);
      }
    };

    const getUserRoles = async (id) => {
        try {
          const userRolesData = await userService.getUserRoles(id);
          setUserRoles(userRolesData);
        } catch (error) {
          console.error("Error fetching user roles:", error);
        }
      };

      const createUser = async (userData) => {
        try {
          const createdUser = await userService.createUser(userData);
          setUser(createdUser);
          return createdUser;
        } catch (error) {
          console.error('Error al crear el usuario:', error);
          throw error;
        }
      };

    return (
        <UserContext.Provider value={{ users, selectedUser, getUserRoles, userRoles, createUser }}>
          {children}
        </UserContext.Provider>
      );
    };