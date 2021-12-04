import React from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink, NavHashLink } from 'react-router-hash-link';



const Header = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg  bg-transparent">
				<div className="container-fluid">
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
						aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<NavLink className="nav-link active fs-6 fw-bolder hover-link" aria-current="page" to="/home">Home</NavLink>
							</li>


							<li className="nav-item fs-6 fw-bolder hover-link">
								<a className="nav-link" target="_blank" href="https://drive.google.com/file/d/1KZK-n91usPf_pPhQCGgRg2mMmmYOL9o1/view?usp=sharing">Resume</a>
							</li>


							<li className="nav-item ">
								<NavHashLink as={HashLink} className="nav-link active fs-6 fw-bolder hover-link" aria-current="page" to="/mailer ">Contact</NavHashLink>
							</li>


							<li className="nav-item">
								<NavLink className="nav-link active fs-6 fw-bolder hover-link" aria-current="page" to="/blogs">Blogs</NavLink>
							</li>

							<li className="nav-item">
								<NavLink className="nav-link active fs-6 fw-bolder hover-link" aria-current="page" to="/aboutMe">About Me</NavLink>
							</li>


						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Header;