import { createContext, useState, useEffect } from 'react';
import { PostService } from '../../services/PostService';

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);
    const [savedPost, setSavedPost] = useState(null);
    const [deletedPost, setDeletedPost] = useState(null);

    const postService = new PostService();
  
    useEffect(() => {
      const fetchPosts = async () => {
        try {
          const postsData = await postService.showPosts();
          setPosts(postsData);
        } catch (error) {
          console.error("Error fetching posts:", error);
        }
      };
      fetchPosts();
    }, []);

    const getPostById = async (id) => {
      try {
        const post = await postService.getPostById(id);
        setSelectedPost(post);
      } catch (error) {
        console.error("Error fetching post by id:", error);
      }
    };

    const createPost = async (post) => {
      try {
        const createdPost = await postService.createPost(post);
        setPosts((prevPosts) => [...prevPosts, createdPost]);
        setSelectedPost(createdPost);
        console.log(post)
      } catch (error) {
        console.error("Error creating post", error);
      }
    };

    const updatePost = async (id, updatedPost) => {
      try {
        const savedPost = await postService.updatePost(id, updatedPost);
        setPosts((prevPosts) => prevPosts.map(post => post.id === id ? savedPost : post));
        setSavedPost(savedPost);
      } catch (error) {
        console.error("Error saving post", error);
      }
    }

    const deletePost = async (id) => {
      try {
        await postService.deletePost(id);
        setPosts((prevPosts) => prevPosts.filter(post => post.id !== id));
      } catch (error) {
        console.error("Error deleting post", error);
      }
    }

    return (
        <PostContext.Provider value={{ posts, selectedPost, getPostById, createPost, updatePost, deletePost }}>
          {children}
        </PostContext.Provider>
      );
    };