import React from 'react';

const Portfolio = () => {
	return (
		<div className="portfolio">
			<h1>Projects</h1>
			<div className="portfolio-projects">
				<div className="jiggle project-card">
					<div className="project-image">
						<img className="eng-image proj-img" src="/images/jiggle-web.jpg" alt="" />
					</div>
					<a href="https://www.jiggle.ng/" target="_blank">
						<div className="project-body hvr-float-shadow  ">
							<div>
								<h2>Jiggle</h2>
								<p>
									Jiggle is an app that makes it easier way for you to make instant payments for your
									bills, shopping items and meals directly on your smartphone.
								</p>
								<div className="view-project">
									<button className="btn">View</button>
								</div>
							</div>
						</div>
					</a>
				</div>
				<div className="spottr project-card">
					<div className="project-image">
						<img src="/images/spottr-image.jpg" alt="" className="eng-image proj-img" />
					</div>
					<a href="https://thespottrapp.com/" target="_blank">
						<div className="project-body hvr-float-shadow ">
							<div>
								<h2>Spottr</h2>
								<p>
									Spottr is a solution that helps you find everyday items; vacancies, events,
									suppliers and customers around you in an amazing way.
								</p>
								<div className="view-project">
									<button className="btn">View</button>
								</div>
							</div>
						</div>
					</a>
				</div>
				<div className="travellabb project-card">
					<div className="project-image">
						<img src="/images/travellab.jpg" alt="" className="eng-image proj-img" />
					</div>
					<a href="https://www.travellab.ng/" target="_blank">
						<div className="project-body hvr-float-shadow ">
							<div>
								<h2>Travellab</h2>
								<p>
									Travel Lab is an emerging online and offline travel agency that proffers travel
									solutions to today’s businesses and leisure travellers.
								</p>
								<div className="view-project">
									<button className="btn">View</button>
								</div>
							</div>
						</div>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
