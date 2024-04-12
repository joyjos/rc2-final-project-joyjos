package org.factoriaf5.backend.controllers.posts;

import java.time.LocalDate;
import java.util.UUID;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class PostResponse {
    private UUID id;
    private String title;
    private String post;
    private String image;
    private String category;
    private LocalDate datePost;
}
