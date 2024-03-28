import { createContext, useState, useEffect } from 'react';
import { PostService } from '../../services/PostService';

const PostContext = createContext();

export const usePostContext = () => useContext(PostContext);

export const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      const fetchPosts = async () => {
        const postService = new PostService();
        const postsData = await postService.showPosts();
        setPosts(postsData);
      };
      fetchPosts();
    }, []);

    return (
        <PostContext.Provider value={{ posts }}>
          {children}
        </PostContext.Provider>
      );
    };

    export { PostContext };