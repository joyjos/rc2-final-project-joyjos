package org.factoriaf5.backend.unit;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.factoriaf5.backend.persistence.users.User;
import org.junit.jupiter.api.Test;

public class UserTest {

    @Test
    public void testGetFirstName() {
        User user = new User();
        user.setFirstName("Test FirstName");
        assertEquals("Test FirstName", user.getFirstName());
    }

    @Test
    public void testGetLastName() {
        User user = new User();
        user.setLastName("Test LastName");
        assertEquals("Test LastName", user.getLastName());
    }

    @Test
    public void testGetEmail() {
        User user = new User();
        user.setEmail("Test Email");
        assertEquals("Test Email", user.getEmail());
    }

    @Test
    public void testGetPassword() {
        User user = new User();
        user.setPassword("Test Password");
        assertEquals("Test Password", user.getPassword());
    }

    @Test
    public void testUserFieldValues() {
        User user = new User("Test FirstName", "Test LastName", "Test Email", "Test Password");
        assertEquals("Test FirstName", user.getFirstName());
        assertEquals("Test LastName", user.getLastName());
        assertEquals("Test Email", user.getEmail());
        assertEquals("Test Password", user.getPassword());
    }
    
}
