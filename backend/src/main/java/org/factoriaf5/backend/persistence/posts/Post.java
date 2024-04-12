package org.factoriaf5.backend.persistence.posts;

import java.time.LocalDate;
import java.util.UUID;

import org.springframework.boot.context.properties.bind.DefaultValue;

import jakarta.annotation.Nonnull;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.Setter;


@Entity
@Table(name="posts")
public class Post {
    @Id
    @GeneratedValue
    private UUID id;
    @Column(length=45)
    @Nonnull
    private String title;
    @Column(columnDefinition="TEXT")
    @Nonnull
    private String post;
    @Column(length=100)
    @Nonnull
    private String image;
    @Column(length=45)
    @Nonnull
    private String category;
    @Nonnull
    private LocalDate datePost;
    
    

    public Post() {
    }


   


    public Post(String title, String post, String image, String category, LocalDate datePost) {
        this.title = title;
        this.post = post;
        this.image = image;
        this.category = category;
        this.datePost = datePost;
    }

    public void setId(UUID id) {
        this.id = id;
    }


    public void setTitle(String title) {
        this.title = title;
    }


    public void setPost(String post) {
        this.post = post;
    }


    public void setImage(String image) {
        this.image = image;
    }


    public void setCategory(String category) {
        this.category = category;
    }


    public void setDatePost(LocalDate datePost) {
        this.datePost = datePost;
    }


    public UUID getId() {
        return id;
    }


    public String getTitle() {
        return title;
    }


    public String getPost() {
        return post;
    }


    public String getImage() {
        return image;
    }


    public String getCategory() {
        return category;
    }


    public LocalDate getDatePost() {
        return datePost;
    }

    
}
