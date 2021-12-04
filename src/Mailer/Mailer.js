import emailjs from 'emailjs-com'
import React from 'react';
import './Mailer.css';
const Mailer = () => {

	function sendEmail(e) {
		e.preventDefault();
		emailjs.sendForm('service_1mi8h1k', 'template_70xwgul', e.target,
			"user_SFGtZYvQ0iaB5FOf8lV89"
		).then(res => {
			console.log(res);
		}).catch(err => console.log(err));

	}


	return (
		<div id="email-form" className=" border container-fluid mb-5" style={{ marginTop: "50px", width: '50%', backgroundImage: `url('')` }}>
			<form className=" container-fluid" onSubmit={sendEmail}>
				<label >Name</label>
				<input type="text" name="name" className="form-control" />
				<br />

				<label >Email</label>
				<input type="email" name="user_email" className="form-control" />
				<br />

				<label >Messege</label>
				<textarea name="message" rows="4" className="form-control"></textarea>
				<input type="submit" value="Send" className="form-control  btn btn-primary my-3" />
			</form>
		</div>
	);
};

export default Mailer;