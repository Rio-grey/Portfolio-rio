import { useEffect, router } from "../../lib";

const AdminAddProjectPage = () => {
  useEffect(() => {
    const form = document.getElementById("form-add");
    const projectName = document.querySelector("#project-name");
    form.addEventListener("submit", (e) => {
      // chặn sự kiện reload
      e.preventDefault();
      // thêm phần tử vào mảng projects
      const formData = {
        name: projectName.value,
      };
      fetch("http://localhost:3000/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // '{'a': '10'}'
      }).then(() => router.navigate("/admin/projects"));
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
