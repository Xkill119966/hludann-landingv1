import React, { Component } from "react";
import TextInput from "../../reusable/forms/inputs/TextInput";
import TextArea from "../../reusable/forms/inputs/TextArea";
import { reduxForm, Field } from "redux-form";

// haungzon
// Kyaikmaraw
// Mawlamyine
// Mudon
// Thanbyuzayat
// Ye
// ['haungzon' , 'Kyaikmaraw' , 'Mawlamyine' , 'Mudon' , 'Thanbyuzayat' , 'Ye' ]
class Form extends Component {
	state = {
		regions: {
			Kachin: [
				"hamo",
				"Mansi",
				"Momauk",
				"Shwegu",
				"Dotphoneyan",
				"Lwegel",
				"Myohla"
			],
			mawlamyine: [
				"haungzon",
				"Kyaikmaraw",
				"Mawlamyine",
				"Mudon",
				"Thanbyuzayat",
				"Ye"
			],
			bago: ["adaung", "Paukkaung", "Paungde", "Pyay", "Shwedaung", "Thegon"]
		}
	};

	getTownship = region => {};

	render() {
		console.log("user12222", this.props.user);
		return (
			<div>
				<form>
					<div className="container my-2 py-2 text-center ">
						<h2 className="text-center display-4">Local User Profile</h2>
						<div className="row">
							<div className="col-md-4">
								<Field
									component={TextInput}
									name="username"
									placeholder="username"
								/>
							</div>
							<div className="col-md-4">
								<Field component={TextInput} name="email" placeholder="email" />
							</div>
							<div className="col-md-4">
								<Field component={TextInput} name="phone" placeholder="phone" />
							</div>{" "}
							<div className="col-md-4">
								<Field component={TextInput} name="nrc" placeholder="nrc" />
							</div>
							<div className="col-md-4">
								<Field
									component={TextArea}
									name="address.line1"
									placeholder="line1"
								/>
							</div>
							<div className="col-md-4">
								<Field
									component={TextArea}
									name="address.line1"
									placeholder="line1"
								/>
							</div>
							<div className="col-md-4">
								<Field
									component={TextArea}
									name="address.line1"
									placeholder="line1"
								/>
							</div>
						</div>
						<button
							className="btn"
							style={{
								backgroundColor: "#43e97b",
								color: "#fff"
							}}
						>
							Edit User Profile
						</button>
					</div>
				</form>
			</div>
		);
	}
}

export default reduxForm({
	form: "local"
})(Form);
