package org.factoriaf5.backend.controllers.users;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.factoriaf5.backend.persistence.roles.Role;
import org.factoriaf5.backend.persistence.users.User;
import org.factoriaf5.backend.services.RoleService;
import org.factoriaf5.backend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private RoleService roleService;

    @GetMapping
    public List<UserResponse> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserResponse> getUserById(@PathVariable UUID id) {
        Optional<UserResponse> optionalUserResponse = userService.getUserById(id);

        if (optionalUserResponse.isPresent()) {
            return ResponseEntity.ok(optionalUserResponse.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/{id}/roles")
    public List<Role> getRolesByUserId(@PathVariable UUID id) {
        return roleService.getRolesByUserId(id);
    }

    @PostMapping
    public User createUser(@RequestBody UserRequest userRequest) {
        return userService.createUser(userRequest);
    }
}
