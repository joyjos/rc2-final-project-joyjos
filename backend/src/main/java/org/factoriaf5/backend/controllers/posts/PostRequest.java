package org.factoriaf5.backend.controllers.posts;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class PostRequest {
    private String title;
    private String post;
    private String image;
    private String category;
    private LocalDate datePost;
}
