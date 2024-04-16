package org.factoriaf5.backend.services;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.factoriaf5.backend.persistence.roles.Role;
import org.factoriaf5.backend.persistence.roles.RoleRepository;
import org.factoriaf5.backend.persistence.users.User;
import org.factoriaf5.backend.persistence.users.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.persistence.EntityNotFoundException;

@Service
public class RoleService {

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private UserRepository userRepository;

    public List<Role> getRolesByUserId(UUID id) {
        Optional<User> userOptional = userRepository.findById(id);
        
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            return user.getRoles();
        } else {
            throw new ResourceNotFoundException("User not found");
        }
    }

    public List<Role> getAllRoles() {
        return roleRepository.findAll();
    }

    public Optional<Role> getRoleById(UUID id) {
        return roleRepository.findById(id);
    }

    public Optional<Role> findRoleByName(String name) {
        return roleRepository.findRoleByName(name);
    }

    public Role createRole(Role role) {
        return roleRepository.save(role);
    }

    public Role updateRole(Role role) {
        return roleRepository.save(role);
    }

    public Role saveRole(Role role) {
        return roleRepository.save(role);
    }

    public void deleteRole(UUID id) {
        roleRepository.deleteById(id);
    }

    public void assignRoleToUser(UUID userId, UUID roleId) {
        Optional<User> userOptional = userRepository.findById(userId);
        Optional<Role> roleOptional = roleRepository.findById(roleId);

        if (userOptional.isPresent() && roleOptional.isPresent()) {
            User user = userOptional.get();
            Role role = roleOptional.get();
            user.getRoles().add(role);
            userRepository.save(user);
        } else {
            throw new EntityNotFoundException("User or role not found");
        }
    }

    public void removeRoleFromUser(UUID userId, UUID roleId) {
        Optional<User> userOptional = userRepository.findById(userId);
        Optional<Role> roleOptional = roleRepository.findById(roleId);

        if (userOptional.isPresent() && roleOptional.isPresent()) {
            User user = userOptional.get();
            Role role = roleOptional.get();
            user.getRoles().remove(role);
            userRepository.save(user);
        } else {
            throw new EntityNotFoundException("User or role not found");
        }
    }
    
    
}
