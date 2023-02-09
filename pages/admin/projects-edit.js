import { useEffect, router } from "../../lib";
// import { projects } from "../../data";
const AdminEditProjectPage = ({ id }) => {
  // lấy ra dữ liệu của projects trong localStorage
  const projects = JSON.parse(localStorage.getItem("projects")) || [];
  // tìm projects theo id
  const currentProject = projects.find((project) => project.id == id);
  useEffect(() => {
    const form = document.getElementById("form-add");
    const projectName = document.querySelector("#project-name");
    form.addEventListener("submit", (e) => {
      // chặn sự kiện reload
      e.preventDefault();
      // Tạo ra project mới
      const formData = {
        id: currentProject.id,
        name: projectName.value,
      };
      const newProjects = projects.map((project) => {
        // nếu project.id == newProject.id thì trả về mảng đã cập nhật phần tử mới
        // ngược lại trả về mảng không cập nhật gì
        return project.id == formData.id ? formData : project;
      });
      // lưu vào localStorage
      localStorage.setItem("projects", JSON.stringify(newProjects));
      // chuyển hướng về trang admin/projects
      router.navigate("/admin/projects");
    });
  });
  if (!currentProject) return null;
  return /*html*/ `
    <div class="container">
      <h1>Sửa sản phẩm</h1>
      <form id="form-add">
        <div class="form-group">
          <label class="form-label" for="exampleInputEmail1">Tên dự án</label>
          <input type="text" class="form-control" id="project-name" value="${currentProject.name}"/>
        </div>
        <button type="submit" class="btn btn-primary">Edit</button>
      </form>
    </div>
  `;
};

export default AdminEditProjectPage;
