import React, { Component } from "react";
import styles from "./Register.module.css";
import Form from "./RegisterForm";
import { registerUser } from "../../../actions/userActions";
import { connect } from "react-redux";

class Register extends Component {
	submitHandler = data => {
		// console.log("data", data);
		this.props.registerUser(data);
	};
	render() {
		return (
			<div className=" container my-3  shadow">
				<div className={`${styles.formWrapper} row`}>
					<div className={`col-md-6 ${styles.leftRegister}`}>
						<div className={`${styles.leftParagraph}`}>
							<h3 className="text-white">Register Form</h3>
							<span>
								If you want to volunteer as colthing receivers who will
								distribute to rural people. please register here
							</span>
						</div>
					</div>
					<div className={`col-md-6 ${styles.rightRegister}`}>
						<Form submitCallBack={this.submitHandler} />
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
	registerUser
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Register);
