import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const NavbarStyle = styled.div`
	background: linear-gradient(to right, #43e97b 0%, #38f9d7 100%);
	position: ${props => (props.isFixed ? "fixed" : "relative")};
	max-height: ${props => (props.isMobile ? "50px" : "60px")};
	z-index: 100;
`;

export const SideNav = styled.div`
	height: 100%; /* 100% Full-height */
	width: ${props =>
		props.clicked ? "260px" : "0"}; /* 0 width - change this with JavaScript */
	position: fixed; /* Stay in place */
	z-index: 103; /* Stay on top */
	top: 0; /* Stay at the top */
	left: 0;
	background: #fff;

	overflow-x: hidden; /* Disable horizontal scroll */
	padding-top: 60px;
	transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
`;
export const SideNavLink = styled(NavLink)`
	color: #fff;
	background-color: #43e97b;
	margin: 12px 0 12px 0;
	padding: 10px;

	a {
		padding: 10px;
		margin: 20px;
		font-weight: bold;
		font-size: 20px;
		transition: all 0.3s;
		letter-spacing: 1px;
		:after {
			background: none repeat scroll 0 0 transparent;
			bottom: -6px;
			content: "";
			display: block;
			height: 2px;
			left: 50%;
			position: absolute;
			background: #fff;
			transition: width 0.3s ease 0s, left 0.3s ease 0s;
			width: 0;
		}

		&:hover:after {
			width: 100%;
			left: 0;
		}
	}

	&:hover {
		list-style: none;
		text-decoration: none;
		color: #fff;
	}
	&.active {
	}
`;
export const NavbarLink = styled(NavLink)`
	color: #fff;
	position: relative;

	a {
		padding: 10px;
		margin: 10px;
		font-weight: bold;
		font-size: 16px;
		transition: all 0.3s;
		letter-spacing: 1px;
		:after {
			background: none repeat scroll 0 0 transparent;
			bottom: -6px;
			content: "";
			display: block;
			height: 2px;
			left: 50%;
			position: absolute;
			background: #fff;
			transition: width 0.3s ease 0s, left 0.3s ease 0s;
			width: 0;
		}

		&:hover:after {
			width: 100%;
			left: 0;
		}
	}

	&:hover {
		list-style: none;
		text-decoration: none;
		color: #fff;
	}
	&.active {
	}
`;

export const NavbarUL = styled.ul`
	display: flex;
	justify-content: flex-end;
	height: 55px;
	align-items: center;
`;
