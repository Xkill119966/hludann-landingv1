import React, { Component } from "react";
import styles from "./Login.module.css";
import Form from "./LoginForm";
class Login extends Component {
	submitHandler = data => {};
	render() {
		return (
			<div className=" container my-3  shadow">
				<div className={`${styles.formWrapper} row`}>
					<div className={`col-md-6 ${styles.leftRegister}`}>
						<div className={`${styles.leftParagraph}`}>
							<h3 className="text-white">Login Form</h3>
							<span>Please login your local volunteer account here</span>
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

export default Login;
