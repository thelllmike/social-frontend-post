import logo from "./logo.svg";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";

import "./App.css";
import PostViewPage from "./Components/PostViewPage";
import ThemeToggle from "./Components/Theme";
import Comment from "./Components/Comment";
import Login from "./Components/Login";
import Register from "./Components/Register";
import post from "./Components/post";
import editpost from "./Components/editpost";

function App() {
	return (
		<div className='App'>
			<div>
				<Router>
					<Switch>
						<Route exact path='/' component={Login} />
						<Route path='/theme' component={ThemeToggle} />
						
						<Route path='/post' component={post} />
						<Route path='/comment' component={Comment} />
						<Route path='/postpageview' component={PostViewPage} />
						<Route path='/register' component={Register} />
						<Route path='/editpost/:id' component={editpost} />

						{/* <Redirect path='/404' component={PostViewPage} /> */}
					</Switch>
				</Router>
			</div>
		</div>
	);
}

export default App;
