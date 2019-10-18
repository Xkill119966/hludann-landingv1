import React, { Fragment } from "react";

export default function NotFound() {
	return (
		<Fragment>
			<section className="py-3">
				<div className="container">
					<h1>Not Found Page</h1>
					<a href="/">Please go back to home</a>
				</div>
			</section>
		</Fragment>
	);
}
