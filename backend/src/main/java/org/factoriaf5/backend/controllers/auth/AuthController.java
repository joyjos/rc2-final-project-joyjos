package org.factoriaf5.backend.controllers.auth;

import org.factoriaf5.backend.configuration.JwtService;
import org.factoriaf5.backend.persistence.auth.RefreshToken;
import org.factoriaf5.backend.services.auth.RefreshTokenService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {
    private final AuthenticationManager authenticationManager;
    private final RefreshTokenService refreshTokenService;
    private final JwtService jwtService;
    private static final Logger logger = LoggerFactory.getLogger(AuthController.class);

    public AuthController(@Autowired AuthenticationManager authenticationManager,
                          @Autowired RefreshTokenService refreshTokenService,
                          @Autowired JwtService jwtService) {
        this.authenticationManager = authenticationManager;
        this.refreshTokenService = refreshTokenService;
        this.jwtService = jwtService;
    }

    @PostMapping("/login")
    public LoginResponse loginAndGetToken(@RequestBody LoginRequest request) {
        logger.debug("Received login request for email: {}", request.getEmail());
        logger.debug("Received login request for password: {}", request.getPassword());
        // Agregar más registros de depuración según sea necesario
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        if(authentication.isAuthenticated()){
            RefreshToken refreshToken = refreshTokenService.createRefreshToken(request.getEmail());
            logger.debug("Login successful for email: {}", request.getEmail());

            LoginResponse loginResponse = new LoginResponse();
            loginResponse.setAccessToken(jwtService.generateToken(request.getEmail()));
            loginResponse.setToken(refreshToken.getToken());
            return loginResponse;
        } else {
            logger.debug("Login failed for email: {}", request.getEmail());
            throw new UsernameNotFoundException("Invalid user request..!!");
        }
    }
}
