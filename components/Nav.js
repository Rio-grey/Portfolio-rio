import { menus } from "../data";
const Nav = () => {
  return `
      <nav>
        ${menus
          .map((menu) => `<a href="${menu.path}">${menu.name}</a>`)
          .join("")}
      </nav>
  `;
};
export default Nav;
