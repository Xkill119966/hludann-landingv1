import React, { Component, Fragment } from "react";
import Form from "./Form";
import { connect } from "react-redux";
import Authenticated from "../../reusable/HOC/Authenticated";

class Profile extends Component {
	submitHandler = data => {
		console.log("data", data);
	};
	render() {
		console.log("user", this.props.user);
		return (
			<Fragment>
				<div>
					<Form
						submitCallback={this.submitHandler}
						user={this.props.user ? this.props.user.user.user_id : null}
					/>
				</div>
			</Fragment>
		);
	}
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default Authenticated(Profile);
