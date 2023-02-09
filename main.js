import { render, router } from "./lib";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import DetailProjectPage from "./pages/detail-project";
import BlogPage from "./pages/blog";
import ProjectsPage from "./pages/projects";
import HomePage from "./pages/home";
import NotFoundPage from "./pages/not-found";
const app = document.querySelector("#app");

router.on("/", () => render(HomePage, app));
router.on("/about", () => render(AboutPage, app));
router.on("/contact", () => render(ContactPage, app));
router.on("/projects", () => render(ProjectsPage, app));
router.on("/project/:id", (params) =>
  render(() => DetailProjectPage(params), app)
);
router.on("/blog", () => render(BlogPage, app));
router.notFound(() => render(NotFoundPage, app));
router.resolve();
