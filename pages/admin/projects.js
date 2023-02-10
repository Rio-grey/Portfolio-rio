import { useEffect, useState } from "../../lib";

const AdminProjectsPage = () => {
  // Bước 1: Khởi tạo biến data và hàm setData, giá trị là 1 mảng rỗng
  const [projects, setProjects] = useState([]);
  // Bước 3: Lấy dữ liệu từ localStorage và gán vào biến data
  useEffect(() => {
    fetch("http://localhost:3000/projects", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setProjects(data));
    // const projects = JSON.parse(localStorage.getItem("projects")) || [];
    // setData(projects);
  }, []); // chạy 1 lần xong dừng
  useEffect(() => {
    // chạy khi thằng return chạy xong
    const btns = document.querySelectorAll(".btn-remove");
    // chức năng remove
    for (let btn of btns) {
      btn.addEventListener("click", function () {
        // lấy id từ data-id của button
        const id = btn.dataset.id;
        fetch(`http://localhost:3000/projects/${id}`, {
          method: "DELETE",
        }).then(() => {
          // Lọc ra các phần tử có id khác với id của button
          const newProjects = projects.filter((project) => project.id != id);
          // gán lại giá trị cho biến data
          setProjects(newProjects);
        });
      });
    }
  });
  // Bước 2: Hiển thị ra ngoài màn hình
  return /*html*/ `
    <div class="p-5">
      <h1 class="mb-5">Quản lý project</h1>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th><a href="/admin/projects/add" class="btn btn-info">Add</a></th>
          </tr>
        </thead>
        <tbody>
          ${projects
            .map((project, index) => {
              return /*html*/ `
              <tr>
                <td>${index + 1}</td>
                <td>${project.name}</td>
                <td width="200">
                  <button class="btn btn-remove btn-danger" data-id=${
                    project.id
                  }>Remove</button>
                  <a href="/admin/projects/${
                    project.id
                  }/edit" class="btn btn-success">Edit</a>
                </td>
              </tr>
            `;
            })
            .join("")}
        </tbody>
      </table>
    </div>  
  `;
};
export default AdminProjectsPage;
