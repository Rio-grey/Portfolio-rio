// import { projects } from "../../data";
import { useEffect, useState } from "../../lib";

const AdminProjectsPage = () => {
  /**
   * Các bước thực hiện:
   * - Bước 1: Thiết lập state
   * - Bước 2: Lấy dữ liệu từ state và hiển thị ra ngoài
   * - Bước 3:
   *  + Sử dụng useEffect
   *  + Lắng nghe sự kiện click vào nút remove
   */
  // Thiết lập state

  // Bước 1: Khởi tạo biến data và hàm setData, giá trị là 1 mảng rỗng
  const [data, setData] = useState([]);
  // Bước 3: Lấy dữ liệu từ localStorage và gán vào biến data
  useEffect(() => {
    fetch("https://reqres.in/api/users", {
      method: "GET",
    })
      .then((response) => response.json())
      .then(({ data }) => setData(data));
    // const projects = JSON.parse(localStorage.getItem("projects")) || [];
    // setData(projects);
  }, []); // chạy 1 lần xong dừng
  useEffect(() => {
    // chạy khi thằng return chạy xong
    const btns = document.querySelectorAll(".btn-remove");
    // chức năng remove
    for (let btn of btns) {
      // lấy id từ data-id của button
      const id = btn.dataset.id;
      btn.addEventListener("click", () => {
        const newProjects = data.filter((project) => project.id != id);
        // Lưu vào localStorage
        localStorage.setItem("projects", JSON.stringify(newProjects));
        // gán lại giá trị cho biến data
        setData(newProjects);
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
          ${data
            .map((project, index) => {
              return /*html*/ `
              <tr>
                <td>${index + 1}</td>
                <td>${project.first_name} ${project.last_name}</td>
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
