import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Recipes } from "../components/Recipes/Recipes";

export const HomePage = () => {
  return (
    <>
      <Header />
      <Outlet />
        <Recipes />
    </>
  );
};
