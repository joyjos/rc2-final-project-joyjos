package org.factoriaf5.backend.persistence.posts;

import java.time.LocalDate;
import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@RequiredArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="posts")
public class Post {
    @Id
    @GeneratedValue
    private UUID id;
    @Column(length=45)
    @NonNull private String title;
    @Column(columnDefinition="TEXT")
    @NonNull private String post;
    @Column(length=100)
    @NonNull private String image;
    @Column(length=45)
    @NonNull private String category;
    @NonNull private LocalDate datePost;
}
