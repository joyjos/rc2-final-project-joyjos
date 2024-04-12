import axios from "axios";

const API_URL = "http://localhost:8080/api/posts";

export class PostService {
  async showPosts() {
    try {
      const response = await axios.get(`${API_URL}`);
      return response.data;
    } catch (error) {
      console.error("Error al mostrar todos los posts:", error);
      throw error;
    }
  }

  async getPostById(id) {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error al mostrar el post:", error);
      throw error;
    }
  }

  async createPost(post) {
    try {
      const response = await axios.post(API_URL, post, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error al crear el post:", error);
      throw error;
    }
  }

  async updatePost(id, updatedPost) {
    try {
      const response = await axios.patch(`${API_URL}/${id}`, updatedPost);
      return response.data;
    } catch (error) {
      console.error("Error al modificar el post:", error);
      throw error;
    }
  }

  async deletePost(id) {
    try {
      const response = await axios.delete(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error al eliminar el post:", error);
      throw error;
    }
  }
}
