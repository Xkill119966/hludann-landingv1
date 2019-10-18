import React, { Fragment } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import MessengerCustomerChat from "react-messenger-customer-chat";
import Home from "./components/landing/Home";
import Authenticated from "./components/reusable/HOC/Authenticated";
import ModalManager from "./components/reusable/modalManager/modalManager";
import NotFound from "./components/NotFound";
import AuthContainer from "./components/authentication/Authentication";
import { trackGoogleAnalytics } from "./services/ga/ga";

class Routes extends React.Component {
	componentDidMount = () => {
		window.ga("create", "", "auto");
	};

	render() {
		trackGoogleAnalytics(this.props.location);

		return (
			<Fragment>
				<ModalManager />

				<Switch>
					<Route exact component={Home} path="/" />
					<Route component={AuthContainer} path="/auth" />
					<Route path="*" component={NotFound} />
				</Switch>

				<MessengerCustomerChat
					pageId="104206604325154"
					appId="1689005164569276"
					htmlRef=""
				/>
			</Fragment>
		);
	}
}

export default withRouter(Routes);
