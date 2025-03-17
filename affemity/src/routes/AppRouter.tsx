import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import SkillSelectionPage from "../pages/SkillSelectionPage/SkillSelectionPage";
import PersonalizedPlanPage from "../pages/PersonalizedPlanPage/PersonalizedPlanPage";
import EmailFormPage from "../pages/EmailFormPage/EmailFormPage";

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/skills" element={<SkillSelectionPage />} />
      <Route path="/form" element={<EmailFormPage />} />
      <Route path="/plan" element={<PersonalizedPlanPage />} />
    </Routes>
  </Router>
);

export default AppRouter;
