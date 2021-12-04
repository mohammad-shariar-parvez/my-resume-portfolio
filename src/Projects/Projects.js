import React, { useEffect, useState } from 'react';
import ProjectsIntro from '../ProjectsIntro/ProjectsIntro';
// import url from "../../public/pojects.json"

const Projects = () => {
	const [allProjects, setProjects] = useState([]);

	useEffect(() => {
		fetch('/pojects.json')
			.then(res => res.json())
			.then(data => setProjects(data));
	}, [])


	return (
		<div className="experience-area container-fluid ">
			<h1 class="text-center mb-4">MY Projects</h1>
			<div class="row row-cols-1 row-cols-md-2 g-4 ">


				{
					allProjects.map(project => <ProjectsIntro
						project={project}

					></ProjectsIntro>)
				}
			</div>

		</div>

	);
};

export default Projects;