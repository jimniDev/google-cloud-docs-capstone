import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { MainContent } from "./components/MainContent";
import { SkillsPage } from "./components/SkillsPage";
import { FixPermissionErrorPage } from "./components/FixPermissionErrorPage";
import { GetStartedPage } from "./components/GetStartedPage";
import { SkillLibraryPage } from "./components/SkillLibraryPage";
import { SkillDetailPage } from "./components/SkillDetailPage";
import { SkillOnDocPage } from "./components/SkillOnDocPage";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: Root,
      children: [
        { index: true, Component: MainContent },
        { path: "skills", Component: SkillsPage },
        { path: "skills/library", Component: SkillLibraryPage },
        { path: "skills/detail", Component: SkillDetailPage },
        { path: "skills/on-doc", Component: SkillOnDocPage },
        { path: "fix-permission-error", Component: FixPermissionErrorPage },
        { path: "get-started", Component: GetStartedPage },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);
