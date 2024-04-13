import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../../presentation/pages/HomePage";
import { RecipePage } from "../../presentation/pages/RecipePage";
import { Layout } from "../../presentation/pages/Layout";
import { BlogPage } from "../../presentation/pages/BlogPage";
import { AdminRouter } from "../../admin/middleware/router/AdminRouter";
import { PrivacityPage } from "../../presentation/pages/PrivacityPage";
import { LegalPage } from "../../presentation/pages/LegalPage";
import { CookiesPage } from "../../presentation/pages/CookiesPage";
import { NoFoundPage } from "../../presentation/pages/NoFoundPage";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/post/:id" element={<RecipePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/legal" element={<LegalPage />} />
          <Route path="/privacidad" element={<PrivacityPage />} />
          <Route path="/cookies" element={<CookiesPage />} />
        </Route>
        <Route path="/admin/*" element={<AdminRouter />} />
        <Route path="/*" element={<NoFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};