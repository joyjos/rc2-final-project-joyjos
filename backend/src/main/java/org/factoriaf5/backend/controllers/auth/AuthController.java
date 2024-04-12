package org.factoriaf5.backend.controllers.auth;

import org.factoriaf5.backend.configuration.JwtService;
import org.factoriaf5.backend.persistence.auth.RefreshToken;
import org.factoriaf5.backend.services.auth.RefreshTokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "*")
public class AuthController {
    private final AuthenticationManager authenticationManager;
    private final RefreshTokenService refreshTokenService;

    private final JwtService jwtService;

    public AuthController(@Autowired AuthenticationManager authenticationManager,
                          @Autowired RefreshTokenService refreshTokenService,
                          @Autowired JwtService jwtService) {
        this.authenticationManager = authenticationManager;
        this.refreshTokenService = refreshTokenService;
        this.jwtService = jwtService;
    }

    @PostMapping("/login")
    public LoginResponse loginAndGetToken(@RequestBody LoginRequest request) {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
        if(authentication.isAuthenticated()){
            RefreshToken refreshToken = refreshTokenService.createRefreshToken(request.getUsername());

            LoginResponse loginResponse = new LoginResponse();
            loginResponse.setAccessToken(jwtService.generateToken(request.getUsername()));
            loginResponse.setToken(refreshToken.getToken());
            return loginResponse;
        } else {
            throw new UsernameNotFoundException("invalid user request..!!");
        }
    }
}
