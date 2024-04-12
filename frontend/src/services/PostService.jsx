import axios from "axios";

const API_URL = "http://localhost:8080/api/posts";

export class PostService {
  async showPosts() {
    const response = await axios.get(`${API_URL}`);
    return response.data;
  }

  async getPostById(id) {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  }

  async createPost(post) {
    try {
      const response = await axios.post(API_URL, post, {
        headers: {
          'Content-Type': 'multipart/form-data' // Establece el encabezado correcto para enviar archivos
        }
      });
      return response.data;
    } catch (error) {
      console.error("Error al crear el post:", error);
      throw error;
    }
  }

  async updatePost(id, updatedPost) {
    const response = await axios.patch(`${API_URL}`, updatedPost);
    return response.data;
  }

  async deletePost(id) {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  }
}
