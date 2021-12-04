import React from 'react';
import './Home.css'
import me from '../images/my-bg one.png'
import { Link, NavLink } from 'react-router-dom';
import Mailer from '../Mailer/Mailer';
import Projects from '../Projects/Projects';

const Home = () => {
	return (
		<div>


			<div className="top-banner  row container-fluid  p-4">

				<div className="  col-12 col-md-6  ">
					<h2> <span className="orrange-className">Mohammad Shariar Parvez</span></h2>
					<h3>Junior Front-end Web Developer</h3>
					<p>Hi, I am a 4th year undergraduate student at Software Engineering passionate with Coding and frontend web Technologies</p>

					<button className="btn btn-primary text-white"><a className="text-white text-decoration-none" target="_blank"
						href="https://drive.google.com/file/d/1KZK-n91usPf_pPhQCGgRg2mMmmYOL9o1/view?usp=sharing">My
						Resume</a>
					</button>
				</div>
				{/* <div className="half-width col-md-5 col-12 ms-md-0 ms-3  "> */}
				<div className=" col-12 col-md-4 img-fluid  mt-3 ms-auto ">
					<img className="img-fluid ms-auto " src={me} alt="" />
				</div>

			</div>



			<Projects></Projects>
			<br />
			<br />
			<h2>Contact Me</h2>
			<Mailer></Mailer>
		</div>
	);
};

export default Home;