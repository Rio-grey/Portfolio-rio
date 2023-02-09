// import './style.css'
// import javascriptLogo from './javascript.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="/vite.svg" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { render, router } from "./lib";
import HomePage from "./pages/home";
import ProjectsPage from "./pages/projects";
import ContactPage from "./pages/contact";
import BlogPage from "./pages/blog";
import DetailProjectPage from "./pages/detail-project";
import AboutPage from "./pages/about";
import NotFoundPage from "./pages/not-found";
import AdminProjectsPage from "./pages/admin/projects";
import AdminAddProjectPage from "./pages/admin/projects-add";
import AdminEditProjectPage from "./pages/admin/projects-edit";
const app = document.querySelector("#app");
router.on("/", () => render(HomePage, app));
router.on("/about", () => render(AboutPage, app));
router.on("/blog", () => render(BlogPage, app));
router.on("/contact", () => render(ContactPage, app));
router.on("/projects", () => render(ProjectsPage, app));
router.on("/project/:id", (params) =>
  render(() => DetailProjectPage(params), app)
);
// Admin page
router.on("/admin/projects", () => render(AdminProjectsPage, app));
router.on("/admin/projects/add", () => render(AdminAddProjectPage, app));
router.on("/admin/projects/:id/edit", ({ data }) =>
  render(() => AdminEditProjectPage(data), app)
);
router.notFound(() => render(NotFoundPage, app));

router.resolve();
