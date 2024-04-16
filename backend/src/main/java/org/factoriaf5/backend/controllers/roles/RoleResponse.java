package org.factoriaf5.backend.controllers.roles;

import java.util.UUID;

import org.factoriaf5.backend.persistence.roles.Role;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class RoleResponse {
    private UUID id;
    private String name;

    public RoleResponse(Role role) {
        this.id = role.getId();
        this.name = role.getName();
    }
}
