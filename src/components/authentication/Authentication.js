import React, { Component, Fragment } from "react";
import Footer from "../landing/Footer/Footer";
import Navigation from "../navigation/Navigation";
import { Button, ButtonGroup } from "reactstrap";
import Register from "./Register/Register";
import Login from "./Login/Login";
class Authentication extends Component {
	state = {
		current: "register"
	};

	changeTab = current => {
		this.setState({
			current
		});
	};

	renderForm = () => {
		if (this.state.current === "register") {
			// REGISTER FORM COMPONENT
			return (
				<div>
					<Register />
				</div>
			);
		} else {
			// LOGIN FORM COMPONENT
			return (
				<div>
					<Login />
				</div>
			);
		}
	};

	render() {
		return (
			<Fragment>
				<Navigation isFixed={false} />
				<div style={{}}>
					<div className="my-2 py-2 text-center">
						<ButtonGroup>
							<button
								className="btn mx-2"
								style={{
									backgroundColor: "#6ef0a4",
									color: "#fff"
								}}
								onClick={() => {
									this.changeTab("register");
								}}
							>
								REGISTER
							</button>
							<button
								className="btn mx-2"
								style={{
									backgroundColor: "#6ef0a4",
									color: "#fff"
								}}
								onClick={() => {
									this.changeTab("login");
								}}
							>
								LOGIN
							</button>
						</ButtonGroup>
					</div>
					<div>{this.renderForm()}</div>
				</div>
				<Footer />
			</Fragment>
		);
	}
}

export default Authentication;
