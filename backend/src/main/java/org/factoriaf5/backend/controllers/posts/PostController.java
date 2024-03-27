package org.factoriaf5.backend.controllers.posts;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.factoriaf5.backend.services.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



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
    public ResponseEntity<PostResponse> createPost(@RequestBody PostRequest postRequest) {
        PostResponse createdPost = postService.createPost(postRequest);
        
        return ResponseEntity.status(HttpStatus.CREATED).body(createdPost);
    }
    
    @PatchMapping("/{id}")
    public ResponseEntity<PostResponse> updatePost(@PathVariable UUID id, @RequestBody PostRequest postRequest) {
        Optional<PostResponse> optionalPostResponse = postService.updatePost(id, postRequest);
        
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
