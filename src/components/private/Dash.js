import React, { Component, Fragment } from "react";
import Authenticated from "../reusable/HOC/Authenticated";
import {
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from "reactstrap";
import { connect } from "react-redux";
import Profile from "../private/Profile/Profile";
import { Switch, Route, NavLink } from "react-router-dom";
import Donations from "./Donations/Donations";
import Clothing from "./Clothing/Clothing";
import { logoutUser } from "../../actions/userActions";

class Dash extends Component {
	render() {
		console.log("user", this.props.user);
		return (
			<Fragment>
				<nav
					class="navbar navbar-expand-lg"
					style={{ backgroundColor: "#43e97b" }}
				>
					<a
						class="navbar-brand"
						href="#"
						style={{ color: "#fff", fontSize: "23px" }}
					>
						HLU DANN
					</a>
					<div className="ml-auto">
						<a className="text-white">
							Welcome{" "}
							{/* {`${
								this.props.user
									? this.props.user.userData.user.user_id.username
									: "no name"
							}`} */}
						</a>
						<UncontrolledDropdown nav inNavbar>
							<DropdownToggle nav caret>
								<i
									class="fas fa-user-circle"
									style={{
										fontSize: "26px",
										color: "#fff"
									}}
								></i>
							</DropdownToggle>

							<DropdownMenu right>
								<DropdownItem
									style={{
										cursor: "pointer",
										letterSpacing: "1px"
									}}
									href="/dash/profile"
								>
									Profile
								</DropdownItem>

								<DropdownItem divider />
								<DropdownItem
									style={{
										cursor: "pointer",
										letterSpacing: "1px"
									}}
									onClick={() => {
										this.props.logoutUser();
									}}
								>
									Logout
								</DropdownItem>
							</DropdownMenu>
						</UncontrolledDropdown>
					</div>
				</nav>
				<div>
					<div
						className=" my-2 py-2"
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							flexWrap: "nowrap"
						}}
					>
						<ul class="nav nav-pills">
							<li class="nav-item">
								<NavLink
									className="nav-link "
									to="/dash/donations"
									activeStyle={{
										backgroundColor: "#43e97b"
									}}
								>
									Donations
								</NavLink>
							</li>
							<li class="nav-item">
								<NavLink
									className="nav-link"
									to="/dash/clothing"
									activeStyle={{
										backgroundColor: "#43e97b"
									}}
								>
									Clothing Management
								</NavLink>
							</li>
						</ul>
					</div>

					<Switch>
						<Route path="/dash" exact component={Donations} />
						<Route path="/dash/donations" component={Donations} />
						<Route path="/dash/clothing" component={Clothing} />
						<Route path="/dash/profile" component={Profile} />
					</Switch>
				</div>

				<div style={{ backgroundColor: "#43e97b" }}>
					<div
						style={{
							backgroundColor: "#43e97b",
							display: "flex",
							padding: "10px",
							color: "#fff",
							justifyContent: "center"
						}}
					>
						<span className="mx-2"> &copy; Copyright 2019 HluDann. </span>
						<span>
							Made with <span style={{ color: "#e25555" }}>&#9829;</span> by{" "}
							<a
								href="https://www.facebook.com/profile.php?id=1012194292"
								target="_blank"
							>
								Thuta
							</a>
						</span>
					</div>
				</div>
			</Fragment>
		);
	}
}

const mapStateToProps = state => ({});

const mapDispatchToProps = { logoutUser };

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Authenticated(Dash));
