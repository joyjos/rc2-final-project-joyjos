import { Route, Routes } from "react-router-dom";
import { AdminLayout } from '../../presentation/pages/AdminLayout.jsx';
import { DashboardPage } from "../../presentation/pages/DashboardPage.jsx";
import { PostsPage } from '../../presentation/pages/PostsPage';
import { PostPage } from '../../presentation/pages/PostPage';
import { NewPostPage } from "../../presentation/pages/NewPostPage.jsx";
import { LoginPage } from "../../presentation/pages/login/LoginPage.jsx";
import { RegisterPage } from "../../presentation/pages/register/RegisterPage.jsx";
import { UsersPage } from "../../presentation/pages/UsersPage.jsx";

export const AdminRouter = () => {
  return (
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<AdminLayout/>}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/post" element={<NewPostPage />} />
        </Route>
      </Routes>
  );
};
