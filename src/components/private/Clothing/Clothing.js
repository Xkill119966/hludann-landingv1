import React, { Component, Fragment } from "react";
import AddClothingForm from "./AddClothingForm";
import ClothingTable from "./ClothingTable";
class Clothing extends Component {
	submitHandler = data => {
		console.log("data", data);
	};
	render() {
		return (
			<Fragment>
				<div>
					<AddClothingForm submitCallBack={this.submitHandler} />
					<ClothingTable />
				</div>
			</Fragment>
		);
	}
}

export default Clothing;
