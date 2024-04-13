import { Recipes } from "../components/Recipes/Recipes";
import ScrollToTop from "react-scroll-to-top";

export const HomePage = () => {
  return (
    <>
      <Recipes />
      <ScrollToTop smooth />
    </>
  );
};
