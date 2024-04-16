package org.factoriaf5.backend.controllers.users;

import java.util.List;
import java.util.UUID;

import org.factoriaf5.backend.controllers.roles.RoleRequest;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserRequest {
    private UUID id;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private List<RoleRequest> roles;
}
