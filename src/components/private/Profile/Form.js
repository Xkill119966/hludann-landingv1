import React, { Component } from "react";
import TextInput from "../../reusable/forms/inputs/TextInput";
import TextArea from "../../reusable/forms/inputs/TextArea";
import { reduxForm, Field } from "redux-form";
import Select from "../../reusable/forms/inputs/selects/Select";

class Form extends Component {
	state = {
		regions: {
			Kachin: [
				{ label: "hamo", value: "hamo" },
				{ label: "Mansi", value: "Mansi" },
				{ label: "Momauk", value: "Momauk" },
				{ label: "Shwegu", value: "Shwegu" },
				{ label: "Myohla", value: "Myohla" }
			],
			Mon: [
				{ label: "haungzon", value: "haungzon" },
				{ label: "Kyaikmaraw", value: "Kyaikmaraw" },
				{ label: "haungzon", value: "haungzon" },
				{ label: "Mudon", value: "Mudon" },
				{ label: "Thanbyuzayat", value: "Thanbyuzayat" }
			]
		}
	};

	getTownship = region => {};

	render() {
		console.log("approved", this.props.approved);
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
									component={Select}
									name="address.region"
									options={[
										{
											label: "ayeyarwaddy",
											value: "ayeyarwaddy"
										}
									]}
									placeholder="select region"
								/>
							</div>
							<div className="col-md-4">
								<Field
									component={Select}
									name="address.township"
									options={[
										{
											label: "nyaungdone",
											value: "nyaungdone"
										}
									]}
									placeholder="select region"
								/>
							</div>
							<div className="col-md-4">
								<span>Approved</span>
								<input
									className="form-control"
									value={`${this.props.approved ? "true" : "false"}`}
									disabled
								/>
							</div>
						</div>
						<button
							className="btn my-2 py-2"
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
