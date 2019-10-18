import React from "react";
import { reduxForm, Field } from "redux-form";
import TextInput from "../../reusable/forms/inputs/TextInput";
function RegisterForm({ handleSubmit, submitCallBack }) {
	return (
		<div className="container my-2 py-2 text-center">
			<form onSubmit={handleSubmit(submitCallBack)}>
				<Field
					component={TextInput}
					name="username"
					placeholder="your name"
					type="text"
				/>
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
				<Field
					component={TextInput}
					name="phone"
					placeholder="your phone"
					type="number"
				/>
				<button
					className="btn"
					style={{
						backgroundColor: "#6ef0a4",
						color: "#fff"
					}}
				>
					Register
				</button>
			</form>
		</div>
	);
}

export default reduxForm({
	form: "register"
})(RegisterForm);
