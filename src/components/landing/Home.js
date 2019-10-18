import React, { Component, Fragment } from "react";
import Hero from "./Hero/Hero";
import How from "./How/How";
import Footer from "./Footer/Footer";
import Authenticated from "../reusable/HOC/Authenticated";
class Home extends Component {
	render() {
		return (
			<Fragment>
				<Hero browser={this.props.browser} />
				<How />
				<Footer />
			</Fragment>
		);
	}
}

export default Authenticated(Home);
