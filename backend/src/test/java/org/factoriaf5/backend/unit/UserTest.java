package org.factoriaf5.backend.unit;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.factoriaf5.backend.persistence.users.User;
import org.junit.jupiter.api.Test;

public class UserTest {

    @Test
    public void testGetName() {
        User user = new User();
        user.setName("Test Name");
        assertEquals("Test Name", user.getName());
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
        User user = new User("Test Name", "Test Email", "Test Password");
        assertEquals("Test Name", user.getName());
        assertEquals("Test Email", user.getEmail());
        assertEquals("Test Password", user.getPassword());
    }
    
}
