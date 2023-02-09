import { projects } from "../../data";

const AdminProjectsPage = () => {
  return `<div>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                ${projects
                  .map((project, index) => {
                    return `
                        <tr>
                            <td>${index + 1}</td>
                            <td>${project.name}</td>
                            <td width="150"><button class="btn btn-remove btn-danger">Remove</button></td>
                        </tr>
                    `;
                  })
                  .join("")}
            </tbody>
        </table>
    </div>`;
};

export default AdminProjectsPage;
