package org.factoriaf5.backend.unit;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.time.LocalDate;

import org.factoriaf5.backend.persistence.posts.Post;
import org.junit.jupiter.api.Test;

public class PostTest {

    @Test
    public void testGetTitle() {
        Post post = new Post();
        post.setTitle("Test Title");
        assertEquals("Test Title", post.getTitle());
    }

    @Test
    public void testGetPost() {
        Post post = new Post();
        post.setPost("Test Post");
        assertEquals("Test Post", post.getPost());
    }

    @Test
    public void testGetImage() {
        Post post = new Post();
        post.setImage("Test Image");
        assertEquals("Test Image", post.getImage());
    }

    @Test
    public void testGetCategory() {
        Post post = new Post();
        post.setCategory("Test Category");
        assertEquals("Test Category", post.getCategory());
    }
    
    @Test
    public void testGetDatePost() {
        LocalDate expectedDate = LocalDate.of(2024, 3, 26);
        Post post = new Post();
        post.setDatePost(expectedDate);
        assertEquals(expectedDate, post.getDatePost());
    }

    @Test
    public void testPostFieldValues() {
        LocalDate expectedDate = LocalDate.of(2024, 3, 26);
        Post post = new Post("Test Post", "This is a test post.", "image.jpg", "Test", expectedDate);
        assertEquals("Test Post", post.getTitle());
        assertEquals("This is a test post.", post.getPost());
        assertEquals("image.jpg", post.getImage());
        assertEquals("Test", post.getCategory());
        assertEquals(expectedDate, post.getDatePost());
    }
}
