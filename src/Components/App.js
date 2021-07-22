import "./App.css";
import Home from "./Home";
import TopAnime from "./TopAnime";
import Details from "./Details";
import Search from "./Search";
import UpcomingAnime from "./UpcomingAnime";

import { HashRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/upcoming anime" component={UpcomingAnime} />
        <Route path="/top anime" component={TopAnime} />
        <Route path="/details" component={Details} />
        <Route path="/search" component={Search} />
      </Switch>
    </Router>
  );
};

export default App;
