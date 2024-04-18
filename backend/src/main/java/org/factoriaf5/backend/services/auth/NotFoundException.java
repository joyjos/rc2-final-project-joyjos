package org.factoriaf5.backend.services.auth;

public class NotFoundException extends RuntimeException {
    public NotFoundException(String message) {
        super(message);
    }
}