package org.factoriaf5.backend.services.auth;

import java.time.Instant;
import java.util.Optional;
import java.util.UUID;

import org.factoriaf5.backend.persistence.auth.RefreshToken;
import org.factoriaf5.backend.persistence.auth.RefreshTokenRepository;
import org.factoriaf5.backend.persistence.users.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RefreshTokenService {
    private final RefreshTokenRepository refreshTokenRepository;

    private final UserRepository userRepository;

    public RefreshTokenService(
            @Autowired RefreshTokenRepository refreshTokenRepository,
            @Autowired UserRepository userRepository) {
        this.refreshTokenRepository = refreshTokenRepository;
        this.userRepository = userRepository;
    }

    public RefreshToken createRefreshToken(String username) {
        RefreshToken refreshToken = new RefreshToken();
        refreshToken.setUserInfo(userRepository.findByEmail(username));
        refreshToken.setToken(UUID.randomUUID().toString());
        refreshToken.setExpiryDate(Instant.now().plusMillis(600000000));
        return refreshTokenRepository.save(refreshToken);
    }


    public Optional<RefreshToken> findByToken(String token) {
        return refreshTokenRepository.findByToken(token);
    }

    public RefreshToken verifyExpiration(RefreshToken token) {
        if (token.getExpiryDate().compareTo(Instant.now()) < 0) {
            refreshTokenRepository.delete(token);
            throw new RuntimeException(token.getToken() + " Refresh token is expired. Please make a new login..!");
        }
        return token;

    }
}
