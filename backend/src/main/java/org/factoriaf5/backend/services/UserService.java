package org.factoriaf5.backend.services;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.factoriaf5.backend.controllers.users.UserRequest;
import org.factoriaf5.backend.controllers.users.UserResponse;
import org.factoriaf5.backend.persistence.roles.Role;
import org.factoriaf5.backend.persistence.roles.RoleRepository;
import org.factoriaf5.backend.persistence.users.User;
import org.factoriaf5.backend.persistence.users.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import jakarta.persistence.EntityNotFoundException;

@Service
public class UserService {
    
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public List<UserResponse> getAllUsers() {
        List<UserResponse> users = new ArrayList<UserResponse>();
        List<User> usersInDataBasePosts = userRepository.findAll();
        for(User user: usersInDataBasePosts) {
            users.add(new UserResponse(user.getId(), user.getFirstName(), user.getLastName(), user.getEmail()));
        }
        return users;
    }

    public Optional<UserResponse> getUserById(UUID id) {
        Optional<User> userOpcional = userRepository.findById(id);
        if(userOpcional.isPresent()) {
            User user = userOpcional.get();
            return Optional.of(new UserResponse(user.getId(), user.getFirstName(), user.getLastName(), user.getEmail()));
        }
        return Optional.empty();
    }

    public User createUser(UserRequest userRequest) {
        User user = new User();
        user.setFirstName(userRequest.getFirstName());
        user.setLastName(userRequest.getLastName());
        user.setEmail(userRequest.getEmail());
        user.setPassword(passwordEncoder.encode(userRequest.getPassword()));

        // Asignar automáticamente el rol USER a los nuevos usuarios
        Role defaultRole = roleRepository.findRoleByName("ROLE_USER").orElseThrow(() -> new EntityNotFoundException("Role not found with name: ROLE_USER"));
        user.setRoles(Collections.singletonList(defaultRole));

        // Verificar si el usuario que se está creando eres tú para asignar el rol ROLE_ADMIN
        if (user.getEmail().equals("enjoyjos@hotmail.com")) {
            Role adminRole = roleRepository.findRoleByName("ROLE_ADMIN").orElseThrow(() -> new EntityNotFoundException("Role not found with name: ROLE_ADMIN"));
            user.getRoles().add(adminRole);
        }

        return userRepository.save(user);
    }
}
