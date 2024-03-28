import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../../presentation/pages/HomePage";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
            {/* <Route path="" element={<LoginForm />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
