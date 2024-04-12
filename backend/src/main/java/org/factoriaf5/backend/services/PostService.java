package org.factoriaf5.backend.services;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.factoriaf5.backend.controllers.posts.PostRequest;
import org.factoriaf5.backend.controllers.posts.PostResponse;
import org.factoriaf5.backend.persistence.posts.Post;
import org.factoriaf5.backend.persistence.posts.PostRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class PostService {
    
    @Autowired
    private PostRepository postRepository;

    public List<PostResponse> getAllPosts() {
        List<PostResponse> posts = new ArrayList<PostResponse>();
        List<Post> postsInDataBasePosts = postRepository.findAll();
        for(Post post: postsInDataBasePosts) {
            posts.add(new PostResponse(post.getId(), post.getTitle(), post.getPost(), post.getImage(), post.getCategory(), post.getDatePost()));
        }
        return posts;
    }

    public Optional<PostResponse> getPostById(UUID id) {
        Optional<Post> postOpcional = postRepository.findById(id);
        if(postOpcional.isPresent()) {
            Post post = postOpcional.get();
            return Optional.of(new PostResponse(post.getId(), post.getTitle(), post.getPost(), post.getImage(), post.getCategory(), post.getDatePost()));
        }
        return Optional.empty();
    }

    public PostResponse createPost(PostRequest postRequest, MultipartFile image) throws IOException {
        
        String fileName = UUID.randomUUID().toString() + "_" + image.getOriginalFilename();
        Path path = Paths.get("uploads");
        Files.createDirectories(path);
        Files.copy(image.getInputStream(), path.resolve(fileName));

        Post newPost = new Post(postRequest.getTitle(), postRequest.getPost(), fileName, postRequest.getCategory(), LocalDate.now());
        Post savedPost = postRepository.save(newPost);

        return new PostResponse(savedPost.getId(), savedPost.getTitle(), savedPost.getPost(), savedPost.getImage(), savedPost.getCategory(), savedPost.getDatePost());
    }

    public Optional<PostResponse> updatePost(UUID id, PostRequest postRequest) {
        Optional<Post> optionalPost = postRepository.findById(id);
        
        if (optionalPost.isPresent()) {
            Post existingPost = optionalPost.get();
            
            if (postRequest.getTitle() != null) {
                existingPost.setTitle(postRequest.getTitle());
            }
            if (postRequest.getPost() != null) {
                existingPost.setPost(postRequest.getPost());
            }
            if (postRequest.getImage() != null) {
                existingPost.setImage(postRequest.getImage());
            }
            if (postRequest.getCategory() != null) {
                existingPost.setCategory(postRequest.getCategory());
            }
            
            Post updatedPost = postRepository.save(existingPost);
            
            return Optional.of(new PostResponse(updatedPost.getId(), updatedPost.getTitle(), updatedPost.getPost(), updatedPost.getImage(), updatedPost.getCategory(), updatedPost.getDatePost()));
        }
        
        return Optional.empty();
    }

    public Optional<PostResponse> deletePost(UUID id) {
        Optional<Post> optionalPost = postRepository.findById(id);
        
        if (optionalPost.isPresent()) {
            Post postToDelete = optionalPost.get();
            postRepository.delete(postToDelete);
            
            return Optional.of(new PostResponse(postToDelete.getId(), postToDelete.getTitle(), postToDelete.getPost(), postToDelete.getImage(), postToDelete.getCategory(), postToDelete.getDatePost()));
        }
        
        return Optional.empty();
    }
}
