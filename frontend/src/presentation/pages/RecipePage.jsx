import { Recipe } from "../components/Recipe/Recipe";
import ScrollToTop from "react-scroll-to-top";

export const RecipePage = () => {
  return (
    <>
      <Recipe />
      <ScrollToTop smooth />
    </>
  );
};
