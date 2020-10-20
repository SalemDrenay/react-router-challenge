import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MyProfile from "./components/MyProfile";
import UserProfile from "./components/UserProfile";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/my-profile">My Profile</Link>
            </li>
            <li>
              <Link to="/user-profile/SalemDrenay">My user profile</Link>
            </li>
            <li>
              <Link to="/user-profile/stellacake">Stella's user profile</Link>
            </li>
            <li>
              <Link to="/user-profile/PolWCS">Pol's user profile</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/my-profile">
            <MyProfile />
          </Route>
          <Route path="/user-profile/:githublogin"
            component={UserProfile}
          />
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}