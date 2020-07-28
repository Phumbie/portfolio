import React from 'react';

const About = () => (
	<div className="about">
		<div className="heading">
			<h2>About Me</h2>
		</div>
		<div className="about-body">
			<div className="left-line">
				<img class="eng-image" src="/images/left-line5.svg" alt="" />
			</div>
			<div className="engineering">
				<div className="engineering-title">
					{/* <div className="engineering-image engine">
            <img className="eng-image" src="/images/coding.svg" alt="code" />
          </div> */}
					<div className="engineering-heading">
						<h1>Engineering</h1>
					</div>
				</div>

				<div className="engineering-content engine">
					<p>
						With my skillset in javaScript, I try as much as possible to make use of best practices and
						develop code bases that are scalable and performant. I can also pick up and learn new tools and
						practices quickly in required environments and integrate them with my workflow. The end-goal for
						me is for the user to have the best experience while using any product I'm involved in.
					</p>
					<h3 class="tools">
						{' '}
						<span>Tools:</span> Vue, Nuxt , React , Vuex, Jest, jQuery, javaScript, EsLint, CSS3, Firebase,
						Netlify
					</h3>
				</div>
			</div>
			<div className="design">
				<div className="design-content engine">
					<p>
						I love good and intuitive designs and my current knowledge in design enables me to collaborate
						well with designers, produce pixel perfect web applications and also evaluate suitable designs
						for development. I am currently enrolled in an Interaction design Sepcialiazation on coursera
						which allows me to be skilled in design principles like rapid prototyping, user research and
						user centered design principles to name a few. I design through code
						<span role="img" aria-label="grin">
							{' '}
							😁
						</span>
					</p>
					<h3 class="tools">
						{' '}
						<span>Tools:</span> Adobe XD, Figma, PhotoShop, Corel Draw, Pen and Paper😉
					</h3>
				</div>
				<div className="design-title">
					{/* <div className="design-image engine">
            <img className="eng-image" src="/images/paint.svg" alt="code" />
          </div> */}
					<div className="design-heading">
						<h1>Design</h1>
					</div>
				</div>
				<div className="right-line">
					<img class="eng-image" src="/images/right-line5.svg" alt="" />
				</div>
			</div>
		</div>
	</div>
);

export default About;
