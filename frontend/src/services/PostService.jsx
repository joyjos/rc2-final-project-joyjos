import axios from 'axios';

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

    async createPost() {
        const response = await axios.post(`${API_URL}`, post);
        return response.data;
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