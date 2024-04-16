package org.factoriaf5.backend.persistence.roles;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<Role, UUID> {
    Optional<Role> findRoleByName(String name);
}
