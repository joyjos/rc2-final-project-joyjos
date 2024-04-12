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

@Getter
@Setter
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
}
