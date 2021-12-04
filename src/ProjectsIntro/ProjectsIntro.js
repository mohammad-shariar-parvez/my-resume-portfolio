import React from 'react';
import { NavLink } from 'react-router-dom';
import img0 from "../images/assign-12/a1.jpg"

const ProjectsIntro = ({ project }) => {
	return (




		<div className="col bg-transparent">
			<div className="card h-100">
				<img src={project.img0} className="card-img-top" alt="..." />
				<div className="card-body">
					<h4 className="card-title">{project.name}</h4>

					<NavLink exact to={`/productDetails/${project.id}`} ><button className="btn btn-primary" > <span classNameName="fw-bold">Details</span></button></NavLink>
				</div>

			</div>
		</div>








		// <div id="fullstack-experience" className="experience-item   my-3">
		// 	<div classNameName="mt-3 ">
		// 		<img src={project.img1} classNameName="card-img-top" alt="..." />
		// 	</div>
		// 	<h3>{project.name} </h3>
		// 	<sm>Single page React web application which is focused on a Niche website (single product category selling website).
		// 	</sm>
		// 	<div classNameName="d-flex justify-content-between text-decoration-none mt-5">
		// 		<a classNameName="link-className" href="https://bd-headphones-hub.web.app/">Live Site</a>
		// 		<a classNameName="link-className" href="https://github.com/Piaowei/bd-headphones-hub-client-side">Client-Side</a>
		// 		<a classNameName="link-className" href="https://github.com/Piaowei/bd-headphones-hub-client-side">Server-Side</a>
		// 	</div>
		// 	<div classNameName="card-footer border-0  ">
		// 		<NavLink exact to={`/booking/${project.id}`} ><button classNameName="btn btn-primary" > <span classNameName="fw-bold">Details</span></button></NavLink>
		// 	</div>


		// </div>



	);
};

export default ProjectsIntro;