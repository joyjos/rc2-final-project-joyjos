package org.factoriaf5.backend.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.factoriaf5.backend.controllers.users.UserResponse;
import org.factoriaf5.backend.persistence.users.User;
import org.factoriaf5.backend.persistence.users.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    
    @Autowired
    private UserRepository userRepository;

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
}
