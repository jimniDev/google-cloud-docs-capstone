import { HashRouter, Routes, Route } from "react-router";
import { Root } from "./components/Root";
import { HomePage } from "./components/HomePage";
import { SkillsPage } from "./components/SkillsPage";
import { FixPermissionErrorPage } from "./components/FixPermissionErrorPage";
import { GetStartedPage } from "./components/GetStartedPage";
import { SkillLibraryPage } from "./components/SkillLibraryPage";
import { SkillDetailPage } from "./components/SkillDetailPage";
import { SkillOnDocPage } from "./components/SkillOnDocPage";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<HomePage />} />
          <Route path="skills" element={<SkillsPage />} />
          <Route path="skills/library" element={<SkillLibraryPage />} />
          <Route path="skills/detail" element={<SkillDetailPage />} />
          <Route path="skills/on-doc" element={<SkillOnDocPage />} />
          <Route path="fix-permission-error" element={<FixPermissionErrorPage />} />
          <Route path="get-started" element={<GetStartedPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
