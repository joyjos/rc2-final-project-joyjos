package org.factoriaf5.backend.controllers.users;

import java.util.UUID;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class UserRequest {
    private UUID id;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
}
