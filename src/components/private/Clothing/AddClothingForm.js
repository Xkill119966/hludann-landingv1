import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import TextInput from "../../reusable/forms/inputs/TextInput";
import DateInput from "../../reusable/forms/dates/SingleDate";
import moment from "moment";
class AddClothingForm extends Component {
	render() {
		const { handleSubmit, submitCallBack } = this.props;
		return (
			<form onSubmit={handleSubmit(submitCallBack)}>
				<div className="container text-center my-2 py-2">
					<h4 className="display-4">Create Distribution</h4>
					<div className="row">
						<div className="col-md-6">
							<Field
								component={TextInput}
								type="number"
								name="bag"
								placeholder="enter bag number"
							/>
						</div>
						<div className="col-md-6">
							<Field
								component={TextInput}
								type="text"
								name="volunteer"
								placeholder=" enter volunteer"
							/>
						</div>
						<div className="col-md-6">
							<Field
								component={DateInput}
								name="delivered_date"
								format={value => (value ? moment(value) : undefined)}
								normalize={data => data && data.value && data.value.format()}
								isOutsideRange={() => false}
							/>
						</div>
					</div>

					<button
						className="btn my-2 py-2"
						style={{
							color: "#fff",
							backgroundColor: "#43e97b"
						}}
					>
						Add Distrubution
					</button>
				</div>
			</form>
		);
	}
}

export default reduxForm({
	form: "local-donate"
})(AddClothingForm);
