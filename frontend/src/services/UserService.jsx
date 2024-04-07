import axios from "axios";

const API_URL = "http://localhost:8080/api/users";

export class UserService {

  async showUsers() {
    const response = await axios.get(`${API_URL}`);
    return response.data;
  }

  async getUserRoles(id) {
    try {
      const response = await axios.get(`${API_URL}/${id}/roles`);
      return response.data;
    } catch (error) {
      console.error("Error en la llamada al servicio:", error);
      throw error;
    }
  }
}
