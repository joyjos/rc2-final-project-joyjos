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
    
    
}
