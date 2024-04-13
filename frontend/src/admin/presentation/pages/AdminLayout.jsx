import { Header } from "../components/Header/Header";
import { Sidebar } from "../components/Sidebar/Sidebar";

export const AdminLayout = () => {

  const location = useLocation();
  return (
    <>
      <Header />
      <Sidebar />
    </>
  );
};
