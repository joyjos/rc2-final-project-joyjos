import axios from "axios";

const API_URL = "http://localhost:8080/api/users";

export class UserService {
  async showUsers() {
    const response = await axios.get(`${API_URL}`);
    return response.data;
  }

  async getUserById(id) {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error al mostrar el post:", error);
      throw error;
    }
  }

  async getUserRoles(id) {
    try {
      const response = await axios.get(`${API_URL}/${id}/roles`);
      return response.data;
    } catch (error) {
      console.error("Error al mostrar el role:", error);
      throw error;
    }
  }

  async createUser(user) {
    try {
      const response = await axios.post(`${API_URL}`, user);
      return response.data;
    } catch (error) {
      console.error("Error al crear el user:", error);
      throw error;
    }
  }
}
