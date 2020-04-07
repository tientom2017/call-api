import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import ProductList from './components/ProductList/productList';
import routers from './routes';
import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom'

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	renderContentMenu = (routers) => {
		var result = null;

		if (routers && routers.length > 0) {
			result = routers.map((val, index) => {
				return <Route path={val.path} exact={val.exact} component={val.main} />
			})
		}

		return <Switch>{result}</Switch>;
	}

	render() {
		return (
			<Router>
				<div className="App">
					<div className="container">
						<div className="col-xl-12">
							<Menu />
							{this.renderContentMenu(routers)}
						</div>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;