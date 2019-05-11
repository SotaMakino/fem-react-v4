import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import Results from "./Results.jsx";
import Details from "./Details.jsx";
import SearchParams from "./SearchParams.jsx";

class App extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">
          <h1>Adopt Me!</h1>
        </Link>
        <Router>
          <Results path="/" />
          <Details path="/details/:id" />
          <SearchParams path="/search-params" />
        </Router>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
