import { Routes, Route } from "react-router-dom";
import NewsPage from "../pages/News/NewsPage.tsx";
import HomeNews from "../pages/homenews/Home.tsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeNews />} />
      <Route path="/news" element={<NewsPage />} /> 
    </Routes>
  );
};

export default AppRoutes;