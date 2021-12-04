import React from 'react';

const AboutMe = () => {
	return (
		<div>
			<div class="row row-cols-1 g-4 container-fluid my-5 ">
				<div class="col b-0">
					<div class="card h-100 border-0">

						<div class="card-body text-start ">
							<h4 class="card-title">Mohammad Shariar Parvez</h4>
							<p class="card-text">I am a 4th year undergraduate student at Software Engineering passionate with Coding and frontend web Technologies</p>
							<div className="d-flex justify-content-between">
								<div>
									<a classNameName="link-className" target="_blank" href="https://github.com/Piaowei/">Github</a> ||

									<a classNameName="link-className" target="_blank" href="https://www.linkedin.com/in/thundertonmoy/">Linkedin</a>
									<p>Email: msptonmoy@gmail.com</p>
								</div>
							</div>
							<small>Phone: +8801842403974</small>
							<br></br>
							<small>Home: Natore Sadar, Natore</small>
							<br></br>
							<br></br>
							<h4>Education</h4>
							<p> <span className="fw-bold"> Hubei University of Technology </span>|| Bachelor of Software Engineering ||	Wuhan, China | 10/2018 - Present</p>
							<div>
								<small>■  Cumulative GPA : 3.75/4.00</small>
								<br></br>
								<small> ■ Campus Ambassador of Bangladesh China Youth Student Association </small>

							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	);
};

export default AboutMe;