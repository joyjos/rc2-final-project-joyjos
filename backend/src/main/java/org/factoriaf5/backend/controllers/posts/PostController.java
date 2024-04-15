package org.factoriaf5.backend.controllers.posts;

import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.factoriaf5.backend.services.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.bind.annotation.PostMapping;

@RestController
@RequestMapping("api/posts")
public class PostController {

    @Autowired
    private PostService postService;

    @GetMapping
    public List<PostResponse> getAllPosts() {
        return postService.getAllPosts();
    }

    @GetMapping("/{id}")
    public ResponseEntity<PostResponse> getPostById(@PathVariable UUID id) {
        Optional<PostResponse> optionalPostResponse = postService.getPostById(id);

        if (optionalPostResponse.isPresent()) {
            return ResponseEntity.ok(optionalPostResponse.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<PostResponse> createPost(@ModelAttribute PostRequest postRequest,
            @RequestParam("file") MultipartFile file) {
        try {
            PostResponse createdPost = postService.createPost(postRequest, file);
            return ResponseEntity.status(HttpStatus.CREATED).body(createdPost);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null); // Datos de entrada incorrectos
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null); // Error al procesar la imagen
        }
    }

    @PatchMapping("/{id}")
    public ResponseEntity<PostResponse> updatePost(@PathVariable UUID id, @ModelAttribute PostRequest postRequest,
            @RequestParam("file") MultipartFile file) {
        Optional<PostResponse> optionalPostResponse = postService.updatePost(id, postRequest, file);

        if (optionalPostResponse.isPresent()) {
            return ResponseEntity.ok(optionalPostResponse.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<PostResponse> deletePost(@PathVariable UUID id) {
        Optional<PostResponse> optionalPostResponse = postService.deletePost(id);

        if (optionalPostResponse.isPresent()) {
            return ResponseEntity.ok(optionalPostResponse.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
