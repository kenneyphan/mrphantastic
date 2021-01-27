import React from 'react';
import ReactDOM from 'react-dom';

/*import pages*/
import Homepage from './homepage';
import Music from './music';
import Videos from './videos';
import About from './about';
/*import css*/
import "./homepage.css";

/*import libraries*/
import { 
	BrowserRouter as Router,
	Link,
	NavLink, 
	Route,
	Switch
} from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

class App extends React.Component {
	render() {
		return (
			<section>
				<Router basename="/mrphantastic">
					<nav className="navigation">
						<NavLink to="/" className="links" activeClassName="selected" exact={true}>Home</NavLink>
						<NavLink to="/music" className="links" activeClassName="selected">Music</NavLink>
						<NavLink to="/videos" className="links" activeClassName="selected">Videos</NavLink>
						<NavLink to="/about" className="links" activeClassName="selected">About</NavLink>
					</nav>
					<Switch>
						<Route exact path="/">
							<Homepage />    
						</Route>
						<Route exact path="/music">
							<Music />
						</Route>
						<Route exact path="/videos">
							<Videos />
						</Route>
						<Route exact path="/about">
							<About />
						</Route>
					</Switch>
				</Router>
			</section>
		);
	}
};




ReactDOM.render(
	<App />, 
	document.getElementById('root')
);

export default App;