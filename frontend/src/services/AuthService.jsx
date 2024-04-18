import axios from 'axios';

const BASE_URL = 'http://localhost:8080/auth';

export class AuthService {
  login(email, password) {
    return axios.post(`${BASE_URL}/login`, { email, password });
  }

  logout(refreshToken) {
    return axios.post(`${BASE_URL}/logout`, {}, {
      headers: {
        'Authorization': `Bearer ${refreshToken}`
      }
    });
  }

  refreshToken(refreshToken) {
    return axios.post(`${BASE_URL}/refresh-token`, {}, {
      headers: {
        'Authorization': `Bearer ${refreshToken}`
      }
    });
  }
}
