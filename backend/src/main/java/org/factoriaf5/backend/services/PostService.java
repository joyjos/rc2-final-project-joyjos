package org.factoriaf5.backend.services;

import java.io.IOException;
import java.io.InputStream;
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
        for (Post post : postsInDataBasePosts) {
            posts.add(new PostResponse(post.getId(), post.getTitle(), post.getPost(), post.getImage(),
                    post.getCategory(), post.getDatePost()));
        }
        return posts;
    }

    public Optional<PostResponse> getPostById(UUID id) {
        Optional<Post> postOpcional = postRepository.findById(id);
        if (postOpcional.isPresent()) {
            Post post = postOpcional.get();
            return Optional.of(new PostResponse(post.getId(), post.getTitle(), post.getPost(), post.getImage(),
                    post.getCategory(), post.getDatePost()));
        }
        return Optional.empty();
    }

    public PostResponse createPost(PostRequest postRequest, MultipartFile image) throws IOException {

        String fileName = UUID.randomUUID().toString() + "_" + image.getOriginalFilename();
        Path path = Paths.get("uploads");
        Files.createDirectories(path);
        Files.copy(image.getInputStream(), path.resolve(fileName));

        Post newPost = new Post(postRequest.getTitle(), postRequest.getPost(), fileName, postRequest.getCategory(),
                LocalDate.now());
        Post savedPost = postRepository.save(newPost);

        return new PostResponse(savedPost.getId(), savedPost.getTitle(), savedPost.getPost(), savedPost.getImage(),
                savedPost.getCategory(), savedPost.getDatePost());
    }

    public Optional<PostResponse> updatePost(UUID id, PostRequest postRequest, MultipartFile image) {
        Optional<Post> optionalPost = postRepository.findById(id);

        if (optionalPost.isPresent()) {
            Post existingPost = optionalPost.get();

            if (postRequest.getTitle() != null) {
                existingPost.setTitle(postRequest.getTitle());
            }
            if (postRequest.getPost() != null) {
                existingPost.setPost(postRequest.getPost());
            }
            if (postRequest.getCategory() != null) {
                existingPost.setCategory(postRequest.getCategory());
            }

            if (image != null) {
                // Eliminar la imagen antigua si existe
                if (existingPost.getImage() != null && Files.exists(Paths.get("uploads", existingPost.getImage()))
                        && Files.isRegularFile(Paths.get("uploads", existingPost.getImage()))) {
                    Path path = Paths.get("uploads", existingPost.getImage());
                    try {
                        Files.delete(path);
                    } catch (IOException e) {
                        throw new RuntimeException("Error al eliminar la imagen antigua", e);
                    }
                }

                // Guardar la nueva imagen
                String newImage = UUID.randomUUID().toString() + "_" + image.getOriginalFilename();
                Path path = Paths.get("uploads", newImage);
                try (InputStream inputStream = image.getInputStream()) {
                    Files.copy(inputStream, path);
                } catch (IOException e) {
                    throw new RuntimeException("Error al guardar la nueva imagen", e);
                }

                // Actualizar la referencia de la imagen en el post
                existingPost.setImage(newImage);
            }

            // Guardar los cambios en la base de datos
            Post updatedPost = postRepository.save(existingPost);

            // Devolver el post actualizado como respuesta
            return Optional.of(new PostResponse(updatedPost.getId(), updatedPost.getTitle(), updatedPost.getPost(),
                    updatedPost.getImage(), updatedPost.getCategory(), updatedPost.getDatePost()));
        }

        return Optional.empty();
    }

    public Optional<PostResponse> deletePost(UUID id) {
        Optional<Post> optionalPost = postRepository.findById(id);

        if (optionalPost.isPresent()) {
            Post postToDelete = optionalPost.get();

            // Obtener la referencia de la imagen asociada al post
            String imageFileName = postToDelete.getImage();

            // Eliminar el post de la base de datos
            postRepository.delete(postToDelete);

            // Verificar y eliminar la imagen asociada si existe
            if (imageFileName != null && Files.exists(Paths.get("uploads", imageFileName))
                    && Files.isRegularFile(Paths.get("uploads", imageFileName))) {
                try {
                    Files.delete(Paths.get("uploads", imageFileName));
                } catch (IOException e) {
                    throw new RuntimeException("Error al eliminar la imagen asociada al post", e);
                }
            }

            // Devolver la respuesta del post eliminado
            return Optional.of(new PostResponse(postToDelete.getId(), postToDelete.getTitle(), postToDelete.getPost(),
                    postToDelete.getImage(), postToDelete.getCategory(), postToDelete.getDatePost()));
        }

        return Optional.empty();
    }

}
