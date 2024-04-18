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

    public RefreshToken createRefreshToken(String email) {
        // Verificar si ya existe un token de actualización para el usuario
        Optional<RefreshToken> existingToken = refreshTokenRepository.findByEmail(email);

        if (existingToken.isPresent()) {
            RefreshToken refreshToken = existingToken.get();
            refreshToken.setToken(UUID.randomUUID().toString());
            refreshToken.setExpiryDate(Instant.now().plusMillis(600000000));
            return refreshTokenRepository.save(refreshToken);
        } else {
            RefreshToken newRefreshToken = new RefreshToken();
            newRefreshToken.setUserInfo(userRepository.findByEmail(email));
            newRefreshToken.setToken(UUID.randomUUID().toString());
            newRefreshToken.setExpiryDate(Instant.now().plusMillis(600000000));
            return refreshTokenRepository.save(newRefreshToken);
        }
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

    public void deleteRefreshToken(String token) {
        Optional<RefreshToken> refreshTokenOptional = refreshTokenRepository.findByToken(token);
        if (refreshTokenOptional.isPresent()) {
            RefreshToken refreshToken = refreshTokenOptional.get();
            refreshTokenRepository.delete(refreshToken);
        } else {
            throw new NotFoundException("Refresh token not found with token: " + token);
        }
    }

}