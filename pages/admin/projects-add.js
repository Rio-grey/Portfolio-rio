import { useEffect, router } from "../../lib";
// import { projects } from "../../data";
const AdminAddProjectPage = () => {
  // lấy ra dữ liệu của projects trong localStorage
  const projects = JSON.parse(localStorage.getItem("projects")) || [];
  console.log("🚀 ~ AdminAddProjectPage ~ projects", projects);
  useEffect(() => {
    const form = document.getElementById("form-add");
    const projectName = document.querySelector("#project-name");
    form.addEventListener("submit", (e) => {
      // chặn sự kiện reload
      e.preventDefault();
      // thêm phần tử vào mảng projects
      const formData = {
        id: projects.length + 1,
        name: projectName.value,
      };
      projects.push(formData);
      // lưu vào localStorage
      localStorage.setItem("projects", JSON.stringify(projects));
      // chuyển hướng về trang admin/projects
      router.navigate("/admin/projects");
    });
  });
  // Bước 1: render ra form
  return /*html*/ `
    <div class="container">
      <h1>Thêm sản phẩm</h1>
      <form id="form-add">
      <label class="form-label" for="exampleInputEmail1">Tên dự án</label>
      <div class="input-group mb-3">
        <input type="text" class="form-control" id="project-name">
        <button class="btn btn-primary" type="submit">Add</button>
      </div>
      </form>
    </div>
  `;
};

export default AdminAddProjectPage;
