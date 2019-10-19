import React, { Component, Fragment } from "react";
import Table from "../../reusable/table/Table";
class ClothingTable extends Component {
	render() {
		return (
			<Fragment>
				<div>
					<Table
						tableheads={["DeliveredDate", "Bag", "Volunteer"]}
						rows={[
							{
								DeliveredDate: "01/2/2019",
								Bag: 5,
								Volunteer: "Kyaw Kyaw"
							}
						]}
					/>
				</div>
			</Fragment>
		);
	}
}

export default ClothingTable;
