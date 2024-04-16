package org.factoriaf5.backend.persistence.roles;

import java.util.List;
import java.util.UUID;

import org.factoriaf5.backend.persistence.users.User;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="roles")
public class Role {
    @Id
    @GeneratedValue
    private UUID id;
    @Column(length=15)
    private String name;

    @ManyToMany(mappedBy = "roles")
    private List<User> users;

    public Role orElseThrow(Object object) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'orElseThrow'");
    }
}
