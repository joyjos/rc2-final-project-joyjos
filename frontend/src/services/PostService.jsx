import axios from 'axios';

export class PostService {
    async showPosts() {
        const response = await axios.get('http://localhost:8080/api/posts');
        return response.data;
    }
}