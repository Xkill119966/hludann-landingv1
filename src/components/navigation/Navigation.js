import React, { Component, Fragment } from "react";
import {
	NavbarStyle,
	NavbarLink,
	NavbarUL,
	SideNav,
	SideNavLink
} from "../styles/components/Navbar";

import Authenticated from "../reusable/HOC/Authenticated";

class Navigation extends Component {
	state = {
		clicked: false
	};
	componentDidMount = () => {};
	changeClicked = () => {
		this.setState(prevState => {
			return {
				clicked: !prevState.clicked
			};
		});
	};
	renderNavBar = () => {
		let isMobile = this.props.browser.orientation === "portrait";

		if (!isMobile) {
			return (
				<NavbarUL>
					<a
						href="/"
						className="mr-auto"
						style={{
							fontWeight: "bold",
							letterSpacing: "3px",
							color: "#fff",
							fontSize: "30px"
						}}
					>
						Hlu Dann
					</a>
					<NavbarLink to="/">
						<a>Our Mission</a>
					</NavbarLink>

					<NavbarLink to="/">
						<a>Team</a>
					</NavbarLink>
					<NavbarLink to="/">
						<a>About Hlu Dann</a>
					</NavbarLink>

					<NavbarLink
						to="/auth"
						className="btn"
						style={{
							backgroundColor: "#43e97b"
						}}
					>
						Local Account
					</NavbarLink>
					<div className="d-flex my-3">
						<a
							target="_blank"
							href="https://www.facebook.com/Hlu-Dann-%E1%80%9C%E1%80%BE%E1%80%B0%E1%80%92%E1%80%AB%E1%80%94%E1%80%BA%E1%80%B8-104206604325154/"
						>
							<i
								class="fab fa-facebook mx-2"
								style={{
									fontSize: "20px",
									color: "#fff"
								}}
							></i>
						</a>
						<a
							target="_blank"
							href="https://www.facebook.com/Hlu-Dann-%E1%80%9C%E1%80%BE%E1%80%B0%E1%80%92%E1%80%AB%E1%80%94%E1%80%BA%E1%80%B8-104206604325154/"
						>
							<i
								class="fab fa-youtube mx-2"
								style={{
									fontSize: "20px",
									color: "#fff"
								}}
							></i>
						</a>
					</div>
				</NavbarUL>
			);
		} else {
			return (
				<NavbarUL>
					<h3
						className="mr-auto"
						style={{
							fontWeight: "bold",
							letterSpacing: "3px",
							color: "#fff"
						}}
					>
						Hlu Dann
					</h3>
					<i
						className={!this.state.clicked ? `fa fa-bars` : `fas fa-times`}
						onClick={this.changeClicked}
						style={{
							cursor: "pointer",
							fontSize: "35px",
							color: "#fff"
						}}
					></i>

					<SideNav clicked={this.state.clicked}>
						<div
							style={{
								display: "flex",

								flexDirection: "column",
								justifyContent: "flex-start",
								height: "100%",
								alignItems: "center"
							}}
						>
							<SideNavLink>
								<a>Our Mission</a>
							</SideNavLink>
							<SideNavLink to="/">
								<a>Team</a>
							</SideNavLink>
							<SideNavLink>
								<a>About HluDann</a>
							</SideNavLink>

							<SideNavLink
								to="/auth"
								className="btn"
								style={{
									backgroundColor: "#43e97b"
								}}
							>
								Local Account
							</SideNavLink>
							<div className="d-flex my-3">
								<i
									class="fab fa-facebook mx-2"
									style={{
										fontSize: "37px",
										color: "#43e97b"
									}}
								></i>
								<i
									class="fab fa-youtube mx-2"
									style={{
										fontSize: "37px",
										color: "#43e97b"
									}}
								></i>
							</div>
							<div className="d-flex flex-column text-center">
								<span
									style={{
										fontWeight: "bold",
										fontSize: "18px",
										color: "#43e97b",
										letterSpacing: "2px"
									}}
								>
									09 775775639
								</span>
								<span
									style={{
										fontWeight: "bold",
										fontSize: "18px",
										color: "#43e97b",
										letterSpacing: "2px"
									}}
								>
									hello@hludann.com
								</span>
							</div>
						</div>
					</SideNav>
				</NavbarUL>
			);
		}
	};
	render() {
		return (
			<Fragment>
				<NavbarStyle
					className="shadow-sm container-fluid"
					isFixed={this.props.isFixed}
				>
					{this.renderNavBar()}
				</NavbarStyle>
			</Fragment>
		);
	}
}

export default Authenticated(Navigation);
