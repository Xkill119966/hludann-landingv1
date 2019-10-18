import React, { Fragment } from "react";
import styles from "./Footer.module.css";
import {
	Footer,
	FooterLinkWrapper,
	FooterLink
} from "../../styles/components/Footer";
import { connect } from "react-redux";

function FooterComp(props) {
	let isMobile = props.browser.orientation === "portrait";
	return (
		<Fragment>
			<Footer>
				<div className="row my-2 py-2">
					<div className="col-md-4 my-1 text-center">
						<FooterLinkWrapper>
							<FooterLink to="/">Terms and Conditions</FooterLink>
							<FooterLink to="/">Donor's Privacy</FooterLink>
							<FooterLink to="/">Traveller's Privacy</FooterLink>
							<FooterLink to="/">Local's Privacy</FooterLink>
						</FooterLinkWrapper>
						{isMobile && <div style={{ borderBottom: "1px solid #fff" }}></div>}
					</div>
					<div className="col-md-4 my-1 text-center">
						<FooterLinkWrapper>
							<FooterLink to="/">Rural Regions</FooterLink>
							<FooterLink to="/">Total Clothings Donated</FooterLink>
							<FooterLink to="/">Policies</FooterLink>
							<FooterLink to="/">Illegal Properties</FooterLink>
						</FooterLinkWrapper>
						{isMobile && <div style={{ borderBottom: "1px solid #fff" }}></div>}
					</div>
					<div className="col-md-4 my-1 text-center">
						<span
							style={{
								fontSize: "14px",
								letterSpacing: "2px",
								textAlign: "center"
							}}
						>
							Hlu Dann is no profit organisation which will solve clothing
							donation solution for rural people in myanmar
						</span>
					</div>
				</div>
			</Footer>

			<div
				style={{
					backgroundColor: "#f4f5f7",
					display: "flex",
					padding: "10px",
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
		</Fragment>
	);
}

const mapStateToProps = state => ({
	browser: state.browser
});

const mapDispatchToProps = {};

export default connect(mapStateToProps)(FooterComp);
