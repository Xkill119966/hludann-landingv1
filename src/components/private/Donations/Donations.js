import React, { Component, Fragment } from "react";
import Image from "./img/undraw_complete_task_u2c3.svg";
import Select from "react-select";

const donations = [
	{
		approxi_date: "21-2-2019",
		traveller_id: "Mg Mg",
		traveller_phone: "09 775775639",
		bag: {
			total: 3,
			items: [
				{
					category: "WOMEN",
					type: "SHIRT",
					qty: 2
				},
				{
					category: "MEN",
					type: "PANTS",
					qty: 1
				}
			]
		}
	},
	{
		approxi_date: "21-2-2019",
		traveller_id: "Mg Mg",
		traveller_phone: "09 775775639",
		bag: {
			total: 3,
			items: [
				{
					category: "WOMEN",
					type: "SHIRT",
					qty: 2
				},
				{
					category: "MEN",
					type: "PANTS",
					qty: 1
				}
			]
		}
	},
	{
		approxi_date: "21-2-2019",
		traveller_id: "Mg Mg",
		traveller_phone: "09 775775639",
		bag: {
			total: 3,
			items: [
				{
					category: "WOMEN",
					type: "SHIRT",
					qty: 2
				},
				{
					category: "MEN",
					type: "PANTS",
					qty: 1
				}
			]
		}
	}
];
class Donations extends Component {
	state = {};

	renderDonationsInside = () => {
		if (donations.length > 0) {
			return donations.map(donation => {
				return (
					<div className="col-md-12 ">
						<div class="card mb-3 ">
							<div class="card-header my-2">
								<div className="row">
									<div className="col-md-3 col-sm-12 my-2">
										<span className="font-weight-bold ">
											Approximate Arrival :
										</span>{" "}
									</div>
									<div className="col-md-3 col-sm-12 my-2">
										<span
											className="my-2 font-weight-bold"
											style={{
												backgroundColor: "#43e97b",
												padding: "14px",
												borderRadius: "10px",
												color: "#fff"
											}}
										>
											{donation.approxi_date}
										</span>
									</div>
									<div className="col-md-3 col-sm-12 my-2">
										<span
											className="my-2 font-weight-bold"
											// style={{
											// 	backgroundColor: "#43e97b",
											// 	padding: "14px",
											// 	borderRadius: "10px",
											// 	color: "#fff"
											// }}
										>
											Traveller : {donation.traveller_id}
										</span>
									</div>
									<div className="col-md-3">
										<span
											className="my-2 font-weight-bold"
											// style={{
											// 	backgroundColor: "#43e97b",
											// 	padding: "14px",
											// 	borderRadius: "10px",
											// 	color: "#fff"
											// }}
										>
											Phone : {donation.traveller_phone}
										</span>
									</div>
								</div>
							</div>
							<div class="card-body">
								<span
									className="font-weight-bold"
									style={{
										fontSize: "23px"
									}}
								>
									{" "}
									Total Bags : {donation.bag.total}
								</span>
							</div>
							<div class="card-footer">
								<button
									className="btn"
									style={{
										backgroundColor: "#43e97b",
										color: "#fff"
									}}
								>
									Complete Donation
								</button>
							</div>
						</div>
					</div>
				);
			});
		} else {
			return (
				<div className="text-center my-2 py-2 container">
					<h4 className="font-weight-bold">
						There are no donations for your account
					</h4>
					<img
						src={Image}
						style={{
							width: "320px",
							height: "320px",
							objectFit: "cover"
						}}
					/>
				</div>
			);
		}
	};
	renderDonations = () => {
		return (
			<div className="container text-center">
				<div className="my-2 py-2">
					<Select
						options={[
							{
								label: "ENROUTE",
								value: "ENROUTE"
							},
							{
								label: "COMPLETE",
								value: "COMPLETE"
							}
						]}
					/>
				</div>

				{this.renderDonationsInside()}
			</div>
		);
	};

	render() {
		return (
			<Fragment>
				<div className="container">
					<div className="row">{this.renderDonations()}</div>
				</div>
			</Fragment>
		);
	}
}

export default Donations;
