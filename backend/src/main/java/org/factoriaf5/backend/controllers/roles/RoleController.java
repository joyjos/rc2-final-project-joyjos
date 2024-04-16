package org.factoriaf5.backend.controllers.roles;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

import org.factoriaf5.backend.persistence.roles.Role;
import org.factoriaf5.backend.services.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.persistence.EntityNotFoundException;

@RestController
@RequestMapping("/api/roles")
public class RoleController {

    @Autowired
    private RoleService roleService;

    @GetMapping
    public ResponseEntity<List<RoleResponse>> getAllRoles() {
        List<Role> roles = roleService.getAllRoles();
        List<RoleResponse> roleResponses = roles.stream().map(RoleResponse::new).collect(Collectors.toList());
        return new ResponseEntity<>(roleResponses, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<RoleResponse> getRoleById(@PathVariable UUID id) {
        Optional<Role> roleOptional = roleService.getRoleById(id);
        if (roleOptional.isPresent()) {
            Role role = roleOptional.get();
            RoleResponse roleResponse = new RoleResponse(role);
            return new ResponseEntity<>(roleResponse, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<RoleResponse> createRole(@RequestBody RoleRequest roleRequest) {
        Role role = new Role();
        role.setName(roleRequest.getName());
        Role savedRole = roleService.saveRole(role);
        RoleResponse roleResponse = new RoleResponse(savedRole);
        return new ResponseEntity<>(roleResponse, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<RoleResponse> updateRole(@PathVariable UUID id, @RequestBody RoleRequest roleRequest) {
        Optional<Role> roleOptional = roleService.getRoleById(id);
        if (roleOptional.isPresent()) {
            Role role = roleOptional.get();
            role.setName(roleRequest.getName());
            Role updatedRole = roleService.saveRole(role);
            RoleResponse roleResponse = new RoleResponse(updatedRole);
            return new ResponseEntity<>(roleResponse, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRole(@PathVariable UUID id) {
        Optional<Role> roleOptional = roleService.getRoleById(id);
        if (roleOptional.isPresent()) {
            roleService.deleteRole(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/name/{name}")
public ResponseEntity<RoleResponse> findRoleByName(@PathVariable String name) {
    Role role = roleService.findRoleByName(name)
            .orElseThrow(() -> new EntityNotFoundException("Role not found with name: " + name));
    RoleResponse roleResponse = new RoleResponse(role);
    return new ResponseEntity<>(roleResponse, HttpStatus.OK);
}

}
