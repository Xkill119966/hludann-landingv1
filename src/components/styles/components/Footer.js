import styled from "styled-components";
import { Link } from "react-router-dom";
export const Footer = styled.footer`
	background: linear-gradient(to right, #43e97b 0%, #38f9d7 100%);
	color: #fff;
	padding: 20px;
`;

export const FooterLink = styled(Link)`
	letter-spacing: 1.3px;
	margin: 10px;
	color: inherit;
	font-size: 12px;
	transition: all 1.3s;
	cursor: pointer;
	&:hover {
		color: black;
	}
`;

export const FooterLinkWrapper = styled.div`
	display: flex;
	flex-direction: column;
	color: #fff;
`;
