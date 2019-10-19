import React from "react";
import { reduxForm, Field } from "redux-form";
import TextInput from "../../reusable/forms/inputs/TextInput";

const validate = values => {
	const errors = {};
	if (!values.email) {
		errors.email = "userid is required";
	}

	if (!values.password) {
		errors.password = "password is required";
	}

	return errors;
};
function LoginForm({ handleSubmit, submitCallBack }) {
	return (
		<div className="container my-2 py-2 text-center">
			<form onSubmit={handleSubmit(submitCallBack)}>
				<Field
					component={TextInput}
					name="email"
					placeholder="your email"
					type="email"
				/>
				<Field
					component={TextInput}
					name="password"
					placeholder="your password"
					type="password"
				/>

				<button
					className="btn"
					style={{
						backgroundColor: "#6ef0a4",
						color: "#fff"
					}}
				>
					Login
				</button>
			</form>
		</div>
	);
}

export default reduxForm({
	form: "login",
	validate
})(LoginForm);
