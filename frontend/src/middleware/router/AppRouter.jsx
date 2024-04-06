import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../../presentation/pages/HomePage";
import { RecipePage } from "../../presentation/pages/RecipePage";
import { Layout } from "../../presentation/pages/Layout";
import { BlogPage } from "../../presentation/pages/BlogPage";
import { AdminRouter } from "../../admin/middleware/router/AdminRouter";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/post/:id" element={<RecipePage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Route>
        <Route path="/admin/*" element={<AdminRouter />} />
      </Routes>
    </BrowserRouter>
  );
};