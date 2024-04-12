package org.factoriaf5.backend.controllers.auth;

public class LoginResponse {
    private String accessToken;
    private String token;

    public LoginResponse() {
    }

    public LoginResponse(String accessToken, String token) {
        this.accessToken = accessToken;
        this.token = token;
    }

    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
