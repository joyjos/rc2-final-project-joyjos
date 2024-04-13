import { Header } from "../components/Header/Header";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom"

export const AdminLayout = () => {

  return (
    <>
      <Header />
      <Sidebar />
      <Outlet />
    </>
  );
};
