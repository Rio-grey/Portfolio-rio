const ProjectInfo = ({ name, teams }) => {
  return /*html*/ `
		<h2>${name}</h2>
		${
      teams
        ? /*html*/ `
						<h2>Teams</h2>
						<ul>
							${teams
                .map((member) => {
                  return `<li>${member.name}</li>`;
                })
                .join("")}
						</ul>
					`
        : ""
    }
  `;
};
export default ProjectInfo;
