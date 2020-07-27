import React from 'react';

const Contact = () => (
	<div className="contact">
		<div className="contact-body">
			<h4>Contact me</h4>
			<h2>Send me a Message!</h2>
			<div className="form">
				<div class="contact-input">
					<input type="text" name="" id="" placeholder="Name" />
				</div>
				<div class="contact-input">
					<input type="text" name="" id="" placeholder="Email" />
				</div>
				<div class="contact-input">
					<textarea rows="20" placeholder="Type a message" />
				</div>
				<div className="button">
					<button className="btn-submit">Say Hello</button>
				</div>
			</div>
		</div>
	</div>
);
export default Contact;
