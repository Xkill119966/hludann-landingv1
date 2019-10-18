import React, { Component } from "react";
import styles from "./Hero.module.css";
import { connect } from "react-redux";
import Navigation from "../../navigation/Navigation";
import Fade from "react-reveal/Fade";
import {
	NavbarStyle,
	NavbarLink,
	NavbarUL,
	SideNav,
	SideNavLink
} from "../../styles/components/Navbar";
import { NavLink } from "react-router-dom";

class Hero extends Component {
	state = {
		doc: null
	};

	componentDidMount = () => {};

	renderHero = () => {
		let isMobile = this.props.browser.orientation === "portrait";

		return (
			<header
				className=""
				style={{
					// backgroundImage: `linear-gradient(to right, #43e97b 0%, #38f9d7 100%)`,
					height: "93vh",
					backgroundImage: `url(${"https://images.unsplash.com/photo-1515900959941-d1cce424f5c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9"})`,
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					backgroundPosition: "center",
					objectFit: "cover",
					opacity: "1.4",
					position: "relative"
				}}
			>
				{/* <NavbarStyle className="shadow-sm container-fluid">
					{this.renderNavBar()}
				</NavbarStyle> */}
				<Navigation isFixed={true} />

				<div
					className="container"
					style={{
						display: "flex",
						position: "absolute",
						width: isMobile ? "60%" : "40%",
						backgroundColor: `rgba(0, 0, 0, 0.5)`,
						alignItems: "center",
						justifyContent: "center",
						borderRadius: "5px",
						letterSpacing: "1px",
						height: isMobile ? "400px" : "200px",
						left: " 50%",
						top: " 50%",
						transform: "translate(-50%, -50%)"
					}}
				>
					<div>
						<Fade bottom duration={2000}>
							<h2
								className="display-3 text-center"
								style={{ color: "#fff", letterSpacing: "2px" }}
							>
								Clothing Donation App
							</h2>
							<h5
								className="text-center"
								style={{ color: "#fff", letterSpacing: "1px" }}
							>
								Where Clothing Donors , Travellers , Rural People Meet
							</h5>
						</Fade>
					</div>
				</div>
			</header>
		);
	};

	render() {
		return this.renderHero();
	}
}

const mapStateToProps = state => ({
	// locale: state.locale
});

const mapDispatchToProps = {};

export default Hero;
