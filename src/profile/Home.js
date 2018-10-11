import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        {/* <li>
            <Link to="/Forms">Forms</Link>
        </li> */}
        <li>
            <Link to="/about">About</Link>
        </li>
        <li>
            <Link to="/topics">Contact</Link>
        </li>
      </ul>
      <hr/>
        <Route exact path="/" component={Home} />
        {/* <Route path="/Forms" component={Forms} /> */}
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
    </div>
  </Router>
);
const Home = () => (
  <div><center>
    <h2>David Calderwood</h2>
    Welcome to my profile site<br/>
    </center>
  </div>
);
const About = () => (
  <div><center>
    <h2>About</h2>
    This is the place where you do the thing.
    </center>
  </div>
);
const Topics = ({ match }) => (
  <div>
    <h2>Contact</h2>
    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
    <ul>
      <li>
          <Link to={`${match.url}/FAQ`}>FAQ</Link>
      </li>
      <li>
          <Link to={`${match.url}/Contact Information`}>Contact Information</Link>
      </li>
      <li>
          <Link to={`${match.url}/Extra Stuff`}>Extra Stuff</Link>
      </li>
    </ul>
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default BasicExample;