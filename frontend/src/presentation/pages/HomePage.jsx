import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Recipe } from "../components/Recipe/Recipe";

export const HomePage = () => {
  return (
    <>
      <Header />
      <Outlet>
        <Recipe />
      </Outlet>
    </>
  );
};
