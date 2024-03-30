import { createContext, useState, useEffect } from 'react';
import { PostService } from '../../services/PostService';

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);

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

    return (
        <PostContext.Provider value={{ posts, selectedPost, getPostById }}>
          {children}
        </PostContext.Provider>
      );
    };