import { Blog } from "../components/Blog/Blog";
import ScrollToTop from "react-scroll-to-top";

export const BlogPage = () => {
  return (
    <>
      <Blog />
      <ScrollToTop smooth />
    </>
  );
};
