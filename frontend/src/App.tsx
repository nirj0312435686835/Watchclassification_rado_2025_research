import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import NotFoundPage from "./components/NotFoundPage";
import AboutPage from "./features/about/AboutPage";
import TeamMemberPage from "./features/about/TeamMemberPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<AboutPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/team/:slug" element={<TeamMemberPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
